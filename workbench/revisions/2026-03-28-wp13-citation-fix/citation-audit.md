# WP13 Citation Audit

Date: 2026-03-28
Batch: `workbench/revisions/2026-03-28-wp13-citation-fix/`

## Summary

The WP13 live entries are source-safe, but several publishable `subText` fields cite local repo files instead of ancient/public references. This is a citation-format leak, not a source-fidelity failure.

## Where The Error Entered

1. `workbench/drafts/2026-03-28-wp13-source-map.md`
   - Stored internal support as repo file + line anchors only.
   - It did not also provide a public citation target for publishable `subText`.

2. `workbench/drafts/2026-03-28-wp13a/batch-spec.md` and `workbench/drafts/2026-03-28-wp13b/batch-spec.md`
   - Repeated those same local file anchors as "key sources."
   - This preserved internal support, but still did not convert support into public-facing citations.

3. Writer stage
   - `draft.js` for both batches imported those local labels directly into `subText`.
   - The problem appears first here:
     - `Alchemy.md recipe tables`
     - `Zosimos in alchem.md`
     - `alchem.md:21-37`
     - `alchem.md:149-151, 165-173, 2448-2464, 3093-3120`
     - `Zosimos, alchem.md`
     - `alchem.md:46-63, 70-80, 232-246, 268-281`

4. Revision rounds
   - `draft-r1.js` and `draft-r2.js` preserved these citation strings because the requested revision rounds were structural/tone-only.
   - No PM brief instructed a citation-format cleanup.

5. Editor / PM review
   - `feedback*.md` and `pm-brief*.md` correctly checked source fidelity.
   - They did not check whether the `subText` citations were suitable for publication.

6. Final merge
   - The live objects in `carousel-bank/src/data/carousels.js` inherited the same `draft-r2.js` `subText` lines unchanged.

## What This Means

- The evidence chain for WP13 is still valid.
- The error is that internal research-path citations were mistaken for publication-ready citations.
- The fix should be surgical:
  - preserve the copy
  - replace repo-file references with ancient/public references
  - leave unsupported inference boundaries unchanged

## Out Of Scope For This Batch

- `organon-not-cloth` hook-length trim
  - That is a separate WP7 published fix and should be handled in its own revision batch.
- Any rewrite of live WP13 body copy
  - Only micro-adjust if absolutely needed to accommodate corrected citations cleanly.
