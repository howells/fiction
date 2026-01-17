---
description: Start a new fiction project from scratch. Interactive wizard guides you through discovery, architecture, characters, world, and outline.
allowed-tools:
  - Read
  - Glob
  - Write
  - Edit
  - Task
  - AskUserQuestion
  - WebSearch
---

# /fiction:new

Start a new fiction project with guided, Socratic dialogue.

## What This Does

Walks you through creating a complete project foundation:

1. **Discovery** — Find the heart of your story
2. **Architecture** — Build the structure (premise, theme, arc, ending)
3. **Characters** — Develop who lives in this world
4. **World** — Create setting and systems (if needed)
5. **Outline** — Map the journey chapter by chapter

## How It Works

This is a conversation, not a form. The agent asks questions that help you discover what you already know about your story. It offers choices when you're stuck, research when you need context, and celebrates progress along the way.

Everything is saved as you go—architecture, characters, outline—so you never lose work.

## Invoke

Spawn the `new-project` agent:

```
Use the Task tool to spawn the new-project agent with the following prompt:

"Start a new fiction project with the user. Begin with Phase 1: Discovery. Be Socratic—ask questions that help them find what they already know. Use AskUserQuestion with multiple choice options to reduce blank-page paralysis. Save work as you complete each phase."
```

If the user provides context (genre, idea, etc.), include it in the prompt.
