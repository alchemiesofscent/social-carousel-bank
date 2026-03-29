// Draft: 2026-03-17-wp3
// Posts: 5
// Date: 2026-03-17

const DRAFT_CAROUSELS = [
  // 1. euodia / dysōdēs
  {
    id: "euodia-dysodes",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "euodia / dysōdēs", script: "εὐωδία / δυσώδης", mainText: "Ancient Greek had\ntwo words for smell.\nOne was a diagnosis.", subText: "The other was a cure." },
      { type: "body", mainText: "Euodia — \"good smell\" — was more than pleasant. For Dioscorides, it was proof. Light frankincense bark, and if it burns with euodia, it's genuine. The scent itself is the test result.", subText: "Fake frankincense burns without it." },
      { type: "body", mainText: "Dysōdēs — \"ill-smelling\" — was a clinical symptom. Bad breath. Rotting gums. Festering wounds. Dioscorides prescribes agallochum to cure dysodia of the mouth. The bad smell isn't just unpleasant. It's the disease." },
      { type: "closer", mainText: "Good scent proved\na substance was real.\nBad scent proved\na body was sick.", subText: "Smell wasn't aesthetic.\nIt was evidence." },
    ],
  },
  // 2. plēktikon
  {
    id: "plektikon",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "plēktikon", script: "πληκτικόν", mainText: "Dioscorides didn't say\ngood spices smelled nice.", subText: "He said they hit you." },
      { type: "body", mainText: "Plēktikon comes from plēssō — \"to strike, to smite.\" When Dioscorides grades malabathron — Indian bay leaf — the best is πληκτικὸν τῇ ὀσμῇ, \"striking in its smell.\" If the scent doesn't punch your nose, the goods are stale or fake." },
      { type: "body", mainText: "The companion test was fullness. Fresh peucedanum root should be πλήρη ὀσμῆς — \"full of smell.\" Vigorous. Saturated. The volatile oils haven't escaped yet. A spice that merely smells pleasant has already lost what made it medicine." },
      { type: "closer", mainText: "Freshness wasn't gentle.\nIt was violent.", subText: "A good spice struck first\nand lingered after." },
    ],
  },
  // 3. baryosmon / brōmōdēs
  {
    id: "baryosmon-bromodes",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "baryosmon", script: "βαρύοσμον", mainText: "\"Heavy-smelling.\"", subText: "In Dioscorides, this word\nalmost always means poison." },
      { type: "body", mainText: "Hemlock is baryosmon. Mandrake is baryosmon. Aloe is βαρύοσμος δὲ ὅλη καὶ ἀπογευομένῳ πικροτάτη — \"entirely heavy-smelling and exceedingly bitter to the taste.\" The word marks things that are dangerous, narcotic, or so pungent they overwhelm." },
      { type: "body", mainText: "Below baryosmon sits brōmōdēs — from bromos, \"a stench.\" This is biological rot: castoreum, foul minerals, cheap substitutes. The mineral sori is βρωμῶδες καὶ ἀνατρεπτικὸν στομάχου — \"foul-stinking and stomach-turning.\" If something smells brōmōdēs, don't buy it." },
      { type: "closer", mainText: "Two words for bad.\nOne meant dangerous.\nThe other meant wrong.", subText: "The nose sorted both." },
    ],
  },
  // 4. The -izō verbs and the adulteration nose
  {
    id: "izo-verbs-adulteration",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "nardizonta", script: "ναρδίζοντα", mainText: "To catch a fake,\nDioscorides invented\nsmell-verbs.", subText: "" },
      { type: "body", mainText: "Greek lets you turn any noun into a verb with -izō. Dioscorides uses this constantly. Phu root should be nardizonta — \"narding,\" smelling of nard. The best cinnamon is pēganizō — \"rue-ing,\" smelling of rue. Onyx shells when burned are kastorizō — \"castoring.\"" },
      { type: "body", mainText: "These aren't metaphors. They're quality controls. If a dealer says this root is nard and it doesn't nardizō, it's adulterated. And when a substance fails the smell test entirely, the fix is apoballō tēn dysodia — \"casting off the stink.\" Beef fat for perfumery must be boiled and sun-bleached until it sheds its animal smell completely." },
      { type: "closer", mainText: "The language itself\nwas a testing kit.", subText: "Every scent comparison\nwas a pass/fail." },
    ],
  },
  // 5. Filling the nose: olfactory fatigue, breathing scent, smelling as medicine
  {
    id: "filling-the-nose",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "plērounta tēn osphrēsin", script: "πληροῦντα τὴν ὄσφρησιν", mainText: "Dioscorides knew\nyour nose could\nstop working.", subText: "He had a word for it." },
      { type: "body", mainText: "When grading cinnamon, he warns: the best fragments are peripneonta kai plērounta tēn osphrēsin — \"breathing around and filling the sense of smell.\" They saturate your nose so completely that you lose the ability to judge the weaker pieces. Start with the lesser grades, or you'll misjudge everything." },
      { type: "body", mainText: "That word peripneonta — \"breathing around\" — reveals how Dioscorides understood scent. Good spices don't passively sit there. They exhale. The best iris perfume πνέον — \"breathes\" — of nothing but iris. Scent is an active force, pushing itself into the air." },
      { type: "body", mainText: "And the nose could push back. Sagapenum mixed with vinegar rouses women from fainting fits ὀσφραινόμενον — \"when smelled.\" Smelling wasn't passive perception. It was a route of drug administration, as real as swallowing." },
      { type: "closer", mainText: "The spice breathes out.\nThe nose takes it in.\nMedicine happens\nin the space between.", subText: "" },
    ],
  },
];
