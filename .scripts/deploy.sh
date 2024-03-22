#!/bin/bash
set -e

echo "Deployment started...."

# Pull the latest version of the app
git pull origin master
echo "New Changes Copied to server!"

echo "Installing Dependencies..."
npm install --yes

echo "Createting Production Build..."
npm run build

echo "deployment finished!"