#!/usr/bin/env python3
from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

import yaml


ROOT = Path(__file__).resolve().parents[1]
SOURCE_PATH = ROOT / "workbench" / "backups" / "napkins-2026-03-25-pre-generated.md"
BACKUP_PATH = ROOT / "workbench" / "backups" / "napkins-2026-03-25-pre-structuring.md"
OUTPUT_PATH = ROOT / "workbench" / "data" / "perfume-notes.yaml"

HEADING_RE = re.compile(r"^\s*(#{1,3})\s+(.+)$")
SOURCE_START_RE = re.compile(
    r"""
    ^(
        Athenaeus(?:\ Soph\.)?,|
        Ath\.
        |Asterius\ Scr\.\ Eccl\.,
        |C\.\ Plinius\ Secundus
        |Clearchus,
        |Eustathius\ Philol\.,
        |EXc\.\ De\ virt\.
        |Flavius\ Philostratus\ Soph\.,
        |Galen(?:us)?\ Med\.,
        |Herodianus\ Hist\.,
        |Iustinianus\.
        |Oribasius\ Med\.,
        |Paul\ 7\.20\.11
        |Photius\ Bibliotecha
        |Philostratos\ on\ the\ Rarity\ of\ Incense
        |Pliny\ the\ Elder,
        |Plutarch\.
        |Soranus\ Med\.,
        |Source:
        |Theophrastus\ Phil\.,\ Fragmenta
        |\d+\.\s
    )
    """,
    re.VERBOSE,
)
GREEK_RE = re.compile(r"[\u0370-\u03ff\u1f00-\u1fff]")
TOPIC_MAP = {
    "Galen, On Compound Drugs by Kind (Comp. Med. Gen.) 3.2, 13.570–573 K.": [
        "medicine-and-pharmacology",
        "trade-and-storage",
    ],
    "Perfume Sellers": [
        "perfume-sellers-and-market",
        "trade-and-storage",
    ],
    "A thing from Photius": [
        "lexicography-and-naming",
        "books-and-catalogues",
    ],
    "Digest of Justinian, Book 34, Chapter 2, Paragraph 21, Section 1 (D.34.2.21.1)": [
        "social-ritual-legal-context",
        "medicine-and-pharmacology",
    ],
    "Commagene": [
        "places-and-production",
        "ingredients-and-aromata",
        "medicine-and-pharmacology",
    ],
    "Old Pauly Article": [
        "ingredients-and-aromata",
        "places-and-production",
        "social-ritual-legal-context",
    ],
    "Social Context of Perfumes": [
        "social-ritual-legal-context",
        "luxury-and-status",
    ],
    "Places of Perfumes": [
        "places-and-production",
    ],
    "Instruments": [
        "tools-and-technique",
    ],
    "egyptian perfume": [
        "ingredients-and-aromata",
        "recipes-and-formulations",
    ],
    "Theoph. Od. 25-32": [
        "ingredients-and-aromata",
        "recipes-and-formulations",
        "tools-and-technique",
    ],
    "Diosc. Praef.": [
        "medicine-and-pharmacology",
        "ingredients-and-aromata",
        "tools-and-technique",
    ],
    "Misc Text on Perfumes": [
        "ingredients-and-aromata",
        "medicine-and-pharmacology",
    ],
    "Cleopatra's Recipes": [
        "recipes-and-formulations",
        "medicine-and-pharmacology",
    ],
    "Galen on Designer Drugs": [
        "medicine-and-pharmacology",
        "luxury-and-status",
        "recipes-and-formulations",
    ],
    "Catalogue of Aromata": [
        "books-and-catalogues",
        "ingredients-and-aromata",
    ],
}
MODERN_REFERENCE_TITLES = {"Old Pauly Article"}
AUTHOR_NOTE_TITLES = {"Catalogue of Aromata"}
SECTION_SPLIT_TITLES = {
    "Perfume Sellers",
    "Social Context of Perfumes",
    "Places of Perfumes",
    "Cleopatra's Recipes",
}


@dataclass
class Heading:
    level: int
    title: str
    line_no: int


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-") or "record"


def normalize_title(text: str) -> str:
    return re.sub(r"\s+", " ", text.strip())


def parse_headings(lines: list[str]) -> list[Heading]:
    headings: list[Heading] = []
    for idx, line in enumerate(lines, start=1):
        match = HEADING_RE.match(line)
        if not match:
            continue
        hashes, title = match.groups()
        headings.append(Heading(level=len(hashes), title=normalize_title(title), line_no=idx))
    return headings


def container_spans(lines: list[str], headings: list[Heading]) -> list[dict]:
    containers = [h for h in headings if h.level <= 2]
    items: list[dict] = []
    for idx, heading in enumerate(containers):
        end = len(lines)
        for later in containers[idx + 1 :]:
            if later.level <= heading.level:
                end = later.line_no - 1
                break
        parent_id = None
        if heading.level == 2:
            for earlier in reversed(containers[:idx]):
                if earlier.level == 1:
                    parent_id = slugify(earlier.title)
                    break
        items.append(
            {
                "id": slugify(heading.title),
                "title": heading.title,
                "level": heading.level,
                "parent_id": parent_id,
                "source_line_start": heading.line_no,
                "source_line_end": end,
                "description": describe_container(heading.title),
            }
        )
    return items


def describe_container(title: str) -> str:
    descriptions = {
        "Shopping": "Top-level scrapbook container for perfume, drug, and aromatic notes.",
        "Perfume Sellers": "Collected ancient passages on perfumers, sellers, and market behavior.",
        "Old Pauly Article": "Modern reference article on salves and perfumes, kept as a linked note.",
        "Catalogue of Aromata": "Working author note for a future post on the ancient catalogue of aromata.",
    }
    return descriptions.get(title, f"Container extracted from the heading `{title}` in napkins.md.")


def infer_record_type(container_title: str) -> str:
    if container_title in AUTHOR_NOTE_TITLES:
        return "author_note"
    if container_title in MODERN_REFERENCE_TITLES:
        return "modern_reference_note"
    return "ancient_passage"


def infer_source_layer(record_type: str) -> str:
    return "modern" if record_type in {"modern_reference_note", "author_note", "draft_fragment"} else "ancient"


def infer_tags(container_title: str, title: str) -> list[str]:
    tags: list[str] = []
    if container_title == "Catalogue of Aromata":
        tags.extend(["aromata", "catalogue", "link-later"])
    if title.lower().startswith("source:"):
        tags.append("recipe-source")
    return tags


def split_chunk_by_citations(text: str) -> list[tuple[int, str]]:
    lines = text.splitlines()
    starts: list[int] = []
    for idx, line in enumerate(lines):
        stripped = line.strip()
        if SOURCE_START_RE.match(stripped):
            starts.append(idx)
    if not starts:
        return [(0, text.strip())] if text.strip() else []
    chunks: list[tuple[int, str]] = []
    for start_idx, start in enumerate(starts):
        end = starts[start_idx + 1] if start_idx + 1 < len(starts) else len(lines)
        chunk = "\n".join(lines[start:end]).strip()
        if chunk:
            chunks.append((start, chunk))
    return chunks


def split_container_records(container: dict, body: str) -> list[tuple[int, str]]:
    title = container["title"]
    body = body.strip("\n")
    if not body:
        return []
    if title == "Cleopatra's Recipes":
        parts = re.split(r"(?m)^(?=\d+\.\s)", body)
        chunks: list[tuple[int, str]] = []
        cursor = 0
        for part in parts:
            piece = part.strip()
            if not piece:
                cursor += len(part.splitlines())
                continue
            chunks.append((cursor, piece))
            cursor += len(part.splitlines())
        return chunks
    if title in SECTION_SPLIT_TITLES:
        return split_chunk_by_citations(body)
    return [(0, body)]


def first_nonempty(lines: Iterable[str]) -> str:
    for line in lines:
        stripped = line.strip()
        if stripped:
            return stripped
    return ""


def short_summary(text: str) -> str:
    stripped = re.sub(r"\s+", " ", text).strip()
    if not stripped:
        return ""
    if len(stripped) <= 180:
        return stripped
    return stripped[:177].rstrip() + "..."


def extract_original_translation(chunk: str) -> tuple[str, str, list[str]]:
    lines = chunk.splitlines()
    notes: list[str] = []

    english_marker = None
    for idx, line in enumerate(lines):
        if line.strip() in {"English translation", "English Translation"}:
            english_marker = idx
            break

    if english_marker is not None:
        original = "\n".join(line.rstrip() for line in lines[:english_marker]).strip()
        translation = "\n".join(line.rstrip() for line in lines[english_marker + 1 :]).strip()
        return original, translation, notes

    greek_lines = [line.rstrip() for line in lines if GREEK_RE.search(line)]
    if greek_lines:
        original = "\n".join(greek_lines).strip()
        translation_lines = [
            line.rstrip()
            for line in lines
            if line.strip()
            and not GREEK_RE.search(line)
            and not SOURCE_START_RE.match(line.strip())
            and not HEADING_RE.match(line)
        ]
        translation = "\n".join(translation_lines).strip()
        if not translation:
            notes.append("Automatic pass found original-language material but no clean translation split.")
        return original, translation, notes

    notes.append("Automatic pass kept this record as raw markdown; original/translation need manual refinement.")
    return "", "", notes


def infer_source(chunk: str, fallback_title: str) -> dict:
    lines = [line.strip() for line in chunk.splitlines() if line.strip()]
    citation_raw = ""
    for line in lines:
        if SOURCE_START_RE.match(line):
            citation_raw = line
            break
    author = ""
    work = ""
    if citation_raw.startswith("Source:"):
        work = citation_raw.removeprefix("Source:").strip()
    elif "," in citation_raw:
        author, work = [part.strip() for part in citation_raw.split(",", 1)]
    elif citation_raw:
        work = citation_raw
    else:
        work = fallback_title
    return {
        "author": author,
        "work": work,
        "citation_raw": citation_raw,
        "citation_normalized": citation_raw,
    }


def record_title(container_title: str, chunk: str, ordinal: int) -> str:
    first = first_nonempty(chunk.splitlines())
    if re.match(r"^\d+\.\s", first):
        return first
    if SOURCE_START_RE.match(first):
        return first
    if container_title == "Old Pauly Article":
        return "Old Pauly article extract"
    if ordinal > 1:
        return f"{container_title} [{ordinal}]"
    return container_title


def build_records(lines: list[str], containers: list[dict]) -> list[dict]:
    records: list[dict] = []
    seen_ids: dict[str, int] = {}
    for container in containers:
        if container["level"] != 2:
            continue
        start = container["source_line_start"]
        end = container["source_line_end"]
        body = "\n".join(lines[start:end]).strip("\n")
        chunks = split_container_records(container, body)
        for ordinal, (relative_start, chunk) in enumerate(chunks, start=1):
            title = record_title(container["title"], chunk, ordinal)
            record_type = infer_record_type(container["title"])
            source_layer = infer_source_layer(record_type)
            original, translation, extraction_notes = extract_original_translation(chunk)
            source = infer_source(chunk, title)
            summary_line = first_nonempty(
                line
                for line in chunk.splitlines()
                if line.strip()
                and line.strip() != title
                and line.strip() not in {"English translation", "English Translation"}
            )
            note_editorial: list[str] = []
            for line in chunk.splitlines():
                if line.strip().startswith("Desc:") or line.strip().startswith("Note:"):
                    note_editorial.append(line.strip())
            note_editorial.extend(extraction_notes)
            if container["title"] == "Catalogue of Aromata":
                note_editorial.append(
                    "Keep as an author note and link later to primary-source records for the ancient catalogue of aromata."
                )
            base_id = f"{container['id']}--{slugify(title)}"
            seen_ids[base_id] = seen_ids.get(base_id, 0) + 1
            record_id = base_id if seen_ids[base_id] == 1 else f"{base_id}--{seen_ids[base_id]}"
            records.append(
                {
                    "id": record_id,
                    "record_type": record_type,
                    "source_layer": source_layer,
                    "container_id": container["id"],
                    "source_line_start": start + relative_start + 1,
                    "source_line_end": start + relative_start + len(chunk.splitlines()),
                    "topics": TOPIC_MAP.get(container["title"], []),
                    "tags": infer_tags(container["title"], title),
                    "title": title,
                    "summary": short_summary(summary_line),
                    "source": source,
                    "text_original": original,
                    "translation": translation,
                    "body_markdown": chunk.strip(),
                    "notes": {
                        "editorial": note_editorial,
                        "interpretive": [],
                        "crossrefs": [],
                    },
                    "related_record_ids": [],
                    "status": "parsed",
                }
            )
    return records


def build_dataset() -> dict:
    source_text = SOURCE_PATH.read_text()
    lines = source_text.splitlines()
    headings = parse_headings(lines)
    containers = container_spans(lines, headings)
    records = build_records(lines, containers)
    return {
        "meta": {
            "title": "Perfume Notes Dataset",
            "source_file": str(SOURCE_PATH.relative_to(ROOT)),
            "backup_file": str(BACKUP_PATH.relative_to(ROOT)),
            "generated_by": "scripts/build_perfume_dataset.py",
            "purpose": "Working notes for LLM-assisted social post and encyclopedia article production.",
            "preserve_rule": "All ancient references and ancient-language texts from napkins.md must be retained.",
        },
        "taxonomy": {
            "themes": [
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
            ],
            "record_types": [
                "ancient_passage",
                "modern_reference_note",
                "author_note",
                "draft_fragment",
            ],
        },
        "containers": containers,
        "records": records,
    }


def main() -> None:
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    dataset = build_dataset()
    OUTPUT_PATH.write_text(
        yaml.safe_dump(
            dataset,
            sort_keys=False,
            allow_unicode=True,
            width=100,
        )
    )
    print(f"Wrote {OUTPUT_PATH}")
    print(f"Containers: {len(dataset['containers'])}")
    print(f"Records: {len(dataset['records'])}")


if __name__ == "__main__":
    main()
