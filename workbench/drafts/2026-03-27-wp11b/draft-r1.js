// Draft: 2026-03-27-wp11b (Revision 1)
// Posts: 4
// Date: 2026-03-27

const DRAFT_CAROUSELS = [
  // 1. scent-diagnosis
  // PASS-THROUGH
  {
    id: "scent-diagnosis",
    series: "PHARMAKON",
    slides: [
      {
        type: "hook",
        topLine: "oze",
        script: "ὄζει κάκιστον",
        mainText: "A bad smell could count as evidence. Galen still says it is not proof.",
        subText: "Rufus, Hippocrates, and Galen treat odor clinically, but not naively.",
      },
      {
        type: "body",
        mainText: "Rufus says bladder ulcers smell worst when they are rotting. Here odor is not decorative language. It is a sign that the lesion has turned septic and foul.",
      },
      {
        type: "body",
        mainText: "A Hippocratic case history shows the same seriousness from the other direction: a scented application is part of a decisive turn in the patient's condition. Smell belongs inside the event, not outside it.",
      },
      {
        type: "body",
        mainText: "But Galen draws a limit. When he tests a drug, he says you do not judge its power by smell or color alone. You judge it by what it plainly does in healthy and diseased bodies.",
      },
      {
        type: "closer",
        mainText: "The nose belongs in the clinic. It just does not get the last word.",
        subText: "Rufus, ch. 11; Hipp. Epid. 4.1.30; Galen, De simpl. med. XI.",
      },
    ],
  },

  // 2. cephalic-ointment
  // REVISED - final body slide tightened so it pays off the route logic more
  // concretely and reads less like a summary.
  {
    id: "cephalic-ointment",
    series: "PHARMAKON",
    slides: [
      {
        type: "hook",
        topLine: "kephalalgia",
        script: "κεφαλαλγίας",
        mainText: "Headache medicine could look a lot like perfumery.",
        subText: "Dioscorides gives rose oil for headache. Galen sends perfume to forehead and nostrils.",
      },
      {
        type: "body",
        mainText: "Dioscorides says rose oil is cooling and useful as a wet compress at the start of headache. The point is not that it smells pleasant. The point is that it can act early, locally, and gently.",
      },
      {
        type: "body",
        mainText: "Galen extends the same world upward. He recommends perfumed applications at the forehead and the pores of the nostrils, especially iris, amarakinon, and nard perfume, so the head is warmed through smell.",
      },
      {
        type: "body",
        mainText: "One text cools the head from outside. The other tries to reach it through forehead and nostrils. Perfume becomes a way to act on the head without swallowing a drug.",
      },
      {
        type: "closer",
        mainText: "Ancient headache treatment did not stop at the skin. It tried to reach the head through whatever opening worked.",
        subText: "Diosc. 1.43; Galen, Kuhn 12.511-12.542.",
      },
    ],
  },

  // 3. rose-oil-anti-inflammatory
  // REVISED - closer sharpened to end on the conflict between shelf-life scent and
  // bodily effect.
  {
    id: "rose-oil-anti-inflammatory",
    series: "PHARMAKON",
    slides: [
      {
        type: "hook",
        topLine: "rhodinon elaion",
        script: "ῥόδινον ἔλαιον",
        mainText: "Galen says the best rose oil should cool the body, not just stay fragrant.",
        subText: "Good medicine is not the same thing as long-lasting scent.",
      },
      {
        type: "body",
        mainText: "He complains that perfumers add astringent ingredients so rose oil will keep its smell longer. That may help the seller. For Galen it muddies the drug and makes the preparation less exact.",
      },
      {
        type: "body",
        mainText: "His test is bodily effect. Good rose oil refreshes overheated bodies and harms chilled ones. That is how he knows it is mildly cooling and close to the neutral mixture, not just pleasant.",
      },
      {
        type: "body",
        mainText: "Dioscorides gives the same preparation a wide medical range: compresses, headache, wound care, irritated skin, even uterine use. Rose oil matters because it works across inflamed and overheated conditions.",
      },
      {
        type: "closer",
        mainText: "The seller wanted a rose oil that stayed fragrant. Galen wanted one that still cooled the body.",
        subText: "Galen, De simpl. med. XI; Diosc. 1.43.",
      },
    ],
  },

  // 4. epidemic-air
  // REVISED - writer-forward framing body replaced with a material consequence that
  // keeps the claim narrow without breaking the post's atmosphere.
  {
    id: "epidemic-air",
    series: "PHARMAKON",
    slides: [
      {
        type: "hook",
        topLine: "loimika",
        script: "λοιμικὰ",
        mainText: "They treated plague by doctoring the air.",
        subText: "Plutarch and Aetius/Paul use fragrant smoke and kyphi against epidemic conditions.",
      },
      {
        type: "body",
        mainText: "Plutarch says physicians help in plague by making a large fire that rarefies the air, and that fragrant woods such as cypress, juniper, and pine do the job better. The treatment starts with the atmosphere around the sick.",
      },
      {
        type: "body",
        mainText: "Aetius and Paul place kyphi in the same zone. It can be smelled to digest catarrhs, clear the region around the brain, and guard against epidemic conditions before it is ever taken by mouth.",
      },
      {
        type: "body",
        mainText: "In both texts, the first target is shared air. Fragrant smoke works on what bodies breathe, what rises to the head, and the space sickness has already entered.",
      },
      {
        type: "closer",
        mainText: "Sometimes the first patient was not the body. It was the air around it.",
        subText: "Plutarch, De Is. 80; Aet./Paul 7.22.",
      },
    ],
  },
];
