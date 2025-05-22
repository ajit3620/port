#!/bin/bash

# Create skills directory if it doesn't exist
mkdir -p public/skills

# List of icons to download
ICONS=(
  "python"
  "java"
  "javascript"
  "redis"
  "amazonaws"
  "googlecloud"
  "docker"
  "kubernetes"
  "terraform"
  "circleci"
  "ubuntu"
  "cplusplus"
  "r"
  "nodedotjs"
  "jenkins"
  "git"
  "mysql"
  "postgresql"
  "mongodb"
  "django"
  "express"
  "react"
  "angular"
  "vuedotjs"
  "nextdotjs"
  "spring"
  "flask"
  "nginx"
  "springboot"
)

# Download each icon
for icon in "${ICONS[@]}"; do
  echo "Downloading $icon icon..."
  curl -o "public/skills/${icon}.svg" "https://cdn.simpleicons.org/${icon}"
done

echo "All icons downloaded successfully!" 