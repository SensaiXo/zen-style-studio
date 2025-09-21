:: Build verification script for Windows
:: Run this script to verify your build works correctly

@echo off
echo 🧪 Testing build process...

:: Clean previous build
echo 🧹 Cleaning previous builds...
if exist dist\ rmdir /s /q dist\

:: Install dependencies
echo 📦 Installing dependencies...
call npm ci

:: Lint code
echo 🔍 Linting code...
call npm run lint

:: Build the application
echo 🏗️ Building application...
call npm run build

:: Verify build output
echo ✅ Verifying build output...
if not exist dist\ (
    echo ❌ Build failed or no files generated
    exit /b 1
)

if not exist dist\index.html (
    echo ❌ index.html not found in build output
    exit /b 1
)

:: Check for common build errors in output files if possible
:: This is a placeholder for more specific checks
findstr /i "error" dist\assets\*.js
if %errorlevel% == 0 (
    echo ⚠️ Potential errors found in built JS files.
)

echo ✨ Build verification successful!
exit /b 0