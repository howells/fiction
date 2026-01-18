---
description: Build an EPUB from your fiction project. Compiles chapters, metadata, and optionally a cover image.
---

Build an EPUB file from the current fiction project.

## What This Does

1. Reads project metadata from README.md
2. Compiles all chapters from `chapters/` in order
3. Applies styling from `epub.css` (if present)
4. Includes cover image from `covers/` (if specified)
5. Outputs to `builds/YYYY-MM-DD/project-name-YYYY-MM-DD.epub`
6. Creates `metadata.yaml` alongside the build

## Usage

```
/fiction:build                    # Build epub for current project
/fiction:build --cover cover.png  # Include specific cover image
/fiction:build /path/to/project   # Build specific project
```

## What to Do

### 1. Find Project Root

Look for README.md, chapters/ directory.

### 2. Gather Metadata

Extract from README.md:
- **Title** — Project name (H1 heading)
- **Author** — From frontmatter or infer from git config
- **Description** — From "The Story" section or premise

### 3. Collect Chapters

Read all markdown files from `chapters/` in order:
- Sort by filename (01-chapter.md, 02-chapter.md, etc.)
- Convert markdown to HTML
- Preserve chapter breaks

### 4. Check for Cover

Look in `covers/` for:
- `cover.png` or `cover.jpg` (default)
- Or use `--cover` argument to specify

### 5. Check for Styles

Look for `epub.css` in project root. If present, include in epub.

### 6. Build EPUB

Use pandoc or similar to compile:
```bash
pandoc chapters/*.md \
  -o "builds/$(date +%Y-%m-%d)/project-name-$(date +%Y-%m-%d).epub" \
  --metadata title="Book Title" \
  --metadata author="Author Name" \
  --epub-cover-image=covers/cover.png \
  --css=epub.css
```

### 7. Create Metadata File

Write `builds/YYYY-MM-DD/metadata.yaml`:
```yaml
title: "Book Title"
author: "Author Name"
built: "2026-01-18T21:30:00Z"
chapters: 18
word_count: 75000
cover: "cover.png"
```

### 8. Report Build

Output build summary:
```
## Build Complete

**File:** builds/2026-01-18/project-name-2026-01-18.epub
**Size:** 8.4 MB
**Chapters:** 18
**Word count:** ~75,000

Cover: covers/cover.png included
Styles: epub.css applied

Ready for review or distribution.
```

## Build Directory Structure

```
builds/
├── 2026-01-15/
│   ├── project-name-2026-01-15.epub
│   └── metadata.yaml
└── 2026-01-18/
    ├── project-name-2026-01-18.epub
    └── metadata.yaml
```

Each build is date-stamped, preserving history of versions.

## Covers Directory

```
covers/
├── cover-01-concept.png      # Early iterations
├── cover-02-revised.png      # Refinements
├── cover-final.png           # Selected cover
└── cover.png                 # Symlink or copy of final (used by build)
```

Store all cover iterations. The build uses `cover.png` by default.

## Dependencies

Requires `pandoc` for epub generation:
```bash
brew install pandoc
```

## Tips

- Run `/fiction:build` after completing a draft milestone
- Keep dated builds to track progress
- Test epub in Apple Books, Kindle Previewer, or Calibre
- The `covers/` directory is for iterations; `cover.png` is what gets built

## After Building

- Open in Apple Books to test formatting
- Check chapter breaks and styling
- Verify cover displays correctly
- If syncing to iCloud, builds will be available on all devices
