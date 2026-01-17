# Changelog

All notable changes to the Fiction plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2026-01-17

### Added

- **Parallel agent processing for large manuscripts** — ~20× speedup for multi-chapter operations
- **Large Manuscript Efficiency guide** in SKILL.md with speedup estimates
- `/fiction:edit all` and `/fiction:review all` now support range syntax (e.g., `3-7`)

### Changed

- edit command: Documents parallel agent spawning for batch processing
- review command: Documents parallel chapter-reviewer deployment
- continuity agent: Two-phase approach (parallel fact extraction + sequential comparison)
- critique agent: Parallel chapter analysis with unified synthesis
- chapter-reviewer: Added parallel processing mode documentation
- editor agent: Optimized single chapter mode for parallel spawning

## [1.2.1] - 2026-01-17

### Added

- **Craft References sections** — All relevant agents now link to reference documentation
- **No orphan references** — All 13 reference files are now linked from at least 2 agents

### Changed

- critique agent: Added references to story-structure, character, endings, pacing, craft-wisdom
- editor agent: Added references to prose-style, revision-editing, anti-patterns, dialogue
- architect agent: Added length-forms, genre-conventions references
- chapter-reviewer agent: Added revision-editing, openings references
- outliner agent: Added length-forms reference
- writer agent: Added openings, genre-conventions references

## [1.2.0] - 2026-01-17

### Added

- **`editor` agent** — Line-level editing for spelling, grammar, awkward phrasing, word echoes, and overused words
- **`/fiction:edit` command** — Run editor across chapters (single, range, or all)
- **Cross-references across all agents** — Every agent now has "Related Tools" section pointing to relevant other agents

### Changed

- All agents now include workflow guidance via Related Tools sections
- Updated SKILL.md with new agent and command

## [1.1.1] - 2026-01-17

### Changed

- `/fiction:whatnext` now checks for missing plugin conventions and suggests `/fiction:reconcile` when needed
- Status table includes "Plugin conventions" row

## [1.1.0] - 2026-01-17

### Added

- **⚓ Anchored convention** — Mark immutable constraints in any document with `## ⚓ Anchored` section. Review agents enforce these as non-negotiable rules.
- **`/fiction:reconcile` command** — Audit projects against current plugin conventions, identify gaps, and scaffold missing pieces.
- **`progress.md` state file** — Persistent review state across sessions. Tracks chapter reviews, continuity checks, and open issues.
- **Notes authority system** — Review agents now distinguish between anchored constraints (story must change) and evolved notes (notes may need updating).
- **Enhanced trope detection** — Chapter reviewer now checks for common trope red flags and LLM-generated slop patterns.
- **Cross-references between agents** — Review agents now reference related tools for different types of issues.

### Changed

- Chapter reviewer and continuity agents now update `progress.md` after reviews
- Continuity report format now includes `Anchored:` and `Action:` fields
- Templates updated with `## ⚓ Anchored` sections and `progress.md`
- Project structure documentation updated in skill file

## [1.0.0] - 2026-01-17

### Added

- Initial release of fiction writing plugin
- Writer agent for literary prose generation
- Chapter reviewer agent for iterative feedback
- Critique agent for full manuscript reviews
- Architect agent for story structure planning
- Outliner agent for chapter breakdowns
- Character developer agent
- World builder agent
- Continuity checker agent
- Scene analyzer and voice analyzer agents
- Commands: /fiction:load, /fiction:plan, /fiction:outline, /fiction:character, /fiction:review, /fiction:critique, /fiction:whatnext, /fiction:status
- Comprehensive craft reference files for prose, dialogue, pacing, structure, and more
- Project templates for standalone novels and series
