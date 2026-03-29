# Carousel Production Workflow

A multi-agent workflow for producing carousel batches. Three specialized agents — PM, Writer, Editor — each handle one stage. The user (or main Codex session) orchestrates the handoffs. The PM role is also the general editor and final internal gate.

## Agents

| Agent | Role | Invocation |
|-------|------|------------|
| `pm` | Project manager + general editor — state tracking, source mapping, batch specs, revision briefs, final internal sign-off, status updates | `/pm` |
| `writer` | Copy writer — drafts carousel objects from source maps and specs | `/writer` |
| `editor` | Diagnostic copy editor — evaluates drafts against rubric and source fidelity for PM | `/editor` |

Subagents cannot spawn each other. You orchestrate the sequence.

Current default model profile for all three roles: `Codex GPT-4-high` or the nearest available Codex high-reasoning profile in the runner.

## The production cycle

### 1. Plan

```
/pm → "What's next?"
```

PM reads `workbench/status.md`, identifies the next WP, checks if source texts exist, and confirms the next batch scope. If sources are missing, it tells you what to provide.

### 1.5. Source-map

```
/pm → "Build source map for WP8 from the agreed source files"
```

PM extracts the relevant passages from the raw source files and writes `workbench/drafts/YYYY-MM-DD-wpN-source-map.md`.

This file is the drafting dossier. It contains, per planned carousel:

- planned `id`
- planned `series`
- one-sentence conceptual spine
- exact quotations or paraphrase-ready notes
- file and line references
- public-facing citation target for publishable `subText`
- `allowed claims`
- `do not infer`
- overlap to avoid with existing bank posts

If any planned post cannot be supported cleanly from the sources, PM normalizes or cuts the post before batch specs are created.

### 2. Batch spec

```
/pm → "Create batch spec for workbench/drafts/2026-03-24-wp8a/"
```

PM creates a batch spec at `workbench/drafts/YYYY-MM-DD-wpN*/batch-spec.md` from the source map.

### 3. Draft

```
/writer → "Draft batch at workbench/drafts/2026-03-24-wp8a/"
```

Writer reads the batch spec, the source map, and only the source files named there. Writes `draft.js` with 3–5 carousel objects.

### 4. Editor review

```
/editor → "Review draft at workbench/drafts/2026-03-24-wp8a/draft.js"
```

Editor evaluates each carousel against the rubric (`prompts/critic-prompt.md`). Writes `feedback.md` with per-carousel PASS/REVISE verdicts. This is diagnostic feedback for PM, not the final batch decision.

Publishable citation check:

- repo file names and paths are acceptable inside the source map and batch spec as internal support only
- they are not acceptable inside publishable carousel `subText`
- drafts should cite ancient/public sources, not `Alchemy.md`, `alchem.md`, `napkins.md`, or other repo file names

### 5. PM decision

```
/pm → "Read feedback at workbench/drafts/2026-03-24-wp8a/feedback.md and issue a PM brief"
```

PM reads the latest draft plus the latest editor feedback and writes `pm-brief.md`. The brief ends with one batch status only:

- `REVISE` — authoritative instructions back to the writer
- `GOOD` — internal loop complete; batch is ready for user review

PM may waive minor stylistic issues. PM may not waive unresolved source-fidelity failures.

### 6. Revise

```
/writer → "Revise using pm-brief.md at workbench/drafts/2026-03-24-wp8a/"
```

Writer reads `pm-brief.md`, the latest draft, the source map, and only the source files named there. Revises only the carousels PM marked for change. Writes `draft-r1.js`.

### 7. Editor re-review

```
/editor → "Re-review draft-r1.js at workbench/drafts/2026-03-24-wp8a/"
```

Editor re-reviews. Writes `feedback-r1.md` with specific remaining issues or a clear pass. Does not re-raise issues that were fixed.

### 8. PM decision (again)

```
/pm → "Read feedback-r1.md at workbench/drafts/2026-03-24-wp8a/ and issue pm-brief-r1.md"
```

PM reads the revised draft plus the latest editor feedback and writes `pm-brief-r1.md`.

- If PM says `REVISE`, the batch returns to the writer for one final revision round: `draft-r2.js`, `feedback-r2.md`, `pm-brief-r2.md`
- If PM says `GOOD`, the internal loop ends

Max 2 revision rounds; after that, escalate to user.

### 8.5. Approve (USER ACTION)

Review the final draft yourself. Say "go" or give feedback.
Nothing enters `carousels.js` without your explicit approval.
This applies to ALL additions — full batches and one-off posts alike.

### 9. Finalize

```
/pm → "Finalize batch at workbench/drafts/2026-03-24-wp8a/"
```

PM merges the user-approved carousels into `carousels.js`, updates `workbench/status.md` and `workbench/dashboard.md`, runs validation, and summarizes: what was done, what's next, what source texts to supply.

## Constraints

- **Batch size**: 3–5 carousels per cycle
- **Max revision rounds**: 2 (then escalate)
- **Source fidelity**: Hard-fail gate — every claim must trace to provided source text
- **Citation hygiene**: publishable `subText` must use ancient/public citations rather than repo file names or local file paths
- **PM gate**: PM is the final internal editorial gate, but never replaces explicit user approval
- **Source-map gate**: Writer does not draft from raw files alone when the sources are composite, scattered, or in XML
- **No self-review**: Writer never critiques; Editor never rewrites; PM does not draft carousel copy during review
- **Logical handoff only**: Writer, Editor, and PM pass work through the batch folder; the user or main session still orchestrates the actual agent calls

## File trail

Each batch run contains the full audit trail:

```
YYYY-MM-DD-wpN-source-map.md → PM source dossier
batch-spec.md                → what to draft
draft.js                     → initial draft
feedback.md                  → editor's first diagnostic review
pm-brief.md                  → PM's authoritative revise/good decision
draft-r1.js                  → revised draft
feedback-r1.md               → editor's re-review
pm-brief-r1.md               → PM's second decision
draft-r2.js                  → final revision, if needed
feedback-r2.md               → final editor pass, if needed
pm-brief-r2.md               → PM's final internal decision, if needed
```
