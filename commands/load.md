---
description: Load a fiction project into context. Read structure, characters, world, and chapters to understand the story.
---

Load the current fiction project into context. This prepares Claude to work on the book by building understanding of the story, characters, world, and current state.

## What to Do

### 1. Find Project Root

Look for these signals to identify the project:
- `README.md` with story information
- `chapters/` directory
- `characters/` directory

If in a subdirectory, look for project root above.

### 2. Read Core Documents

Read these files if they exist:

**README.md** — Project overview, status, key decisions
**themes.md** — Central question, thematic content
**craft/tone.md** — Voice and style guidance

### 3. Read Character Documents

Find and read all files in `characters/` directory. For each character, note:
- Name
- Role (protagonist, antagonist, supporting)
- Want vs. Need
- Key relationships

### 4. Read World Documents

Find and read files in `world/` directory. Note:
- Setting details
- Rules/systems
- Important locations

### 5. Scan Chapters

**For projects with 10+ chapters**, use parallel reader-skim agents for richer context:

Spawn one `reader-skim` agent per chapter in parallel:
```
Task tool with subagent_type: "fiction:reader-skim"
prompt: "Extract skim-level data from: [chapter-path]"
```

reader-skim returns: plot beats, timeline, characters, settings, word count, tone.

This gives you actual plot progression, not just opening lines.

**For smaller projects (<10 chapters)**, scan directly:
- Note filename and any status markers
- Read the first 1-2 paragraphs to understand where the story is
- Note approximate word count
- Identify which chapters are drafted vs. outlined

### 6. Check Builds, Covers, Critiques & Synopses

**builds/** — If present, note:
- Most recent build date
- Latest epub filename

**covers/** — If present, note:
- Number of cover iterations
- Whether a final `cover.png` exists

**critiques/** — If present, note:
- Most recent critique date
- Number of critiques generated

**synopses/** — If present, note:
- Most recent synopsis date
- Number of synopses generated

### 7. Output Understanding

After reading, output a summary:

```
## Project Loaded: [Name]

**Premise:** [One sentence from README or inferred]

**Status:** [X] chapters drafted, [Y] outlined

**Characters:**
- [Protagonist] — [brief description]
- [Other key characters]

**Builds:** [Latest: builds/2026-01-18/name.epub] or [No builds yet]
**Covers:** [X iterations, final cover ready] or [No covers yet]
**Critiques:** [X critiques, latest: 2026-01-19] or [No critiques yet]
**Synopses:** [X synopses, latest: 2026-01-19] or [No synopses yet]

**Current state:** [Where the story is, what was last worked on]

**Ready to:** [Suggest what to do next based on state]
```

## Arguments

```
/fiction:load                    # Load project in current directory
/fiction:load /path/to/project   # Load specific project
```

## Notes

- Don't read entire chapters unless specifically asked
- Focus on structure and status, not deep analysis
- If project is large, prioritize recent chapters and key characters
- After loading, ready to write, review, or continue work
