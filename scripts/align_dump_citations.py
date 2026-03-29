#!/usr/bin/env python3
"""Parse dump-backed source files into citation records and rewrite publishable subText."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path


def find_matching(text: str, start: int, open_char: str, close_char: str) -> int:
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


def js_escape(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def normalize_alchemy_citation(heading: str) -> tuple[str, str, str]:
    if heading.startswith("Apuleius, Metamorphoses 3.21"):
        return ("Apuleius", "Metamorphoses 3.21", "Apuleius, Met. 3.21")
    if heading.startswith("Plutarch, Animals are Rational 7"):
        return ("Plutarch", "Animals are Rational 7", "Plut., De sollertia animalium 7")
    if heading.startswith("Ptolemy, Tetrabiblos 4.4.4"):
        return ("Ptolemy", "Tetrabiblos 4.4.4", "Ptolemy, Tetr. 4.4.4")
    if heading.startswith("Philo of Alexandria, On Planting 159"):
        return ("Philo", "On Planting 159", "Philo, Plant. 159")
    if heading.startswith("Zeno of Citium, reported in Clement"):
        return ("Clement", "Paedagogus 3.11.74.4", "Clem. Alex., Paed. 3.11.74.4")
    if heading.startswith("Photius, Lexicon, s.v. ῥῶπος"):
        return ("Photius", "Lexicon, s.v. ῥῶπος", "Photius, Lexicon, s.v. ῥῶπος")
    if heading.startswith("Suda, s.v. ῥῶπος"):
        return ("Suda", "s.v. ῥῶπος", "Suda, s.v. ῥῶπος")
    if heading.startswith("Galen, Simple Drugs 2.27"):
        return ("Galen", "Simple Drugs 2.27", "Galen, Simp. Med. 2.27")
    if heading.startswith("Galen, Glossary of Hippocrates"):
        return ("Galen", "Glossary of Hippocrates α19", "Galen, Gloss. Hipp. α19")
    if heading.startswith("Pliny, Natural History 13.1"):
        return ("Pliny", "Natural History 13.1", "Pliny, NH 13.1")
    if heading.startswith("Diosc. 1.61"):
        return ("Dioscorides", "1.61", "Diosc. 1.61")
    if heading.startswith("Theophrastus, Scents 17"):
        return ("Theophrastus", "Scents 17", "Theophr., Odor. 17")
    if heading.startswith("Theophrastus, Scents 18"):
        return ("Theophrastus", "Scents 18", "Theophr., Odor. 18")
    if heading.startswith("Ps. Aristotle, Colours 4"):
        return ("Ps.-Aristotle", "Colours 4", "Ps.-Arist., Col. 4")
    if heading.startswith("Plato, Timaeus 50e4–8"):
        return ("Plato", "Timaeus 50e4–8", "Plato, Tim. 50e4-8")
    if heading.startswith("Plato, Republic 4, 429d4–e3"):
        return ("Plato", "Republic 4, 429d4-e3", "Plato, Resp. 4.429d4-e3")
    if heading.startswith("Pliny, Natural History 35.11"):
        return ("Pliny", "Natural History 35.11", "Pliny, NH 35.11")
    return (heading.split(",", 1)[0].strip(), heading.strip(), heading.strip().rstrip("."))


def parse_alchemy_dump(path: Path) -> list[dict]:
    lines = path.read_text(encoding="utf-8").splitlines()
    records: list[dict] = []
    starts: list[tuple[int, int, str]] = []
    for idx, line in enumerate(lines, 1):
        match = re.match(r"^T(\d+)\.\s+(.*)$", line)
        if match:
            starts.append((idx, int(match.group(1)), match.group(2).strip()))

    for i, (line_no, num, heading) in enumerate(starts):
        next_line = starts[i + 1][0] - 1 if i + 1 < len(starts) else len(lines)
        author, work, public_citation = normalize_alchemy_citation(heading)
        records.append(
            {
                "entry_id": f"alchemy-T{num}",
                "source_file": str(path),
                "author": author,
                "work": work,
                "public_citation": public_citation,
                "raw_heading": heading,
                "line_start": line_no,
                "line_end": next_line,
                "tags": ["dump", "alchemy", f"T{num}"],
            }
        )

    table_specs = [
        ("alchemy-table-1", "**TABLE 1 GR**", "**TABLE 2 GR**", "P.Oxy. 5242; Diosc. 1.43, 1.52, 1.56"),
        ("alchemy-table-2", "**TABLE 2 GR**", None, "P.Oxy. 5242; Pap. Holm. 100; Diosc. 1.40, 1.52, 1.55; Theophr. Odor. 26"),
    ]
    for entry_id, start_marker, end_marker, public_citation in table_specs:
        start_line = None
        end_line = len(lines)
        for idx, line in enumerate(lines, 1):
            if line.strip() == start_marker:
                start_line = idx
                break
        if start_line is None:
            continue
        if end_marker:
            for idx, line in enumerate(lines[start_line:], start_line + 1):
                if line.strip() == end_marker:
                    end_line = idx - 1
                    break
        records.append(
            {
                "entry_id": entry_id,
                "source_file": str(path),
                "author": "Table",
                "work": start_marker.strip("*"),
                "public_citation": public_citation,
                "raw_heading": start_marker.strip("*"),
                "line_start": start_line,
                "line_end": end_line,
                "tags": ["dump", "alchemy", "table"],
            }
        )

    return records


def shorten_alchem_author(author_label: str) -> str:
    if author_label.startswith("Zosimus Alchem."):
        return "Zos. Alchem."
    if author_label.startswith("Moses Alchem."):
        return "Moses Alchem."
    if author_label.startswith("Cleopatra Alchem."):
        return "Cleopatra Alchem."
    return author_label.strip()


def parse_alchem_dump(path: Path) -> list[dict]:
    lines = path.read_text(encoding="utf-8").splitlines()
    volume_records: list[dict] = []
    for idx, line in enumerate(lines, 1):
        match = re.match(r"^Volume\s+(\d+), page\s+(\d+), line\s+(\d+)", line.strip())
        if not match:
            continue

        heading_idx = None
        for j in range(idx - 1, 0, -1):
            probe = lines[j - 1].strip()
            if "Alchem." in probe:
                heading_idx = j
                break
        if heading_idx is None:
            continue

        heading = lines[heading_idx - 1].strip()
        author_label = heading.split("(", 1)[0].strip().rstrip(",")
        volume = int(match.group(1))
        page = int(match.group(2))
        line_no = int(match.group(3))

        volume_records.append(
            {
                "entry_id": f"alchem-caag{volume}-{page}-{line_no}",
                "source_file": str(path),
                "author": shorten_alchem_author(author_label),
                "work": heading,
                "public_citation": f"{shorten_alchem_author(author_label)}, CAAG {volume}.{page}.{line_no}ff.",
                "raw_heading": heading,
                "line_start": heading_idx,
                "line_end": len(lines),
                "edition_label": "Collection des anciens alchimistes grecs",
                "caag_volume": volume,
                "page": page,
                "line": line_no,
                "tags": ["dump", "alchem", f"caag-{volume}-{page}-{line_no}"],
            }
        )

    for i, record in enumerate(volume_records):
        if i + 1 < len(volume_records):
            record["line_end"] = volume_records[i + 1]["line_start"] - 1
    return volume_records


def build_index(alchemy_path: Path, alchem_path: Path) -> dict:
    records = parse_alchemy_dump(alchemy_path) + parse_alchem_dump(alchem_path)
    return {
        "sources": [str(alchemy_path), str(alchem_path)],
        "records": records,
    }


def parse_js_array_objects(text: str, marker: str) -> tuple[int, int, list[dict]]:
    marker_idx = text.find(marker)
    if marker_idx == -1:
        raise ValueError(f"Could not find marker: {marker}")

    bracket_start = text.index("[", marker_idx)
    bracket_end = find_matching(text, bracket_start, "[", "]")
    if bracket_end == -1:
        raise ValueError("Unmatched array bracket")

    array_body = text[bracket_start + 1 : bracket_end]
    objects = []
    i = 0
    while i < len(array_body):
        while i < len(array_body) and array_body[i] in " \t\n\r,":
            i += 1
        if i >= len(array_body):
            break
        if array_body[i] != "{":
            i += 1
            continue
        obj_end = find_matching(array_body, i, "{", "}")
        if obj_end == -1:
            raise ValueError(f"Unmatched object brace at {i}")
        obj_raw = array_body[i : obj_end + 1]
        obj_abs_start = bracket_start + 1 + i
        obj_abs_end = bracket_start + 1 + obj_end + 1
        id_match = re.search(r'id:\s*"([^"]+)"', obj_raw)
        slides = parse_slides(obj_raw, obj_abs_start)
        objects.append(
            {
                "id": id_match.group(1) if id_match else None,
                "raw": obj_raw,
                "start": obj_abs_start,
                "end": obj_abs_end,
                "slides": slides,
            }
        )
        i = obj_end + 1
    return bracket_start, bracket_end, objects


def parse_slides(obj_raw: str, obj_abs_start: int) -> list[dict]:
    slides_match = re.search(r"slides:\s*\[", obj_raw)
    if not slides_match:
        return []
    bracket_start = obj_raw.index("[", slides_match.start())
    bracket_end = find_matching(obj_raw, bracket_start, "[", "]")
    if bracket_end == -1:
        return []
    slides_body = obj_raw[bracket_start + 1 : bracket_end]
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
        slide_raw = slides_body[i : slide_end + 1]
        slide_abs_start = obj_abs_start + bracket_start + 1 + i
        slide_abs_end = obj_abs_start + bracket_start + 1 + slide_end + 1
        slide_type_match = re.search(r'type:\s*"([^"]+)"', slide_raw)
        slides.append(
            {
                "type": slide_type_match.group(1) if slide_type_match else None,
                "raw": slide_raw,
                "start": slide_abs_start,
                "end": slide_abs_end,
            }
        )
        i = slide_end + 1
    return slides


def extract_field(raw: str, field: str) -> str | None:
    match = re.search(field + r':\s*"((?:[^"\\]|\\.)*)"', raw, re.DOTALL)
    if match:
        value = match.group(1)
        return bytes(value, "utf-8").decode("unicode_escape") if "\\" in value else value
    match = re.search(field + r":\s*`((?:[^`\\]|\\.)*)`", raw, re.DOTALL)
    if match:
        return match.group(1)
    return None


def replace_field(raw: str, field: str, value: str) -> str:
    escaped = js_escape(value)
    new_raw, count = re.subn(
        field + r':\s*"((?:[^"\\]|\\.)*)"',
        f'{field}: "{escaped}"',
        raw,
        count=1,
        flags=re.DOTALL,
    )
    if count == 1:
        return new_raw
    new_raw, count = re.subn(
        field + r":\s*`((?:[^`\\]|\\.)*)`",
        f'{field}: "{escaped}"',
        raw,
        count=1,
        flags=re.DOTALL,
    )
    if count == 1:
        return new_raw
    raise ValueError(f"Field {field} not found")


def load_manifest(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def slide_for_key(carousel: dict, slide_key: str) -> dict:
    if slide_key == "hook.subText":
        return carousel["slides"][0]
    if slide_key == "closer.subText":
        return carousel["slides"][-1]
    raise ValueError(f"Unsupported slide key: {slide_key}")


def resolve_replacement(target: dict, index_by_id: dict[str, dict]) -> tuple[list[dict], str]:
    records = [index_by_id[rid] for rid in target.get("records", [])]
    output_text = target.get("output_text")
    if output_text:
        return records, output_text

    citations: list[str] = []
    for record in records:
        citation = record["public_citation"]
        if citation not in citations:
            citations.append(citation)
    return records, "; ".join(citations)


def rewrite_published_base(base_path: Path, index_path: Path, manifest_path: Path, out_path: Path, report_path: Path) -> None:
    text = base_path.read_text(encoding="utf-8")
    _, _, carousels = parse_js_array_objects(text, "const PUBLISHED_BASE = [")
    carousel_by_id = {c["id"]: c for c in carousels if c["id"]}
    index_data = json.loads(index_path.read_text(encoding="utf-8"))
    index_by_id = {record["entry_id"]: record for record in index_data["records"]}
    manifest = load_manifest(manifest_path)

    replacements: list[dict] = []
    report_rows: list[dict] = []

    for carousel_id, slide_targets in manifest.items():
        if carousel_id not in carousel_by_id:
            raise ValueError(f"Carousel id not found in published base: {carousel_id}")
        carousel = carousel_by_id[carousel_id]

        for slide_key, target in slide_targets.items():
            slide = slide_for_key(carousel, slide_key)
            current_text = extract_field(slide["raw"], "subText") or ""
            status = target["status"]
            matched_records: list[dict] = []
            replacement_text = current_text

            if status == "replace":
                try:
                    matched_records, replacement_text = resolve_replacement(target, index_by_id)
                except KeyError as exc:
                    raise ValueError(f"Missing citation record {exc} for {carousel_id} {slide_key}") from exc
                if replacement_text == current_text:
                    raise ValueError(f"Replacement text did not change {carousel_id} {slide_key}")
                replacements.append(
                    {
                        "start": slide["start"],
                        "end": slide["end"],
                        "old_raw": slide["raw"],
                        "new_raw": replace_field(slide["raw"], "subText", replacement_text),
                    }
                )
            elif status == "keep":
                matched_records = [index_by_id[rid] for rid in target.get("records", []) if rid in index_by_id]
            else:
                raise ValueError(f"Unsupported status {status} for {carousel_id} {slide_key}")

            report_rows.append(
                {
                    "carousel_id": carousel_id,
                    "slide_key": slide_key,
                    "status": status,
                    "current_text": current_text,
                    "matched_records": matched_records,
                    "replacement_text": replacement_text if status == "replace" else "",
                }
            )

    updated = text
    for item in sorted(replacements, key=lambda r: r["start"], reverse=True):
        if updated[item["start"] : item["end"]] != item["old_raw"]:
            raise ValueError("Source text changed while applying replacements")
        updated = updated[: item["start"]] + item["new_raw"] + updated[item["end"] :]

    updated = updated.replace("const PUBLISHED_BASE = [", "const DRAFT_CAROUSELS = [", 1)
    lines = updated.splitlines()
    if lines and lines[0].startswith("// Published base for revision batch:"):
        lines[0] = f"// Draft revision 1: {out_path.parent.name}"
    if len(lines) > 1 and lines[1].startswith("// Source:"):
        lines[1] = "// Source: generated from published-base.js via align_dump_citations.py"
    updated = "\n".join(lines) + "\n"

    out_path.write_text(updated, encoding="utf-8")
    report_path.write_text(render_report(report_rows), encoding="utf-8")


def render_report(rows: list[dict]) -> str:
    lines = [
        "# Alignment Report",
        "",
        "Generated by `scripts/align_dump_citations.py rewrite`.",
        "",
    ]
    for row in rows:
        lines.append(f"## `{row['carousel_id']}` — `{row['slide_key']}`")
        lines.append("")
        lines.append(f"- Status: `{row['status']}`")
        lines.append(f"- Current `subText`: `{row['current_text']}`")
        if row["matched_records"]:
            lines.append("- Matched records:")
            for record in row["matched_records"]:
                lines.append(f"  - `{record['entry_id']}` → `{record['public_citation']}`")
        else:
            lines.append("- Matched records: none")
        if row["status"] == "replace":
            lines.append(f"- Replacement: `{row['replacement_text']}`")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def cmd_index(args: argparse.Namespace) -> int:
    index = build_index(args.alchemy, args.alchem)
    args.out.write_text(json.dumps(index, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return 0


def cmd_rewrite(args: argparse.Namespace) -> int:
    rewrite_published_base(args.base, args.index, args.manifest, args.out, args.report)
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Align dump-backed passages to publishable citations.")
    subparsers = parser.add_subparsers(dest="command", required=True)

    index_parser = subparsers.add_parser("index", help="Build citation index from dump files")
    index_parser.add_argument("--alchemy", type=Path, required=True)
    index_parser.add_argument("--alchem", type=Path, required=True)
    index_parser.add_argument("--out", type=Path, required=True)
    index_parser.set_defaults(func=cmd_index)

    rewrite_parser = subparsers.add_parser("rewrite", help="Rewrite publishable subText using a manifest")
    rewrite_parser.add_argument("--base", type=Path, required=True)
    rewrite_parser.add_argument("--index", type=Path, required=True)
    rewrite_parser.add_argument("--manifest", type=Path, required=True)
    rewrite_parser.add_argument("--out", type=Path, required=True)
    rewrite_parser.add_argument("--report", type=Path, required=True)
    rewrite_parser.set_defaults(func=cmd_rewrite)

    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()
    try:
        return args.func(args)
    except Exception as exc:  # pragma: no cover - CLI error path
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
