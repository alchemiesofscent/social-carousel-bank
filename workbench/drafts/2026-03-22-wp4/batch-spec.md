# Batch Spec: WP4 — Athenaeus Book 15, Remaining

**Date:** 2026-03-22
**Source:** `workbench/tlg0008001.xml` (Athenaeus, Deipnosophists Book 15, Kaibel edition)
**Research notes:** `workbench/ATHENAIOS Perfumes.md`
**Target:** 6 carousels

---

## Existing Athenaeus coverage (DO NOT overlap)

These carousels already draw from Athenaeus 15. Avoid duplicating their material:

- `perfume-shops` — Athenian myropolia
- `psagdan` — psagdas perfume
- `megalleion` — Megallos and his perfume
- `antiphanes-body` — Antiphanes body-part perfuming (Thorikioi fr. 105)
- `body-perfume-map` — different perfumes for different body parts
- `perfume-pigeons` — Alexis, pigeons dipped in perfume
- `perfume-map` — Apollonius on regional perfumes (§38, 688e)
- `stakte-price` — perfume prices in Athens
- `socrates-perfume` — Xenophon Symposium (Socrates refuses perfume)
- `bakkaris` — bakkaris perfume
- `gender-perfume` — gendered perfume use
- `perfume-grey` — Aristotle: perfume makes you grey
- `sparta-ban` — Sparta expels perfumers

---

## Carousel Plan

### 1. garlands-symposium
**Series:** DEAD WORDS, LIVING SCENTS
**Source:** §1 (665a–b), §33 (685a–b), §36 (687a–c)
**Angle:** Garlands weren't decoration — they were medicine. The stephanos came before the second table, and its purpose was to keep the wine from reaching your brain. Myrtle garlands were astringent and fought wine vapors; rose garlands eased headaches. The hypthymides (chest garlands) delivered scent directly to the heart, where ancients believed the soul resided. Alcaeus and Anacreon both instruct: pour perfume on the chest.
**Key Greek:** στέφανος (stephanos), ὑποθυμίς (hypothymis)
**Avoid overlap with:** nothing directly — no existing garland post in bank

### 2. perfume-war-athens-sparta
**Series:** DEAD WORDS, LIVING SCENTS
**Source:** §34 (686c–687a) — Chrysippus etymology, Spartan expulsion, Solon's law
**Angle:** Three cities, three relationships with perfume. Chrysippus said the very word μύρον derives from moros (μόρος) — "toil, trouble" — because perfumes are made with much useless labor. Sparta expelled perfumers outright (they corrupt the oil) and dyers (they destroy the whiteness of wool). Solon in Athens banned men from selling perfume by law. Perfume wasn't just a luxury debate — it was legislation.
**Key Greek:** μύρον (myron), μόρος (moros)
**Avoid overlap with:** `sparta-ban` covers the Spartan expulsion specifically. This post MUST frame all three (Chrysippus + Sparta + Solon) as a composite picture — the angle is the legislative/philosophical hostility, not Sparta alone.

### 3. rose-garland-medicine
**Series:** PHARMAKON
**Source:** §28–29 (681c–683c) — Mnesitheus on garlands and their medical effects; myrtle styptic against wine fumes; rose for headache relief; helichrysum for fame if sprinkled with perfume; the discovery of each garland's pharmacological power
**Angle:** The rose garland debate: medicine or luxury? Mnesitheus (4th c. physician) wrote that symposiasts chose garlands not for beauty but for pharmacological effect. Myrtle is styptic — it fights wine vapors rising to the head. Rose has something that soothes headaches. They didn't just pick the prettiest flowers; they picked the ones that would let them drink longer. The garland was the ancient hangover prevention system.
**Key Greek:** στέφανος (stephanos), στύφω (styphō, "to be astringent")
**Avoid overlap with:** `garlands-symposium` (post #1) — that covers hypothymides and scent-to-soul. This post is specifically about the pharmacology of garland materials.

### 4. perfume-and-soul
**Series:** THE NOSE KNOWS
**Source:** §36 (687a–688a) — Alexis "the greatest part of health is to produce good smells for the brain"; Alcaeus/Anacreon on anointing the chest; Praxagoras/Phylotimos on the soul seated in the heart; hypothymides as scent-delivery to the soul
**Angle:** Why did Greeks pour perfume on their chests? Because they believed the soul lived in the heart (Praxagoras, Phylotimos). The hypothymis — a garland worn at chest level — delivered scent directly to the psyche. Alexis: "the greatest part of health is to produce good smells for the brain." The physiology was wrong, but the practice was a coherent medical system.
**Key Greek:** ὑποθυμίς (hypothymis), ψυχή (psyche), καρδία (kardia)
**Avoid overlap with:** `garlands-symposium` — that post covers garlands as anti-wine medicine. This one is specifically about the soul/heart theory.

### 5. philonides-catalog
**Series:** DEAD WORDS, LIVING SCENTS
**Source:** §38 (688d–689d) — Apollonius Herophileius on regional perfumes; Hicesius on which perfumes suit drinking; Theophrastus classification (flowers / leaves / roots)
**Angle:** Apollonius (student of Herophilus) wrote a lost treatise On Perfumes that is basically an ancient sommelier's guide: iris from Elis, rose from Phaselis, saffron from Soli, nard from Tarsus, henna from Egypt. But it's not just terroir — "what makes the best perfume is the people who supply the raw materials and the craftsmen, not the places." Cities rose and fell: Ephesus was once supreme for Megalleion, then wasn't. Pergamum invented frankincense perfume, then lost its edge.
**Key Greek:** none specific — use Apollonius' name
**Avoid overlap with:** `perfume-map` covers the regional list. This post MUST angle toward the rise-and-fall / "craftsmen not places" argument — the point is that perfume excellence was temporary and human, not geographic.

### 6. egyptian-perfume-symposium
**Series:** DEAD WORDS, LIVING SCENTS
**Source:** §1 (665a–b) — Plato Comicus, Lakonians fr. 71: "pour the Egyptian perfume, then the iris, give each guest a garland"; §39–40 (689b–690a) — Achaeus "Egyptian ointments"; Anaxandrides "expensive Egyptian variety"; Antiphanes body-part perfuming "Egyptian perfume for the feet"
**Angle:** "Egyptian perfume" (τὸ Αἰγύπτιον / μύρον Αἰγύπτιον) is everywhere in Greek comedy — feet, legs, drinking parties — but what was it? Didymus thought it was staktē (myrrh extract shipped through Egypt). Some identify it with Mendesian. Others with metopion. The name traveled but the recipe didn't. A perfume defined by its origin, not its contents.
**Key Greek:** Αἰγύπτιον (Aigýption)
**Note:** This is the WP8.3 topic (Aegyptium identity mystery) pulled forward because the Athenaeus source passages are the primary evidence. If drafted here, remove from WP8 or replace WP8.3 with a different topic.

---

## Notes for Writer

- Source text is TEI XML (Kaibel paragraph numbers map to the traditional Kaibel edition). Use `n="X"` to find paragraphs.
- The research notes file (`ATHENAIOS Perfumes.md`) has English summaries of key passages.
- All Greek quotations must come from the source text, not from memory.
- Cite by Athenaeus book.page (e.g., "Athenaeus 15.688c") in closer subText.
- Check `myron-word` carousel before drafting #3 — if it covers Archilochus, pivot.
