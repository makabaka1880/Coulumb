# 确保脚本抛出遇到的错误
set -e

# Define variables for the deployment
BUILD_DIR=~/Documents/School-2024/Phys/Coulumb
DIST_DIR="dist"
REPO="git@github.com:makabaka1880/Coulumb.git"
DOMAIN="makabaka1880.xyz"

cd $BUILD_DIR
git init
# Call deploy.sh with arguments
Scripts/commit.sh -b "$BUILD_DIR"
Scripts/deploy.sh -b "$BUILD_DIR" -p "$DIST_DIR" -g "$REPO"