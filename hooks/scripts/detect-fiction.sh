#!/bin/bash
# Detect if current directory is a fiction writing project

# Check for chapters directory with .md files
if [ -d "chapters" ] && ls chapters/*.md >/dev/null 2>&1; then
  CHAPTER_COUNT=$(ls chapters/*.md 2>/dev/null | wc -l | tr -d ' ')
  PROJECT_NAME=$(basename "$(pwd)")

  # Try to get project name from README
  if [ -f "README.md" ]; then
    FIRST_LINE=$(head -1 README.md | sed 's/^#* *//')
    if [ -n "$FIRST_LINE" ]; then
      PROJECT_NAME="$FIRST_LINE"
    fi
  fi

  echo "Fiction project: $PROJECT_NAME"
  echo "Chapters: $CHAPTER_COUNT"
  echo "Commands: /fiction:plan, /fiction:review, /fiction:whatnext, /fiction:critique"
  exit 0
fi

# Check for README containing fiction keywords
if [ -f "README.md" ]; then
  if grep -qiE '(chapter|novel|book|manuscript)' README.md 2>/dev/null; then
    PROJECT_NAME=$(head -1 README.md | sed 's/^#* *//')
    echo "Fiction project detected: $PROJECT_NAME"
    echo "Commands: /fiction:plan, /fiction:review, /fiction:whatnext, /fiction:critique"
    exit 0
  fi
fi

# Not a fiction project - exit silently
exit 0
