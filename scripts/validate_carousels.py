#!/usr/bin/env python3
"""Validate carousel data integrity in carousels.js.

Exit codes: 0 = pass, 1 = errors found, 2 = parse failure.

Usage:
    python3 scripts/validate_carousels.py
    python3 scripts/validate_carousels.py --check-sources
    python3 scripts/validate_carousels.py --wp-status
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

WORKSPACE = Path(__file__).resolve().parents[1]
CAROUSELS_JS = WORKSPACE / "carousel-bank" / "src" / "data" / "carousels.js"
SOURCES_DIR = WORKSPACE / "workbench" / "sources"

KNOWN_SERIES = {
    "DEAD WORDS, LIVING SCENTS",
    "FROM THE WORKSHOP",
    "MYRRHA",
    "THE RECIPE",
    "MATERIA",
    "THE NOSE KNOWS",
    "THE MARKETPLACE",
    "ARTS OF VENUS",
    "TOOLS OF THE TRADE",
    "THE TRANSMUTATION",
    "PHARMAKON",
}

VALID_SLIDE_TYPES = {"hook", "body", "closer"}

# WP assignments: carousel_id -> WP name
WP_ASSIGNMENTS = {
    # WP1 — Theophrastus
    "balanos-oil": "WP1", "shelf-life": "WP1", "last-added": "WP1",
    "roots-vs-flowers": "WP1", "thasian-wine": "WP1", "perfumers-wrist": "WP1",
    "cassia-cinnamon": "WP1", "smell-of-nothing": "WP1",
    # WP2 — Dioscorides Recipes
    "rhodinon-recipe": "WP2", "sousinon-recipe": "WP2", "kyprinon-recipe": "WP2",
    "irinum-recipe": "WP2", "metopion-recipe": "WP2", "stakte-definition": "WP2",
    "amarakinon-recipe": "WP2", "gleukinum-recipe": "WP2",
    "oinanthion-recipe": "WP2", "krokinon-recipe": "WP2", "nardinum-recipe": "WP2",
    "mendesian-recipe": "WP2", "melinon-recipe": "WP2", "telinon-recipe": "WP2",
    "okiminon-recipe": "WP2",
    # WP3 — Dioscorides Vocabulary
    "euodia-dysodes": "WP3", "plektikon": "WP3", "baryosmon-bromodes": "WP3",
    "izo-verbs-adulteration": "WP3", "filling-the-nose": "WP3",
    # WP4 — Athenaeus Book 15
    "garlands-symposium": "WP4", "perfume-war-athens-sparta": "WP4",
    "rose-garland-medicine": "WP4", "perfume-and-soul": "WP4",
    "hicesius-drinking-perfumes": "WP4", "egyptian-perfume-symposium": "WP4",
    # WP5 — Kyphi
    "kyphi-plutarch": "WP5", "kyphi-damocrates": "WP5", "kyphi-solar-lunar": "WP5",
    "kyphi-edfu": "WP5", "kyphi-medicine": "WP5", "kyphi-dioscorides": "WP5",
    "kyphi-ebers": "WP5",
    # WP9 — Pliny
    "tus-supply-chain": "WP9", "cinnamon-fables": "WP9", "balsam-judea": "WP9",
    "nero-poppaea-funeral": "WP9", "piper-gold": "WP9", "pliny-perfume-luxury": "WP9",
    "pliny-royal-perfume": "WP9", "pliny-perfume-shelf-life": "WP9",
    # WP10 — Marketplace
    "fire-test": "WP10", "worm-trick": "WP10",
    "galen-warehouse": "WP10", "huckster-test": "WP10", "falernian-scale": "WP10",
    "summer-ships": "WP10", "blind-perfumers": "WP10", "diogenes-perfumery": "WP10",
    "root-cutters": "WP10", "harvest-window": "WP10", "perfumers-shade": "WP10",
    # WP6 — Aetius & Paul of Aegina
    "castor-linseed": "WP6", "new-spices": "WP6", "moschos": "WP6",
    "church-incense": "WP6", "karyophyllon": "WP6", "susinum": "WP6",
    "mendesian-paul": "WP6", "cleopatra-regime": "WP6", "aetius-people": "WP6",
    # WP7 — Perfumery Tools
    "double-perfumers-vessel": "WP7", "organon-not-cloth": "WP7",
    "kyrtis-pressing-basket": "WP7", "holmos-and-spathe": "WP7",
    "breathing-jars": "WP7", "spotting-a-perfumer-shop": "WP7",
    "kerotakis-gentle-heat": "WP7", "tribikos-three-tubes": "WP7",
    "watching-through-the-flask": "WP7",
    # WP8 — Greek Perfumes & Social Context
    "rhodinon-simplicity": "WP8", "amarakinon-false-name": "WP8",
    "oinanthion-clear-head": "WP8", "krokinon-drinking": "WP8",
    "nardinum-distance": "WP8", "cyprinon-egypt": "WP8",
    "irinum-twenty-years": "WP8",
    # WP15 — Ingredients (partial)
    "smyrna-grades": "WP15", "bdellium": "WP15", "cedar-life-death": "WP15",
    "spikenard-double-gift": "WP15", "costus-burning": "WP15",
    "calamus-far-smell": "WP15", "balsam-grades": "WP15",
    "labdanum-goat": "WP15", "myrakopa": "WP15", "perfume-fire": "WP15",
    "nard-stachys-mystery": "WP15",
    # WP11 — Perfume as Medicine
    "hippocratic-fumigations": "WP11", "brain-drying-theory": "WP11",
    "rose-perfume-bladder": "WP11", "please-the-sick": "WP11",
    "scent-diagnosis": "WP11", "cephalic-ointment": "WP11",
    "rose-oil-anti-inflammatory": "WP11", "epidemic-air": "WP11",
    # WP12 — Arts of Venus
    "hidden-pyxides": "WP12", "munditia-no-crime": "WP12",
    "pliny-unguenta-luxus": "WP12", "wedding-threshold": "WP12",
    "hera-ambrosial-oil": "WP12", "anointed-corpse": "WP12",
    # WP13 — Perfumery & Alchemy
    "rhopos-and-the-perfumer": "WP13", "stypsis-before-scent": "WP13",
    "alteration-means-dyeing": "WP13",
    # WP14 — Perfumery & Philosophy
    "plato-smell-no-name": "WP14", "democritus-smell-shape": "WP14",
    "stoic-smell-self-command": "WP14", "lucretius-scent-particles": "WP14",
}

WP_TARGETS = {
    "WP1": 8, "WP2": 15, "WP3": 5, "WP4": 6, "WP5": 7, "WP6": 9,
    "WP7": 9, "WP8": 7, "WP9": 8, "WP10": 11, "WP11": 8, "WP12": 6,
    "WP13": 3, "WP14": 4, "WP15": 8,
}

WP_NAMES = {
    "WP1": "Theophrastus, On Odours",
    "WP2": "Dioscorides Recipes",
    "WP3": "Dioscorides Vocabulary of Smell",
    "WP4": "Athenaeus Book 15, Remaining",
    "WP5": "Kyphi / Egyptian Temple Recipes",
    "WP6": "Aetius & Paul of Aegina",
    "WP7": "Perfumery Tools",
    "WP8": "Greek Perfumes & Social Context",
    "WP9": "Pliny the Elder",
    "WP10": "The Marketplace",
    "WP11": "Perfume as Medicine",
    "WP12": "Arts of Venus",
    "WP13": "Perfumery & Alchemy",
    "WP14": "Perfumery & Philosophy",
    "WP15": "Individual Ingredients",
}


def find_matching(text: str, start: int, open_char: str, close_char: str) -> int:
    """Find the matching closing bracket, respecting strings and comments."""
    depth = 0
    i = start
    quote: str | None = None

    while i < len(text):
        c = text[i]
        nc = text[i + 1] if i + 1 < len(text) else ""

        if quote is not None:
            if c == "\\":
                i += 2
                continue
            if c == quote:
                quote = None
            i += 1
            continue

        if c == "/" and nc == "/":
            nl = text.find("\n", i)
            i = nl + 1 if nl != -1 else len(text)
            continue
        if c == "/" and nc == "*":
            end = text.find("*/", i + 2)
            i = end + 2 if end != -1 else len(text)
            continue

        if c in {"'", '"', "`"}:
            quote = c
            i += 1
            continue

        if c == open_char:
            depth += 1
        elif c == close_char:
            depth -= 1
            if depth == 0:
                return i
        i += 1

    return -1


def parse_carousels(text: str) -> list[dict]:
    """Extract carousel objects from carousels.js text via bracket-matching."""
    marker = "export const CAROUSELS = ["
    marker_idx = text.find(marker)
    if marker_idx == -1:
        raise ValueError("Could not find CAROUSELS array marker")

    bracket_start = text.index("[", marker_idx)
    bracket_end = find_matching(text, bracket_start, "[", "]")
    if bracket_end == -1:
        raise ValueError("Unmatched CAROUSELS array bracket")

    array_body = text[bracket_start + 1 : bracket_end]
    carousels = []
    i = 0

    while i < len(array_body):
        # Skip whitespace and comments
        while i < len(array_body) and array_body[i] in " \t\n\r,":
            i += 1
        if i >= len(array_body):
            break

        if array_body[i] != "{":
            i += 1
            continue

        obj_end = find_matching(array_body, i, "{", "}")
        if obj_end == -1:
            raise ValueError(f"Unmatched object brace at position {i}")

        obj_text = array_body[i : obj_end + 1]

        # Extract id
        id_match = re.search(r'id:\s*"([^"]+)"', obj_text)
        carousel_id = id_match.group(1) if id_match else None

        # Extract series
        series_match = re.search(r'series:\s*"([^"]+)"', obj_text)
        series = series_match.group(1) if series_match else None

        # Extract slides
        slides = extract_slides(obj_text)

        carousels.append({
            "id": carousel_id,
            "series": series,
            "slides": slides,
            "raw": obj_text,
        })

        i = obj_end + 1

    return carousels


def extract_slides(obj_text: str) -> list[dict]:
    """Extract slide objects from a carousel's raw text."""
    slides_match = re.search(r'slides:\s*\[', obj_text)
    if not slides_match:
        return []

    bracket_start = obj_text.index("[", slides_match.start())
    bracket_end = find_matching(obj_text, bracket_start, "[", "]")
    if bracket_end == -1:
        return []

    slides_body = obj_text[bracket_start + 1 : bracket_end]
    slides = []
    i = 0

    while i < len(slides_body):
        while i < len(slides_body) and slides_body[i] in " \t\n\r,":
            i += 1
        if i >= len(slides_body):
            break
        if slides_body[i] != "{":
            i += 1
            continue

        slide_end = find_matching(slides_body, i, "{", "}")
        if slide_end == -1:
            break

        slide_text = slides_body[i : slide_end + 1]

        type_match = re.search(r'type:\s*"([^"]+)"', slide_text)
        slide_type = type_match.group(1) if type_match else None

        has_main = re.search(r'mainText:\s*"', slide_text) is not None
        has_main_template = re.search(r'mainText:\s*`', slide_text) is not None

        script_match = re.search(r'script:\s*"([^"]*)"', slide_text)
        script_val = script_match.group(1) if script_match else None

        badge_match = re.search(r'badge:\s*"([^"]*)"', slide_text)
        badge_val = badge_match.group(1) if badge_match else None

        slides.append({
            "type": slide_type,
            "hasMainText": has_main or has_main_template,
            "script": script_val,
            "badge": badge_val,
            "raw": slide_text,
        })

        i = slide_end + 1

    return slides


def check_parse_integrity(carousels: list[dict]) -> list[str]:
    """Check that all carousels parsed correctly."""
    errors = []
    for i, c in enumerate(carousels):
        if c["id"] is None:
            errors.append(f"Carousel at index {i}: missing id field")
        if c["series"] is None:
            errors.append(f"Carousel '{c['id']}': missing series field")
        if not c["slides"]:
            errors.append(f"Carousel '{c['id']}': no slides found")
    return errors


def check_duplicate_ids(carousels: list[dict]) -> list[str]:
    """Check for duplicate carousel IDs."""
    seen: dict[str, int] = {}
    errors = []
    for c in carousels:
        cid = c["id"]
        if cid is None:
            continue
        if cid in seen:
            errors.append(f"Duplicate id '{cid}' (first at index {seen[cid]})")
        else:
            seen[cid] = carousels.index(c)
    return errors


def check_slide_structure(carousels: list[dict]) -> list[str]:
    """Check slide ordering: first=hook, last=closer, middle=body, min 3."""
    errors = []
    for c in carousels:
        cid = c["id"] or "unknown"
        slides = c["slides"]
        if len(slides) < 3:
            errors.append(f"'{cid}': only {len(slides)} slides (min 3)")
            continue

        if slides[0]["type"] != "hook":
            errors.append(f"'{cid}': first slide is '{slides[0]['type']}', expected 'hook'")
        if slides[-1]["type"] != "closer":
            errors.append(f"'{cid}': last slide is '{slides[-1]['type']}', expected 'closer'")
        for i, s in enumerate(slides[1:-1], 1):
            if s["type"] != "body":
                errors.append(f"'{cid}': slide {i} is '{s['type']}', expected 'body'")
    return errors


def check_required_fields(carousels: list[dict]) -> list[str]:
    """Check mainText on all slides, type on all slides."""
    errors = []
    for c in carousels:
        cid = c["id"] or "unknown"
        for i, s in enumerate(c["slides"]):
            if s["type"] is None:
                errors.append(f"'{cid}' slide {i}: missing type")
            elif s["type"] not in VALID_SLIDE_TYPES:
                errors.append(f"'{cid}' slide {i}: unknown type '{s['type']}'")
            if not s["hasMainText"]:
                errors.append(f"'{cid}' slide {i}: missing mainText")
    return errors


def check_script_badge(carousels: list[dict]) -> list[str]:
    """Check script never '✦'; workshop entries have badge; non-workshop don't."""
    errors = []
    for c in carousels:
        cid = c["id"] or "unknown"
        series = c["series"]
        hook = c["slides"][0] if c["slides"] else None
        if not hook:
            continue

        if hook["script"] == "✦":
            errors.append(f"'{cid}': script field is '✦' (should be in badge field)")

        if series == "FROM THE WORKSHOP":
            if not hook["badge"]:
                errors.append(f"'{cid}': FROM THE WORKSHOP but no badge on hook")
        else:
            if hook.get("badge"):
                errors.append(f"'{cid}': has badge '{hook['badge']}' but series is '{series}'")
    return errors


def check_series(carousels: list[dict]) -> list[str]:
    """Check all series names are in known set."""
    errors = []
    for c in carousels:
        cid = c["id"] or "unknown"
        if c["series"] and c["series"] not in KNOWN_SERIES:
            errors.append(f"'{cid}': unknown series '{c['series']}'")
    return errors


# Character limits per slide type
BODY_MAIN_MAX = 350
HOOK_MAIN_MAX = 120
CLOSER_MAIN_MAX = 150


def extract_text_content(raw: str, field: str) -> str | None:
    """Extract the string value of a text field from raw slide JS."""
    # Double-quoted string
    pattern = field + r':\s*"((?:[^"\\]|\\.)*)"'
    m = re.search(pattern, raw, re.DOTALL)
    if m:
        return m.group(1)
    # Backtick template literal
    pattern2 = field + r":\s*`((?:[^`\\]|\\.)*)`"
    m2 = re.search(pattern2, raw, re.DOTALL)
    if m2:
        return m2.group(1)
    return None


def check_text_overflow(carousels: list[dict]) -> tuple[list[str], list[str]]:
    """Check text fields against character limits.

    Returns (errors, warnings).
    """
    errors = []
    warnings = []
    for c in carousels:
        cid = c["id"] or "unknown"
        for i, s in enumerate(c["slides"]):
            stype = s["type"]
            mt = extract_text_content(s["raw"], "mainText")
            mt_len = len(mt) if mt else 0

            if stype == "body" and mt_len > BODY_MAIN_MAX:
                errors.append(
                    f"'{cid}' slide {i} (body): mainText {mt_len} chars "
                    f"(max {BODY_MAIN_MAX})"
                )
            elif stype == "hook" and mt_len > HOOK_MAIN_MAX:
                warnings.append(
                    f"'{cid}' slide {i} (hook): mainText {mt_len} chars "
                    f"(max {HOOK_MAIN_MAX})"
                )
            elif stype == "closer" and mt_len > CLOSER_MAIN_MAX:
                warnings.append(
                    f"'{cid}' slide {i} (closer): mainText {mt_len} chars "
                    f"(max {CLOSER_MAIN_MAX})"
                )
    return errors, warnings


def check_sources(carousels: list[dict]) -> list[str]:
    """Cross-ref RECIPE citations against local source files."""
    errors = []
    if not SOURCES_DIR.exists():
        errors.append(f"Sources directory not found: {SOURCES_DIR}")
        return errors

    source_files = list(SOURCES_DIR.glob("*.txt"))
    source_files += list(SOURCES_DIR.glob("*.md"))
    source_files += list((WORKSPACE / "workbench").glob("*.txt"))
    source_files += list((WORKSPACE / "workbench").glob("*.md"))
    all_source_text = ""
    for sf in sorted(set(source_files)):
        all_source_text += sf.read_text(encoding="utf-8")

    recipe_carousels = [c for c in carousels if c["series"] == "THE RECIPE"]
    for c in recipe_carousels:
        cid = c["id"] or "unknown"
        # Look for Dioscorides chapter references in the carousel text
        refs = re.findall(r'Dioscorides.*?1\.(\d+)', c["raw"])
        for chapter in refs:
            pattern = f"1.{chapter}"
            if pattern not in all_source_text:
                errors.append(f"'{cid}': cites Dioscorides {pattern} but not found in source files")

    return errors


def print_wp_status(carousels: list[dict]) -> None:
    """Print WP completion summary from carousel IDs."""
    carousel_ids = {c["id"] for c in carousels if c["id"]}

    wp_done: dict[str, list[str]] = {wp: [] for wp in WP_TARGETS}
    for cid, wp in WP_ASSIGNMENTS.items():
        if cid in carousel_ids:
            wp_done[wp].append(cid)

    assigned_ids = set(WP_ASSIGNMENTS.keys())
    pre_wp = [c["id"] for c in carousels if c["id"] and c["id"] not in assigned_ids]

    print("=" * 60)
    print("WORK PACKAGE STATUS")
    print("=" * 60)
    print(f"{'WP':<6} {'Name':<35} {'Done/Target':<12} {'Status'}")
    print("-" * 60)

    for wp in sorted(WP_TARGETS.keys(), key=lambda x: int(x[2:])):
        done = len(wp_done[wp])
        target = WP_TARGETS[wp]
        name = WP_NAMES[wp]
        if done >= target:
            status = "✅ Done"
        elif done > 0:
            status = "🔄 Partial"
        else:
            status = "⬜ Not started"
        print(f"{wp:<6} {name:<35} {done}/{target:<10} {status}")

    print("-" * 60)
    total_assigned = sum(len(v) for v in wp_done.values())
    total_target = sum(WP_TARGETS.values())
    print(f"{'Total':<6} {'Assigned to WPs':<35} {total_assigned}/{total_target}")
    print(f"{'':6} {'Pre-WP carousels':<35} {len(pre_wp)}")
    print(f"{'':6} {'Grand total':<35} {len(carousels)}/150")


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate carousel data integrity.")
    parser.add_argument("--check-sources", action="store_true",
                        help="Cross-ref RECIPE citations against source files")
    parser.add_argument("--wp-status", action="store_true",
                        help="Print WP completion summary")
    parser.add_argument("--file", type=Path, default=CAROUSELS_JS,
                        help="Path to carousels.js")
    args = parser.parse_args()

    try:
        text = args.file.read_text(encoding="utf-8")
    except FileNotFoundError:
        print(f"ERROR: File not found: {args.file}", file=sys.stderr)
        return 2

    try:
        carousels = parse_carousels(text)
    except ValueError as e:
        print(f"PARSE FAILURE: {e}", file=sys.stderr)
        return 2

    if args.wp_status:
        print_wp_status(carousels)
        return 0

    print(f"Parsed {len(carousels)} carousels from {args.file.name}")

    all_errors: list[str] = []

    checks = [
        ("Parse integrity", check_parse_integrity(carousels)),
        ("Duplicate IDs", check_duplicate_ids(carousels)),
        ("Slide structure", check_slide_structure(carousels)),
        ("Required fields", check_required_fields(carousels)),
        ("Script/badge integrity", check_script_badge(carousels)),
        ("Series validation", check_series(carousels)),
    ]

    if args.check_sources:
        checks.append(("Source cross-ref", check_sources(carousels)))

    # Text overflow check (always on)
    overflow_errors, overflow_warnings = check_text_overflow(carousels)
    checks.append(("Text overflow", overflow_errors))

    for name, errors in checks:
        if errors:
            print(f"\n❌ {name} ({len(errors)} issues):")
            for e in errors:
                print(f"   {e}")
            all_errors.extend(errors)
        else:
            print(f"✓ {name}")

    if overflow_warnings:
        print(f"\n⚠ Text overflow warnings ({len(overflow_warnings)}):")
        for w in overflow_warnings:
            print(f"   {w}")

    if all_errors:
        print(f"\n{len(all_errors)} total issues found.")
        return 1

    print("\nAll checks passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
