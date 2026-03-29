#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path
import re

import yaml


ROOT = Path(__file__).resolve().parents[1]
DATASET_PATH = ROOT / "workbench" / "data" / "perfume-notes.yaml"
REVIEW_PATH = ROOT / "workbench" / "generated" / "perfume-cleanup-review.md"

GREEK_RE = re.compile(r"[\u0370-\u03ff\u1f00-\u1fff]")
BIBLIO_LINE_RE = re.compile(
    r'^(?:“.+Ed\.|".+Ed\.|Leipzig:|Leiden:|Repr\.|Vols?\.\s*\d|Asterius of Amasea\.|Athenaei Naucratitae|Claudii Galeni)'
)
CITATION_LINE_RE = re.compile(
    r"^(?:Book\s+\d+|Volume\s+\d+|Homily\s+\d+|Fragment\s+\d+|Chapter\s+\d+|book\s+\d+|line\s+\d+|[0-9]+\.[0-9]+(?:\.[0-9]+)?|Olearius page \d+)"
)
STRAY_TOKEN_RE = re.compile(r"^(?:User)$")
TITLE_DUP_RE = re.compile(r"^(?:English [Tt]ranslation|English translation)$")


def load_dataset() -> dict:
    return yaml.safe_load(DATASET_PATH.read_text())


def save_dataset(dataset: dict) -> None:
    DATASET_PATH.write_text(
        yaml.safe_dump(
            dataset,
            sort_keys=False,
            allow_unicode=True,
            width=100,
        )
    )


def clean_translation(record: dict, audit: list[str], flags: set[str]) -> None:
    translation = (record.get("translation") or "").splitlines()
    if not translation:
        return

    removed_biblio: list[str] = []
    removed_citation: list[str] = []
    removed_junk: list[str] = []

    while translation and not translation[0].strip():
        translation.pop(0)
    while translation and (BIBLIO_LINE_RE.match(translation[0].strip()) or STRAY_TOKEN_RE.match(translation[0].strip())):
        line = translation.pop(0).strip()
        if not line:
            continue
        if STRAY_TOKEN_RE.match(line):
            removed_junk.append(line)
        else:
            removed_biblio.append(line)
    while translation and (
        CITATION_LINE_RE.match(translation[0].strip())
        or STRAY_TOKEN_RE.match(translation[0].strip())
        or translation[0].strip() in {record["title"], record["source"].get("citation_raw", "")}
    ):
        line = translation.pop(0).strip()
        if not line:
            continue
        if STRAY_TOKEN_RE.match(line):
            removed_junk.append(line)
        else:
            removed_citation.append(line)
    while translation and not translation[0].strip():
        translation.pop(0)

    filtered_translation: list[str] = []
    for line in translation:
        if STRAY_TOKEN_RE.match(line.strip()):
            removed_junk.append(line.strip())
            continue
        filtered_translation.append(line)
    translation = filtered_translation

    if removed_biblio:
        flags.add("translation_has_biblio")
        audit.append("Removed bibliography lead from translation: " + " | ".join(removed_biblio))
    if removed_citation:
        flags.add("translation_has_citation_lead")
        audit.append("Removed citation lead from translation: " + " | ".join(removed_citation))
    if removed_junk:
        flags.add("translation_has_stray_token")
        audit.append("Removed stray token(s) from translation: " + " | ".join(removed_junk))

    record["translation"] = "\n".join(translation).strip()


def extract_from_raw_only(record: dict, audit: list[str], flags: set[str]) -> None:
    body = record.get("body_markdown", "")
    if record.get("text_original") or record.get("translation") or not body.strip():
        return

    title = record["title"]
    lines = [line.rstrip() for line in body.splitlines()]

    if title.startswith("Iustinianus. Digesta Iustiniani"):
        start_idx = next((i for i, line in enumerate(lines) if line.strip().startswith("POMPONIUS")), None)
        marker_idx = next((i for i, line in enumerate(lines) if line.strip().startswith("(Pomponius,")), None)
        if start_idx is not None and marker_idx is not None and marker_idx > start_idx:
            original_lines = [line for line in lines[start_idx:marker_idx] if line.strip()]
            translation_lines = [line for line in lines[marker_idx + 1 :] if line.strip()]
            record["text_original"] = "\n".join(original_lines).strip()
            record["translation"] = "\n".join(translation_lines).strip()
            flags.add("raw_only")
            audit.append("Recovered original and translation from raw block using the Pomponius marker.")
            return

    greek_lines = [line for line in lines if GREEK_RE.search(line)]
    if greek_lines:
        record["text_original"] = "\n".join(greek_lines).strip()
        flags.add("raw_only")
        audit.append("Recovered original-language text from raw block; translation still needs review.")


def normalize_stray_body(record: dict, audit: list[str], flags: set[str]) -> None:
    if STRAY_TOKEN_RE.search(record.get("body_markdown", "")):
        record["body_markdown"] = "\n".join(
            line for line in record["body_markdown"].splitlines() if not STRAY_TOKEN_RE.match(line.strip())
        ).strip()
        flags.add("translation_has_stray_token")
        audit.append("Removed stray token from raw body.")


def finalize_record(record: dict, audit: list[str], flags: set[str]) -> None:
    editorial = list(record.get("notes", {}).get("editorial", []) or [])
    editorial = [note for note in editorial if "Automatic pass" not in note]
    for entry in audit:
        if entry not in editorial:
            editorial.append(entry)
    record.setdefault("notes", {})["editorial"] = editorial

    if record["record_type"] != "ancient_passage":
        record["cleanup_status"] = "clean"
        record["cleanup_flags"] = []
        record["cleanup_notes"] = audit
        return

    needs_review = False
    if not record.get("translation") and not record.get("text_original"):
        flags.add("raw_only")
        needs_review = True
    if record["title"] == "Philostratos on the Rarity of Incense":
        flags.add("split_ambiguous")
        needs_review = True
        audit.append("Record body is only a heading; check neighboring record boundaries manually.")
    if record["title"] == "Ath. Idem IV, p. 160, C:" and not record.get("translation"):
        flags.add("needs_translation_review")
        needs_review = True
        audit.append("Recovered Greek proverb only; translation is absent from the current raw block.")
    if record["title"].startswith("Clearchus, of the Peripatetic school"):
        flags.add("source_title_misaligned")
        needs_review = True
        audit.append("Title/source split is misaligned; manual chunk correction is needed.")

    record["cleanup_flags"] = sorted(flags)
    record["cleanup_notes"] = audit
    if needs_review:
        record["cleanup_status"] = "needs_review"
    elif audit:
        record["cleanup_status"] = "auto_fixed"
    else:
        record["cleanup_status"] = "clean"


def clean_record(record: dict) -> dict:
    audit: list[str] = []
    flags: set[str] = set()

    clean_translation(record, audit, flags)
    normalize_stray_body(record, audit, flags)
    extract_from_raw_only(record, audit, flags)
    finalize_record(record, audit, flags)
    return record


def build_review_markdown(dataset: dict) -> str:
    containers = {container["id"]: container for container in dataset["containers"]}
    review_records = [record for record in dataset["records"] if record.get("cleanup_status") == "needs_review"]

    lines = [
        "# Perfume Cleanup Review",
        "",
        "Only records that still need manual review after the conservative cleanup pass are listed here.",
        "",
        f"- Records needing review: {len(review_records)}",
        "",
    ]

    for record in review_records:
        container = containers[record["container_id"]]["title"]
        lines.extend(
            [
                f"## {record['title']}",
                "",
                f"- Record id: `{record['id']}`",
                f"- Container: `{container}`",
                f"- Flags: {', '.join(f'`{flag}`' for flag in record.get('cleanup_flags', []))}",
                f"- Source: `{record['source'].get('citation_raw') or record['source'].get('work')}`",
                "",
            ]
        )
        if record.get("cleanup_notes"):
            lines.append("### Cleanup Notes")
            lines.append("")
            for note in record["cleanup_notes"]:
                lines.append(f"- {note}")
            lines.append("")
        if record.get("body_markdown"):
            preview = "\n".join(record["body_markdown"].splitlines()[:20]).strip()
            lines.append("### Raw Preview")
            lines.append("")
            lines.append("```text")
            lines.append(preview)
            lines.append("```")
            lines.append("")
        if record.get("text_original"):
            lines.append("### Current Original")
            lines.append("")
            lines.append("```text")
            lines.append(record["text_original"][:1200].strip())
            lines.append("```")
            lines.append("")
        if record.get("translation"):
            lines.append("### Current Translation")
            lines.append("")
            lines.append("```text")
            lines.append(record["translation"][:1200].strip())
            lines.append("```")
            lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def main() -> None:
    dataset = load_dataset()
    dataset["records"] = [clean_record(record) for record in dataset["records"]]
    save_dataset(dataset)
    REVIEW_PATH.parent.mkdir(parents=True, exist_ok=True)
    REVIEW_PATH.write_text(build_review_markdown(dataset))
    print(f"Updated {DATASET_PATH}")
    print(f"Wrote {REVIEW_PATH}")
    print(
        "Needs review:",
        sum(1 for record in dataset["records"] if record.get("cleanup_status") == "needs_review"),
    )


if __name__ == "__main__":
    main()
