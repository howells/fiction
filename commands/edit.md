---
description: Run line-level editing across chapters. Catches spelling, grammar, awkward phrasing, and word echoes.
---

Run the editor agent to polish your manuscript at the line level.

## What This Does

1. Processes chapters looking for mechanical issues
2. Flags spelling, grammar, awkward phrasing, word echoes
3. Identifies manuscript-wide patterns (overused words, crutch phrases)
4. Offers to apply mechanical fixes automatically
5. Updates `progress.md` with findings

## Usage

```
/fiction:edit                    # Edit most recent chapter
/fiction:edit 5                  # Edit chapter 5
/fiction:edit all                # Edit all drafted chapters
/fiction:edit 3-7                # Edit chapters 3 through 7
```

## What It Catches

- **Spelling & typos** — Including wrong-word errors (their/there)
- **Grammar** — Agreement, punctuation, comma splices
- **Awkward phrasing** — Confusing syntax, unclear references
- **Word echoes** — Repetition in close proximity
- **Overused words** — Filter words, weak verbs, crutch words
- **Formatting** — Inconsistent dashes, ellipses, quotes

## Output

A report per chapter with:
- Issues by category with line numbers
- Suggested fixes
- Manuscript-wide patterns (when editing multiple chapters)

## When to Use

- After completing a chapter draft
- Before sending to beta readers
- During revision passes
- After `/fiction:review` addresses story issues

## Workflow

Recommended order for polishing:

1. `/fiction:review` — Fix story/craft issues first
2. `/fiction:edit` — Then line-level polish
3. `continuity` agent — Check cross-chapter consistency
4. `/fiction:critique` — Final literary assessment (if complete)

## Related Commands

- `/fiction:review` — Story and craft feedback (run first)
- `/fiction:critique` — Full manuscript literary review
- `/fiction:reconcile` — Project structure audit
