# Batch Spec: 2026-03-24 — The Marketplace (Batch A)

## Work Package
WP10 -- The Marketplace

## Current state
- 2 of 7 WP10 posts complete: `fire-test`, `worm-trick`
- This batch adds 5 carousels (3 from WP10 proper + 1 extension + 1 bonus)
- After this batch: WP10 at 7/7 (or 7+2 with extensions/bonus)

## Posts in this batch

| # | Carousel ID | WP ref | Topic | Series |
|---|-------------|--------|-------|--------|
| 1 | `galen-warehouse` | WP10.2 | Galen at the spice warehouse: his shopping trips in Rome's perfume district, testing ingredients by taste and smell, the expertise gap between doctors and perfumers | THE MARKETPLACE |
| 2 | `huckster-test` | WP10.4 ext. | Galen's term καπηλεύοντες (hucksters) for retail dealers who adulterate. Even the most experienced experts are deceived. Quality testing by taste (γεῦσις) and smell (ὄσφρησις) requires years of practice. Galen's real solution: skip the market, get a friend at the source. | THE MARKETPLACE |
| 3 | `falernian-scale` | WP10.6/7 | Galen uses Falernian-vs-tavern wine (καπηλεῖα) as his universal quality yardstick -- applied to balsam, storax, and cinnamon substitution. If you can't get the best, double the dose of the second-best. Wine as the universal metric in a world without standardized units. | THE MARKETPLACE |
| 4 | `summer-ships` | WP10.2 ext. | Every summer, wicker baskets (πλεκτά) of fresh herbs arrive in Rome from Crete and Libya. Cretan botanists on the imperial payroll send herbs, fruits, seeds, roots, juices. Perfume merchants (μυροπῶλαι) buy annually and learn quality by comparing this year's shipment to last year's memory. Galen: "anyone who can't figure this out would be a clear donkey." | THE MARKETPLACE |
| 5 | `blind-perfumers` | bonus | The blind perfumers of Rome: perfumers who know Cretan imports by rote but cannot identify the same plants growing in Rome's own suburbs -- expertise as pattern-matching vs. real botanical knowledge | THE MARKETPLACE |

## Source files

### Primary
- **Galen, De Antidotis Book 1 (Greek + XML):** `workbench/tlg0057.tlg078.1st1K-grc1.xml`
  - Full TLG text of De Antidotis. The writer should extract relevant passages on:
    - Warehouse/shopping trips (Vol. 14 passim)
    - Adulteration tests and the hedychroion anecdote (Vol. 14, p. 51)
    - Regional quality rankings and Cretan herbs (Vol. 14, p. 30, p. 53)
    - Seasonal shipping and freshness (Vol. 14 passim)

### Secondary
- **Napkins excerpts:** `workbench/napkins.md`
  - Lines 96-106: Galen on perfumers who know Cretan imports but ignore local Roman plants (Vol. 14, p. 30, l. 14) -- key passage for `blind-perfumers`
  - Lines 109-120: The hedychroion misunderstanding -- doctor seeks "sweet wine" from perfumers thinking it is a plant (Vol. 14, p. 51, l. 16) -- key passage for `huckster-test`
  - Lines 123-130: "Not even all perfumers recognize them" -- they only buy Cretan herbs (Vol. 14, p. 53, l. 7) -- supporting passage for `blind-perfumers`

## Key Greek terms for the writer

| Term | Transliteration | Meaning |
|------|----------------|---------|
| ἀποθήκη | apothēkē | warehouse/storehouse |
| καπηλεύοντες | kapēleuontes | hucksters, retail dealers who adulterate |
| καπηλεῖα | kapēleia | taverns, retail wine-shops |
| μυροπῶλαι | myropōlai | perfume sellers |
| πλεκτά | plekta | wicker baskets (for shipping herbs) |
| γεῦσις | geusis | taste (as quality test) |
| ὄσφρησις | osphrēsis | smell (as quality test) |
| παλίσκιος | paliskios | deeply shaded |

## Notes

- All 5 posts belong to THE MARKETPLACE series. Use series header "THE MARKETPLACE" on slide 1.
- Existing MARKETPLACE posts (`fire-test`, `worm-trick`) derive from Dioscorides. This batch shifts the source base to Galen, giving the series a second voice and a Roman urban setting.
- The `blind-perfumers` carousel is a bonus post not in the original WBS. It extends WP10 beyond the planned 7 posts. The concept: Galen's observation that Roman perfumers are expert importers but terrible botanists -- they recognize dried Cretan herbs but walk past the same species growing in Rome's suburbs.
- The `huckster-test` carousel centers on καπηλεύοντες (kapēleuontes): Galen's admission that "hucksters adulterate so cleverly even the most experienced are deceived" (Book 1 Ch 2 ~line 186). Countermeasures: taste and smell testing (Ch 2 ~line 248), but only after years of practice. Real solution: procure through friends at the source, not the market. Differentiate from fire-test/worm-trick which cover specific Dioscorides tests on individual substances -- this is Galen's systemic/institutional view.
- The `falernian-scale` carousel uses Galen's repeated Falernian-vs-tavern wine analogy as its spine. Key passages: Ch 3 ~line 476 (Engaddene balsam vs Palestinian vs Egyptian, measured against Falernian); ~line 1218 ("if we lack cinnamon, use double the cassia"); ~line 1378 (Pamphylian storax ranked on the same scale). Three instances of the same metaphor = the carousel's structural hook.
- The `summer-ships` carousel emphasizes the seasonal market rhythm. Key passages: Ch 2 ~lines 222-226 (daily from Sicily; summer from Libya and Crete; Cretan botanists on Caesar's payroll); ~lines 236-246 (perfume merchants buy πλεκτά baskets annually; learn quality year-over-year); ~line 247 (ὄνος γὰρ ἂν εἴη σαφῶς -- "a clear donkey").
- For `script` fields: use the original Greek from the XML source. The napkins.md file provides pre-extracted Greek + translations for three key passages.
- Cross-reference: `fire-test` (Dioscorides frankincense adulteration) and `worm-trick` (styrax insect fraud) are already in the bank and establish the MARKETPLACE series tone. Match that register.
