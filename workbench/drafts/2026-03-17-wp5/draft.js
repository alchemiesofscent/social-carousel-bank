// WP5 — Kyphi / Egyptian Temple Recipes
// Draft batch: 2026-03-17
// 6 carousels

const WP5_KYPHI = [
  {
    id: "kyphi-plutarch",
    series: "THE RECIPE",
    slides: [
      { type: "hook", topLine: "kyphi", script: "κῦφι", mainText: "16 ingredients.\nMixed while priests\nread sacred texts aloud.", subText: "The most famous incense recipe\nfrom the ancient world." },
      { type: "body", mainText: "Plutarch's kyphi: honey, wine, raisins, cyperus, resin, myrrh, aspalathus, seseli, mastic, bitumen, rush, patience dock, two kinds of juniper (larger and smaller), cardamom, and calamus. Sixteen ingredients \u2014 a square of a square, 4 \u00d7 4 \u2014 and Plutarch can't resist noting this, even as he admits the numerology contributes \"very little to the recipe.\"" },
      { type: "body", mainText: "The aromatics loosen the knots of daily worry \"without wine.\" They brighten the dream-receiving part of the soul \"as if polishing a mirror\" \u2014 the same way the Pythagoreans played the lyre before sleep to charm the irrational part of the soul. Kyphi is a lullaby made of smoke." },
      { type: "closer", mainText: "They didn't combine them\n\"in just any way.\"\nThe perfumers mixed\nwhile the scribes read.", subText: "Plutarch, Isis and Osiris 80\n(Moralia 383E\u2013384C)." },
    ],
  },
  {
    id: "kyphi-edfu",
    series: "THE RECIPE",
    slides: [
      { type: "hook", topLine: "kyphi", script: "kꜣp.t", mainText: "The Edfu temple recorded\nexactly how much kyphi\nyou lose when you grind it.", subText: "And when you sieve it.\nAnd when it evaporates." },
      { type: "body", mainText: "Two parallel kyphi recipes are inscribed on the walls at Edfu (II, 203\u2013204 and 211\u2013212). Both produce 100 debens for the new year. Recipe 1 begins with seven aromatics \u2014 aromatic reed, \"feather of Nemty,\" cheb, pine resin, tisheps, agaiou, djeba \u2014 each at 3 debens. Ground, sieved, then mixed with juniper berries, conifer resin, peqer, and cheben." },
      { type: "body", mainText: "Then raisins from the Baharia Oasis. Fresh wine \u2014 called \"the eye of Horus.\" Terebinth resin. Honey. A final addition of antyou at precisely 1/10 + 1/30 + 1/90 of the total mass. Recipe 2 is nearly identical but with different proportions. Its raisins are left to rest \"until dawn manifests.\" It yields 90 debens after accounting for a 1/10 loss." },
      { type: "closer", mainText: "Plutarch gave you cosmology.\nEdfu gave you accounting.", subText: "Made for Horus of Edfu,\nHathor of Dendera,\nand all the goddesses\nat the beginning of each year." },
    ],
  },
  {
    id: "kyphi-solar-lunar",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "kyphi", script: "κῦφι", mainText: "Resin belongs to the sun.\nKyphi belongs to the night.", subText: "The Egyptians burned\ndifferent incense\nat different hours \u2014\nand Plutarch says he knows why." },
      { type: "body", mainText: "Three times a day, three offerings. At dawn: resin \u2014 sharp, stimulating, to break up the dense night air that \"stifles the body and draws the soul into depression.\" At noon: myrrh \u2014 to dissolve the heavy exhalations the sun drags up from the earth. Resin and myrrh are \"the work of the sun,\" their plants exuding tears in response to its heat." },
      { type: "body", mainText: "At nightfall: kyphi. Its ingredients \"delight in the night\" \u2014 nourished by cold winds, shadows, dew, and moisture. Daylight is simple and singular, \"through a deserted aether\" as Pindar says. But the night air is a blend, \"as if seeds from every star streamed down onto one place.\" Simple incense for a simple sun. Compound incense for a compound darkness." },
      { type: "body", mainText: "The medical tradition echoes this. Oribasius records a variant called kyphi seleniakon \u2014 lunar kyphi. Twenty-four ingredients including bdellium, elecampane, mastic, juniper, saffron-crocus, aspalathus, costus, myrrh, styrax, dried roses, pine nuts, raisins, figs, dates, honey, and fragrant wine. A kyphi named for the moon itself." },
      { type: "closer", mainText: "The sun gets two ingredients.\nThe night gets sixteen.\nThe sky after dark\nis more complex\nthan the sky at noon.", subText: "Plutarch, Isis and Osiris 79\u201380.\nOribasius, Synopsis 3.220." },
    ],
  },
  {
    id: "kyphi-damocrates",
    series: "THE RECIPE",
    slides: [
      { type: "hook", topLine: "Damocrates", script: "Δαμοκράτης", mainText: "A Roman physician\nwrote the kyphi recipe\nas poetry.", subText: "In iambic trimeter.\nWith dosages." },
      { type: "body", mainText: "Damocrates composed his pharmaceutical recipes in verse \u2014 metered Greek poetry, preserved by Galen. His kyphi begins: \"Kyphi is neither a simple thing nor a plain mixture, nor does any one land produce it. The Egyptians compound it for certain of their gods, as I shall tell.\"" },
      { type: "body", mainText: "Then the recipe, in verse: white raisins, the fattest available, skinned and seeded \u2014 24 Attic drachms. The same weight of terebinth resin. 12 of myrrh. 4 of cinnamon. 12 of rush. 1 of saffron. 3 of bdellium. 2\u00bd of aspalathus. 3 of spikenard. 3 of good cassia. 3 of cyperus. 3 of juniper berries. 9 of aromatic calamus. A moderate amount of honey. Very little wine." },
      { type: "closer", mainText: "Not a recipe.\nA poem that happens\nto be compoundable.", subText: "Galen, Antidotis 14.117\u2013118,\npreserving Damocrates' verse kyphi." },
    ],
  },
  {
    id: "kyphi-medicine",
    series: "PHARMAKON",
    slides: [
      { type: "hook", topLine: "kyphi", script: "κῦφι", mainText: "The Egyptians burned it\nfor the gods.\nThe Greeks drank it\nfor their livers.", subText: "" },
      { type: "body", mainText: "Even Plutarch notes kyphi crossed from temple to pharmacy: \"They use kyphi as a potion and a perfumed oil. Taken as a drink, it purifies the inside of the body. As a perfumed oil, it softens the skin.\" Paul of Aegina says kyphi \u2014 and the kyphi-like antidotes called kyphoeideis \u2014 can heal ulcers in the bladder and urinary tract." },
      { type: "body", mainText: "The most surprising medical use comes from Archigenes' treatise On Worms. Three types of intestinal worm: round, flat, and askarides. For the flat worm \u2014 the hardest to kill \u2014 he prescribes kyphi. His recipe: 44 ingredients including gagates stone, elecampane, aspalathus bark, asphodel root, juniper berries, bdellium, ammoniac, Indian onyx, wild rue, peony, dictamnus, and Illyrian iris. Ground together, mixed with honey and fine wine." },
      { type: "closer", mainText: "Sacred incense.\nSleep aid.\nLiver tonic.\nWorm killer.", subText: "Archigenes, On Worms (fr. ed. Calabr\u00f2).\nPaul of Aegina 3.45.\nPlutarch, Isis and Osiris 80." },
    ],
  },
  {
    id: "kyphi-dioscorides",
    series: "THE RECIPE",
    slides: [
      { type: "hook", topLine: "kyphi", script: "κῦφι", mainText: "Dioscorides' kyphi has\nno sacred texts.\nNo cosmology.\nNo priests.", subText: "Just measurements and steps." },
      { type: "body", mainText: "\"Kyphi is a preparation of incense pleasing to the gods. The priests in Egypt use it lavishly.\" That's the only nod to the temple. Then: half a xestes of cyperus. The same of large juniper berries. Twelve mnas of fat, seedless raisins. Five mnas of purified resin. One mna each of aromatic calamus, aspalathus, and rush. Twelve drachms of myrrh. Nine xestai of old wine. Two mnas of honey." },
      { type: "body", mainText: "The method is clinical. Seed the raisins, crush and grind them with wine and myrrh. Crush and sieve the other dry ingredients, mix them in, let them absorb for one day. Boil the honey to a glue-like consistency, fold in melted resin, then work in the remaining ingredients carefully. Store in an earthenware vessel. No chanting. No scribes. No mirror-polishing of dreams." },
      { type: "closer", mainText: "Plutarch heard the music.\nDioscorides counted the grams.", subText: "Dioscorides, De Materia Medica 1.25." },
    ],
  },
];
