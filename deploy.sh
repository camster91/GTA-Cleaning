#!/bin/bash

# GTA City Cleaning - Deployment Script for Hostinger
# This script builds and prepares the app for Hostinger deployment

echo "🧹 GTA City Cleaning - Build & Deploy Script"
echo "=============================================="

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  Warning: .env file not found. Copying from .env.example..."
    cp .env.example .env
    echo "⚠️  Please update .env with your actual API keys before deploying!"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the frontend
echo "🔨 Building frontend..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist folder not found."
    exit 1
fi

echo "✅ Build successful!"

# Copy necessary files for production
echo "📋 Copying production files..."
cp package.json dist/
cp package-lock.json dist/ 2>/dev/null || true
cp server.js dist/
cp .env dist/ 2>/dev/null || true
cp .htaccess dist/ 2>/dev/null || true

echo ""
echo "🚀 Deployment package ready in ./dist/"
echo ""
echo "Next steps for Hostinger deployment:"
echo "1. Upload all files from ./dist/ to your Hostinger public_html folder"
echo "2. Ensure Node.js is enabled in your Hostinger panel"
echo "3. Set the start command to: node server.js"
echo "4. Update environment variables in Hostinger panel"
echo ""
echo "Or for static hosting only (no form functionality):"
echo "1. Upload only the contents of ./dist/ (excluding server.js)"
echo "2. Ensure .htaccess is uploaded for SPA routing"
echo ""
