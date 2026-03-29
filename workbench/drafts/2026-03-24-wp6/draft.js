// Draft: 2026-03-24-wp6
// Posts: 5
// Date: 2026-03-24

const DRAFT_CAROUSELS = [
  // 1. castor-linseed — supply chain shift in one sentence
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
        mainText: "Aetius of Amida, writing in the 6th century, compiles a catalog of medicinal oils in Book 1. Entry 101: castor oil — kikinon — pressed from the seeds of the castor plant in Egypt. Useful for skin conditions, similar to radish oil. Standard stuff.",
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
  },

  // 2. new-spices — the ingredient explosion
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
        mainText: "Cloves — καρυόφυλλον. Musk — μόσχος. Ambergris — ἄμβαρ. Nutmeg — κάρυα ἰνδικά. Camphor — καφουρά. Search the entire corpus of Dioscorides, Theophrastus, Pliny, and Galen: none of these words appear. Open Aetius Book 16 and they are everywhere — in perfume recipes, dry blends, incense, liquid unguents.",
      },
      {
        type: "body",
        mainText: "The gap is roughly five centuries. Dioscorides writes around 70 CE. Aetius writes around 530 CE. In between, the Indian Ocean trade routes matured. Cloves from the Maluku Islands, musk from Central Asian deer, ambergris from the sea, nutmeg from the Banda Islands, camphor from Southeast Asia — all funneled through Arab intermediaries into Constantinople.",
        subText: "The 1st-century perfumer's palette and the 6th-century perfumer's palette are almost different traditions.",
      },
      {
        type: "closer",
        mainText: "The recipes didn't change\nbecause the theory changed.\nThey changed because\nthe ships arrived.",
        subText: "Aetius, Iatricorum Libri 16\n(recipes 126–146).",
      },
    ],
  },

  // 3. moschos — musk measured in grams
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
        mainText: "In Aetius's perfume recipes, the standard units are litrai (pounds) and ounkiai (ounces). Styrax: 6 pounds. Roses: 6 pounds. Costus: 4 pounds. Cloves: 9 pounds. Then, at the end of the ingredient list, a different scale appears: μόσχου γράμματα γʹ — 3 grams of musk. Or μόσχου γράμματα δʹ — 4 grams. One recipe specifies μόσχου κεράτια δʹ — 4 carats of musk.",
        subText: "Grammata and keratia are jeweler's units, not a pharmacist's.",
      },
      {
        type: "body",
        mainText: "The unit tells you the price. You don't measure cheap ingredients in grams and expensive ones in pounds — it's the reverse. Musk comes from the gland of the musk deer, a secretion dried and shipped enormous distances. A few grams go into a recipe that otherwise consumes pounds of material. The ratio of musk to everything else is roughly 1:1000 by weight.",
      },
      {
        type: "closer",
        mainText: "When the recipe switches\nfrom pounds to grams,\nyou've found\nthe expensive part.",
        subText: "Aetius, Iatricorum Libri 16\n(recipes 126.5, 142.10, 144.1).",
      },
    ],
  },

  // 4. church-incense — musk incense burned in church
  {
    id: "church-incense",
    series: "THE MARKETPLACE",
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
        mainText: "The recipe header: ΜΟΣΧΑΤΟΥ ΕΝ ΤΗ ΕΚΚΛΗΣΙΑ ΚΑΠΝΙΖΟΜΕΝΟΥ ΣΚΕΥΑΣΙΑ — \"Preparation of musk incense burned in the church.\" The ingredient list reads like an Indian Ocean trade manifest: 9 pounds of cloves, 6 pounds of styrax, 4 pounds of costus, 2 ounces of ambergris, 2 ounces of musk, 10 ounces of saffron, 3 pounds of aspron. Every major new-world spice in a single formula.",
      },
      {
        type: "body",
        mainText: "Then a variant: ὁ ἄρχων δὲ τῆς Ἀνατολῆς σκευάζει οὕτως — \"the Archon of the East prepares it thus.\" A Byzantine provincial governor had his own personal version. Scaled down — 3.5 ounces of cloves instead of 9 pounds — but still using musk and ambergris. The church recipe had become a status marker.",
        subText: "Perfumery had moved from the symposium to the cathedral. And from the cathedral to the governor's office.",
      },
      {
        type: "closer",
        mainText: "The smoke rising\nin a 6th-century church\nsmelled of the Maluku Islands,\nthe musk deer,\nand the open sea.",
        subText: "Aetius, Iatricorum Libri 16\n(recipe 146.1–146.5).",
      },
    ],
  },

  // 5. karyophyllon — cloves mark the shift
  {
    id: "karyophyllon",
    series: "MATERIA",
    slides: [
      {
        type: "hook",
        topLine: "karyophyllon",
        script: "καρυόφυλλον",
        mainText: "Search Dioscorides\nfor cloves.\nSearch Theophrastus.\nSearch Pliny.\nSearch Galen.",
        subText: "Nothing. Zero results.\nThen open Aetius.",
      },
      {
        type: "body",
        mainText: "Καρυόφυλλον appears in nearly every recipe in Aetius Book 16. Dry perfume: cloves. Liquid unguent: cloves. Musk incense: cloves. Church incense: 9 pounds of cloves. Arabian-style pastilles: cloves. Rose-scented dry blend: cloves. The ear perfume for women: cloves. It is the single most ubiquitous aromatic in the entire collection.",
      },
      {
        type: "body",
        mainText: "Cloves grow only in the Maluku Islands — the Spice Islands of eastern Indonesia. From there to Constantinople is roughly 10,000 kilometers by sea and overland caravan. Arab and Indian merchants moved them westward through a chain of ports: the Strait of Malacca, the Indian Ocean, the Red Sea or Persian Gulf, then overland to the Mediterranean. By the 6th century, this route was mature enough that a medical writer could list cloves as casually as he listed roses.",
        subText: "The longest supply chain in the ancient world, hiding in an ingredient list.",
      },
      {
        type: "closer",
        mainText: "One ingredient\nthat no classical author knew.\nOne ingredient\nthat every Byzantine recipe required.",
        subText: "That's what a trade route\nlooks like from the inside.\n\nAetius, Iatricorum Libri 16\n(recipes 126–146).",
      },
    ],
  },
];
