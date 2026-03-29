# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install && npm run dev   # Dev server at http://localhost:5173
npm run build                # Production build to dist/
npm run preview              # Preview production build
```

No tests or linter configured.

## Architecture

Vite + React 19 app that renders Instagram carousel mockups. Purely static — no network calls, no async, no database. Gentium Plus serif font loaded from Google Fonts in `index.html`.

**Single data source:** `src/data/carousels.js` exports both `CAROUSELS` (array of carousel objects) and `PALETTE` (8-color theme object). All components import from this one file.

**Render chain:** `App.jsx` → `Carousel.jsx` → conditional `SlideHook` | `SlideBody` | `SlideCloser` based on `slide.type`. App manages only which carousel is expanded. Carousel manages slide navigation (click left/right halves). Components are pure renderers with no state.

## Data shape

```js
{
  id: "unique-slug",
  series: "SERIES NAME",        // e.g. "DEAD WORDS, LIVING SCENTS", "FROM THE WORKSHOP"
  slides: [
    { type: "hook", topLine: "word", script: "Greek/hieroglyphs", mainText: "...", subText: "...", badge: "✦ WORKSHOP" },
    { type: "body", mainText: "...", subText: "..." },   // subText optional on body
    { type: "closer", mainText: "...", subText: "..." },
  ],
}
```

- `script` field on hook slides should contain the original-language form (Greek, hieroglyphic, Latin) — never `"✦"` (that's for the `badge` field on workshop entries only).
- Hook slides: `topLine`, `script`, `subText`, `badge` are all optional. Body slides: `subText` optional.

## Adding carousels

1. Read `../docs/continuation-prompt.md` for workflow, series definitions, and voice/tone rules
2. Read `../docs/wbs-carousel-150.md` for the work breakdown and which topics remain
3. Append to the `CAROUSELS` array in `src/data/carousels.js`

## Workbench

Before starting work, read `../workbench/status.md` for current WP progress, priorities, and what sources are available.

After adding carousels:
1. Update `../workbench/status.md` — add new carousel IDs to the relevant WP row, update done/target counts
2. Run `python3 ../scripts/validate_carousels.py` to check integrity
3. Run `python3 ../scripts/validate_carousels.py --wp-status` to verify counts match status.md

## Agent workflow

Carousel production uses three specialized agents (`pm`, `writer`, `editor`) with a structured draft → editor review → PM decision → revise loop. See `../workbench/workflow.md` for the full sequence.

- **GATE: No carousel may be appended to `carousels.js` without explicit user approval.** This applies to all additions — batches, one-offs, and revisions. Always present the draft for review first.
- **Batch drafts** go in `../workbench/drafts/YYYY-MM-DD-wpN/` — not directly into `carousels.js`
- **PM is also the general editor**: editor feedback goes back to PM, and PM issues the authoritative `pm-brief*.md` instructions to the writer
- **Editorial rubric** at `../prompts/critic-prompt.md` (6 dimensions + source fidelity gate, diagnostic feedback for PM)
- Only the PM agent merges approved drafts into `carousels.js` during the finalize stage, after PM says `GOOD` and the user has explicitly approved

## Style rules

All colors must come from `PALETTE` — no inline hex values outside it.
