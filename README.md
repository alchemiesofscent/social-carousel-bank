# Ancient Perfumery Instagram Content Bank

An Instagram carousel content bank for an academic project on ancient perfumery. The project combines scholarly research into historical texts (Egyptian, Greek, Roman) with active experimental reconstruction of ancient perfumes.

The content bank is a React preview app that renders interactive carousel mockups — browse, navigate slides, and review all posts before publishing.

## Quick start

```bash
cd carousel-bank
npm install
npm run dev
```

Opens at http://localhost:5173. Click carousel headers to expand, click left/right on slides to navigate.

## Share for review

Primary path: publish the Vite app to GitHub Pages and send reviewers the site URL.

- Local dev: `cd carousel-bank && npm run dev`
- Production build: `cd carousel-bank && npm run build`
- Reviewers can deep-link to a specific slide with hashes like `#kerotakis-gentle-heat/2`
- Expanded carousels include `Copy link` and `Copy note` buttons for quick feedback handoff

Expected Pages URL after repo setup:

```text
https://alchemiesofscent.github.io/social-carousel-bank/
```

Offline fallback:

- build the app with `npm run build`
- share the `carousel-bank/dist/` folder as a zip
- if a reviewer cannot open the folder directly, serve it locally with a tiny static server instead of editing the files

## Project structure

```
.
├── carousel-bank/          Vite + React preview app
│   ├── src/
│   │   ├── App.jsx         Renderer — expand/collapse + hash-linked review state
│   │   ├── components/     SlideHook, SlideBody, SlideCloser, Carousel
│   │   └── data/
│   │       └── carousels.js   CAROUSELS array + PALETTE (single source of truth)
│   ├── index.html          Loads Gentium Plus from Google Fonts
│   ├── vite.config.js      Relative-base static build for Pages and local export
│   └── CLAUDE.md           Dev guide for Claude Code
├── .github/
│   └── workflows/
│       └── pages.yml       GitHub Pages deployment workflow
├── workbench/
│   ├── status.md               Tracking: milestones, WP progress, priorities
│   ├── sources/                Primary source texts (Dioscorides, etc.)
│   ├── drafts/                 Batch directories for draft→review→revise cycles
│   ├── workflow.yaml           Machine-parseable workflow stage definitions
│   └── workflow.md             Human-readable workflow narrative
├── prompts/
│   └── critic-prompt.md        Editorial rubric (6 dimensions + source fidelity gate)
├── docs/
│   ├── continuation-prompt.md   Workflow, series definitions, tone, source tracking
│   ├── wbs-carousel-150.md      Work breakdown: 15 work packages, 154 planned posts
│   └── carousel-bank-17.qc.md  QC report from consolidation of earlier versions
├── archive/                Legacy single-file versions (carousel-bank-15, 16, 17)
└── scripts/
    └── validate_carousels.py   QC: parse integrity, duplicates, structure, series
```

## Content overview

**Current count: 185 carousels.** Original target: 150 posts (3x/week posting cadence), now exceeded.

All 15 planned work packages are complete. WP7 has since been expanded beyond its original six-post target. For live counts, completed IDs, and current work-package status, use `workbench/status.md` and `workbench/dashboard.md`.

### Series

| Series | Description |
|--------|-------------|
| DEAD WORDS, LIVING SCENTS | Core vocabulary — one ancient word, one world |
| FROM THE WORKSHOP | Experimental reconstruction and process documentation |
| MYRRHA | Three-part Ovid myth mini-series (complete) |
| THE RECIPE | Full ancient perfume recipes, step by step |
| MATERIA | Individual ingredients in depth |
| THE NOSE KNOWS | Smell theory and philosophy of scent (complete) |
| THE MARKETPLACE | Adulteration, quality testing, fraud, pricing |
| ARTS OF VENUS | Perfume, luxury, desire, cosmetics, the body (complete) |
| TOOLS OF THE TRADE | Physical equipment: presses, mortars, vessels, and alchemical rigs |
| THE TRANSMUTATION | Perfumery and alchemy (complete) |
| PHARMAKON | Perfume as medicine (complete) |

### Primary sources

Theophrastus (*On Odours*), Dioscorides (*De Materia Medica*), Galen, Pliny (*Natural History*), Athenaeus (*Deipnosophists* 15), Plutarch, Ovid (*Metamorphoses*), Apuleius, Lucian, Xenophon, and the Edfu temple laboratory inscriptions.

## Adding new carousels

1. Read [docs/continuation-prompt.md](docs/continuation-prompt.md) for workflow rules, tone, and series definitions
2. Read [docs/wbs-carousel-150.md](docs/wbs-carousel-150.md) for the original work breakdown and historical planning scope
3. Append carousel objects to the `CAROUSELS` array in `carousel-bank/src/data/carousels.js`

Python note: the review/share setup does not require additional Python packages. The repo already includes `.venv/` for local scripting, but no extra `requirements.txt` is needed for the static review site.

Each carousel follows this shape:

```js
{
  id: "unique-slug",
  series: "SERIES NAME",
  slides: [
    { type: "hook", topLine: "word", script: "Greek/hieroglyphs", mainText: "...", subText: "..." },
    { type: "body", mainText: "...", subText: "..." },
    { type: "closer", mainText: "...", subText: "..." },
  ],
}
```

- `script`: original-language form (Greek polytonic, hieroglyphic, Latin). Never use `"✦"` here — that belongs in the `badge` field for workshop entries.
- `badge`: optional, only on hook slides for FROM THE WORKSHOP posts (e.g. `"✦ WORKSHOP"`).
- `subText`: optional on body slides, present on hook and closer slides.

## Design

Dark background with gold and cream palette. Typography uses Gentium Plus (serif, with polytonic Greek support) for body text and Courier New (monospace) for series labels and transliterations. All colors defined in `PALETTE` — no inline hex values outside it.

| Token | Hex | Use |
|-------|-----|-----|
| bg | `#0C0A09` | Page background |
| bgSlide | `#141211` | Slide background |
| cream | `#E8DCC8` | Primary text |
| gold | `#C4A265` | Accent, script text, indicators |
| goldDim | `#8B7345` | Subtle accents, dividers |
| muted | `#9C9486` | Secondary text |
| accent | `#D4622A` | Orange gradient accent |
| dark | `#1C1917` | Carousel card background |

## Tone

PBS Eons / conversational science communication. Lead with the discovery, not the process. Be direct in hooks, qualify in body slides. Use Egyptian and Greek terms (antu, stakte, aromata) rather than English translations — the vocabulary series teaches these over time. Don't be afraid to say "we don't know."
