// Draft: 2026-03-27-wp11a (Revision 1)
// Posts: 4
// Date: 2026-03-27

const DRAFT_CAROUSELS = [
  // 1. hippocratic-fumigations
  // REVISED - last body slide cut and folded into the procedural slide so the post
  // stays centered on treatment movement rather than classification language.
  {
    id: "hippocratic-fumigations",
    series: "PHARMAKON",
    slides: [
      {
        type: "hook",
        topLine: "myron rhodinon",
        script: "μύρον ῥόδινον",
        mainText: "One Hippocratic treatment says: wet the aromatics with rose perfume, then fumigate.",
        subText: "Hipp. De nat. mul. 34. Perfume here is a medical medium, not a luxury finish.",
      },
      {
        type: "body",
        mainText: "The gynecological texts do not treat fragrance as a finishing touch. They choose foul-smelling applications for one uterine state and fragrant ones for another. Odor is part of the therapeutic direction, not a bonus.",
      },
      {
        type: "body",
        mainText: "Elsewhere the sequence is procedural: fumigate with aromatics, pour on netopon and rose perfume, then send the woman to her husband. Sometimes the wetting medium is plain oil; elsewhere the text asks for named perfumes such as rhodinon or Egyptian white. The medium matters because the treatment does.",
      },
      {
        type: "closer",
        mainText: "In Hippocratic medicine, perfume could belong to the apparatus of cure.",
        subText: "Hipp. De loc. in hom. 47; De nat. mul. 16, 34.",
      },
    ],
  },

  // 2. brain-drying-theory
  // PASS-THROUGH
  {
    id: "brain-drying-theory",
    series: "PHARMAKON",
    slides: [
      {
        type: "hook",
        topLine: "osme",
        script: "διὰ τῆς ὀσμῆς",
        mainText: "Galen says to anoint the nostrils so the head warms by smell.",
        subText: "De comp. med. sec. loc. X. The nose is a route of treatment.",
      },
      {
        type: "body",
        mainText: "This is not casual pleasantness. Galen is talking about head complaints caused by cold. The perfume goes at the nose because the smell itself is supposed to heat what lies above it.",
      },
      {
        type: "body",
        mainText: "His fuller formulation treats forehead and nostril pores together, especially with iris, amarakinon, and nard perfume. The route matters as much as the substance: this is olfactory administration.",
      },
      {
        type: "body",
        mainText: "Galen is also strict about the boundary. Perfumes used to scent clothes, rooms, or walks lie outside medicine. He keeps them only where they warm, cool, soften, disperse, or carry drugs effectively.",
      },
      {
        type: "closer",
        mainText: "For Galen, the nose is not just a judge of scent. It is part of the pharmacy.",
        subText: "Galen, Kuhn 12.511, 12.542, 12.450.",
      },
    ],
  },

  // 3. rose-perfume-bladder
  // PASS-THROUGH
  {
    id: "rose-perfume-bladder",
    series: "PHARMAKON",
    slides: [
      {
        type: "hook",
        topLine: "oureter",
        script: "οὐρητήρ",
        mainText: "Rufus treats bladder pain with warmed rose perfume injected through the urinary tract.",
        subText: "Rufus, De renum et vesicae morbis. Perfume enters urology.",
      },
      {
        type: "body",
        mainText: "In his bladder-ulcer treatment, water, milk, and rhodinon perfume are warmed and introduced through the ureter. Perfume is not hovering in the room. It is one of the therapeutic liquids.",
      },
      {
        type: "body",
        mainText: "The same disease complex also draws perfumed oils into external treatment. Rufus recommends wax preparations made with cyprinum oil, rose perfume, and iris perfume, then the most fragrant softening compounds he can get.",
      },
      {
        type: "body",
        mainText: "That combination is the real shock. Rose perfume can be injected, perfumed oils can sit in plasters, and scent belongs inside urinary medicine. The route is what turns perfume into a clinical fact.",
      },
      {
        type: "closer",
        mainText: "This is what perfume looks like after it leaves the dressing table and enters the clinic.",
        subText: "Rufus, ch. 11, 1, 15.",
      },
    ],
  },

  // 4. please-the-sick
  // REVISED - last body slide cut; closer sharpened to land on treatment uptake
  // rather than restating the principle abstractly.
  {
    id: "please-the-sick",
    series: "PHARMAKON",
    slides: [
      {
        type: "hook",
        topLine: "charisasthai",
        script: "χαρίσασθαι",
        mainText: "Aretaeus says the physician must also please the sick.",
        subText: "De cur. diut. 2.6. Pleasantness can belong to treatment.",
      },
      {
        type: "body",
        mainText: "In his treatment for stomach disorders, he says the doctor should follow the patient's desires where they do not do great harm. The point is not indulgence. Recovery can depend on what a patient can actually bear.",
      },
      {
        type: "body",
        mainText: "The remedies he lists in that setting include wormwood and nard perfume among the digestives. Elsewhere he specifies a perfume that is gentle and agreeable, or rose perfume and oinanthinum with fragrant white wine.",
      },
      {
        type: "closer",
        mainText: "A harsh cure can fail before it begins. Aretaeus leaves room for one the patient can bear.",
        subText: "Aretaeus, De cur. diut. 2.6; 2.5; De cur. acut. 2.10.",
      },
    ],
  },
];
