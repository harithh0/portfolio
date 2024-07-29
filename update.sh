#!/bin/sh

# Check if a commit message is provided
if [ -z "$1" ]; then
  echo "Usage: $0 \"commit message\""
  exit 1
fi

# Add all changes
git add -A

# Commit changes with the provided message
git commit -m "$1"

git push --set-upstream origin master



# Optional: Push changes to the remote repository
# git push

echo "Changes have been committed with message: $1"
