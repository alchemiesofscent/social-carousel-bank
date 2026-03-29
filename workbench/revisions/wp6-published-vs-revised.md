# WP6 Published vs Revised

Date: 2026-03-24

This file pairs the current published WP6 objects with the final accepted guideline-pilot revisions for quick visual diff checking.

Published source:

- `carousel-bank/src/data/carousels.js`

Accepted revision sources:

- `workbench/revisions/2026-03-24-wp6-guideline-a/draft-r1.js`
- `workbench/revisions/2026-03-24-wp6-guideline-b/draft-r1.js`
- `workbench/revisions/2026-03-24-wp6-guideline-b/draft-r2.js`
- `workbench/revisions/2026-03-24-wp6-guideline-c/draft-r1.js`
- `workbench/revisions/2026-03-24-wp6-guideline-c/draft-r2.js`

## `castor-linseed`

### Published

```js
{
  id: "castor-linseed",
  series: "THE MARKETPLACE",
  slides: [
    {
      type: "hook",
      topLine: "kikinon",
      script: "τὸ γὰρ κίκινον οὐκέτι κομίζεται",
      mainText: "One sentence\nin a 6th-century oil catalog\nrecords an entire\nsupply chain collapsing.",
      subText: "Castor oil disappeared from the Mediterranean.\nAnd someone wrote it down.",
    },
    {
      type: "body",
      mainText: "Aetius of Amida, writing in the 6th century, compiles a catalog of medicinal oils in Book 1. Entry 101: castor oil — kikinon — pressed from the seeds of the castor plant in Egypt. Useful for spots and blemishes, similar to radish oil. Standard stuff.",
    },
    {
      type: "body",
      mainText: "Entry 102: linseed oil. One line does the work. \"τὸ γὰρ κίκινον οὐκέτι κομίζεται ἀλλὰ τοῦτο ἀντ' αὐτοῦ κομίζουσιν\" — castor oil is no longer imported; they import this instead. No explanation. No date. No cause. Just the fact: the trade has shifted. Linseed has replaced castor.",
      subText: "A pharmacological handbook accidentally documenting a trade route going dark.",
    },
    {
      type: "closer",
      mainText: "Most supply chain shifts\nleave no trace.\nThis one left\ntwenty-three words.",
      subText: "Aetius, Iatricorum Libri 1\n(entries 101–102).",
    },
  ],
}
```

### Revised

```js
{
  id: "castor-linseed",
  series: "THE MARKETPLACE",
  slides: [
    {
      type: "hook",
      topLine: "kikinon",
      script: "τὸ γὰρ κίκινον οὐκέτι κομίζεται",
      mainText: "One sentence\nin a 6th-century oil catalog\nrecords a supply chain\nshifting.",
      subText: "Castor oil stopped being imported.\nAnd someone wrote it down.",
    },
    {
      type: "body",
      mainText: "Aetius of Amida, writing in the 6th century, compiles a catalog of medicinal oils in Book 1. Entry 101: castor oil — kikinon — pressed from the seeds of the castor plant in Egypt. Useful for spots and blemishes, similar to radish oil. Standard stuff.",
    },
    {
      type: "body",
      mainText: "Entry 102: linseed oil. One line does the work. \"τὸ γὰρ κίκινον οὐκέτι κομίζεται ἀλλὰ τοῦτο ἀντ' αὐτοῦ κομίζουσιν\" — castor oil is no longer imported; they import this instead. No explanation. No date. No cause. Just the fact: the trade has shifted. Linseed has replaced castor.",
      subText: "A pharmacological handbook accidentally documenting a trade route going dark.",
    },
    {
      type: "closer",
      mainText: "Most supply chain shifts\nleave no trace.\nThis one left\ntwenty-three words.",
      subText: "Aetius, Iatricorum Libri 1\n(entries 101–102).",
    },
  ],
}
```

## `new-spices`

### Published

```js
{
  id: "new-spices",
  series: "THE MARKETPLACE",
  slides: [
    {
      type: "hook",
      topLine: "karyophyllon, moschos, ambar",
      script: "καρυόφυλλον · μόσχος · ἄμβαρ",
      mainText: "Five ingredients appear\nin Aetius\nthat no classical author\nhad ever mentioned.",
      subText: "Not Dioscorides. Not Theophrastus.\nNot Pliny. Not Galen.",
    },
    {
      type: "body",
      mainText: "Cloves — καρυόφυλλον. Musk — μόσχος. Ambergris — ἄμβαρ. Nutmeg — κάρυα ἰνδικά. Camphor — καφουρά. Search the entire corpus of Dioscorides, Theophrastus, Pliny, and Galen: none of these words appear. Open Aetius Book 16 — roughly five centuries later — and they are everywhere: perfume recipes, dry blends, incense, liquid unguents.",
      subText: "The 1st-century perfumer's palette and the 6th-century perfumer's palette are almost different traditions.",
    },
    {
      type: "body",
      mainText: "A late Greek treatise on perfume ingredients — preserved in an 18th-century Athenian manuscript — classifies these new arrivals in the old medical framework. Musk: \"θερμὸς καὶ ξηρός\" — hot and dry, suitable for those with a moist and cold mixture, disperses headache from phlegm.",
    },
    {
      type: "body",
      mainText: "Ambergris: \"θερμὸν φύσει\" — hot by nature, strengthens the head, pleases the heart. Camphor: \"ὑγρὰ καὶ ψυχρά\" — moist and cold. Clove leaf: \"θερμὸν καὶ ξηρόν\" — hot and dry, strengthens the stomach and the heart. The Greek medical tradition absorbed the new ingredients and sorted them into the old categories.",
    },
    {
      type: "closer",
      mainText: "The recipes didn't change\nbecause the theory changed.\nThey changed because\nthe ingredients arrived.",
      subText: "Aetius, Iatricorum Libri 16\n(recipes 126–146).\nAnon., On the Capacities of Foods\n(Delatte, Anecdota Atheniensia, 475–476).",
    },
  ],
}
```

### Revised

```js
{
  id: "new-spices",
  series: "THE MARKETPLACE",
  slides: [
    {
      type: "hook",
      topLine: "karyophyllon, moschos, ambar",
      script: "καρυόφυλλον · μόσχος · ἄμβαρ",
      mainText: "Five ingredients appear\nin Aetius\nthat no classical author\nhad ever mentioned.",
      subText: "Not Dioscorides. Not Theophrastus.\nNot Pliny. Not Galen.",
    },
    {
      type: "body",
      mainText: "Cloves, musk, ambergris, nutmeg, camphor: none appear in Dioscorides, Theophrastus, Pliny, or Galen. Open Aetius Book 16 five centuries later, and they are routine: perfume recipes, dry blends, incense, liquid unguents.",
      subText: "The 1st-century perfumer's palette and the 6th-century perfumer's palette are almost different traditions.",
    },
    {
      type: "body",
      mainText: "A late Greek treatise on perfume ingredients classifies these arrivals in the old medical framework. Musk and clove leaf are hot and dry. Ambergris is hot by nature. Camphor is moist and cold. The ingredients were new. The categories were not.",
    },
    {
      type: "closer",
      mainText: "The recipes didn't change\nbecause the theory changed.\nThey changed because\nthe ingredients arrived.",
      subText: "Aetius, Iatricorum Libri 16\n(recipes 126–146).\nAnon., On the Capacities of Foods\n(Delatte, Anecdota Atheniensia, 475–476).",
    },
  ],
}
```

## `moschos`

### Published

```js
{
  id: "moschos",
  series: "MATERIA",
  slides: [
    {
      type: "hook",
      topLine: "moschos",
      script: "μόσχου γράμματα γʹ",
      mainText: "Every ingredient\nis measured in pounds.\nExcept one.",
      subText: "Musk is measured in grams.",
    },
    {
      type: "body",
      mainText: "In Aetius's perfume recipes, the standard units are litrai (pounds) and ounkiai (ounces). Styrax: 6 pounds. Roses: 6 pounds. Costus: 4 pounds. Cloves: 9 pounds.",
    },
    {
      type: "body",
      mainText: "Then, at the end of the ingredient list, a different scale appears: μόσχου γράμματα γʹ — 3 grams of musk. Or μόσχου γράμματα δʹ — 4 grams. One recipe specifies μόσχου κεράτια δʹ — 4 carats of musk.",
      subText: "Grammata and keratia — units more familiar from the jeweler's scale than the pharmacist's.",
    },
    {
      type: "body",
      mainText: "The unit tells you the price. You don't measure cheap ingredients in grams and expensive ones in pounds — it's the reverse. Musk comes from the gland of the musk deer, a secretion dried and shipped enormous distances. A few grams go into a recipe that otherwise consumes dozens of pounds of material.",
    },
    {
      type: "closer",
      mainText: "When the recipe switches\nfrom pounds to grams,\nyou've found\nthe expensive part.",
      subText: "Aetius, Iatricorum Libri 16\n(recipes 126.5, 142.10, 144.1).",
    },
  ],
}
```

### Revised

```js
{
  id: "moschos",
  series: "MATERIA",
  slides: [
    {
      type: "hook",
      topLine: "moschos",
      script: "μόσχου γράμματα γʹ",
      mainText: "Every ingredient\nis measured in pounds.\nExcept one.",
      subText: "Musk is measured in grams.",
    },
    {
      type: "body",
      mainText: "In Aetius's perfume recipes, the standard units are litrai (pounds) and ounkiai (ounces). Styrax: 6 pounds. Roses: 6 pounds. Costus: 4 pounds. Cloves: 9 pounds.",
    },
    {
      type: "body",
      mainText: "Then, at the end of the ingredient list, a different scale appears: μόσχου γράμματα γʹ — 3 grams of musk. Or μόσχου γράμματα δʹ — 4 grams. One recipe specifies μόσχου κεράτια δʹ — 4 carats of musk.",
      subText: "Grammata and keratia — units more familiar from the jeweler's scale than the pharmacist's.",
    },
    {
      type: "body",
      mainText: "The scale tells you where the money is. Styrax, roses, costus, and cloves are weighed by the pound. Musk comes from the gland of the musk deer, dried and carried enormous distances. In a recipe built from dozens of pounds, only this ingredient is counted gram by gram.",
    },
    {
      type: "closer",
      mainText: "When the recipe switches\nfrom pounds to grams,\nyou've found\nthe expensive part.",
      subText: "Aetius, Iatricorum Libri 16\n(recipes 126.5, 142.10, 144.1).",
    },
  ],
}
```

## `church-incense`

### Published

```js
{
  id: "church-incense",
  series: "THE RECIPE",
  slides: [
    { type: "hook", topLine: "moschaton en tē ekklēsia", script: "ΜΟΣΧΑΤΟΥ ΕΝ ΤΗ ΕΚΚΛΗΣΙΑ ΚΑΠΝΙΖΟΜΕΝΟΥ", mainText: "A 6th-century recipe\nfor church incense\ncalls for nine pounds\nof cloves.", subText: "Plus ambergris. Plus musk.\nThis is not frankincense on a coal." },
    { type: "body", mainText: "The recipe header: ΜΟΣΧΑΤΟΥ ΕΝ ΤΗ ΕΚΚΛΗΣΙΑ ΚΑΠΝΙΖΟΜΕΝΟΥ ΣΚΕΥΑΣΙΑ — \"Preparation of musk incense burned in the church.\" The ingredient list: 9 pounds of cloves, 6 pounds of styrax, 4 pounds of costus, 1.5 pounds of spikenard, 14 ounces of kasamos, 3 pounds of aspron, 10 ounces of saffron, 2 ounces of ambergris, 2 ounces of musk." },
    { type: "body", mainText: "Every major new ingredient in a single formula. A Byzantine provincial governor — the Archon of the East — had his own scaled-down version: 3.5 ounces of cloves instead of 9 pounds, but still using musk and ambergris.", subText: "Perfumery had moved from the symposium to the cathedral — and from the cathedral to the governor's office." },
    { type: "closer", mainText: "The smoke rising\nin a 6th-century church\nsmelled of cloves, musk,\nand ambergris.", subText: "Aetius, Iatricorum Libri 16\n(recipe 146.1–146.9)." },
  ],
}
```

### Revised

```js
{
  id: "church-incense",
  series: "THE RECIPE",
  slides: [
    {
      type: "hook",
      topLine: "moschaton en tē ekklēsia",
      script: "ΜΟΣΧΑΤΟΥ ΕΝ ΤΗ ΕΚΚΛΗΣΙΑ ΚΑΠΝΙΖΟΜΕΝΟΥ",
      mainText: "A 6th-century recipe\nfor church incense\ncalls for nine pounds\nof cloves.",
      subText: "Plus ambergris. Plus musk.\nThis is not frankincense on a coal.",
    },
    {
      type: "body",
      mainText: "The recipe header: ΜΟΣΧΑΤΟΥ ΕΝ ΤΗ ΕΚΚΛΗΣΙΑ ΚΑΠΝΙΖΟΜΕΝΟΥ ΣΚΕΥΑΣΙΑ — \"Preparation of musk incense burned in the church.\" The ingredient list reads like luxury inventory: 9 pounds of cloves, 6 pounds of styrax, 4 pounds of costus, with spikenard, saffron, ambergris, and musk added on top.",
    },
    {
      type: "body",
      mainText: "Every major new ingredient appears in a single formula. A variant for the Archon of the East cuts the cloves from 9 pounds to 3.5 ounces, but keeps the ambergris and musk. The recipe was adaptable in scale, not in luxury.",
      subText: "Smaller batch. Same luxury ingredients.",
    },
    {
      type: "closer",
      mainText: "The smoke rising\nin a 6th-century church\nsmelled of cloves, musk,\nand ambergris.",
      subText: "Aetius, Iatricorum Libri 16\n(recipe 146.1–146.9).",
    },
  ],
}
```

## `karyophyllon`

### Published

```js
{
  id: "karyophyllon",
  series: "MATERIA",
  slides: [
    { type: "hook", topLine: "karyophyllon", script: "καρυόφυλλον", mainText: "One ingredient appears\nin nearly every recipe\nin a 6th-century collection.", subText: "No classical author\nhad ever mentioned it." },
    { type: "body", mainText: "Καρυόφυλλον — cloves — appears in recipe after recipe in Aetius Book 16. Dry perfume (xeromyron): cloves. Rose-scented dry blend (rhodaton): cloves. Arabian-style pastilles: cloves. The expensive salka oil: cloves in the second boiling. Liquid unguent for women's ears: cloves. White-leaf powder for neck and armpits: cloves." },
    { type: "body", mainText: "Musk incense: cloves. Church incense: 9 pounds of cloves. The musk incense of Theopemptos: cloves. It is the single most ubiquitous aromatic in the entire collection — and Dioscorides, Theophrastus, Pliny, and Galen never once use the word." },
    { type: "closer", mainText: "One ingredient\nthat no classical author knew.\nOne ingredient\nthat every Byzantine recipe required.", subText: "Aetius, Iatricorum Libri 16\n(recipes 126–146)." },
  ],
}
```

### Revised

```js
{
  id: "karyophyllon",
  series: "MATERIA",
  slides: [
    {
      type: "hook",
      topLine: "karyophyllon",
      script: "καρυόφυλλον",
      mainText: "One ingredient appears\nin nearly every recipe\nin a 6th-century collection.",
      subText: "No classical author\nhad ever mentioned it.",
    },
    {
      type: "body",
      mainText: "Καρυόφυλλον — cloves — shows up all through Aetius Book 16: dry perfume, rose blends, Arabian-style pastilles, salka oil, women's ear unguents, neck powders, incense. It is not a specialty ingredient. It is part of the default aromatic kit.",
    },
    {
      type: "body",
      mainText: "The point becomes clearest at the top end. Church incense uses 9 pounds of cloves. The musk incense of Theopemptos uses them too. Across powders, oils, and prestige formulas alike, cloves keep reappearing. Yet Dioscorides, Theophrastus, Pliny, and Galen never once use the word.",
    },
    {
      type: "closer",
      mainText: "By Aetius's time,\ncloves were not a curiosity.\nThey were what perfume\nwas supposed to smell like.",
      subText: "Aetius, Iatricorum Libri 16\n(recipes 126–146).",
    },
  ],
}
```

## `susinum`

### Published

```js
{
  id: "susinum",
  series: "THE RECIPE",
  slides: [
    { type: "hook", topLine: "sousinom", script: "σούσινον", mainText: "Paul of Aegina thought\nthis perfume was named\nafter a city.", subText: "It was named after a flower." },
    { type: "body", mainText: "Paul of Aegina, writing in the 7th century, records: \"Κρίνινον, οἱ δὲ σούσινον διὰ τὸ ἐν Σούσοις ἴσως εὑρῆσθαι\" — krininon, also called sousinom because it was perhaps found in Susa. A false etymology. Athenaeus had already noted that σοῦσον is the Persian word for κρίνον — lily. The name just means \"lily perfume.\"" },
    { type: "body", mainText: "Before the Greeks borrowed it, the Egyptians had their own version — zeshen — one of the oldest perfumes in the ancient world. The word traveled from Egyptian into Persian into Greek, picking up a new spelling at each stop. By Paul's time, the chain was invisible, and he was guessing at a city of origin instead." },
    { type: "body", mainText: "He classifies the perfume as \"μετρίως θερμά, λεπτομερῆ, παρηγορικὰ καὶ συμπεπτικά\" — moderately warm, fine-particled, soothing, and digestive. The medicine survived. The meaning of the name did not." },
    { type: "closer", mainText: "The name traveled\nfrom Egypt through Persia\ninto Greek.\nBy the 7th century,\nno one remembered why.", subText: "Paul of Aegina 7.20.7–8.\nAthenaeus XII 513f." },
  ],
}
```

### Revised

```js
{
  id: "susinum",
  series: "THE RECIPE",
  slides: [
    {
      type: "hook",
      topLine: "sousinom",
      script: "σούσινον",
      mainText: "Paul of Aegina thought\nthis perfume was named\nafter a city.",
      subText: "It was named after a flower.",
    },
    {
      type: "body",
      mainText: "Paul of Aegina, writing in the 7th century, says lily perfume could also be called sousinom because it was perhaps discovered at Susa. A false etymology. Athenaeus had already noted that souson is the Persian word for krinon — lily.",
    },
    {
      type: "body",
      mainText: "Before the Greeks borrowed it, the Egyptians had their own version — zeshen. The word traveled from Egyptian into Persian into Greek. By Paul's time, that chain was invisible, and he was guessing at a city of origin instead.",
    },
    {
      type: "body",
      mainText: "But Paul still treats susinum as a working perfume. He classifies it as moderately warm, fine-particled, soothing, and digestive. The perfume survived. The meaning of the name did not.",
    },
    {
      type: "closer",
      mainText: "The name traveled\nfrom Egypt through Persia\ninto Greek.\nBy the 7th century,\nno one remembered why.",
      subText: "Paul of Aegina 7.20.7–8.\nAthenaeus XII 513f.",
    },
  ],
}
```

## `mendesian-paul`

### Published

```js
{
  id: "mendesian-paul",
  series: "THE RECIPE",
  slides: [
    { type: "hook", topLine: "mendesion", script: "Μενδήσιον", mainText: "Most ancient perfumes\nare boiled.\nThis one was stirred\nfor sixty days.", subText: "And then stirred for seven more." },
    { type: "body", mainText: "Paul of Aegina gives the origin story: \"Εἴρηται μὲν διὰ τὸ ἐν Αἰγύπτῳ εὑρῆσθαι, ἔνθα καὶ ὁ μένδης τρέφεται\" — it is called Mendesian because it was found in Egypt, where the mendes — the goat — is raised. Mendes: an Egyptian city famous for its sacred goat." },
    { type: "body", mainText: "The recipe: 10 pounds of balaninos oil, myrrh, cassia, syrinx, and cinnamon at 3 drachms each, plus 1 pound of terebinth resin." },
    { type: "body", mainText: "Paul is explicit about the process: \"τοῦτο οὐχ ἕψεται\" — this is not boiled. The dry ingredients are added to the oil and stirred for 60 days. Then the terebinth resin is melted separately into a portion of the oil and added back. Then the whole mixture is stirred for 7 more days." },
    { type: "body", mainText: "Paul elsewhere notes that some perfumes \"do not admit boiling at all, but are only mixed — like the Mendesian.\" Aetius calls it \"μαλακτικώτατον καὶ χαλαστικὸν σωμάτων\" — the most softening and relaxing of bodies.", subText: "Cold-processed for over two months. The patience was the technique." },
    { type: "closer", mainText: "No fire.\nNo boiling.\nJust oil and aromatics\nand sixty-seven days\nof stirring.", subText: "Paul of Aegina 7.20.2, 7.20.31.\nAetius, Iatricorum Libri 1\n(entry 126)." },
  ],
}
```

### Revised

```js
{
  id: "mendesian-paul",
  series: "THE RECIPE",
  slides: [
    {
      type: "hook",
      topLine: "mendesion",
      script: "Μενδήσιον",
      mainText: "Most ancient perfumes\nare boiled.\nThis one was stirred\nfor sixty days.",
      subText: "And then stirred for seven more.",
    },
    {
      type: "body",
      mainText: "Paul of Aegina's Mendesian uses balaninos oil, myrrh, cassia, syrinx, cinnamon, and terebinth resin. Elsewhere he says that some perfumes \"do not admit boiling at all, but are only mixed — like the Mendesian.\"",
    },
    {
      type: "body",
      mainText: "Paul is explicit about the process: \"τοῦτο οὐχ ἕψεται\" — this is not boiled. The dry ingredients are added to the oil and stirred for 60 days. Then the terebinth resin is melted separately into a portion of the oil and added back. Then the whole mixture is stirred for 7 more days. Aetius calls it \"μαλακτικώτατον καὶ χαλαστικὸν σωμάτων\" — the most softening and relaxing of bodies.",
      subText: "Cold-processed for over two months. The patience was the technique.",
    },
    {
      type: "closer",
      mainText: "No fire.\nNo boiling.\nJust oil and aromatics\nand sixty-seven days\nof stirring.",
      subText: "Paul of Aegina 7.20.2, 7.20.31.\nAetius, Iatricorum Libri 1\n(entry 126).",
    },
  ],
}
```

## `cleopatra-regime`

### Published

```js
{
  id: "cleopatra-regime",
  series: "THE MARKETPLACE",
  slides: [
    { type: "hook", topLine: "Kleopatra", script: "Κλεοπάτρας βασιλίσσης", mainText: "Galen quotes a recipe\n\"in Cleopatra's\nvery own words.\"", subText: "He might be wrong about the author.\nBut someone thought her name would sell." },
    { type: "body", mainText: "Galen introduces an anti-dandruff shampoo with an unusual attribution: \"τὰ τῇ Κλεοπάτρᾳ πρὸς ἀχῶρας γεγραμμένα... κατὰ τὴν ἐκείνης αὐτῆς λέξιν\" — the things Cleopatra wrote against dandruff, in her very own words." },
    { type: "body", mainText: "The recipe: boiled fenugreek steeped in the juice of black beets, used to wash the head. Then a paste of ground myrtle with wine and oil. Then beet leaves placed on top. Simple ingredients. Domestic scale. No exotic aromatics. This is not a luxury formula — it reads like folk medicine." },
    { type: "body", mainText: "And yet Galen — a physician who routinely criticizes lesser authorities — presents it as a direct quotation from Cleopatra herself. He does not hedge. He does not qualify. He places her recipe in the same text where he quotes Heraclides and Crito.", subText: "A skeptical physician quoting a queen as if she were a colleague." },
    { type: "closer", mainText: "Whether she wrote it or not,\na skeptical physician\nquoted it\nas if she had.", subText: "Galen, Comp. Med. XII 492." },
  ],
}
```

### Revised

```js
{
  id: "cleopatra-regime",
  series: "THE MARKETPLACE",
  slides: [
    {
      type: "hook",
      topLine: "Kleopatra",
      script: "Κλεοπάτρας βασιλίσσης",
      mainText: "Galen quotes a recipe\n\"in Cleopatra's\nvery own words.\"",
      subText: "The formula is ordinary.\nThe attribution is not.",
    },
    {
      type: "body",
      mainText: "Galen introduces an anti-dandruff shampoo with an unusual attribution: \"τὰ τῇ Κλεοπάτρᾳ πρὸς ἀχῶρας γεγραμμένα... κατὰ τὴν ἐκείνης αὐτῆς λέξιν\" — the things Cleopatra wrote against dandruff, in her very own words.",
    },
    {
      type: "body",
      mainText: "The recipe: boiled fenugreek steeped in the juice of black beets, used to wash the head. Then a paste of ground myrtle with wine and oil. Then beet leaves placed on top. Simple ingredients. Domestic scale. No exotic aromatics. It reads like household medicine, not luxury perfumery.",
    },
    {
      type: "body",
      mainText: "And yet Galen — who routinely criticizes lesser authorities — presents it as Cleopatra's own words. He does not hedge or qualify. He places her recipe in the same text where he quotes Heraclides and Crito.",
      subText: "A queen's hair treatment cited like a medical authority.",
    },
    {
      type: "closer",
      mainText: "Whether she wrote it or not,\nGalen quoted it\nas if she had.",
      subText: "Galen, Comp. Med. XII 492.",
    },
  ],
}
```

## `aetius-people`

### Published

```js
{
  id: "aetius-people",
  series: "THE MARKETPLACE",
  slides: [
    { type: "hook", topLine: "Ioannou myrepsou", script: "Ἰωάννου μυρεψοῦ", mainText: "A perfumer. A governor.\nA lady. A market official.\nAll named in the margins\nof a medical encyclopedia.", subText: "Aetius didn't just compile recipes.\nHe remembered who made them." },
    { type: "body", mainText: "In Book 1, Aetius attributes two recipes to Ioannes the perfumer — Ἰωάννου μυρεψοῦ — one for nard oil, one for salka oil. A named craftsman inside a medical encyclopedia." },
    { type: "body", mainText: "Then Aetius himself steps in: \"Ἐσκεύασα ταύτην ἐν Ἀλεξανδρείᾳ πλειστάκις\" — I prepared this in Alexandria many times, and it is very fine. A compiler suddenly becomes a practitioner." },
    { type: "body", mainText: "He cites Kamesandreas — an otherwise unknown authority — for the Sicyonian oil recipe, and quotes the physician Kreitton on the warming and softening properties of amarakinon." },
    { type: "body", mainText: "Book 16 goes further. The church incense has a variant: \"ὁ ἄρχων δὲ τῆς Ἀνατολῆς σκευάζει οὕτως\" — the Archon of the East prepares it thus. A provincial governor with his own personal perfume formula." },
    { type: "body", mainText: "Then: ΘΥΜΙΑΜΑ ΤΗΣ ΚΥΡΙΑΣ ΡΩΜΥΛΟΥ — the incense of the Lady Romylou. Then: ΘΥΜΙΑΜΑ ΡΟΔΑΤΟΝ ΤΟΥ ΕΜΒΟΛΑΡΧΟΥ — the rose incense of the Embolarchos, the market official. These are not physicians or pharmacists. They are customers — powerful ones — whose personal recipes made it into a medical encyclopedia.", subText: "The line between patron and practitioner was thinner than the text admits." },
    { type: "closer", mainText: "A perfumer in Alexandria.\nA governor in the East.\nA lady. A market official.\nAll preserved in a medical text\nthat pretends to be impersonal.", subText: "Aetius, Iatricorum Libri 1\n(entries 124, 128, 131–132)\nand Book 16 (recipes 146–150)." },
  ],
}
```

### Revised

```js
{
  id: "aetius-people",
  series: "THE MARKETPLACE",
  slides: [
    {
      type: "hook",
      topLine: "Ioannou myrepsou",
      script: "Ἰωάννου μυρεψοῦ",
      mainText: "A perfumer. A governor.\nA lady. A market official.\nAll named in the margins\nof a medical encyclopedia.",
      subText: "Aetius didn't just compile recipes.\nHe kept the people attached to them.",
    },
    {
      type: "body",
      mainText: "In Book 1, Aetius attributes two recipes to Ioannes the perfumer — Ἰωάννου μυρεψοῦ — one for nard oil, one for salka oil. A named craftsman inside a medical encyclopedia.",
    },
    {
      type: "body",
      mainText: "Then Aetius himself steps in: \"Ἐσκεύασα ταύτην ἐν Ἀλεξανδρείᾳ πλειστάκις\" — I prepared this in Alexandria many times, and it is very fine. A compiler suddenly sounds like a practitioner.",
    },
    {
      type: "body",
      mainText: "Book 16 goes further. The church incense has a variant for the Archon of the East. Then come named owners: the incense of the Lady Romylou and the rose incense of the Embolarchos, the market official. These are not physicians. They are patrons whose personal recipes entered a medical encyclopedia.",
      subText: "The line between patron and practitioner was thinner than the text admits.",
    },
    {
      type: "closer",
      mainText: "A perfumer in Alexandria.\nA governor in the East.\nA lady. A market official.\nAll preserved in a medical text\nthat pretends to be impersonal.",
      subText: "Aetius, Iatricorum Libri 1\n(entries 124, 128, 131–132)\nand Book 16 (recipes 146–150).",
    },
  ],
}
```
