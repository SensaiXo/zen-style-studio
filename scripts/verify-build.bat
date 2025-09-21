# Build verification script for Windows
# Run this script to verify your build works correctly

@echo off
echo 🧪 Testing build process...

# Clean previous build
echo 🧹 Cleaning previous builds...
if exist dist\ rmdir /s /q dist\

# Install dependencies
echo 📦 Installing dependencies...
call npm ci

# Lint code
echo 🔍 Linting code...
call npm run lint

# Build the application
echo 🏗️ Building application...
call npm run build

# Verify build output
echo ✅ Verifying build output...
if exist dist\ (
  echo ✅ Build succeeded! Files generated in dist/ directory
  
  # Check for index.html
  if exist dist\index.html (
    echo ✅ index.html exists
  ) else (
    echo ❌ index.html missing from build
    exit /b 1
  )
  
  # Check for JavaScript assets
  dir /b /s dist\*.js > nul 2>&1
  if %ERRORLEVEL% == 0 (
    echo ✅ JavaScript assets exist
  ) else (
    echo ❌ No JavaScript assets found
    exit /b 1
  )
  
  # Check for CSS assets
  dir /b /s dist\*.css > nul 2>&1
  if %ERRORLEVEL% == 0 (
    echo ✅ CSS assets exist
  ) else (
    echo ❌ No CSS assets found
    exit /b 1
  )
) else (
  echo ❌ Build failed or no files generated
  exit /b 1
)

echo 🚀 Build verification complete! Your application is ready to deploy.