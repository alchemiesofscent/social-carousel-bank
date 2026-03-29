# Batch Spec: 2026-03-24 -- The Marketplace (Batch B)

## Work Package
WP10 -- The Marketplace

## Current state
- 2 of 7 WP10 posts complete: `fire-test`, `worm-trick`
- Batch A (5 carousels from Galen XML) in progress in parallel
- This batch adds 4 carousels (3 from WP10 proper + 1 bonus) drawn from napkins.md sources
- After both batches: WP10 at 11 posts (7 WBS + 2 extensions + 2 bonus)

## Posts in this batch

| # | Carousel ID | WP ref | Topic | Series |
|---|-------------|--------|-------|--------|
| 1 | `diogenes-perfumery` | WP10.7 | Diogenes takes a man to the perfume shop to prove Athens is cheap or expensive depending on how you live. "How much for a kotyle of kypros?" "A mina!" Then figs: "Two coppers." The city is not expensive -- you are. | THE MARKETPLACE |
| 2 | `root-cutters` | WP10.5 | Galen's three-layer supply chain of adulteration: rhizotomoi (root-cutters) harvest and adulterate first, then emporoi (wholesalers) add their own fraud, then rhopopolai (hucksters) sell the thrice-corrupted product. The doctor who trusts the market gets what he deserves. | THE MARKETPLACE |
| 3 | `harvest-window` | WP10.3 | Dioscorides preface on collection and storage: harvest in fair weather, mountain herbs stronger than lowland, hellebore lasts years but most herbs only three, store flowers and aromatics in linden-wood boxes, liquids in silver or glass or tin. The pharmacist's calendar and pantry. | THE MARKETPLACE |
| 4 | `perfumers-shade` | bonus | Theophrastus: perfumers seek upper rooms, shaded, north-facing. The sun removes scent; cold preserves potency without destroying it. Shop architecture as climate control -- the first cold chain. | THE MARKETPLACE |

## Source files

### Primary
- **All sources from napkins.md:** `workbench/napkins.md`
  - Lines 155-183: Teles via Stobaeus -- Diogenes at the perfume shop (`diogenes-perfumery`)
  - Lines 2-21: Galen, Comp. Med. Gen. 3.2, 13.570-573 K -- root-cutters / supply chain (`root-cutters`)
  - Lines 1094-1154: Dioscorides preface 1.Pr.6-9 -- harvest, shelf life, storage (`harvest-window`)
  - Lines 135-147: Theophrastus, Fragmenta, frag. 4.40 -- perfumers' shaded shops (`perfumers-shade`)

### No XML needed
All four carousels in this batch use pre-extracted Greek + English from napkins.md. No XML parsing required.

## Key Greek terms for the writer

| Greek | Transliteration | Meaning | Carousel |
|-------|----------------|---------|----------|
| ῥιζοτόμοι | rhizotomoi | root-cutters (first-stage harvesters) | `root-cutters` |
| ῥωποπῶλαι | rhōpopōlai | hucksters / petty dealers (retail stage) | `root-cutters` |
| ἔμποροι | emporoi | wholesalers (middle stage) | `root-cutters` |
| κοτύλη | kotylē | a liquid measure (~270 ml) | `diogenes-perfumery` |
| μνᾶ | mna | a mina (~430g silver, ~100 drachmas) | `diogenes-perfumery` |
| ἀπόθεσις | apothesis | storage / laying-up | `harvest-window` |
| παλίσκιος | paliskios | deeply shaded | `perfumers-shade` |
| κιβώτιον φιλύρινον | kibōtion philyrinon | linden-wood box (for storing aromatics) | `harvest-window` |

## Notes

- All 4 posts belong to THE MARKETPLACE series. Use series header "THE MARKETPLACE" on slide 1.
- This batch complements Batch A: where Batch A draws on Galen's De Antidotis (Roman urban marketplace, XML source), Batch B draws on three different authors (Galen Comp. Med. Gen., Dioscorides preface, Theophrastus fragments, Teles/Stobaeus) all from napkins.md.
- `root-cutters` and Batch A's `huckster-test` both treat adulteration but from different angles: `huckster-test` is Galen's De Antidotis on retail fraud and sensory testing; `root-cutters` is Galen's Comp. Med. Gen. on the full supply chain from mountain to market. Differentiate accordingly.
- `diogenes-perfumery` is a Cynic moral lesson, not a technical passage. The perfume shop is the setting, not the subject. Tone should reflect the anecdotal/philosophical register of Teles via Stobaeus.
- `harvest-window` covers Dioscorides' practical advice on timing, terrain, and storage. Key data points: harvest in fair weather; mountain > lowland; hellebore lasts many years, most herbs 3; store flowers/aromatics in linden boxes (kibotion philyrinon); liquids in silver, glass, horn, or tin (kassiterinois).
- `perfumers-shade` is a bonus post not in the original WBS. The concept: Theophrastus observes that perfumers choose upper-story, north-facing, deeply shaded (paliskios) rooms because sun destroys scent while cold merely suppresses it without permanent damage. Ancient climate engineering for volatile preservation.
- Cross-reference existing MARKETPLACE posts: `fire-test` (Dioscorides frankincense adulteration) and `worm-trick` (styrax insect fraud) establish the series tone. Match that register for the technical posts; allow `diogenes-perfumery` a lighter, more narrative voice.
