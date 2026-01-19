<p align="center">
  <img src="https://raw.githubusercontent.com/howells/fiction/main/logo.png" alt="Fiction Plugin" width="120">
</p>

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
/fiction:go          # Load project and see what to work on next
```

## Commands

| Command | What It Does |
|---------|--------------|
| `/fiction:go` | Resume a project (load context + suggest what to do next) |
| `/fiction:new` | Start a new fiction project from scratch |
| `/fiction:plan` | Design story architecture (premise, theme, ending) |
| `/fiction:outline` | Create chapter and scene breakdown |
| `/fiction:character` | Develop a character document |
| `/fiction:review` | Review current chapter |
| `/fiction:critique` | Full manuscript review (NYT/New Yorker style) |
| `/fiction:synopsis` | Generate synopsis (short/medium/long) |
| `/fiction:edit` | Line-level editing (spelling, grammar, word echoes) |
| `/fiction:naming` | Generate and validate book title options |
| `/fiction:cover` | Generate cover art prompts for image generation |
| `/fiction:build` | Build EPUB from your manuscript |
| `/fiction:reconcile` | Update project to current plugin conventions |
| `/fiction:next` | Get suggestion for what to work on next |

## Project Structure

```
/my-novel
├── README.md           # Overview, status, key decisions
├── progress.md         # Session tracking, continuity state
├── themes.md           # Central question, thematic content
├── characters/         # Character documents
├── world/              # Setting documents
├── craft/              # Tone guide
├── chapters/           # Chapter files
├── critiques/          # Saved critiques
├── synopses/           # Saved synopses
├── builds/             # EPUB builds
└── covers/             # Cover art iterations
```

## Recommended Workflow

Fiction writing isn't linear—it's iterative. Here's how to use the plugin effectively:

### Phase 1: Foundation

Start with `/fiction:new` for a guided project setup, or build manually:

```bash
/fiction:plan          # Define premise, theme, ending, tone
/fiction:character     # Develop protagonist and key characters
/fiction:outline       # Break into chapters with scene beats
```

**Don't skip this.** A weak foundation creates problems that compound with every chapter. Know your ending before you start writing.

### Phase 2: First Draft

Write chapters one at a time. After each chapter:

```bash
"Write chapter 3"      # Write the chapter
/fiction:review        # Get craft-focused feedback
# Revise based on feedback
/fiction:review        # Review again if needed
```

The review → revise → review loop is where the real work happens. Don't move on until a chapter is solid.

### Phase 3: Polish

Once all chapters are drafted:

```bash
/fiction:edit          # Line-level editing (all chapters)
/fiction:review        # Re-review after edits
```

The editor catches spelling, grammar, word echoes, and awkward phrasing. Review again afterward—editing can introduce new issues.

### Phase 4: Manuscript Review

When the full draft is complete:

```bash
/fiction:critique      # Full manuscript critique (NYT/New Yorker style)
```

This is a comprehensive review of the entire work: structure, character arcs, themes, pacing, prose quality. Use it to identify what needs revision before calling the manuscript done.

### Phase 5: Publishing Prep

When the manuscript is final:

```bash
/fiction:synopsis      # Generate query letter synopses
/fiction:naming        # Find the right title
/fiction:cover         # Generate cover art prompts
/fiction:build         # Export to EPUB
```

### The Short Version

```
/fiction:new or /fiction:plan
         ↓
    Foundation work (characters, outline)
         ↓
┌──→ Write chapter
│        ↓
│    /fiction:review
│        ↓
└─── Revise (loop until solid)
         ↓
    /fiction:edit (all chapters)
         ↓
    /fiction:critique (full manuscript)
         ↓
    Publishing prep (synopsis, naming, cover, build)
```

### Returning to a Project

```bash
/fiction:go            # Load project and get recommendation for what to do next
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

---

## For Nerds

### Agents

22 specialized agents, each tuned for a specific task:

| Agent | Purpose | Model |
|-------|---------|-------|
| `writer` | Literary prose, chapters, scenes | opus |
| `architect` | Story structure, premise, ending | opus |
| `outliner` | Chapter breakdown, scene beats | sonnet |
| `character-developer` | Character documents | opus |
| `world-builder` | Settings, systems | sonnet |
| `chapter-reviewer` | Iterative chapter review | sonnet |
| `editor` | Line-level polish | sonnet |
| `critique` | Full manuscript review | opus |
| `synopsis` | Synopsis generation (short/medium/long) | opus |
| `continuity` | Consistency checking | haiku |
| `scene-analyzer` | Scene diagnosis | sonnet |
| `voice-analyzer` | POV/tense consistency | sonnet |
| `naming` | Title generation + availability | opus |
| `cover-artist` | Image gen prompts | opus |
| `next` | Project navigation | haiku |
| `new-project` | Interactive project wizard | opus |
| `reader-skim` | Fast fact extraction (parallel) | haiku |
| `reader-careful` | Deep analysis with quotes (parallel) | sonnet |

**Literary Critic Reviewers** (persona-based feedback):

| Agent | Style |
|-------|-------|
| `james-wood` | New Yorker style, craft-focused |
| `stephen-king` | Direct, story-first, hates adverbs |
| `ursula-le-guin` | World-building, moral weight |
| `roxane-gay` | Voice, representation, emotional truth |

### Large Manuscript Efficiency

For 50k+ word novels (10+ chapters), specialized reader agents extract chapter data in parallel:

| Task | Reader | Speedup |
|------|--------|---------|
| Synopsis generation | reader-skim / reader-careful | ~3-4× |
| Full critique | reader-careful | ~3-4× |
| Voice analysis | reader-careful | ~3-4× |
| Editing all chapters | (direct parallel) | ~20× |
| Reviewing all chapters | (direct parallel) | ~20× |
| Continuity checking | (two-phase) | ~3-4× |

Reader agents return structured data that the parent agent synthesizes into final output.

### Multi-Book Series Structure

```
/my-series
├── README.md
├── series/
│   ├── series-architecture.md  # ⚓ Anchored series constraints
│   ├── characters/
│   └── world/
└── book-1-title/
    ├── README.md
    ├── progress.md
    ├── chapters/
    ├── critiques/
    ├── synopses/
    └── builds/
```

### Cross-Reference System

All agents link to relevant craft references and related agents. No orphaned knowledge.

---

**Version:** 1.8.0 — See [CHANGELOG.md](CHANGELOG.md)

**Author:** Daniel Howells

**License:** MIT
