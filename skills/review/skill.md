---
name: review
description: Review chapters for coherence, cheesiness, consistency, pace, tone, and character. Suggests specific rewrites.
argument-hint: "[chapter] [all] [3-7]"
---

Review chapters using the chapter-reviewer agent.

## What This Does

1. Identifies the chapter(s) to review
2. Gathers necessary context (character docs, previous chapter, project tone)
3. Runs a thorough review checking:
   - Coherence
   - Cheesiness
   - Consistency
   - Pace
   - Tone
   - Character voice
4. Provides specific feedback with suggested rewrites
5. Offers to apply rewrites and output revised chapter

## Usage

```
/fiction:review                    # Review most recent chapter
/fiction:review 5                  # Review chapter 5
/fiction:review all                # Review all drafted chapters
/fiction:review 3-7                # Review chapters 3 through 7
/fiction:review chapters/08.md     # Review specific file
```

If arguments provided: $ARGUMENTS

## Routing: Single vs. Multi-Chapter

### Single Chapter (default, or specific chapter number/path)

Spawn one `chapter-reviewer` agent directly. This is the fast path — no coordinator overhead.

If no chapter is specified:
1. Check conversation history for recently written/discussed chapter
2. Or find the most recently modified chapter file in the project
3. Or ask the user which chapter to review

The review includes:
- What works (with specific quotes)
- What needs work (with suggested rewrites)
- Continuity flags
- Verdict (ready to move on / needs revision)

**After review:** ask "Would you like me to apply these rewrites and output the revised chapter?"

### Multiple Chapters (`all`, range like `3-7`, or 2+ chapters)

**Delegate to the `review-coordinator` agent** instead of spawning chapter-reviewers directly. This prevents context overflow on large manuscripts.

1. Spawn ONE `review-coordinator` agent via Task tool:
   ```
   Task tool with subagent_type: "fiction:review-coordinator"
   prompt: "Review [all / chapters 3-7] in [project path]"
   ```
2. The coordinator spawns parallel chapter-reviewers in its own context
3. The coordinator writes `review-report.md` to the project root
4. The coordinator returns an aggregate summary (verdicts, issue counts, patterns)

**After coordinator returns:**
1. Show the aggregate summary to the user
2. Offer: "Full reviews saved to `review-report.md`. Want me to show a specific chapter's review or apply rewrites?"
3. If the user wants details on a specific chapter, read that section from `review-report.md`
4. If the user wants rewrites applied, spawn a chapter-reviewer for that specific chapter in interactive mode

## How It Works (Single Chapter Detail)

Gather context:
1. Read the chapter being reviewed
2. Load character docs for characters in the chapter
3. Load project README or craft/tone guide
4. Load previous chapter (for continuity)

Spawn a single `chapter-reviewer` agent with all context. Let it review and present results interactively.

## After Review

If issues are found, you'll be asked: "Would you like me to apply these rewrites and output the revised chapter?"

Say yes to get the complete revised chapter with all changes applied.
