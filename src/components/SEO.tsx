import React, { useEffect } from 'react';
import { PageRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS_DATA } from '../data/products';
import { FAQS_DATA } from '../data/faqs';

interface SEOProps {
  page: PageRoute | 'not-found';
  productName?: string;
}

const DOMAIN = 'https://aegam.in';

export const SEO: React.FC<SEOProps> = ({ page, productName }) => {
  const { language } = useLanguage();
  const isTa = language === 'ta';

  // Dynamic Metadata based on page & language
  const getPageMeta = () => {
    switch (page) {
      case 'home':
        return {
          title: isTa 
            ? 'ஏகம் (AEGAM) — ஒருங்கிணைந்த தொழிற்துறை & நிர்வாக சுற்றுச்சூழல் அமைப்பு' 
            : 'AEGAM — Industrial Machinery Manufacturing & Operational Governance Ecosystem',
          description: isTa
            ? 'ஏகம் (AEGAM) என்பது கனரக ரோட்டரி எண்ணெய் இயந்திரங்கள் உற்பத்தி, பட்டறைத் தயாரிப்பு, அறக்கட்டளை நிர்வாகம் மற்றும் ஒருங்கிணைந்த வணிக செயல்பாடுகளை நிர்வகிக்கும் தொழிற்துறை அமைப்பாகும்.'
            : 'AEGAM is a unified industrial ecosystem engineering heavy rotary oil extraction machinery, industrial fabrication, stewardship governance, and structured commerce operations.',
          canonical: `${DOMAIN}/`,
        };
      case 'about':
        return {
          title: isTa 
            ? 'ஏகம் பற்றி — தொலைநோக்கு, நிர்வாக கொள்கை & அறக்கட்டளை ஆளுமை | AEGAM' 
            : 'About AEGAM — Operational Philosophy, Governance & Ecosystem Trust',
          description: isTa
            ? 'ஏகம் அமைப்பின் கொள்கைகள், நெறிமுறைகள், நிர்வாக அறக்கட்டளை மற்றும் நீண்டகால தொழில்துறை வளர்ச்சித் திட்டம் குறித்த முழுமையான விவரங்கள்.'
            : 'Learn about AEGAM Ecosystem Trust, governance framework, industrial discipline, operational peace, and long-term sustainable growth strategy.',
          canonical: `${DOMAIN}/about`,
        };
      case 'ecosystem':
        return {
          title: isTa 
            ? 'சுற்றுச்சூழல் கட்டமைப்பு & நிறுவன பாத்திரங்கள் | AEGAM Ecosystem' 
            : 'Ecosystem Architecture & Entity Framework | AEGAM Entities',
          description: isTa
            ? 'ஏகம் டிரஸ்ட், ஏகன் அநேகன் இண்டஸ்ட்ரீஸ், வாலறிவன் மற்றும் அருளாட்சி ஆகிய சிறப்பு நிறுவனங்களின் ஒருங்கிணைந்த கட்டமைப்பு.'
            : 'Explore AEGAM’s specialized entity structure: AEGAM Trust (Governance), Aegan Anegan Industries (Machinery Mfg), Valarivan (Commerce), and Arulatchi (Procurement).',
          canonical: `${DOMAIN}/ecosystem`,
        };
      case 'products':
        return {
          title: isTa 
            ? 'வணிக ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரங்கள் | AEGAN ANEGAN' 
            : 'Heavy Rotary Oil Extraction Machines & Expellers | Aegan Anegan Industries',
          description: isTa
            ? 'அதிக எண்ணெய் விளைச்சல், மரச்செக்கு பாரம்பரியம், கனரக இரும்புச்சட்டம் மற்றும் நீடித்த உழைப்பிற்கு புகழ்பெற்ற ஏகன் அநேகன் ரோட்டரி எண்ணெய் இயந்திரங்கள்.'
            : 'Commercial cold-press rotary oil extraction machines designed by Aegan Anegan Industries. High oil yield, hardened steel gears, heavy cast iron frames, and 24/7 industrial durability.',
          canonical: `${DOMAIN}/products`,
        };
      case 'infrastructure':
        return {
          title: isTa 
            ? 'தொழிற்துறை வளாகம் & பட்டறை உள்கட்டமைப்பு | AEGAM Infrastructure' 
            : 'Industrial Campus & Heavy Workshop Infrastructure | AEGAM Facilities',
          description: isTa
            ? 'ஏகம் வளாகத்தில் அமைந்துள்ள கனரக உற்பத்திப் பட்டறை, லேத் பிரிவு, சோதனைக் களம் மற்றும் அருளாட்சி மூலப்பொருள் கிடங்கு வசதிகள்.'
            : 'Explore AEGAM’s heavy fabrication bay, precision lathe machining section, 48-hour continuous test bay, and raw material storage yard.',
          canonical: `${DOMAIN}/infrastructure`,
        };
      case 'gallery':
        return {
          title: isTa 
            ? 'பட்டறை தயாரிப்பு & வளாக புகைப்படங்களின் தொகுப்பு | AEGAM Gallery' 
            : 'Industrial Workshop & Campus Photo Gallery | AEGAM Visuals',
          description: isTa
            ? 'ஏகன் அநேகன் பட்டறையில் நடக்கும் ரோட்டரி எண்ணெய் இயந்திர அசெம்பிளி, வெல்டிங் மற்றும் வளாகப் புகைப்படங்கள்.'
            : 'Real photos from Aegan Anegan manufacturing bays, heavy machinery testing, structural welding, and AEGAM industrial campus.',
          canonical: `${DOMAIN}/gallery`,
        };
      case 'faq':
        return {
          title: isTa 
            ? 'அடிக்கடி கேட்கப்படும் கேள்விகள் & பதில்கள் | AEGAM FAQs' 
            : 'Frequently Asked Questions & Answers | AEGAM FAQ',
          description: isTa
            ? 'ஏகம் சுற்றுச்சூழல் அமைப்பு, உற்பத்தி, நிர்வாகம் மற்றும் கூட்டாண்மை குறித்த தெளிவான கேள்விகள் மற்றும் பதில்கள்.'
            : 'Clear answers on AEGAM ecosystem structure, entity roles, rotary oil machine engineering, dealership partnerships, and future digital direction.',
          canonical: `${DOMAIN}/faq`,
        };
      case 'contact':
        return {
          title: isTa 
            ? 'ஏகம் தலைமையகத்தைத் தொடர்பு கொள்ளவும் | Contact AEGAM' 
            : 'Contact AEGAM Headquarters — Machinery & Partnership Inquiries',
          description: isTa
            ? 'இயந்திர உற்பத்தி விசாரணைகள், டீலர்ஷிப் விண்ணப்பங்கள் அல்லது மூலோபாயக் கூட்டாண்மைக்கு ஏகம் தலைமையகத்தைத் தொடர்பு கொள்ளவும்.'
            : 'Reach out to AEGAM for machinery manufacturing inquiries, distributor partnerships, operational collaboration, or administrative contact.',
          canonical: `${DOMAIN}/contact`,
        };
      case 'not-found':
      default:
        return {
          title: isTa ? 'பக்கம் கண்டறியப்படவில்லை | 404 — AEGAM' : 'Page Not Found | 404 — AEGAM',
          description: isTa
            ? 'மன்னிக்கவும், நீங்கள் தேடிய பக்கம் கண்டறியப்படவில்லை.'
            : 'The requested page could not be found on the AEGAM ecosystem portal.',
          canonical: `${DOMAIN}/404`,
        };
    }
  };

  const meta = getPageMeta();

  useEffect(() => {
    // 1. Title & Meta Description
    document.title = meta.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    // 2. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', meta.canonical);

    // 3. Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:url', content: meta.canonical },
      { property: 'og:type', content: page === 'products' ? 'product' : 'website' },
      { property: 'og:image', content: `${DOMAIN}/og-image.jpg` },
      { property: 'og:site_name', content: 'AEGAM Ecosystem' },
      { property: 'og:locale', content: isTa ? 'ta_IN' : 'en_US' },
      { property: 'og:locale:alternate', content: isTa ? 'en_US' : 'ta_IN' },
    ];

    ogTags.forEach(({ property, content }) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    });

    // 4. Twitter Card Tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: `${DOMAIN}/og-image.jpg` },
    ];

    twitterTags.forEach(({ name, content }) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    });

    // 5. Alternate Language Hreflang Tags
    const hreflangs = [
      { lang: 'en', href: meta.canonical },
      { lang: 'ta', href: meta.canonical },
      { lang: 'x-default', href: meta.canonical },
    ];

    hreflangs.forEach(({ lang, href }) => {
      let el = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', lang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    });

    // 6. Structured Data (JSON-LD)
    const jsonLdScripts: object[] = [];

    // Global Organization Schema
    jsonLdScripts.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${DOMAIN}/#organization`,
      name: 'AEGAM Ecosystem',
      alternateName: isTa ? 'ஏகம் சுற்றுச்சூழல் அமைப்பு' : 'AEGAM Unified Industrial Ecosystem',
      url: DOMAIN,
      logo: {
        '@type': 'ImageObject',
        url: `${DOMAIN}/logo.png`,
        width: '512',
        height: '512',
        caption: 'AEGAM Symbol & Logo',
      },
      description: 'Unified industrial ecosystem engineering heavy rotary oil extraction machinery, industrial fabrication, stewardship governance, and structured commerce operations.',
      foundingDate: '2024',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pollachi / Coimbatore Region',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support & industrial inquiries',
        email: 'contact@aegam.in',
        availableLanguage: ['English', 'Tamil'],
      },
      subOrganization: [
        {
          '@type': 'Organization',
          name: 'AEGAM Ecosystem Trust',
          alternateName: 'ஏகம் ஆளுமை அறக்கட்டளை',
          description: 'Non-profit governance trust and foundational custodian.',
        },
        {
          '@type': 'Organization',
          name: 'Aegan Anegan Industries Pvt Ltd',
          alternateName: 'ஏகன் அநேகன் இண்டஸ்ட்ரீஸ் பிரைவேட் லிமிடெட்',
          description: 'Core industrial machinery manufacturing and heavy fabrication division.',
        },
        {
          '@type': 'Organization',
          name: 'Valarivan Industry Pvt Ltd',
          alternateName: 'வாலறிவன் இண்டஸ்ட்ரி பிரைவேட் லிமிடெட்',
          description: 'Sales, distribution, and commercial trade entity.',
        },
        {
          '@type': 'Organization',
          name: 'Arulatchi OPC Pvt Ltd',
          alternateName: 'அருளாட்சி ஒபிசி பிரைவேட் லிமிடெட்',
          description: 'Raw material procurement, supply chain, and agricultural sourcing.',
        },
      ],
    });

    // WebSite Schema
    jsonLdScripts.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${DOMAIN}/#website`,
      url: DOMAIN,
      name: 'AEGAM Ecosystem Portal',
      publisher: { '@id': `${DOMAIN}/#organization` },
      inLanguage: ['en', 'ta'],
    });

    // BreadcrumbList Schema
    jsonLdScripts.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: isTa ? 'முகப்பு' : 'Home',
          item: DOMAIN,
        },
        ...(page !== 'home' ? [
          {
            '@type': 'ListItem',
            position: 2,
            name: meta.title.split(' — ')[0].split(' | ')[0],
            item: meta.canonical,
          }
        ] : []),
      ],
    });

    // Product Schema (For Products Page)
    if (page === 'products') {
      PRODUCTS_DATA.forEach((prod) => {
        jsonLdScripts.push({
          '@context': 'https://schema.org',
          '@type': 'Product',
          '@id': `${DOMAIN}/products#${prod.id}`,
          name: prod.name,
          image: prod.image.startsWith('http') ? prod.image : `${DOMAIN}${prod.image}`,
          description: prod.description,
          category: 'Industrial Machinery > Oil Extraction Rotary Expeller',
          brand: {
            '@type': 'Brand',
            name: 'Aegan Anegan Industries',
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Aegan Anegan Industries Pvt Ltd',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            seller: {
              '@type': 'Organization',
              name: 'Valarivan Industry Pvt Ltd',
            },
          },
        });
      });
    }

    // FAQPage Schema (For FAQ Page)
    if (page === 'faq') {
      jsonLdScripts.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS_DATA.map((faq) => ({
          '@type': 'Question',
          name: isTa && faq.taQuestion ? faq.taQuestion : faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: isTa && faq.taAnswer ? faq.taAnswer : faq.answer,
          },
        })),
      });
    }

    // Inject JSON-LD Script tag safely
    let jsonLdEl = document.querySelector('script[id="aegam-jsonld"]');
    if (!jsonLdEl) {
      jsonLdEl = document.createElement('script');
      jsonLdEl.setAttribute('id', 'aegam-jsonld');
      jsonLdEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdEl);
    }
    jsonLdEl.textContent = JSON.stringify(jsonLdScripts);

  }, [page, language, isTa, meta]);

  return null;
};
