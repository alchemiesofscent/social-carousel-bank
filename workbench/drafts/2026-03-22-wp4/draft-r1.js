// Draft: 2026-03-22-wp4 (Revision 1)
// Posts: 6
// Date: 2026-03-22

const DRAFT_CAROUSELS = [
  // 1. garlands-symposium
  // REVISED — replaced body 2 (hypothymis/Alcaeus, overlapped with perfume-and-soul)
  //   with Philoxenus myrtle-garland passage (par. 33, lines 1262-1269).
  //   Closer rewritten to avoid mirroring hook's "wasn't X / was Y" inversion;
  //   now lands on the image of scent rising from the chest.
  {
    id: "garlands-symposium",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      {
        type: "hook",
        topLine: "stephanos",
        script: "\u03C3\u03C4\u03AD\u03C6\u03B1\u03BD\u03BF\u03C2",
        mainText: "The garland came out\nbetween dinner\nand drinking.",
        subText: "It wasn't decoration.\nIt was preparation.",
      },
      {
        type: "body",
        mainText: "Nicostratus describes the ritual sequence: \"Make the second table ready. Adorn it with all kinds of sweets. Get the perfume, the garlands, the frankincense, a flute girl.\" The stephanos arrived with the perfume, before the wine flowed.",
      },
      {
        type: "body",
        mainText: "Philoxenus the dithyrambic poet makes the garland the very first act of feasting. A young slave pours water over the guests' hands from a silver jug \u2014 and then, immediately, brings out a garland woven from slender myrtle branches. Before any food. Before any wine. The garland opened the event.",
      },
      {
        type: "closer",
        mainText: "Two poets.\nTwo centuries apart.\nThe garland still came first.",
        subText: "Nicostratus, Pseudostigmatias;\nPhiloxenus, The Banquet;\nAthenaeus 15.685a, 685b.",
      },
    ],
  },

  // 2. perfume-war-athens-sparta
  // REVISED — body 2 rewritten to foreground Clearchus (par. 35) and
  //   Sophocles' Judgement (par. 35, fr. 334 N). Sparta/Solon compressed
  //   to a single sentence in body 1. No longer duplicates sparta-ban.
  //   Closer rewritten to avoid summary parallelism.
  {
    id: "perfume-war-athens-sparta",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      {
        type: "hook",
        topLine: "moros",
        script: "\u03BC\u03CC\u03C1\u03BF\u03C2",
        mainText: "A Stoic philosopher\nsaid the word for perfume\ncomes from the word\nfor useless toil.",
        subText: "",
      },
      {
        type: "body",
        mainText: "Chrysippus claimed that myron \u2014 perfume \u2014 derives from moros: toil, trouble, wasted labor. The etymology is wrong. But it gave philosophical cover to real hostility. Sparta expelled perfume-makers for \"corrupting the oil\"; Solon banned Athenian men from selling perfume by law. Behind both acts stood this idea: that transforming raw materials into luxury is itself a kind of corruption.",
      },
      {
        type: "body",
        mainText: "Clearchus went further. In his Lives he argued that it is not just the scents but even the colors of luxury \u2014 dyed fabrics, tinted skin \u2014 that effeminize those who handle them. And Sophocles staged the argument as myth: in his Judgement, Aphrodite appears anointing herself with perfume and gazing into a mirror, while Athena \u2014 Wisdom, Reason, Virtue \u2014 rubs herself with plain olive oil and goes to the gymnasium.",
      },
      {
        type: "closer",
        mainText: "Perfume or olive oil.\nAphrodite or Athena.\nThey made it a choice\nbetween pleasure\nand character.",
        subText: "Chrysippus, in Athenaeus 15.686d.\nClearchus, Lives III; Sophocles,\nJudgement (fr. 334 N),\nin Athenaeus 15.687a.",
      },
    ],
  },

  // 3. rose-garland-medicine
  // UNCHANGED (PASS) — minor fix: closer citation corrected from "15.675b-d" to "15.675c-d"
  {
    id: "rose-garland-medicine",
    series: "PHARMAKON",
    slides: [
      {
        type: "hook",
        topLine: "styphein",
        script: "\u03C3\u03C4\u03CD\u03C6\u03B5\u03B9\u03BD",
        mainText: "Myrtle garlands\nfought wine fumes.\nRose garlands\ntreated headaches.",
        subText: "They weren't choosing\nthe prettiest flowers.",
      },
      {
        type: "body",
        mainText: "The logic went like this: someone at a party presses a cloth against their aching head and feels better. From that, says Andreas, came the first headband \u2014 then the garland. Ivy was the first choice: everywhere, cheap, cooling without a narcotic smell. That's why it belonged to Dionysus.",
      },
      {
        type: "body",
        mainText: "Then the system got precise. Myrtle was styptic \u2014 it pushed back the rising fumes of wine. Rose had something that soothed headaches while also cooling the skin. But gillyflower and marjoram garlands? Avoid them. They produce narcosis and heaviness. Not every flower was welcome at the drinking table.",
      },
      {
        type: "closer",
        mainText: "The symposium garland\nwasn't an ornament.\nIt was the first line\nof hangover defense.",
        subText: "Andreas, Philonides,\nin Athenaeus 15.675c\u2013d.",
      },
    ],
  },

  // 4. perfume-and-soul
  // REVISED — body 2 replaced: removed restatement of hook (hypothymis delivers
  //   scent to soul). New body 2 uses the Plato Timaeus passage (par. 36,
  //   lines 1427-1432) about the lung as a spongy cushion for the leaping heart.
  //   hypothymis/Alcaeus overlap with garlands-symposium resolved: that post
  //   no longer uses hypothymis material.
  {
    id: "perfume-and-soul",
    series: "THE NOSE KNOWS",
    slides: [
      {
        type: "hook",
        topLine: "hypothymis",
        script: "\u1F51\u03C0\u03BF\u03B8\u03C5\u03BC\u03AF\u03C2",
        mainText: "Greeks poured perfume\non their chests\nto medicate their souls.",
        subText: "",
      },
      {
        type: "body",
        mainText: "Alexis wrote: \"The greatest part of health is to produce good smells for the brain.\" But there was a deeper target. Praxagoras and Phylotimos, both physicians, taught that the soul is seated in the heart. Homer backed them up: the heart pounds in fear, the thumos rages in the chest. So the hypothymis \u2014 the chest garland \u2014 delivered scent directly to where the psyche lived.",
      },
      {
        type: "body",
        mainText: "Plato took the anatomy even further. In the Timaeus, he wrote that the creator placed the lung around the heart \u2014 soft, bloodless, riddled with hollows like a sponge \u2014 so that when the heart leaps in fear, it pounds against something yielding rather than something hard. The organ protecting the soul was designed as a cushion. And above that cushion, the Greeks laid perfumed garlands.",
      },
      {
        type: "closer",
        mainText: "They didn't put perfume\nnear the heart\nbecause it smelled nice.\nThey put it there\nbecause the soul\nwas listening.",
        subText: "Alexis, The Wicked Woman;\nPraxagoras; Phylotimos;\nPlato, Timaeus 70c;\nAthenaeus 15.687a\u2013688a.",
      },
    ],
  },

  // 5. hicesius-drinking-perfumes
  // REPLACED — philonides-catalog removed (near-total overlap with existing
  //   perfume-map carousel). Replaced with Hicesius "sommelier's guide" from
  //   par. 39 (lines 1501-1511): which perfumes suit a drinking party.
  //   Entirely new material, no overlap with any existing carousel.
  {
    id: "hicesius-drinking-perfumes",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      {
        type: "hook",
        topLine: "Hikesios",
        script: "\u1F39\u03BA\u03AD\u03C3\u03B9\u03BF\u03C2",
        mainText: "A Greek physician wrote\na guide to which perfumes\nyou should wear\nwhile drinking.",
        subText: "",
      },
      {
        type: "body",
        mainText: "Hicesius, in his treatise On Raw Materials, sorted perfumes by their suitability for a drinking party. Rose perfume was his top pick. Myrtle and quince were also approved \u2014 quince because it was easy on the stomach and useful for lethargy. Dropwort perfume kept the mind clear. These weren't aesthetic preferences. They were prescriptions.",
      },
      {
        type: "body",
        mainText: "He also distinguished between perfumes you pour on and perfumes you rub in. Saffron perfume was fine for drinking \u2014 as long as it didn't contain too much myrrh. Stakte was approved. Fenugreek perfume was \"sweet and delicate.\" Gillyflower perfume was fragrant and, he noted, extremely good for digestion. Every scent had a therapeutic justification.",
      },
      {
        type: "closer",
        mainText: "The sommelier\nof ancient perfume\ndidn't ask\nwhat you liked.\nHe asked\nwhat you were drinking.",
        subText: "Hicesius, On Raw Materials II,\nin Athenaeus 15.689c.",
      },
    ],
  },

  // 6. egyptian-perfume-symposium
  // UNCHANGED (PASS) — minor fix: hedged Mendesian/metopion identification
  //   with "Some scholars have suggested" language, per editorial note.
  {
    id: "egyptian-perfume-symposium",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      {
        type: "hook",
        topLine: "Aigyption",
        script: "A\u1F30\u03B3\u03CD\u03C0\u03C4\u03B9\u03BF\u03BD",
        mainText: "Greek comedies keep\nmentioning \"Egyptian perfume.\"\nNobody says\nwhat's in it.",
        subText: "",
      },
      {
        type: "body",
        mainText: "It shows up everywhere. Plato Comicus: \"Pour the Egyptian perfume, then the iris.\" Antiphanes: \"Egyptian perfume for the feet and legs.\" Anaxandrides: \"an expensive Egyptian variety\" from Peron the perfume-seller. Achaeus calls it a gift \"worth its weight in silver.\" The name is constant. The recipe is absent.",
      },
      {
        type: "body",
        mainText: "Didymus thought it was stakte \u2014 pure myrrh extract \u2014 because myrrh was imported into Egypt and then shipped on to Greece. Some scholars have suggested it may correspond to Mendesian perfume, or to metopion, which was made from bitter almond oil in Egypt. The label \"Egyptian\" may have marked a trade route, not a formula. A perfume defined by where it passed through, not what it contained.",
      },
      {
        type: "closer",
        mainText: "The most-cited perfume\nin Greek comedy\nis the one\nnobody can identify.",
        subText: "Plato Com., Laconians;\nAchaeus, The Games;\nDidymus, in Athenaeus 15.665a, 689b\u2013c.",
      },
    ],
  },
 // 7. philonides-catalog
  // Sources: §38 (688d-689d) Apollonius Herophileius on regional perfumes;
  // Hicesius on perfumes for drinking; Theophrastus classification
  // Distinct from perfume-map: that covers the regional list and "fashion not fate";
  // this angles toward the rise-and-fall narrative and "craftsmen not places"
  {
    id: "philonides-catalog",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      {
        type: "hook",
        topLine: "Apollonios",
        script: "\u1F08\u03C0\u03BF\u03BB\u03BB\u03CE\u03BD\u03B9\u03BF\u03C2",
        mainText: "Ephesus lost\nits perfume reputation.\nSo did Syria.\nSo did Pergamum.",
        subText: "",
      },
      {
        type: "body",
        mainText: "Apollonius, a student of the great anatomist Herophilus, wrote a treatise On Perfumes that reads like an obituary column. Ephesus once led the world in Megalleion \u2014 \"now it doesn't.\" Alexandria flourished because of Arsinoe and Berenice's patronage. Cyrene made the finest rose perfume while Berenice the Great lived. When she died, so did the perfume.",
      },
      {
        type: "body",
        mainText: "His conclusion cuts against every ancient terroir argument: \"It is the people who supply the raw materials and the craftsmen who make the best perfume \u2014 not the places.\" Pergamum invented frankincense perfume, something nobody had seen before. Then the perfumer moved or died, and Pergamum's edge vanished with him.",
      },
      {
        type: "closer",
        mainText: "Every golden age\nof perfume\nended with a person,\nnot a place.",
        subText: "Apollonius Herophileius,\nOn Perfumes,\nin Athenaeus 15.688e\u2013689a.",
      },
    ],
  },
];

