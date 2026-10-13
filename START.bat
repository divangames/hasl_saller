@echo off
chcp 65001 >nul
setlocal EnableExtensions

cd /d "%~dp0"
set "HASL_PORT=4173"
set "HASL_URL=http://127.0.0.1:%HASL_PORT%/#home"
set "HASL_REPO=https://github.com/divangames/hasl_saller.git"
set "HASL_REPO_SLUG=divangames/hasl_saller"
set "HASL_PAGES=https://divangames.github.io/hasl_saller/"

:menu
cls
echo.
echo  HASL SALE
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
echo %HASL_PAGES%
pause
goto menu

:combined_failed
echo.
echo Операция остановлена из-за ошибки.
pause
goto menu

:start_site
powershell -NoProfile -Command "if (Get-NetTCPConnection -LocalPort %HASL_PORT% -State Listen -ErrorAction SilentlyContinue) { exit 0 } else { exit 1 }"
if not errorlevel 1 goto open_site

where py >nul 2>nul
if not errorlevel 1 (
  set "HASL_PYTHON=py"
) else (
  where python >nul 2>nul
  if errorlevel 1 (
    echo Python не найден. Установите Python и повторите запуск.
    exit /b 1
  )
  set "HASL_PYTHON=python"
)

start "HASL SALE Server" /min cmd /k %HASL_PYTHON% -m http.server %HASL_PORT%
timeout /t 1 /nobreak >nul

:open_site
start "" "%HASL_URL%"
echo Сайт открыт: %HASL_URL%
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
if errorlevel 1 (
  git remote add origin "%HASL_REPO%"
) else (
  git remote set-url origin "%HASL_REPO%"
)
exit /b 0

:commit_changes
call :ensure_git
if errorlevel 1 exit /b 1
set "HASL_MESSAGE="
set /p "HASL_MESSAGE=Сообщение коммита: "
if not defined HASL_MESSAGE set "HASL_MESSAGE=Update HASL SALE"
git add --all
git diff --cached --quiet
if not errorlevel 1 (
  echo Нет изменений для коммита.
  exit /b 0
)
git commit -m "%HASL_MESSAGE%"
exit /b %errorlevel%

:push_changes
call :ensure_git
if errorlevel 1 exit /b 1
echo Синхронизация с GitHub...
git ls-remote --exit-code --heads origin main >nul 2>nul
if not errorlevel 1 (
  git pull --rebase origin main
  if errorlevel 1 (
    echo Не удалось синхронизировать изменения с GitHub.
    echo Проверьте сообщения Git выше и устраните конфликт перед повторной отправкой.
    exit /b 1
  )
)
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
gh workflow run pages.yml --repo "%HASL_REPO_SLUG%" --ref main
if errorlevel 1 exit /b 1
echo Деплой запущен: %HASL_PAGES%
exit /b 0
