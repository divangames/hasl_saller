@echo off
chcp 65001 >nul
setlocal EnableExtensions

cd /d "%~dp0"
set "OUTMAX_PORT=4173"
set "OUTMAX_URL=http://127.0.0.1:%OUTMAX_PORT%/#home"
set "OUTMAX_REPO=https://github.com/divangames/out_saller.git"
set "OUTMAX_PAGES=https://divangames.github.io/out_saller/"

:menu
cls
echo.
echo  OUTMAX SALE
echo  ===============================
echo  1. Запуск
echo  2. Коммит
echo  3. Пуш
echo  4. Деплой на GitHub Pages
echo  5. Коммит + Пуш + Деплой
echo  Q. Выход
echo.
choice /c 12345Q /n /m "Выберите действие: "
if errorlevel 6 exit /b 0
if errorlevel 5 goto commit_push_deploy
if errorlevel 4 goto deploy
if errorlevel 3 goto push
if errorlevel 2 goto commit
if errorlevel 1 goto launch

:launch
call :start_site
pause
goto menu

:commit
call :commit_changes
pause
goto menu

:push
call :push_changes
pause
goto menu

:deploy
call :deploy_pages
pause
goto menu

:commit_push_deploy
call :commit_changes
if errorlevel 1 goto combined_failed
call :push_changes
if errorlevel 1 goto combined_failed
call :deploy_pages
if errorlevel 1 goto combined_failed
echo.
echo Готово: изменения отправлены, деплой запущен.
echo %OUTMAX_PAGES%
pause
goto menu

:combined_failed
echo.
echo Операция остановлена из-за ошибки.
pause
goto menu

:start_site
powershell -NoProfile -Command "if (Get-NetTCPConnection -LocalPort %OUTMAX_PORT% -State Listen -ErrorAction SilentlyContinue) { exit 0 } else { exit 1 }"
if not errorlevel 1 goto open_site

where py >nul 2>nul
if not errorlevel 1 (
  set "OUTMAX_PYTHON=py"
) else (
  where python >nul 2>nul
  if errorlevel 1 (
    echo Python не найден. Установите Python и повторите запуск.
    exit /b 1
  )
  set "OUTMAX_PYTHON=python"
)

start "OUTMAX SALE Server" /min cmd /k %OUTMAX_PYTHON% -m http.server %OUTMAX_PORT%
timeout /t 1 /nobreak >nul

:open_site
start "" "%OUTMAX_URL%"
echo Сайт открыт: %OUTMAX_URL%
exit /b 0

:ensure_git
where git >nul 2>nul
if errorlevel 1 (
  echo Git не найден.
  exit /b 1
)
if not exist ".git" (
  git init -b main
  if errorlevel 1 exit /b 1
)
git remote get-url origin >nul 2>nul
if errorlevel 1 git remote add origin "%OUTMAX_REPO%"
exit /b 0

:commit_changes
call :ensure_git
if errorlevel 1 exit /b 1
set "OUTMAX_MESSAGE="
set /p "OUTMAX_MESSAGE=Сообщение коммита: "
if not defined OUTMAX_MESSAGE set "OUTMAX_MESSAGE=Update OUTMAX SALE prototype"
git add --all
git diff --cached --quiet
if not errorlevel 1 (
  echo Нет изменений для коммита.
  exit /b 0
)
git commit -m "%OUTMAX_MESSAGE%"
exit /b %errorlevel%

:push_changes
call :ensure_git
if errorlevel 1 exit /b 1
git push -u origin main
exit /b %errorlevel%

:deploy_pages
where gh >nul 2>nul
if errorlevel 1 (
  echo GitHub CLI не найден. Установите gh и выполните gh auth login.
  exit /b 1
)
gh auth status >nul 2>nul
if errorlevel 1 (
  echo GitHub CLI не авторизован. Выполните gh auth login.
  exit /b 1
)
gh workflow run pages.yml --ref main
if errorlevel 1 exit /b 1
echo Деплой запущен: %OUTMAX_PAGES%
exit /b 0
