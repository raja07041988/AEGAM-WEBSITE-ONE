/**
 * AEGAM Ecosystem Future Architecture Declarations
 *
 * NOTE: As per Phase-1 static site specifications, these interfaces map out
 * future expansion modules for Phase-2/Phase-3. No live backend or API server
 * is executed in Phase-1.
 */

export interface FutureModuleConfig {
  id: string;
  name: string;
  taName: string;
  status: 'planned' | 'architected' | 'phase_2';
  targetPhase: string;
  description: string;
}

export const FUTURE_MODULES: FutureModuleConfig[] = [
  {
    id: 'cms',
    name: 'Content Management System (CMS)',
    taName: 'உள்ளடக்க மேலாண்மை அமைப்பு',
    status: 'planned',
    targetPhase: 'Phase 2',
    description: 'Static headless CMS integration for publication and media management.',
  },
  {
    id: 'dealer_portal',
    name: 'Dealer & Distributor Portal',
    taName: 'டீலர் & விநியோகஸ்தர் போர்டல்',
    status: 'architected',
    targetPhase: 'Phase 2',
    description: 'Machinery order tracking, warranty registration, and spare parts catalog for regional dealers.',
  },
  {
    id: 'admin_panel',
    name: 'Unified Admin & Governance Portal',
    taName: 'ஒருங்கிணைந்த நிர்வாக போர்டல்',
    status: 'planned',
    targetPhase: 'Phase 2',
    description: 'Internal entity oversight, compliance logging, and operational audit reports.',
  },
  {
    id: 'erp',
    name: 'AEGAM ERP Engine',
    taName: 'ஏகம் ஈஆர்பி இன்ஜின்',
    status: 'planned',
    targetPhase: 'Phase 3',
    description: 'Heavy fabrication inventory, bill of materials (BOM), and raw steel procurement tracking.',
  },
  {
    id: 'crm',
    name: 'Customer Relationship System',
    taName: 'வாடிக்கையாளர் உறவு நிர்வாகம்',
    status: 'planned',
    targetPhase: 'Phase 2',
    description: 'Lead routing for rotary oil press buyers and industrial client history.',
  },
  {
    id: 'ai_assistant',
    name: 'AEGAM AI Intelligence Hub',
    taName: 'ஏகம் ஏஐ நுண்ணறிவு மையம்',
    status: 'planned',
    targetPhase: 'Phase 3',
    description: 'Client-side knowledge base assistant for rotary machinery troubleshooting & maintenance manuals.',
  },
  {
    id: 'learning_platform',
    name: 'Industrial & Agro Learning Platform',
    taName: 'தொழில்துறை & வேளாண் கற்றல் தளம்',
    status: 'planned',
    targetPhase: 'Phase 3',
    description: 'Technical training for cold-press oil extraction operators and sustainable farming.',
  },
  {
    id: 'donation_platform',
    name: 'AEGAM Trust Community Impact Fund',
    taName: 'ஏகம் அறக்கட்டளை சமூக மேம்பாட்டு நிதி',
    status: 'planned',
    targetPhase: 'Phase 3',
    description: 'Non-profit trust initiatives for community development and rural engineering skill grants.',
  },
  {
    id: 'volunteer_portal',
    name: 'Volunteer & Ambassador Network',
    taName: 'தன்னார்வலர் & தூதர் நெட்வொர்க்',
    status: 'planned',
    targetPhase: 'Phase 3',
    description: 'Community participation portal for rural development and sustainable agriculture programs.',
  },
];
