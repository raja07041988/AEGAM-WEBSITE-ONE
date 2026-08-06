import { InfrastructureFacility } from '../types';
import { imgHeroIndustrial, imgCampusFacility } from '../assets/images';

export const INFRASTRUCTURE_DATA: InfrastructureFacility[] = [
  {
    id: 'machinery-assembly-workshop',
    title: 'Industrial Machinery Workshop & Heavy Bay',
    taTitle: 'தொழில்துறை இயந்திர பட்டறை & கனரக பே',
    subtitle: 'Heavy Equipment Assembly & Rotary Machinery Engineering',
    taSubtitle: 'கனரக இயந்திரங்கள் அசெம்பிளி & ரோட்டரி பொறியியல்',
    description: 'Equipped with heavy overhead handling equipment, precision alignment benches, and continuous assembly lines specifically configured for rotary oil extraction machinery manufacturing.',
    taDescription: 'கனரக ஓவர்ஹெட் கிரேன்கள், துல்லிய சீரமைப்பு மேசைகள் மற்றும் ரோட்டரி எண்ணெய் இயந்திர உற்பத்திக்கான தொடர்ச்சியான அசெம்பிளி லைன்களுடன் பொருத்தப்பட்டுள்ளது.',
    keySpecs: [
      'Heavy duty overhead crane & hoist handling',
      'Precision mechanical torque & alignment test benches',
      'Dedicated rotary oil expeller assembly stations',
      'Vibration testing and 24-hr trial operation bays'
    ],
    taKeySpecs: [
      'கனரக ஓவர்ஹெட் கிரேன் & தூக்கும் வசதி',
      'துல்லியமான முறுக்குவிசை மற்றும் சீரமைப்பு சோதனை மேசைகள்',
      'ரோட்டரி எண்ணெய் இயந்திர அசெம்பிளி நிலையங்கள்',
      'அதிர்வு சோதனை மற்றும் 24 மணிநேர சோதனை தளங்கள்'
    ],
    image: imgHeroIndustrial,
    category: 'workshop',
    taCategory: 'பட்டறை'
  },
  {
    id: 'heavy-fabrication-bay',
    title: 'Structural Steel & Heavy Fabrication Bay',
    taTitle: 'கட்டமைப்பு எஃகு & கனரக தயாரிப்பு பிரிவு',
    subtitle: 'Metal Forming, Plate Cutting & Certified Welding Facilities',
    taSubtitle: 'உலோக வெட்டுதல், வளைத்தல் & வெல்டிங் வசதிகள்',
    description: 'Features high-capacity CNC plasma and flame cutting equipment, heavy hydraulic plate rollers, press brakes, and MIG/TIG welding bays for structural machinery chassis.',
    taDescription: 'உயர் திறன் கொண்ட சிஎன்சி கட்டிங், ஹைட்ராலிக் பிரஸ் மற்றும் எம்ஐஜி/டிஐஜி வெல்டிங் தளங்களுடன் இயந்திர சட்டங்களை உருவாக்க பயன்படுகிறது.',
    keySpecs: [
      'High capacity CNC metal cutting and plate prep',
      'Certified structural welding and inspection standards',
      'Heavy structural steel frame welding jigs',
      'Surface preparation and industrial coating application'
    ],
    taKeySpecs: [
      'சிஎன்சி உலோக வெட்டுதல் வசதி',
      'சான்றளிக்கப்பட்ட கட்டமைப்பு வெல்டிங் தரம்',
      'கனரக எஃகு வெல்டிங் ஜிக் அமைப்புகள்',
      'மேற்பரப்பு தயாரிப்பு மற்றும் தொழில்துறை பூச்சு'
    ],
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    category: 'fabrication',
    taCategory: 'தயாரிப்பு'
  },
  {
    id: 'supply-chain-coordination-hub',
    title: 'Procurement & Raw Material Yard',
    taTitle: 'கொள்முதல் & மூலப்பொருள் தளம்',
    subtitle: 'Arulatchi OPC Supply Operations & Material Logistics',
    taSubtitle: 'அருளாட்சி ஒபிசி விநியோகச் செயல்பாடுகள் & தளவாடங்கள்',
    description: 'Structured raw material storage yard and staging area for high-grade cast iron, structural steel sections, alloy shafts, and standardized electrical drive motors.',
    taDescription: 'உயர்தர வார்ப்பிரும்பு, எஃகு, அலாய் ஷாஃப்ட்டுகள் மற்றும் மின்சார மோட்டார்களுக்கான பாதுகாப்பான சேமிப்பு மற்றும் தளவாடத் தளம்.',
    keySpecs: [
      'Raw material quality inspection and metallurgical tagging',
      'Weather-protected component inventory storage',
      'Direct dispatch loading bays for machinery shipments',
      'Systematic material flow tracking'
    ],
    taKeySpecs: [
      'மூலப்பொருள் தரப் பரிசோதனை',
      'பாதுகாக்கப்பட்ட உதிரிபாகங்கள் சேமிப்பகம்',
      'இயந்திரங்கள் ஏற்றுமதி செய்வதற்கான நேரடி தளங்கள்',
      'முறையான பொருட்கள் கண்காணிப்பு'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    category: 'coordination',
    taCategory: 'ஒருங்கிணைப்பு'
  },
  {
    id: 'aegam-campus-headquarters',
    title: 'AEGAM Industrial Campus & Governance Hub',
    taTitle: 'ஏகம் தொழில்துறை வளாகம் & நிர்வாக மையம்',
    subtitle: 'Unified Operational Campus & Ecosystem Administration',
    taSubtitle: 'ஒருங்கிணைந்த செயல்பாட்டு வளாகம் & நிர்வாகம்',
    description: 'The physical home of AEGAM TRUST and core entity leadership, providing structured operational spaces, engineering design offices, and strategic collaboration halls.',
    taDescription: 'ஏகம் டிரஸ்ட் மற்றும் முதன்மை நிறுவனத் தலைமைகளின் தலைமையகம்; பொறியியல் வடிவமைப்பு அலுவலகங்கள் மற்றும் கூட்டரங்குகளைக் கொண்டுள்ளது.',
    keySpecs: [
      'Ecosystem administration & entity coordination offices',
      'Engineering design & R&D technical center',
      'Stakeholder conference & collaboration hall',
      'Scalable future expansion parcel'
    ],
    taKeySpecs: [
      'நிர்வாகம் & நிறுவனங்களின் ஒருங்கிணைப்பு அலுவலகங்கள்',
      'பொறியியல் வடிவமைப்பு & ஆராய்ச்சி மையம்',
      'பங்குதாரர் மாநாட்டு அரங்கம்',
      'எதிர்கால விரிவாக்க நிலப்பரப்பு'
    ],
    image: imgCampusFacility,
    category: 'campus',
    taCategory: 'வளாகம்'
  }
];
