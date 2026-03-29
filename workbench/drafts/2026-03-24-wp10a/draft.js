// Draft: 2026-03-24-wp10a
// Posts: 5
// Date: 2026-03-24

const DRAFT_CAROUSELS = [
  // 1. galen-warehouse
  {
    id: "galen-warehouse",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "apothēkē", script: "ἀποθήκη", mainText: "Galen tasted his way\nthrough the imperial\nwarehouse.", subText: "He had the keys to Caesar's\npersonal spice collection." },
      { type: "body", mainText: "Galen prepared theriac for Marcus Aurelius. That meant access to the imperial storerooms — the apothēkai — where the finest ingredients from every province arrived annually. Falernian wine aged in labeled jars. Hymettian honey by the cask. Balsam from Engaddi." },
      { type: "body", mainText: "He didn't just select ingredients. He auditioned them. He read the age inscribed on each Falernian jar, then tasted forward from twenty-year vintages until he found one with no bitterness. He chose honey two years old — sweeter and sharper than fresh — by picking the most pungent sample from the imperial stores." },
      { type: "closer", mainText: "Most doctors bought\nfrom the market.\nGalen shopped from\nthe emperor's pantry.", subText: "Galen, De Antidotis 1.3\n(vol. 14, pp. 25–27 Kühn)." },
    ],
  },
  // 2. huckster-test
  {
    id: "huckster-test",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "kapēleuontes", script: "καπηλεύοντες", mainText: "Galen had a word\nfor retail drug dealers.", subText: "It meant \"hucksters\" — and he said\nthey fooled even the experts." },
      { type: "body", mainText: "The hucksters — καπηλεύοντες — adulterated so skillfully, Galen says, that \"even the most experienced are deceived.\" A doctor in Rome once walked into a perfumer's shop and asked for hēdychroion — a prepared sweet wine used in theriac — thinking it was a plant. He'd read the recipe in a book but never seen the drug made." },
      { type: "body", mainText: "Galen's countermeasure wasn't a test. It was a network. He procured balsam directly from friends in Palestine, minerals from a contact at the imperial copper mines in Cyprus, and Lemnian earth by sailing to the island himself. His real advice: skip the market entirely. Get an unadulterated supply through a friend at the source." },
      { type: "closer", mainText: "The best quality control\nin second-century Rome\nwasn't a test.\nIt was a favor.", subText: "Galen, De Antidotis 1.2\n(vol. 14, pp. 7–8 Kühn)." },
    ],
  },
  // 3. falernian-scale
  {
    id: "falernian-scale",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "Phalerinos", script: "Φαλερῖνος", mainText: "Galen measured\neverything against\none wine.", subText: "Falernian was his universal\nyardstick for quality." },
      { type: "body", mainText: "Three times in De Antidotis, Galen reaches for the same comparison. Engaddi balsam versus ordinary Palestinian balsam? The difference is \"as great as Falernian versus tavern wine.\" Pamphylian storax — the rare kind shipped in reed tubes — versus common storax? Same ratio. Falernian versus kapēleia." },
      { type: "body", mainText: "The analogy breaks when applied to substitution. His teacher Satyros mocked the old rule that \"if you lack cinnamon, use double the cassia.\" That's like saying: if you can't get Falernian, drink double the tavern wine. Or if you're out of white bread, eat double the bran. Doubling a worse ingredient doesn't close the gap." },
      { type: "closer", mainText: "In a world without\nstandardized units,\nthe best wine in Italy\nwas the unit.", subText: "Galen, De Antidotis 1.3, 1.8, 1.9\n(vol. 14, pp. 25, 69, 79 Kühn)." },
    ],
  },
  // 4. summer-ships
  {
    id: "summer-ships",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "plekta", script: "πλεκτά", mainText: "Every summer,\nwicker baskets arrived\nin Rome from Crete.", subText: "Herbs, seeds, roots, juices —\npacked by imperial botanists." },
      { type: "body", mainText: "Drugs came to Rome daily from Sicily. But once a year, in summer, ships arrived from Libya and Crete carrying plekta — wicker baskets woven from willow shoots — packed with herbs, fruits, seeds, roots, and juices. The Cretan botanists who gathered them were on Caesar's payroll, supplying not just the emperor but the entire city." },
      { type: "body", mainText: "Rome's perfume merchants — the myropōlai — learned quality the only way they could: by memory. They bought baskets every year and compared this shipment to last year's. Fuller fruit, denser leaves, stronger scent, slower to decay — these were the marks of a better grade. Galen says anyone who can't figure this out \"would be a clear donkey.\"" },
      { type: "closer", mainText: "No manuals.\nNo grading standards.\nJust last summer's\nbasket, remembered.", subText: "Galen, De Antidotis 1.2\n(vol. 14, pp. 9–11 Kühn)." },
    ],
  },
  // 5. blind-perfumers
  {
    id: "blind-perfumers",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "myropōlai", script: "μυροπῶλαι", mainText: "Rome's perfumers\ncouldn't identify a plant\ngrowing outside their door.", subText: "They knew every Cretan import.\nThey ignored their own suburbs." },
      { type: "body", mainText: "Galen noticed something strange. Every perfumer in Rome recognized the dried herbs shipped from Crete — they handled them annually, knew them by sight and smell. But the same species growing in the suburbs of Rome? Completely unknown to them. They didn't even watch for the fruiting season." },
      { type: "body", mainText: "The problem ran deeper than laziness. \"Not even all perfumers recognize them,\" Galen writes, \"because they only buy the herbs brought from Crete along with their seeds and juices.\" Their expertise was a supply chain, not a science. They knew imports, not plants." },
      { type: "closer", mainText: "Pattern-matching\nis not knowledge.\nThe basket is not\nthe garden.", subText: "Galen, De Antidotis 1.2\n(vol. 14, pp. 30, 53 Kühn)." },
    ],
  },
];
