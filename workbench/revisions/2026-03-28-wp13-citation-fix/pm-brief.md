# PM Brief — WP13 Citation Fix

Batch: `workbench/revisions/2026-03-28-wp13-citation-fix/`
Revision class: `surgical`

## Summary

This is a published-revision batch for the 5 live WP13 entries now in `carousel-bank/src/data/carousels.js`.

The problem is not source fidelity. The problem is that several publishable `subText` fields still cite local repo files instead of ancient/public references.

Use:
- `published-base.js`
- `citation-audit.md`
- `source-crosswalk.md`

Do not rewrite the posts unless a tiny copy adjustment is absolutely necessary to keep a corrected citation readable.

## Batch Rules

- Base all revision work on `published-base.js`, not on historical draft folders.
- Preserve `mainText` everywhere unless a citation fix truly forces a micro-adjustment.
- Replace local file labels with ancient/public citations only.
- Do not widen claims.
- Do not merge or cut slides.
- Do not touch the live bank yet; this batch prepares revised objects for later re-ingestion.

## Per-Carousel Instructions

### `rhopos-and-the-perfumer`

- Pass-through.
- Current live citations are already publishable.
- Only harmonize style if absolutely necessary.

### `stypsis-before-scent`

- Change the closer `subText` only.
- Remove `Alchemy.md recipe tables`.
- Replace with the public citation set given in `source-crosswalk.md`.

### `maria-speaks-in-apparatus`

- Change hook `subText` and closer `subText`.
- Remove `alchem.md` language completely.
- Replace with the public citation set given in `source-crosswalk.md`.

### `drawn-up-dripped-fixed`

- Change hook `subText` and closer `subText`.
- Replace generic/local dossier wording with ancient/public references from `source-crosswalk.md`.
- Keep the copy procedural; citation cleanup only.

### `copper-is-dyed`

- Change hook `subText` and closer `subText`.
- Remove `alchem.md` language completely.
- Replace with the public citation set given in `source-crosswalk.md`.

## Explicit Non-Goals

- No correction of `organon-not-cloth` in this batch.
- No rewrite of WP13 hooks, bodies, or closers.
- No merge into `carousels.js` during this step.

## Acceptance Target

- Every revised WP13 `subText` cites ancient/public sources only.
- No publishable slide text mentions repo files.
- All five carousels remain source-safe and textually intact.
