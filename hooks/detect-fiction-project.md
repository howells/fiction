---
name: detect-fiction-project
event: SessionStart
---

Check if the current directory is a fiction writing project. If so, provide brief context.

## Detection Criteria

A directory is a fiction project if it has:

**Strong signals (any one is sufficient):**
- A `/chapters` directory containing `.md` files
- A `README.md` containing "chapter" or "novel" or "book" (case-insensitive)

**Supporting signals:**
- A `/characters` directory
- A `/world` directory
- Word count targets in README
- Status markers like "drafted" or "outlined"

## What to Do When Detected

Output a brief context message:

```
Fiction project detected: [Project name from README or directory name]

Structure:
- [X] chapters found
- [Y] character docs found
- Status: [from README if available]

The fiction-writing skill is loaded. Available commands:
- /review — Review a chapter
- /whatnext — Suggest what to work on
- /critique — Full manuscript review (when complete)

Or just tell me what you want to write.
```

## What Not to Do

- Don't overwhelm with information
- Don't read the full manuscript at startup
- Don't assume—if ambiguous, just note that fiction-writing skill is available
- Keep it brief—one short status block, then ready for user input
