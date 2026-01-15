---
name: fiction-writing
description: Use when writing fiction prose, crafting stories, developing characters, structuring scenes, or improving narrative craft. Covers novels, novellas, short stories, and flash fiction.
---

# Fiction Writing

A complete system for writing fiction—from initial concept through final draft.

## Commands

| Command | What it does |
|---------|--------------|
| `/plan` | Design story architecture (premise, theme, ending) |
| `/outline` | Create chapter and scene breakdown |
| `/character` | Develop a character document |
| `/review` | Review current chapter (iterative feedback) |
| `/critique` | Full manuscript review (NYT/New Yorker style) |
| `/whatnext` | See project status and next steps |
| `/status` | Quick project status |

## Natural Language

Beyond commands, just say what you need:

- "Write chapter 8"
- "Continue from where we left off"
- "This scene isn't working—help me fix it"
- "Develop the antagonist's backstory"
- "Check this chapter for consistency issues"

## Craft Reference

For craft guidance, see the reference files:

| Problem | Reference |
|---------|-----------|
| Story feels aimless | [story-structure.md](references/story-structure.md) |
| Scene drags | [scene-structure.md](references/scene-structure.md) |
| Flat characters | [character.md](references/character.md) |
| Stilted dialogue | [dialogue.md](references/dialogue.md) |
| Prose lacks rhythm | [prose-style.md](references/prose-style.md) |
| Pacing issues | [pacing.md](references/pacing.md) |
| Weak opening | [openings.md](references/openings.md) |
| Unsatisfying ending | [endings.md](references/endings.md) |
| Genre expectations | [genre-conventions.md](references/genre-conventions.md) |
| Common mistakes | [anti-patterns.md](references/anti-patterns.md) |

## Project Structure

The plugin expects projects to follow this structure:

### Standalone Novel

```
/my-novel
├── README.md           # Overview, status, key decisions
├── characters/         # Character documents
├── world/              # Setting documents
├── craft/              # Tone guide
├── chapters/           # Chapter files
└── themes.md           # Theme document
```

### Multi-Book Series

```
/my-series
├── README.md           # Series overview
├── series/             # Series-level material
│   ├── characters/
│   ├── world/
│   └── ...
└── book-n-title/       # Individual books
    └── chapters/
```

Copy from `templates/` to start a new project.

## Core Principles

1. **Story = Character + Change** — Plot is what happens; story is what it means.
2. **Scene Economy** — Every scene must do at least two things.
3. **Specificity Creates Universality** — Concrete details create resonance.
4. **Earned Moments** — Plant before you harvest.
5. **Trust the Reader** — Show, don't tell. Imply, don't explain.

## Decision Guides

### Choosing POV
- **First person**: Deep intimacy, unreliable narrator possible
- **Third limited**: Balance of intimacy and flexibility, most common
- **Third omniscient**: God's-eye view, good for epic scope

### Choosing Tense
- **Past tense**: Traditional, invisible, readers expect it
- **Present tense**: Immediacy, urgency

### When to Summarize vs. Scene
- **Scene**: Crucial moments, turning points, high emotion
- **Summary**: Routine events, transitions
- **Rule**: If it matters, show it.

## Getting Started

**New project:**
1. Copy from `templates/standalone-novel/` or `templates/series/`
2. Fill in README with project details
3. Then:
```
/plan
/character
/outline
```

**Existing project:**
```
/whatnext
```

**Ready to write:**
```
Write chapter 1
/review
```
