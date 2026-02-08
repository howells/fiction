# Changelog

All notable changes to the Fiction plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.10.0] - 2026-02-08

### Added

- Add manuscript digest layer to prevent context overflow
- Add persistent memory and acceptEdits to key agents

## [1.10.0] - 2026-02-08

### Added

- **Manuscript digest layer** — New `reader-digest` coordinator agent that prevents context overflow when reading large manuscripts:
  - Spawns parallel reader agents in its own context window, writes results to `manuscript-digest.md`
  - Returns only a short summary to the parent agent — no more context blowouts on 15+ chapter books
  - Built-in caching: checks digest freshness against chapter file timestamps, skips re-reading if nothing changed
  - Supports both `skim` and `careful` modes
  - Updated 5 consuming agents to use digest: **synopsis**, **critique**, **continuity**, **voice-analyzer**, and the **go** skill
- **Persistent agent memory** — 4 agents now build knowledge across sessions using `memory: project`:
  - **continuity** — Maintains a running fact database (character details, timeline, geography, objects). Future checks compare against known facts instead of re-reading the entire manuscript.
  - **editor** — Builds a style profile (language variant, crutch word frequencies, formatting conventions, author override decisions). Eliminates re-discovery of conventions each session.
  - **writer** — Remembers voice decisions (tense, POV, narrative distance), character speech patterns, and vocabulary choices. Maintains consistency across writing sessions.
  - **chapter-reviewer** — Tracks review history so feedback evolves (doesn't re-flag resolved issues, escalates persistent ones). Remembers author preferences and voice baseline.
- **`permissionMode: acceptEdits`** — 5 file-writing agents now skip per-write permission prompts:
  - writer, editor, chapter-reviewer, critique, synopsis

### Technical Notes

- Memory is stored in `.claude/agent-memory/<agent-name>/` within the fiction project
- Each agent's MEMORY.md has a size cap (80-150 lines) with compression rules to stay under the 200-line auto-load limit
- All memory sections include a staleness rule: the manuscript text is always more authoritative than memory
- Memory was deliberately NOT added to: ephemeral agents (reader-skim, reader-careful), critic personas (james-wood, stephen-king, etc.), or wizard agents (architect, outliner) whose output already IS the project's memory

## [1.9.0] - 2026-01-25

### Changed

- **Migrated all commands to skills directory** — Following Claude Code's merge of commands into skills. All 17 commands now live in `skills/` as individual directories with SKILL.md files.
- **Shared references moved** — Reference files now at `skills/references/` (accessible to all skills)
- **Removed commands directory** — No longer needed; `plugin.json` updated accordingly

### Added

- **`context: fork` for wizard skills** — `/new`, `/plan`, `/character`, `/outline` now run in isolated subagents for cleaner multi-turn conversations
- **`disable-model-invocation` for utility skills** — `/build`, `/notes`, `/reconcile` won't auto-invoke
- **Dynamic context injection** — `/go` and `/build` skills use `!`command`` syntax to inject project state
- **`argument-hint` frontmatter** — Improved autocomplete hints for skills with arguments

### Migration Notes

If you have custom commands in your project's `.claude/commands/`, they continue to work. Skills take precedence if both exist with the same name.

## [1.6.0] - 2026-01-17

### Added

- **`naming` agent** — Generate and validate book title options
- **`/fiction:naming` command** — Produces 8-12 title candidates using proven naming strategies
- Availability checking via web search (verifies titles aren't already taken)
- 10 naming strategies: Object, Place, Character, Theme, [Noun] of [Noun], [Person] + [Location], Contradiction, Alliterative, Cultural Echo
- Genre fit evaluation (title signals match reader expectations)
- Series title pattern suggestions

## [1.5.0] - 2026-01-17

### Added

- **`cover-artist` agent** — Generate book cover art prompts optimized for image generation models (Midjourney, DALL-E, etc.)
- **`/fiction:cover` command** — Read project materials and produce 3-5 cover concepts with ready-to-use prompts
- Kindle dimension compliance (2560 × 1600, 1.6:1 aspect ratio)
- Best practices for image gen prompts: style specification, composition, color palettes, negative prompts
- Cut-through strategy guidance for standing out in crowded marketplaces
- No text by default approach (AI struggles with typography)

### Changed

- **whatnext agent** — Now provides ONE clear recommendation plus 3 concrete steps instead of multiple options. Reduces decision fatigue and increases momentum.

## [1.4.0] - 2026-01-17

### Added

- **Audiobook readiness guidance** — Comprehensive reference for writing audio-friendly prose
- **`references/audiobook-considerations.md`** — Full guide covering dialogue attribution, similar-sounding names, pronoun clarity, sentence complexity, visual elements, homophones
- **6th Core Principle** — "Write for the Ear" added to SKILL.md
- **Audiobook checks** in writer, editor, and chapter-reviewer agents

### Changed

- writer agent: Added Audiobook Awareness section with key guidelines
- editor agent: Added Audiobook Readiness as 7th check category
- chapter-reviewer: Added audiobook readiness to review criteria

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
