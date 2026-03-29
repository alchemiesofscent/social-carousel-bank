#!/usr/bin/env python3
from __future__ import annotations

from collections import defaultdict
from pathlib import Path

import yaml


ROOT = Path(__file__).resolve().parents[1]
DATASET_PATH = ROOT / "workbench" / "data" / "perfume-notes.yaml"
OUTPUT_PATH = ROOT / "workbench" / "generated" / "perfume-theme-dossier.md"
THEME_ORDER = [
    "books-and-catalogues",
    "perfume-sellers-and-market",
    "ingredients-and-aromata",
    "recipes-and-formulations",
    "places-and-production",
    "social-ritual-legal-context",
    "medicine-and-pharmacology",
    "tools-and-technique",
    "lexicography-and-naming",
    "luxury-and-status",
]


def title_case_theme(theme: str) -> str:
    return theme.replace("-", " ").title()


def format_record(record: dict, containers: dict[str, dict]) -> str:
    parts: list[str] = [f"### {record['title']}", ""]
    parts.append(f"- Record type: `{record['record_type']}`")
    parts.append(f"- Container: `{containers[record['container_id']]['title']}`")
    if record["source"]["citation_raw"]:
        parts.append(f"- Source: `{record['source']['citation_raw']}`")
    elif record["source"]["work"]:
        parts.append(f"- Source note: `{record['source']['work']}`")
    if record["topics"]:
        parts.append(f"- Topics: {', '.join(f'`{topic}`' for topic in record['topics'])}")
    if record["summary"]:
        parts.append(f"- Summary: {record['summary']}")
    if record["notes"]["editorial"]:
        parts.append("- Editorial notes:")
        for note in record["notes"]["editorial"]:
            parts.append(f"  - {note}")
    parts.append("")
    if record["text_original"]:
        parts.append("**Original text**")
        parts.append("")
        parts.append("```text")
        parts.append(record["text_original"].strip())
        parts.append("```")
        parts.append("")
    if record["translation"]:
        parts.append("**Translation**")
        parts.append("")
        parts.append("```text")
        parts.append(record["translation"].strip())
        parts.append("```")
        parts.append("")
    if not record["text_original"] and not record["translation"]:
        parts.append("**Raw extract**")
        parts.append("")
        parts.append("```text")
        parts.append(record["body_markdown"].strip())
        parts.append("```")
        parts.append("")
    return "\n".join(parts).rstrip()


def build_markdown(dataset: dict) -> str:
    containers = {container["id"]: container for container in dataset["containers"]}
    grouped: dict[str, list[dict]] = defaultdict(list)
    modern_notes: list[dict] = []

    for record in dataset["records"]:
        if record["record_type"] in {"modern_reference_note", "author_note", "draft_fragment"}:
            modern_notes.append(record)
            continue
        theme = (record["topics"] or ["uncategorized"])[0]
        grouped[theme].append(record)

    lines: list[str] = [
        "# Perfume Theme Dossier",
        "",
        "Generated from `workbench/data/perfume-notes.yaml`.",
        "",
        "## Themes",
        "",
    ]
    for theme in THEME_ORDER:
        if grouped.get(theme):
            anchor = theme.lower()
            lines.append(f"- [{title_case_theme(theme)}](#{anchor})")
    if modern_notes:
        lines.append("- [Working Notes](#working-notes)")
    lines.append("")

    for theme in THEME_ORDER:
        records = grouped.get(theme)
        if not records:
            continue
        lines.append(f"## {title_case_theme(theme)}")
        lines.append("")
        for record in sorted(records, key=lambda item: (item["source"]["author"], item["title"])):
            lines.append(format_record(record, containers))
            lines.append("")

    if modern_notes:
        lines.append("## Working Notes")
        lines.append("")
        for record in sorted(modern_notes, key=lambda item: item["title"]):
            lines.append(format_record(record, containers))
            lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def main() -> None:
    dataset = yaml.safe_load(DATASET_PATH.read_text())
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(build_markdown(dataset))
    print(f"Wrote {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
