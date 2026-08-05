import { ProductItem } from '../types';

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'rotary-oil-extractor-heavy',
    name: 'Heavy-Duty Industrial Rotary Oil Machine',
    taName: 'கனரக தொழில்துறை ரோட்டரி எண்ணெய் இயந்திரம்',
    category: 'Rotary Oil Extraction Machinery',
    taCategory: 'ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரங்கள்',
    tagline: 'High-yield cold-pressed oil extraction system built for continuous industrial operations.',
    taTagline: 'தொடர்ச்சியான தொழில்துறை செயல்பாடுகளுக்காக உருவாக்கப்பட்ட அதிக விளைச்சல் தரும் மரச்செக்கு/ரோட்டரி எண்ணெய் இயந்திரம்.',
    description: 'Engineered by Aegan Anegan Industries Pvt Ltd, this heavy-duty rotary oil extraction machine utilizes traditional cold-press mechanical force combined with heavy cast iron frames and precision-hardened steel gears. Designed for maximum oil output, low seed temperature preservation, and long-term mechanical reliability.',
    taDescription: 'ஏகன் அனேகன் இண்டஸ்ட்ரீஸ் நிறுவனத்தால் வடிவமைக்கப்பட்ட இந்த கனரக ரோட்டரி எண்ணெய் இயந்திரம், பாரம்பரிய மரச்செக்கு முறையுடன் கனரக இரும்புச் சட்டங்கள் மற்றும் கடினப்படுத்தப்பட்ட கியர்களைப் பயன்படுத்துகிறது. அதிக எண்ணெய் மகசூல் மற்றும் இயந்திர நம்பகத்தன்மைக்காக உருவாக்கப்பட்டது.',
    specifications: [
      { label: 'Extraction Mechanism', value: 'Traditional Cold-Press Rotary Wooden/Cast Core' },
      { label: 'Processing Capacity', value: '80 - 150 kg/hr (Seed Dependent)' },
      { label: 'Frame Structure', value: 'Heavy Cast Iron & Reinforced Structural Steel' },
      { label: 'Drive Unit', value: 'Heavy Duty Helical Gearbox with High Torque Motor' },
      { label: 'Power Requirement', value: '7.5 HP - 12.5 HP Three-Phase Motor' },
      { label: 'Suitable Oilseeds', value: 'Sesame, Groundnut, Coconut, Mustard, Sunflower' },
      { label: 'Operational Duty', value: 'Continuous 24/7 Industrial Rating' },
      { label: 'Maintenance Interval', value: 'Low maintenance with accessible lubrication ports' }
    ],
    taSpecifications: [
      { label: 'பிழிந்தெடுக்கும் முறை', value: 'பாரம்பரிய மரச்செக்கு / ரோட்டரி கோர்' },
      { label: 'செயலாக்கத் திறன்', value: 'மணிக்கு 80 - 150 கிலோ (விதையைப் பொறுத்து)' },
      { label: 'சட்ட அமைப்பு', value: 'கனரக வார்ப்பிரும்பு & வலுவூட்டப்பட்ட எஃகு' },
      { label: 'மோட்டார் அலகு', value: 'ஹெலிகல் கியர்பாக்ஸ் & உயர் டார்க் மோட்டார்' },
      { label: 'மின்சாரத் தேவை', value: '7.5 எச்பி - 12.5 எச்பி த்ரீ-பேஸ் மோட்டார்' },
      { label: 'பொருத்தமான விதைகள்', value: 'எள், நிலக்கடலை, தேங்காய், கடுகு, சூரியகாந்தி' },
      { label: 'செயல்பாட்டு நேரம்', value: 'தொடர்ச்சியான 24/7 தொழில்துறை திறன்' },
      { label: 'பராமரிப்பு', value: 'எளிதான மசகு வசதியுடன் குறைந்த பராமரிப்பு' }
    ],
    features: [
      'Maximum oil yield retaining natural aroma, nutrients, and clarity',
      'Ultra-durable vibration-damped heavy cast frame',
      'Precision gear-driven rotary speed control for temperature regulation',
      'Integrated seed feeding hopper and oil filtration outlet channel',
      'Safety enclosures and emergency cutoff controls built to industrial standards'
    ],
    taFeatures: [
      'இயற்கை மணம் மற்றும் ஊட்டச்சத்து மாறாமல் அதிகபட்ச எண்ணெய் விளைச்சல்',
      'அதிர்வுகளற்ற மிக உறுதியான கனரக வார்ப்பிரும்பு சட்டம்',
      'வெப்பநிலையைக் கட்டுப்படுத்தும் துல்லிய கியர் சுழற்சி வேகம்',
      'ஒருங்கிணைக்கப்பட்ட விதை தொட்டி மற்றும் எண்ணெய் வடிகட்டுதல் வழி',
      'பாதுகாப்பான அவசர நிறுத்தக் கட்டுப்பாடுகளுடன் கூடிய தொழில்துறை தரம்'
    ],
    capacity: '100 - 150 kg/hour',
    taCapacity: 'மணிக்கு 100 - 150 கிலோ',
    powerRequirement: '10 HP 3-Phase',
    taPowerRequirement: '10 எச்பி த்ரீ-பேஸ்',
    image: '/src/assets/images/aegam_rotary_oil_machine_1785940118220.jpg',
    isFlagship: true,
    externalLink: 'https://www.aeganai.in'
  },
  {
    id: 'rotary-oil-extractor-compact',
    name: 'Commercial Rotary Oil Extraction Unit',
    taName: 'வணிகரீதியான ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரம்',
    category: 'Rotary Oil Extraction Machinery',
    taCategory: 'ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரங்கள்',
    tagline: 'Compact, energy-efficient rotary expeller designed for medium-scale commercial processing.',
    taTagline: 'நடுத்தர அளவிலான வணிக உற்பத்திக்கு ஏற்ற ஆற்றல்மிக்க ரோட்டரி எண்ணெய் இயந்திரம்.',
    description: 'A versatile rotary oil machine tailored for medium processing units, farm cooperatives, and commercial oil producers. Delivers premium unrefined cold-pressed oils while maintaining energy efficiency and easy operator handling.',
    taDescription: 'நடுத்தர ஆலைகள், விவசாயக் கூட்டுறவு அமைப்புகள் மற்றும் வர்த்தக உற்பத்தியாளர்களுக்கு ஏற்ற பல்துறை எண்ணெய் இயந்திரம். குறைந்த மின்சார நுகர்வுடன் தரமான சுத்தமான எண்ணெயை வழங்குகிறது.',
    specifications: [
      { label: 'Extraction Mechanism', value: 'Rotary Cold Press' },
      { label: 'Processing Capacity', value: '40 - 70 kg/hr' },
      { label: 'Frame Structure', value: 'Vibration Resistant Steel Chassis' },
      { label: 'Drive Unit', value: 'Precision Reduction Gear Box' },
      { label: 'Power Requirement', value: '5 HP Three-Phase Motor' },
      { label: 'Footprint', value: 'Compact 5ft x 4ft Industrial Base' }
    ],
    taSpecifications: [
      { label: 'பிழிந்தெடுக்கும் முறை', value: 'ரோட்டரி கோல்ட் பிரஸ்' },
      { label: 'செயலாக்கத் திறன்', value: 'மணிக்கு 40 - 70 கிலோ' },
      { label: 'சட்ட அமைப்பு', value: 'அதிர்வு தாங்கும் எஃகு சேசிஸ்' },
      { label: 'மோட்டார் அலகு', value: 'துல்லிய ரிடக்ஷன் கியர் பாக்ஸ்' },
      { label: 'மின்சாரத் தேவை', value: '5 எச்பி த்ரீ-பேஸ் மோட்டார்' },
      { label: 'தேவையான இடம்', value: '5 அடி x 4 அடி சிறிய தொழில்துறை தளம்' }
    ],
    features: [
      'Optimized for artisanal cold-pressed oil production',
      'Quick seed changeover and easy washdown design',
      'Reduced noise vibration isolators',
      'High energy efficiency rating'
    ],
    taFeatures: [
      'தரமான மரச்செக்கு வகை எண்ணெய் உற்பத்திக்கு ஏற்றது',
      'எளிதில் விதைகளை மாற்றி சுத்தப்படுத்தும் வடிவமைப்பு',
      'குறைந்த சத்தம் மற்றும் அதிர்வு கட்டுப்பாடு',
      'உயர் மின்சார சேமிப்பு திறன்'
    ],
    capacity: '50 - 70 kg/hour',
    taCapacity: 'மணிக்கு 50 - 70 கிலோ',
    powerRequirement: '5 HP 3-Phase',
    taPowerRequirement: '5 எச்பி த்ரீ-பேஸ்',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    isFlagship: false,
    externalLink: 'https://www.aeganai.in'
  },
  {
    id: 'industrial-fabrication-systems',
    name: 'Custom Heavy Fabrication & Structural Assemblies',
    taName: 'தனிப்பயன் கனரக கட்டமைப்பு தயாரிப்புகள்',
    category: 'Fabrication & Engineering Operations',
    taCategory: 'தயாரிப்பு & பொறியியல் செயல்பாடுகள்',
    tagline: 'Precision structural fabrication, machinery chassis, and specialized industrial welded components.',
    taTagline: 'துல்லியமான கட்டமைப்பு வெல்டிங், இயந்திர சேசிஸ் மற்றும் சிறப்பு தொழில்துறை பாகங்கள்.',
    description: 'Our workshop fabrication division executes custom heavy structural engineering, precision CNC metal forming, heavy plate cutting, and certified structural welding for industrial machinery plants.',
    taDescription: 'எங்கள் பட்டறைப் பிரிவு கனரக எஃகு கட்டமைப்பு வடிவமைப்பு, சிஎன்சி உலோக கட்டிங் மற்றும் சான்றளிக்கப்பட்ட வெல்டிங் பணிகளைத் தொழில்முறையாகச் செய்கிறது.',
    specifications: [
      { label: 'Materials Handled', value: 'Mild Steel, Stainless Steel (304/316), Carbon Steel' },
      { label: 'Machining Capabilities', value: 'Precision Milling, Heavy Turning, Boring, CNC Flame Cutting' },
      { label: 'Welding Standards', value: 'TIG, MIG, Submerged Arc Welding with NDT Quality Checks' },
      { label: 'Assembly Capacity', value: 'Up to 25 Ton Single Component Handling' }
    ],
    taSpecifications: [
      { label: 'பயன்படுத்தப்படும் பொருட்கள்', value: 'மைல்ட் ஸ்டீல், ஸ்டெயின்லெஸ் ஸ்டீல் (304/316), கார்பன் ஸ்டீல்' },
      { label: 'இயந்திர திறன்கள்', value: 'மில்லிங், ஹெவி டர்னிங், போரிங், சிஎன்சி கட்டிங்' },
      { label: 'வெல்டிங் தரம்', value: 'டிஐஜி, எம்ஐஜி வெல்டிங் மற்றும் தரக் கட்டுப்பாடு' },
      { label: 'தயாரிப்புத் திறன்', value: '25 டன் வரை ஒற்றைப் பாகங்கள் கையாளும் வசதி' }
    ],
    features: [
      'Custom machinery framework and enclosure manufacturing',
      'Rigorous stress-relieving and surface treatment procedures',
      'Dimensional tolerance verification with precision metrology',
      'Turnkey machinery assembly and bench testing'
    ],
    taFeatures: [
      'தனிப்பயன் இயந்திர சட்டங்கள் மற்றும் உறை தயாரிப்பு',
      'மேற்பரப்பு சிகிச்சை மற்றும் அரிப்பு எதிர்ப்பு பூச்சு',
      'துல்லிய அளவீட்டு கருவிகள் மூலம் தரம் சரிபார்த்தல்',
      'முழுமையான அசெம்பிளி மற்றும் 48 மணிநேர சோதனை'
    ],
    capacity: 'Custom Specs',
    taCapacity: 'தேவைக்கேற்ப',
    powerRequirement: 'Industrial Standard',
    taPowerRequirement: 'தொழில்துறை தரம்',
    image: '/src/assets/images/aegam_hero_industrial_1785940103847.jpg',
    isFlagship: false,
    externalLink: 'https://www.aeganai.in'
  }
];
