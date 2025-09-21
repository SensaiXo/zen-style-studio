#!/bin/bash
# This script builds and verifies your application

# Exit on error
set -e

echo "🧪 Testing build process..."

# Clean previous build
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Lint code
echo "🔍 Linting code..."
npm run lint

# Build the application
echo "🏗️ Building application..."
npm run build

# Verify build output
echo "✅ Verifying build output..."
if [ -d "dist" ] && [ "$(find dist -type f | wc -l)" -gt 0 ]; then
  echo "✅ Build succeeded! Files generated in dist/ directory"
  
  # Check for index.html
  if [ -f "dist/index.html" ]; then
    echo "✅ index.html exists"
  else
    echo "❌ index.html missing from build"
    exit 1
  fi
  
  # Check for JavaScript assets
  if [ "$(find dist -name "*.js" | wc -l)" -gt 0 ]; then
    echo "✅ JavaScript assets exist"
  else
    echo "❌ No JavaScript assets found"
    exit 1
  fi
  
  # Check for CSS assets
  if [ "$(find dist -name "*.css" | wc -l)" -gt 0 ]; then
    echo "✅ CSS assets exist"
  else
    echo "❌ No CSS assets found"
    exit 1
  fi
else
  echo "❌ Build failed or no files generated"
  exit 1
fi

echo "🚀 Build verification complete! Your application is ready to deploy."