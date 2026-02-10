# Style Guide Decision Matrix

Quick-reference comparison for where CMOS and NOSM diverge. Use when editing cross-cultural manuscripts or resolving ambiguous cases.

## Punctuation

| Rule | CMOS (American) | NOSM (British/Oxford) |
|------|----------------|----------------------|
| Serial comma | Always | Recommended (may omit in simple lists) |
| Parenthetical dash | — closed em-dash | – spaced en-dash (or — spaced em-dash) |
| Dialogue quotes | "double primary" | 'single primary' (double also accepted) |
| Nested quotes | 'single inside' | "double inside" |
| Comma/period placement | Always inside quotes | Logical — inside only if part of the quote |
| Ellipsis style | . . . (spaced) or … | … (no spaces between dots) |
| Four-dot ellipsis | Yes (sentence end + ellipsis) | No (just three dots) |

## Spelling

| Category | CMOS (American) | NOSM (British/Oxford) |
|----------|----------------|----------------------|
| -ize / -ise | -ize (realize) | -ize (realize) — Oxford agrees! |
| -or / -our | -or (color) | -our (colour) |
| -er / -re | -er (center) | -re (centre) |
| -og / -ogue | -og (catalog) — but "dialogue" | -ogue (catalogue, dialogue) |
| -ense / -ence | -ense (defense) | -ence (defence) |
| Double l | Single (traveled) | Double (travelled) |
| -ment | judgment | judgement |
| Past tense | -ed (learned, burned) | -ed or -t (learnt, burnt) |
| Directionals | toward, afterward | towards, afterwards |

## Specific Words

| American (CMOS) | British (NOSM) |
|-----------------|----------------|
| gray | grey |
| while | while or whilst |
| among | among or amongst |
| tire | tyre |
| curb | kerb |
| plow | plough |
| airplane | aeroplane |
| aluminum | aluminium |
| skeptic | sceptic |
| pajamas | pyjamas |
| maneuver | manoeuvre |
| check (money) | cheque |

## Dates and Time

| Format | CMOS (American) | NOSM (British) |
|--------|----------------|----------------|
| Date order | March 15, 2024 | 15 March 2024 |
| Comma after year | Yes (mid-sentence) | No |
| Time separator | Colon (3:30) | Dot or colon (3.30 or 3:30) |
| a.m./p.m. | With periods (a.m.) | With or without (am or a.m.) |

## Numbers and Units

| Rule | CMOS (American) | NOSM (British) |
|------|----------------|----------------|
| Percent | percent (one word) | per cent (two words) |
| Currency placement | $5.75 | £5.75 |
| Pence/cents | 75 cents | 75p |
| Billion | 1,000,000,000 | 1,000,000,000 (same now — historically different) |

## Capitalisation

| Context | CMOS (American) | NOSM (British) |
|---------|----------------|----------------|
| Titles without names | Often capitalised (the President) | Lowercase (the president) |
| Government | Capitalise specific bodies | Lowercase generic (the government) |
| Regions | The South, the Midwest | the south, the north |
| Wars | The Civil War | the civil war (or the Civil War) |
| Chapter titles | Title Case | Sentence case (more common) |

## Formatting

| Convention | CMOS (American) | NOSM (British) |
|-----------|----------------|----------------|
| Co-operate | cooperate | co-operate (shifting to cooperate) |
| En-dash for ranges | 10–25 | 10–25 (same) |
| Quotation in titles | "Title" | 'Title' (matching quote style) |

## Cross-Cultural Manuscript Rules

When a manuscript mixes cultural contexts (e.g., British novel with American characters):

| Layer | Rule |
|-------|------|
| Narrative voice | Follows project's declared style guide |
| Dialogue | Follows the character's natural speech |
| Spelling in narrative | Project's guide (consistent) |
| Vocabulary in dialogue | Character-appropriate (don't "correct" an American saying "apartment" in a British novel) |
| Punctuation | Project's guide throughout (don't switch dash style for different characters) |
| Date/number format | Project's guide in narrative; character-appropriate in dialogue |

## When Guides Conflict with the Manuscript

Priority order:
1. **Author decisions** (documented in editor memory) — always wins
2. **Project's declared style guide** — the baseline
3. **Manuscript's established convention** — if no guide declared, follow what's already there
4. **Default to consistency** — if mixed, flag it; let the author decide which way to go

## Related Files

**Full rule sets (load one based on project config):**
- `shared-rules.md` — Rules both guides agree on
- `chicago-manual.md` — Full American English fiction rules (CMOS)
- `oxford-style-manual.md` — Full British English fiction rules (NOSM)

**Agents that use this file:**
- `editor` — Loads for cross-cultural manuscripts or ambiguous cases
- `continuity` — Language variant consistency across chapters
- `architect` — Quick reference when recommending a style guide
- `language-checker` — Formatting conventions for non-English phrases

**Project config:**
- `craft/tone.md` — Where projects declare their English variant and style guide
