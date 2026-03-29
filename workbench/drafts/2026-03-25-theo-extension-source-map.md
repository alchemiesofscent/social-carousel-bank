# Theo Extension Source Map

Date: 2026-03-25

Purpose:
- Build a 4-post Theophrastus extension batch from already-available sources.
- Keep the batch outside WBS counting as a bonus/extension set.
- Prevent overlap drift with existing WP1 posts.

Source set:
- `workbench/sources/theophrastus-on-odors.txt`
- `workbench/pliny_nh_12_13.txt`
- `workbench/sources/dioscorides-1.43-1.63-recipes.txt`

## `perfume-parts`

Series: `MATERIA`

Conceptual spine:
Theophrastus classifies perfumes by which part of the plant their smell comes from: flower, leaf, root, wood, fruit, or resin-tear.

Key passages:
- `workbench/sources/theophrastus-on-odors.txt:27`
- `workbench/sources/theophrastus-on-odors.txt:28`
- `workbench/sources/theophrastus-on-odors.txt:29`
- `workbench/sources/theophrastus-on-odors.txt:30`

Allowed claims:
- Named perfumes are grouped by plant part.
- Rhodinon, leukoinon, sousinon, kypros, and krokinon belong to the flower set in this classification.
- Oinanthion belongs to the leaf set.
- Irinon, nardinon, and amarakinon belong to the root set.
- Some perfumes come from woods, fruits, or tears.
- Many perfumes are mixed in practice, even if classified by dominant source part.

Do not infer:
- That this was the only classification system in antiquity.
- That the classification is a botanical taxonomy in the modern sense.
- The release-mechanics argument already used in `roots-vs-flowers`.

Overlap to avoid:
- `roots-vs-flowers`

## `perfume-colors`

Series: `MATERIA`

Conceptual spine:
Ancient perfume color was deliberate: some luxury unguents were dyed, some were intentionally left pale or white, and Pliny still records expected colors for named perfumes.

Key passages:
- `workbench/sources/theophrastus-on-odors.txt:31`
- `workbench/pliny_nh_12_13.txt:582`
- `workbench/pliny_nh_12_13.txt:612`

Allowed claims:
- Some perfumes were colored and some were deliberately left uncolored.
- Theophrastus says amarakinon, rhodinon, and Megaleion were colored.
- Egyptian perfume, melinon, and kypros could be intentionally left uncolored for specific visual reasons.
- Theophrastus says red perfumes were colored with anchusa, and amarakinon with a Syrian root dye.
- Pliny calls color a third element in perfume-making beside oil and aromatics.
- Pliny records expected colors for named perfumes: cyprinum green, Mendesian black, rhodinum white, myrrh pale.

Do not infer:
- That all perfume color coding was standardized across all authors or periods.
- That color was merely decorative.
- A generalized cosmetics argument.

Overlap to avoid:
- Egyptian temple color/material posts
- `pliny-royal-perfume`

## `oil-fit-perfume`

Series: `MATERIA`

Conceptual spine:
Ancient perfumers did not only ask for the best oil in general; they matched different perfumes to different carriers, and Theophrastus makes rose the clearest example.

Key passages:
- `workbench/sources/theophrastus-on-odors.txt:15`
- `workbench/sources/theophrastus-on-odors.txt:16`
- `workbench/sources/theophrastus-on-odors.txt:17`
- `workbench/sources/theophrastus-on-odors.txt:20`
- `workbench/sources/theophrastus-on-odors.txt:21`
- `workbench/pliny_nh_12_13.txt:594`
- `workbench/pliny_nh_12_13.txt:597`
- `workbench/pliny_nh_12_13.txt:600`
- `workbench/pliny_nh_12_13.txt:606`
- `workbench/sources/dioscorides-1.43-1.63-recipes.txt:1.58`
- `workbench/sources/dioscorides-1.43-1.63-recipes.txt:1.62`

Allowed claims:
- Theophrastus favors the driest, least greasy oils because they receive scent better.
- Balanos oil is a preferred base.
- Fresh raw-pressed olive oil is usable; old oil becomes too thick and greasy.
- Some perfumers also used bitter almond oil for chrismata.
- Theophrastus says almond oil fades quickly.
- He says sesame is especially receptive, and that rhodinon is taken up best by sesame because of its fattiness.
- He also says heated sesame gives off a smell of sesame itself.
- Pliny gives named perfume/oil pairings: susinum with balaninos, Megaleion with balaninos, nardinum with omphacium or balaninos, cyprinum with omphacium.
- Dioscorides also preserves multiple named base-oil pairings, including amarakinon with omphacinum and balaninum, and nardinum usually with balaninum or omphacinum.
- Base oil choice affects how the perfume behaves, not just what holds it.

Do not infer:
- A rigid one-to-one system where every perfume had only one acceptable oil.
- That Pliny and Dioscorides describe one fixed industry standard.
- A general hierarchy post whose main idea is just “balanos is best.”
- Any named rose-oil pairing other than the sesame fit stated by Theophrastus.

Overlap to avoid:
- `balanos-oil`

## `rhodinon-sales-trick`

Series: `THE MARKETPLACE`

Conceptual spine:
Perfumers used rhodinon to block customers from judging rival scents.

Key passages:
- `workbench/sources/theophrastus-on-odors.txt:44`
- `workbench/sources/theophrastus-on-odors.txt:45`
- `workbench/sources/theophrastus-on-odors.txt:46`
- `workbench/sources/theophrastus-on-odors.txt:47`
- `workbench/sources/theophrastus-on-odors.txt:48`

Allowed claims:
- Theophrastus says rhodinon can efface other smells when smelled first.
- He explicitly says perfumers use it on wavering customers so they cannot judge the scents from other sellers.
- The explanation depends on rose perfume being light, fine, quick, and pore-filling.
- The effect is temporary because rhodinon also fades quickly.

Do not infer:
- A formal commercial regulation or anti-competitive law.
- That rose perfume was unique only as a deception tool.
- The wrist-testing argument from `perfumers-wrist`.

Overlap to avoid:
- `perfumers-wrist`
- `rose-garland-medicine`
