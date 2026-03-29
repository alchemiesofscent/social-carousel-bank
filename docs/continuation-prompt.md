# CONTINUATION PROMPT — Instagram Carousel Bank for Ancient Perfumery Project

## Context

We are building an Instagram content bank for an academic project on ancient perfumery. The project combines scholarly research into historical texts with active experimental reconstruction of ancient perfumes. The Instagram account has ~800 followers and has been posting infrequently. We're building a stockpile of carousel posts to enable consistent posting at 3x/week.

**Target: 150 posts.** See `docs/wbs-carousel-150.md` for the original work breakdown structure, series architecture, milestones, and source feeding order. See `workbench/status.md` for current progress.

The carousel data lives in `carousel-bank/src/data/carousels.js` (the `CAROUSELS` array). The React preview app is in `carousel-bank/` — run `npm run dev` to browse mockups.

---

## Current state

**185 / 150 carousels complete.** Original target exceeded by 35.

**WPs complete (15/15):** WP1, WP2, WP3, WP4, WP5, WP6, WP7, WP8, WP9, WP10, WP11, WP12, WP13, WP14, WP15
**WP13 status:** merged 2026-03-28 (5 posts)
**WP7 status:** expanded 2026-03-29 (9 posts)
**WP12 status:** merged 2026-03-28 (6 posts)
**WP11 status:** merged 2026-03-27 (8 posts)
**WP14 status:** merged 2026-03-27

The overflow fix (body slide char limits) is also complete — validator passes clean as of 2026-03-24.

See `workbench/status.md` for the full WP table with completed IDs and `workbench/dashboard.md` for per-series inventory.

---

## How the production pipeline works

New carousels are produced via a staged agent pipeline, not by direct editing. The canonical workflow is in `workbench/workflow.yaml`.

### Stages

```
plan → source_map → batch_spec → draft → editor_review → pm_decision → revise → editor_re_review → pm_decision → approve → finalize
```

| Stage | Agent | Output |
|-------|-------|--------|
| plan | PM / general editor | confirms next WP scope, halts if sources missing |
| source_map | PM / general editor | `workbench/drafts/{date}-{wp}-source-map.md` with cited passages |
| batch_spec | PM / general editor | `workbench/drafts/{batch-dir}/batch-spec.md` |
| draft | writer | `workbench/drafts/{batch-dir}/draft.js` |
| editor_review | editor | `workbench/drafts/{batch-dir}/feedback.md` diagnostic review for PM |
| pm_decision | PM / general editor | `workbench/drafts/{batch-dir}/pm-brief*.md` with `REVISE` or `GOOD` |
| revise | writer | `draft-r1.js` or `draft-r2.js`, using the latest PM brief |
| approve | user | explicit go/no-go before any merge, after PM says `GOOD` |
| finalize | PM / general editor | appends to `carousel-bank/src/data/carousels.js`, updates `workbench/status.md` + `workbench/dashboard.md`, runs `python3 scripts/validate_carousels.py` |

The draft/review loop repeats until PM says `GOOD`, with a maximum of 2 revision rounds.

**Approval gate:** Nothing enters `carousels.js` without explicit user approval. PM is the final internal editorial gate, but PM never merges unilaterally.

**Revision workflow:** If published carousels need fixing, work goes in `workbench/revisions/{date}-{wp}/` using the same PM-led loop: `pm-brief.md`, `draft-r1.js`, `feedback-r1.md`, optional `pm-brief-r1.md`, and user approval before replacement in `carousels.js`.

**Citation rule:** Source maps and batch specs may use repo file names and line references as internal support. Publishable carousel `subText` may not cite repo files; it must cite ancient/public sources instead.

---

## Series architecture

| Series | Status | Count | WP(s) | Notes |
|--------|--------|-------|-------|-------|
| DEAD WORDS, LIVING SCENTS | **Complete** | 68 | Pre-WP + WP3,4,5,8,9,15 | Core vocabulary. One word → one world. |
| THE RECIPE | **Complete** | 24 | WP2, WP5, WP6 | Full ancient perfume recipes step by step. |
| THE MARKETPLACE | **Complete** | 16 | Pre-WP + WP6, WP10 | Adulteration, fraud, supply chains, quality testing. |
| MATERIA | **Complete** | 20 | WP1, WP6, WP9, WP15 | Individual ingredients in depth. |
| FROM THE WORKSHOP | **Complete** | 6 | Pre-WP + WP1, WP15 | Experimental reconstruction and process posts. |
| MYRRHA | **Complete** | 3 | Pre-WP | Three-part Ovid myth mini-series. |
| ARTS OF VENUS | **Complete** | 12 | WP8 + WP12 | Perfume + luxury + desire + cosmetics + the body. |
| PHARMAKON | **Complete** | 12 | WP5 partial; horror extension merged; WP11 merged 2026-03-27 | Perfume as medicine. |
| THE NOSE KNOWS | **Complete** | 10 | WP1,4,14 + Aristotle extension | Smell theory, philosophy of scent. |
| TOOLS OF THE TRADE | **Complete** | 9 | WP7 | Physical equipment: presses, mortars, vessels, and alchemical rigs. |
| THE TRANSMUTATION | **Complete** | 5 | WP13 | Perfumery ↔ alchemy: shared vocabulary, process language, and apparatus logic. |

---

## Design rules

### Carousel data shape

```js
{
  id: "kebab-case-id",
  series: "SERIES NAME",
  slides: [
    { type: "hook", topLine: "romanized term", script: "original script", mainText: "...", subText: "source citation", badge?: "✦ WORKSHOP" },
    { type: "body", mainText: "...", subText: "optional inline citation" },
    { type: "closer", mainText: "...", subText: "optional" },
  ]
}
```

### Fields
- `topLine` (rendered 14px, muted) — romanized/anglicized reading of the term
- `script` (rendered 42px, gold) — **original writing system only**: Greek, hieroglyphic, Egyptian transliteration with diacritics (ꜣ, ḥ, ḏ), Latin. Never "✦" in this field.
- `badge: "✦ WORKSHOP"` — **required on the hook slide** of every FROM THE WORKSHOP post. Nowhere else.
- `mainText` — body slides capped at **350 characters** (enforced by validator). Hook and closer are not hard-capped but should be tight.
- `subText` — source citation or clarifying gloss. Keep short.

### Palette and fonts
- Background: `#0C0A09` (near-black)
- Accent: `#C4A265` (gold) — used for `script` field
- Text: `#E8DCC8` (cream)
- **Gentium Plus** serif for body (polytonic Greek support); Courier New monospace for series labels and transliterations
- Font: `https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap`

### Slide structure rules
- Carousels: 1 hook + 2–4 body + 1 closer (4–6 slides total; 4 is the standard, 5 for complex posts)
- Body: apply the cover test — if covering a slide doesn't break the argument, merge or cut it
- Body char limit: **350 characters** for `mainText`. Check before committing.
- Additive example chains: break after the 2nd example unless accumulation is itself the argument
- One unfamiliar foreign term per body slide maximum

---

## Tone

- PBS Eons / conversational science communication — as if writing to a curious friend, not lecturing
- Lead with the discovery, not the process of discovering
- Don't be afraid to show we don't know something
- No academic hedging in the hook — be direct, then qualify in the body
- Use Egyptian terms (antu, nenib, hekenu, tisheps, nedjem, khebeb, senetjer) instead of English translations where the vocabulary series has taught them

### Hook rules (critical — from editorial guidelines)
Hooks must do one of:
- Present a **strange concrete fact** that earns the scroll
- Set up a **sharp contrast** (X does / doesn't do Y; A costs more than B)
- Make a **category error visible** (this was classified as X but is actually Y)
- Frame **a single artifact or word as evidence of a larger world**

Hooks must NOT be expository scene-setting ("X was a perfume that...") or generic category statements ("Greek perfumers had a technical category for..."). Lead with the discovery, not the setup.

---

## Sources

### Available in workbench

| Text | File | Used by |
|------|------|---------|
| Dioscorides, DMM 1.43–1.63 (recipes) | `sources/dioscorides-1.43-1.63-recipes.txt` | WP2, WP3, WP8 |
| Dioscorides preface + fats data | `sources/diosc_fats.md` | WP2, WP3 |
| Dioscorides smell vocabulary | `sources/diosc_smell.md` | WP3 |
| Paul of Aegina 7.19–20 + Aetius 8.2 | `sources/aet_paul.md` | WP6 |
| Pliny, Natural History 12–13 | `workbench/pliny_nh_12_13.txt` | WP9, WP10, WP15 |
| Theophrastus, On Odours | `sources/theophrastus-on-odors.txt` | WP1, WP8 |
| Athenaeus, Deipnosophistae 15 | `sources/ATHENAIOS Perfumes.md` | WP4, WP8 |
| Athenaeus XML | `tlg0008001.xml` | WP4, WP8 |
| Edfu kyphi + Plutarch De Iside | `workbench/kyphi.md` | WP5 |
| Galen, Antidotis / Andromachos commentary | `tlg0057.tlg078.1st1K-grc1.xml` | WP15 extension |
| Herodotus 3.106–112 | `sources/herod3.106-112` | WP15 labdanum |
| Aristotle, On Sense 5 | `sources/arist-sense-5.md` | Aristotle smell extension |
| Plato, Timaeus 66d–67a | `sources/Plato.md` | WP14 |
| Theophrastus, De Sensibus 49–83 | `sources/Theophrastus.md` | WP14 |
| Lucretius, DRN 4.673–705 | `sources/Lucretius.md` | WP14 |
| Marcus Aurelius, Meditations 5.28 | `sources/marcus-aurelius.md` | WP14 |
| Galen smell passages | `sources/galen-smell.md` | WP14 |
| Hippocratic scent/unguent dossier | `workbench/sources/hippocrates-myron-elaion-chrisma-aleima.md` | WP11 |
| Galen therapeutic perfume passages | `workbench/sources/galen-perfume-drugs.md` | WP11 |
| Rufus of Ephesus, *De renum et vesicae morbis* | `workbench/sources/Rufus.md` | WP11 |
| Aretaeus of Cappadocia, medical passages | `workbench/sources/aretaeus.md` | WP11 |
| Perfume tools corpus (overview + text reader) | `workbench/sources/tools.md`, `workbench/sources/tools-texts.md`, `workbench/sources/tools-index.md` | WP7 |
| Alchemy overlap dossier | `workbench/sources/Alchemy.md` | WP13 |
| Zosimos / Maria apparatus dossier | `workbench/sources/alchem.md` | WP13 |
| Ovid, *Ars Amatoria* III selections | `workbench/sources/ovid-ars-am-3-selections` | WP12 |
| Ovid, *Medicamina Faciei Femineae* | `workbench/sources/Medicamina_Faciei_Femineae.txt` | WP12 |
| Catullus XIII + LXI | `workbench/sources/Catullus.md` | WP12 |
| Juvenal, *Satire* 6 | `workbench/sources/Juvenal.md` | WP12 |
| Homer, *Iliad* 14 / 18 / 23 | `workbench/sources/homer-14.xml`, `workbench/sources/homer-18.xml`, `workbench/sources/homer-23.xml` | WP12 |

### Still needed (future supplements)

| Text | Needed for |
|------|-----------|
| Periplus of the Erythraean Sea (selections) | Marketplace/trade supplements |

---

## Running vocabulary list

### Egyptian
antu, nenib, hekenu, tisheps, medjet, hedju, nedjem, khebeb, senetjer, Ta-Netjer, mamam, mesha-ib, kaheb, kheskhes, ahem, metut-desher, jz (laboratory)

### Greek
aromata, knisa, sousinon, psagdan, staktē, myron, bakkaris, pharmakis, Megalleion, kapnos, balanos, diapasma, skōlēkitēs, kedreia, bdellion, smyrna, libanos, styrax, euodia, dysodes, plektikon, baryosmon, bromodes, embolai (ἐμβολαί), myrákopa (μυράκοπα), ekplytos (ἔκπλυτος, spent/washed-out), omphas (raw/unprocessed), opobalsamum (balsam sap), xylobalsamum (balsam wood), stachys (spike — used for the root of spikenard), lacrimae (balsam sap drops), ladam (best grade labdanum)

### Latin
foliatum, Arabia Felix, per fumum, gustu fervens (burning to taste), gemina dote (double gift)

### Named perfumers
Deinias, Peron, Megallos, Amaracus, Chesmou (Egyptian god of perfumery), Andromachos (Nero's physician, whose perfume formula Galen annotates)

### Named authors
Theophrastus, Dioscorides, Galen, Pliny, Athenaeus, Plutarch, Herodotus, Herodian, Apuleius, Lucian, Archilochus, Ovid, Xenophon, Servius, Rufus of Ephesus, Aretaeus of Cappadocia, Damocrates (verse recipe for kyphi), Paul of Aegina (medical encyclopedist — distinct from Aetius of Amida; his perfume taxonomy is at 7.19–20), Aetius of Amida (pharmacologist — distinct from Paul; his cosmetic recipes are at 8.2)

---

## Research papers (Sean Coughlin and collaborators)

- Coughlin (2024), "The Perfumer's Garden" — aromata, Aristotle on smell, Herodian/Commodus plague story, gender and perfume, Egyptian perfume names
- Wilde, Míčková, Pehal & Coughlin (2025), "The Antu-List Reconsidered" — 14 varieties of antu at Edfu/Athribis
- Wilde, Míčková, Pehal & Coughlin (2025), "The Nenib-List Reconsidered" — aromatic woods, kheskhes/Seth, classification by divinity
- Ravat, Prieto Pabón & Coughlin (2024), "Making the Scent of the Perfumer's Garden" — scratch-and-sniff olfactory figures
- Golubev & Coughlin (2024), "Gut Scent: The Smell of Guts" — knisa, sacrifice smellscape
- Coughlin (forthcoming), "François Coty and the Fragrance of Places We Have Not Known" — Amaracus myth, alabastron contents
- Aufrère (2005), Edfu laboratory recipes — hekenu, tisheps, medjet
