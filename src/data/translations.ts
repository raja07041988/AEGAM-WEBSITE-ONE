export type Language = 'en' | 'ta';

export interface Translations {
  nav: {
    home: string;
    about: string;
    ecosystem: string;
    products: string;
    infrastructure: string;
    gallery: string;
    faq: string;
    contact: string;
    getStarted: string;
    eosGateway: string;
    inquiry: string;
    topNotice: string;
    manufacturingNotice: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    exploreEcosystem: string;
    manufacturingDivision: string;
    contactUs: string;
    visionBadge: string;
    quote: string;
    quoteAuthor: string;
    quoteRole: string;
  };
  missionVision: {
    visionNumber: string;
    visionTitle: string;
    visionText: string;
    missionNumber: string;
    missionTitle: string;
    missionText: string;
    ecosystemNumber: string;
    ecosystemTitle: string;
  };
  whyAegam: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
  };
  manufacturing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    rotaryTitle: string;
    rotaryDesc: string;
    fabricationTitle: string;
    fabricationDesc: string;
    qualityTitle: string;
    qualityDesc: string;
    exploreProducts: string;
  };
  ecosystemDiagram: {
    eyebrow: string;
    title: string;
    subtitle: string;
    trustTitle: string;
    trustDesc: string;
    mfgTitle: string;
    mfgDesc: string;
    salesTitle: string;
    salesDesc: string;
    supplyTitle: string;
    supplyDesc: string;
    futureTitle: string;
    futureDesc: string;
  };
  entities: {
    eyebrow: string;
    title: string;
    subtitle: string;
    inquireBtn: string;
    visitSiteBtn: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    etymologyTitle: string;
    etymologySub: string;
    etymologyDesc1: string;
    etymologyDesc2: string;
    philosophyTitle: string;
    collabTitle: string;
    collabDesc: string;
    accountabilityTitle: string;
    accountabilityDesc: string;
    knowledgeTitle: string;
    knowledgeDesc: string;
    commTitle: string;
    commSub: string;
    founderTitle: string;
    founderQuote: string;
    exploreStructure: string;
    getInTouch: string;
  };
  ecosystemPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    selectEntity: string;
    phase2Readiness: string;
    phase2Desc: string;
    previewEosBtn: string;
    roleScope: string;
    accountabilities: string;
    focusTags: string;
    governanceBoundary: string;
    participationTitle: string;
    participationSub: string;
  };
  products: {
    eyebrow: string;
    title: string;
    subtitle: string;
    flagshipBadge: string;
    requestQuote: string;
    specsTitle: string;
    filterLabel: string;
    visitAeganai: string;
    inquireSpecs: string;
    customSetupTitle: string;
    customSetupSub: string;
  };
  infrastructure: {
    eyebrow: string;
    title: string;
    subtitle: string;
    exploreFull: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    categoryLabel: string;
    closeViewer: string;
  };
  futureVision: {
    eyebrow: string;
    title: string;
    subtitle: string;
    eosTitle: string;
    eosDesc: string;
    badge: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    categoryLabel: string;
    noResults: string;
    resetFilters: string;
    unresolvedTitle: string;
    unresolvedSub: string;
    submitInquiryBtn: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    submitAnother: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    orgLabel: string;
    purposeLabel: string;
    messageLabel: string;
    mapTitle: string;
  };
  modals: {
    inquiryTitle: string;
    inquirySub: string;
    eosTitle: string;
    eosSub: string;
    requestAccess: string;
    close: string;
  };
  currentVsFuture: {
    eyebrow: string;
    title: string;
    subtitle: string;
    phase1Title: string;
    phase1Subtitle: string;
    phase2Title: string;
    phase2Subtitle: string;
  };
  operationalPhilosophy: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  footer: {
    rights: string;
    phase: string;
    governance: string;
    ecosystemSummary: string;
    quickLinks: string;
    entitiesList: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      ecosystem: 'Ecosystem',
      products: 'Products',
      infrastructure: 'Infrastructure',
      gallery: 'Gallery',
      faq: 'FAQ',
      contact: 'Contact',
      getStarted: 'Inquiry & Contact',
      eosGateway: 'EOS Gateway',
      inquiry: 'Submit Inquiry',
      topNotice: 'AEGAM Official Phase 1 Ecosystem Foundation',
      manufacturingNotice: 'Manufacturing:',
    },
    hero: {
      eyebrow: 'THE FUTURE OF INDUSTRIAL UNITY',
      titleLine1: 'Unity Through',
      titleLine2: 'Inner Light & Industry.',
      subtitle: 'Building a globally integrated ecosystem dedicated to heavy structural fabrication, high-efficiency Rotary Oil Extraction machinery, sustainable energy, and structured entity governance.',
      exploreEcosystem: 'Explore Ecosystem',
      manufacturingDivision: 'Manufacturing Division',
      contactUs: 'Contact AEGAM',
      visionBadge: 'Phase-1 Foundation Architecture',
      quote: 'AEGAM represents the convergence of traditional engineering mastery and modern technology. We are building a long-term legacy of industrial excellence.',
      quoteAuthor: 'AEGAM Governance Trust',
      quoteRole: 'Foundational Leadership',
    },
    missionVision: {
      visionNumber: '01',
      visionTitle: 'Our Vision',
      visionText: 'To become the global cornerstone for ethical industry, harmonizing human spirit with technological prowess and heavy manufacturing discipline.',
      missionNumber: '02',
      missionTitle: 'Our Mission',
      missionText: 'Empowering regional and global markets through high-efficiency Rotary Oil Extraction machinery, heavy structural fabrication, and accountable entity governance.',
      ecosystemNumber: '03',
      ecosystemTitle: 'AEGAM Ecosystem',
    },
    whyAegam: {
      eyebrow: 'WHY AEGAM EXISTS',
      title: 'A Purpose-Driven Industrial Foundation',
      subtitle: 'AEGAM was created to unite manufacturing capability, operational supply chains, and multi-entity governance into a transparent, resilient ecosystem.',
      pillar1Title: 'Industrial Autonomy',
      pillar1Desc: 'In-house heavy fabrication and lathe machining capabilities eliminate third-party delays and preserve strict build quality.',
      pillar2Title: 'Rotary Oil Expertise',
      pillar2Desc: 'Specialized engineering in traditional cold-press and heavy-duty commercial rotary oil extraction machinery.',
      pillar3Title: 'Multi-Entity Synergy',
      pillar3Desc: 'Clear operational division across AEGANANEGAN, VALARIVAN, ARULATCHI, and EOS Gateway.',
      pillar4Title: 'Long-Term Stewardship',
      pillar4Desc: 'Non-profit trust oversight ensuring ethical growth, sustainability, and regional employment.',
    },
    manufacturing: {
      eyebrow: 'MANUFACTURING CAPABILITY',
      title: 'Precision Heavy Fabrication & Machine Bench Testing',
      subtitle: 'From heavy steel frame welding to precision spindle alignment, our workshop delivers industrial-grade machinery built for continuous operation.',
      rotaryTitle: 'Rotary Oil Machine Workshop',
      rotaryDesc: 'Dedicated assembly lines for commercial rotary oil press units ranging from 15kg to 50kg batch capacity.',
      fabricationTitle: 'Heavy Structural Fabrication',
      fabricationDesc: 'Equipped with heavy lathes, hydraulic presses, precision radial drills, and MIG/TIG welding bays.',
      qualityTitle: 'Quality Control Bench Testing',
      qualityDesc: 'Every unit undergoes 48-hour continuous bench testing under full mechanical load prior to dispatch.',
      exploreProducts: 'View All Machinery Specifications',
    },
    ecosystemDiagram: {
      eyebrow: 'ECOSYSTEM ARCHITECTURE',
      title: 'Structured Multi-Entity Relationship',
      subtitle: 'A transparent framework separating governance, manufacturing, commercial operations, and future digital systems.',
      trustTitle: 'AEGAM Governance Trust',
      trustDesc: 'Non-profit foundational trust guiding long-term vision and ethical policy.',
      mfgTitle: 'AEGANANEGAN (Manufacturing)',
      mfgDesc: 'Industrial manufacturing, heavy fabrication, and machine bench testing.',
      salesTitle: 'VALARIVAN (Commercial)',
      salesDesc: 'Sales, distribution, dealership network, and customer relations.',
      supplyTitle: 'ARULATCHI (Supply & Agro)',
      supplyDesc: 'Raw material procurement, agricultural processing, and supply chain.',
      futureTitle: 'EOS Gateway (Future Portal)',
      futureDesc: 'Digital system integration, ERP, CRM, and ecosystem analytics.',
    },
    entities: {
      eyebrow: 'OPERATIONAL STRUCTURE',
      title: 'Participating Ecosystem Entities',
      subtitle: 'Each entity functions within a defined scope, working collaboratively under AEGAM Governance Trust.',
      inquireBtn: 'Send Entity Inquiry',
      visitSiteBtn: 'Visit Official Website',
    },
    about: {
      eyebrow: 'AEGAM IDENTITY & PHILOSOPHY',
      title: 'About AEGAM (ஏகம்) — Unity Through Inner Light',
      subtitle: 'AEGAM is a unified industrial and venture ecosystem engineered for long-term structured growth, visible accountability, and collaborative operational culture.',
      etymologyTitle: 'ஏகம் (Egam / AEGAM)',
      etymologySub: 'Etymology & Spiritual Essence',
      etymologyDesc1: 'In Tamil classical lineage, ஏகம் (Egam) signifies singleness of purpose, supreme oneness, and Unity Through Inner Light.',
      etymologyDesc2: 'In an industrial world often fragmented by isolated competition, AEGAM brings together governance, manufacturing, sales, and supply chain under a single aligned direction.',
      philosophyTitle: 'AEGAM Philosophy',
      collabTitle: 'Collaboration Over Destruction',
      collabDesc: 'Fostering practical cooperation among participants, distributors, and vendors rather than destructive price wars.',
      accountabilityTitle: 'Visible Accountability',
      accountabilityDesc: 'Clear boundary definitions across entities ensure every role remains transparent and responsibility is visible.',
      knowledgeTitle: 'Knowledge Preservation',
      knowledgeDesc: 'Reducing dependency on individual memory by standardizing manufacturing protocols and engineering specs.',
      commTitle: 'Operational Communication Philosophy',
      commSub: 'Communication remains practical, clear, and operationally authentic without exaggerated hype claims.',
      founderTitle: 'Building for Generations, Not Short-Term Hype',
      founderQuote: 'AEGAM was founded on the conviction that industrial excellence requires both physical engineering rigor and high-trust governance. We build real machinery and establish real infrastructure.',
      exploreStructure: 'Explore Entities Structure',
      getInTouch: 'Get in Touch',
    },
    ecosystemPage: {
      eyebrow: 'AEGAM ECOSYSTEM ARCHITECTURE',
      title: 'AEGAM Ecosystem Structure & Entity Roles',
      subtitle: 'AEGAM operates through specialized legal entities managing focused operational responsibilities under unified governance.',
      selectEntity: 'Select Entity to View Scope',
      phase2Readiness: 'Phase 2 Readiness',
      phase2Desc: 'Learn how AEGAM.IN provides the digital entry portal for future Ecosystem Operating System (EOS) modules.',
      previewEosBtn: 'Preview EOS Gateway',
      roleScope: 'Entity Role & Scope',
      accountabilities: 'Key Accountabilities',
      focusTags: 'Operational Focus Tags',
      governanceBoundary: 'Governance Boundary',
      participationTitle: 'Understanding Ecosystem Participation vs Ownership',
      participationSub: 'AEGAM maintains clear boundaries between operational contributions, commercial dealerships, supplier relationships, and entity ownership structures.',
    },
    products: {
      eyebrow: 'INDUSTRIAL MACHINERY',
      title: 'Commercial Rotary Oil Extraction Machines',
      subtitle: 'Engineered for maximum oil yield, structural durability, and minimal friction heating.',
      flagshipBadge: 'Flagship Commercial Unit',
      requestQuote: 'Request Technical Quote',
      specsTitle: 'Key Technical Specifications',
      filterLabel: 'Filter Category:',
      visitAeganai: 'Visit Dedicated Site www.aeganai.in',
      inquireSpecs: 'Inquire Machine Specs & Pricing',
      customSetupTitle: 'Looking for Complete Plant Setups or Custom Machine Engineering?',
      customSetupSub: 'Visit www.aeganai.in to explore detailed oil mill machinery configurations, seed processing capacities, and direct factory inquiries.',
    },
    infrastructure: {
      eyebrow: 'PHYSICAL INFRASTRUCTURE',
      title: 'Built on Real Industrial Workshop Discipline',
      subtitle: 'AEGAM facility includes heavy fabrication bays, rotary machine assembly lines, precision lathe benches, and 48-hr trial testing bays.',
      exploreFull: 'Explore Infrastructure Details',
    },
    gallery: {
      eyebrow: 'OPERATIONS GALLERY',
      title: 'Workshop Fabrication & Campus Photos',
      subtitle: 'Authentic photography capturing our workshop assembly, machinery bench testing, and industrial facility.',
      viewAll: 'View Complete Gallery',
      categoryLabel: 'Category:',
      closeViewer: 'Close Viewer',
    },
    futureVision: {
      eyebrow: 'FUTURE ARCHITECTURE',
      title: 'EOS Gateway & Digital Transformation',
      subtitle: 'Preparing the foundation for dealer portals, inventory tracking, and ecosystem intelligence.',
      eosTitle: 'Ecosystem Operating System (EOS)',
      eosDesc: 'A unified digital interface connecting all operational entities seamlessly.',
      badge: 'Architecture Prepared',
    },
    faq: {
      eyebrow: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Ecosystem Clarity & Governance FAQ',
      subtitle: 'Clear answers regarding AEGAM structure, entity roles, manufacturing, and public policies.',
      searchPlaceholder: 'Search FAQ topics (e.g. rotary, entities, investment, software)...',
      categoryLabel: 'Category:',
      noResults: 'No matching FAQ topics found.',
      resetFilters: 'Reset Search Filters',
      unresolvedTitle: 'Have Further Operational or Governance Questions?',
      unresolvedSub: 'Our team provides transparent, operationally grounded responses to all inquiries.',
      submitInquiryBtn: 'Submit Inquiry to AEGAM',
    },
    contact: {
      eyebrow: 'OPERATIONAL INQUIRIES',
      title: 'Contact AEGAM Headquarters',
      subtitle: 'Reach out directly for manufacturing inquiries, dealership applications, or partnership discussions.',
      phone: 'Phone Inquiry',
      whatsapp: 'WhatsApp Business',
      email: 'Official Email',
      address: 'Industrial Campus Address',
      submit: 'Send Inquiry',
      submitting: 'Submitting Inquiry...',
      successTitle: 'Inquiry Successfully Submitted',
      successDesc: 'Thank you for reaching out to AEGAM. Our operational coordinators will contact you promptly.',
      submitAnother: 'Submit Another Inquiry',
      nameLabel: 'Your Full Name *',
      phoneLabel: 'Phone / WhatsApp Number *',
      emailLabel: 'Email Address *',
      orgLabel: 'Organization / Business',
      purposeLabel: 'Inquiry Purpose *',
      messageLabel: 'Inquiry Message *',
      mapTitle: 'Campus Location Map',
    },
    modals: {
      inquiryTitle: 'Submit Operational Inquiry',
      inquirySub: 'Direct communication line to AEGAM Coordinators',
      eosTitle: 'Phase 2 EOS Gateway Preview',
      eosSub: 'Ecosystem Operating System Portal Concept',
      requestAccess: 'Request Early Dealer Access',
      close: 'Close',
    },
    currentVsFuture: {
      eyebrow: 'DEVELOPMENT ROADMAP',
      title: 'Phase 1 Foundation vs Phase 2 EOS Gateway',
      subtitle: 'A structured approach ensuring operational clarity without premature software bloat.',
      phase1Title: 'Phase 1: Present Digital Foundation',
      phase1Subtitle: 'Focuses on identity, manufacturing proof, trust policy, and direct operational contact.',
      phase2Title: 'Phase 2: Future Ecosystem Operating System',
      phase2Subtitle: 'Interactive digital ecosystem connecting dealers, inventory tracking, and ERP integration.',
    },
    operationalPhilosophy: {
      eyebrow: 'CORE VALUES & PHILOSOPHY',
      title: 'The Principles That Drive AEGAM',
      subtitle: 'Grounding every operational decision in clarity, accountability, and continuous improvement.',
    },
    footer: {
      rights: 'AEGAM GROUP. ALL RIGHTS RESERVED.',
      phase: 'Phase 1 Foundation Architecture (Static)',
      governance: 'Governance & Boundaries',
      ecosystemSummary: 'Unified Industrial & Venture Ecosystem',
      quickLinks: 'Quick Navigation',
      entitiesList: 'Ecosystem Entities',
    },
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      about: 'எங்களைப் பற்றி',
      ecosystem: 'சுற்றுச்சூழல் (எகோசிஸ்டம்)',
      products: 'இயந்திரங்கள் / தயாரிப்புகள்',
      infrastructure: 'தொழில்துறை உட்கட்டமைப்பு',
      gallery: 'புகைப்படத் தொகுப்பு',
      faq: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      contact: 'தொடர்புகொள்ள',
      getStarted: 'விசாரணை & தொடர்பு',
      eosGateway: 'ஈஓஎஸ் கேட்வே',
      inquiry: 'விசாரணை சமர்ப்பிக்குக',
      topNotice: 'ஏகம் அதிகாரப்பூர்வ கட்டம் 1 சுற்றுச்சூழல் அமைப்பு அடித்தளம்',
      manufacturingNotice: 'உற்பத்திப் பிரிவு:',
    },
    hero: {
      eyebrow: 'தொழில்துறை ஒற்றுமையின் எதிர்காலம்',
      titleLine1: 'ஒன்றிய ஒளி மற்றும்',
      titleLine2: 'தொழில்துறை மூலம் ஒற்றுமை.',
      subtitle: 'கனரக கட்டமைப்பு உற்பத்தி, உயர் திறனுள்ள ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரங்கள், நிலையான ஆற்றல் மற்றும் ஒழுங்குபடுத்தப்பட்ட நிறுவன மேலாண்மைக்கான உலகளாவிய ஒருங்கிணைந்த சுற்றுச்சூழல் அமைப்பு.',
      exploreEcosystem: 'சுற்றுச்சூழலை ஆராய்க',
      manufacturingDivision: 'உற்பத்திப் பிரிவு',
      contactUs: 'ஏகமைத் தொடர்பு கொள்க',
      visionBadge: 'கட்டம்-1 அடிப்படை கட்டமைப்பு',
      quote: 'ஏகம் (AEGAM) என்பது பாரம்பரிய பொறியியல் சிறப்பம்சங்கள் மற்றும் நவீன தொழில்நுட்பத்தின் சங்கமம். நாங்கள் தொழில்துறை சிறப்பின் நீண்டகால பாரம்பரியத்தை உருவாக்கி வருகிறோம்.',
      quoteAuthor: 'ஏகம் ஆளுமை அறக்கட்டளை',
      quoteRole: 'அடிப்படை தலைமை',
    },
    missionVision: {
      visionNumber: '01',
      visionTitle: 'எங்கள் தொலைநோக்கு',
      visionText: 'மனித ஆன்மாவையும் தொழில்நுட்ப திறனையும் கனரக உற்பத்தி ஒழுக்கத்தையும் ஒருங்கிணைத்து, நேர்மையான தொழில்துறையின் உலகளாவிய அடித்தளமாக விளங்குதல்.',
      missionNumber: '02',
      missionTitle: 'எங்கள் நோக்கம்',
      missionText: 'உயர் திறன் கொண்ட ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரங்கள், கனரக உற்பத்தி மற்றும் பொறுப்பான நிறுவன நிர்வாகத்தின் மூலம் உள்ளூர் மற்றும் உலகளாவிய சந்தைகளை மேம்படுத்துதல்.',
      ecosystemNumber: '03',
      ecosystemTitle: 'ஏகம் சுற்றுச்சூழல்',
    },
    whyAegam: {
      eyebrow: 'ஏகம் ஏன் உருவாக்கப்பட்டது',
      title: 'நோக்கத்துடன் கூடிய தொழில்துறை அடித்தளம்',
      subtitle: 'உற்பத்தித் திறன், செயல்பாட்டு விநியோகச் சங்கிலி மற்றும் பல நிறுவன நிர்வாகத்தை ஒரு வெளிப்படையான, வலுவான சுற்றுச்சூழல் அமைப்பாக ஒருங்கிணைக்க ஏகம் உருவாக்கப்பட்டது.',
      pillar1Title: 'தொழில்துறை சுயாட்சி',
      pillar1Desc: 'சொந்த கனரக உற்பத்தி மற்றும் லேத் இயந்திர திறன்கள் மூன்றாம் தரப்பு தாமதங்களை நீக்கி, உற்பத்தியின் தரத்தைப் பாதுகாக்கின்றன.',
      pillar2Title: 'ரோட்டரி எண்ணெய் சிறப்புத் திறன்',
      pillar2Desc: 'பாரம்பரிய மரச்செக்கு மற்றும் வணிகரீதியான கனரக ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரங்களில் சிறப்புப் பொறியியல்.',
      pillar3Title: 'பல நிறுவனங்களின் ஒருங்கிணைப்பு',
      pillar3Desc: 'ஏகன் அநேகன், வாலறிவன், அருளாட்சி மற்றும் ஈஓஎஸ் கேட்வே ஆகியவற்றுக்கு இடையேயான தெளிவான செயல்பாட்டுப் பிரிவு.',
      pillar4Title: 'நீண்டகால பொறுப்புடைமை',
      pillar4Desc: 'லாப நோக்கற்ற அறக்கட்டளை மேற்பார்வை நெறிமுறை வளர்ச்சி, நிலைத்தன்மை மற்றும் பிராந்திய வேலைவாய்ப்பை உறுதி செய்கிறது.',
    },
    manufacturing: {
      eyebrow: 'உற்பத்தித் திறன்',
      title: 'துல்லியமான கனரக தயாரிப்பு & இயந்திர சோதனை',
      subtitle: 'கனரக எஃகு சட்ட வெல்டிங் முதல் துல்லியமான சுழல் சீரமைப்பு வரை, எங்கள் பட்டறை தொடர்ச்சியான செயல்பாட்டிற்காக கட்டப்பட்ட தொழில்துறை தர இயந்திரங்களை வழங்குகிறது.',
      rotaryTitle: 'ரோட்டரி எண்ணெய் இயந்திர பட்டறை',
      rotaryDesc: '15 கிலோ முதல் 50 கிலோ வரை திறன் கொண்ட வணிக ரோட்டரி எண்ணெய் இயந்திரங்களுக்கான பிரத்யேக அசெம்பிளி கோடுகள்.',
      fabricationTitle: 'கனரக கட்டமைப்பு உற்பத்தி',
      fabricationDesc: 'கனரக லேத், ஹைட்ராலிக் பிரஸ், துல்லிய ரேடியல் டிரில் மற்றும் எம்ஐஜி/டிஐஜி வெல்டிங் மையங்களுடன் பொருத்தப்பட்டுள்ளது.',
      qualityTitle: 'தரக் கட்டுப்பாட்டு சோதனை',
      qualityDesc: 'ஒவ்வொரு இயந்திரமும் அனுப்புவதற்கு முன் முழு இயந்திர சுமையின் கீழ் 48 மணிநேர தொடர்ச்சியான சோதனைக்கு உட்படுத்தப்படுகிறது.',
      exploreProducts: 'அனைத்து இயந்திர விவரங்களையும் காண்க',
    },
    ecosystemDiagram: {
      eyebrow: 'சுற்றுச்சூழல் கட்டமைப்பு',
      title: 'வரிசைப்படுத்தப்பட்ட பல நிறுவன உறவு',
      subtitle: 'நிர்வாகம், உற்பத்தி, வணிக செயல்பாடுகள் மற்றும் எதிர்கால டிஜிட்டல் அமைப்புகளைப் பிரிக்கும் வெளிப்படையான கட்டமைப்பு.',
      trustTitle: 'ஏகம் ஆளுமை அறக்கட்டளை',
      trustDesc: 'நீண்டகால தொலைநோக்கு மற்றும் நெறிமுறைக் கொள்கையை வழிநடத்தும் லாப நோக்கற்ற அறக்கட்டளை.',
      mfgTitle: 'ஏகன் அநேகன் (உற்பத்தி)',
      mfgDesc: 'தொழில்துறை உற்பத்தி, கனரக தயாரிப்பு மற்றும் இயந்திர சோதனை.',
      salesTitle: 'வாலறிவன் (வணிகம்)',
      salesDesc: 'விற்பனை, விநியோகம், விநியோகஸ்தர் பிணையம் மற்றும் வாடிக்கையாளர் உறவுகள்.',
      supplyTitle: 'அருளாட்சி (விநியோகம் & வேளாண்மை)',
      supplyDesc: 'மூலப்பொருட்கள் கொள்முதல், விவசாய செயலாக்கம் மற்றும் விநியோகச் சங்கிலி.',
      futureTitle: 'ஈஓஎஸ் கேட்வே (எதிர்கால போர்டல்)',
      futureDesc: 'டிஜிட்டல் அமைப்பு ஒருங்கிணைப்பு, ஈஆர்பி, சிஆர்எம் மற்றும் பகுப்பாய்வு.',
    },
    entities: {
      eyebrow: 'செயல்பாட்டு கட்டமைப்பு',
      title: 'சுற்றுச்சூழல் நிறுவனங்கள்',
      subtitle: 'ஒவ்வொரு நிறுவனமும் வரையறுக்கப்பட்ட எல்லைக்குள் ஏகம் அறக்கட்டளையின் கீழ் இணைந்து செயல்படுகிறது.',
      inquireBtn: 'விசாரணை அனுப்புக',
      visitSiteBtn: 'அதிகாரப்பூர்வ இணையதளம்',
    },
    about: {
      eyebrow: 'ஏகம் அடையாளம் & தத்துவம்',
      title: 'ஏகம் (AEGAM) பற்றி — ஒன்றிய ஒளியின் மூலம் ஒற்றுமை',
      subtitle: 'நீண்டகால ஒழுங்குபடுத்தப்பட்ட வளர்ச்சி, வெளிப்படையான பொறுப்புடைமை மற்றும் கூட்டு கலாச்சாரத்திற்காக உருவாக்கப்பட்ட தொழில்துறை அமைப்பு.',
      etymologyTitle: 'ஏகம் (Egam / AEGAM)',
      etymologySub: 'சொற்பிறப்பியல் & ஆன்மீக சாரம்',
      etymologyDesc1: 'தமிழ் மரபில், ஏகம் என்பது ஒரே நோக்கம், முதன்மையான ஒன்றுமை மற்றும் "ஒன்றிய ஒளியின் மூலம் ஒற்றுமை" என்பதாகும்.',
      etymologyDesc2: 'துண்டாடப்பட்ட போட்டி உலகில், நிர்வாகம், உற்பத்தி, விற்பனை மற்றும் விநியோகச் சங்கிலியை ஏகம் ஒரே திசையில் ஒருங்கிணைக்கிறது.',
      philosophyTitle: 'ஏகம் தத்துவம்',
      collabTitle: 'அழிவுக்குப் பதில் ஒத்துழைப்பு',
      collabDesc: 'விலைப்போர்களுக்குப் பதிலாக விநியோகஸ்தர்கள் மற்றும் விற்பனையாளர்களிடையே நடைமுறை ஒத்துழைப்பை ஊக்குவித்தல்.',
      accountabilityTitle: 'வெளிப்படையான பொறுப்புடைமை',
      accountabilityDesc: 'நிறுவனங்களுக்கிடையேயான தெளிவான எல்லைகள் ஒவ்வொரு பங்கையும் வெளிப்படையானதாக மாற்றுகின்றன.',
      knowledgeTitle: 'அறிவுப் பாதுகாப்பு',
      knowledgeDesc: 'உற்பத்தி முறைகள் மற்றும் பொறியியல் விவரங்களை தரப்படுத்துவதன் மூலம் தனிநபர் நினைவாற்றல் சார்ந்திருப்பதை குறைத்தல்.',
      commTitle: 'செயல்பாட்டுத் தொடர்புத் தத்துவம்',
      commSub: 'போலி விளம்பரங்கள் இன்றி தெளிவான, உண்மையான செயல்பாட்டுத் தொடர்பைப் பேணுதல்.',
      founderTitle: 'தலைமுறைகளுக்கான உருவாக்கம், குறுகிய கால விளம்பரம் அல்ல',
      founderQuote: 'தொழில்துறை சிறப்புக்கு இயற்பியல் பொறியியல் மற்றும் உயர் நம்பிக்கை நிர்வாகம் இரண்டும் தேவை என்ற நம்பிக்கையில் ஏகம் நிறுவப்பட்டது. நாங்கள் உண்மையான இயந்திரங்களையும் உட்கட்டமைப்பையும் உருவாக்குகிறோம்.',
      exploreStructure: 'நிறுவனங்களின் கட்டமைப்பை ஆராய்க',
      getInTouch: 'தொடர்பு கொள்க',
    },
    ecosystemPage: {
      eyebrow: 'ஏகம் சுற்றுச்சூழல் கட்டமைப்பு',
      title: 'ஏகம் சுற்றுச்சூழல் கட்டமைப்பு & நிறுவன பாத்திரங்கள்',
      subtitle: 'ஏகம் பிரத்யேக சட்டப்பூர்வ நிறுவனங்கள் மூலம் ஒருங்கிணைந்த நிர்வாகத்தின் கீழ் செயல்படுகிறது.',
      selectEntity: 'விவரங்களைக் காண நிறுவனத்தைத் தேர்ந்தெடுக்கவும்',
      phase2Readiness: 'கட்டம் 2 தயார்நிலை',
      phase2Desc: 'எதிர்கால ஈஓஎஸ் போர்டலுக்கான நுழைவாயிலாக ஏகம் எவ்வாறு செயல்படுகிறது என்பதை அறியுங்கள்.',
      previewEosBtn: 'ஈஓஎஸ் கேட்வேயை முன்னோட்டம் காண்க',
      roleScope: 'நிறுவன பங்கு & எல்லை',
      accountabilities: 'முக்கிய பொறுப்புகள்',
      focusTags: 'செயல்பாட்டு குறிச்சொற்கள்',
      governanceBoundary: 'நிர்வாக எல்லை',
      participationTitle: 'சுற்றுச்சூழல் பங்களிப்பு vs உரிமை',
      participationSub: 'செயல்பாட்டு பங்களிப்புகள், விநியோகஸ்தர் உறவுகள் மற்றும் நிறுவன உரிமைக்கு இடையே தெளிவான எல்லைகளை ஏகம் பேணுகிறது.',
    },
    products: {
      eyebrow: 'தொழில்துறை இயந்திரங்கள்',
      title: 'வணிக ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரங்கள்',
      subtitle: 'அதிகபட்ச எண்ணெய் விளைச்சல், கட்டமைப்பு ஆயுள் மற்றும் குறைந்த உராய்வு வெப்பத்திற்காக வடிவமைக்கப்பட்டுள்ளது.',
      flagshipBadge: 'முதன்மையான வணிக இயந்திரம்',
      requestQuote: 'தொழில்நுட்ப விலைப்புள்ளி கோருக',
      specsTitle: 'முக்கிய தொழில்நுட்ப விவரங்கள்',
      filterLabel: 'வகைப்பாடு:',
      visitAeganai: 'பிரத்யேக இணையதளம் www.aeganai.in காண்க',
      inquireSpecs: 'இயந்திர விவரங்கள் & விலை அறிய',
      customSetupTitle: 'முழுமையான எண்ணெய் ஆலை அல்லது தனிப்பயன் இயந்திரங்கள் தேவையா?',
      customSetupSub: 'எண்ணெய் ஆலை அமைப்புகள் மற்றும் விதை பதப்படுத்தும் அளவுகளை அறிய www.aeganai.in தளத்தைப் பார்வையிடவும்.',
    },
    infrastructure: {
      eyebrow: 'தொழில்துறை உட்கட்டமைப்பு',
      title: 'உண்மையான பட்டறை ஒழுக்கத்தின் மீது கட்டப்பட்டது',
      subtitle: 'ஏகம் வளாகத்தில் கனரக உற்பத்தி பட்டறைகள், ரோட்டரி அசெம்பிளி கோடுகள், லேத் இயந்திரங்கள் மற்றும் 48 மணிநேர சோதனை மையங்கள் உள்ளன.',
      exploreFull: 'முழு உட்கட்டமைப்பு விவரங்கள்',
    },
    gallery: {
      eyebrow: 'செயல்பாடுகள் புகைப்படத் தொகுப்பு',
      title: 'பட்டறை தயாரிப்பு & வளாகப் புகைப்படங்கள்',
      subtitle: 'எங்கள் பட்டறை அசெம்பிளி, இயந்திர சோதனை மற்றும் தொழில்துறை வளாகத்தைப் படம் பிடிக்கும் உண்மையான புகைப்படங்கள்.',
      viewAll: 'முழுமையான புகைப்படத் தொகுப்பைக் காண்க',
      categoryLabel: 'வகை:',
      closeViewer: 'மூடுக',
    },
    futureVision: {
      eyebrow: 'எதிர்கால கட்டமைப்பு',
      title: 'ஈஓஎஸ் கேட்வே & டிஜிட்டல் மாற்றம்',
      subtitle: 'டீலர் போர்டல்கள், சரக்கு கண்காணிப்பு மற்றும் சுற்றுச்சூழல் நுண்ணறிவிற்கான அடித்தளத்தை தயாரித்தல்.',
      eosTitle: 'எகோசிஸ்டம் ஆப்பரேட்டிங் சிஸ்டம் (EOS)',
      eosDesc: 'அனைத்து செயல்பாட்டு நிறுவனங்களையும் தடையின்றி இணைக்கும் ஒருங்கிணைந்த டிஜிட்டல் இடைமுகம்.',
      badge: 'கட்டமைப்பு தயார் செய்யப்பட்டுள்ளது',
    },
    faq: {
      eyebrow: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      title: 'சுற்றுச்சூழல் தெளிவு & நிர்வாக கேள்விகள்',
      subtitle: 'ஏகம் கட்டமைப்பு, நிறுவன பாத்திரங்கள், உற்பத்தி மற்றும் பொதுக் கொள்கைகள் குறித்த தெளிவான பதில்கள்.',
      searchPlaceholder: 'கேள்விகளைத் தேடுக (எ.கா. ரோட்டரி, நிறுவனங்கள், முதலீடு, மென்பொருள்)...',
      categoryLabel: 'வகை:',
      noResults: 'பொருந்தும் கேள்விகள் எதுவும் கிடைக்கவில்லை.',
      resetFilters: 'தேடலை மீட்டமைக்குக',
      unresolvedTitle: 'மேலும் கேள்விகள் உள்ளனவா?',
      unresolvedSub: 'எங்கள் குழு அனைத்து விசாரணைகளுக்கும் வெளிப்படையான பதிலை வழங்குகிறது.',
      submitInquiryBtn: 'ஏகமிற்கு விசாரணை சமர்ப்பிக்கவும்',
    },
    contact: {
      eyebrow: 'செயல்பாட்டு விசாரணைகள்',
      title: 'ஏகம் தலைமையகத்தைத் தொடர்பு கொள்ளவும்',
      subtitle: 'உற்பத்தி விசாரணைகள், டீலர்ஷிப் விண்ணப்பங்கள் அல்லது கூட்டாண்மை விவாதங்களுக்கு நேரடியாக அணுகவும்.',
      phone: 'தொலைபேசி விசாரணை',
      whatsapp: 'வாட்ஸ்அப் பிசினஸ்',
      email: 'அதிகாரப்பூர்வ மின்னஞ்சல்',
      address: 'தொழில்துறை வளாக முகவரி',
      submit: 'விசாரணையைச் சமர்ப்பிக்கவும்',
      submitting: 'சமர்ப்பிக்கப்படுகிறது...',
      successTitle: 'விசாரணை வெற்றிகரமாகச் சமர்ப்பிக்கப்பட்டது',
      successDesc: 'ஏகமைத் தொடர்பு கொண்டமைக்கு நன்றி. எங்கள் ஒருங்கிணைப்பாளர்கள் விரைவில் உங்களைத் தொடர்பு கொள்வர்.',
      submitAnother: 'மற்றொரு விசாரணை சமர்ப்பிக்கவும்',
      nameLabel: 'உங்கள் முழு பெயர் *',
      phoneLabel: 'தொலைபேசி / வாட்ஸ்அப் எண் *',
      emailLabel: 'மின்னஞ்சல் முகவரி *',
      orgLabel: 'நிறுவனம் / தொழில்',
      purposeLabel: 'விசாரணை நோக்கம் *',
      messageLabel: 'விசாரணை செய்தி *',
      mapTitle: 'வளாக இருப்பிட வரைபடம்',
    },
    modals: {
      inquiryTitle: 'செயல்பாட்டு விசாரணை சமர்ப்பிக்கவும்',
      inquirySub: 'ஏகம் ஒருங்கிணைப்பாளர்களுக்கான நேரடித் தொடர்பு வரிசை',
      eosTitle: 'கட்டம் 2 ஈஓஎஸ் கேட்வே முன்னோட்டம்',
      eosSub: 'சுற்றுச்சூழல் இயங்குதள போர்டல் கருத்து',
      requestAccess: 'டீலர் அணுகல் கோருக',
      close: 'மூடுக',
    },
    currentVsFuture: {
      eyebrow: 'வளர்ச்சிப் பாதை',
      title: 'கட்டம் 1 அடித்தளம் vs கட்டம் 2 ஈஓஎஸ் கேட்வே',
      subtitle: 'தேவையற்ற மென்பொருள் சுமையின்றி தெளிவான செயல்பாட்டை உறுதி செய்யும் கட்டமைப்பு.',
      phase1Title: 'கட்டம் 1: தற்போதைய டிஜிட்டல் அடித்தளம்',
      phase1Subtitle: 'அடையாளம், உற்பத்திச் சான்று, நம்பிக்கை மற்றும் நேரடித் தொடர்பில் கவனம் செலுத்துகிறது.',
      phase2Title: 'கட்டம் 2: எதிர்கால எகோசிஸ்டம் ஆப்பரேட்டிங் சிஸ்டம்',
      phase2Subtitle: 'டீலர்கள், சரக்கு கண்காணிப்பு மற்றும் ஈஆர்பி வசதியை இணைக்கும் டிஜிட்டல் அமைப்பு.',
    },
    operationalPhilosophy: {
      eyebrow: 'முக்கிய மதிப்புகள் & தத்துவம்',
      title: 'ஏகமை வழிநடத்தும் கோட்பாடுகள்',
      subtitle: 'தெளிவு, பொறுப்புடைமை மற்றும் தொடர்ச்சியான முன்னேற்றத்தில் ஒவ்வொரு முடிவையும் நிலைநிறுத்துதல்.',
    },
    footer: {
      rights: 'ஏகம் குழுமம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      phase: 'கட்டம் 1 அடிப்படை கட்டமைப்பு (நிலையான தளம்)',
      governance: 'நிர்வாகம் & எல்லைகள்',
      ecosystemSummary: 'ஒருங்கிணைந்த தொழில்துறை & முயற்சி சுற்றுச்சூழல்',
      quickLinks: 'விரைவு வழிசெலுத்தல்',
      entitiesList: 'சுற்றுச்சூழல் நிறுவனங்கள்',
    },
  },
};
