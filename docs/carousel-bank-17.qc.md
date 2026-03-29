# Carousel Bank QC Report

- Root scanned: `/home/seancoughlin`
- JSX files discovered: 9
- Unique file hashes: 4
- Exact duplicate groups: 3
- Final merged carousel count: 77

## Duplicate Files
- `carousel-bank-15 (2).jsx`, `carousel-bank-15 (3).jsx`, `carousel-bank-15 (6).jsx`
- `carousel-bank-15 (1).jsx`, `carousel-bank-15 (4).jsx`, `carousel-bank-15.jsx`
- `carousel-bank-16 (1).jsx`, `carousel-bank-16.jsx`

## Fixed
- Converted the visible carousel count to `CAROUSELS.length`.
- Added 13 IDs only present in `carousel-bank-15.jsx`: balanos-oil, shelf-life, last-added, roots-vs-flowers, thasian-wine, perfumers-wrist, cassia-cinnamon, smell-of-nothing, smyrna-grades, fire-test, worm-trick, bdellium, cedar-life-death.
- Applied targeted entry overlays from `carousel-bank-15 (5).jsx` for: aristotle-nose, gender-perfume, irinum-recipe, perfumers-wrist, sousinon-recipe, stakte.
- Updated `sousinon-recipe` citation to `Dioscorides, De Materia Medica 1.52.` from `book 1 recipes working.txt`.
- Updated `irinum-recipe` citation to `Dioscorides, De Materia Medica 1.56.` from `book 1 recipes working.txt`.
- Preferred hieroglyphic hook `script` values when available: ahem -> 𓄿𓉔𓅓𓆰𓏥, hedju -> 𓌉𓌉𓌉𓆰𓏥, mesha-ib -> 𓅓𓂝𓈚𓎺𓏏, tisheps -> 𓍘𓀼𓋴𓆭, medjet -> 𓅓𓆓𓎯.
- Added workshop badges and restored source-language `script` values where available for: scratchandsniff, mendesian, stakte, perfumers-wrist.

## Conflicts
- IDs with source-level variants: `aristotle-nose`, `gender-perfume`, `irinum-recipe`, `perfumers-wrist`, `sousinon-recipe`, `stakte`

## Doc Mismatches
- None.

## Remaining Review
- No remaining deterministic QC issues.
