@echo off
cd /d "%~dp0"
echo ==============================
echo   Actualizando portafolio web
echo ==============================
echo.
python scripts\generar_desde_excel.py
if %errorlevel% equ 0 (
    echo.
    echo  Listo. Los HTML fueron actualizados.
) else (
    echo.
    echo  Error. Lee el mensaje de arriba.
)
echo.
pause
