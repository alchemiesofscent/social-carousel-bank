#!/usr/bin/env python3
"""Backup-first tooling dataset bootstrap and markdown renderer.

Usage:
  ./.venv/bin/python scripts/build_tools_dataset.py --bootstrap
  ./.venv/bin/python scripts/build_tools_dataset.py
"""

from __future__ import annotations

import argparse
import re
import shutil
import unicodedata
from collections import defaultdict
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterable

import yaml


ROOT = Path(__file__).resolve().parent.parent
SOURCES_DIR = ROOT / "workbench" / "sources"
BACKUPS_DIR = SOURCES_DIR / "backups"
DATA_DIR = SOURCES_DIR / "tools-data"

TOOLS_MD = SOURCES_DIR / "tools.md"
TOOLS_TEXTS_MD = SOURCES_DIR / "tools-texts.md"
TOOLS_INDEX_MD = SOURCES_DIR / "tools-index.md"
TOOLS_RAW_MD = SOURCES_DIR / "tools-texts-raw.md"
TOOLS_REVIEW_DASHBOARD_MD = SOURCES_DIR / "tools-review-dashboard.md"

TERMS_YAML = DATA_DIR / "terms.yaml"
SENSES_YAML = DATA_DIR / "senses.yaml"
CITATIONS_YAML = DATA_DIR / "citations.yaml"
META_YAML = DATA_DIR / "meta.yaml"
REVIEW_DIR = DATA_DIR / "review"

OVERVIEW_SECTION_ALIASES = {
    "containers and storage": "Containers And Storage",
    "1. vessels and receptacles (containers, pots, and vats)": "Containers And Storage",
    "1. vessels and receptacles (containers & pots)": "Containers And Storage",
    "heat, soaking, and controlled processing": "Heat, Soaking, And Controlled Processing",
    "2. heat & distillation apparatus": "Heat, Soaking, And Controlled Processing",
    "pressing, straining, and extraction": "Pressing, Straining, And Extraction",
    "2. pressing and straining tools": "Pressing, Straining, And Extraction",
    "3. pressing and straining tools": "Pressing, Straining, And Extraction",
    "grinding, stirring, and mixing": "Grinding, Stirring, And Mixing",
    "3. mixing and grinding tools": "Grinding, Stirring, And Mixing",
    "4. grinding and stirring tools": "Grinding, Stirring, And Mixing",
    "covers, seals, insulation, and handling": "Covers, Seals, Insulation, And Handling",
    "5. fabrics, insulation, and sealing materials": "Covers, Seals, Insulation, And Handling",
    "application and use": "Application And Use",
    "6. medical & cosmetic application tools": "Application And Use",
    "trade, shops, and perfume professions": "Trade, Shops, And Perfume Professions",
    "key lemmas: perfume-relevant senses first": "Appendix And Semantic Control",
    "appendix: extended or non-perfumery senses": "Appendix And Semantic Control",
}

FAMILY_ORDER = [
    "Containers And Storage",
    "Heat, Soaking, And Controlled Processing",
    "Pressing, Straining, And Extraction",
    "Grinding, Stirring, And Mixing",
    "Covers, Seals, Insulation, And Handling",
    "Application And Use",
    "Trade, Shops, And Perfume Professions",
    "Appendix And Semantic Control",
]

SOURCE_CLASS_VALUES = [
    "primary_technical",
    "supporting_lexical",
    "appendix_context",
]

USAGE_TYPE_VALUES = [
    "recipe",
    "handling",
    "storage",
    "trade",
    "lexicon",
    "metaphor",
    "alchemy",
    "anatomy",
    "medical",
    "application",
    "unknown",
]

FAMILY_STATUS_VALUES = [
    "needs_review",
    "confirmed",
    "reassigned",
]

EDITORIAL_STATUS_VALUES = [
    "auto",
    "reviewed",
    "approved",
]

TERM_ALIASES = {
    "angeion-angeion-platystomon": "angeion",
    "louter-louteridion": "louter",
    "loyter-loyteridion": "louter",
    "kyrtis-kyrtidion": "kyrtis",
    "myrotheke-myrotheke": "myrotheke",
    "lenos": "lenos",
    "louter": "louter",
    "bronze-cauldron": "chalkos",
    "sphyris": "sphyris",
    "kyrtis": "kyrtis",
    "psiathos": "psiathos",
    "organon": "organon",
    "myrotheke": "myrotheke",
    "myropoles": "myropoles",
    "myropolis": "myropolis",
    "myropolion": "myropolion",
    "myropoleion": "myropoleion",
    "myropolein": "myropolein",
    "myrepsos": "myrepsos",
    "myrepsike": "myrepsike",
    "myropoios": "myropoios",
    "rhopopoles": "rhopopoles",
    "holmos": "holmos",
    "thyia": "thyia",
    "bikos": "bikos",
    "kakkabe": "kakkabe",
    "diploun-aggeion-myrepsikon": "double-vessel",
    "coatings-materials-and-soaking": "tin-lined-vessels",
    "igdis-igdion": "igdion",
    "alabastron": "alabastron",
    "spathe": "spathe",
    "lekythos-lekythion": "lekythos",
}

EARLY_TERM_IDS = {
    "ἀγγεῖον / ἀγγεῖον πλατύστομον": "angeion",
    "κρατήρ": "krater",
    "λουτήρ / λουτηρίδιον": "louter",
    "χαλκός": "chalkos",
    "ληνός": "lenos",
    "σφυρίς": "sphyris",
    "κυρτίς / κυρτίδιον": "kyrtis",
    "ῥῖπος ἐκ καλάμου": "ripos-ek-kalamou",
    "ψίαθος ἀραιά": "psiathos",
    "ὄργανον": "organon",
    "σπάθη": "spathe",
    "ὅλμος": "holmos",
    "βῖκος / βικίον": "bikos",
    "κακκάβη / κακάβιν": "kakkabe",
    "ἀγγεῖον ὑάλινον / βικίοις ὑελοῖς": "glass-vessel",
    "λεκανίδιον": "lekanidion",
    "τρουλλίον": "troullion",
    "μυάκιον": "myakion",
    "δίπλωμα": "double-vessel",
    "ξεστίον ὀστράκινον": "xestion-ostrakinon",
    "κοχλίας": "kochlias",
    "κόσκινον": "koskinon",
    "θυία & ἰγδίον": "thyia-igdion",
    "σπάθη φοινικίνη": "spathe",
    "ὀθόνιον / ὀθόνη ἀραιά": "othonion",
    "σινδών": "sindon",
    "δέρμα": "derma",
    "πηλός": "pelos",
    "σανίς": "sanis",
    "φρέαρ": "phrear",
    "σπόγγος": "spongos",
    "κροκίς": "krokis",
    "πτύγμα ἐρίου": "ptygma-eriou",
    "βελώνη & σπάρτιον": "belone-spartion",
}

GREEK_MAP = {
    "α": "a", "ά": "a", "ἀ": "a", "ἁ": "a", "ἂ": "a", "ἃ": "a", "ἄ": "a", "ἅ": "a",
    "ἆ": "a", "ἇ": "a", "ὰ": "a", "ᾶ": "a", "ᾳ": "a", "ᾴ": "a", "ᾲ": "a", "ᾷ": "a",
    "β": "b", "γ": "g", "δ": "d", "ε": "e", "έ": "e", "ἐ": "e", "ἑ": "e", "ὲ": "e",
    "ζ": "z", "η": "e", "ή": "e", "ἠ": "e", "ἡ": "e", "ὴ": "e", "ῆ": "e",
    "θ": "th", "ι": "i", "ί": "i", "ἰ": "i", "ἱ": "i", "ὶ": "i", "ῖ": "i",
    "κ": "k", "λ": "l", "μ": "m", "ν": "n", "ξ": "x", "ο": "o", "ό": "o", "ὀ": "o",
    "ὁ": "o", "ὸ": "o", "π": "p", "ρ": "r", "ῥ": "rh", "σ": "s", "ς": "s", "τ": "t",
    "υ": "y", "ύ": "y", "ὐ": "y", "ὑ": "hy", "ὺ": "y", "ῦ": "y", "φ": "ph",
    "χ": "ch", "ψ": "ps", "ω": "o", "ώ": "o", "ὠ": "o", "ὡ": "o", "ὼ": "o", "ῶ": "o",
    "ϊ": "i", "ΐ": "i", "ϋ": "y", "ΰ": "y", "ἴ": "i", "ἵ": "i", "ὄ": "o", "ὅ": "o",
    "ἔ": "e", "ἕ": "e", "ἤ": "e", "ἥ": "e", "ὤ": "o", "ὥ": "o",
}


@dataclass
class CitationBlock:
    greek: str
    translation: str
    reference: str
    context_note: str = ""
    raw_block: str = ""


def timestamp() -> str:
    return datetime.now().strftime("%Y-%m-%d-%H%M%S")


def backup_file(path: Path) -> Path | None:
    if not path.exists():
        return None
    BACKUPS_DIR.mkdir(parents=True, exist_ok=True)
    backup = BACKUPS_DIR / f"{path.name}.{timestamp()}.bak"
    shutil.copy2(path, backup)
    return backup


def transliterate(text: str) -> str:
    text = "".join(
        ch for ch in unicodedata.normalize("NFKD", text) if not unicodedata.combining(ch)
    )
    result = []
    for ch in text:
        lower = ch.lower()
        if lower in GREEK_MAP:
            result.append(GREEK_MAP[lower])
        else:
            result.append(ch)
    return "".join(result)


def slugify(text: str) -> str:
    text = transliterate(text)
    text = unicodedata.normalize("NFKD", text)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    text = text.lower()
    text = re.sub(r"\*+", "", text)
    text = re.sub(r"[“”\"'`]", "", text)
    text = re.sub(r"[^a-z0-9]+", "-", text)
    text = re.sub(r"-+", "-", text).strip("-")
    return text or "item"


def clean_inline(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def first_sentence(text: str) -> str:
    text = clean_inline(text)
    if not text:
        return ""
    parts = re.split(r"(?<=[.!?])\s+", text)
    return parts[0]


def family_slug(family: str) -> str:
    return slugify(family)


def is_auto_summary(text: str) -> bool:
    text = (text or "").strip()
    return (
        not text
        or text == "Needs editorial summary."
        or text.startswith("Based on the provided passages")
        or text.startswith("1.")
        or text.startswith("**1.")
        or text.startswith("ὄργανον fundamentally")
        or text.startswith("The term denotes a doubled working vessel")
        or text.startswith("The passages treat three things separately")
    )


def is_auto_why(text: str) -> bool:
    text = (text or "").strip()
    return (
        not text
        or text == "Needs editorial note."
        or text.startswith("Based on the provided passages")
        or text.startswith("1.")
        or text.startswith("**1.")
    )


def summary_for_display(term: dict) -> str:
    if term.get("editorial_status") == "approved" and term.get("editorial_summary_short"):
        return term["editorial_summary_short"]
    return term.get("summary_meaning") or "Needs editorial summary."


def why_for_display(term: dict) -> str:
    if term.get("editorial_status") == "approved" and term.get("editorial_why_it_matters"):
        return term["editorial_why_it_matters"]
    return term.get("why_it_matters") or "Needs editorial note."


def maybe_family_rationale(term: dict) -> str:
    if term.get("family_rationale"):
        return term["family_rationale"]
    family = term.get("family", "")
    if family == "Appendix And Semantic Control":
        return "Defaulted to appendix until a perfume-first editorial placement is confirmed."
    return f"Bootstrapped into {family} from the current overview/source structure; review against linked senses and citations."


def infer_family_status(term: dict) -> str:
    existing = term.get("family_status")
    if existing in FAMILY_STATUS_VALUES:
        return existing
    return "needs_review"


def infer_editorial_status(term: dict) -> str:
    existing = term.get("editorial_status")
    if existing in EDITORIAL_STATUS_VALUES:
        return existing
    if term.get("editorial_summary_short") and term.get("editorial_why_it_matters"):
        return "reviewed"
    return "auto"


def normalize_term_record(term: dict) -> dict:
    term = dict(term)
    term.setdefault("safe_claims", [])
    term.setdefault("do_not_infer", [])
    term.setdefault("note_ids", [])
    term.setdefault("sense_ids", [])
    term.setdefault("summary_meaning", "")
    term.setdefault("why_it_matters", "")
    term["review_batch"] = term.get("review_batch") or family_slug(term.get("family", "appendix"))
    term["review_priority"] = term.get("review_priority") or term.get("display_order", 0)
    term["family_status"] = infer_family_status(term)
    term["family_rationale"] = maybe_family_rationale(term)
    term["editorial_summary_short"] = term.get("editorial_summary_short", "")
    term["editorial_summary_long"] = term.get("editorial_summary_long", "")
    term["editorial_why_it_matters"] = term.get("editorial_why_it_matters", "")
    term["editorial_status"] = infer_editorial_status(term)
    term["editorial_notes"] = term.get("editorial_notes", "")
    term["auto_summary_detected"] = is_auto_summary(term.get("summary_meaning", ""))
    term["auto_why_detected"] = is_auto_why(term.get("why_it_matters", ""))
    return term


def load_latest_backup(prefix: str) -> Path | None:
    matches = sorted(BACKUPS_DIR.glob(f"{prefix}.*.bak"))
    return matches[-1] if matches else None


def find_raw_source() -> Path:
    if TOOLS_RAW_MD.exists():
        return TOOLS_RAW_MD
    latest = load_latest_backup("tools-texts.md")
    if latest is not None:
        return latest
    return TOOLS_TEXTS_MD


def find_overview_source() -> Path:
    latest = load_latest_backup("tools.md")
    if latest is not None:
        return latest
    return TOOLS_MD


def normalize_section_family(title: str) -> str:
    key = clean_inline(title).lower()
    return OVERVIEW_SECTION_ALIASES.get(key, title)


def parse_overview_terms(path: Path) -> dict[str, dict]:
    terms: dict[str, dict] = {}
    family = None
    current = None
    section = None
    top_level = None
    lines = path.read_text(encoding="utf-8").splitlines()

    def start_term(heading: str):
        nonlocal current, section
        term_id = infer_term_id(heading)
        current = {
            "id": term_id,
            "headword_display": heading,
            "headword_grc": heading,
            "variants": [],
            "family": family or "Appendix And Semantic Control",
            "display_order": 0,
            "summary_meaning": "",
            "why_it_matters": "",
            "drafting_priority": "appendix"
            if family == "Appendix And Semantic Control"
            else "core",
            "safe_claims": [],
            "do_not_infer": [],
            "note_ids": [],
            "sense_ids": [],
        }
        terms[term_id] = current
        section = None

    for raw in lines:
        line = raw.rstrip()
        if line.startswith("## "):
            top_level = normalize_section_family(line[3:].strip())
            if top_level in FAMILY_ORDER:
                family = top_level
                current = None
                section = None
            continue
        if line.startswith("### "):
            heading = line[4:].strip()
            normalized = normalize_section_family(heading)
            if normalized in FAMILY_ORDER and top_level != normalized:
                family = normalized
                current = None
                section = None
            else:
                start_term(heading)
            continue
        if line.startswith("#### "):
            heading = line[5:].strip()
            start_term(heading)
            continue
        if current is None:
            continue
        stripped = line.strip()
        if stripped == "Meaning:":
            section = "meaning"
            continue
        if stripped == "Why it matters:":
            section = "why"
            continue
        if stripped == "Safe claims:":
            section = "safe"
            continue
        if stripped == "Do not infer:":
            section = "avoid"
            continue
        if line.startswith("- "):
            value = clean_inline(line[2:])
            if section == "meaning":
                current["summary_meaning"] = (
                    value if not current["summary_meaning"] else current["summary_meaning"] + " " + value
                )
            elif section == "why":
                current["why_it_matters"] = (
                    value if not current["why_it_matters"] else current["why_it_matters"] + " " + value
                )
            elif section == "safe":
                current["safe_claims"].append(value)
            elif section == "avoid":
                current["do_not_infer"].append(value)
    for idx, family_name in enumerate(FAMILY_ORDER, start=1):
        family_terms = [t for t in terms.values() if t["family"] == family_name]
        for offset, term in enumerate(family_terms, start=1):
            term["display_order"] = idx * 100 + offset
    return terms


def split_term_variants(text: str) -> list[str]:
    text = re.sub(r"\s+\([^)]*\)", "", text)
    parts = [clean_inline(p) for p in re.split(r"\s*/\s*| & ", text) if clean_inline(p)]
    return parts or [clean_inline(text)]


def infer_term_id(term_text: str) -> str:
    cleaned = clean_inline(re.sub(r"\([^)]*\)", "", re.sub(r"\*+", "", term_text)))
    if cleaned in EARLY_TERM_IDS:
        return EARLY_TERM_IDS[cleaned]
    slug = slugify(cleaned)
    return TERM_ALIASES.get(slug, slug)


def infer_source_class(reference: str) -> str:
    reference_lower = reference.lower()
    if any(word in reference_lower for word in ["dioscorides", "aetius", "paul", "galen", "paulus"]):
        return "primary_technical"
    if any(word in reference_lower for word in ["lexicon", "hesychius", "photius", "pollux", "harpocration"]):
        return "supporting_lexical"
    return "appendix_context"


def infer_usage_type(reference: str, sense_label: str, family: str) -> str:
    ref = reference.lower()
    sense = sense_label.lower()
    fam = family.lower()
    if "alchemy" in ref or "alchem" in ref:
        return "alchemy"
    if "anatom" in sense:
        return "anatomy"
    if "metaphor" in sense:
        return "metaphor"
    if "shop" in fam or "profession" in fam or "seller" in sense or "trade" in sense:
        return "trade"
    if "storage" in fam:
        return "storage"
    if "application" in fam:
        return "application"
    if "lexicon" in ref:
        return "lexicon"
    if "recipe" in ref or "materia medica" in ref or "iatr" in ref:
        return "recipe"
    if "medical" in sense:
        return "medical"
    return "unknown"


def ensure_raw_copy():
    if TOOLS_RAW_MD.exists():
        return
    source = find_raw_source()
    shutil.copy2(source, TOOLS_RAW_MD)


def collect_quoted_value(lines: list[str], start: int) -> tuple[str, int]:
    collected = []
    i = start
    while i < len(lines):
        line = lines[i].rstrip()
        stripped = line.strip()
        if not stripped:
            if collected:
                break
            i += 1
            continue
        if stripped.startswith(">"):
            collected.append(stripped.lstrip("> ").rstrip())
            i += 1
            continue
        if collected:
            break
        break
    return "\n".join(collected).strip(), i


def collect_text_until(lines: list[str], start: int, stop_patterns: Iterable[str]) -> tuple[str, int]:
    collected = []
    i = start
    while i < len(lines):
        stripped = lines[i].strip()
        if any(stripped.startswith(pattern) for pattern in stop_patterns):
            break
        if stripped:
            collected.append(stripped)
        i += 1
    return "\n".join(collected).strip(), i


def parse_early_terms(text: str, overview_terms: dict[str, dict]) -> tuple[dict[str, dict], list[dict], list[dict]]:
    pre, _, _ = text.partition("\n## ")
    lines = pre.splitlines()
    terms: dict[str, dict] = {}
    senses: list[dict] = []
    citations: list[dict] = []
    family = "Appendix And Semantic Control"
    sense_counter = defaultdict(int)
    citation_counter = defaultdict(int)
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if line.startswith("### "):
            heading = normalize_section_family(line[4:].strip())
            family = heading
            i += 1
            continue
        if line.startswith("**") and line.endswith("**"):
            term_text = line.strip("*")
            term_id = infer_term_id(term_text)
            base = overview_terms.get(term_id, {})
            if term_id not in terms:
                terms[term_id] = {
                    "id": term_id,
                    "headword_display": term_text,
                    "headword_grc": split_term_variants(term_text)[0],
                    "variants": split_term_variants(term_text)[1:],
                    "family": base.get("family", family),
                    "display_order": base.get("display_order", 0),
                    "summary_meaning": base.get("summary_meaning", ""),
                    "why_it_matters": base.get("why_it_matters", ""),
                    "drafting_priority": base.get("drafting_priority", "core"),
                    "safe_claims": list(base.get("safe_claims", [])),
                    "do_not_infer": list(base.get("do_not_infer", [])),
                    "note_ids": [],
                    "sense_ids": [],
                }
            meaning = ""
            context = ""
            greek = ""
            translation = ""
            reference = ""
            i += 1
            while i < len(lines) and lines[i].strip():
                raw = lines[i].strip()
                if raw.startswith("*") and "**Translation:**" in raw and not greek:
                    meaning = clean_inline(raw.split("**Translation:**", 1)[1])
                elif raw.startswith("*") and "**Context:**" in raw:
                    context = clean_inline(raw.split("**Context:**", 1)[1])
                elif raw.startswith("*") and "**Excerpt:**" in raw:
                    excerpt = clean_inline(raw.split("**Excerpt:**", 1)[1])
                    reference_match = re.findall(r"\(([^()]+)\)", excerpt)
                    reference = "; ".join(reference_match)
                    greek = re.sub(r"\s*\([^()]+\)", "", excerpt).strip()
                elif raw.startswith("*") and "**Excerpt Translation:**" in raw:
                    translation = clean_inline(raw.split("**Excerpt Translation:**", 1)[1])
                elif raw.startswith("*") and raw.count("**Translation:**") >= 1 and greek:
                    translation = clean_inline(raw.split("**Translation:**", 1)[1])
                i += 1
            sense_counter[term_id] += 1
            sense_id = f"{term_id}-early-sense-{sense_counter[term_id]}"
            senses.append(
                {
                    "id": sense_id,
                    "term_id": term_id,
                    "label": first_sentence(context) or first_sentence(meaning) or "Core perfumery sense",
                    "sense_order": sense_counter[term_id],
                    "perfume_relevance": "core",
                    "short_definition": meaning or context,
                    "reader_summary": context,
                    "citation_ids": [],
                }
            )
            terms[term_id]["sense_ids"].append(sense_id)
            citation_counter[term_id] += 1
            citation_id = f"{term_id}-early-cit-{citation_counter[term_id]}"
            citations.append(
                {
                    "id": citation_id,
                    "term_ids": [term_id],
                    "sense_id": sense_id,
                    "author": "",
                    "work": "",
                    "reference": reference,
                    "source_class": "primary_technical",
                    "usage_type": infer_usage_type(reference, context, terms[term_id]["family"]),
                    "family": terms[term_id]["family"],
                    "citation_order": citation_counter[term_id],
                    "greek": greek,
                    "translation": translation,
                    "context_note": context,
                    "raw_source_location": "tools-texts-raw.md:early",
                    "overview_anchor": f"term-{term_id}",
                    "reader_anchor": f"cit-{citation_id}",
                }
            )
            senses[-1]["citation_ids"].append(citation_id)
            continue
        i += 1
    return terms, senses, citations


def term_sections(text: str) -> list[tuple[str, str]]:
    sections = []
    matches = list(re.finditer(r"^##(?!#)[ \t]*(.*)$", text, flags=re.MULTILINE))
    for idx, match in enumerate(matches):
        heading = match.group(1).strip()
        start = match.end()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(text)
        body = text[start:end].strip("\n")
        sections.append((heading, body))
    return sections


def canonical_term_id_from_heading(heading: str, body: str) -> tuple[str, str]:
    heading = heading.strip()
    if not heading:
        return "alabastron", "ἀλάβαστρον"
    heading = heading.strip("*").strip()
    display = heading
    term_id = infer_term_id(heading)
    if heading.lower() == "bronze / cauldron":
        display = "χαλκός"
    elif heading.lower() == "lenos":
        display = "ληνός"
    elif heading.lower() == "louter":
        display = "λουτήρ"
    elif heading.lower() == "sphyris":
        display = "σφυρίς"
    elif heading.lower() == "kyrtis":
        display = "κυρτίς"
    elif heading.lower() == "psiathos":
        display = "ψίαθος"
    elif heading == "ὄργανον":
        display = heading
    elif heading.lower() == "coatings, materials, and soaking":
        display = "Tin-lined and related perfumer's vessels"
    return term_id, display


def extract_citation_blocks(section_text: str) -> list[CitationBlock]:
    lines = section_text.splitlines()
    blocks: list[CitationBlock] = []
    i = 0
    while i < len(lines):
        stripped = lines[i].strip()
        if stripped in {"**Greek**", "**Greek:**"}:
            greek, i = collect_quoted_value(lines, i + 1)
            while i < len(lines) and not lines[i].strip().startswith("**English"):
                i += 1
            translation = ""
            if i < len(lines):
                translation, i = collect_quoted_value(lines, i + 1)
            while i < len(lines) and not (
                lines[i].strip().startswith("**Reference:**") or lines[i].strip().startswith("**Citation:**")
            ):
                i += 1
            reference = ""
            if i < len(lines):
                reference = clean_inline(lines[i].split(":", 1)[1])
                i += 1
            blocks.append(CitationBlock(greek=greek, translation=translation, reference=reference))
            continue
        if stripped.startswith("**Example:") or stripped.startswith("*   **Example:") or stripped.startswith("* **Example:"):
            greek = clean_inline(stripped.split("**Example:", 1)[1].strip(" *"))
            i += 1
            translation = ""
            reference = ""
            while i < len(lines):
                probe = lines[i].strip()
                if probe.startswith("**Translation:**") or probe.startswith("*   **Translation:**") or probe.startswith("* **Translation:**"):
                    translation = clean_inline(probe.split("**Translation:**", 1)[1])
                elif probe.startswith("**Citation:**") or probe.startswith("*   **Citation:**") or probe.startswith("* **Citation:**"):
                    reference = clean_inline(probe.split("**Citation:**", 1)[1])
                    i += 1
                    break
                elif probe.startswith("**Reference:**"):
                    reference = clean_inline(probe.split("**Reference:**", 1)[1])
                    i += 1
                    break
                elif probe.startswith("### ") or probe.startswith("## ") or probe.startswith("**Example:") or probe.startswith("* **Example:") or probe.startswith("*   **Example:"):
                    break
                i += 1
            blocks.append(CitationBlock(greek=greek, translation=translation, reference=reference))
            continue
        if stripped in {"Text:", "**Text:**"}:
            greek, i = collect_text_until(lines, i + 1, ("Translation:", "**Translation:**"))
            translation = ""
            reference = ""
            if i < len(lines):
                translation, i = collect_text_until(lines, i + 1, ("Citation:", "**Citation:**", "**Reference:**"))
            if i < len(lines):
                reference, i = collect_text_until(lines, i + 1, ("", "1.", "2.", "3.", "4.", "5.", "## ", "### "))
            blocks.append(CitationBlock(greek=greek, translation=translation, reference=reference))
            continue
        i += 1
    return [b for b in blocks if b.greek or b.translation or b.reference]


def parse_later_terms(text: str, overview_terms: dict[str, dict]) -> tuple[dict[str, dict], list[dict], list[dict]]:
    sections = term_sections(text)
    terms: dict[str, dict] = {}
    senses: list[dict] = []
    citations: list[dict] = []
    sense_counter = defaultdict(int)
    citation_counter = defaultdict(int)
    for heading, body in sections:
        term_id, display = canonical_term_id_from_heading(heading, body)
        base = overview_terms.get(term_id, {})
        family = base.get("family", "Appendix And Semantic Control")
        if term_id not in terms:
            terms[term_id] = {
                "id": term_id,
                "headword_display": display,
                "headword_grc": split_term_variants(display)[0],
                "variants": split_term_variants(display)[1:],
                "family": family,
                "display_order": base.get("display_order", 0),
                "summary_meaning": base.get("summary_meaning", ""),
                "why_it_matters": base.get("why_it_matters", ""),
                "drafting_priority": base.get("drafting_priority", "appendix" if family == "Appendix And Semantic Control" else "core"),
                "safe_claims": list(base.get("safe_claims", [])),
                "do_not_infer": list(base.get("do_not_infer", [])),
                "note_ids": [],
                "sense_ids": [],
            }
        current_sense_id = None
        chunks = re.split(r"(?=^### )", body, flags=re.MULTILINE)
        if len(chunks) == 1:
            chunks = [f"### Default sense\n{body}"]
        for chunk in chunks:
            if not chunk.strip():
                continue
            lines = chunk.splitlines()
            heading_line = lines[0].strip()
            if heading_line.startswith("### "):
                sense_label = heading_line[4:].strip()
                sense_body = "\n".join(lines[1:]).strip()
            else:
                sense_label = "Default sense"
                sense_body = chunk.strip()
            sense_counter[term_id] += 1
            current_sense_id = f"{term_id}-sense-{sense_counter[term_id]}"
            relevance = "non_perfume"
            lowered = sense_label.lower()
            if any(word in lowered for word in ["literal use", "primary sense", "press", "steeping", "perfum", "vessel", "mortar", "shop", "maker", "seller", "double vessel", "warming", "storage", "application", "boiling"]):
                relevance = "core" if family != "Appendix And Semantic Control" else "extended"
            elif family != "Appendix And Semantic Control":
                relevance = "extended"
            summary = first_sentence(sense_body)
            senses.append(
                {
                    "id": current_sense_id,
                    "term_id": term_id,
                    "label": sense_label,
                    "sense_order": sense_counter[term_id],
                    "perfume_relevance": relevance,
                    "short_definition": summary,
                    "reader_summary": summary,
                    "citation_ids": [],
                }
            )
            terms[term_id]["sense_ids"].append(current_sense_id)
            blocks = extract_citation_blocks(chunk)
            for block in blocks:
                citation_counter[term_id] += 1
                citation_id = f"{term_id}-cit-{citation_counter[term_id]}"
                citations.append(
                    {
                        "id": citation_id,
                        "term_ids": [term_id],
                        "sense_id": current_sense_id,
                        "author": "",
                        "work": "",
                        "reference": clean_inline(block.reference),
                        "source_class": infer_source_class(block.reference),
                        "usage_type": infer_usage_type(block.reference, sense_label, family),
                        "family": family,
                        "citation_order": citation_counter[term_id],
                        "greek": clean_inline(block.greek),
                        "translation": clean_inline(block.translation),
                        "context_note": summary,
                        "raw_source_location": f"tools-texts-raw.md:## {display}",
                        "overview_anchor": f"term-{term_id}",
                        "reader_anchor": f"cit-{citation_id}",
                    }
                )
                senses[-1]["citation_ids"].append(citation_id)
        if not terms[term_id]["summary_meaning"]:
            body_sentence = first_sentence(re.sub(r"^### .*?$", "", body, flags=re.MULTILINE | re.DOTALL))
            terms[term_id]["summary_meaning"] = body_sentence
        if not terms[term_id]["why_it_matters"]:
            terms[term_id]["why_it_matters"] = first_sentence(body)
    return terms, senses, citations


def merge_terms(*term_dicts: dict[str, dict]) -> list[dict]:
    merged: dict[str, dict] = {}
    for term_dict in term_dicts:
        for term_id, term in term_dict.items():
            if term_id not in merged:
                merged[term_id] = term
                continue
            existing = merged[term_id]
            for key in ("summary_meaning", "why_it_matters"):
                if not existing.get(key) and term.get(key):
                    existing[key] = term[key]
            if existing.get("family") == "Appendix And Semantic Control" and term.get("family"):
                existing["family"] = term["family"]
            existing["variants"] = sorted(set(existing.get("variants", []) + term.get("variants", [])))
            existing["safe_claims"] = list(dict.fromkeys(existing.get("safe_claims", []) + term.get("safe_claims", [])))
            existing["do_not_infer"] = list(dict.fromkeys(existing.get("do_not_infer", []) + term.get("do_not_infer", [])))
            existing["sense_ids"] = list(dict.fromkeys(existing.get("sense_ids", []) + term.get("sense_ids", [])))
            existing["display_order"] = existing.get("display_order") or term.get("display_order", 0)
    family_bases = {family: (idx + 1) * 100 for idx, family in enumerate(FAMILY_ORDER)}
    family_offsets = defaultdict(int)
    for term in sorted(merged.values(), key=lambda t: (FAMILY_ORDER.index(t["family"]) if t["family"] in FAMILY_ORDER else 99, t["display_order"], t["id"])):
        if not term["display_order"]:
            family_offsets[term["family"]] += 1
            term["display_order"] = family_bases.get(term["family"], 900) + family_offsets[term["family"]]
    normalized = [normalize_term_record(term) for term in merged.values()]
    return sorted(normalized, key=lambda t: (t["display_order"], t["id"]))


def write_yaml(path: Path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as handle:
        yaml.safe_dump(data, handle, allow_unicode=True, sort_keys=False, width=1000)


def build_markdown(terms: list[dict], senses: list[dict], citations: list[dict]) -> tuple[str, str, str]:
    terms_by_id = {t["id"]: t for t in terms}
    senses_by_term = defaultdict(list)
    for sense in senses:
        senses_by_term[sense["term_id"]].append(sense)
    citations_by_sense = defaultdict(list)
    for citation in citations:
        citations_by_sense[citation["sense_id"]].append(citation)
    for items in senses_by_term.values():
        items.sort(key=lambda s: (s["sense_order"], s["id"]))
    for items in citations_by_sense.values():
        items.sort(key=lambda c: (c["citation_order"], c["id"]))

    overview_lines = [
        "# Perfume Tools",
        "",
        "Generated from `workbench/sources/tools-data/`. Edit the YAML, not this file.",
        "",
        "This overview is the fast drafting layer. Each term links to the full citation reader.",
        "",
    ]
    for family in FAMILY_ORDER:
        family_terms = [t for t in terms if t["family"] == family]
        if not family_terms:
            continue
        overview_lines.extend([f"## {family}", ""])
        for term in family_terms:
            term_citations = sum(len(citations_by_sense[s["id"]]) for s in senses_by_term[term["id"]])
            overview_lines.extend(
                [
                    f"### {term['headword_display']}",
                    f"<a id=\"term-{term['id']}\"></a>",
                    "",
                    f"Meaning: {summary_for_display(term)}",
                    "",
                    f"Why it matters: {why_for_display(term)}",
                    "",
                    f"Reader: [full context in tools-texts.md](./tools-texts.md#term-{term['id']})",
                    f"Index: [lookup entry](./tools-index.md#term-{term['id']})",
                    f"Citations: {term_citations}",
                    "",
                ]
            )
            if term["safe_claims"]:
                overview_lines.append("Safe claims:")
                overview_lines.extend([f"- {item}" for item in term["safe_claims"]])
                overview_lines.append("")
            if term["do_not_infer"]:
                overview_lines.append("Do not infer:")
                overview_lines.extend([f"- {item}" for item in term["do_not_infer"]])
                overview_lines.append("")

    texts_lines = [
        "# Perfume Tools: Citation Reader",
        "",
        "Generated from `workbench/sources/tools-data/`. Edit the YAML, not this file.",
        "",
        "Each term is ordered by the overview family sequence. Within each term, perfume-core senses appear before extended or non-perfume parallels.",
        "",
    ]
    index_lines = [
        "# Perfume Tools Index",
        "",
        "Generated from `workbench/sources/tools-data/`. Quick jump index by family and term.",
        "",
    ]
    for family in FAMILY_ORDER:
        family_terms = [t for t in terms if t["family"] == family]
        if not family_terms:
            continue
        texts_lines.extend([f"## {family}", ""])
        index_lines.extend([f"## {family}", ""])
        for term in family_terms:
            index_lines.append(f"- [{term['headword_display']}](./tools-texts.md#term-{term['id']})")
        index_lines.append("")
        for term in family_terms:
            texts_lines.extend(
                [
                    f"### {term['headword_display']}",
                    f"<a id=\"term-{term['id']}\"></a>",
                    "",
                    f"Overview: [back to tools.md](./tools.md#term-{term['id']})",
                    "",
                    f"Meaning: {summary_for_display(term)}",
                    "",
                ]
            )
            if term.get("editorial_status") == "approved" and term.get("editorial_summary_long"):
                texts_lines.extend([term["editorial_summary_long"], ""])
            for sense in senses_by_term[term["id"]]:
                texts_lines.extend(
                    [
                        f"#### {sense['label']}",
                        f"<a id=\"sense-{sense['id']}\"></a>",
                        "",
                        f"Relevance: `{sense['perfume_relevance']}`",
                        "",
                    ]
                )
                if sense["reader_summary"]:
                    texts_lines.extend([sense["reader_summary"], ""])
                for citation in citations_by_sense[sense["id"]]:
                    texts_lines.extend(
                        [
                            f"##### {citation['reference'] or citation['id']}",
                            f"<a id=\"{citation['reader_anchor']}\"></a>",
                            "",
                            f"Source class: `{citation['source_class']}`",
                            f"Usage type: `{citation['usage_type']}`",
                            "",
                            "**Greek**",
                            "",
                            f"> {citation['greek'] or '[missing Greek]'}",
                            "",
                            "**Translation**",
                            "",
                            f"> {citation['translation'] or '[missing translation]'}",
                            "",
                            f"Reference: {citation['reference'] or '[missing reference]'}",
                            "",
                        ]
                    )
                    if citation["context_note"]:
                        texts_lines.extend([f"Context note: {citation['context_note']}", ""])
    return "\n".join(overview_lines).rstrip() + "\n", "\n".join(texts_lines).rstrip() + "\n", "\n".join(index_lines).rstrip() + "\n"


def build_review_dashboard(terms: list[dict], senses: list[dict], citations: list[dict]) -> str:
    sense_map = defaultdict(list)
    for sense in senses:
        sense_map[sense["term_id"]].append(sense)
    citation_map = defaultdict(int)
    for citation in citations:
        for term_id in citation.get("term_ids", []):
            citation_map[term_id] += 1
    total = len(terms)
    approved = sum(t["editorial_status"] == "approved" for t in terms)
    reviewed = sum(t["editorial_status"] == "reviewed" for t in terms)
    auto = sum(t["editorial_status"] == "auto" for t in terms)
    auto_summary = sum(t.get("auto_summary_detected", False) for t in terms)
    appendix = [t for t in terms if t["family"] == "Appendix And Semantic Control"]
    suspicious = [
        t for t in terms
        if t["family"] == "Appendix And Semantic Control"
        and any(s["perfume_relevance"] in {"core", "extended"} for s in sense_map[t["id"]])
    ]
    lines = [
        "# Tools Review Dashboard",
        "",
        "Generated from `workbench/sources/tools-data/`. Use this to work through term cleanup family by family.",
        "",
        f"- Total terms: {total}",
        f"- Editorial status `approved`: {approved}",
        f"- Editorial status `reviewed`: {reviewed}",
        f"- Editorial status `auto`: {auto}",
        f"- Auto-style summaries detected: {auto_summary}",
        f"- Terms currently in appendix: {len(appendix)}",
        f"- Appendix terms with at least one perfume-relevant sense: {len(suspicious)}",
        "",
        "## Family Batches",
        "",
    ]
    for family in FAMILY_ORDER:
        family_terms = [t for t in terms if t["family"] == family]
        approved_count = sum(t["editorial_status"] == "approved" for t in family_terms)
        auto_count = sum(t["editorial_status"] == "auto" for t in family_terms)
        review_file = f"./tools-data/review/{family_slug(family)}.md"
        lines.extend(
            [
                f"### {family}",
                f"- Terms: {len(family_terms)}",
                f"- Approved: {approved_count}",
                f"- Auto: {auto_count}",
                f"- Review file: [{family_slug(family)}.md]({review_file})",
                "",
            ]
        )
    if suspicious:
        lines.extend(["## Suspect Appendix Placements", ""])
        for term in suspicious:
            lines.append(f"- [{term['headword_display']}](./tools-texts.md#term-{term['id']})")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def build_review_file(family: str, family_terms: list[dict], senses: list[dict], citations: list[dict]) -> str:
    senses_by_term = defaultdict(list)
    for sense in senses:
        senses_by_term[sense["term_id"]].append(sense)
    citations_by_sense = defaultdict(list)
    for citation in citations:
        citations_by_sense[citation["sense_id"]].append(citation)
    lines = [
        f"# Review Batch: {family}",
        "",
        "Generated from the canonical YAML dataset. Edit the YAML records after reviewing each term.",
        "",
        "Workflow for each item:",
        "1. Read the linked term in `tools-texts.md`.",
        "2. Check all linked senses and citations.",
        "3. Confirm or reassign family.",
        "4. Replace auto summary text with editorial summaries.",
        "5. Update `editorial_status` and `family_status` in `terms.yaml`.",
        "",
    ]
    for term in family_terms:
        term_senses = senses_by_term[term["id"]]
        sense_count = len(term_senses)
        citation_count = sum(len(citations_by_sense[s["id"]]) for s in term_senses)
        lines.extend(
            [
                f"## {term['headword_display']}",
                "",
                f"- Term id: `{term['id']}`",
                f"- Current family: `{term['family']}`",
                f"- Family status: `{term['family_status']}`",
                f"- Editorial status: `{term['editorial_status']}`",
                f"- Review priority: `{term['review_priority']}`",
                f"- Senses: {sense_count}",
                f"- Citations: {citation_count}",
                f"- Reader: [tools-texts.md#term-{term['id']}](../../tools-texts.md#term-{term['id']})",
                f"- Auto summary detected: `{str(term.get('auto_summary_detected', False)).lower()}`",
                f"- Auto why detected: `{str(term.get('auto_why_detected', False)).lower()}`",
                "",
                "Current summary source:",
                f"> {term.get('summary_meaning') or '[blank]'}",
                "",
                "Current why-it-matters source:",
                f"> {term.get('why_it_matters') or '[blank]'}",
                "",
                "Linked senses:",
            ]
        )
        for sense in sorted(term_senses, key=lambda s: (s["sense_order"], s["id"])):
            lines.append(
                f"- `{sense['id']}` | `{sense['perfume_relevance']}` | {sense['label']}"
            )
        lines.extend(
            [
                "",
                "Editorial fields to complete in `terms.yaml`:",
                "- `family_status`",
                "- `family_rationale`",
                "- `editorial_summary_short`",
                "- `editorial_summary_long`",
                "- `editorial_why_it_matters`",
                "- `editorial_status`",
                "- `editorial_notes`",
                "",
                "LLM assist prompt:",
                "```text",
                f"Read term `{term['id']}` in terms.yaml, its linked senses in senses.yaml, and its linked citations in citations.yaml.",
                "Write:",
                "1. one 1-2 sentence editorial_summary_short",
                "2. one 3-5 sentence editorial_summary_long",
                "3. one 1-2 sentence editorial_why_it_matters",
                "4. one proposed family and one-sentence rationale",
                "Do not invent claims not supported by the linked citations.",
                "Distinguish perfume-core use from non-perfume semantic drift when relevant.",
                "```",
                "",
            ]
        )
    return "\n".join(lines).rstrip() + "\n"


def write_review_artifacts(terms: list[dict], senses: list[dict], citations: list[dict]):
    REVIEW_DIR.mkdir(parents=True, exist_ok=True)
    dashboard = build_review_dashboard(terms, senses, citations)
    backup_file(TOOLS_REVIEW_DASHBOARD_MD)
    TOOLS_REVIEW_DASHBOARD_MD.write_text(dashboard, encoding="utf-8")
    # replace old review files by overwriting current family set
    for path in REVIEW_DIR.glob("*.md"):
        backup_file(path)
        path.unlink()
    for family in FAMILY_ORDER:
        family_terms = sorted(
            [t for t in terms if t["family"] == family],
            key=lambda t: (t["review_priority"], t["display_order"], t["id"]),
        )
        review_path = REVIEW_DIR / f"{family_slug(family)}.md"
        review_path.write_text(build_review_file(family, family_terms, senses, citations), encoding="utf-8")


def validate(terms: list[dict], senses: list[dict], citations: list[dict]) -> None:
    term_ids = {t["id"] for t in terms}
    sense_ids = {s["id"] for s in senses}
    if len(term_ids) != len(terms):
        raise SystemExit("Duplicate term ids detected.")
    if len(sense_ids) != len(senses):
        raise SystemExit("Duplicate sense ids detected.")
    if len({c["id"] for c in citations}) != len(citations):
        raise SystemExit("Duplicate citation ids detected.")
    for term in terms:
        if term.get("family_status") not in FAMILY_STATUS_VALUES:
            raise SystemExit(f"Invalid family_status on {term['id']}: {term.get('family_status')}")
        if term.get("editorial_status") not in EDITORIAL_STATUS_VALUES:
            raise SystemExit(f"Invalid editorial_status on {term['id']}: {term.get('editorial_status')}")
    for sense in senses:
        if sense["term_id"] not in term_ids:
            raise SystemExit(f"Sense {sense['id']} points to missing term {sense['term_id']}.")
    for citation in citations:
        if citation["sense_id"] not in sense_ids:
            raise SystemExit(f"Citation {citation['id']} points to missing sense {citation['sense_id']}.")
        if citation["source_class"] not in SOURCE_CLASS_VALUES:
            raise SystemExit(f"Invalid source_class on {citation['id']}: {citation['source_class']}")
        if citation["usage_type"] not in USAGE_TYPE_VALUES:
            raise SystemExit(f"Invalid usage_type on {citation['id']}: {citation['usage_type']}")


def bootstrap():
    ensure_raw_copy()
    overview_terms = parse_overview_terms(find_overview_source())
    raw_text = TOOLS_RAW_MD.read_text(encoding="utf-8")
    early_terms, early_senses, early_citations = parse_early_terms(raw_text, overview_terms)
    later_terms, later_senses, later_citations = parse_later_terms(raw_text, overview_terms)

    terms = merge_terms(overview_terms, early_terms, later_terms)
    senses = sorted(early_senses + later_senses, key=lambda s: (s["term_id"], s["sense_order"], s["id"]))
    citations = sorted(early_citations + later_citations, key=lambda c: (c["term_ids"][0], c["citation_order"], c["id"]))

    meta = {
        "family_order": FAMILY_ORDER,
        "source_class_values": SOURCE_CLASS_VALUES,
        "usage_type_values": USAGE_TYPE_VALUES,
        "canonical_source": "workbench/sources/tools-data/",
        "generated_files": [
            "workbench/sources/tools.md",
            "workbench/sources/tools-texts.md",
            "workbench/sources/tools-index.md",
            "workbench/sources/tools-review-dashboard.md",
            "workbench/sources/tools-data/review/*.md",
        ],
        "backup_policy": "Create a timestamped backup in workbench/sources/backups/ before overwriting generated files.",
        "term_review_fields": [
            "family_status",
            "family_rationale",
            "editorial_summary_short",
            "editorial_summary_long",
            "editorial_why_it_matters",
            "editorial_status",
            "editorial_notes",
            "review_batch",
            "review_priority",
        ],
    }

    write_yaml(TERMS_YAML, terms)
    write_yaml(SENSES_YAML, senses)
    write_yaml(CITATIONS_YAML, citations)
    write_yaml(META_YAML, meta)
    return terms, senses, citations


def load_dataset():
    with TERMS_YAML.open(encoding="utf-8") as handle:
        terms = [normalize_term_record(t) for t in (yaml.safe_load(handle) or [])]
    with SENSES_YAML.open(encoding="utf-8") as handle:
        senses = yaml.safe_load(handle) or []
    with CITATIONS_YAML.open(encoding="utf-8") as handle:
        citations = yaml.safe_load(handle) or []
    return terms, senses, citations


def render(terms: list[dict], senses: list[dict], citations: list[dict]):
    backup_file(TOOLS_MD)
    backup_file(TOOLS_TEXTS_MD)
    backup_file(TOOLS_INDEX_MD)
    overview_md, texts_md, index_md = build_markdown(terms, senses, citations)
    TOOLS_MD.write_text(overview_md, encoding="utf-8")
    TOOLS_TEXTS_MD.write_text(texts_md, encoding="utf-8")
    TOOLS_INDEX_MD.write_text(index_md, encoding="utf-8")
    write_review_artifacts(terms, senses, citations)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--bootstrap", action="store_true", help="Build YAML dataset from the current raw sources before rendering.")
    args = parser.parse_args()

    if args.bootstrap:
        terms, senses, citations = bootstrap()
    else:
        terms, senses, citations = load_dataset()
    validate(terms, senses, citations)
    write_yaml(TERMS_YAML, terms)
    render(terms, senses, citations)


if __name__ == "__main__":
    main()
