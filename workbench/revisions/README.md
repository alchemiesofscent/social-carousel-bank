# Published Revision Workflow

This directory holds pre-copy-edit revision work for already published carousels.

The goal is not to rewrite the bank. The goal is to reduce friction before a human copy editor sees it:

- trim density
- fix clear hook/body misalignment
- reduce term-load and name-load
- improve weak closers
- remove obvious tonal drift

Published text is always the drafting base. Historical draft files are reference material only.

## Agent roles

- `pm`: batches published entries, writes revision comments, decides pass / re-revise / leave for human
- `writer`: revises against PM comments only
- `editor`: reviews the revised text against the rubric and the minimal-change standard

The main session orchestrates all handoffs. Subagents do not spawn each other.

## Revision classes

### `pass-through`

No machine rewrite. PM writes notes for the human copy editor and leaves the published text unchanged.

Use for:

- already strong posts
- posts with only optional polish
- posts where any machine edit would likely create new problems

### `surgical`

Sentence-level and line-level tightening only.

Allowed:

- cut repeated phrasing
- clarify a dense line
- reduce one overloaded term cluster
- sharpen a closer without changing the post’s structure
- smooth over-modernized diction

Not allowed:

- cutting slides
- merging slides
- reordering slides
- changing the post’s conceptual spine

### `surgical-structural`

Default to surgical edits, plus one limited structural move when the reports clearly justify it.

Allowed:

- merge one weak body slide into a neighboring slide
- cut one body slide that fails the cover test
- move one body slide if sequencing is the main problem

Not allowed:

- full rewrite from scratch
- changing the hook concept
- adding new claims or context not already present in the published post and source trail

## Batch size and limits

- Batch size: 3–5 entries
- Max machine revision rounds: 2
- If round 2 still has unresolved issues, PM either leaves it for human copy edit or escalates

## File trail

Each published-revision batch should contain:

- `batch-spec.md`
- `published-base.js`
- `pm-comments.md`
- `draft-r1.js`
- `editor-feedback-r1.md`
- `pm-decision-r1.md`
- optional `draft-r2.js`
- optional `editor-feedback-r2.md`
- `pm-decision-final.md`

## PM comment format

For each entry:

- `revision_class`
- `carry_forward`
- `fix_now`
- `do_not_do`
- `acceptance`

## Minimal-change rule

The Writer should always prefer the least invasive fix that solves the problem.

Order of preference:

1. Trim or simplify wording
2. Tighten one overloaded body slide
3. Improve closer novelty
4. Merge or cut one body slide only if the reports clearly show an economy failure

## Review standard

The Editor reviews against:

- `prompts/critic-prompt.md`
- `workbench/report.md`
- `report.md`
- the assigned revision class

The Editor should flag not only unresolved problems but also over-revision:

- voice drift from the published bank
- unnecessary structural change
- fresh unsourced framing
- loss of a strong existing hook or closer
