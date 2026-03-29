// Draft: 2026-03-24-wp10b
// Posts: 4
// Date: 2026-03-24
// Revision: R1

const DRAFT_CAROUSELS = [
  // 1. diogenes-perfumery (REVISED)
  // Changes: "butcher" -> "cook-shop" (mageirion), added wool/sheep stop,
  // "rich man" -> "extravagant man" (ton polytele), cut "by the arm"
  {
    id: "diogenes-perfumery",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "myropoleion", script: "\u03BC\u03C5\u03C1\u03BF\u03C0\u03C9\u03BB\u03B5\u1FD6\u03BF\u03BD", mainText: "A kotyle of kypros\ncost a mina.", subText: "A choinix of lupins cost\none copper. Diogenes thought\nthat proved something." },
      { type: "body", mainText: "An extravagant man complained Athens was expensive. Diogenes took him to the perfume shop \u2014 the myrop\u014Dleion. \"How much for a kotyle of kypros?\" The perfumer answered: \"A mina.\" The man cried out: \"The city is expensive!\"" },
      { type: "body", mainText: "Diogenes led him to the cook-shop \u2014 the mageirion. \"How much for a knuckle of pork?\" Three drachmas \u2014 expensive! Then to the soft wool \u2014 ta eria ta malaka. \"How much for a sheep?\" A mina. The man cried out again. Two items at a mina each: perfume and sheep." },
      { type: "body", mainText: "Then to the lupins. \"How much for a choinix?\" One copper. To the figs: two coppers. The myrtles: two coppers. \"The city is cheap!\" Diogenes announced." },
      { type: "closer", mainText: "The city is not expensive.\nYour taste is.", subText: "Teles via Stobaeus 3.1.98\n(= Teles, On Self-Sufficiency)." },
    ],
  },
  // 2. root-cutters (REVISED)
  // Changes: reframed Galen's solution closer to source ("become the expert yourself"),
  // cut "Each one takes something out" from closer, sharpened geographic register
  // (mountain -> city movement), reduced overlap with huckster-test vocabulary
  {
    id: "root-cutters",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "rhizotomoi", script: "\u1FE5\u03B9\u03B6\u03BF\u03C4\u03CC\u03BC\u03BF\u03B9", mainText: "The fraud starts\non the mountain.", subText: "Before the goods reach the city.\nBefore the wholesaler packs them.\nThe root-cutters corrupt first." },
      { type: "body", mainText: "Galen traces the chain from peak to storefront. The rhizotomoi \u2014 root-cutters, though they carry down saps, juices, fruits, flowers, and shoots from the mountains into the cities \u2014 are the first of all to tamper with the drugs. Then the emporoi, the long-distance traders, layer on their own fraud. Finally the rh\u014Dpop\u014Dlai, the retail hucksters, sell what has been corrupted at every stage." },
      { type: "body", mainText: "Galen's answer: become the expert yourself. Acquire experience with every material \u2014 plant-derived, animal-derived, mineral \u2014 so you can discern real from fake. Then train on his book about the capacities of simple drugs. Otherwise, he warns, \"one may go as far as a rational understanding of the method, but will produce nothing worthy of it.\"" },
      { type: "closer", mainText: "Three hands touch the drug\nbefore yours.", subText: "Galen, Comp. Med. Gen. 3.2\n(vol. 13, pp. 570\u2013573 K\u00FChn)." },
    ],
  },
  // 3. harvest-window (REVISED)
  // Changes: fixed source fidelity on clay (non-porous clay IS suitable per Dioscorides),
  // cut body slide 2 (harvest timing), merged key timing content into body 1,
  // tightened to 2 body slides, kept anaphoric closer (root-cutters now uses truncated image)
  {
    id: "harvest-window",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "apothesis", script: "\u1F00\u03C0\u03CC\u03B8\u03B5\u03C3\u03B9\u03C2", mainText: "Most herbs expire\nin three years.", subText: "Dioscorides wrote the\nexpiration dates." },
      { type: "body", mainText: "Collect only in fair weather \u2014 Dioscorides says the difference between drought and rain at harvest is enormous. Mountain herbs are stronger than lowland: high ground is wind-scoured, cold, dry. Plains are damp, shaded, still. The same species from two elevations might as well be different drugs. Pick at the right moment, store in the right vessel." },
      { type: "body", mainText: "Storage is material science. Flowers and aromata go in linden-wood boxes \u2014 kib\u014Dtia philyrina \u2014 dry and sealed. Seeds keep wrapped in papyrus or leaves. Liquids need silver, glass, or horn vessels. Dense pottery works \u2014 never porous clay. Wooden vessels only if boxwood. Fats and marrows go in tin \u2014 kassiterinois. White and black hellebore last for many years. Everything else: three.", subText: "A pharmacist's pantry, calendar,\nand clock \u2014 all in one preface." },
      { type: "closer", mainText: "The right plant,\nwrong mountain.\nThe right herb,\nwrong week.\nThe right box,\nwrong material.", subText: "Any single error\nand the drug is already gone.\n\nDioscorides 1.Pr.6\u20139." },
    ],
  },
  // 4. perfumers-shade (PASS -- minor fidelity improvements incorporated)
  // Changes: "built" -> "sought", "Aggressively dark" -> "As deeply shaded as possible",
  // "waiting to return" -> "survives intact beneath the cold"
  {
    id: "perfumers-shade",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "paliskios", script: "\u03C0\u03B1\u03BB\u03AF\u03C3\u03BA\u03B9\u03BF\u03C2", mainText: "Ancient perfumers sought\ntheir shops upstairs.", subText: "Upper floors, north-facing,\ndeep in shadow. On purpose." },
      { type: "body", mainText: "Theophrastus explains: the sun and heat destroy perfume \u2014 they strip out the scent and alter its nature entirely. Cold does the opposite. Frost and ice reduce the fragrance, yes, by contracting it. But they do not remove the potency. The scent survives intact beneath the cold. So perfumers sought rooms that were hyper\u014D\u014Dous \u2014 upper-story \u2014 and paliskious \u2014 as deeply shaded as possible." },
      { type: "closer", mainText: "Heat kills.\nCold only sleeps.", subText: "The first cold chain\nwas an upstairs room\nfacing away from the sun.\n\nTheophrastus, Fragmenta,\nfrag. 4.40." },
    ],
  },
];
