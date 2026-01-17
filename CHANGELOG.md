# Changelog

All notable changes to the Fiction plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
