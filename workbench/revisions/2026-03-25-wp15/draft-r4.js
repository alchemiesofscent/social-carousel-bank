// Draft: 2026-03-25-wp15 revision
// Revision: r4
// Posts: 8
// Date: 2026-03-25

const DRAFT_CAROUSELS = [

  // 1. spikenard-double-gift
  // revised: closer compressed for mobile reading
  {
    id: "spikenard-double-gift",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "nardus", script: "gemina dote", mainText: "Roman traders priced\none plant twice:\nspike and leaf\nsold as separate goods.", subText: "One shrub.\nTwo markets." },
      { type: "body", mainText: "Pliny describes the root as heavy, short, black, and brittle — fat-smelling of cyperus, rough on the tongue. The plant is small-leaved and dense. Its tips spread into aristas: spikes, the commercial spike of spikenard.", subText: "\"gemina dote nardi spicas ac folia celebrant\" — NH 12.42" },
      { type: "body", mainText: "A second variety grew near the Ganges and was rejected entirely. Pliny names it ozaenitidos — it smelled of virus, a rank, animal odor. The same genus, the same form. Worthless to the Roman trade." },
      { type: "body", mainText: "Adulteration ran wide. Pseudonard herb (wider, paler leaf) could substitute visually; cyperus could bulk up the root by weight. Genuine nard was caught by lightness, red-brown color, sweet smell, and a taste that dried the mouth." },
      { type: "closer", mainText: "Spikenard had no\nsingle price\nbecause it had\nno single product.", subText: "Spike: 100 denarii/lb. Leaf: priced by size." },
    ],
  },

  // 2. costus-burning
  // revised: closer compressed for mobile reading
  {
    id: "costus-burning",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "costus", script: "gustu fervens, odore eximia", mainText: "Costus burns\nyour tongue\nand rewards\nyour nose.", subText: "The rest of the shrub\nis useless." },
      { type: "body", mainText: "Costus grows at the mouth of the Indus, on the island of Patale. Pliny records two varieties: a black type, considered inferior, and a white or pale type, preferred. The root was the only part that mattered.", subText: "\"frutice alias inutili\" — the shrub is otherwise useless" },
      { type: "body", mainText: "Despite its burning taste and remote origin, costus was one of the cheaper Indian aromatics in Roman trade. Pliny sets its price at 5.5 denarii per pound — modest compared to the 100 denarii demanded for spikenard." },
      { type: "closer", mainText: "Rome did not value\nthe shrub.\nIt valued the root.", subText: "Price: 5.5 denarii/lb (NH 12.41)" },
    ],
  },

  // 3. calamus-far-smell
  // revised: closer compressed for mobile reading
  {
    id: "calamus-far-smell",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "calamus odoratus", script: "statim e longinquo invitat", mainText: "Two marsh plants look identical from a distance. Both are aromatic. Only one draws you in before you arrive.", subText: "Pliny, Natural History 12.104–106" },
      { type: "body", mainText: "Calamus grows in Syria, 150 stades from the sea in a valley between Mount Lebanon and an unnamed ridge. It grows beside a marsh lake whose beds dry out in summer. The same beds also produce an aromatic rush — visually indistinguishable from calamus." },
      { type: "body", mainText: "Quality tests: shorter and thicker is better. When broken, good calamus splits in flat layers (assulose) — not like a radish, which fractures straight across. Dark color preferred; white condemned. Inside the tube there is a web-like structure Pliny calls the \"flower\" — more of it means higher grade.", subText: "\"meliorque qui minus fragilis et qui assulose potius quam qui raphani modo frangitur\" — NH 12.105" },
      { type: "body", mainText: "The price gap tells the story. Calamus: 1 denarius per pound. The aromatic rush from the same beds: 5 denarii per pound. Same marsh, same season, visually similar — but the trade priced them five to one." },
      { type: "closer", mainText: "The price lived\nin the break\nand in the smell\nthat reached you first.", subText: "Calamus 1 den./lb vs. aromatic rush 5 den./lb (NH 12.106)" },
    ],
  },

  // 4. balsam-grades
  // revised: closer compressed for mobile reading
  {
    id: "balsam-grades",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "opobalsamum", script: "praecipua autem gratia lacrimae", mainText: "Twenty acres of balsam\nyielded about\nfive gallons of sap\nin a summer.", subText: "That is why it cost so much." },
      { type: "body", mainText: "The hierarchy Pliny records: sap (lacrimae) first, seed second, bark third, wood last. Each had a different use and a different price. The sap — called opobalsamum — went into luxury perfume. The wood, xylobalsamum, was cooked into compound unguentis.", subText: "\"secunda semini, tertia cortici, minima ligno\" — NH 12.118" },
      { type: "body", mainText: "The price gap invited fraud. Pliny records that the treasury bought opobalsamum at 300 denarii per sextarius; the same volume sold on the street for double or more. Tests for adulteration: genuine sap is white and clear, has a fiery taste, and turns milk. Adulterated sap is yellow or red and clots the milk.", subText: "\"adulteratur... lacte probatur\" — NH 12.119–123" },
      { type: "closer", mainText: "Balsam sap was not\njust fragrant.\nIt was scarcity\nin liquid form.", subText: "A single sextarius of sap sold for 1,000 denarii (NH 12.123)" },
    ],
  },

  // 5. labdanum-goat
  // revised: closer compressed for mobile reading
  {
    id: "labdanum-goat",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "ladan / ladam", script: "ἐν γὰρ δυσοδμοτάτῳ γινόμενον εὐωδέστατον ἐστί", mainText: "Arabia's most fragrant\nsubstance was found\nin goat beards.", subText: "The foulest place.\nThe sweetest smell." },
      { type: "body", mainText: "Herodotus writes it plainly: labdanum comes from the most foul-smelling place and is the most fragrant thing. Goat beards in the Arabian scrub collect it as they browse. The Arabians used it in perfumes and burned it as incense.", subText: "\"τὸ δὲ δὴ λήδανον... ἐν γὰρ δυσοδμοτάτῳ γινόμενον εὐωδέστατον ἐστί\" — Hdt. 3.112" },
      { type: "body", mainText: "Pliny records three types. The best — called ladam in the Arab tongue — is fresh, long-lasting in scent, purple in color, much bulk for little weight, with short fibrous inner tubes that are not fragile. A second type, balsamodes, smells like balsam but is bitter and more useful to physicians. The black variety went into perfumes.", subText: "\"ladam vocant talem barbaro nomine\" — NH 12.97" },
      { type: "closer", mainText: "Herodotus' paradox held:\nthe sweetest smell\ncame from\nthe foulest place.", subText: "Price spread: best grade 50 den./lb; others 5 den./lb (NH 12.97)" },
    ],
  },

  // 6. myrakopa
  // revised: closer compressed for mobile reading
  {
    id: "myrakopa",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "myrákopa", script: "μυράκοπα", mainText: "Some Greek perfumes\nwere too thick to pour\nand too fragrant\nto count as medicine.", subText: "They had a word\nfor that boundary." },
      { type: "body", mainText: "Paul of Aegina divides perfumed oils into three kinds. First, simple oils. Then fluid compound perfumes. Then μυράκοπα: thicker blends with the consistency of ἄκοπα, the dense ointments rubbed on aching muscles.", subText: "Named μυράκοπα: dekamyron, amarakinon" },
      { type: "body", mainText: "The difference was texture. True perfume oils were fluid. Myrákopa accepted wax or resin and thickened. Medically, they were moderately warming and soothing — Paul lists sousinon, amarakinon, irinon, krokinon in this category.", subText: "\"σύστασιν ἀκόπων ἔχει κηρὸν ἢ ῥητίνην... δεχόμενα\" — Paul of Aegina 7.20.2" },
      { type: "closer", mainText: "Myrakopa named\na borderland:\ntoo thick to pour,\ntoo fragrant to be\nmere medicine.", subText: "The category survives only in technical medical writers like Paul of Aegina." },
    ],
  },

  // 7. perfume-fire
  // revised: closer compressed for mobile reading
  {
    id: "perfume-fire",
    series: "FROM THE WORKSHOP",
    slides: [
      { type: "hook", topLine: "embolai", script: "ἐμβολαί", badge: "✦ WORKSHOP", mainText: "The hardest perfume\nto make\nwas the one\nthat never touched fire.", subText: "Every other compound perfume\ndid." },
      { type: "body", mainText: "Three stages in order of heat tolerance. First, hard aromatics like aspalathus — materials that need long, slow heat. Second, spices like amomum — volatile, added mid-process. Third: gums, fats, and if called for, wax or resin.", subText: "\"πρῶτον μὲν τῶν δυσπαθεστέρων ἑψομένων\" — Paul of Aegina 7.20.2" },
      { type: "body", mainText: "Two exceptions broke the rule. Balsam sap (opobalsamum) was never boiled — it was added to the cooled perfume after the fire was done. The Mendesian was never heated at all: only mixed. Both would lose their volatile character under heat." },
      { type: "closer", mainText: "Boil what can\nsurvive fire.\nSpare what cannot.", subText: "Some perfumers added scraped verdigris after removing from heat to achieve green color (kyprinon, amarakinon)." },
    ],
  },

  // 8. nard-stachys-mystery
  // revised: closer compressed for mobile reading
  {
    id: "nard-stachys-mystery",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "stachys nardi", script: "στάχυς νάρδου", mainText: "The product was called a spike. Galen said it was a root. The name stuck; the anatomy did not agree.", subText: "Pliny NH 12.42 + Galen, De Antidotis / Andromachos commentary" },
      { type: "body", mainText: "Pliny celebrates nard's double gift: spike and leaf, each a separate commercial product. The spica comes from the aristas — the tips that spread at the top of the plant. He treats it as an above-ground product.", subText: "\"gemina dote nardi spicas ac folia celebrant\" — NH 12.42" },
      { type: "body", mainText: "Galen names it differently: the stachys of nard is a root — called a spike only because its shape resembles a grain ear. He makes this correction mid-recipe, noting that Andromachos's formula calls for it by the spike name.", subText: "\"καίτοι ῥίζαν οὖσαν, ἀπὸ τῆς πρὸς τοὺς ἀστάχυας ὁμοιότητος\" — Galen" },
      { type: "body", mainText: "Watch for the ekplytos — the washed-out nard. Perfumers use the root during boiling, extract the scent, then sell the spent root intact as if fresh. The counter: buy omphas, the raw form in the barbarian tongue. Even clay still on the root retains the nard smell.", subText: "\"μή πως ἀποδῷ τις ἡμῖν τὴν ἔκπλυτον ὀνομαζομένην\" — Galen" },
      { type: "closer", mainText: "The fraud fits Galen:\na spent root can pass\nfor fresh\nin a way a spent flower\nnever could.", subText: "Galen writing in the context of Andromachos's imperial perfume formula" },
    ],
  },

];
