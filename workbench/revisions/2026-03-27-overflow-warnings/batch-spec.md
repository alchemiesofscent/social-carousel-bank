# Batch Spec — Overflow Warnings

Batch: `workbench/revisions/2026-03-27-overflow-warnings/`
Date: 2026-03-27

Source of truth:
- current published text in `carousel-bank/src/data/carousels.js`
- validator thresholds in `scripts/validate_carousels.py`

Status:
- published-revision mini-batch
- overflow-compliance pass only
- no count or series changes

## Entries

| ID | Series | Revision class | Problem |
|----|--------|----------------|---------|
| `horror-recipe` | `PHARMAKON` | `surgical` | hook and closer exceed validator limits |
| `pachrates-hadrian` | `PHARMAKON` | `surgical` | hook and closer exceed validator limits |
| `blood-ink` | `FROM THE WORKSHOP` | `surgical` | closer exceeds validator limit |

## Constraints

- Edit only the five warning slides.
- Keep the conceptual spine of each post unchanged.
- Do not alter IDs, series, body slides, citations, or slide order.
- Hook max: `120` chars.
- Closer max: `150` chars.
- Prefer compression over reframing.

## Acceptance

- `python3 scripts/validate_carousels.py` reports no overflow warnings for these three entries.
- No new warnings are introduced.
- The revised hooks and closers remain recognizably the same posts.
