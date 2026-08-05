/**
 * AEGAM Ecosystem TypeScript Interfaces
 */

export type PageRoute = 
  | 'home'
  | 'about'
  | 'ecosystem'
  | 'products'
  | 'infrastructure'
  | 'gallery'
  | 'faq'
  | 'contact';

export interface EcosystemEntity {
  id: string;
  name: string;
  taName?: string;
  type: string;
  taType?: string;
  role: string;
  taRole?: string;
  shortDescription: string;
  taShortDescription?: string;
  fullDescription: string;
  taFullDescription?: string;
  keyResponsibilities: string[];
  taKeyResponsibilities?: string[];
  operationalFocus: string[];
  taOperationalFocus?: string[];
  governanceScope: string;
  taGovernanceScope?: string;
  iconName: string;
  badge: string;
  taBadge?: string;
  link?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  taName?: string;
  category: string;
  taCategory?: string;
  tagline: string;
  taTagline?: string;
  description: string;
  taDescription?: string;
  specifications: { label: string; value: string }[];
  taSpecifications?: { label: string; value: string }[];
  features: string[];
  taFeatures?: string[];
  capacity: string;
  taCapacity?: string;
  powerRequirement: string;
  taPowerRequirement?: string;
  image: string;
  isFlagship?: boolean;
  externalLink?: string;
}

export interface InfrastructureFacility {
  id: string;
  title: string;
  taTitle?: string;
  subtitle: string;
  taSubtitle?: string;
  description: string;
  taDescription?: string;
  keySpecs: string[];
  taKeySpecs?: string[];
  image: string;
  category: 'workshop' | 'fabrication' | 'coordination' | 'campus';
  taCategory?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  taQuestion?: string;
  answer: string;
  taAnswer?: string;
  category: 'General' | 'Ecosystem Structure' | 'Manufacturing' | 'Governance & Investment' | 'Future Direction' | 'Collaborations';
  taCategory?: string;
  highlights?: string[];
  taHighlights?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  taTitle?: string;
  category: 'Operations' | 'Workshop' | 'Machinery' | 'Campus' | 'Engineering' | 'Fabrication';
  taCategory?: string;
  image: string;
  caption: string;
  taCaption?: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  organization?: string;
  inquiryType: 'manufacturing' | 'partnership' | 'collaboration' | 'dealership' | 'future_opportunities' | 'general';
  message: string;
  agreeToTerms: boolean;
}
