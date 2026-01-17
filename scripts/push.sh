#!/bin/sh
# Push to origin and create GitHub release for any new tags

set -e

PLUGIN_JSON=".claude-plugin/plugin.json"

# Get current version
version=$(grep -o '"version": "[^"]*"' "$PLUGIN_JSON" | head -1 | cut -d'"' -f4)

# Push to origin with tags
echo "🚀 Pushing to origin..."
git push origin main --tags

# Check if release exists for this version
if ! gh release view "v$version" >/dev/null 2>&1; then
  echo "📦 Creating GitHub release v$version..."

  # Extract changelog section for this version (if exists)
  if [ -f "CHANGELOG.md" ]; then
    notes=$(awk "/^## \[$version\]/{flag=1; next} /^## \[/{flag=0} flag" CHANGELOG.md)
  fi

  if [ -n "$notes" ]; then
    # Use curated changelog notes
    echo "$notes" | gh release create "v$version" --title "v$version" --notes-file -
  else
    # Fall back to auto-generated notes from commits
    gh release create "v$version" --title "v$version" --generate-notes
  fi

  echo "✓ Created release v$version"
else
  echo "ℹ️  Release v$version already exists"
fi
