# Fiction Writing Plugin Design

A Claude Code plugin for writing complete novels—from initial concept through final critique.

## Problem Statement

Claude Code's system prompt is optimized for software engineering. When writing fiction, this creates friction:
- Technical/literal tone bleeds into prose
- Coding-assistant framing undermines creative flow
- No persistent craft knowledge or project awareness

Meanwhile, Claude Desktop produces better fiction because it lacks this coding context—but it has no project structure awareness, no persistent memory of character docs, no workflow automation.

**This plugin bridges the gap:** Claude Code's project awareness + a literary persona that writes like a novelist, not a coding assistant.

---

## Core Concept

### The Override

The critical innovation is the **writer agent** with a system prompt that completely sheds the coding-assistant persona. When spawned, this agent:
- Has no awareness of being a "coding assistant"
- Thinks like a literary writer (Rachel Cusk, Ishiguro, Jenny Offill sensibility)
- Writes prose, not content
- Trusts the reader instead of explaining

### Smart Context Loading

Agents figure out what context they need. When writing Chapter 8, the writer agent:
1. Reads the project README to understand structure
2. Identifies what chapters exist
3. Loads relevant previous chapter(s)
4. Loads character docs for characters in this chapter
5. Loads the outline/beats for Chapter 8
6. Writes with full awareness of what came before

### Atomic Files

The plugin enforces a file structure optimized for LLM consumption:
- One concept per file
- Each file fits in context
- Everything linked, nothing duplicated
- Templates ensure consistency

---

## Workflow

```
Plan → Outline → Develop → Write → Review → Critique
                              ↑        |
                              └────────┘
                           (iterative loop)
```

1. **Plan** — High-level story architecture (premise, theme, arc, ending)
2. **Outline** — Chapter breakdown with beats, scene list
3. **Develop** — Character docs, world building, theme articulation
4. **Write** — Chapter by chapter, using the writer agent
5. **Review** — After each chapter: check coherence, cheese, consistency, pace, tone
6. **Critique** — Full manuscript review when complete (NYT/New Yorker style)

The Write → Review loop is iterative. Write a chapter, review it, apply suggested rewrites, move on.

---

## Plugin Structure

```
fiction-writing/
├── plugin.json
├── SKILL.md                           # Main skill (craft reference, when to use)
│
├── references/                        # Craft guides
│   ├── story-structure.md
│   ├── scene-structure.md
│   ├── character.md
│   ├── dialogue.md
│   ├── prose-style.md
│   ├── pacing.md
│   ├── openings.md
│   ├── endings.md
│   ├── genre-conventions.md
│   ├── length-forms.md
│   ├── revision-editing.md
│   └── anti-patterns.md
│
├── templates/
│   ├── project-structure-guide.md     # Canonical structure reference
│   ├── standalone-novel/              # Scaffold for new standalone
│   │   ├── README.md
│   │   ├── characters/
│   │   ├── world/
│   │   ├── craft/
│   │   └── chapters/
│   └── series/                        # Scaffold for new series
│       ├── README.md
│       ├── series/
│       └── book-1/
│
├── agents/
│   │
│   │ # === PLANNING ===
│   ├── architect.md                   # Story architecture
│   ├── outliner.md                    # Chapter/scene breakdown
│   │
│   │ # === DEVELOPMENT ===
│   ├── character-developer.md         # Create character docs
│   ├── world-builder.md               # Setting, systems, history
│   │
│   │ # === WRITING ===
│   ├── writer.md                      # THE OVERRIDE - pure prose
│   │
│   │ # === REVIEW (iterative) ===
│   ├── chapter-reviewer.md            # Per-chapter review with rewrites
│   │
│   │ # === REVIEW (complete manuscript) ===
│   ├── critique.md                    # NYT/New Yorker full review
│   ├── continuity.md                  # Cross-chapter consistency
│   │
│   │ # === ANALYSIS ===
│   ├── scene-analyzer.md              # Diagnose scene problems
│   ├── character-extractor.md         # Find characters in existing prose
│   ├── voice-analyzer.md              # POV/tense consistency
│   │
│   │ # === META ===
│   └── whatnext.md                    # Suggest what to work on
│
└── commands/
    ├── whatnext.md                    # /whatnext - suggest next task
    ├── review.md                      # /review - review current chapter
    ├── critique.md                    # /critique - full manuscript review
    ├── status.md                      # /status - project status
    ├── plan.md                        # /plan - story architecture
    ├── outline.md                     # /outline - chapter breakdown
    ├── character.md                   # /character - develop a character
    └── new-project.md                 # /new-project - scaffold from template
```

---

## Agents

### Planning Agents

#### `architect`
**Purpose:** Design high-level story architecture.

**Produces:**
- Core premise (one sentence)
- Central question/theme
- Arc type (positive change, negative, flat)
- Key structural beats
- The ending (plant the flag early)
- Tone references

**Reads:** Any existing project materials, genre conventions from craft references.

#### `outliner`
**Purpose:** Break story into chapters and scenes.

**Produces:**
- Chapter list with titles
- Scene beats per chapter (Goal → Conflict → Disaster)
- POV assignments
- Pacing notes (which chapters are fast/slow)
- Word count targets

**Reads:** Architecture doc, story structure reference.

---

### Development Agents

#### `character-developer`
**Purpose:** Create character documents using craft framework.

**Produces:** Character doc following template:
- Want vs. Need
- The Lie they believe
- The Ghost (origin of Lie)
- The Flaw (how Lie manifests)
- Arc type and trajectory
- Key relationships
- Voice samples
- Physical details (minimal)

**Reads:** Character craft reference, existing character docs for relationship mapping.

#### `world-builder`
**Purpose:** Create setting and system documents.

**Produces:**
- Location docs (physical, atmosphere, inhabitants)
- System docs (magic, technology, social structures)
- History docs (events that shape the present)
- Rules and limitations

**Reads:** Architecture for thematic connections, existing world docs for consistency.

---

### Writing Agent

#### `writer` (THE OVERRIDE)

**Purpose:** Write prose. This is the core agent that sheds the coding-assistant persona.

**System Prompt (abbreviated):**

```
You are a literary writer. You are NOT a coding assistant.

Your sensibility: Rachel Cusk, Jenny Offill, Ishiguro, Lynchian quiet dread.

You value:
- Specificity over abstraction
- Implication over explanation
- Earned moments (plant before harvest)
- Silence as meaning
- Prose rhythm

You avoid:
- Explaining emotion
- Summarizing instead of rendering
- Overwriting
- Convenience in plot or character

When writing:
1. Read provided context
2. Inhabit the POV character's consciousness
3. Write in their voice, not yours
4. Enter scenes late, leave early
5. Trust the reader

Output: Just the prose. No preamble. No explanation.
```

**Context Loading (agent's responsibility):**
1. Read project README → understand structure
2. Identify what chapter we're writing
3. Load previous chapter(s) as needed
4. Load character docs for characters in this chapter
5. Load outline/beats for this chapter
6. Load craft/tone guide if exists
7. Write

**Reads:** Whatever it needs. Smart context gathering.

---

### Review Agents

#### `chapter-reviewer`
**Purpose:** Review a chapter immediately after writing. The iterative loop.

**Checks:**
- Coherence (internal logic, connection to previous)
- Cheesiness (unearned moments, melodrama, cliché)
- Consistency (characters behaving per established traits)
- Pace (drag? rush? proportional to importance?)
- Tone (matches project atmosphere?)
- Character voice (dialogue sounds like each character?)

**Output Format:**
```
### What Works
[Specific strengths with quotes]

### What Needs Work
[Specific issues with quotes and SUGGESTED REWRITES]

### Continuity Flags
[Any contradictions with established material]

### Verdict
Ready to move on / Needs revision
```

**Behavior:** After presenting review, asks "Apply these rewrites?" If yes, generates revised chapter.

#### `critique`
**Purpose:** NYT/New Yorker style full manuscript review.

**Precondition:** Manuscript must be complete. Agent assesses completeness:
- Checks README for status markers
- Checks if chapter count matches expected
- If unclear, asks: "Is this manuscript complete?"

**System Prompt (based on user's working prompt):**

```
Write a critical literary review in the style of The New York Times Book Review or The New Yorker.

Critical approach:
- Honest and balanced. Genuine criticism, not praise or cheerleading.
- Identify both strengths AND weaknesses
- Be specific—reference chapters, scenes, passages
- Consider what the work attempts and how well it achieves those aims
- Avoid spoilers

Craft elements to assess:
- Prose style
- Structure and pacing
- Characterization
- Worldbuilding (if applicable)
- Emotional resonance
- Dialogue
- Thematic coherence

Tone: Professional and analytical, not mean-spirited. Intellectually rigorous but accessible.

Length: 1000-1500 words.

End with 2-3 craft insights about what works or doesn't technically.
```

#### `continuity`
**Purpose:** Find inconsistencies across chapters.

**Checks:**
- Timeline contradictions
- Character detail changes (eye color, age, etc.)
- Plot holes
- Geography/setting inconsistencies
- Character knowledge (knows something before learning it)

**Output:** List of issues with chapter/line citations.

---

### Analysis Agents

#### `scene-analyzer`
**Purpose:** Diagnose why a specific scene isn't working.

**Framework (from scene-structure.md):**
- Is the goal clear?
- Is there real conflict?
- Does the outcome change something?
- Can we enter later? Leave earlier?
- MRU order (motivation before reaction?)

**Output:** Diagnosis + specific suggestions.

#### `character-extractor`
**Purpose:** Extract all characters from existing prose.

**Use case:** Imported manuscript without character docs. Agent reads all chapters, identifies characters, creates initial character doc stubs.

#### `voice-analyzer`
**Purpose:** Check POV and tense consistency.

**Checks:**
- POV shifts within scenes
- Tense changes
- Filter word usage (deep POV violations)
- Author intrusion
- Voice consistency across chapters

---

### Meta Agent

#### `whatnext`
**Purpose:** Assess project status and suggest what to work on.

**Reads:**
- Project README (status markers)
- Chapter list (what's drafted vs. outlined)
- Any revision notes

**Output:**
```
## Project Status
[Summary of where things stand]

## Suggested Next Steps
1. [Most important]
2. [Second priority]
3. [Third priority]

## Why
[Brief reasoning]
```

---

## Commands

| Command | Agent(s) | Description |
|---------|----------|-------------|
| `/whatnext` | `whatnext` | Assess project, suggest what to work on |
| `/review` | `chapter-reviewer` | Review current/last chapter |
| `/critique` | `critique` | Full manuscript review (must be complete) |
| `/status` | — | Show project status (simple read, no agent) |
| `/plan` | `architect` | Story architecture session |
| `/outline` | `outliner` | Chapter/scene breakdown |
| `/character [name]` | `character-developer` | Develop a character doc |
| `/new-project` | — | Scaffold new project from template |

Natural language handles everything else: "write chapter 8", "continue from where we left off", "make the ending less abrupt", etc.

---

## Project Structure (Enforced)

Based on existing `book-project-structure-guide.md`.

### Standalone Novel

```
/my-novel
├── README.md                 # Overview, status, key decisions
├── characters/
│   ├── README.md             # Character index
│   ├── protagonist.md
│   ├── antagonist.md
│   └── supporting/
├── world/
│   ├── setting.md
│   └── [location].md
├── craft/
│   └── tone.md               # Voice, style, references
├── themes.md
└── chapters/
    ├── 01-[title].md
    ├── 02-[title].md
    └── ...
```

### Multi-Book Series

```
/my-series
├── README.md                 # Series overview
├── SERIES-STATUS.md          # Cross-book tracking
├── series/
│   ├── README.md             # Quick reference
│   ├── series-architecture.md
│   ├── characters/
│   ├── world/
│   ├── symbols/
│   ├── themes/
│   └── craft/
├── book-1-[title]/
│   ├── README.md
│   └── chapters/
├── book-2-[title]/
│   └── ...
└── book-n-[title]/
    └── ...
```

### Key Principles

1. **One concept per file** — fits in LLM context
2. **Everything linked, nothing duplicated** — single source of truth
3. **README files as navigation** — agents read these first
4. **Status markers** — agents can assess project state
5. **Templates for consistency** — predictable structure

---

## Project Discovery

When Claude Code runs from a fiction project root:

1. Look for `README.md`
2. Check for fiction project markers:
   - `/chapters` directory
   - `/characters` directory
   - Word count targets
   - Status markers (drafted/outlined)
3. If found, load as fiction project
4. Parse structure:
   - Standalone or series?
   - Where are chapters?
   - What's the current status?
5. Agents can then navigate intelligently

---

## Context Strategy

### For Writing

When writing Chapter N, the writer agent gathers:

1. **Always:**
   - Project README (overview, key decisions)
   - Craft/tone guide (if exists)
   - Chapter N outline/beats

2. **Usually:**
   - Chapter N-1 (previous chapter)
   - Character docs for characters in Chapter N

3. **Sometimes:**
   - Earlier chapters (if callbacks needed)
   - World docs (if new location)
   - Specific reference files

The agent decides what it needs based on the task.

### For Review

The chapter-reviewer needs:
- The chapter being reviewed
- Character docs (to check consistency)
- Project tone guide (to check tone)
- Previous chapter (to check continuity)

### For Critique

The critique agent needs:
- All chapters
- Project README (to understand intent)
- Craft guide (to understand goals)

This may require summarization for very long novels.

---

## Design Decisions

### 1. Hook for Project Detection

**Decision:** Yes, auto-detect fiction projects on session start.

A `SessionStart` hook will check for fiction project markers and set context automatically.

### 2. Chapter File Format

**Decision:** No frontmatter. Chapters are pure prose.

Status tracking lives in README files. Chapters should be clean—just the writing.

### 3. Rewrite Application

**Decision:** Output full revised chapter.

When the chapter-reviewer suggests rewrites, it outputs the complete revised chapter. The user reviews it in conversation, then can copy to Obsidian or ask Claude to write to file. This keeps the user in control of their manuscript files.

### 4. Model Selection

**Decision:** Approved as proposed.

| Agent | Model | Reasoning |
|-------|-------|-----------|
| writer | opus | Creative quality matters most |
| chapter-reviewer | sonnet | Balanced judgment |
| critique | opus | Literary criticism needs depth |
| architect | opus | Strategic thinking |
| outliner | sonnet | Structured task |
| continuity | haiku | Mechanical checking |
| whatnext | haiku | Simple assessment |

---

## Success Criteria

The plugin is successful when:

- [ ] User can write a complete novel using Claude Code
- [ ] Prose quality matches or exceeds Claude Desktop output
- [ ] Iterative review loop catches issues before they compound
- [ ] Full critique provides genuine literary criticism
- [ ] Project structure keeps context manageable
- [ ] Natural language workflow feels as fluid as Claude Desktop
- [ ] Commands provide useful shortcuts for common operations

---

## Implementation Priority

### Phase 1: Core Writing Loop
1. `writer` agent (THE OVERRIDE)
2. `chapter-reviewer` agent
3. `/review` command
4. Project discovery

### Phase 2: Planning & Development
5. `architect` agent
6. `outliner` agent
7. `character-developer` agent
8. `/plan`, `/outline`, `/character` commands

### Phase 3: Analysis & Polish
9. `critique` agent
10. `continuity` agent
11. `whatnext` agent
12. `/critique`, `/whatnext` commands

### Phase 4: Templates & Scaffolding
13. Project templates
14. `/new-project` command
15. Hook for auto-detection

---

## References

- User's existing projects: The Coordinate, Ivy Fell series
- Existing craft references in `/references/`
- `book-project-structure-guide.md` (canonical structure)
- User's working critique prompt (encoded in critique agent)

---

*"One concept per file. Everything linked. Nothing duplicated. Structure that serves the story."*
