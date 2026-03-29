import { useState } from "react";

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
      { type: "hook", topLine: "Ꜥnt.w", script: "𓂝𓈖𓅂𓈒𓏥", mainText: "Everyone translates\nthis as \"myrrh.\"", subText: "It's more complicated than that." },
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
      { type: "hook", topLine: "ahem", script: "𓄿𓉔𓅓𓆰𓏥", mainText: "A resin born from\na goddess.", subText: "The text gets strange here." },
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
      { type: "hook", topLine: "hedju", script: "𓌉𓌉𓌉𓆰𓏥", mainText: "Not a name.\nA quality grade.", subText: "" },
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
      { type: "hook", topLine: "mesha-ib", script: "𓅓𓂝𓈚𓎺𓏏", mainText: "Press this resin\nthrough a bag.\nOne quarter comes\nout as liquid.", subText: "" },
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
    id: "antiphanes-body",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Antiphanes", script: "✦", mainText: "One woman.\nFive perfumes.\nA different scent\nfor each body part.", subText: "" },
      { type: "body", mainText: "The comic poet Antiphanes describes a woman bathing: Egyptian perfume on her feet and legs. Palm perfume on her cheeks and breasts. Bergamot mint on one arm." },
      { type: "body", mainText: "Marjoram perfume on her eyebrows and hair. Tufted-thyme perfume on her knees and neck. Five different scents, applied like a map of the body." },
      { type: "body", mainText: "This isn't random luxury. Ancient writers believed different scents suited different body parts. Theophrastus said heavy perfumes belong on the chest, light ones on the arms. The body was a landscape to be composed." },
      { type: "closer", mainText: "Getting dressed in\nthe ancient world\nmeant choosing a\nsmellscape for your skin.", subText: "Antiphanes, in Athenaeus 15.689e–f." },
    ],
  },
  {
    id: "deinias",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Deinias", script: "Δεινίας", mainText: "A perfume seller\nwho lost everything\nto love.", subText: "Then it got worse." },
      { type: "body", mainText: "Heraclides of Pontus tells the story of Deinias, an Athenian perfume merchant who fell into love affairs through excessive luxury and spent all his money." },
      { type: "body", mainText: "When the desire finally passed, he was so distraught by what he'd lost that he castrated himself. Heraclides blames \"unrestrained luxury\" for everything that followed." },
      { type: "body", mainText: "The story is extreme. But it tells us something real: perfume sellers in Athens were associated with desire, excess, and moral danger. The shop wasn't neutral space." },
      { type: "closer", mainText: "The ancient perfume shop\nwasn't just a store.", subText: "It was a symbol of everything\nphilosophers feared about pleasure.\n\nAthenaeus 15.689a." },
    ],
  },
  {
    id: "megalleion",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Megalleion", script: "Μεγάλλειον", mainText: "Nobody agrees who\ninvented the most famous\nperfume in Athens.", subText: "" },
      { type: "body", mainText: "Athenaeus says it was named after Megallos — but was he Sicilian or Athenian? Nobody agrees. Galen says Megalos was from Mendes in Egypt. The comic poet Strattis credits both Megallos and \"Deinias the Egyptian.\"" },
      { type: "body", mainText: "The perfume itself was used on the feet of dogs (Eubulus), on the walls of houses (Amphis), and on brides (Anaxandrides). It was everywhere." },
      { type: "body", mainText: "The confusion over who made it might be the point. Megalleion was so common and so old that by the time anyone wrote it down, the origin story had splintered." },
      { type: "closer", mainText: "Some perfumes are older\nthan their own history.", subText: "Athenaeus 15.690f–691a." },
    ],
  },
  {
    id: "perfume-pigeons",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Alexis", script: "✦", mainText: "Someone released\nperfume-soaked pigeons\nat a dinner party.", subText: "On purpose." },
      { type: "body", mainText: "The comic poet Alexis describes a host who skipped the usual alabaster bottle. Instead, he dipped four pigeons in four different perfumes and released them over the guests." },
      { type: "body", mainText: "The birds flew in circles, raining iris perfume onto the clothes and cushions below. The host considered this an upgrade. The poet considered it showing off." },
      { type: "body", mainText: "It's absurd — but it tells us something about how perfume was distributed at symposia. Usually by hand, from a bottle. The pigeons are a parody of normal practice." },
      { type: "closer", mainText: "Ancient dinner parties\nhad their own arms race.", subText: "Alexis, The Newcomer,\nin Athenaeus 15.691c–d." },
    ],
  },
  {
    id: "perfume-map",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Apollonius", script: "✦", mainText: "The best perfumes\ncame from everywhere.", subText: "And the map kept changing." },
      { type: "body", mainText: "Apollonius the Herophilean wrote a treatise On Perfumes listing where each type was best: iris from Elis, rose from Phaselis, saffron from Soli, spikenard from Tarsus, marjoram from Kos." },
      { type: "body", mainText: "But then he adds: it's not the places that make the perfume. It's the materials, the skill, and the funding. Ephesus used to be famous for Megalleion. Now it isn't. Alexandria rose because of royal patronage." },
      { type: "body", mainText: "Pergamum once had a perfumer who invented frankincense perfume — something nobody had made before. Then it disappeared. Perfume geography was fashion, not fate." },
      { type: "closer", mainText: "The ancient perfume map\nwasn't fixed.", subText: "It moved with money, skill, and power.\n\nApollonius, in Athenaeus 15.688d–689a." },
    ],
  },
  {
    id: "stakte-price",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Antiphanes", script: "στακτή", mainText: "\"Staktē at two minas?\nAbsolutely not.\"", subText: "" },
      { type: "body", mainText: "Antiphanes quotes a buyer rejecting staktē — pressed liquid myrrh — at two minas per bottle. Hipparchus says perfume sold for five minas a cup in Athens. Menander says ten." },
      { type: "body", mainText: "For context: a skilled worker in Athens earned about one drachma per day. One mina = 100 drachmas. So a cup of perfume could cost 3 years' wages." },
      { type: "body", mainText: "And people bought it anyway. Athenaeus says the Athenians, \"who introduced all the finest things to human life,\" couldn't stay away from perfume despite the price." },
      { type: "closer", mainText: "Luxury isn't defined by\nwhat something costs.", subText: "It's defined by who pays anyway.\n\nAthenaeus 15.691a–b." },
    ],
  },
  {
    id: "socrates-perfume",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Xenophon, Symposium", script: "✦", mainText: "\"A man who wears\nperfume smells the same\nwhether he's free\nor a slave.\"", subText: "— Socrates" },
      { type: "body", mainText: "At a dinner party, the host offers perfume. Socrates refuses. His argument: perfume erases the distinction between free men and slaves. Anyone who puts it on smells identical." },
      { type: "body", mainText: "The scent of the gymnasium — olive oil, sweat, exertion — that's the smell of a free man. It takes \"good habits and a long time\" to acquire. You can't fake it with a bottle." },
      { type: "body", mainText: "When someone asks what older men who don't exercise should smell like, Socrates answers: \"Virtue.\" And where do you buy that? \"Not from the perfume sellers.\"" },
      { type: "body", mainText: "This isn't just philosophy. It's class anxiety. If a slave can smell like a citizen, then scent stops being a reliable marker of status. That terrified people." },
      { type: "closer", mainText: "Perfume was democratic.\nThat's exactly why\nsome people hated it.", subText: "Xenophon, Symposium 2.3–4." },
    ],
  },
  {
    id: "bakkaris",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "bakkaris", script: "βάκκαρις", mainText: "Is bakkaris a perfume?", subText: "Nobody's sure. Not even the ancients." },
      { type: "body", mainText: "Bakkaris shows up everywhere in Athenian comedy and poetry. Hipponax says he rubbed it on his nose \"and it was like saffron.\" Achaeus says it was used to style hair." },
      { type: "body", mainText: "But Aeschylus lists bakkaris and perfume as separate things: \"your bakkaris and your perfumes.\" Simonides does the same. So maybe it wasn't a perfume at all — maybe it was something else entirely." },
      { type: "body", mainText: "Aristophanes describes opening a pouch that smelled of \"perfume and bakkaris\" — again, two distinct things. Whatever bakkaris was, the ancients themselves couldn't quite agree on what category it belonged to." },
      { type: "closer", mainText: "Some ancient words\nresist translation\nnot because we've\nforgotten what they mean —", subText: "but because the ancients\nwere already arguing about it.\n\nAthenaeus 15.690d–e." },
    ],
  },
  {
    id: "smells-of-nothing",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Plautus / Xenophon", script: "✦", mainText: "\"A woman smells best\nwhen she smells\nof nothing at all.\"", subText: "" },
      { type: "body", mainText: "That's Plautus, writing in Rome around 200 BCE. But the idea is older. Xenophon's Socrates makes the same argument a century and a half earlier at an Athenian dinner party." },
      { type: "body", mainText: "Someone offers perfume to the guests. Socrates refuses. Women who are brides, he says, already have their own scent. They don't need perfume. The scent of olive oil from the gymnasium is more attractive to women than any bottled fragrance." },
      { type: "body", mainText: "The real concern isn't aesthetics. It's authenticity. Perfume is artificial — anyone can wear it. The \"natural\" scent of a free man's body after exercise can't be bought. It has to be earned through the right kind of life." },
      { type: "closer", mainText: "\"Smelling of nothing\"\nwas never really\nabout nothing.", subText: "It was about smelling like the right class.\n\nPlautus, Mostellaria 273.\nXenophon, Symposium 2.3–4." },
    ],
  },
  {
    id: "sparta-ban",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Athenaeus 15.686–7", script: "✦", mainText: "Sparta expelled\nits perfume makers.", subText: "Athens just made sure\ncitizens couldn't be one." },
      { type: "body", mainText: "The Spartans kicked out anyone who made perfume — calling them \"wasters of oil.\" They also expelled wool dyers for \"destroying the whiteness of wool.\" In Athens, Solon passed a law forbidding men from selling perfume." },
      { type: "body", mainText: "The result: most perfume sellers in Athens were foreigners or metics — resident aliens. People like Peron and Deinias, named in the comedies, were immigrants running luxury businesses that citizens were barred from." },
      { type: "body", mainText: "This created a paradox. Wealthy foreign perfumers controlled a trade Athenians couldn't live without — but the citizens who depended on them also resented their influence. Perfume was both essential and threatening." },
      { type: "body", mainText: "The laws weren't about hygiene. They were about who gets to profit from transformation — changing oil into perfume, changing social status through scent. That power was kept out of citizen hands on purpose." },
      { type: "closer", mainText: "The perfume trade\nwas outsourced\nby design.", subText: "And the outsiders who ran it\nwere never fully trusted.\n\nAthenaeus 15.686–687." },
    ],
  },
  {
    id: "body-perfume-map",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Antiphanes", script: "✦", mainText: "Egyptian perfume\nfor the feet.\nPalm oil for\nthe breasts.", subText: "Every body part had its own scent." },
      { type: "body", mainText: "Antiphanes describes someone bathing in a gilded tub: Egyptian perfume on feet and legs, palm oil on jaw and chest, mint extract on one arm, marjoram on eyebrows and hair, thyme on knees and neck." },
      { type: "body", mainText: "Athenaeus introduces this by saying: \"the ancients were very much addicted to perfumes, and they knew which unguent was most suitable for which limb.\"" },
      { type: "body", mainText: "This wasn't vanity — or not only vanity. If perfume is medicine (and for Aristotle and Galen, it was), then applying the right scent to the right body part is a therapeutic decision as much as an aesthetic one." },
      { type: "closer", mainText: "The ancient body\nwasn't one surface.", subText: "It was a landscape,\nand each region got its own climate.\n\nAntiphanes, in Athenaeus 15.689e–f." },
    ],
  },
  {
    id: "perfume-course",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Plato Comicus", script: "✦", mainText: "After dinner,\nperfume was served\nlike a course.", subText: "" },
      { type: "body", mainText: "Plato the comic poet (not the philosopher) describes the sequence: \"Have the men finished eating? Good. Clear the tables. I'll pour the water, you sweep the floor.\"" },
      { type: "body", mainText: "Then: \"Pour the libations. Bring the kottabos game. The girl should have her flutes ready. Now — walk around pouring the Egyptian perfume, then the iris. Give each guest a garland. Someone mix fresh wine.\"" },
      { type: "body", mainText: "Perfume arrives after the food, after the tables are cleared, after the libation — but before the drinking and music. It's part of the ritual transition from eating to symposium. Not decoration. Infrastructure." },
      { type: "closer", mainText: "Scent wasn't the\nbackground of a\ndinner party.", subText: "It was a course.\n\nPlato Comicus, The Laconians,\nin Athenaeus 15.665c." },
    ],
  },
  {
    id: "myron-word",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "myron", script: "μύρον", mainText: "The first person to use\nthe word \"perfume\"\nwas insulting an old woman.", subText: "" },
      { type: "body", mainText: "Athenaeus says the poet Archilochus, around 650 BCE, was the first to use the word myron — what we translate as \"perfume.\" His line: \"Being old, she would not have anointed herself with perfumes.\"" },
      { type: "body", mainText: "The word itself probably comes from myrrha — myrrh — because most early perfumes were made with it. Staktē, the most prized form, was made from myrrh alone." },
      { type: "body", mainText: "Homer never uses the word. He calls perfume \"oil\" with an adjective — \"rose-scented oil.\" When Aphrodite anoints Hector's corpse, it's with \"ambrosial rose oil.\" The dedicated word came later, from a poet, not a priest." },
      { type: "closer", mainText: "The word for perfume\ndidn't come from ritual\nor medicine.", subText: "It came from a joke about aging.\n\nArchilochus fr. 31,\nin Athenaeus 15.688b–c." },
    ],
  },
  {
    id: "myrrha-bitter",
    series: "MYRRHA",
    slides: [
      { type: "hook", topLine: "myrrha — i", script: "μύρρα", mainText: "Myrrh smells sweet.", subText: "It tastes bitter.\nThat's the whole myth." },
      { type: "body", mainText: "Pick up a piece of raw myrrh resin. Smell it — warm, rich, inviting. Now put it on your tongue. It's one of the most bitter substances in the ancient pharmacopoeia." },
      { type: "body", mainText: "The Greeks and Romans named it after a girl: Myrrha. Her story is a myth about exactly this gap — between what draws you in and what you find when you get close." },
      { type: "body", mainText: "Ovid, who tells the fullest version, warns the reader before he starts: \"Terrible things I sing. Stay away, daughters. Stay away, fathers.\" The scent is the invitation. The bitterness is the truth underneath." },
      { type: "closer", mainText: "Every ancient perfumer\nwho worked with myrrh\nheld this contradiction\nin their hands.", subText: "Part i of iii." },
    ],
  },
  {
    id: "myrrha-curse",
    series: "MYRRHA",
    slides: [
      { type: "hook", topLine: "myrrha — ii", script: "μύρρα", mainText: "She forgot\nto worship Aphrodite.", subText: "The goddess made her pay." },
      { type: "body", mainText: "Myrrha was the daughter of King Cinyras. Her mother boasted that Myrrha was more beautiful than Aphrodite — or in some versions, Myrrha herself neglected the goddess's rites. Either way, Aphrodite cursed her." },
      { type: "body", mainText: "The curse was desire — specifically, desire for her own father. Myrrha fought it. She tried to hang herself. Her nurse intervened, then helped her enter Cinyras's bed in darkness, over multiple nights." },
      { type: "body", mainText: "When Cinyras discovered the truth, Myrrha fled. Pregnant, wandering for nine months, she begged the gods: don't let me exist among the living or the dead. They answered. Her feet became roots. Her skin became bark. Her tears became resin." },
      { type: "closer", mainText: "The myrrh tree weeps\nbecause Myrrha\nnever stopped.", subText: "Part ii of iii.\nOvid, Metamorphoses 10.298–514." },
    ],
  },
  {
    id: "myrrha-adonis",
    series: "MYRRHA",
    slides: [
      { type: "hook", topLine: "myrrha — iii", script: "Ἄδωνις", mainText: "The child born\nfrom the tree\ntrapped the goddess\nwho cursed his mother.", subText: "" },
      { type: "body", mainText: "The trunk of the myrrh tree split open and out came Adonis — the most beautiful mortal ever born. The nymphs bathed him in his mother's tears. Her resin was his first ointment." },
      { type: "body", mainText: "Aphrodite saw him and fell helplessly in love. The same goddess who cursed Myrrha with uncontrollable desire was now consumed by it herself — for Myrrha's own son." },
      { type: "body", mainText: "Adonis was killed young, gored by a boar. From his blood, anemones grew. Aphrodite's grief became a festival. And the resin of his mother's body — myrrh — became the most important ingredient in the perfumes used to mourn him." },
      { type: "body", mainText: "The cycle is closed: Aphrodite curses a girl → the girl becomes a tree → the tree produces the most desired scent in the ancient world → the tree's child traps Aphrodite → and Aphrodite's grief is soothed with the tears of the girl she cursed." },
      { type: "closer", mainText: "Myrrh is not just\nan ingredient.", subText: "It's a story about what happens\nwhen desire and punishment\nbecome the same substance.\n\nPart iii of iii." },
    ],
  },
  {
    id: "amaracus",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "amaracus", script: "ἀμάρακος", mainText: "A boy dropped\nthe perfume bottles.", subText: "What happened next\nnamed a perfume forever." },
      { type: "body", mainText: "Servius, commenting on Vergil's Aeneid, tells the story: Amaracus was a royal perfume-bearer — a boy at the court of King Cinyras in Cyprus. The same Cinyras from the Myrrha myth." },
      { type: "body", mainText: "One day, carrying bottles of perfume, Amaracus slipped and fell. The bottles shattered. The perfumes mixed together on the floor — and produced a fragrance more beautiful than any single one of them." },
      { type: "body", mainText: "Amaracus died — from grief, because he could never recreate what accident had made. The gods transformed him into a fragrant herb: marjoram. From then on, the finest perfumes were called amaracinum." },
      { type: "body", mainText: "The myth says something real about perfumery: the best results are often accidental. A blend that shouldn't work does. And once it's gone, it's gone. Every perfumer knows this feeling." },
      { type: "closer", mainText: "The greatest perfume\nin the ancient world\nwas made by accident.", subText: "And named after the boy\nwho couldn't make it twice.\n\nServius, ad Aen. 1.693." },
    ],
  },
  {
    id: "alabastron",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "alabastron", script: "ἀλάβαστρον", mainText: "What was actually inside\nan ancient Greek\nperfume bottle?", subText: "Not what you'd expect." },
      { type: "body", mainText: "Ancient Greek perfume bottles — called alabastra — held oil-based perfumes. No alcohol. No vanilla. No musk. No ambergris. None of the things we now associate with \"classic\" perfume." },
      { type: "body", mainText: "What they held instead: staktē (pressed liquid myrrh). Mendesian (cassia, cinnamon, myrrh, resin). Metopion (galbanum, bitter almond, calamus, cardamom, honey, balsam). Cyprinon (henna flowers, myrrh, camel's-thorn)." },
      { type: "body", mainText: "These were woody, resinous, spicy, herbal, sometimes gourmand. Bright greens and warm resins. They would smell foreign to anyone expecting what modern perfumery calls \"ancient\" or \"classical.\"" },
      { type: "closer", mainText: "What we imagine\nantiquity smelled like\nand what it actually\nsmelled like", subText: "are almost nothing alike." },
    ],
  },
  {
    id: "pamphile-owl",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Apuleius", script: "✦", mainText: "She rubbed perfume\non her body\nand turned into an owl.", subText: "" },
      { type: "body", mainText: "In Apuleius' Golden Ass, the narrator watches through a crack in the door as the witch Pamphile undresses, opens a chest, and takes out a small box of perfume. She works it between her palms." },
      { type: "body", mainText: "She rubs it over her entire body — from the tips of her toes to the ends of her hair. Then she whispers to her lamp. Her limbs begin to tremble. Soft feathers push through. Her nose curves into a beak. Her toenails harden into talons." },
      { type: "body", mainText: "Pamphile becomes an owl and flies out into the night. The narrator, amazed, tries the same perfume on himself — but grabs the wrong box. He turns into a donkey instead. That's the rest of the novel." },
      { type: "body", mainText: "The perfume in this scene isn't decoration. It's the active ingredient. The transformation happens through the ointment — through the same materials, techniques, and gestures that any perfumer would use. The line between cosmetics and magic was thin." },
      { type: "closer", mainText: "In the ancient world,\nperfume could change\nwhat you were.", subText: "Not just how you smelled.\n\nApuleius, Metamorphoses 3.21." },
    ],
  },
  {
    id: "witchs-art",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Plutarch, Gryllus", script: "φαρμακίς", mainText: "\"Perfumery is a\ndyer's and witch's art.\"", subText: "A pig said that." },
      { type: "body", mainText: "In Plutarch's Gryllus, Odysseus argues with a man who's been turned into a pig about whether it's better to be human or animal. The pig thinks animals have it better. His clinching argument? Animals don't need perfume." },
      { type: "body", mainText: "\"Incenses, cinnamons, nards, Arabian calamuses — you are compelled to collect and combine them using a terrible art of dyers and witches that goes by the name 'perfumery.'\"" },
      { type: "body", mainText: "The Greek word he uses is pharmakis — the same root as \"pharmacy\" and \"pharmacology.\" In ancient Greek, it means both \"poisoner\" and \"healer\" and \"witch.\" The pig is saying: perfumery is sorcery. You just gave it a nicer name." },
      { type: "body", mainText: "The insult lands because it's half true. Ancient perfumers used the same materials, the same techniques, and sometimes the same recipes as healers and practitioners of magic. The categories weren't separate." },
      { type: "closer", mainText: "Perfumer.\nPharmacist.\nWitch.", subText: "Same word. Same skill set.\nDifferent marketing.\n\nPlutarch, Moralia 990B." },
    ],
  },
  {
    id: "cleopatra-cosmetics",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Cleopatra, Kosmētikon", script: "Κοσμητικόν", mainText: "Cleopatra wrote\na book on cosmetics.", subText: "It survived in fragments.\nThe recipes are wild." },
      { type: "body", mainText: "Galen, writing in the 2nd century CE, quotes directly from a work he calls \"Cleopatra's Kosmētikon.\" It contains recipes for hair loss, dandruff, hair growth, and skin conditions — with precise ingredients and measurements." },
      { type: "body", mainText: "One recipe for baldness: grind realgar, mix with oak mistletoe, scrub the area with soda first, then apply with a cloth. Another: crush mouse heads and rub them in. Another: burn bitter almonds with their shells, mix with vinegar and honey, scratch the scalp until it bleeds, apply." },
      { type: "body", mainText: "A soap recipe attributed to her in Aetius of Amida calls for costus, Troglodytic myrrh, iris, spikenard, black cardamom, cassia leaves, camel grass flowers, four pounds of perfume-nut, and two pounds of soda foam. \"Works on the whole body.\"" },
      { type: "body", mainText: "We don't know if the historical Cleopatra VII actually wrote this. The name may have been attached later to give the recipes authority. But Galen treats it as a real medical text — he quotes it alongside Heraclides and Crito, not as legend." },
      { type: "closer", mainText: "The most famous woman\nin the ancient world\nmay also have been\none of its published\ncosmetic chemists.", subText: "Galen, Comp. Med. Loc. 12.403–492." },
    ],
  },
  {
    id: "ptolemaic-queens",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Arsinoë & Berenikē", script: "✦", mainText: "The golden age of\nAlexandrian perfume\nwas funded by queens.", subText: "" },
      { type: "body", mainText: "Apollonius, in a passage preserved by Athenaeus, says the perfumes made in Alexandria were brought to the highest quality \"on account of the wealth of the city, and the attention that Arsinoë and Berenikē paid to such matters.\"" },
      { type: "body", mainText: "Berenikē's influence extended beyond Egypt. While she was alive, Cyrene — across the Mediterranean in modern Libya — produced the finest rose perfume in the world. When she died, it declined." },
      { type: "body", mainText: "This wasn't passive patronage. \"Attention\" here implies direct involvement in the trade — funding production, attracting perfumers, controlling quality. The Ptolemaic queens treated perfumery as state infrastructure, not luxury." },
      { type: "body", mainText: "And this is the same dynasty that produced Cleopatra VII, whose name appears on a book of cosmetic recipes. Three generations of queens, all invested in the science and commerce of scent." },
      { type: "closer", mainText: "Alexandria's perfumes\nweren't great by accident.", subText: "They were a royal project.\n\nAthenaeus 15.688d–689a." },
    ],
  },
  {
    id: "perfume-grey",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "Aristotle", script: "✦", mainText: "Aristotle thought\nperfume made\nyour hair go grey.", subText: "His reasoning is airtight.\nHis premise is wrong." },
      { type: "body", mainText: "In the Physical Problems, Aristotle asks: why do people who wear perfume go grey faster? His answer: perfume is made from aromata, and aromata are drying by nature. That's what defines them as a drug class." },
      { type: "body", mainText: "Drying draws out the natural moisture of the hair. Grey hair is either dried-out hair or hair that's lost its heat. Either way, dryness withers it. Therefore: perfume dries you out, and dryness makes you grey." },
      { type: "body", mainText: "He even offers a parallel: felt caps also make you go grey faster, because they absorb the hair's moisture. Perfume and hats — same mechanism, same result." },
      { type: "body", mainText: "The logic is perfectly consistent with ancient medical theory. Aromata heat and dry. That's what makes them medicine. But medicine that dries the brain (good) also dries the hair (bad). You can't have one without the other." },
      { type: "closer", mainText: "The price of smelling good\nwas going grey.", subText: "At least, according to Aristotle.\n\nAristotle, Physical Problems fr. 218 R,\nin Athenaeus 15.691d–e." },
    ],
  },
  {
    id: "hekenu",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "hekenu", script: "ḥknw", mainText: "One perfume.\nOne year to make.", subText: "" },
      { type: "body", mainText: "The recipe for hekenu — a sacred ointment used to anoint divine statues — is inscribed on the walls of the Edfu temple laboratory. It's the longest and most complex recipe in the entire building. It took up to 487 days to complete." },
      { type: "body", mainText: "Phase 1: crush nedjem fruit, extract juice, boil with water over acacia wood for a full day. Cool, measure the liquid lost to evaporation, then boil again — three more times. Phase 2: grind aromatics, steep in oasis wine, seal for five days." },
      { type: "body", mainText: "Phase 3: divide into 11 portions of second-quality antu. Process each over 11 days — heating over acacia charcoal, skimming the oil with a silver vessel, cooling, storing. That's 121 days. Phase 4: three more portions of first-quality antu, each sealed in an alabaster khebeb vessel for 20 days. Another 60 days." },
      { type: "body", mainText: "Phase 5: add nenib, ground and triple-sifted through reed. Mix with antu and wine. Rest for 55 days in alabaster. Repeat twice more. 180 more days. Every step is measured — the text records exact weights lost to evaporation." },
      { type: "closer", mainText: "This isn't a recipe.\nIt's a liturgical calendar\ndisguised as\na perfume formula.", subText: "From the Edfu temple laboratory.\nAufrère 2005, 225–233." },
    ],
  },
  {
    id: "tisheps",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "tisheps", script: "𓍘𓀼𓋴𓆭", mainText: "Hathor's perfume\ntook 303 days.", subText: "Hekenu was for Horus.\nThis one was for her." },
      { type: "body", mainText: "The second recipe in the Edfu laboratory is for the \"surfin extract of nenib\" — called tisheps. If hekenu belongs to Horus, tisheps belongs to Hathor: the goddess of the distant East, of aromatic treasures, of intoxication." },
      { type: "body", mainText: "The ingredients: nedjem fruit juice as a base, first-quality antu, nenib ground and triple-sifted, acorus, djabet, cheben, ivraie seeds — diluted in fine wine from the Oasis. The antu is steeped, sealed in an alabaster khebeb vessel for 20 days, then slowly cooked." },
      { type: "body", mainText: "After 60 days of resting with antu, the nenib is added — along with more antu and wine. Then it rests again. 180 more days. Three masses of nenib, processed in sequence. The perfumer skims the extract with a silver basin." },
      { type: "body", mainText: "The text says this extract is Hathor's \"emanation\" — her divine sweat. When her statue traveled from Dendera to Edfu for the annual procession, the priests anointed her with it. The perfume was the goddess returning from the distant land." },
      { type: "closer", mainText: "One hin of tisheps.\n303 days.\nFor one goddess.", subText: "Edfu II, 229–230.\nAufrère 2005, 235–237." },
    ],
  },
  {
    id: "medjet",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "medjet", script: "𓅓𓆓𓎯", mainText: "This perfume started\nwith a castrated bull.", subText: "And it took a year\nbefore anyone touched the aromatics." },
      { type: "body", mainText: "The medjet ointment is the only fat-based perfume in the Edfu laboratory. It begins with a sacrificial bull — castrated, nose unpierced, meaning it has never worked. Raised inside the temple for an entire year, washed daily in the sacred lake, its hooves wrapped in palm fiber like priests' sandals." },
      { type: "body", mainText: "After a year, the bull enters the slaughterhouse. Only the head, heart, and front legs are taken — the ḫpš.w, the parts used in the Opening of the Mouth ritual to reawaken the dead. The hindquarters are discarded. The butchers are the same specialists who embalm." },
      { type: "body", mainText: "The fat is rendered, sealed in a stone vessel, and stored in the Treasury for a full year. But it's not this fat they use — it's last year's. The medjet is always made from the previous year's bull, ensuring an unbroken chain stretching back as far as the ritual itself." },
      { type: "body", mainText: "Last year's fat is taken out and \"left to spend the night\" — the same language used for a mummy lying on its bier before transformation. Then it's perfumed with tisheps, djabet, cheben, juniper, pine resin, and second-quality antu. Boiled with oasis wine. Dyed red with orcanette root — the color of Seth's blood. Applied to divine statues with two fingers sheathed in gold." },
      { type: "closer", mainText: "The bull is Seth.\nThe fat is vengeance.\nThe scent appeases the gods.", subText: "910 grams. Two years.\n\nEdfu II, 227–228.\nAufrère 2005, 238–240." },
    ],
  },
  {
    id: "per-fumum",
    series: "DEAD WORDS, LIVING SCENTS",
    slides: [
      { type: "hook", topLine: "per fumum", script: "✦", mainText: "The word \"perfume\"\ncomes from the Latin\n\"per fumum,\" meaning\n\"through smoke.\"", subText: "At least, that's what everyone says." },
      { type: "body", mainText: "You'll find this line in every perfume book, every brand website, every history-of-fragrance article. \"Perfume\" = per fumum = \"through smoke.\" It sounds elegant. There's one problem: that's not how Latin compounds work." },
      { type: "body", mainText: "When per- is a prefix in Latin, it doesn't mean \"through.\" It's an intensifier — it means \"thoroughly\" or \"completely.\" Perfumare would mean \"to smoke thoroughly,\" not \"through smoke.\" And the compound perfumare doesn't appear in any classical Latin source we know of." },
      { type: "body", mainText: "The Romans didn't call perfume \"perfume.\" They called it unguentum (ointment) or myron (borrowed from Greek). Incense was thymiama or suffimentum. They had perfectly clear words for both — and they kept them separate." },
      { type: "body", mainText: "So where did \"perfume\" come from? It enters French and English in the early modern period, probably from Italian profumo. But why a word for smoke got applied to liquid fragrance — and when — remains genuinely unclear. The origin story everyone repeats is itself a mystery." },
      { type: "closer", mainText: "The most-repeated fact\nin the history of perfume\nmight be the\nleast examined.", subText: "If you know where per fumum\nfirst appears, we'd love to hear it." },
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
      <div style={{ fontSize: "24px", fontFamily: "'Georgia', serif", color: PALETTE.cream, lineHeight: 1.4, whiteSpace: "pre-line", marginBottom: "18px" }}>{slide.mainText}</div>
      {slide.subText && <div style={{ fontSize: "13px", color: PALETTE.muted, lineHeight: 1.6, maxWidth: "290px", whiteSpace: "pre-line" }}>{slide.subText}</div>}
    </div>
  );
}

function SlideBody({ slide }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "44px 32px" }}>
      <div style={{ width: "28px", height: "2px", background: PALETTE.gold, marginBottom: "28px" }} />
      <div style={{ fontSize: "19px", fontFamily: "'Georgia', serif", color: PALETTE.cream, lineHeight: 1.55, marginBottom: slide.subText ? "20px" : 0 }}>{slide.mainText}</div>
      {slide.subText && <div style={{ fontSize: "14px", color: PALETTE.muted, lineHeight: 1.6 }}>{slide.subText}</div>}
    </div>
  );
}

function SlideCloser({ slide }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", padding: "44px 32px", textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at 50% 70%, ${PALETTE.goldDim}10 0%, transparent 60%)`, pointerEvents: "none" }} />
      <div style={{ fontSize: "21px", fontFamily: "'Georgia', serif", color: PALETTE.cream, lineHeight: 1.5, marginBottom: "20px", whiteSpace: "pre-line" }}>{slide.mainText}</div>
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
    <div style={{ background: PALETTE.dark, borderRadius: "14px", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.4)", fontFamily: "'Georgia', serif", flexShrink: 0, width, transition: "width 0.3s ease" }}>
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
        <div style={{ color: PALETTE.cream, fontSize: "18px", fontFamily: "'Georgia', serif", marginBottom: "4px" }}>Instagram Content Bank</div>
        <div style={{ color: PALETTE.muted, fontSize: "12px", fontFamily: "system-ui, sans-serif", marginBottom: "24px" }}>56 carousel mockups — click headers to expand, click left/right on slides to navigate</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
          {CAROUSELS.map(c => (
            <Carousel key={c.id} carousel={c} isExpanded={expandedId === c.id} onToggle={() => setExpandedId(expandedId === c.id ? null : c.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
