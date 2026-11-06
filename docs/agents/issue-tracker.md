# Issue tracker: Linear

Issues and specs for this repo live in Linear, workspace **howells**, team **Fiction** (key `FIC`). Use the `linear-howells` MCP tools for every operation. GitHub hosts code only; don't use GitHub Issues.

## Conventions

- **Create an issue**: `save_issue` with `team: "FIC"`, a `title` and a Markdown `description` (real newlines, no escape sequences). Search with `list_issues` first so you don't file a duplicate.
- **Read an issue**: `get_issue` with the identifier (`FIC-123`), then `list_comments` for the discussion.
- **List issues**: `list_issues` with `team: "FIC"` and `state`, `label`, `parentId` or `query` filters.
- **Make an issue a sub-issue of a parent**: `save_issue` with `parentId: "FIC-<n>"`, on create or update.
- **Blocking**: Linear's native relations: `save_issue` with `blockedBy: ["FIC-<n>"]`. A ticket is unblocked when every blocker is Done or Canceled.
- **Comment on an issue**: `save_comment` with the issue identifier.
- **Apply / remove labels**: `save_issue` with `addLabels` / `removeLabels` (never `labels`, which replaces the whole set). Create a missing label with `create_issue_label` on the team.
- **Close**: `save_comment` saying why, then `save_issue` with `state: "Done"` (resolved) or `"Canceled"` (won't do).

In anything a person reads, name an issue by its title and link it, not by a bare identifier.

## Pull requests as a triage surface

**PRs as a request surface: no.** _(Set to `yes` if this repo treats external PRs as feature requests; `/triage` reads this flag.)_

## When a skill says "publish to the issue tracker"

Create an issue in the FIC team with `save_issue`.

## When a skill says "fetch the relevant ticket"

Read it as in **Read an issue** above.

## Wayfinding operations

Used by `/wayfinder`. The **map** is a single issue with **child** issues as tickets.

- **Map**: a single FIC issue labelled `wayfinder:map`, holding the Notes / Decisions-so-far / Fog body.
- **Child ticket**: a sub-issue of the map (`parentId`). Labels: `wayfinder:<type>` (`research`/`prototype`/`grilling`/`task`). Once claimed, the ticket is assigned to the driving dev.
- **Blocking**: see **Blocking** under Conventions.
- **Frontier query**: `list_issues` with `parentId` set to the map, open states only; drop any with an open blocker or an assignee; first in map order wins.
- **Claim**: `save_issue` with `assignee: "me"` and `state: "In Progress"`, the session's first write.
- **Resolve**: `save_comment` with the answer, then `save_issue` with `state: "Done"`, then append a context pointer (gist + link) to the map's Decisions-so-far.
