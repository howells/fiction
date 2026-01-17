# Fiction Writing Plugin for Claude Code

Write complete novels with Claude. Literary prose, iterative review, and craft-aware feedback.

## What This Is

A complete fiction writing system—from initial concept through final draft. 14 specialized agents handle different aspects of the craft: architecture, characters, prose, review, editing, continuity, and publishing prep.

This isn't a chatbot that writes generic content. It's a writing partner that understands story structure, character arcs, scene economy, and the difference between good prose and great prose.

## Installation

```bash
claude plugins:add howells/fiction
```

Or clone directly:

```bash
git clone https://github.com/howells/fiction-writing.git ~/.claude/plugins/fiction
```

## Quick Start

### New Project

```bash
# Create project structure
mkdir my-novel && cd my-novel

# Plan the story architecture
/fiction:plan

# Develop your protagonist
/fiction:character

# Break into chapters
/fiction:outline

# Start writing
"Write chapter 1"
```

### Existing Project

```bash
# Load project into context
/fiction:load

# See what to work on
/fiction:whatnext
```

## Commands

| Command | What It Does |
|---------|--------------|
| `/fiction:load` | Load project into context (characters, world, chapters) |
| `/fiction:plan` | Design story architecture (premise, theme, ending) |
| `/fiction:outline` | Create chapter and scene breakdown |
| `/fiction:character` | Develop a character document |
| `/fiction:review` | Review current chapter (iterative feedback) |
| `/fiction:critique` | Full manuscript review (NYT/New Yorker style) |
| `/fiction:edit` | Line-level editing (spelling, grammar, word echoes) |
| `/fiction:whatnext` | Get ONE clear recommendation for what to do next |
| `/fiction:status` | Quick project status |
| `/fiction:continuity` | Check for consistency issues across chapters |
| `/fiction:naming` | Generate and validate book title options |
| `/fiction:cover` | Generate cover art prompts for image generation |
| `/fiction:reconcile` | Audit project against current plugin conventions |

## Agents

Each agent is specialized for a specific task:

| Agent | Purpose | Model |
|-------|---------|-------|
| `writer` | Literary prose, chapters, scenes | opus |
| `architect` | Story structure, premise, ending | opus |
| `outliner` | Chapter breakdown, scene beats | sonnet |
| `character-developer` | Character documents with Want/Need/Lie/Ghost | opus |
| `chapter-reviewer` | Iterative chapter review | sonnet |
| `editor` | Line-level polish (spelling, grammar, echoes) | sonnet |
| `critique` | Full manuscript review | opus |
| `continuity` | Consistency checking across chapters | haiku |
| `scene-analyzer` | Diagnose why a scene isn't working | sonnet |
| `voice-analyzer` | POV/tense consistency | haiku |
| `world-builder` | Settings, systems, locations | sonnet |
| `naming` | Book title generation + availability check | opus |
| `cover-artist` | Image gen prompts (GPT Image 1.5, Midjourney, etc.) | opus |
| `whatnext` | Project navigation | haiku |

## Project Structure

### Standalone Novel

```
/my-novel
├── README.md           # Overview, status, key decisions
├── themes.md           # Central question, thematic content
├── progress.md         # Review state (updated by commands)
├── characters/         # Character documents
├── world/              # Setting documents
├── craft/              # Tone guide
└── chapters/           # Chapter files
```

### Multi-Book Series

```
/my-series
├── README.md           # Series overview
├── series/             # Series-level material
│   ├── series-architecture.md
│   ├── characters/
│   └── world/
└── book-1-title/       # Individual books
    ├── progress.md
    └── chapters/
```

## Core Principles

The plugin enforces these craft principles:

1. **Story = Character + Change** — Plot is what happens; story is what it means
2. **Scene Economy** — Every scene must do at least two things
3. **Specificity Creates Universality** — Concrete details create resonance
4. **Earned Moments** — Plant before harvest
5. **Trust the Reader** — Show, don't tell. Imply, don't explain
6. **Write for the Ear** — Modern books become audiobooks

## Craft References

14 reference documents guide the agents:

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
| Process and mindset | `craft-wisdom.md` |
| Audiobook readiness | `audiobook-considerations.md` |
| Novel vs novella scope | `length-forms.md` |
| Revision process | `revision-editing.md` |

## Workflow

### The Writing Loop

1. Write chapter → 2. `/fiction:review` → 3. Revise → 4. Repeat

### Full Novel Workflow

```
/fiction:plan          # Architecture
    ↓
/fiction:character     # Protagonist, antagonist, key characters
    ↓
/fiction:outline       # Chapter breakdown
    ↓
Write chapters         # The work
    ↓
/fiction:review        # Per-chapter feedback
    ↓
/fiction:continuity    # Consistency check
    ↓
/fiction:edit          # Line-level polish
    ↓
/fiction:critique      # Full manuscript review
    ↓
/fiction:naming        # Finalize title
    ↓
/fiction:cover         # Cover art prompts
```

## Large Manuscript Efficiency

For 50k+ word novels, commands like `/fiction:edit all` use parallel agent deployment:

| Task | Speedup |
|------|---------|
| Editing all chapters | ~20× for 20 chapters |
| Reviewing all chapters | ~20× |
| Continuity checking | ~3-4× |
| Full critique | ~2-3× |

## Publishing Prep

### Title Generation (`/fiction:naming`)

- Generates 8-12 title candidates using proven strategies
- Searches to verify titles aren't already taken
- Rates genre fit and availability

### Cover Art (`/fiction:cover`)

- Reads project content, produces 3-5 cover concepts
- Optimized for Kindle dimensions (2560 × 1600)
- Prompts for GPT Image 1.5, Midjourney V7, Gemini, FLUX.2
- No text by default (add in post-production)

## Anchored Constraints

Mark immutable decisions with `## ⚓ Anchored` in any document. Review agents treat these as non-negotiable—the story must match them, not the other way around.

```markdown
## ⚓ Anchored

- The protagonist never learns the truth about her father
- The ending is ambiguous—we don't know if she survived
- No magic system explanations; it stays mysterious
```

## Version

Current: **1.6.0**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Author

Daniel Howells — [github.com/howells](https://github.com/howells)

## License

MIT
