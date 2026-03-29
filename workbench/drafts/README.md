# Drafts Directory

Batch directories for the draft → editor review → PM decision → revise production cycle.

## Naming convention

```
YYYY-MM-DD-wpN/
```

Example: `2026-03-17-wp3/`

## Contents of each batch directory

| File | Created by | Purpose |
|------|-----------|---------|
| `batch-spec.md` | PM agent | What to draft: posts, series, sources |
| `draft.js` | Writer agent | Initial draft carousel objects |
| `feedback.md` | Editor agent | Diagnostic review for PM |
| `pm-brief.md` | PM agent | Authoritative `REVISE` or `GOOD` brief |
| `draft-r1.js` | Writer agent | Revised draft addressing PM brief |
| `feedback-r1.md` | Editor agent | Re-review after `draft-r1.js` |
| `pm-brief-r1.md` | PM agent | Second `REVISE` or `GOOD` decision |
| `draft-r2.js` | Writer agent | Optional final revision round |
| `feedback-r2.md` | Editor agent | Optional final editor pass |
| `pm-brief-r2.md` | PM agent | Optional final PM decision |

## Workflow

1. PM creates batch spec
2. Writer drafts from spec + sources
3. Editor reviews against rubric (`prompts/critic-prompt.md`) and writes `feedback.md`
4. PM reads the latest draft plus editor feedback and writes `pm-brief.md`
5. If PM says `REVISE`, writer revises from the PM brief and the loop repeats
6. PM ends the internal loop by marking the batch `GOOD` (max 2 revision rounds)
7. **User approves** — nothing enters `carousels.js` without explicit user approval
8. PM finalizes: merges approved carousels into `carousels.js`, updates status
