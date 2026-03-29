# Data Types

## Purpose

This repository now contains several related but distinct research-data workflows. They were built to solve different problems: source collection, lexical analysis, dossier generation, review, and social-post drafting. This document does not define the final architecture. It describes the kinds of data already present so a future ingestion process can be designed against real constraints rather than assumptions.

## Core distinctions

The existing material falls across a few recurring boundaries:

- `raw` vs `canonical` vs `generated`
- `evidence` vs `interpretation`
- `human-edited` vs `script-generated`
- `cleanup review` vs `editorial review`
- `passage/citation data` vs `term/sense data` vs `notes/drafts`

These distinctions already matter in the current repo and should remain explicit in any future ingestion process.

## Data types currently present

### 1. Raw source documents

These are source-bearing files gathered for research or extraction.

Examples:

- [workbench/sources/tools-texts-raw.md](/home/seancoughlin/Projects/social/workbench/sources/tools-texts-raw.md)
- [workbench/sources/galen-perfume-drugs.md](/home/seancoughlin/Projects/social/workbench/sources/galen-perfume-drugs.md)
- [workbench/sources/dioscorides-1.43-1.63-recipes.txt](/home/seancoughlin/Projects/social/workbench/sources/dioscorides-1.43-1.63-recipes.txt)
- [workbench/tlg0057.tlg078.1st1K-grc1.xml](/home/seancoughlin/Projects/social/workbench/tlg0057.tlg078.1st1K-grc1.xml)
- [workbench/tlg0008001.xml](/home/seancoughlin/Projects/social/workbench/tlg0008001.xml)

Characteristics:

- Contains primary-source text, excerpts, or source-derived working transcriptions.
- Can be lightly structured (`md`) or highly structured (`xml`), but often not normalized.
- Usually source-preserving rather than interpretive.
- Usually edited by hand when collected, cleaned, or excerpted.
- Should remain recoverable even if later canonical data changes.

### 2. Raw research notebooks

These are mixed working files where evidence, notes, translations, bibliography, and draft prose coexist.

Examples:

- [workbench/backups/napkins-2026-03-25-pre-generated.md](/home/seancoughlin/Projects/social/workbench/backups/napkins-2026-03-25-pre-generated.md)
- older `napkins`-style scrapbook material preserved through the backup workflow

Characteristics:

- Highly mixed content.
- Often combines ancient text, translation, commentary, citations, reminders, and draft framing.
- Weakly structured at the section level; headings are useful but not reliable as final analytical units.
- Source-preserving in intent, but noisy in practice.
- Human-edited.

### 3. Canonical normalized YAML graphs

This is the current canonical form for the tools lexicon workflow.

Examples:

- [workbench/sources/tools-data/terms.yaml](/home/seancoughlin/Projects/social/workbench/sources/tools-data/terms.yaml)
- [workbench/sources/tools-data/senses.yaml](/home/seancoughlin/Projects/social/workbench/sources/tools-data/senses.yaml)
- [workbench/sources/tools-data/citations.yaml](/home/seancoughlin/Projects/social/workbench/sources/tools-data/citations.yaml)
- [workbench/sources/tools-data/meta.yaml](/home/seancoughlin/Projects/social/workbench/sources/tools-data/meta.yaml)

Characteristics:

- Canonical and normalized.
- Built around analytical objects rather than raw notebook sections.
- Explicitly distinguishes term, sense, citation, family, and review state.
- More structured than the source markdown it derives from.
- Meant to support curation and editorial promotion, not just preservation.
- Human-edited after generation in at least some fields.

### 4. Canonical mixed-record YAML dossiers

This is the current canonical form for the perfume-notes workflow.

Example:

- [workbench/data/perfume-notes.yaml](/home/seancoughlin/Projects/social/workbench/data/perfume-notes.yaml)

Characteristics:

- Canonical but less normalized than the tools graph.
- Built around `containers` and `records`.
- Preserves original line provenance from the source notebook.
- Keeps original text, translation, notes, and cleanup metadata distinct.
- Handles mixed record types such as ancient passages, modern reference notes, author notes, and draft fragments.
- Optimized for preservation and reading-dossier generation more than for fine-grained analytical modeling.

### 5. Generated reader views

These are human-readable markdown outputs generated from canonical data.

Examples:

- [workbench/sources/tools.md](/home/seancoughlin/Projects/social/workbench/sources/tools.md)
- [workbench/sources/tools-texts.md](/home/seancoughlin/Projects/social/workbench/sources/tools-texts.md)
- [workbench/sources/tools-index.md](/home/seancoughlin/Projects/social/workbench/sources/tools-index.md)
- [workbench/generated/perfume-theme-dossier.md](/home/seancoughlin/Projects/social/workbench/generated/perfume-theme-dossier.md)
- [workbench/napkins.md](/home/seancoughlin/Projects/social/workbench/napkins.md)

Characteristics:

- Generated, not primary working storage.
- Optimized for reading, browsing, or drafting support.
- Usually deterministic projections from canonical YAML.
- May look authoritative, but should not be treated as the sole source of truth.

### 6. Generated review artifacts

These are workflow outputs used to drive human correction or approval.

Examples:

- [workbench/generated/perfume-cleanup-review.md](/home/seancoughlin/Projects/social/workbench/generated/perfume-cleanup-review.md)
- [workbench/sources/tools-review-dashboard.md](/home/seancoughlin/Projects/social/workbench/sources/tools-review-dashboard.md)
- [workbench/sources/tools-data/review/trade-shops-and-perfume-professions.md](/home/seancoughlin/Projects/social/workbench/sources/tools-data/review/trade-shops-and-perfume-professions.md)

Characteristics:

- Generated from canonical data plus workflow status.
- Not canonical in themselves, but operationally important.
- Used to identify cleanup gaps, family placement problems, incomplete summaries, or unresolved ambiguities.
- Represent review as part of the data lifecycle rather than as an external process.

### 7. Drafting workflow artifacts

These are downstream files used for social-post and article production rather than source preservation.

Examples:

- [workbench/drafts/2026-03-25-perfume-books-source-map.md](/home/seancoughlin/Projects/social/workbench/drafts/2026-03-25-perfume-books-source-map.md)
- [workbench/drafts/2026-03-25-herodotus-aromatics-source-map.md](/home/seancoughlin/Projects/social/workbench/drafts/2026-03-25-herodotus-aromatics-source-map.md)
- [workbench/drafts/2026-03-25-perfume-books/batch-spec.md](/home/seancoughlin/Projects/social/workbench/drafts/2026-03-25-perfume-books/batch-spec.md)
- [workbench/drafts/2026-03-25-perfume-books/draft.js](/home/seancoughlin/Projects/social/workbench/drafts/2026-03-25-perfume-books/draft.js)
- [workbench/revisions/queue.md](/home/seancoughlin/Projects/social/workbench/revisions/queue.md)

Characteristics:

- Derived from research data but aimed at publishing workflows.
- Often interpretive and selective.
- Includes source maps, batch specifications, draft scripts, feedback files, and revision decisions.
- Not a canonical evidence layer, but important for understanding how research data gets consumed.

## Current systems and their aims

### Tools-data system

Main files:

- [workbench/sources/tools-data/terms.yaml](/home/seancoughlin/Projects/social/workbench/sources/tools-data/terms.yaml)
- [workbench/sources/tools-data/senses.yaml](/home/seancoughlin/Projects/social/workbench/sources/tools-data/senses.yaml)
- [workbench/sources/tools-data/citations.yaml](/home/seancoughlin/Projects/social/workbench/sources/tools-data/citations.yaml)
- [scripts/build_tools_dataset.py](/home/seancoughlin/Projects/social/scripts/build_tools_dataset.py)

Aim:

- Build a lexicon and review workflow for tools, vessels, professions, and related terminology in ancient perfumery.

Canonical objects:

- term
- sense
- citation
- family
- editorial/review metadata

Outputs:

- overview reader
- citation reader
- index
- review dashboard
- family review files

Strength:

- Strong normalization and explicit editorial workflow.

Limitation:

- Term-centric and domain-specific. It is less suited to mixed notebooks, author notes, or loosely structured source dossiers.

### Perfume-notes system

Main files:

- [workbench/data/perfume-notes.yaml](/home/seancoughlin/Projects/social/workbench/data/perfume-notes.yaml)
- [scripts/build_perfume_dataset.py](/home/seancoughlin/Projects/social/scripts/build_perfume_dataset.py)
- [scripts/cleanup_perfume_dataset.py](/home/seancoughlin/Projects/social/scripts/cleanup_perfume_dataset.py)
- [scripts/build_perfume_dossier.py](/home/seancoughlin/Projects/social/scripts/build_perfume_dossier.py)

Aim:

- Preserve mixed research notes and produce thematic reading dossiers for later LLM-assisted post and article work.

Canonical objects:

- container
- record
- source provenance
- original text
- translation
- notes
- cleanup metadata

Outputs:

- theme dossier
- cleanup review queue
- generated `napkins.md`

Strength:

- Better raw preservation and better support for mixed-note intake.

Limitation:

- Flatter analytical model. It preserves material well, but does less explicit modeling of terms, senses, and citation relationships.

## Shared characteristics across systems

Despite different structures, both systems already assume the following:

- provenance back to a raw source matters
- ancient-language text and translation often need to remain distinct
- human review is part of the workflow
- generated markdown is useful, but should not be the canonical source
- backups should exist before generated artifacts overwrite working surfaces
- the same underlying evidence may support multiple downstream outputs

## Key differences an ingestion process must account for

The mismatch is real and should not be flattened away at the description stage.

- The tools workflow is `term/sense/citation`-centric.
- The perfume-notes workflow is `container/record/passage`-centric.
- The tools workflow is driven by editorial classification and approval.
- The perfume-notes workflow is driven by preservation, cleanup, and dossier generation.
- The tools workflow starts from a more bounded domain.
- The perfume-notes workflow starts from mixed notebooks with heterogeneous record types.

Any future ingestion process will need to absorb both kinds of input without assuming that one current model is already the universal one.

## What a future ingestion process must be able to ingest

Without deciding the final schema, the existing repository shows that the ingestion layer will need to accept at least these classes of material:

- source documents
  - primary texts, excerpts, XML, markdown source collections
- note documents
  - mixed notebooks containing evidence plus commentary
- extracted passages or citations
  - evidence units with source references and possible original-language text
- analytical entities
  - terms, senses, themes, places, ingredients, author notes, draft notes
- annotations
  - cleanup flags, review status, editorial notes, provenance notes
- generated artifact dependencies
  - enough metadata to know which canonical data generated which reader or review file

## Constraints implied by the current data

- Ancient references and ancient-language texts must remain recoverable.
- Raw source-bearing material should not be overwritten by generated reading views.
- The repo already contains more than one canonical layer, not just one.
- Some data is evidence-first; some is analysis-first; some is production-first.
- Review is not optional metadata. It is part of how data becomes usable.
- Generated markdown exists for different purposes: reading, review, indexing, and drafting support.

## Proposed consultation taxonomy

It is possible to characterize the collected material taxonomically, but not well through a single genera/species tree.

The corpus is too mixed for one hierarchy to carry all of the needed distinctions. A better consultation model is multi-axis: the same item should be classifiable by what kind of repository object it is, what kind of text it comes from, what it is about, what kinds of things it names, what function it serves in the passage, and what role it currently plays in the workflow.

### Base object type

These identify what kind of repository object is being described.

- `source_document`
- `notebook_document`
- `container`
- `passage`
- `term`
- `sense`
- `note`
- `draft_artifact`
- `review_artifact`

### Text genus

These identify what kind of text an item comes from.

- `technical_recipe`
- `technical_process_instruction`
- `pharmacological_discussion`
- `materia_medica_entry`
- `lexicographic_or_glossarial_note`
- `legal_text`
- `encyclopedic_or_compilatory_text`
- `literary_or_anecdotal_text`
- `geographical_notice`
- `catalogue_or_list`
- `commentary_or_modern_reference`
- `author_working_note`

### Subject domain

These identify what the item is about.

- `tools_and_vessels`
- `processes_and_techniques`
- `ingredients_and_aromata`
- `finished_perfumes_or_drugs`
- `recipes_and_formulations`
- `trade_market_and_professions`
- `places_of_origin_and_production`
- `social_ritual_legal_context`
- `medicine_and_pharmacology`
- `lexicography_and_naming`
- `books_and_catalogues`
- `luxury_status_and_morality`

### Entity species

These identify the main kinds of things named or discussed within the item.

- `tool`
- `container`
- `implement`
- `process`
- `ingredient`
- `aroma_substance`
- `plant_product`
- `animal_product`
- `mineral_product`
- `perfume_product`
- `drug_product`
- `recipe`
- `person_or_profession`
- `place`
- `source_work`
- `technical_concept`
- `social_concept`

### Functional role

These identify what the passage or note is doing.

- `defines`
- `lists`
- `prescribes`
- `describes_preparation`
- `describes_use`
- `describes_storage`
- `describes_trade`
- `describes_adulteration`
- `describes_geography`
- `evaluates_quality`
- `illustrates_social_use`
- `illustrates_luxury`
- `illustrates_medical_use`
- `names_or_glosses`
- `quotes_or_excerpt_only`

### Workflow status

These identify how the repo is currently using the item.

- `raw_intake`
- `canonicalized`
- `needs_cleanup_review`
- `needs_editorial_review`
- `approved_for_reading_view`
- `linked_for_drafting`
- `author_note_only`

In this consultation model, `text genus` describes what kind of text something is, `subject domain` describes what it is about, `entity species` captures the kinds of things named within it, `functional role` describes what the passage is doing, and `workflow status` describes how the repository currently uses it. These axes should stay distinct.

### Short examples

The current corpus already suggests how this works in practice.

- A `tools-data` entry such as `ὅλμος` is best treated as a `term` or `sense`, with a subject domain in `tools_and_vessels`, entity species `tool`, and text genus inherited from the citations attached to it.
- A Galen or Dioscorides technical passage is usually a `passage` drawn from `technical_recipe`, `technical_process_instruction`, `pharmacological_discussion`, or `materia_medica_entry`, often with subject domains in `ingredients_and_aromata`, `recipes_and_formulations`, and `medicine_and_pharmacology`.
- An Athenaeus passage about perfumers is still a `passage`, but its text genus is more likely `literary_or_anecdotal_text`, with subject domains such as `trade_market_and_professions` and `luxury_status_and_morality`.
- The Digest passage belongs under `legal_text`, even if it also contributes to `social_ritual_legal_context` and perfume-use evidence.
- `Catalogue of Aromata` is best treated as a `note` with text genus `author_working_note`, subject domains `books_and_catalogues` and `ingredients_and_aromata`, and workflow status `author_note_only`.

### Minimum classification fields for future ingestion

Without choosing a final schema, the current data suggests that any future ingestion process should be able to assign at least these fields to an item:

- `object_type`
- `text_genus`
- `subject_domains`
- `entity_species`
- `functional_roles`
- `workflow_status`

Default assumptions for this consultation model:

- `text_genus` usually has one primary value
- `subject_domains` may have multiple values
- `entity_species` may have multiple values
- `functional_roles` may have multiple values

## Non-goals for this document

- This file does not define the final canonical schema.
- It does not choose between the current systems.
- It does not prescribe one merged storage model.
- It does not replace existing scripts or workflows.

Its job is narrower: describe the kinds of data already in the repository so a unified ingestion process can be designed against actual materials, actual outputs, and actual constraints.
