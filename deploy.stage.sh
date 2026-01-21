#!/bin/bash

# Ensure we are in the project root
cd "$(dirname "$0")"

# Load environment variables
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

echo "Building Next.js application..."
npm run build

echo "Deploying to Azure Blob Storage..."
node scripts/deploy.mjs
