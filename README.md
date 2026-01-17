# Fiction Writing Plugin for Claude Code

Write complete novels with Claude. Literary prose, iterative review, and craft-aware feedback.

## What This Is

A complete fiction writing system—from initial concept through final draft. Specialized agents handle different aspects of the craft: architecture, characters, prose, review, editing, continuity, and publishing prep.

This isn't a chatbot that writes generic content. It's a writing partner that understands story structure, character arcs, scene economy, and the difference between good prose and great prose.

## Installation

```bash
claude plugins:add howells/fiction
```

## Quick Start

### New Project

```bash
/fiction:plan        # Design your story's architecture
/fiction:character   # Develop your protagonist
/fiction:outline     # Break into chapters
"Write chapter 1"    # Start writing
```

### Existing Project

```bash
/fiction:load        # Load project into context
/fiction:whatnext    # See what to work on next
```

## Commands

| Command | What It Does |
|---------|--------------|
| `/fiction:load` | Load project into context |
| `/fiction:plan` | Design story architecture (premise, theme, ending) |
| `/fiction:outline` | Create chapter and scene breakdown |
| `/fiction:character` | Develop a character document |
| `/fiction:review` | Review current chapter |
| `/fiction:critique` | Full manuscript review (NYT/New Yorker style) |
| `/fiction:edit` | Line-level editing (spelling, grammar, word echoes) |
| `/fiction:whatnext` | Get ONE clear recommendation for what to do next |
| `/fiction:naming` | Generate and validate book title options |
| `/fiction:cover` | Generate cover art prompts for image generation |
| `/fiction:reconcile` | Update project to current plugin conventions |

## Project Structure

```
/my-novel
├── README.md           # Overview, status, key decisions
├── themes.md           # Central question, thematic content
├── characters/         # Character documents
├── world/              # Setting documents
├── craft/              # Tone guide
└── chapters/           # Chapter files
```

## The Writing Loop

```
Write chapter
    ↓
/fiction:review     # Get feedback
    ↓
Revise
    ↓
Repeat
```

## Full Novel Workflow

```
/fiction:plan          # Architecture
    ↓
/fiction:character     # Key characters
    ↓
/fiction:outline       # Chapter breakdown
    ↓
Write chapters         # The work
    ↓
/fiction:review        # Per-chapter feedback
    ↓
/fiction:edit          # Line-level polish
    ↓
/fiction:critique      # Full manuscript review
    ↓
/fiction:naming        # Finalize title
    ↓
/fiction:cover         # Cover art prompts
```

## Core Principles

The plugin enforces these craft principles:

1. **Story = Character + Change** — Plot is what happens; story is what it means
2. **Scene Economy** — Every scene must do at least two things
3. **Specificity Creates Universality** — Concrete details create resonance
4. **Earned Moments** — Plant before harvest
5. **Trust the Reader** — Show, don't tell. Imply, don't explain
6. **Write for the Ear** — Modern books become audiobooks

## Anchored Constraints

Mark immutable decisions with `## ⚓ Anchored` in any document. Review agents treat these as non-negotiable.

```markdown
## ⚓ Anchored

- The protagonist never learns the truth about her father
- The ending is ambiguous
- No magic system explanations; it stays mysterious
```

## Craft References

14 reference documents guide the writing and review process:

| Problem | Reference |
|---------|-----------|
| Story feels aimless | `story-structure.md` |
| Scene drags | `scene-structure.md` |
| Flat characters | `character.md` |
| Stilted dialogue | `dialogue.md` |
| Prose lacks rhythm | `prose-style.md` |
| Pacing issues | `pacing.md` |
| Weak opening | `openings.md` |
| Unsatisfying ending | `endings.md` |
| Genre expectations | `genre-conventions.md` |
| Common mistakes | `anti-patterns.md` |

## Publishing Prep

### Title Generation

`/fiction:naming` generates title candidates and searches to verify they're not already taken.

### Cover Art

`/fiction:cover` reads your project and produces prompts for image generation (GPT Image 1.5, Midjourney, etc.). Optimized for Kindle dimensions. No text by default—add titles in post-production.

---

## For Nerds

### Agents

14 specialized agents, each tuned for a specific task:

| Agent | Purpose | Model |
|-------|---------|-------|
| `writer` | Literary prose, chapters, scenes | opus |
| `architect` | Story structure, premise, ending | opus |
| `outliner` | Chapter breakdown, scene beats | sonnet |
| `character-developer` | Character documents | opus |
| `chapter-reviewer` | Iterative chapter review | sonnet |
| `editor` | Line-level polish | sonnet |
| `critique` | Full manuscript review | opus |
| `continuity` | Consistency checking | haiku |
| `scene-analyzer` | Scene diagnosis | sonnet |
| `voice-analyzer` | POV/tense consistency | haiku |
| `world-builder` | Settings, systems | sonnet |
| `naming` | Title generation + availability | opus |
| `cover-artist` | Image gen prompts | opus |
| `whatnext` | Project navigation | haiku |

### Large Manuscript Efficiency

For 50k+ word novels, commands like `/fiction:edit all` spawn parallel agents:

| Task | Speedup |
|------|---------|
| Editing all chapters | ~20× for 20 chapters |
| Reviewing all chapters | ~20× |
| Continuity checking | ~3-4× |
| Full critique | ~2-3× |

### Multi-Book Series Structure

```
/my-series
├── README.md
├── series/
│   ├── series-architecture.md  # ⚓ Anchored series constraints
│   ├── characters/
│   └── world/
└── book-1-title/
    ├── progress.md
    └── chapters/
```

### Cross-Reference System

All agents link to relevant craft references and related agents. No orphaned knowledge.

---

**Version:** 1.6.0 — See [CHANGELOG.md](CHANGELOG.md)

**Author:** Daniel Howells

**License:** MIT
