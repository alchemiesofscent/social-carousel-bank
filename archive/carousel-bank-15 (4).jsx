import { useState } from "react";

const FONT_LINK = "https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap";
if (typeof document !== "undefined" && !document.querySelector(`link[href="${FONT_LINK}"]`)) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = FONT_LINK;
  document.head.appendChild(link);
}

const CAROUSELS = [
  {
    id: "nenib",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "nnjb", script: "𓈖𓈖𓇋𓃀", mainText: "Everyone calls this word\n\"styrax.\"", subText: "It probably isn't." },
      { type: "body", mainText: "In 1881, a scholar matched the sounds of this Egyptian word to a Hebrew word and an Arabic word that might refer to styrax-producing trees.", subText: "That's how the identification stuck — for 140 years." },
      { type: "body", mainText: "But the temple texts at Edfu don't describe a resin. They describe wood. Black wood. Red wood. White wood.", subText: "They tell you what color it is when you cut it. What it smells like. What god's eye it came from." },
      { type: "body", mainText: "The Egyptians weren't classifying plants by species. They were classifying by scent, color, season, and divinity.", subText: "A completely different way of organizing the natural world." },
      { type: "closer", mainText: "We don't know\nwhat nenib was.", subText: "But we're getting closer to knowing what it wasn't.\n\nMore from the Edfu laboratory inscriptions soon." },
    ],
  },
  {
    id: "seth",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "kheskhes", script: "𓐍𓋴𓐍𓋴", mainText: "Some ingredients were\nbanned from temples.", subText: "Not because they smelled bad.\nBecause of whose body they came from." },
      { type: "body", mainText: "At Edfu, after listing the aromatic woods approved for sacred ointments, the text keeps going — and tells you which ones to reject." },
      { type: "body", mainText: "One is called kheskhes. The inscription says it's \"bad in all respects.\" Its color is reddish — \"like the one from whom it comes.\"", subText: "That one is Seth. God of chaos, storms, and disorder." },
      { type: "body", mainText: "The text doesn't say this wood smells bad. It says its scent comes from the stench of Seth himself.", subText: "The reason to reject it isn't contamination. It's theology." },
      { type: "closer", mainText: "The Egyptians didn't just sort perfume ingredients by quality.", subText: "They sorted them by divinity.\n\nFrom the Nenib-list, Edfu temple laboratory." },
    ],
  },
  {
    id: "sousinon",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "sousinon", script: "σούσινον", mainText: "The Greeks had a\nperfectly good\nword for lily.", subText: "They didn't use it." },
      { type: "body", mainText: "Greek lily perfume — one of the most common in the ancient Mediterranean — wasn't called krinon perfume. It was called sousinon.", subText: "That word isn't Greek." },
      { type: "body", mainText: "It probably comes from the Egyptian zšn, meaning lotus or lily. We can see it in reliefs at the Louvre showing women collecting lilies and pressing them into oil." },
      { type: "body", mainText: "The Egyptian perfume tradition was so dominant that the Greeks just borrowed the name. Like how we say 'sake' or 'kimchi' — the word traveled with the thing." },
      { type: "closer", mainText: "Some words carry the\nauthority of their origin.", subText: "Sousinon was one of them." },
    ],
  },
  {
    id: "foliatum",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "foliatum", script: "φουλιάτα", mainText: "Rome's most expensive\nplague perfume.", subText: "It didn't work." },
      { type: "body", mainText: "Around 180 CE, plague hit Rome. 2,000 people a day were dying. Doctors told citizens to stuff perfume into their noses and ears to block the corrupted air." },
      { type: "body", mainText: "One perfume they used was foliatum — named for the leaf of spikenard, sourced from the Himalayas. Its ingredients came from India, Arabia, and East Africa." },
      { type: "body", mainText: "The historian Herodian adds a detail that's easy to miss: none of it worked. The people kept dying.", subText: "But the emperor, in his laurel grove? He survived." },
      { type: "closer", mainText: "The scent you had\naccess to said something\nabout your place\nin the world.", subText: "It still does." },
    ],
  },
  {
    id: "tanetjer",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "tꜢ-nṯr", script: "𓇾𓊹", mainText: "\"The Divine Land.\"", subText: "It wasn't a real place." },
      { type: "body", mainText: "When Egyptian temple texts describe where sacred aromatics come from, they often say \"Punt\" or \"Ta-Netjer\" — the Divine Land." },
      { type: "body", mainText: "Scholars spent decades trying to pin these on a map. But in the inscriptions, they don't behave like geography. They behave like theology." },
      { type: "body", mainText: "Saying your incense comes from the Divine Land is like saying your relic comes from heaven. It doesn't tell you where it was harvested. It tells you why it matters." },
      { type: "closer", mainText: "If the \"where\" in a\nrecipe is symbolic —", subText: "how much of the \"what\" is too?\n\nWe're still working through this." },
    ],
  },
  {
    id: "antu",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Ꜥnt.w", script: "𓂝𓈖𓏏𓅱", mainText: "Everyone translates\nthis as \"myrrh.\"", subText: "It's more complicated than that." },
      { type: "body", mainText: "The temple walls at Edfu list 14 varieties of antu. They come in different colors, different textures, from different gods' bodies. Some are banned from ritual use." },
      { type: "body", mainText: "Recent chemical analysis of jars labeled 'antu' found animal fat, bitumen, and plant resins — but no trace of compounds we associate with myrrh." },
      { type: "body", mainText: "Antu isn't a species. It's a category — a class of scented materials used for making sacred ointments, grouped by function, not by botany." },
      { type: "closer", mainText: "What we call \"myrrh\"\nand what they called antu\nmay not overlap at all.", subText: "From the Antu-list, Edfu temple." },
    ],
  },
  {
    id: "knisa",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "knisa", script: "κνίση", mainText: "The scent the\ngods ate.", subText: "It wasn't incense." },
      { type: "body", mainText: "In Homer, when Greeks sacrifice an animal, the smoke rises to the gods. The word for that scent is knisa — the smell of fat and meat roasting on an altar fire." },
      { type: "body", mainText: "Ancient poets describe it as pleasant. But the full smellscape of a sacrifice would have included blood, opened intestines, and ammonia from the bladder." },
      { type: "body", mainText: "Literary sources almost never mention the unpleasant smells. Maybe they weren't important. Or maybe they were so obvious nobody needed to say it." },
      { type: "closer", mainText: "The divine portion\nsmelled like a barbecue.", subText: "The rest of it didn't.\n\nFrom 'Gut Scent: The Smell of Guts.'" },
    ],
  },
  {
    id: "aromata",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "aromata", script: "ἀρώματα", mainText: "The ancient Greek word\nfor \"spice\" was actually\na prescription.", subText: "" },
      { type: "body", mainText: "Aromata in Dioscorides and Galen wasn't just a word for nice-smelling things. It named a specific pharmacological class: drugs that heal through scent." },
      { type: "body", mainText: "Galen says aromata work by dissolving and dispersing fluid that has accumulated in the body. They're all \"subtle, able to dry, and accompanied by an ability to heat.\"" },
      { type: "body", mainText: "Not all fragrant things qualified. Thyme is fragrant but it's not an aroma. Marjoram perfume is, but marjoram the herb isn't. The category was specific." },
      { type: "closer", mainText: "We inherited the word.\nWe lost the meaning.", subText: "From 'The Perfumer's Garden.'" },
    ],
  },
  {
    id: "psagdan",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "psagdan", script: "ψαγδάν", mainText: "A 2,400-year-old insult\nthat tells us what\nAthens smelled like.", subText: "" },
      { type: "body", mainText: "The comic poet Eupolis describes a man \"wearing signet rings and reeking of psagdan.\" It's a perfume name — probably borrowed from Egyptian." },
      { type: "body", mainText: "Psagdan shows up alongside other Egyptian-style perfumes in Athenian comedy. Men used it at drinking parties. Perfume shops were social hubs." },
      { type: "body", mainText: "But philosophers hated it. Zeno of Citium said perfume shops were like brothels. Xenophon's Socrates said no man should use perfume at all." },
      { type: "closer", mainText: "A word that crossed\nfrom Egypt to Athens\nto insult comedy.", subText: "And it tells us perfume was political." },
    ],
  },
  {
    id: "sal",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "sal / ḫr", script: "𓐍𓂋", mainText: "Plutarch thought the\nEgyptian word for myrrh\nwas a medical diagnosis.", subText: "" },
      { type: "body", mainText: "Writing about Egyptian temple rituals, Plutarch claims myrrh is called \"sal\" in Egyptian, which he says means \"breaking up of congestion.\"" },
      { type: "body", mainText: "He's trying to prove Aristotle's theory that fragrance heats the brain. And he's using an Egyptian word to do it — validating Greek philosophy with Egyptian practice." },
      { type: "body", mainText: "Whether the etymology is right (scholars connect it to demotic ḫr), the move itself is remarkable. Two knowledge systems, linked through a single word." },
      { type: "closer", mainText: "Sometimes an etymology\nis an argument\nin disguise.", subText: "From Plutarch, De Iside et Osiride." },
    ],
  },
  {
    id: "eudaimon",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Arabia Felix", script: "Εὐδαίμων Ἀραβία", mainText: "The happiest place\nin the ancient world\nsmelled so good\nit made people ill.", subText: "" },
      { type: "body", mainText: "Arabia Felix — literally \"Happy Arabia\" — was said to be filled with the scent of myrrh, frankincense, cinnamon, and cassia. The fragrance reached sailors offshore." },
      { type: "body", mainText: "But according to Agatharchides and Diodorus, the inhabitants were wasting away. Too much pleasant scent was disrupting the balance of their bodies." },
      { type: "body", mainText: "Their remedy? Burning goat's beard and bitumen — foul-smelling substances — to counterbalance the overwhelming pleasantness." },
      { type: "closer", mainText: "Even paradise had\na dosage problem.", subText: "The ancients took moderation seriously.\nEven with good smells." },
    ],
  },
  {
    id: "scratchandsniff",
    series: "FROM THE WORKSHOP",
    slides: [
      { type: "hook", topLine: "olfactory figures", script: "✦", mainText: "We published a\nscratch-and-sniff\nacademic paper.", subText: "Here's why." },
      { type: "body", mainText: "For a journal article about plague remedies in ancient Rome, we reconstructed two scents: one for the emperor's laurel grove, one for the citizens' perfume." },
      { type: "body", mainText: "The idea isn't to \"smell the past.\" It's to find a common reference point — the same molecules our noses react to today that ancient noses reacted to then." },
      { type: "body", mainText: "The emperor's scent: laurel, pine, cypress, sea breeze. The citizens' scent: spikenard, costus root, myrrh, lemongrass, cardamom. Both from Pliny and Galen." },
      { type: "closer", mainText: "When your associations\ndiffer from the source's —", subText: "that's where the history starts.\n\nRavat, Prieto Pabón & Coughlin, 2024." },
    ],
  },
  {
    id: "ahem",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "ahem", script: "ꜣhm", mainText: "A resin born from\na goddess.", subText: "The text gets strange here." },
      { type: "body", mainText: "In the Antu-list at Edfu, one entry — ahem — is described as coming into existence in the vulva of the Female Falcon, after her heart had \"suffered through Punt.\"" },
      { type: "body", mainText: "The material itself is described as red outside, bright and soft inside. When it dries, its liquid crystallizes on the surface. Two chicks of the Benu bird are \"found inside it.\"" },
      { type: "body", mainText: "Is this a resin description wrapped in mythology? A creation story doubling as a quality test? Honestly, we're not sure. The text is one of the most obscure we've encountered." },
      { type: "closer", mainText: "Not every ancient text\ngives us answers.", subText: "Some just give us better questions.\n\nFrom the Antu-list, Edfu." },
    ],
  },
  {
    id: "laboratory",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "jz", script: "𓇋𓊃", mainText: "The \"laboratory.\"", subText: "A room in a temple dedicated entirely to scent." },
      { type: "body", mainText: "At the Edfu temple, a small room off the inner hall was called the jz — the laboratory. Its walls are covered in recipes, ingredient lists, and ritual instructions for making sacred ointments." },
      { type: "body", mainText: "It's not a lab in our sense. It's a space where material preparation and divine worship are the same act. The recipes are embedded inside scenes of the king worshipping gods." },
      { type: "body", mainText: "The ingredients are described as coming from the bodies of deities — their eyes, limbs, bones. Making an ointment here isn't chemistry. It's reassembling a god." },
      { type: "closer", mainText: "The recipe is the ritual.\nThe ritual is the recipe.", subText: "From the Edfu temple laboratory inscriptions." },
    ],
  },
  {
    id: "mendesian",
    series: "FROM THE WORKSHOP",
    slides: [
      { type: "hook", topLine: "Mendesian", script: "✦", mainText: "We're reconstructing\nan Egyptian perfume\nthat hasn't been made\nin 2,000 years.", subText: "" },
      { type: "body", mainText: "The Mendesian comes from the city of Mendes in the Nile Delta. Its ingredients according to Dioscorides and Paul of Aegina: balanos oil, myrrh, cassia, and terebinth resin." },
      { type: "body", mainText: "It was one of the most famous perfumes of the ancient Mediterranean. Pliny mentions it. Theophrastus discusses variants of it. Multiple Greek authors reference it by name." },
      { type: "body", mainText: "We're working from the ancient recipes over the next months — sourcing ingredients, testing processes, documenting failures. We'll share the whole thing here as we go." },
      { type: "closer", mainText: "Follow along if you\nwant to watch us try\nto make something\nno one alive has smelled.", subText: "First experiments coming soon." },
    ],
  },
  {
    id: "lucian-smoke",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "kapnos", script: "καπνός", mainText: "On the moon,\npeople eat smoke.", subText: "Lucian meant it as a joke.\nBut the idea isn't his." },
      { type: "body", mainText: "In Lucian's True History — a 2nd-century satire — he visits the moon. The people there roast frogs on coals and sit around the smoke \"as if at a table,\" swallowing the fumes as food." },
      { type: "body", mainText: "Their drink is air squeezed into a cup until it condenses like dew. They don't excrete. When they grow old, they don't die — they dissolve into smoke." },
      { type: "body", mainText: "Lucian is making fun of travel writers. But feeding on smoke echoes a real ancient idea: that scent is a form of nourishment. In Homer, the gods feed on knisa. In Egypt, gods live from the fragrance of offerings." },
      { type: "closer", mainText: "The satire only works\nif the audience already\nbelieves scent can feed you.", subText: "Lucian, True History 1.23." },
    ],
  },
  {
    id: "heraclitus",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "rhines", script: "ῥῖνες", mainText: "\"If all things became\nsmoke, the nose\nwould discern them.\"", subText: "— Heraclitus, c. 500 BCE" },
      { type: "body", mainText: "This is one of the strangest fragments from early Greek philosophy. Heraclitus seems to be saying that smell is the most fundamental sense — the one that works even when everything else is destroyed." },
      { type: "body", mainText: "Aristotle quotes it in a discussion about whether smell works like touch (direct contact with particles) or like vision (acting at a distance). Heraclitus seems to side with the first camp." },
      { type: "body", mainText: "If everything were reduced to smoke, you couldn't see it or hear it. But you could still smell it. The nose, for Heraclitus, is the last sense standing." },
      { type: "closer", mainText: "2,500 years old.\nStill unanswered.", subText: "Reported in Aristotle, On Sense 5, 443a24." },
    ],
  },
  {
    id: "gender-perfume",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Theophrastus", script: "✦", mainText: "Ancient men and women\nwore different perfumes.", subText: "Not for the reason you'd think." },
      { type: "body", mainText: "Theophrastus says light perfumes — rose, henna flower, lily — suit men best. Women prefer heavy ones: myrrh perfume, Megaleion, the Egyptian. His reason? Tenacity." },
      { type: "body", mainText: "He claims women want scents that last longer. The resin-based perfumes evaporate more slowly. Men's floral scents are milder, more fleeting." },
      { type: "body", mainText: "But other sources disagree. Comic poets show men drenched in Egyptian perfume at drinking parties. Antiphanes describes a woman using five different perfumes — including thyme, which Theophrastus assigns to nobody." },
      { type: "closer", mainText: "Ancient perfume\nhad gender politics.", subText: "And nobody agreed on the rules.\n\nTheophrastus, On Odours 42–43." },
    ],
  },
  {
    id: "perfume-shops",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "myropōleion", script: "μυροπωλεῖον", mainText: "Perfume shops were\nthe coffee shops\nof ancient Athens.", subText: "" },
      { type: "body", mainText: "Pherecrates, a comic poet, complains: \"What could a man be thinking to sell perfume while sitting under a parasol, furnishing a gathering-place for young men to chat all day?\"" },
      { type: "body", mainText: "Demosthenes went the other direction. He prosecuted a politician partly by arguing the man was antisocial because he never visited perfume shops." },
      { type: "body", mainText: "Philosophers hated them. Zeno called them places \"where men dressed like prostitutes pass the entire day as if sitting in a brothel.\" The culture war over perfume was real." },
      { type: "closer", mainText: "Where you bought\nyour scent was a\npolitical statement.", subText: "Some things don't change." },
    ],
  },
  {
    id: "aristotle-nose",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Aristotle", script: "✦", mainText: "Aristotle thought\nflowers exist\nto keep us healthy.", subText: "" },
      { type: "body", mainText: "In On Sense and Sensible Objects, Aristotle argues that humans have a unique ability to smell things that are pleasant \"in themselves\" — like flowers. Animals can only smell food." },
      { type: "body", mainText: "Why do we have this ability? Because our brains are too big and too cold. The moisture that accumulates makes us prone to head colds. Pleasant scents warm and dry the brain." },
      { type: "body", mainText: "So flower fragrance isn't just enjoyable. It's medicine. And unpleasant smells — sulphur, bitumen — are warning signs. The nose is a health instrument." },
      { type: "closer", mainText: "Next time you smell\na flower, Aristotle would\nsay it's keeping you alive.", subText: "Aristotle, On Sense 5, 444a8–19." },
    ],
  },
  {
    id: "stakte",
    series: "FROM THE WORKSHOP",
    slides: [
      { type: "hook", topLine: "staktē", script: "στακτή", mainText: "The liquid inside myrrh.", subText: "We're trying to press it out." },
      { type: "body", mainText: "Ancient sources describe a process: take fresh myrrh resin, press it, and a liquid fraction separates out. The Greeks called this staktē. It was considered the finest form of myrrh." },
      { type: "body", mainText: "For decades, modern scholars said this was impossible — you'd need a solvent, an oil, something to extract the liquid. The resin is too dry." },
      { type: "body", mainText: "Recent experiments suggest it actually works. Fresh Commiphora myrrh, under pressure, does yield a liquid. It doesn't work with Pistacia or other resins. The ancients may have been describing exactly what they did." },
      { type: "closer", mainText: "Sometimes the simplest\nreading of an ancient text\nis the right one.", subText: "Experiments in progress. Results soon." },
    ],
  },
  {
    id: "commodus-laurel",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Laurentum", script: "δάφνη", mainText: "The emperor's plague\nremedy was a garden.", subText: "Everyone else got perfume." },
      { type: "body", mainText: "When plague hit Rome around 190 CE, Emperor Commodus fled to Laurentum — a coastal town named for its laurel groves. His doctors said the fragrance would protect him." },
      { type: "body", mainText: "But laurel wasn't just medicine. It was the tree of Apollo, the healing god. It was the symbol of imperial power since Augustus. The grove was divine protection made literal." },
      { type: "body", mainText: "Herodian, who tells this story, isn't writing a medical report. He's using scent as a symbol. The emperor gets sacred trees. The people get commercial perfume. Only one works." },
      { type: "closer", mainText: "The story isn't about\nwhat cures plague.", subText: "It's about who gets to survive it.\n\nHerodian, History 1.12." },
    ],
  },
  {
    id: "edfu-trees",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Athribis", script: "𓆭", mainText: "At one temple, they\nreplaced the offering\nbearers with trees.", subText: "" },
      { type: "body", mainText: "At Athribis, where the walls usually show human figures carrying offerings to the gods, the \"Punt Hall\" shows something different: trees. Each one labeled with a different aromatic material." },
      { type: "body", mainText: "The antu trees look like sycamores — visually similar to Commiphora species. The nenib trees look like acacias. Two different visual types for two different categories of sacred substance." },
      { type: "body", mainText: "These aren't botanical illustrations. They're theological statements. The trees represent divine emanations — materials that came from the eyes, limbs, and bones of gods." },
      { type: "closer", mainText: "The Egyptians didn't just\nlist their ingredients.", subText: "They drew their family trees.\n\nFrom the Punt Hall, Athribis temple." },
    ],
  },
  {
    id: "mamam",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "mamam", script: "mꜤmꜢꜤm", mainText: "A resin that swallows\nits own liquid\nin sunlight.", subText: "" },
      { type: "body", mainText: "Entry 6 in the Antu-list describes a resin called mamam. Its color is like carnelian. Its smell is \"very sweet.\" And it has a strange property: it absorbs its own moisture when exposed to the sun." },
      { type: "body", mainText: "It's also called nehed — a word that sounds like \"Mamali,\" an incense-producing region in South Arabia mentioned by Theophrastus. In modern Somali, myrrh is still called \"malmal.\"" },
      { type: "body", mainText: "Is that a coincidence? Maybe. We're wary of matching words across languages and centuries. But the physical description — red, sweet-smelling, self-drying — fits certain myrrh resins closely." },
      { type: "closer", mainText: "The name might be\na 3,000-year-old\ntrade route, preserved\nin a single word.", subText: "Or it might not. That's where we are.\n\nAntu-list, entry 6." },
    ],
  },
  {
    id: "hedju",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "hedju", script: "ḥḏ.w", mainText: "Not a name.\nA quality grade.", subText: "" },
      { type: "body", mainText: "Several entries in the Antu-list say \"this is hedju.\" It's usually translated as \"aromatic resin\" or even \"styrax.\" But it keeps appearing across different entries — entries that clearly describe different materials." },
      { type: "body", mainText: "That's the clue. Hedju isn't a species. It's a category — something like \"first-grade resin.\" The best part is on top, the second quality underneath. It's a grading system, not an identification." },
      { type: "body", mainText: "In entry 4, the text even specifies: hedju comes from the bones of the divine body. It's being classified by divine origin and quality, not by what tree it dripped from." },
      { type: "closer", mainText: "When a word keeps\nshowing up in places\nit shouldn't —", subText: "it's probably not a noun.\nIt's a label.\n\nAntu-list, entries 4, 5, 7." },
    ],
  },
  {
    id: "mesha-ib",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "mesha-ib", script: "mšꜤ-jb", mainText: "Press this resin\nthrough a bag.\nOne quarter comes\nout as liquid.", subText: "" },
      { type: "body", mainText: "Entry 8 in the Antu-list describes a resin from \"Kemati-land.\" It's red, soft inside, very sweet-smelling. And then it gives an instruction: press it through a cloth bag. A quarter of it comes out as liquid." },
      { type: "body", mainText: "This matches what Greek sources call staktē — the liquid pressed from fresh myrrh. For decades, scholars argued this was impossible without a solvent." },
      { type: "body", mainText: "Recent experiments show it works. Fresh Commiphora myrrh under pressure yields liquid. It doesn't work with other resins like Pistacia. The Egyptian and Greek texts may describe the same real process." },
      { type: "closer", mainText: "An Egyptian recipe.\nA Greek product name.\nThe same technique,\nseen from two sides.", subText: "Antu-list, entry 8." },
    ],
  },
  {
    id: "ht-km",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "ḫt km", script: "𓆭𓆰", mainText: "\"Black wood.\"", subText: "Its front is black.\nIts middle is grey.\nIts back is white." },
      { type: "body", mainText: "The first entry in the Nenib-list describes a wood with three color zones. When you cut into it, the fresh surface looks like the wing of a golden oriole — flashing gold and red." },
      { type: "body", mainText: "Its scent is compared to tisheps — itself an unidentified aromatic wood, possibly a type of cinnamon or camphor, imported from Lebanon as early as the Middle Kingdom." },
      { type: "body", mainText: "The text says this wood \"came forth from the iris-with-pupil of the Eye of Ra.\" The color description is precise. The origin story is theological. Both are treated as equally real information." },
      { type: "closer", mainText: "Science and religion\nweren't separate categories.", subText: "The color of the wood and the eye of the god\nwere the same kind of fact.\n\nNenib-list, entry 1." },
    ],
  },
  {
    id: "kaheb",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "kaheb", script: "kꜢhb", mainText: "A tree that changes\ncolor with the seasons.", subText: "And smells like the gods." },
      { type: "body", mainText: "Entries 10–11 in the Nenib-list describe a wood called kaheb. It's black in winter, red in summer. When its leaves fall off completely, the material left behind is called hekenu — a sacred ointment ingredient." },
      { type: "body", mainText: "Its scent is described as \"like antu\" — connecting it back to the resin list. Trees that shed leaves seasonally and produce aromatic resins include Boswellia and Commiphora species." },
      { type: "body", mainText: "At Edfu, this wood is linked to Sekhmet and excluded from temple use. At Athribis, the same material is linked to Horus and apparently included. Same substance, different theological verdict." },
      { type: "closer", mainText: "Whether an ingredient\nwas sacred or forbidden\ndepended on which\ntemple you were in.", subText: "Nenib-list, entries 10–11." },
    ],
  },
  {
    id: "metut-desher",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "metut-desher", script: "mtwt-dšr", mainText: "A wood from Punt\nthat can't be peeled.", subText: "And shouldn't be used in the temple." },
      { type: "body", mainText: "Entry 7 in the Nenib-list describes a black wood called metut-desher — literally \"red seed\" or \"red fluid.\" It grows on the flood plains or marshes, \"at the place of Punt.\"" },
      { type: "body", mainText: "Its wood resembles the senetjer-tree. When it grows tall, it turns red. But it can't be peeled — which matters, because peeling bark is how you access the aromatic material inside many woods." },
      { type: "body", mainText: "Despite looking like senetjer — a material closely linked to temple use — metut-desher is explicitly banned. It's the Eye of Seth. Resemblance to a sacred material isn't enough. The divine source disqualifies it." },
      { type: "closer", mainText: "It looks right.\nIt smells right.\nBut it comes from\nthe wrong god.", subText: "Nenib-list, entry 7." },
    ],
  },
  {
    id: "balanos-oil",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "elaion balaninou", script: "ἔλαιον βαλανίνου", mainText: "The best perfume oil\nwas the one that\nsmelled like nothing.", subText: "" },
      { type: "body", mainText: "Theophrastus says the whole point of perfume-making is to store scent in oil. So you want an oil that accepts scent and holds it — not one that competes." },
      { type: "body", mainText: "The winner: balanos oil, pressed from the Egyptian and Syrian ben-nut. It's the least greasy of all oils, which means it absorbs fragrance the deepest and holds it the longest." },
      { type: "body", mainText: "Olive oil from unripe olives works too — but only if it's fresh. Over a year old, it thickens, turns greasy, and becomes useless. Sesame oil is the worst: heat it and it reeks of sesame, as if the oil were dissolving back into the seed." },
      { type: "body", mainText: "The logic is counterintuitive. Greasy oils feel rich, but they're bad carriers. The oil's own fat fills the pores and blocks incoming scent. The driest, thinnest, blandest oil makes the best perfume.", subText: "It's exactly like mordanting in dyeing — the base has to be empty to receive color." },
      { type: "closer", mainText: "The foundation of every\nancient perfume\nwas an oil chosen\nfor its absence.", subText: "Theophrastus, On Odours 14–20." },
    ],
  },
  {
    id: "shelf-life",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "polychroniotaton", script: "πολυχρονιώτατον", mainText: "One perfume lasted\ntwenty years.", subText: "Most didn't survive two months." },
      { type: "body", mainText: "Theophrastus reports that a perfume seller claimed to have iris perfume that was twenty years old — and still better than fresh batches. Egyptian perfume lasted eight years. Staktē lasted indefinitely." },
      { type: "body", mainText: "Floral perfumes were the opposite. Rose, lily, henna flower — they peaked at two months and declined within a year. When the season of the flower came back around, the perfume decayed in sympathy." },
      { type: "body", mainText: "The rule: root-based and resin-based perfumes last. Flower-based perfumes don't. The scent from roots is denser, stronger, more bodied. Floral scent is thin and volatile — easy to breathe off, easy to lose." },
      { type: "closer", mainText: "The ancients stored\nperfume in lead vessels\nand alabaster jars.", subText: "Cold. Dense. Sealed against air and light.\nSame logic as a wine cellar.\n\nTheophrastus, On Odours 38–41." },
    ],
  },
  {
    id: "last-added",
    series: "THE NOSE KNOWS",
    slides: [
      { type: "hook", topLine: "epikratei to eschaton", script: "ἐπικρατεῖ τὸ ἔσχατον", mainText: "The last ingredient\nalways wins.", subText: "Even if you add less of it." },
      { type: "body", mainText: "Theophrastus describes a principle every ancient perfumer knew: if you add a mina of myrrh to a jar and then drop in two drachmas of cinnamon, the cinnamon dominates. The last thing added overpowers everything before it." },
      { type: "body", mainText: "Why? Because the earlier aromatics have already done their job — they've absorbed the oil's grease and opened its pores. The oil is now empty and receptive. Whatever arrives last meets no resistance." },
      { type: "body", mainText: "This is why perfumers \"mordant\" the oil first with weaker spices before adding the keynote scent. The cheap aromatics break the oil in. The expensive ones — cinnamon, myrrh — go last, into a surface that's already prepared.", subText: "The analogy Theophrastus uses: it's like dyeing wool. You treat the fiber before you add the color." },
      { type: "closer", mainText: "Ancient perfumery wasn't\njust chemistry.", subText: "It was sequencing.\n\nTheophrastus, On Odours 17–19." },
    ],
  },
  {
    id: "roots-vs-flowers",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "rhizai / anthē", script: "ῥίζαι / ἄνθη", mainText: "Flowers smell best\nat a distance.\nRoots smell best\nwhen crushed.", subText: "" },
      { type: "body", mainText: "Theophrastus noticed something strange: flowers project their scent far but lose it when you rub them. Roots and resins barely smell at all until you grind, cut, or heat them — then they're overwhelming." },
      { type: "body", mainText: "His explanation: flowers are porous. Their scent sits on the surface. It escapes easily, travels far, but is fragile. Roots and bark are dense. Their scent is locked inside. You have to break them open to release it." },
      { type: "body", mainText: "Frankincense and myrrh are even denser — they need gentle fire to open up. Crush them without heat and you'll get scent, but it won't be the same: not as pleasant, not as controlled. Fire releases what grinding can't.", subText: "That's why incense exists." },
      { type: "closer", mainText: "The deeper the scent\nis buried in the material,\nthe longer it lasts\nonce released.", subText: "Theophrastus, On Odours 12–13." },
    ],
  },
  {
    id: "thasian-wine",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "oinos", script: "οἶνος", mainText: "The best wine in Athens\nhad perfume in it.", subText: "And honey. And dough." },
      { type: "body", mainText: "Theophrastus describes a famous wine served in the prytaneion at Thasos — the civic dining hall. It was \"wonderfully pleasant.\" The secret: they put a lump of dough kneaded with honey into the wine jar." },
      { type: "body", mainText: "The wine picked up sweetness from the dough and fragrance from itself. Two senses — taste and smell — working together. Theophrastus says this is why perfume improves wine but ruins food: wine touches your tongue and moves on. Food lingers." },
      { type: "body", mainText: "Perfume's own flavor is astringent and slightly bitter — every aromatic substance is. You don't notice it in wine because the contact is brief. In food, you chew it, and the bitterness emerges.", subText: "The pleasant scent and the unpleasant taste are the same substance." },
      { type: "closer", mainText: "Wine, Theophrastus says,\nis \"terribly good\"\nat absorbing scent.", subText: "That's a feature, not a flaw.\n\nTheophrastus, On Odours 10–11, 51." },
    ],
  },
  {
    id: "perfumers-wrist",
    series: "FROM THE WORKSHOP",
    slides: [
      { type: "hook", topLine: "karpos tēs cheiros", script: "καρπὸς τῆς χειρός", mainText: "Perfume smells best\non the wrist.", subText: "Theophrastus explains why." },
      { type: "body", mainText: "Perfume sellers in Athens applied their samples to the customer's wrist — the \"fruit of the hand.\" Theophrastus says this is the universal custom, and asks: why there?" },
      { type: "body", mainText: "His answer: heat alters scent. The warmest parts of the body distort the fragrance. The wrist is cool, and the scent reaches your nose before body heat has time to change it. The sensation is \"quicker\" — more accurate." },
      { type: "body", mainText: "He also notes something perfumers still argue about: people who rarely wear perfume smell better in it than people who wear it daily. The habitual wearer's skin is saturated with competing scents. The newcomer's skin is clean — it receives and projects a single fragrance clearly." },
      { type: "closer", mainText: "The best surface\nfor perfume\nis one that hasn't\nbeen wearing any.", subText: "Theophrastus, On Odours 53–54." },
    ],
  },
  {
    id: "cassia-cinnamon",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "kasia / kinamōmon", script: "κασία / κινάμωμον", mainText: "Cassia and cinnamon\nwere the two most\nexpensive spices\nin the ancient world.", subText: "Nobody could tell them apart." },
      { type: "body", mainText: "Theophrastus describes their properties side by side. Cinnamon: moderate sharpness, moderate heat. Cassia: exceeds cinnamon in heat, sharpness, and astringency. Both are hot. Both are pungent. Both are imported from the same vague \"East.\"" },
      { type: "body", mainText: "In perfumery, two drachmas of cinnamon could overpower an entire mina of myrrh. Cassia was even stronger. But the real problem wasn't potency — it was identification. Ancient sources routinely confuse the two." },
      { type: "body", mainText: "Pliny would later complain that traders invented elaborate fake origin stories — cinnamon guarded by giant birds, cassia growing in swamps defended by winged snakes. The confusion was profitable. If buyers can't distinguish the goods, sellers set the price." },
      { type: "closer", mainText: "The ancient cinnamon trade\nran on mystery.", subText: "Deliberate mystery.\n\nTheophrastus, On Odours 32." },
    ],
  },
  {
    id: "smell-of-nothing",
    series: "THE NOSE KNOWS",
    slides: [
      { type: "hook", topLine: "diapasma", script: "διάπασμα", mainText: "How to make a scent\nthat smells like\neverything and nothing\nat once.", subText: "" },
      { type: "body", mainText: "Theophrastus describes an unusual practice: perfumers making dry powder blends would crush many aromatics together, seal the mixture in a box, then open it days later. Whatever scent dominated, they removed it." },
      { type: "body", mainText: "They repeated this — open, identify the strongest note, extract it — until no single ingredient stood out. The goal was a scent that belonged to no one material. A composite smell. \"They seek and strive,\" he says, \"to make the scent common to all, not of one.\"" },
      { type: "body", mainText: "For liquid perfumes, the rule is the opposite: the last ingredient always dominates. But for dry blends, the more ingredients you add, the better. The complexity itself becomes the scent. No single voice should be heard above the choir." },
      { type: "closer", mainText: "One tradition says:\nlet the last note win.\nThe other says:\nlet no note win.", subText: "Two opposite principles.\nSame craft.\n\nTheophrastus, On Odours 57, 69." },
    ],
  },
  {
    id: "smyrna-grades",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "smyrna", script: "σμύρνα", mainText: "Dioscorides lists\nsix grades of myrrh.", subText: "Only one is worth buying." },
      { type: "body", mainText: "The best is Troglodyte myrrh — named for the coastal people south of Egypt. It's pale green, sharp on the tongue, translucent. When you break it open, there are white, nail-shaped streaks inside, smooth and layered." },
      { type: "body", mainText: "Then the grades descend: Gabirean, from rich soil, very oily. A thin, soft variety ranked just below Troglodyte. Kausalis — overripe, black, reflective. And at the bottom: \"ergasimē\" — literally \"workable\" — crumbly, dry, no oil, sharp. The cheapest." },
      { type: "body", mainText: "The test Dioscorides gives: good myrrh should be fresh, brittle, light, uniform in color, small-clumped, bitter, fragrant, pungent, warming. If it's heavy and pitch-colored, reject it.", subText: "And watch for fakes: dealers soak gum in myrrh-water to mimic the scent." },
      { type: "closer", mainText: "Ancient quality control\nwas a full-body\nsensory exam.", subText: "Color, weight, fracture, taste, smell.\nAll at once.\n\nDioscorides 1.64." },
    ],
  },
  {
    id: "fire-test",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "libanos", script: "λίβανος", mainText: "The fire test.", subText: "The simplest way to spot\nfake frankincense." },
      { type: "body", mainText: "Dioscorides says frankincense is adulterated two ways: with pine resin and with gum arabic. Both look similar in the jar. But put them on a coal and the truth comes out." },
      { type: "body", mainText: "Gum doesn't catch fire when burned — it just sits there. Pine resin smolders into smoke without fragrance, giving off a thick grey haze. Real frankincense ignites cleanly and burns with a bright flame and a distinctive scent." },
      { type: "body", mainText: "The best grade — called stagonias, \"the dropper\" — forms naturally round tears, white on the outside, oily when cracked open. Indian frankincense is darker. Some dealers roll cut pieces in ceramic jars to fake the round shape.", subText: "Even the shape was counterfeited." },
      { type: "closer", mainText: "In a world without\nchemical analysis,\nfire was the lab.", subText: "Dioscorides 1.68." },
    ],
  },
  {
    id: "worm-trick",
    series: "THE MARKETPLACE",
    slides: [
      { type: "hook", topLine: "styrax skōlēkitēs", script: "στύραξ σκωληκίτης", mainText: "The worm trick.", subText: "An ancient perfume scam\nso good it had its own name." },
      { type: "body", mainText: "Styrax — a honey-scented resin from a quince-like tree — was expensive. Dealers found a way to stretch it. They mixed wax or tallow with aromatics, kneaded the blend into real styrax under hot sun, then squeezed it through a wide-meshed sieve into cold water." },
      { type: "body", mainText: "What came out looked like little worms — thin threads of scented resin, curled and textured. They sold it as \"skōlēkitēs\" — \"the wormy kind.\" Inexperienced buyers accepted it as the genuine article." },
      { type: "body", mainText: "Dioscorides says the giveaway is the smell. Real styrax is intensely sharp. The adulterated version smells pleasant but muted — the wax and fat dilute the pungency. If it doesn't sting your nose, it's been cut.", subText: "The scam was named, branded, and sold at market." },
      { type: "closer", mainText: "When your product\nhas a street name\nfor the fake version —", subText: "adulteration is an industry.\n\nDioscorides 1.66." },
    ],
  },
  {
    id: "bdellium",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "bdellion", script: "βδέλλιον", mainText: "Nobody knows\nwhat bdellium is.", subText: "It has three names.\nThat doesn't help." },
      { type: "body", mainText: "Dioscorides calls it bdellion. Others call it maldakon. Others call it blochon. It's the resin of an Arabian tree. The best kind is bitter, translucent, looks like bull-glue, oily deep inside, soft to work, free of wood or dirt." },
      { type: "body", mainText: "When burned, it smells like onyx — the shellfish-claw incense, not the stone. There's also a dark, dirty, lump-like variety imported from India. And a dry, resinous, purple-grey type from Petra. Each behaves differently." },
      { type: "body", mainText: "The problem: \"bdellium\" might refer to several different resins from several different trees across Arabia, India, and the Levant. Modern identifications include Commiphora wightii, Commiphora africana, and others. The ancient category may not map to one species at all." },
      { type: "closer", mainText: "Three names.\nThree sources.\nThree textures.", subText: "Possibly three different things\nfiled under one word.\n\nDioscorides 1.67." },
    ],
  },
  {
    id: "cedar-life-death",
    series: "MATERIA",
    slides: [
      { type: "hook", topLine: "kedreia", script: "κεδρία", mainText: "Cedar oil preserves\nthe dead.", subText: "And destroys the living." },
      { type: "body", mainText: "Dioscorides describes cedar oil — kedreia — as having a paradoxical nature. It's septic to living tissue: it burns skin, destroys clothing, eats through leather. The heat and dryness are extreme." },
      { type: "body", mainText: "But applied to corpses, the same properties preserve them. It desiccates flesh so thoroughly that decay cannot take hold. Some ancient writers called it \"the life of the dead\" — nekrou zōē." },
      { type: "body", mainText: "In practice, it was used for everything: ear infections, toothache (it shatters the tooth but stops the pain), contraception, intestinal worms, snake bites, leprosy. The line between medicine and poison was a question of dose and direction." },
      { type: "closer", mainText: "The same substance\nthat embalms a body\ncan dissolve one.", subText: "It depends which side\nof alive you're on.\n\nDioscorides 1.77." },
    ],
  },
];

const PALETTE = {
  bg: "#0C0A09", bgSlide: "#141211", cream: "#E8DCC8", gold: "#C4A265",
  goldDim: "#8B7345", muted: "#9C9486", accent: "#D4622A", dark: "#1C1917",
};

function SlideHook({ slide }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", padding: "40px 28px", textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at 50% 30%, ${PALETTE.goldDim}15 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ fontSize: "10px", letterSpacing: "3.5px", color: PALETTE.gold, textTransform: "uppercase", marginBottom: "28px", fontFamily: "'Courier New', monospace" }}>
        {slide.type === "hook" && CAROUSELS.find(c => c.slides.includes(slide))?.series || "Dead Words, Living Scents"}
      </div>
      {slide.script && <div style={{ fontSize: "42px", color: PALETTE.gold, marginBottom: "6px", lineHeight: 1.2, letterSpacing: "4px" }}>{slide.script}</div>}
      {slide.topLine && <div style={{ fontSize: "14px", color: PALETTE.muted, fontFamily: "'Courier New', monospace", letterSpacing: "2px", marginBottom: "36px" }}>{slide.topLine}</div>}
      <div style={{ fontSize: "24px", fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif", color: PALETTE.cream, lineHeight: 1.4, whiteSpace: "pre-line", marginBottom: "18px" }}>{slide.mainText}</div>
      {slide.subText && <div style={{ fontSize: "13px", color: PALETTE.muted, lineHeight: 1.6, maxWidth: "290px", whiteSpace: "pre-line" }}>{slide.subText}</div>}
    </div>
  );
}

function SlideBody({ slide }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "44px 32px" }}>
      <div style={{ width: "28px", height: "2px", background: PALETTE.gold, marginBottom: "28px" }} />
      <div style={{ fontSize: "19px", fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif", color: PALETTE.cream, lineHeight: 1.55, marginBottom: slide.subText ? "20px" : 0 }}>{slide.mainText}</div>
      {slide.subText && <div style={{ fontSize: "14px", color: PALETTE.muted, lineHeight: 1.6 }}>{slide.subText}</div>}
    </div>
  );
}

function SlideCloser({ slide }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", padding: "44px 32px", textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at 50% 70%, ${PALETTE.goldDim}10 0%, transparent 60%)`, pointerEvents: "none" }} />
      <div style={{ fontSize: "21px", fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif", color: PALETTE.cream, lineHeight: 1.5, marginBottom: "20px", whiteSpace: "pre-line" }}>{slide.mainText}</div>
      <div style={{ fontSize: "13px", color: PALETTE.muted, lineHeight: 1.7, maxWidth: "290px", whiteSpace: "pre-line" }}>{slide.subText}</div>
      <div style={{ marginTop: "36px", width: "40px", height: "1px", background: PALETTE.goldDim }} />
    </div>
  );
}

function Carousel({ carousel, isExpanded, onToggle }) {
  const [current, setCurrent] = useState(0);
  const total = carousel.slides.length;
  const slide = carousel.slides[current];

  const width = isExpanded ? 375 : 280;
  const height = isExpanded ? 468 : 350;

  return (
    <div style={{ background: PALETTE.dark, borderRadius: "14px", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.4)", fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif", flexShrink: 0, width, transition: "width 0.3s ease" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "10px 14px", gap: "8px", borderBottom: `1px solid ${PALETTE.goldDim}20`, cursor: "pointer" }} onClick={onToggle}>
        <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: `linear-gradient(135deg, ${PALETTE.gold}, ${PALETTE.accent})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: PALETTE.bg, fontWeight: 700 }}>✦</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: PALETTE.cream, fontFamily: "system-ui, sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{carousel.id}</div>
          <div style={{ fontSize: "10px", color: PALETTE.muted, fontFamily: "system-ui, sans-serif" }}>{carousel.series}</div>
        </div>
        <div style={{ fontSize: "10px", color: PALETTE.muted, fontFamily: "system-ui, sans-serif" }}>{isExpanded ? "▾" : "▸"}</div>
      </div>
      <div
        style={{ width, height, background: PALETTE.bgSlide, position: "relative", cursor: "pointer", userSelect: "none", transition: "all 0.3s ease" }}
        onClick={(e) => { const rect = e.currentTarget.getBoundingClientRect(); const x = e.clientX - rect.left; if (x > rect.width / 2) setCurrent(c => Math.min(c + 1, total - 1)); else setCurrent(c => Math.max(c - 1, 0)); }}
      >
        <div style={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "3px", zIndex: 10 }}>
          {carousel.slides.map((_, i) => (
            <div key={i} style={{ width: i === current ? "16px" : "5px", height: "2.5px", borderRadius: "2px", background: i === current ? PALETTE.gold : `${PALETTE.cream}30`, transition: "all 0.3s ease" }} />
          ))}
        </div>
        {slide.type === "hook" && <SlideHook slide={slide} />}
        {slide.type === "body" && <SlideBody slide={slide} />}
        {slide.type === "closer" && <SlideCloser slide={slide} />}
        {current < total - 1 && <div style={{ position: "absolute", bottom: "12px", right: "14px", fontSize: "10px", color: `${PALETTE.muted}80`, fontFamily: "system-ui, sans-serif" }}>{current + 1}/{total} →</div>}
      </div>
    </div>
  );
}

export default function App() {
  const [expandedId, setExpandedId] = useState("nenib");

  return (
    <div style={{ minHeight: "100vh", background: "#080706", padding: "32px 16px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ color: PALETTE.cream, fontSize: "18px", fontFamily: "'Gentium Plus', 'Gentium', Georgia, serif", marginBottom: "4px" }}>Instagram Content Bank</div>
        <div style={{ color: PALETTE.muted, fontSize: "12px", fontFamily: "system-ui, sans-serif", marginBottom: "24px" }}>23 + 6 + 8 + 5 carousel mockups — click headers to expand, click left/right on slides to navigate</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
          {CAROUSELS.map(c => (
            <Carousel key={c.id} carousel={c} isExpanded={expandedId === c.id} onToggle={() => setExpandedId(expandedId === c.id ? null : c.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
