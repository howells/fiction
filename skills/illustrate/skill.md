---
name: illustrate
description: Generate consistent chapter illustrations using motif series. Creates a visual style from the cover, builds character references, then generates one illustration per chapter with consistent styling.
---

Generate consistent illustrations for your book using the motif CLI's series feature.

## What This Does

1. Extracts a visual style from your cover (or helps you define one)
2. Creates a motif series with that style locked in
3. Generates character and location reference sheets
4. Plans which scene to illustrate from each chapter
5. Generates illustrations with consistent styling across the entire book

## Prerequisites

- **motif CLI** installed and configured (`FAL_KEY` set)
- Chapters written (at least in draft)
- Character documents in `characters/`
- Ideally, a cover in `covers/`

## Usage

```
/fiction:illustrate                  # Full workflow: style → refs → plan → generate
/fiction:illustrate plan             # Just create the scene plan (no generation)
/fiction:illustrate refs             # Just generate character/location references
/fiction:illustrate chapter 3        # Generate illustration for a specific chapter
/fiction:illustrate all              # Generate all planned illustrations
```

## How It Works

### Style Locking

The illustrator reads your cover image and story materials, then creates a motif series:

```bash
motif series create "my-book" --from covers/cover.png --style "watercolor children's book..."
```

Every subsequent generation in this series automatically:
- Prepends the style prompt (so every image matches)
- Includes reference images (so characters look the same)
- Saves to the series history (so you can track what was generated)

### Character References

Before generating chapter illustrations, the system creates reference images for each major character. These are added to the motif series with tags:

```bash
motif series ref-add "my-book" luna-front.png --tag character --description "Luna front view"
```

When generating, you select which refs to include:

```bash
motif series gen "my-book" "Luna discovers a glowing mushroom" --refs character,location
```

### Scene Selection

The illustrator reads each chapter and selects the single most powerful visual moment. It favors:
- Emotional peaks over action sequences
- Discovery and wonder over conflict
- Moments that complement the text (show what words can't)

### Cost Awareness

Every generation shows estimated cost before running. The illustrator always uses `--dry-run` first. Typical costs:
- Character reference: ~$0.15 per image
- Location reference: ~$0.15 per image
- Chapter illustration: ~$0.15 per image
- Full book (10 chapters + refs): ~$3-5 total

## Output

Creates an `illustrations/` directory in your project:

```
illustrations/
├── style.md           ← Visual style decisions
├── scene-plan.md      ← Scene selection rationale
└── chapters/          ← Final illustrations
    ├── 01-opening.png
    ├── 02-discovery.png
    └── ...
```

## Motif Series Commands

The illustrator uses these motif commands under the hood:

```bash
motif series create <name>           # Create a styled series
motif series ref-add <slug> <img>    # Add character/location reference
motif series gen <slug> "prompt"     # Generate with style + refs
motif series show <slug>             # View series state
motif series history <slug>          # View generation history
```

## When to Use

- After your manuscript is at least in draft form
- After you have a cover (or a clear visual direction)
- Before building your EPUB (illustrations can be included)
- For children's picture books, chapter books, or any illustrated fiction

## Tips

- **Start with the cover.** The cover establishes the visual vocabulary.
- **Generate character refs before chapter illustrations.** Consistency requires references.
- **One illustration per chapter** is standard for chapter books.
- **Don't illustrate every scene.** Choose the moment that adds the most to the reading experience.
- **Review at thumbnail size.** If the illustration doesn't read small, it won't work in an ebook.
