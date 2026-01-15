---
name: fiction:review
description: Review the current or most recent chapter. Checks coherence, cheesiness, consistency, pace, tone, and character. Suggests specific rewrites.
---

Review the current chapter using the chapter-reviewer agent.

## What This Does

1. Identifies the current or most recently written chapter
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
/review                    # Review most recent chapter
/review chapter 5          # Review specific chapter
/review chapters/08.md     # Review specific file
```

## How It Works

If no chapter is specified:
1. Check conversation history for recently written/discussed chapter
2. Or find the most recently modified chapter file in the project
3. Or ask the user which chapter to review

The review includes:
- What works (with specific quotes)
- What needs work (with suggested rewrites)
- Continuity flags
- Verdict (ready to move on / needs revision)

## After Review

If issues are found, you'll be asked: "Would you like me to apply these rewrites and output the revised chapter?"

Say yes to get the complete revised chapter with all changes applied.
