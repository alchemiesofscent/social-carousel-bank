// Draft: 2026-03-22-wp4
// Posts: 6
// Date: 2026-03-22

const DRAFT_CAROUSELS = [
  // 1. garlands-symposium
  // Sources: §1 (665a-b) Plato Comicus, §33 (685a-b) Nicostratus, §36 (687a-c) hypothymides
  // Angle: garlands as infrastructure, not decoration; hypothymis delivers scent to the heart/soul
  {
    id: "garlands-symposium",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      {
        type: "hook",
        topLine: "stephanos",
        script: "στέφανος",
        mainText: "The garland came out\nbetween dinner\nand drinking.",
        subText: "It wasn't decoration.\nIt was preparation.",
      },
      {
        type: "body",
        mainText: "Nicostratus describes the ritual sequence: \"Make the second table ready. Adorn it with all kinds of sweets. Get the perfume, the garlands, the frankincense, a flute girl.\" The stephanos arrived with the perfume, before the wine flowed.",
      },
      {
        type: "body",
        mainText: "But some garlands weren't worn on the head at all. The hypothymis was worn at the chest. Poets called it that because of the anathymiasis \u2014 the rising vapor of the flowers. Alcaeus says: \"Let someone pour sweet perfume down upon our chests.\" Anacreon agrees. The target was the heart.",
      },
      {
        type: "closer",
        mainText: "The garland wasn't\nthe end of the meal.\nIt was the beginning\nof everything after.",
        subText: "Nicostratus, Pseudostigmatias;\nAlcaeus fr. 36;\nAthenaeus 15.685a, 687b.",
      },
    ],
  },

  // 2. perfume-war-athens-sparta
  // Sources: §34 (686c-687a) Chrysippus etymology, Spartan expulsion, Solon's law
  // Angle: composite picture of philosophical/legislative hostility, NOT just Sparta (that's in sparta-ban)
  // Distinct from sparta-ban: that post focuses on foreign perfumers as outsiders;
  // this post focuses on Chrysippus' etymology as framing the whole debate
  {
    id: "perfume-war-athens-sparta",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      {
        type: "hook",
        topLine: "moros",
        script: "μόρος",
        mainText: "A Stoic philosopher\nsaid the word for perfume\ncomes from the word\nfor useless toil.",
        subText: "",
      },
      {
        type: "body",
        mainText: "Chrysippus claimed that myron \u2014 perfume \u2014 derives from moros: toil, trouble, wasted labor. The etymology is wrong. But the hostility behind it was real, and it had teeth.",
      },
      {
        type: "body",
        mainText: "Sparta expelled perfume-makers entirely \u2014 \"they corrupt the oil\" \u2014 and dyers too, for \"destroying the whiteness of wool.\" In Athens, Solon passed a law forbidding men from selling perfume at all. Two cities. Two different bans. Same suspicion: that transforming raw materials into luxury is a kind of corruption.",
      },
      {
        type: "closer",
        mainText: "The philosopher gave them\nthe theory.\nThe legislators gave them\nthe enforcement.",
        subText: "Chrysippus, in Athenaeus 15.686d.\nSolon's law, Athenaeus 15.687a.",
      },
    ],
  },

  // 3. rose-garland-medicine
  // Sources: §17 (675c-d) garland pharmacology (myrtle styptic, rose for headache);
  // §28-29 (681c-683c) Theophrastus on roses from Cyrene; Philonides on garland effects
  // Distinct from garlands-symposium (#1): that covers hypothymides and the soul;
  // this covers the pharmacology of specific plant materials
  {
    id: "rose-garland-medicine",
    series: "PHARMAKON",
    slides: [
      {
        type: "hook",
        topLine: "styphein",
        script: "στύφειν",
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
        subText: "Andreas, Philonides,\nin Athenaeus 15.675b\u2013d.",
      },
    ],
  },

  // 4. perfume-and-soul
  // Sources: §36 (687a-688a) Alexis on health and smell; Alcaeus/Anacreon on chest;
  // Praxagoras/Phylotimos on soul in the heart; hypothymis as scent-delivery to psyche
  // Distinct from garlands-symposium (#1): that covers the ritual sequence;
  // this is specifically about the soul/heart theory and its physiological logic
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
        mainText: "Alexis wrote: \"The greatest part of health is to produce good smells for the brain.\" But there was a deeper target. Praxagoras and Phylotimos, both physicians, taught that the soul is seated in the heart. Homer backed them up: the heart pounds in fear, the thumos rages in the chest. The evidence was right there in your ribcage.",
      },
      {
        type: "body",
        mainText: "So the hypothymis \u2014 the chest garland \u2014 wasn't perfume worn low for style. It delivered scent directly to where the psyche lived. The fragrance rose naturally from chest to nostrils, and meanwhile seeped into the cardiac seat of the soul. Wrong anatomy. Coherent system.",
      },
      {
        type: "closer",
        mainText: "They didn't put perfume\nnear the heart\nbecause it smelled nice.\nThey put it there\nbecause the soul\nwas listening.",
        subText: "Alexis, The Wicked Woman;\nPraxagoras; Phylotimos;\nAthenaeus 15.687a\u2013c.",
      },
    ],
  },

  // 5. philonides-catalog
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

  // 6. egyptian-perfume-symposium
  // Sources: §1 (665a-b) Plato Comicus Lakonians fr. 71; §39-40 (689b-690a)
  // Achaeus, Anaxandrides, Antiphanes on Egyptian perfume
  // Didymus' identification with stakte; the name as a mystery
  {
    id: "egyptian-perfume-symposium",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      {
        type: "hook",
        topLine: "Aigyptион",
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
        mainText: "Didymus thought it was stakte \u2014 pure myrrh extract \u2014 because myrrh was imported into Egypt and then shipped on to Greece. Others identified it with Mendesian perfume, or with metopion. The label \"Egyptian\" may have marked a trade route, not a formula. A perfume defined by where it passed through, not what it contained.",
      },
      {
        type: "closer",
        mainText: "The most-cited perfume\nin Greek comedy\nis the one\nnobody can identify.",
        subText: "Plato Com., Laconians;\nAchaeus, The Games;\nDidymus, in Athenaeus 15.665a, 689b\u2013c.",
      },
    ],
  },
];
