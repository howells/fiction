---
description: Generate book cover art prompts for image generation models. Reads project content and produces optimized prompts for Kindle-dimension covers.
---

Generate cover art prompts for your book using the cover-artist agent.

## What This Does

1. Reads your project materials (README, themes, characters, world, tone)
2. Synthesizes the story's visual essence
3. Produces 3-5 distinct cover concepts as image generation prompts
4. Optimizes for Kindle dimensions (2560 × 1600, aspect ratio 1.6:1)
5. No text by default—designed for post-production title overlay

## Usage

```
/fiction:cover                    # Generate cover prompts for current project
/fiction:cover /path/to/project   # Generate for specific project
```

## Output

For each concept, you'll receive:
- **Approach** — The visual strategy
- **Prompt** — Ready to paste into Midjourney, DALL-E, or other generators
- **Why it works** — Genre signals and design rationale
- **Variations** — Style/mood alternatives

## Prompt Compatibility

Prompts are optimized for:
- **Midjourney V7** — Use `--ar 5:8` for Kindle proportions
- **DALL-E 3** — Specify dimensions in prompt
- **Stable Diffusion** — Works with standard prompt structure
- **Other generators** — Adapt aspect ratio parameters as needed

## Design Philosophy

The agent prioritizes:
- **Symbolic over literal** — Evoke the feeling, don't illustrate the plot
- **Cut-through** — Stand out in crowded genre thumbnails
- **Genre signals** — Honor conventions while avoiding clichés
- **Thumbnail test** — Readable at 80px width
- **Title space** — Negative space in upper third for text overlay

## After Generation

1. Generate images with your preferred AI tool
2. Select the strongest result
3. Add title and author name in a design tool (Canva, Photoshop, etc.)
4. Test at thumbnail size
5. Upload to KDP

## When to Use

- Final stages of manuscript completion
- Before submitting to beta readers (motivational)
- Marketing preparation
- Series branding exploration
