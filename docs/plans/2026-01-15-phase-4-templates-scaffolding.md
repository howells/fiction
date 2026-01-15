# Phase 4: Templates & Scaffolding

Project templates and reference materials for fiction projects.

## Components

1. `templates/project-structure-guide.md` — Canonical reference (existing)
2. `templates/standalone-novel/` — Reference scaffold for standalone novels
3. `templates/series/` — Reference scaffold for multi-book series
4. Update to SKILL.md — Main skill entry point

**Note:** No `/new-project` command needed. Projects are started rarely—just copy from template folder or ask Claude to scaffold manually when needed.

---

## 1. Project Structure Guide

**File:** `templates/project-structure-guide.md`

This already exists as `references/book-project-structure-guide.md` in the Ivy Fell project. It should be moved to the plugin as the canonical reference.

The guide covers:
- Core principles (one concept per file, atomic structure)
- Folder structure for standalone and series
- Templates for each file type
- Cross-referencing patterns
- Maintenance principles
- Starting a new project steps

**Action:** Copy and adapt from existing guide, placed at `templates/project-structure-guide.md`

---

## 2. Standalone Novel Template

**File:** `templates/standalone-novel/`

A minimal scaffold for a standalone novel.

### Directory Structure

```
templates/standalone-novel/
├── README.md
├── characters/
│   └── README.md
├── world/
│   └── README.md
├── craft/
│   └── tone.md
├── chapters/
│   └── README.md
└── themes.md
```

### README.md

```markdown
# [Project Name]

> [One-sentence premise]

---

## Status

- [ ] Architecture complete
- [ ] Outline complete
- [ ] Characters developed
- [ ] Chapters drafted: 0 of [X]
- [ ] First draft complete
- [ ] Revision complete

---

## The Story

[Synopsis—2-3 paragraphs describing the story without spoiling the ending]

---

## Key Decisions

[Decisions that should be preserved through drafting. Add as you make them.]

1. ...

---

## Structure

| Part | Chapters | Summary |
|------|----------|---------|
| One | 1-X | ... |
| Two | X-Y | ... |
| Three | Y-Z | ... |

---

## Chapters

| Ch | Title | Status | Summary |
|----|-------|--------|---------|
| 1 | ... | Not started | ... |
| 2 | ... | Not started | ... |

---

## Characters

- [[characters/protagonist|Protagonist Name]] — [Brief description]
- [[characters/antagonist|Antagonist Name]] — [Brief description]

---

## Tone & References

See [[craft/tone|Tone Guide]]

Reference points:
- [Work 1] — [What we're taking from it]
- [Work 2] — [What we're taking from it]

---

## Word Count

**Target:** ~[X] words

| Section | Target | Actual |
|---------|--------|--------|
| Part One | X | - |
| Part Two | X | - |
| Part Three | X | - |
| **Total** | **X** | **-** |
```

### characters/README.md

```markdown
# Characters

## Main Characters

| Character | Role | Doc |
|-----------|------|-----|
| [Name] | Protagonist | [[protagonist]] |
| [Name] | Antagonist | [[antagonist]] |

## Supporting Characters

[Add as you develop them]

## Relationship Map

```
[Protagonist] ←——→ [Antagonist]
      |
      ↓
 [Supporting]
```

[Or describe key relationships in prose]
```

### world/README.md

```markdown
# World

## Key Locations

| Location | Doc | Appears In |
|----------|-----|------------|
| [Location] | [[location-name]] | Ch 1, 5, 12 |

## Systems (if applicable)

| System | Doc |
|--------|-----|
| [Magic/Tech/Social system] | [[system-name]] |

## History (if applicable)

| Event | Doc |
|-------|-----|
| [Key historical event] | [[event-name]] |
```

### craft/tone.md

```markdown
# Tone & Craft Guide

## Voice

[How should this story sound? What's the register?]

## POV

**Perspective:** [First / Third Limited / Third Omniscient]

**Tense:** [Past / Present]

**Distance:** [Close / Medium / Distant]

## Tone

[What emotional register? Dark? Light? Dry? Lush?]

## Reference Points

- **[Work 1]** — [What we're taking: the restraint, the pacing, the voice]
- **[Work 2]** — [What we're taking]
- **[Work 3]** — [What we're taking]

## What to Avoid

- [Specific thing to avoid]
- [Another thing]

## Sample Prose

[A paragraph that exemplifies the target voice]
```

### chapters/README.md

```markdown
# Chapters

## Overview

| Ch | Title | Status | POV | Words | Summary |
|----|-------|--------|-----|-------|---------|
| 1 | ... | Not started | ... | ~X | ... |
| 2 | ... | Not started | ... | ~X | ... |

## Chapter Files

Chapters are stored as `[XX]-[title].md` where XX is the chapter number.

Example: `01-arrival.md`, `02-the-show.md`

## Status Key

- **Not started** — No content
- **Outlined** — Beats/structure defined
- **Drafted** — First draft complete
- **Revised** — Revision pass complete
```

### themes.md

```markdown
# Themes

## Central Question

[What question does this story answer?]

## Primary Theme

**[Theme name]**

[How it manifests. What it means. How it resolves.]

## Secondary Themes

**[Theme 2]**
[Brief description]

**[Theme 3]**
[Brief description]

## Thematic Choices

| Chapter | Choice Presented | What Protagonist Chooses |
|---------|------------------|--------------------------|
| [X] | ... | ... |

## What the Story Says

[The answer to the central question. What the story argues.]
```

---

## 3. Series Template

**File:** `templates/series/`

Scaffold for multi-book series.

### Directory Structure

```
templates/series/
├── README.md
├── SERIES-STATUS.md
├── series/
│   ├── README.md
│   ├── series-architecture.md
│   ├── characters/
│   │   └── README.md
│   ├── world/
│   │   └── README.md
│   ├── symbols/
│   │   └── README.md
│   ├── themes/
│   │   └── core-themes.md
│   └── craft/
│       └── tone.md
└── book-1-[title]/
    ├── README.md
    └── chapters/
        └── README.md
```

### README.md (Series Root)

```markdown
# [Series Name]

**A [genre] series**

---

## The Series

| Book | Title | Status |
|------|-------|--------|
| 1 | [[book-1-title/README\|Book Title]] | Not started |
| 2 | [[book-2-title/README\|Book Title]] | Not started |
| 3 | [[book-3-title/README\|Book Title]] | Not started |

---

## The Story (One Sentence)

[The series premise in one sentence]

---

## Project Structure

```
/[series-name]
├── README.md              ← You are here
├── SERIES-STATUS.md       ← Cross-book tracking
├── /series                ← Series-level material
│   ├── series-architecture.md
│   ├── /characters
│   ├── /world
│   ├── /symbols
│   ├── /themes
│   └── /craft
├── /book-1-[title]
│   ├── README.md
│   └── /chapters
└── /book-n-[title]
```

---

## Quick Links

### Series Overview
- [[series/README|Series Overview]]
- [[series/series-architecture|Full Architecture]]

### Characters
- [[series/characters/protagonist|Protagonist]]
- [[series/characters/antagonist|Antagonist]]

### World
- [[series/world/README|World Overview]]

---

## Word Count Targets

| Book | Target |
|------|--------|
| 1 | ~X words |
| 2 | ~X words |
| 3 | ~X words |
| **Total** | **~X words** |

---

## Status

See [[SERIES-STATUS]] for detailed tracking.
```

### SERIES-STATUS.md

```markdown
# Series Status

## Overall Progress

| Component | Status |
|-----------|--------|
| Series architecture | Not started |
| World building | Not started |
| Character docs | 0 complete |
| Book 1 | Not started |
| Book 2 | Not started |
| Book 3 | Not started |

## Book Status

### Book 1: [Title]

- Architecture: Not started
- Outline: Not started
- Chapters: 0 of X drafted

### Book 2: [Title]

- Architecture: Not started
- Outline: Not started
- Chapters: 0 of X drafted

### Book 3: [Title]

- Architecture: Not started
- Outline: Not started
- Chapters: 0 of X drafted

## Current Focus

[What's being worked on now]

## Next Up

[What comes after current focus]
```

### series/README.md

```markdown
# [Series Name] — Series Bible

Quick reference for series-level material.

## One-Sentence Premise

[The series in one sentence]

## Core Mystery/Premise

[What's the central question or mystery of the series?]

## Character Index

| Character | Role | Doc |
|-----------|------|-----|
| [Name] | Protagonist | [[characters/protagonist]] |
| [Name] | Antagonist | [[characters/antagonist]] |

## World Index

| Element | Doc |
|---------|-----|
| [Location/Domain] | [[world/location]] |
| [System] | [[world/system]] |

## Symbols

| Symbol | Doc |
|--------|-----|
| [Symbol name] | [[symbols/symbol]] |

## Themes

See [[themes/core-themes]]

## The Ending

[Where does the series end? Plant the flag.]
```

### series/series-architecture.md

```markdown
# Series Architecture

The complete series bible.

## Core Premise

[The series premise—what it's really about]

## Central Question

[What question does the series answer?]

## Series Arc

### Book 1: [Title]
[What happens. What's established. What question is raised.]

### Book 2: [Title]
[What happens. How it builds. Midpoint of series.]

### Book 3: [Title]
[What happens. How it resolves. The ending.]

## Major Revelations

| Revelation | When | Impact |
|------------|------|--------|
| [What's revealed] | Book X, Ch Y | [How it changes things] |

## Thematic Through-Lines

[What themes carry across all books]

## The Ending

[How does the series end? Be specific.]

## Key Decisions (Do Not Undo)

1. [Decision that must be preserved]
2. [Another decision]
```

### series/characters/README.md

```markdown
# Characters

Characters shared across the series.

## Main Characters

| Character | Role | Arc | Doc |
|-----------|------|-----|-----|
| [Name] | Protagonist | [Brief arc] | [[protagonist]] |
| [Name] | Antagonist | [Brief arc] | [[antagonist]] |

## Supporting Characters

| Character | Role | First Appears | Doc |
|-----------|------|---------------|-----|
| [Name] | Mentor | Book 1 | [[mentor]] |

## Supporting (Minor)

Located in `supporting/` folder.

## Relationship Map

[Visual or prose description of key relationships]
```

### series/world/README.md

```markdown
# World

World elements shared across the series.

## Domains/Locations

| Location | Doc | Appears In |
|----------|-----|------------|
| [Location] | [[location]] | Books 1, 2, 3 |

## Systems

| System | Doc |
|--------|-----|
| [Magic/tech system] | [[system]] |

## History

| Event | When | Doc |
|-------|------|-----|
| [Event] | [Timeline] | [[event]] |
```

### series/symbols/README.md

```markdown
# Symbols

Recurring symbols and motifs across the series.

| Symbol | Meaning | Doc |
|--------|---------|-----|
| [Symbol] | [What it represents] | [[symbol]] |
```

### series/themes/core-themes.md

```markdown
# Core Themes

## The Central Question

[What question does the series answer?]

## Theme 1: [Name]

**What it is:** [Description]

**How it manifests:** [In plot, character, imagery]

**How it resolves:** [What the series says about it]

## Theme 2: [Name]

...

## What the Series Says

[The answer to the central question]
```

### series/craft/tone.md

```markdown
# Tone & Craft Guide

## Voice

[Series-wide voice guidelines]

## Tone

[Emotional register across the series]

## Reference Points

- **[Work 1]** — [What we're taking]
- **[Work 2]** — [What we're taking]

## What to Avoid

- [Series-wide things to avoid]

## Book-Specific Notes

### Book 1
[Any book-specific tone adjustments]

### Book 2
[Any adjustments]
```

### book-1-[title]/README.md

```markdown
# Book 1: [Title]

> [Logline or thematic statement]

---

## Status

- [ ] Outline complete
- [ ] Chapters drafted: 0 of [X]
- [ ] First draft complete
- [ ] Revision complete

---

## The Story

[Synopsis of this book specifically]

---

## Structure

| Part | Chapters | Summary |
|------|----------|---------|
| One | 1-X | ... |
| Two | X-Y | ... |
| Three | Y-Z | ... |

---

## Chapters

| Ch | Title | Status | Summary |
|----|-------|--------|---------|
| 1 | ... | Not started | ... |

---

## Key Characters (This Book)

| Character | Role in This Book |
|-----------|-------------------|
| [[series/characters/protagonist\|Name]] | ... |

---

## Arc

**Starting state:** [Who protagonist is at start]

**Key change:** [What shifts]

**Ending state:** [Who they are at end of this book]

---

## Seeds Planted

| Seed | Planted Where | Pays Off |
|------|---------------|----------|
| ... | Chapter X | Book Y |

---

## Word Count

**Target:** ~[X] words
```

---

## 4. Updated SKILL.md

The main SKILL.md should be updated to serve as the entry point.

**File:** `SKILL.md` (updated)

```markdown
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

Use `/new-project` to scaffold a new project.

## Core Principles

1. **Story = Character + Change** — Plot is what happens; story is what it means.
2. **Scene Economy** — Every scene must do at least two things.
3. **Specificity Creates Universality** — Concrete details create resonance.
4. **Earned Moments** — Plant before you harvest.
5. **Trust the Reader** — Show, don't tell. Imply, don't explain.

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

---

## Files to Create

| File | Purpose |
|------|---------|
| `templates/project-structure-guide.md` | Canonical structure reference |
| `templates/standalone-novel/` | Reference scaffold directory |
| `templates/series/` | Reference scaffold directory |
| `SKILL.md` (update) | Main entry point |

**Not needed:** `/new-project` command — just copy templates manually when starting a project.

---

## Success Criteria

Phase 4 is complete when:

- [ ] Standalone template includes all necessary reference files
- [ ] Series template includes all necessary reference files
- [ ] SKILL.md provides clear entry point
- [ ] Project structure guide is accessible
- [ ] Templates can be manually copied to start new projects

---

## Test Plan

### Test 1: Template Completeness

1. Copy standalone template to test location
2. Verify all placeholder files exist
3. Run `/whatnext` in copied project—should work

### Test 2: Series Template

1. Copy series template to test location
2. Verify series-level and book-level files present
3. Run `/whatnext`—should recognize as series

### Test 3: Workflow from Template

1. Copy template to start new project
2. Run `/plan` → should work
3. Run `/character` → should work
4. Run `/outline` → should work (after architecture)
5. Write a chapter → should work
6. Run `/review` → should work

---

## Notes

### On Template Flexibility

Templates are starting points, not prisons. Users should feel free to:
- Add folders as needed
- Rename things
- Skip what they don't need

The key is that the structure remains discoverable by agents.

### On Placeholder Text

Templates use `[bracketed text]` for things the user fills in. This should be clear and helpful:
- `[Project Name]` not `[FILL IN]`
- `[One-sentence premise]` not `[Write something here]`

### On Cross-Platform Paths

The `/new-project` command should handle path creation correctly on all platforms. Use appropriate path handling.

### On Obsidian Compatibility

Templates use `[[wiki-link]]` syntax for Obsidian compatibility. This works in Obsidian and degrades gracefully elsewhere.
