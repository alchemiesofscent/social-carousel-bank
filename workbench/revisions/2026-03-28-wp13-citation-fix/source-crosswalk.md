# WP13 Source Crosswalk

Date: 2026-03-28
Purpose: map wrong live citation strings to publishable ancient/public references.

Rule for revision:
- Use author/work citations where the project already has a stable form.
- For the alchemical dossier, use `CAAG 2, page.line` style where no cleaner canonical reference is already established in the project.
- Do not mention `Alchemy.md`, `alchem.md`, or `napkins.md` in publishable `subText`.

## `rhopos-and-the-perfumer`

Status:
- No file-path citation leak in the live copy.

Current live citations:
- Hook: `Photius, Suda s.v. ῥῶπος.`
- Closer: `Ptolemy, Tetr. 4.4.4; Philo, Plant. 159; Photius and Suda s.v. ῥῶπος.`

Local support trail:
- `workbench/sources/Alchemy.md:17-19, 21-23, 29-35`

Public citation target:
- Keep current citations as-is.

Revision note:
- Pass-through unless you want small style harmonization only.

## `stypsis-before-scent`

Wrong live citation:
- Closer: `Galen, Simp. Med. 2.27; Theophrastus, Scents 17; Alchemy.md recipe tables.`

Local support trail:
- `workbench/sources/Alchemy.md:37-39`
- `workbench/sources/Alchemy.md:77-79`
- `workbench/sources/Alchemy.md:136-148`

Public citation target:
- Minimum safe replacement:
  - `Galen, Simp. Med. 2.27; Theophr., Odor. 17; P.Oxy. 5242 and Pap. Holm. 100.`
- More specific alternative:
  - `Galen, Simp. Med. 2.27; Theophr., Odor. 17; P.Oxy. 5242; Diosc. 1.52, 1.55; Pap. Holm. 100.`

Revision note:
- Prefer the shorter form unless you want the recipe-table evidence named more explicitly.

## `maria-speaks-in-apparatus`

Wrong live citations:
- Hook: `Zosimos in alchem.md.`
- Closer: `alchem.md:21-37.`

Local support trail:
- `workbench/sources/alchem.md:21-37`
- `workbench/sources/alchem.md:171-204`

Ancient/public source behind the local file:
- `Zos. Alchem.`, in `Collection des anciens alchimistes grecs` 2
- Primary cited passage:
  - `CAAG 2.146.10ff.`
- Secondary related passage:
  - `CAAG 2.157.5ff.`

Public citation target:
- Hook:
  - `Zos. Alchem., CAAG 2.146.10ff. Maria enters as quoted procedure.`
- Closer:
  - `Zos. Alchem., CAAG 2.146.10ff.; cf. 2.157.5ff.`

Revision note:
- The main procedural sequence in the live post is anchored in `CAAG 2.146.10ff.`. Only add `2.157.5ff.` if you want the citation to reflect the broader apparatus dossier.

## `drawn-up-dripped-fixed`

Wrong live citations:
- Hook: `Zosimos and related alchemical passages.`
- Closer: `alchem.md:149-151, 165-173, 2448-2464, 3093-3120.`

Local support trail:
- `workbench/sources/alchem.md:149-151`
- `workbench/sources/alchem.md:165-173`
- `workbench/sources/alchem.md:2448-2464`
- `workbench/sources/alchem.md:3093-3120`

Ancient/public sources behind the local file:
- `Democritus` as quoted in `Zos. Alchem., CAAG 2.155.1ff.`
- `Zos. Alchem., CAAG 2.157.5ff.`
- `Moses Alchem., CAAG 2.303.9ff.`
- `Zos. Alchem., CAAG 2.251.8ff.`

Public citation target:
- Hook:
  - `Democritus ap. Zos. Alchem., CAAG 2.155.1ff.; Zos. Alchem., CAAG 2.157.5ff.`
- Closer:
  - `Democritus ap. Zos. Alchem., CAAG 2.155.1ff.; Zos. Alchem., CAAG 2.157.5ff., 2.251.8ff.; Moses Alchem., CAAG 2.303.9ff.`

Revision note:
- If that closer citation feels too long, keep the Democritus + Zosimos pair and drop Moses only if the copy no longer depends on the distillation-instrument passage. If the live copy stays unchanged, keep Moses in the citation set.

## `copper-is-dyed`

Wrong live citations:
- Hook: `Zosimos, alchem.md.`
- Closer: `alchem.md:46-63, 70-80, 232-246, 268-281.`

Local support trail:
- `workbench/sources/alchem.md:46-63`
- `workbench/sources/alchem.md:70-80`
- `workbench/sources/alchem.md:232-246`
- `workbench/sources/alchem.md:268-281`

Ancient/public sources behind the local file:
- `Zos. Alchem., CAAG 2.148.17ff.`
- `Zos. Alchem., CAAG 2.149.15ff.`
- `Zos. Alchem., CAAG 2.169.12ff.`
- `Zos. Alchem., CAAG 2.170.5ff.`
- `Zos. Alchem., CAAG 2.171.12ff.`

Public citation target:
- Hook:
  - `Zos. Alchem., CAAG 2.170.5ff.; 2.171.12ff.`
- Closer:
  - `Zos. Alchem., CAAG 2.148.17ff., 2.149.15ff., 2.169.12ff., 2.170.5ff., 2.171.12ff.`

Revision note:
- `CAAG 2.170.5ff.` and `2.171.12ff.` are the core Maria/copper lines. `2.148.17ff.` and `2.149.15ff.` support the broader dyeing and staged-change frame already present in the live copy.
