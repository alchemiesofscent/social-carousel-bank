#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import os
import re
import sys
import unicodedata
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path


WORKSPACE = Path(__file__).resolve().parents[1]
DEFAULT_ROOT = Path("/home/seancoughlin")

BASE_BASENAME = "carousel-bank-16.jsx"
OVERLAY_BASENAME = "carousel-bank-15 (5).jsx"
ORDER_BASENAME = "carousel-bank-15.jsx"
RECIPE_DOC_BASENAME = "book 1 recipes working.txt"
CONTINUATION_BASENAME = "continuation-prompt.md"
WBS_BASENAME = "wbs-carousel-150.md"

CAROUSELS_MARKER = "const CAROUSELS = ["

OVERLAY_ENTRY_IDS = {
    "gender-perfume",
    "aristotle-nose",
    "stakte",
    "perfumers-wrist",
    "sousinon-recipe",
    "irinum-recipe",
}

RECIPE_ENTRY_IDS = {
    "rhodinon-recipe",
    "sousinon-recipe",
    "kyprinon-recipe",
    "irinum-recipe",
    "metopion-recipe",
    "stakte-definition",
    "amarakinon-recipe",
    "gleukinum-recipe",
}

ENTRY_TO_RECIPE_KEY = {
    "rhodinon-recipe": "rhodinon",
    "sousinon-recipe": "sousinon",
    "kyprinon-recipe": "kyprinon",
    "irinum-recipe": "irinum",
    "metopion-recipe": "metopion",
    "stakte-definition": "stakte",
    "amarakinon-recipe": "amarakinon",
    "gleukinum-recipe": "gleukinum",
}

GREEK_HEADER_TO_RECIPE_KEY = {
    "ροδινου": "rhodinon",
    "οινανθινου": "oinanthion",
    "σουσινου": "sousinon",
    "κροκινον": "krokinon",
    "κυπρινου": "kyprinon",
    "ιρινου": "irinum",
    "γλευκινον": "gleukinum",
    "αμαρακινον": "amarakinon",
    "μετωπιον": "metopion",
    "στακτη": "stakte",
    "ναρδινον": "nardinum",
}

WBS_TITLE_TO_RECIPE_KEY = {
    "metopion": "metopion",
    "cyprinon": "kyprinon",
    "rhodinon": "rhodinon",
    "krokinon": "krokinon",
    "gleucinum": "gleukinum",
    "susinum": "sousinon",
    "nardinum": "nardinum",
    "oinanthion": "oinanthion",
    "irinum": "irinum",
    "mendesian": "mendesian",
}

EXPECTED_CONTINUATION_RANGE = "1.43-1.62"

RECIPE_SOURCE_SUMMARY = "Dioscorides, De Materia Medica Book 1 perfume recipes: 1.43, 1.46, 1.52, 1.54–1.60, 1.62"
CONTINUATION_RECIPE_BULLET = "- Dioscorides Book 1 perfume recipes (1.43, 1.46, 1.52, 1.54–1.60, 1.62: rhodinon, oinanthion, sousinon, krokinon, kyprinon, irinum, gleukinum, amarakinon, metopion/Mendesian, staktē, nardinum)"
WORKSHOP_BADGE = "✦ WORKSHOP"

WBS_RECIPE_ROW_SPECS = [
    ("Metopion — bitter almond, galbanum, cardamom, honey", 1, "metopion"),
    ("Cyprinon — henna flower perfume", 2, "kyprinon"),
    ("Rhodinon — rose perfume (the most common ancient perfume)", 3, "rhodinon"),
    ("Krokinon — saffron perfume", 4, "krokinon"),
    ("Gleucinum — must-wine perfume", 5, "gleukinum"),
    ("Susinum — lily perfume recipe detail", 6, "sousinon"),
    ("Nardinum — spikenard perfume", 7, "nardinum"),
    ("Oinanthion — vine-blossom perfume", 8, "oinanthion"),
    ("Irinum — iris root perfume", 9, "irinum"),
    ("Mendesian — the full Dioscorides version vs Edfu", 10, "mendesian"),
]


@dataclass
class ParsedBank:
    path: Path
    text: str
    preamble: str
    array_body: str
    footer: str
    order: list[str]
    entries: dict[str, str]


@dataclass
class CurrentBankInfo:
    path: Path
    count: int


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def normalize_greek_key(value: str) -> str:
    decomposed = unicodedata.normalize("NFD", value)
    stripped = "".join(ch for ch in decomposed if not unicodedata.combining(ch))
    return stripped.lower()


def normalize_entry_text(entry_text: str) -> str:
    no_line_comments = re.sub(r"//[^\n]*", "", entry_text)
    no_block_comments = re.sub(r"/\*.*?\*/", "", no_line_comments, flags=re.S)
    return re.sub(r"\s+", "", no_block_comments)


def contains_egyptian_hieroglyphs(value: str) -> bool:
    return any(0x13000 <= ord(char) <= 0x1345F for char in value)


def get_hook_script(entry_text: str) -> str | None:
    match = re.search(r'type:\s*"hook".*?script:\s*"([^"]*)"', entry_text, flags=re.S)
    return match.group(1) if match else None


def replace_first_hook_script(entry_text: str, new_script: str) -> str:
    return re.sub(
        r'(\{\s*type:\s*"hook".*?script:\s*")([^"]*)(")',
        rf"\g<1>{new_script}\g<3>",
        entry_text,
        count=1,
        flags=re.S,
    )


def get_series(entry_text: str) -> str | None:
    match = re.search(r'series:\s*"([^"]+)"', entry_text)
    return match.group(1) if match else None


def get_hook_badge(entry_text: str) -> str | None:
    match = re.search(r'type:\s*"hook".*?badge:\s*"([^"]*)"', entry_text, flags=re.S)
    return match.group(1) if match else None


def set_hook_badge(entry_text: str, badge: str) -> str:
    if get_hook_badge(entry_text) is not None:
        return re.sub(
            r'(\{\s*type:\s*"hook".*?badge:\s*")([^"]*)(")',
            rf'\g<1>{badge}\g<3>',
            entry_text,
            count=1,
            flags=re.S,
        )
    if re.search(r'\{\s*type:\s*"hook".*?script:\s*"[^"]*"', entry_text, flags=re.S):
        return re.sub(
            r'(\{\s*type:\s*"hook".*?script:\s*"[^"]*")',
            rf'\g<1>, badge: "{badge}"',
            entry_text,
            count=1,
            flags=re.S,
        )
    return re.sub(
        r'(\{\s*type:\s*"hook".*?topLine:\s*"[^"]*")',
        rf'\g<1>, badge: "{badge}"',
        entry_text,
        count=1,
        flags=re.S,
    )


def choose_workshop_script(current_script: str | None, candidate_entries: list[str]) -> str | None:
    preferred = current_script
    for candidate_entry in candidate_entries:
        candidate_script = get_hook_script(candidate_entry)
        if candidate_script and candidate_script != "\u2726":
            preferred = candidate_script
            break
    if preferred == "\u2726":
        return ""
    return preferred


def find_matching(text: str, start: int, open_char: str, close_char: str) -> int:
    depth = 0
    index = start
    quote: str | None = None
    in_line_comment = False
    in_block_comment = False

    while index < len(text):
        char = text[index]
        next_char = text[index + 1] if index + 1 < len(text) else ""

        if in_line_comment:
            if char == "\n":
                in_line_comment = False
            index += 1
            continue

        if in_block_comment:
            if char == "*" and next_char == "/":
                in_block_comment = False
                index += 2
            else:
                index += 1
            continue

        if quote is not None:
            if char == "\\":
                index += 2
                continue
            if char == quote:
                quote = None
            index += 1
            continue

        if char == "/" and next_char == "/":
            in_line_comment = True
            index += 2
            continue

        if char == "/" and next_char == "*":
            in_block_comment = True
            index += 2
            continue

        if char in {"'", '"', "`"}:
            quote = char
            index += 1
            continue

        if char == open_char:
            depth += 1
        elif char == close_char:
            depth -= 1
            if depth == 0:
                return index

        index += 1

    raise ValueError(f"Unmatched {open_char}{close_char} pair starting at {start}")


def skip_space_and_comments(text: str, start: int) -> int:
    index = start
    while index < len(text):
        if text[index].isspace():
            index += 1
            continue
        if text.startswith("//", index):
            newline = text.find("\n", index)
            if newline == -1:
                return len(text)
            index = newline + 1
            continue
        if text.startswith("/*", index):
            end = text.find("*/", index + 2)
            if end == -1:
                return len(text)
            index = end + 2
            continue
        break
    return index


def parse_bank(path: Path) -> ParsedBank:
    text = path.read_text(encoding="utf-8")
    marker_index = text.index(CAROUSELS_MARKER)
    bracket_index = text.index("[", marker_index)
    closing_index = find_matching(text, bracket_index, "[", "]")

    preamble = text[:marker_index]
    array_body = text[bracket_index + 1 : closing_index]
    footer = text[closing_index + 1 :]

    entries: dict[str, str] = {}
    order: list[str] = []
    cursor = 0
    while True:
        entry_start = cursor
        object_start = skip_space_and_comments(array_body, cursor)
        if object_start >= len(array_body):
            break
        if array_body[object_start] != "{":
            raise ValueError(f"Unexpected token while parsing {path}: {array_body[object_start]!r}")
        object_end = find_matching(array_body, object_start, "{", "}")
        entry_end = object_end + 1
        temp = entry_end
        while temp < len(array_body) and array_body[temp].isspace():
            temp += 1
        if temp < len(array_body) and array_body[temp] == ",":
            entry_end = temp + 1
        entry_text = array_body[entry_start:entry_end].strip("\n")
        id_match = re.search(r'id:\s*"([^"]+)"', entry_text)
        if not id_match:
            raise ValueError(f"Unable to find carousel id in {path}")
        carousel_id = id_match.group(1)
        entries[carousel_id] = entry_text
        order.append(carousel_id)
        cursor = entry_end

    return ParsedBank(
        path=path,
        text=text,
        preamble=preamble,
        array_body=array_body,
        footer=footer,
        order=order,
        entries=entries,
    )


def parse_all_banks(paths: list[Path]) -> list[ParsedBank]:
    banks: list[ParsedBank] = []
    for path in paths:
        try:
            banks.append(parse_bank(path))
        except Exception:
            continue
    return banks


def discover_jsx_files(root: Path, excluded: set[Path]) -> list[Path]:
    discovered = []
    for current_root, dirnames, filenames in os.walk(root, followlinks=False):
        dirnames.sort()
        filenames.sort()
        current_root_path = Path(current_root)
        for filename in filenames:
            if not filename.endswith(".jsx"):
                continue
            resolved = (current_root_path / filename).resolve()
            if resolved in excluded:
                continue
            discovered.append(resolved)
    return discovered


def build_hash_groups(paths: list[Path]) -> dict[str, list[Path]]:
    groups: dict[str, list[Path]] = defaultdict(list)
    for path in paths:
        groups[sha256_file(path)].append(path)
    return dict(groups)


def recipe_chapters_from_working_file(path: Path) -> dict[str, int]:
    text = path.read_text(encoding="utf-8")
    chapters: dict[str, int] = {}
    for header, chapter in re.findall(r"^<([^>]+)>\s*1\.(\d+)", text, flags=re.M):
        normalized = normalize_greek_key(header)
        recipe_key = GREEK_HEADER_TO_RECIPE_KEY.get(normalized)
        if recipe_key:
            chapters[recipe_key] = int(chapter)
    if "metopion" in chapters:
        chapters["mendesian"] = chapters["metopion"]
    return chapters


def parse_series_names(path: Path) -> set[str]:
    text = path.read_text(encoding="utf-8")
    return set(re.findall(r'- \*\*"([^"]+)"\*\*', text))


def parse_wbs_recipe_chapters(path: Path) -> dict[str, int]:
    text = path.read_text(encoding="utf-8")
    output: dict[str, int] = {}
    for title, chapter in re.findall(r"\|\s*\d+\s*\|\s*([^|]+?)\s*\|\s*Diosc\.\s*1\.(\d+)\s*\|", text):
        title_lower = title.lower()
        for needle, key in WBS_TITLE_TO_RECIPE_KEY.items():
            if needle in title_lower:
                output[key] = int(chapter)
                break
    return output


def detect_current_bank(root: Path) -> CurrentBankInfo:
    candidates: list[tuple[int, Path]] = []
    pattern = re.compile(r"carousel-bank-(\d+)\.jsx$")
    for path in root.rglob("carousel-bank-*.jsx"):
        match = pattern.fullmatch(path.name)
        if not match:
            continue
        candidates.append((int(match.group(1)), path.resolve()))
    if not candidates:
        raise FileNotFoundError(f"Could not find any canonical carousel-bank-<n>.jsx file under {root}")
    _, latest_path = max(candidates, key=lambda item: (item[0], str(item[1])))
    count = len(parse_bank(latest_path).order)
    return CurrentBankInfo(path=latest_path, count=count)


def sync_wbs_markdown(text: str, recipe_chapters: dict[str, int], current_count: int) -> str:
    updated = text
    remaining = max(150 - current_count, 0)
    updated = re.sub(
        r"## Target: 150 posts \(\d+ existing → \d+ new\)",
        f"## Target: 150 posts ({current_count} existing → {remaining} new)",
        updated,
        count=1,
    )

    if current_count >= 75:
        m1_line = f"### M1 — 75 posts (already exceeded; current {current_count})"
    else:
        needed = 75 - current_count
        m1_line = f"### M1 — 75 posts (current {current_count} + {needed} new)"
    updated = re.sub(r"### M1 — 75 posts \([^)]+\)", m1_line, updated, count=1)

    for title, number, recipe_key in WBS_RECIPE_ROW_SPECS:
        chapter = recipe_chapters[recipe_key]
        row_pattern = re.compile(rf"^\| {number} \| {re.escape(title)} \| Diosc\. 1\.\d+ \|$", flags=re.M)
        updated = row_pattern.sub(f"| {number} | {title} | Diosc. 1.{chapter} |", updated, count=1)

    updated = re.sub(
        r"\*\*Source needed:\*\* Dioscorides, De Materia Medica [^\n]+ \(perfume recipes section\)",
        f"**Source needed:** {RECIPE_SOURCE_SUMMARY}",
        updated,
        count=1,
    )
    updated = re.sub(
        r"\*\*Source priority:\*\* Theophrastus On Odours, Dioscorides [^\n]+",
        f"**Source priority:** Theophrastus On Odours, {RECIPE_SOURCE_SUMMARY}",
        updated,
        count=1,
    )
    updated = re.sub(
        r"^2\. Dioscorides, De Materia Medica [^\n]+$",
        f"2. {RECIPE_SOURCE_SUMMARY}",
        updated,
        count=1,
        flags=re.M,
    )
    return updated


def sync_continuation_markdown(text: str, current_bank: CurrentBankInfo) -> str:
    updated = text
    updated = re.sub(
        r"The file `carousel-bank-\d+\.jsx` in this project contains the \*\*interactive carousel viewer\*\*",
        f"The file `{current_bank.path.name}` in this project contains the **interactive carousel viewer**",
        updated,
        count=1,
    )
    updated = re.sub(
        r"\*\*Current count: [^\n]+\n",
        f"**Current count: {current_bank.count} carousels.**\n",
        updated,
        count=1,
    )
    updated = re.sub(
        r"1\. Read `carousel-bank-\d+\.jsx` from the project to see the current state",
        f"1. Read `{current_bank.path.name}` from the project to see the current state",
        updated,
        count=1,
    )
    updated = re.sub(
        r"5\. Update the count in the header text",
        "5. No manual count update is needed; the viewer header derives from `CAROUSELS.length`.",
        updated,
        count=1,
    )
    updated = re.sub(
        r"- Dioscorides [^\n]+ \(perfume recipes:[^\n]+\)",
        CONTINUATION_RECIPE_BULLET,
        updated,
        count=1,
    )
    updated = re.sub(
        r"1\. \*\*Get Dioscorides [^\n]+\*\* — launches THE RECIPE series \(WP2, 10 posts\)",
        "1. **Get Dioscorides Book 1 recipe passages (1.43, 1.46, 1.52, 1.54–1.60, 1.62)** — launches THE RECIPE series (WP2, 10 posts)",
        updated,
        count=1,
    )
    return updated


def sync_markdown_docs(
    continuation_path: Path,
    wbs_path: Path,
    recipe_chapters: dict[str, int],
    current_bank: CurrentBankInfo,
) -> list[str]:
    notes: list[str] = []

    original_wbs = wbs_path.read_text(encoding="utf-8")
    synced_wbs = sync_wbs_markdown(original_wbs, recipe_chapters, current_bank.count)
    if synced_wbs != original_wbs:
        wbs_path.write_text(synced_wbs, encoding="utf-8")
        notes.append(f"Synchronized `{wbs_path.name}` to `{RECIPE_DOC_BASENAME}` and current bank count `{current_bank.count}`.")

    original_continuation = continuation_path.read_text(encoding="utf-8")
    synced_continuation = sync_continuation_markdown(original_continuation, current_bank)
    if synced_continuation != original_continuation:
        continuation_path.write_text(synced_continuation, encoding="utf-8")
        notes.append(
            f"Synchronized `{continuation_path.name}` to `{current_bank.path.name}`, current count `{current_bank.count}`, and `{RECIPE_DOC_BASENAME}`."
        )

    return notes


def build_merged_entries(
    base_bank: ParsedBank,
    overlay_bank: ParsedBank,
    order_bank: ParsedBank,
    recipe_chapters: dict[str, int],
    candidate_banks: list[ParsedBank],
) -> tuple[list[str], dict[str, str], list[str]]:
    merged: dict[str, str] = {}
    fixed_notes: list[str] = []

    for carousel_id in base_bank.order:
        merged[carousel_id] = base_bank.entries[carousel_id]

    additions = [carousel_id for carousel_id in order_bank.order if carousel_id not in merged]
    for carousel_id in additions:
        merged[carousel_id] = order_bank.entries[carousel_id]
    if additions:
        fixed_notes.append(
            f"Added {len(additions)} IDs only present in `{ORDER_BASENAME}`: {', '.join(additions)}."
        )

    for carousel_id in OVERLAY_ENTRY_IDS:
        merged[carousel_id] = overlay_bank.entries[carousel_id]
    fixed_notes.append(
        f"Applied targeted entry overlays from `{OVERLAY_BASENAME}` for: {', '.join(sorted(OVERLAY_ENTRY_IDS))}."
    )

    for carousel_id, recipe_key in ENTRY_TO_RECIPE_KEY.items():
        chapter = recipe_chapters.get(recipe_key)
        if chapter is None or carousel_id not in merged:
            continue
        before = merged[carousel_id]
        after = re.sub(
            r"Dioscorides, De Materia Medica 1\.\d+\.",
            f"Dioscorides, De Materia Medica 1.{chapter}.",
            before,
        )
        if before != after:
            fixed_notes.append(
                f"Updated `{carousel_id}` citation to `Dioscorides, De Materia Medica 1.{chapter}.` from `{RECIPE_DOC_BASENAME}`."
            )
        merged[carousel_id] = after

    hieroglyph_updates: list[str] = []
    for carousel_id, merged_entry in list(merged.items()):
        merged_script = get_hook_script(merged_entry)
        if not merged_script or contains_egyptian_hieroglyphs(merged_script):
            continue
        preferred_script = None
        for bank in candidate_banks:
            candidate_entry = bank.entries.get(carousel_id)
            if not candidate_entry:
                continue
            candidate_script = get_hook_script(candidate_entry)
            if candidate_script and contains_egyptian_hieroglyphs(candidate_script):
                preferred_script = candidate_script
                break
        if preferred_script and preferred_script != merged_script:
            merged[carousel_id] = replace_first_hook_script(merged_entry, preferred_script)
            hieroglyph_updates.append(f"{carousel_id} -> {preferred_script}")
    if hieroglyph_updates:
        fixed_notes.append(
            "Preferred hieroglyphic hook `script` values when available: " + ", ".join(hieroglyph_updates) + "."
        )

    workshop_updates: list[str] = []
    for carousel_id, merged_entry in list(merged.items()):
        if get_series(merged_entry) != "FROM THE WORKSHOP":
            continue
        candidate_entries = [
            bank.entries[carousel_id]
            for bank in candidate_banks
            if carousel_id in bank.entries and get_series(bank.entries[carousel_id]) == "FROM THE WORKSHOP"
        ]
        current_script = get_hook_script(merged_entry)
        preferred_script = choose_workshop_script(current_script, candidate_entries)
        updated_entry = merged_entry
        if preferred_script is not None and preferred_script != current_script:
            updated_entry = replace_first_hook_script(updated_entry, preferred_script)
        updated_entry = set_hook_badge(updated_entry, WORKSHOP_BADGE)
        if updated_entry != merged_entry:
            merged[carousel_id] = updated_entry
            workshop_updates.append(carousel_id)
    if workshop_updates:
        fixed_notes.append(
            "Added workshop badges and restored source-language `script` values where available for: "
            + ", ".join(workshop_updates)
            + "."
        )

    leading_ids = list(order_bank.order)
    trailing_non_recipe = [
        carousel_id
        for carousel_id in base_bank.order
        if carousel_id not in order_bank.entries and carousel_id not in RECIPE_ENTRY_IDS
    ]
    trailing_recipe = [carousel_id for carousel_id in base_bank.order if carousel_id in RECIPE_ENTRY_IDS]
    final_order = leading_ids + trailing_non_recipe + trailing_recipe

    if len(final_order) != len(set(final_order)):
        raise ValueError("Final merge order contains duplicate ids")
    if set(final_order) != set(merged):
        missing = sorted(set(merged) - set(final_order))
        extra = sorted(set(final_order) - set(merged))
        raise ValueError(f"Final merge order mismatch; missing={missing}, extra={extra}")

    return final_order, merged, fixed_notes


def build_footer(overlay_footer: str) -> str:
    footer = overlay_footer
    footer = re.sub(
        r"const \[expandedId, setExpandedId\] = useState\([^;]+\);",
        "const [expandedId, setExpandedId] = useState(CAROUSELS[0]?.id ?? null);",
        footer,
    )
    footer = re.sub(r"\n\s*\{/\* FIX #2:[^*]*\*/\}\n", "\n", footer)
    footer = re.sub(
        r'<div style=\{\{ color: PALETTE\.muted, fontSize: "12px", fontFamily: "system-ui, sans-serif", marginBottom: "24px" \}\}>[^<]+</div>',
        '<div style={{ color: PALETTE.muted, fontSize: "12px", fontFamily: "system-ui, sans-serif", marginBottom: "24px" }}>{`${CAROUSELS.length} carousel mockups - click headers to expand, click left/right on slides to navigate`}</div>',
        footer,
    )
    return footer


def build_merged_file(
    overlay_preamble: str,
    overlay_footer: str,
    order: list[str],
    entries: dict[str, str],
) -> str:
    body = "\n".join(entries[carousel_id] for carousel_id in order)
    return f"{overlay_preamble}{CAROUSELS_MARKER}\n{body}\n]{build_footer(overlay_footer)}"


def collect_conflicts(parsed_banks: list[ParsedBank]) -> dict[str, dict[str, list[Path]]]:
    by_id: dict[str, dict[str, list[Path]]] = defaultdict(lambda: defaultdict(list))
    for bank in parsed_banks:
        for carousel_id, entry_text in bank.entries.items():
            by_id[carousel_id][normalize_entry_text(entry_text)].append(bank.path)
    return {
        carousel_id: variants
        for carousel_id, variants in by_id.items()
        if len(variants) > 1
    }


def validate_series_names(entries: dict[str, str], allowed_series: set[str]) -> list[str]:
    issues: list[str] = []
    for carousel_id, entry_text in entries.items():
        match = re.search(r'series:\s*"([^"]+)"', entry_text)
        if not match:
            issues.append(f"`{carousel_id}` is missing a `series` field.")
            continue
        if match.group(1) not in allowed_series:
            issues.append(f"`{carousel_id}` uses unknown series `{match.group(1)}`.")
    return issues


def validate_workshop_scripts(entries: dict[str, str]) -> list[str]:
    issues: list[str] = []
    for carousel_id, entry_text in entries.items():
        series_match = re.search(r'series:\s*"([^"]+)"', entry_text)
        if not series_match or series_match.group(1) != "FROM THE WORKSHOP":
            continue
        badge = get_hook_badge(entry_text)
        if badge != WORKSHOP_BADGE:
            issues.append(f"`{carousel_id}` is `FROM THE WORKSHOP` but hook `badge` is `{badge}`.")
    return issues


def validate_gentium_usage(merged_text: str) -> list[str]:
    issues: list[str] = []
    if "Gentium Plus" not in merged_text:
        issues.append("Merged viewer does not include `Gentium Plus` typography.")
    if "Courier New" not in merged_text:
        issues.append("Merged viewer does not include `Courier New` labels.")
    if "FONT_LINK" not in merged_text:
        issues.append("Merged viewer does not include the Gentium font loader.")
    return issues


def parse_count_line(merged_text: str) -> bool:
    return "{`${CAROUSELS.length} carousel mockups - click headers to expand, click left/right on slides to navigate`}" in merged_text


def extract_continuation_ranges(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8")
    return re.findall(r"Dioscorides(?:, De Materia Medica)? (\d+\.\d+[–-]\d+\.\d+)", text)


def build_doc_mismatches(
    wbs_path: Path,
    continuation_path: Path,
    recipe_chapters: dict[str, int],
) -> list[str]:
    mismatches: list[str] = []
    wbs_chapters = parse_wbs_recipe_chapters(wbs_path)
    for recipe_key, wbs_chapter in sorted(wbs_chapters.items()):
        expected = recipe_chapters.get(recipe_key)
        if expected is None:
            if recipe_key == "mendesian":
                expected = recipe_chapters.get("mendesian")
        if expected is None:
            continue
        if wbs_chapter != expected:
            label = recipe_key
            if recipe_key == "mendesian":
                mismatches.append(
                    f"`{wbs_path.name}` lists Mendesian as `1.{wbs_chapter}`, but `{RECIPE_DOC_BASENAME}` places it inside Metopion `1.{expected}`."
                )
            else:
                mismatches.append(
                    f"`{wbs_path.name}` lists `{label}` as `1.{wbs_chapter}`, but `{RECIPE_DOC_BASENAME}` gives `1.{expected}`."
                )

    for raw_range in extract_continuation_ranges(continuation_path):
        compact = raw_range.replace("\u2013", "-")
        if compact == "1.53-1.62" or compact == "1.53-1.72":
            mismatches.append(
                f"`{continuation_path.name}` still references `{raw_range}` for the recipe block; `{RECIPE_DOC_BASENAME}` shows the working recipe span is not a simple contiguous `1.53-...` range."
            )
    return list(dict.fromkeys(mismatches))


def build_manual_review(
    conflicts: dict[str, dict[str, list[Path]]],
    merged_entries: dict[str, str],
) -> list[str]:
    review: list[str] = []
    for carousel_id in sorted(conflicts):
        if carousel_id in OVERLAY_ENTRY_IDS:
            continue
        chosen = normalize_entry_text(merged_entries[carousel_id])
        variants = conflicts[carousel_id]
        if chosen not in variants:
            continue
        if len(variants) <= 1:
            continue
        sources = ["`{}`".format(path.name) for path in sorted(variants[chosen])]
        alternatives = sorted(
            {
                path.name
                for variant_key, paths in variants.items()
                if variant_key != chosen
                for path in paths
            }
        )
        review.append(
            f"`{carousel_id}` still has multiple source variants; kept {', '.join(sources)} by precedence, alternative source files: {', '.join(f'`{name}`' for name in alternatives)}."
        )
    return review


def build_report(
    root: Path,
    discovered: list[Path],
    hash_groups: dict[str, list[Path]],
    final_order: list[str],
    fixed_notes: list[str],
    conflicts: dict[str, dict[str, list[Path]]],
    series_issues: list[str],
    workshop_issues: list[str],
    typography_issues: list[str],
    count_is_dynamic: bool,
    doc_mismatches: list[str],
    manual_review: list[str],
) -> str:
    duplicate_groups = [paths for paths in hash_groups.values() if len(paths) > 1]
    parsed_hashes = len(hash_groups)
    lines = [
        "# Carousel Bank QC Report",
        "",
        f"- Root scanned: `{root}`",
        f"- JSX files discovered: {len(discovered)}",
        f"- Unique file hashes: {parsed_hashes}",
        f"- Exact duplicate groups: {len(duplicate_groups)}",
        f"- Final merged carousel count: {len(final_order)}",
        "",
        "## Duplicate Files",
    ]

    if duplicate_groups:
        for group in sorted(duplicate_groups, key=lambda item: (len(item), [path.name for path in item]), reverse=True):
            names = ", ".join(f"`{path.name}`" for path in group)
            lines.append(f"- {names}")
    else:
        lines.append("- None.")

    lines.extend(["", "## Fixed"])
    if count_is_dynamic:
        lines.append("- Converted the visible carousel count to `CAROUSELS.length`.")
    for note in fixed_notes:
        lines.append(f"- {note}")

    lines.extend(["", "## Conflicts"])
    conflict_ids = sorted(conflicts)
    if conflict_ids:
        lines.append(f"- IDs with source-level variants: {', '.join(f'`{item}`' for item in conflict_ids)}")
    else:
        lines.append("- No content conflicts detected.")

    lines.extend(["", "## Doc Mismatches"])
    if doc_mismatches:
        for item in doc_mismatches:
            lines.append(f"- {item}")
    else:
        lines.append("- None.")

    lines.extend(["", "## Remaining Review"])
    remaining = series_issues + workshop_issues + typography_issues
    if not count_is_dynamic:
        remaining.append("Merged viewer count line is still hardcoded.")
    remaining.extend(manual_review)
    if remaining:
        for item in remaining:
            lines.append(f"- {item}")
    else:
        lines.append("- No remaining deterministic QC issues.")

    return "\n".join(lines) + "\n"


def resolve_required_file(root: Path, basename: str) -> Path:
    matches = sorted(root.rglob(basename))
    if not matches:
        raise FileNotFoundError(f"Could not find {basename!r} under {root}")
    if len(matches) > 1:
        raise FileNotFoundError(f"Found multiple matches for {basename!r}: {', '.join(str(path) for path in matches)}")
    return matches[0].resolve()


def main() -> int:
    parser = argparse.ArgumentParser(description="Merge carousel JSX banks and produce a QC report.")
    parser.add_argument("--root", type=Path, default=DEFAULT_ROOT)
    parser.add_argument("--merge-out", type=Path, default=Path("carousel-bank-17.jsx"))
    parser.add_argument("--report-out", type=Path, default=Path("carousel-bank-17.qc.md"))
    parser.add_argument("--check", action="store_true", help="Run discovery and QC without writing the merged JSX file.")
    parser.add_argument("--sync-docs", action="store_true", help="Update markdown docs from the current bank and recipe source of truth before QC.")
    args = parser.parse_args()

    root = args.root.resolve()
    merge_out = (WORKSPACE / args.merge_out).resolve() if not args.merge_out.is_absolute() else args.merge_out.resolve()
    report_out = (WORKSPACE / args.report_out).resolve() if not args.report_out.is_absolute() else args.report_out.resolve()

    excluded = {merge_out}
    discovered = discover_jsx_files(root, excluded)
    hash_groups = build_hash_groups(discovered)

    base_path = resolve_required_file(root, BASE_BASENAME)
    overlay_path = resolve_required_file(root, OVERLAY_BASENAME)
    order_path = resolve_required_file(root, ORDER_BASENAME)
    recipe_doc_path = resolve_required_file(root, RECIPE_DOC_BASENAME)
    continuation_path = resolve_required_file(root, CONTINUATION_BASENAME)
    wbs_path = resolve_required_file(root, WBS_BASENAME)
    current_bank = detect_current_bank(root)

    parsed_banks = [parse_bank(path) for path in {base_path, overlay_path, order_path}]
    parsed_by_name = {bank.path.name: bank for bank in parsed_banks}
    candidate_banks = parse_all_banks(discovered)

    recipe_chapters = recipe_chapters_from_working_file(recipe_doc_path)
    doc_sync_notes: list[str] = []
    if args.sync_docs:
        doc_sync_notes = sync_markdown_docs(
            continuation_path=continuation_path,
            wbs_path=wbs_path,
            recipe_chapters=recipe_chapters,
            current_bank=current_bank,
        )
    continuation_series = parse_series_names(continuation_path)

    final_order, merged_entries, fixed_notes = build_merged_entries(
        base_bank=parsed_by_name[BASE_BASENAME],
        overlay_bank=parsed_by_name[OVERLAY_BASENAME],
        order_bank=parsed_by_name[ORDER_BASENAME],
        recipe_chapters=recipe_chapters,
        candidate_banks=candidate_banks,
    )

    merged_text = build_merged_file(
        overlay_preamble=parsed_by_name[OVERLAY_BASENAME].preamble,
        overlay_footer=parsed_by_name[OVERLAY_BASENAME].footer,
        order=final_order,
        entries=merged_entries,
    )

    conflicts = collect_conflicts(parsed_banks)
    series_issues = validate_series_names(merged_entries, continuation_series)
    workshop_issues = validate_workshop_scripts(merged_entries)
    typography_issues = validate_gentium_usage(merged_text)
    count_is_dynamic = parse_count_line(merged_text)
    doc_mismatches = build_doc_mismatches(wbs_path, continuation_path, recipe_chapters)
    manual_review = build_manual_review(conflicts, merged_entries)

    report = build_report(
        root=root,
        discovered=discovered,
        hash_groups=hash_groups,
        final_order=final_order,
        fixed_notes=doc_sync_notes + fixed_notes,
        conflicts=conflicts,
        series_issues=series_issues,
        workshop_issues=workshop_issues,
        typography_issues=typography_issues,
        count_is_dynamic=count_is_dynamic,
        doc_mismatches=doc_mismatches,
        manual_review=manual_review,
    )

    if not args.check:
        merge_out.write_text(merged_text, encoding="utf-8")
    report_out.write_text(report, encoding="utf-8")

    if series_issues or workshop_issues or typography_issues or not count_is_dynamic:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
