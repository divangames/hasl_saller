@echo off
chcp 65001 >nul
setlocal EnableExtensions DisableDelayedExpansion
cd /d "%~dp0"
set "HASL_REPO=https://github.com/divangames/hasl_saller.git"
set "HASL_REPO_SLUG=divangames/hasl_saller"
set "HASL_PAGES=https://divangames.github.io/hasl_saller/"
if /I "%~2"=="--no-open" set "HASL_SKIP_BROWSER=1"
if /I "%~1"=="--launch" goto launch_once

:menu
cls
echo.
echo  HASL / ХАСЛ
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
if errorlevel 5 goto combined
if errorlevel 4 goto deploy
if errorlevel 3 goto push
if errorlevel 2 goto commit
if errorlevel 1 goto launch

:launch
call :start_site
pause
goto menu

:launch_once
call :start_site
exit /b %errorlevel%

:start_site
if defined HASL_SKIP_BROWSER (
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\start-local.ps1" -NoOpen
) else (
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\start-local.ps1"
)
exit /b %errorlevel%

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

:combined
call :commit_changes
if errorlevel 1 goto failed
call :push_changes
if errorlevel 1 goto failed
call :deploy_pages
if errorlevel 1 goto failed
echo Готово: %HASL_PAGES%
pause
goto menu

:failed
echo Операция остановлена из-за ошибки. Проверьте сообщения выше.
pause
goto menu

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
if errorlevel 1 exit /b 1
git remote set-url --push origin "%HASL_REPO%"
exit /b %errorlevel%

:commit_changes
call :ensure_git
if errorlevel 1 exit /b 1
set "HASL_MESSAGE="
set /p "HASL_MESSAGE=Сообщение коммита: "
if not defined HASL_MESSAGE set "HASL_MESSAGE=Update HASL storefront"
git add --all
if errorlevel 1 exit /b 1
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
for /f "delims=" %%B in ('git branch --show-current') do set "HASL_BRANCH=%%B"
if not "%HASL_BRANCH%"=="main" (
  echo Публикация выполняется из main. Текущая ветка: %HASL_BRANCH%
  exit /b 1
)
git fetch origin main
if errorlevel 1 exit /b 1
git merge --ff-only origin/main
if errorlevel 1 (
  echo Ветки разошлись. Объедините изменения перед публикацией.
  exit /b 1
)
git push -u origin main
exit /b %errorlevel%

:deploy_pages
where gh >nul 2>nul
if errorlevel 1 (
  echo Установите GitHub CLI и выполните gh auth login.
  exit /b 1
)
gh auth status >nul 2>nul
if errorlevel 1 (
  echo Выполните gh auth login.
  exit /b 1
)
gh workflow run pages.yml --repo "%HASL_REPO_SLUG%" --ref main
if errorlevel 1 exit /b 1
echo Деплой запущен: %HASL_PAGES%
exit /b 0
