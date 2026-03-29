// Draft: 2026-03-24-wp10a
// Posts: 5
// Date: 2026-03-24
// Revision: r1

const DRAFT_CAROUSELS = [
  // 1. galen-warehouse (PASS -- unchanged)
  {
    id: "galen-warehouse",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "apotheke", script: "\u1F00\u03C0\u03BF\u03B8\u03AE\u03BA\u03B7", mainText: "Galen tasted his way\nthrough the imperial\nwarehouse.", subText: "He had the keys to Caesar's\npersonal spice collection." },
      { type: "body", mainText: "Galen prepared theriac for Marcus Aurelius. That meant access to the imperial storerooms \u2014 the apoth\u0113kai \u2014 where the finest ingredients from every province arrived annually. Falernian wine aged in labeled jars. Hymettian honey by the cask. Balsam from Engaddi." },
      { type: "body", mainText: "He didn't just select ingredients. He auditioned them. He read the age inscribed on each Falernian jar, then tasted forward from twenty-year vintages until he found one with no bitterness. He chose honey two years old \u2014 sweeter and sharper than fresh \u2014 by picking the most pungent sample from the imperial stores." },
      { type: "closer", mainText: "Most doctors bought\nfrom the market.\nGalen shopped from\nthe emperor's pantry.", subText: "Galen, De Antidotis 1.3\n(vol. 14, pp. 25\u201327 K\u00FChn)." },
    ],
  },
  // 2. huckster-test (REVISED)
  {
    id: "huckster-test",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "kapeleuontes", script: "\u03BA\u03B1\u03C0\u03B7\u03BB\u03B5\u03CD\u03BF\u03BD\u03C4\u03B5\u03C2", mainText: "Galen had a word\nfor retail drug dealers.", subText: "It meant \"hucksters\" \u2014 and he said\nthey fooled even the experts." },
      { type: "body", mainText: "The hucksters \u2014 kap\u0113leuontes \u2014 adulterated so skillfully, Galen says, that \"even the most experienced are deceived.\" Years of daily handling taught them what doctors learned only from books. They knew exactly which adulterants mimicked the smell, texture, and taste of a genuine drug \u2014 because they had handled both, side by side, for decades." },
      { type: "body", mainText: "Galen's countermeasure wasn't a test. It was a network. He procured balsam directly from friends in Palestine, minerals from a contact at the imperial copper mines in Cyprus, and Lemnian earth by sailing to the island himself. His real advice: skip the market entirely. Get an unadulterated supply through a friend at the source." },
      { type: "closer", mainText: "When the doctors\ncan't outtest the dealers \u2014\nthe market isn't failing.\nIt's working as designed.", subText: "Galen, De Antidotis 1.2\n(vol. 14, pp. 7\u20138 K\u00FChn)." },
    ],
  },
  // 3. falernian-scale (REVISED)
  {
    id: "falernian-scale",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "Phalerinos", script: "\u03A6\u03B1\u03BB\u03B5\u03C1\u1FD6\u03BD\u03BF\u03C2", mainText: "Galen measured\neverything against\none wine.", subText: "Falernian was his universal\nyardstick for quality." },
      { type: "body", mainText: "Three times in De Antidotis, Galen reaches for the same comparison. Engaddi balsam versus ordinary Palestinian balsam? The difference is \"as great as Falernian versus tavern wine.\" Pamphylian storax \u2014 the rare kind shipped in reed tubes \u2014 versus common storax? Same ratio. Falernian versus kap\u0113leia." },
      { type: "body", mainText: "The analogy breaks when applied to substitution. Satyros liked to repeat a quip from Quintus: those who say \"if you lack cinnamon, use double the cassia\" are like people who say, if you can't get Falernian, drink double the tavern wine. Or if you're out of white bread, eat double the bran. Doubling a worse ingredient doesn't close the gap." },
      { type: "closer", mainText: "Double the bran\nis still bran.", subText: "The ancient pharmacist's\nonly metric was analogy \u2014\nand even Galen knew\nwhere it broke down.\n\nGalen, De Antidotis 1.3, 1.8, 1.9\n(vol. 14, pp. 25, 69, 79 K\u00FChn)." },
    ],
  },
  // 4. summer-ships (PASS -- unchanged)
  {
    id: "summer-ships",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "plekta", script: "\u03C0\u03BB\u03B5\u03BA\u03C4\u03AC", mainText: "Every summer,\nwicker baskets arrived\nin Rome from Crete.", subText: "Herbs, seeds, roots, juices \u2014\npacked by imperial botanists." },
      { type: "body", mainText: "Drugs came to Rome daily from Sicily. But once a year, in summer, ships arrived from Libya and Crete carrying plekta \u2014 wicker baskets woven from willow shoots \u2014 packed with herbs, fruits, seeds, roots, and juices. The Cretan botanists who gathered them were on Caesar's payroll, supplying not just the emperor but the entire city." },
      { type: "body", mainText: "Rome's perfume merchants \u2014 the myrop\u014Dlai \u2014 learned quality the only way they could: by memory. They bought baskets every year and compared this shipment to last year's. Fuller fruit, denser leaves, stronger scent, slower to decay \u2014 these were the marks of a better grade. Galen says anyone who can't figure this out \"would be a clear donkey.\"" },
      { type: "closer", mainText: "No manuals.\nNo grading standards.\nJust last summer's\nbasket, remembered.", subText: "Galen, De Antidotis 1.2\n(vol. 14, pp. 9\u201311 K\u00FChn)." },
    ],
  },
  // 5. blind-perfumers (REVISED)
  {
    id: "blind-perfumers",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "myropolai", script: "\u03BC\u03C5\u03C1\u03BF\u03C0\u1FF6\u03BB\u03B1\u03B9", mainText: "Rome's perfumers\ncouldn't identify a plant\ngrowing outside their door.", subText: "Galen watched them\ndo it every year." },
      { type: "body", mainText: "Every perfumer in Rome recognized the dried herbs shipped from Crete \u2014 they handled them annually, knew them by sight and smell. But the same species growing wild in the suburbs of Rome? Completely unknown to them. \"Not even all perfumers recognize them,\" Galen writes, \"because they only buy the herbs brought from Crete along with their seeds and juices.\" They didn't even watch for the local fruiting season." },
      { type: "closer", mainText: "Pattern-matching\nis not knowledge.\nThe basket is not\nthe garden.", subText: "Galen, De Antidotis 1.2\n(vol. 14, pp. 30, 53 K\u00FChn)." },
    ],
  },
];
