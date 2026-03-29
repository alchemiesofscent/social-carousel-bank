# Published Revision Queue

This queue covers the full published bank in `carousel-bank/src/data/carousels.js`.

Default rule:

- any entry explicitly named in Wave A or Wave B follows that assignment
- all remaining published entries are Wave C `pass-through`

## Wave A

First mandatory revision wave. These entries have repeated or high-severity issues in `report.md` and / or `workbench/report.md`.

### A1. Lexical density and overloaded theory

Revision class: `surgical-structural`

- `euodia-dysodes`
- `baryosmon-bromodes`
- `izo-verbs-adulteration`
- `hicesius-drinking-perfumes`

### A2. Ritual-process overload

Revision class: `surgical-structural`

- `hekenu`
- `tisheps`
- `medjet`
- `kyphi-edfu`

### A3. Marketplace comparison and accumulation failures

Revision class: `surgical-structural`

- `falernian-scale`
- `aetius-people`
- `new-spices`
- `karyophyllon`

### A4. Dense published posts already flagged in draft review

Revision class: `surgical`

- `kyphi-medicine`
- `kyphi-dioscorides`
- `tus-supply-chain`
- `balsam-judea`
- `nero-poppaea-funeral`

### A5. WP4 / WP6 / WP10 posts needing body-economy cleanup

Revision class: `surgical`

- `perfume-war-athens-sparta`
- `perfume-and-soul`
- `egyptian-perfume-symposium`
- `church-incense`
- `susinum`
- `mendesian-paul`
- `root-cutters`

## Wave B

Second surgical wave. These posts are not the worst offenders, but they have clear readability, overlap, or closer problems worth fixing before human copy edit.

Revision class: `surgical` unless noted otherwise.

### B1. Strong posts with dense first body slides or softer endings

- `cinnamon-fables`
- `piper-gold`
- `pliny-royal-perfume`
- `pliny-perfume-shelf-life`
- `garlands-symposium`
- `blind-perfumers`
- `diogenes-perfumery`
- `harvest-window`

### B2. Strong concepts with mild tonal drift or over-modernization

- `galen-warehouse`
- `huckster-test`
- `summer-ships`
- `perfumers-shade`
- `castor-linseed`
- `cleopatra-regime`
- `perfume-shops`
- `witchs-art`
- `perfume-grey`

### B3. Overlap or duplication management

- `smells-of-nothing`
- `body-perfume-map`
- `mesha-ib`
- `edfu-trees`

### B4. Recipe / materia density that may not require structure changes

- `sousinon-recipe`
- `irinum-recipe`
- `amarakinon-recipe`
- `bdellium`
- `smyrna-grades`
- `cedar-life-death`
- `moschos`

## Wave C

Human-first / pass-through wave.

Revision class: `pass-through`

Use PM notes only. Do not machine-rewrite unless a human copy editor requests it after review.

This includes all remaining published entries not named in Wave A or Wave B.

Priority examples inside Wave C:

- `plektikon`
- `kyphi-solar-lunar`
- `perfumers-wrist`
- `scratchandsniff`
- `stakte-definition`
- `rose-garland-medicine`
- `per-fumum`
- `fire-test`
- `worm-trick`

## Operational rules

- Batch by shared problem, not just by series
- Use the current published object as `published-base.js`
- Historical drafts are reference-only
- PM may downgrade a Wave A or B entry to `pass-through` after seeing a failed first rewrite
- PM may not upgrade a Wave C entry into machine rewrite without recording why in the batch spec
