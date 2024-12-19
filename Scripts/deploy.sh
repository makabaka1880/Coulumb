#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# Initialize variables
DIST_BUILD_DIR=""
DIST_DIR=""
REPO_URL=""
CUSTOM_DOMAIN=""
ADD_CNAME=false

# Parse flags
while getopts "b:p:g:c:" flag; do
  case "${flag}" in
    p) DIST_DIR="${OPTARG}" ;;              # Path to build assets
    b) DIST_BUILD_DIR="${OPTARG}" ;;       # Path to build directory
    g) REPO_URL="${OPTARG}" ;;              # Git repository URL
    c) CUSTOM_DOMAIN="${OPTARG}"           # Custom domain (if passed, set ADD_CNAME=true)
       ADD_CNAME=true ;;
    *) 
       echo "Usage: deploy.sh -pb <path to build> -p <path to build assets> -g <git repo> [-c <custom domain>]"
       exit 1 ;;
  esac
done

# Validate required arguments
if [ -z "$DIST_BUILD_DIR" ] || [ -z "$DIST_DIR" ] || [ -z "$REPO_URL" ]; then
  echo "Error: Missing required arguments."
  echo "Usage: deploy.sh -pb <path to build> -p <path to build assets> -g <git repo> [-c <custom domain>]"
  exit 1
fi

# Navigate to the build directory
cd "$DIST_BUILD_DIR"

rm -rf dist
# Generate static files
npm run build -- --base /Comedian/

# Enter the generated folder
cd "$DIST_DIR"

# Optionally add CNAME file for custom domain
if [ "$ADD_CNAME" = true ]; then
  touch CNAME
  echo "$CUSTOM_DOMAIN" > CNAME
fi

# Initialize git and push to the specified branch
git init
git remote add origin "$REPO_URL"
git add -A
echo "ready to deploy"
git commit -m 'deploy'
git branch deploy
git checkout deploy

# Force push to the repository
git push -f origin deploy

cd -
