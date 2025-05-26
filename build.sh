#!/bin/bash
set -e

echo "Starting build process..."

# Install dependencies
npm install

# Make vite executable
chmod +x node_modules/.bin/vite

# Run build
node_modules/.bin/vite build

echo "Build completed successfully!" 