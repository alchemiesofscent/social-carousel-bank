// Draft: 2026-03-17-wp9a
// Posts: 5
// Date: 2026-03-17

const DRAFT_CAROUSELS = [
  // 1. The frankincense supply chain from Arabia to Rome — DEAD WORDS, LIVING SCENTS — NH 12.51–65
  {
    id: "tus-supply-chain",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "tus", script: "tura praeter Arabiam nullis", mainText: "688 denarii.", subText: "That's what it cost to move\none camel-load of frankincense\nfrom tree to port." },
      { type: "body", mainText: "Pliny traces the route. Frankincense grows in a single region of Arabia Felix, controlled by the Atramitae, a clan of the Sabaeans. Only three families have hereditary harvesting rights. They call themselves sacri \u2014 sacred. During the cutting season, they cannot touch a woman or attend a funeral.", subText: "The trees are holy. The harvesters are consecrated." },
      { type: "body", mainText: "From the groves, camels carry the resin to Sabota, the capital, through a single permitted gate. Leaving the road is a capital offense. Priests take a tenth for the god Sabin \u2014 measured, not weighed. Then the load moves through Gebbanite territory (another tax), across 65 camel-stages to Gaza, paying tolls for water, fodder, lodging, and passage at every stop." },
      { type: "closer", mainText: "By the time it reaches Rome,\nthe price includes\nthe gods' cut,\ntwo kings' cuts,\nand the publicani's cut.", subText: "sumptus in singulas camelos \u2014\n688 denarii per camel.\n\nPliny, NH 12.63\u201365." },
    ],
  },
  // 2. Cinnamon wars: Pliny on faked origins — MATERIA — NH 12.85–95
  {
    id: "cinnamon-fables",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "cinnamomum", script: "cinnamomum et casias fabulose narravit antiquitas", mainText: "Herodotus said cinnamon\ngrew in giant bird nests.", subText: "Pliny wasn't buying it." },
      { type: "body", mainText: "The old stories were spectacular. Cinnamon sticks were collected by enormous birds for their nests, perched on cliffs no human could climb. Traders lured the birds with heavy chunks of meat; the nests collapsed under the weight. Cassia grew in swamps guarded by winged serpents and bats with lethal claws.", subText: "Pliny's verdict: his commentis augentes rerum pretia \u2014 \"fictions invented to inflate the price.\"" },
      { type: "body", mainText: "Then he gives the real supply chain. Cinnamon grows in Ethiopia, among the Troglodytes. They haul it across vast seas on rafts with no rudder, no oars, no sails \u2014 neque gubernacula regant neque remi trahant vel vela \u2014 driven only by the winter east winds. The round trip takes five years. Many traders die. The ones who make it sell to Gebbanite middlemen at Ocilia." },
      { type: "closer", mainText: "The fables were a screen.\nBehind them: real voyages,\nreal deaths, real monopoly prices.", subText: "negotiatio illa feminarum maxime\nfide constat \u2014\n\"that trade runs mostly\non women's demand.\"\n\nPliny, NH 12.85\u201388." },
    ],
  },
  // 3. Balsam of Judea — the most expensive liquid on earth — MATERIA — NH 12.111–123
  {
    id: "balsam-judea",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "opobalsamum", script: "omnibus odoribus praefertur balsamum", mainText: "Rome fought a war\nover a shrub.", subText: "Balsam of Judea.\nThe most expensive liquid on earth." },
      { type: "body", mainText: "Pliny says balsam was granted to Judea alone \u2014 uni terrarum Iudaeae concessum. It grew in just two royal gardens, one of 20 acres, one smaller. You cut it with glass, stone, or bone knives only: ferro laedi vitalia odit \u2014 iron touching its living tissue kills the plant. The sap weeps out in tiny drops, collected on tufts of wool into small horns.", subText: "In Alexander's day, a full summer's harvest from the larger garden filled six congii \u2014 roughly 20 liters." },
      { type: "body", mainText: "When the Jewish revolt came, the defenders tried to destroy the groves rather than let Rome take them. saeviere in eam Iudaei sicut in vitam quoque suam \u2014 \"the Jews raged against the balsam as against their own lives.\" Rome sent soldiers to protect the bushes. After the conquest, the imperial treasury took ownership, and the plants thrived as never before.", subText: "The sap sold at 1,000 denarii per sextarius. The treasury resold it at 300. The markup on adulterated product was the real profit." },
      { type: "closer", mainText: "A plant so valuable\nthat an empire fought\nto keep it alive\nwhile destroying\neverything around it.", subText: "Pliny, NH 12.111\u2013123." },
    ],
  },
  // 4. Nero's perfume funeral for Poppaea — ARTS OF VENUS — NH 12.83
  {
    id: "nero-poppaea-funeral",
    series: "ARTS OF VENUS",
    slides: [
      { type: "hook", topLine: "Nero et Poppaea", script: "non ferre tantum annuo fetu", mainText: "Nero burned a year's worth\nof frankincense\nin a single day.", subText: "It was a funeral." },
      { type: "body", mainText: "When Poppaea Sabina died in 65 CE, Nero didn't cremate her \u2014 that would have been Roman custom. He embalmed her body with spices and had it carried to the Mausoleum of Augustus. The frankincense burned at her funeral, Pliny says, exceeded Arabia's entire annual harvest: non ferre tantum annuo fetu, quantum Nero princeps novissimo Poppaeae suae die concremaverit." },
      { type: "body", mainText: "Pliny frames it as an indictment. Count up all the funerals across the whole world, he says \u2014 tot funera acervatimque congesta \u2014 and the incense piled on those pyres is a fraction of what the gods receive in single grains. The gods were appeased with salted flour. They were, Pliny adds, more favorable then: placatiores." },
      { type: "closer", mainText: "One woman's death.\nA whole country's harvest\nturned to smoke.", subText: "beatam illam fecit hominum\netiam in morte luxuria \u2014\n\"human luxury, even in death,\nmade Arabia rich.\"\n\nPliny, NH 12.83." },
    ],
  },
  // 5. The pepper trade: Rome's drain of gold — DEAD WORDS, LIVING SCENTS — NH 12.29
  {
    id: "piper-gold",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "piper", script: "pondere emitur ut aurum vel argentum", mainText: "Pepper was weighed\nlike gold.", subText: "And Pliny couldn't understand\nwhy anyone wanted it." },
      { type: "body", mainText: "Pliny is baffled. Other spices attract by sweetness or by appearance. Pepper has nothing: nec pomi nec bacae commendatio est aliqua \u2014 no beauty of fruit, no beauty of berry. The only thing it offers is bitterness. sola placere amaritudine \u2014 \"bitterness alone pleases.\" And for this, Romans send to India." },
      { type: "body", mainText: "He asks the question nobody else does: quis ille primus experiri cibis voluit? \u2014 \"who was the first person who wanted to try this in food?\" Who looked at a bitter seed and decided to eat it? Whose hunger wasn't satisfied by just being hungry? Pepper is sold by weight like precious metal. And yet it has already reached Italy, where a pepper tree now grows, larger than a myrtle." },
      { type: "closer", mainText: "Bitter, ugly, imported\nat the price of silver.", subText: "Rome couldn't explain the craving.\nIt couldn't stop it either.\n\nPliny, NH 12.29." },
    ],
  },
];
