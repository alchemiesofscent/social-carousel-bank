// Draft-R1: 2026-03-17-wp9b
// Posts: 3
// Date: 2026-03-17
// Revision: R1 — two carousels revised per editorial feedback

const DRAFT_CAROUSELS = [
  // 1. pliny-perfume-luxury — UNCHANGED (PASS)
  {
    id: "pliny-perfume-luxury",
    series: "ARTS OF VENUS",
    slides: [
      {
        type: "hook",
        topLine: "unguenta",
        script: "iuvitque luxuria omnia ea miscere",
        mainText: "Pliny says perfume\nwas invented by greed.",
        subText: "\"Luxury delighted in mixing\nall of them together.\"",
      },
      {
        type: "body",
        mainText: "Pliny opens Book XIII with a history of desire. Before perfume, people knew only the raw smoke of cedar and citrus burned at altars — nidorem verius quam odorem, \"fumes rather than fragrance.\" No one at Troy wore perfume. No one offered incense.",
      },
      {
        type: "body",
        mainText: "Then Alexander captured the perfume chest of Darius. After that, Pliny says, the Romans embraced perfume inter lautissima atque etiam honestissima vitae bona — \"among the finest and even the most honorable goods of life.\" The honor even extended to the dead. Luxury had won.",
        subText: "He can barely contain his disgust.",
      },
      {
        type: "closer",
        mainText: "The forests had value\non their own.\nThen someone decided\nto mix everything together.",
        subText: "Pliny, Natural History 13.1–3.",
      },
    ],
  },

  // 2. pliny-royal-perfume — REVISED
  // Changes: Body 1 trimmed from 19-noun ingredient dump to 6 geographically
  // tagged ingredients, turning the list into a trade map that sets up body 2's
  // "nothing grows in Italy" payoff. Spine committed to trade-dependency.
  {
    id: "pliny-royal-perfume",
    series: "THE RECIPE",
    slides: [
      {
        type: "hook",
        topLine: "regale unguentum",
        script: "regale unguentum",
        mainText: "The Parthian kings\nhad a personal perfume.",
        subText: "It had 27 ingredients.",
      },
      {
        type: "body",
        mainText: "Pliny calls it the regale unguentum — the \"royal ointment, because it is blended thus for the kings of Parthia.\" The recipe is a map of the ancient world: costus from India, cinnamon from East Africa, spikenard from the Himalayas, opobalsam from Judea, calamus from Syria, saffron from Cilicia. Twenty-seven ingredients. Not one supply chain — twenty-seven.",
      },
      {
        type: "body",
        mainText: "Then Pliny's editorial knife: nihilque eius rei causa in Italia gignitur — \"and nothing for this purpose grows in Italy, conqueror of all nations.\" The empire that ruled the world couldn't produce a single ingredient for the perfume it most desired.",
        subText: "Except iris from Illyria and nard from Gaul.",
      },
      {
        type: "closer",
        mainText: "Rome conquered everything\nexcept the plants\nit needed to smell\nlike a king.",
        subText: "Pliny, Natural History 13.18.",
      },
    ],
  },

  // 3. pliny-perfume-shelf-life — REVISED
  // Changes: Body 1 now includes the aging-improves-with-age note (moved from
  // body 2) to sharpen the contradiction against "die in their own hour."
  // Body 2 stripped to the hand-inversion test as lead detail; alabaster/lead-
  // vessel storage details cut (overlap with Theophrastus shelf-life post).
  {
    id: "pliny-perfume-shelf-life",
    series: "MATERIA",
    slides: [
      {
        type: "hook",
        topLine: "unguenta",
        script: "unguenta ilico expirant ac suis moriuntur horis",
        mainText: "Perfumes die\nin their own hour.",
        subText: "Pliny thought this made them\nthe most pointless luxury of all.",
      },
      {
        type: "body",
        mainText: "Pearls pass to your heirs. Clothing lasts beyond its owner. But perfume — unguenta ilico expirant — \"perfumes expire at once and die in their own hours.\" Their highest recommendation, Pliny writes, is that a woman walking past might draw the attention of someone doing something else entirely.",
        subText: "And yet — unguenta vetustate meliora — \"perfumes improve with age.\" They die in their own hour, and they get better with time. He can't even keep his contempt consistent.",
      },
      {
        type: "body",
        mainText: "Still, Pliny can't stop himself. He catalogs the proper way to test perfume: invert the hand and apply it to the back, never the fleshy palm — ne carnosae partis calor vitiet, \"lest the heat of the fleshy part corrupt the sample.\" The man who thinks perfume is the most pointless luxury on earth is writing instructions for where on your hand to put it.",
      },
      {
        type: "closer",
        mainText: "He documents\nthe science of preserving\nsomething he thinks\nno one should want.",
        subText: "Pliny, Natural History 13.19–20.",
      },
    ],
  },
];
