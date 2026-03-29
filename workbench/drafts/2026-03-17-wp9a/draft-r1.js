// Draft-R1: 2026-03-17-wp9a
// Posts: 5
// Date: 2026-03-17
// Revision: R1 — addresses editorial feedback on 3 carousels

const DRAFT_CAROUSELS = [
  // 1. REVISED — tus-supply-chain
  // Fix: The three hereditary families and "sacri" designation belong to the Minaei (NH 12.54),
  // not the Atramitae (NH 12.52). Restructured body slide 1 to correctly attribute.
  {
    id: "tus-supply-chain",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "tus", script: "tura praeter Arabiam nullis", mainText: "688 denarii.", subText: "That's what it cost to move\none camel-load of frankincense\nfrom tree to port." },
      { type: "body", mainText: "Pliny traces the route. Frankincense grows in a single region of Arabia Felix. The Atramitae, a clan of the Sabaeans, hold the territory — their capital Sabota sits on a high mountain. But the harvesting rights belong to the Minaei, a neighboring clan. Only three families among them can cut the trees, passing the right down by inheritance. They are called sacri — sacred. During the harvest, they cannot touch a woman or attend a funeral.", subText: "The trees are holy. The harvesters are consecrated." },
      { type: "body", mainText: "From the groves, camels carry the resin to Sabota through a single permitted gate. Leaving the road is a capital offense. Priests take a tenth for the god Sabin — measured, not weighed. Then the load moves through Gebbanite territory (another tax), across 65 camel-stages to Gaza, paying tolls for water, fodder, lodging, and passage at every stop." },
      { type: "closer", mainText: "By the time it reaches Rome,\nthe price includes\nthe gods' cut,\ntwo kings' cuts,\nand the publicani's cut.", subText: "sumptus in singulas camelos —\n688 denarii per camel.\n\nPliny, NH 12.63–65." },
    ],
  },
  // 2. UNCHANGED (PASS) — cinnamon-fables
  {
    id: "cinnamon-fables",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "cinnamomum", script: "cinnamomum et casias fabulose narravit antiquitas", mainText: "Herodotus said cinnamon\ngrew in giant bird nests.", subText: "Pliny wasn't buying it." },
      { type: "body", mainText: "The old stories were spectacular. Cinnamon sticks were collected by enormous birds for their nests, perched on cliffs no human could climb. Traders lured the birds with heavy chunks of meat; the nests collapsed under the weight. Cassia grew in swamps guarded by winged serpents and bats with lethal claws.", subText: "Pliny's verdict: his commentis augentes rerum pretia — \"fictions invented to inflate the price.\"" },
      { type: "body", mainText: "Then he gives the real supply chain. Cinnamon grows in Ethiopia, among the Troglodytes. They haul it across vast seas on rafts with no rudder, no oars, no sails — neque gubernacula regant neque remi trahant vel vela — driven only by the winter east winds. The round trip takes five years. Many traders die. The ones who make it sell to Gebbanite middlemen at Ocilia." },
      { type: "closer", mainText: "The fables were a screen.\nBehind them: real voyages,\nreal deaths, real monopoly prices.", subText: "negotiatio illa feminarum maxime\nfide constat —\n\"that trade runs mostly\non women's demand.\"\n\nPliny, NH 12.85–88." },
    ],
  },
  // 3. REVISED — balsam-judea
  // Fix: Economics were reversed. NH 12.123 says the fiscus sold at 300 denarii;
  // dealers adulterated and resold at 1,000+. Corrected body slide 2 subText.
  {
    id: "balsam-judea",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "opobalsamum", script: "omnibus odoribus praefertur balsamum", mainText: "Rome fought a war\nover a shrub.", subText: "Balsam of Judea.\nThe most expensive liquid on earth." },
      { type: "body", mainText: "Pliny says balsam was granted to Judea alone — uni terrarum Iudaeae concessum. It grew in just two royal gardens, one of 20 acres, one smaller. You cut it with glass, stone, or bone knives only: ferro laedi vitalia odit — iron touching its living tissue kills the plant. The sap weeps out in tiny drops, collected on tufts of wool into small horns.", subText: "In Alexander's day, a full summer's harvest from the larger garden filled six congii — roughly 20 liters." },
      { type: "body", mainText: "When the Jewish revolt came, the defenders tried to destroy the groves rather than let Rome take them. saeviere in eam Iudaei sicut in vitam quoque suam — \"the Jews raged against the balsam as against their own lives.\" Rome sent soldiers to protect the bushes. After the conquest, the imperial treasury took ownership, and the plants thrived as never before.", subText: "The treasury sold it at 300 denarii per sextarius. Dealers resold it at over 1,000 — in tantum expedit augere liquorem — \"so profitable to stretch the liquid.\" Adulteration was the real business." },
      { type: "closer", mainText: "A plant so valuable\nthat an empire fought\nto keep it alive\nwhile destroying\neverything around it.", subText: "Pliny, NH 12.111–123." },
    ],
  },
  // 4. REVISED (HARD FAIL) — nero-poppaea-funeral
  // Fix: Removed ALL claims from Tacitus (Annals 16.6): embalming, spices, Mausoleum of Augustus.
  // Body slide 1 now uses ONLY Pliny NH 12.82–83: the excess of burning, the rhetorical
  // comparison with Arabia's annual harvest, and Pliny's framing of luxury in death.
  {
    id: "nero-poppaea-funeral",
    series: "ARTS OF VENUS",
    slides: [
      { type: "hook", topLine: "Nero et Poppaea", script: "non ferre tantum annuo fetu", mainText: "Nero burned a year's worth\nof frankincense\nin a single day.", subText: "It was a funeral." },
      { type: "body", mainText: "When Poppaea Sabina died in 65 CE, Pliny says the frankincense Nero burned at her funeral exceeded Arabia's entire annual harvest: non ferre tantum annuo fetu, quantum Nero princeps novissimo Poppaeae suae die concremaverit. A whole country's yearly production, consumed in a single ceremony. And yet, Pliny writes, Arabia is called felix — blessed — a name it owes not to the gods above, but to the dead below.", subText: "beatam illam fecit hominum etiam in morte luxuria — \"human luxury, even in death, made Arabia rich.\"" },
      { type: "body", mainText: "Pliny frames it as an indictment. Count up all the funerals across the whole world, he says — tot funera acervatimque congesta — and the incense piled on those pyres is a fraction of what the gods receive in single grains. The gods were appeased with salted flour. They were, Pliny adds, more favorable then: placatiores." },
      { type: "closer", mainText: "One woman's death.\nA whole country's harvest\nturned to smoke.", subText: "Pliny, NH 12.82–83." },
    ],
  },
  // 5. UNCHANGED (PASS) — piper-gold
  {
    id: "piper-gold",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "piper", script: "pondere emitur ut aurum vel argentum", mainText: "Pepper was weighed\nlike gold.", subText: "And Pliny couldn't understand\nwhy anyone wanted it." },
      { type: "body", mainText: "Pliny is baffled. Other spices attract by sweetness or by appearance. Pepper has nothing: nec pomi nec bacae commendatio est aliqua — no beauty of fruit, no beauty of berry. The only thing it offers is bitterness. sola placere amaritudine — \"bitterness alone pleases.\" And for this, Romans send to India." },
      { type: "body", mainText: "He asks the question nobody else does: quis ille primus experiri cibis voluit? — \"who was the first person who wanted to try this in food?\" Who looked at a bitter seed and decided to eat it? Whose hunger wasn't satisfied by just being hungry? Pepper is sold by weight like precious metal. And yet it has already reached Italy, where a pepper tree now grows, larger than a myrtle." },
      { type: "closer", mainText: "Bitter, ugly, imported\nat the price of silver.", subText: "Rome couldn't explain the craving.\nIt couldn't stop it either.\n\nPliny, NH 12.29." },
    ],
  },
];
