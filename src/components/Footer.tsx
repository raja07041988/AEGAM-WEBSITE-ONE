import React from 'react';
import { PageRoute } from '../types';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenInquiry: () => void;
  onOpenEosGateway: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenInquiry,
  onOpenEosGateway
}) => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();

  const isTa = language === 'ta';

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDark ? 'bg-[#150709] text-[#FAF3EB] border-[#4D1E27]' : 'bg-[#2B1015] text-white border-[#4A1E24]'
    }`}>
      {/* Upper Footer Branding Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Column (2 cols width) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2E1218] border border-[#D4AF37]/40 flex items-center justify-center">
                <span className="text-[#D4AF37] font-bold text-lg">ஏ</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl text-white tracking-wider">AEGAM</span>
                  <span className="text-[#D4AF37] text-sm font-semibold">ஏகம்</span>
                </div>
                <p className="text-[10px] text-[#D1B8BC] uppercase tracking-widest font-mono">
                  {t.footer.ecosystemSummary}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#D1B8BC] leading-relaxed max-w-md">
              AEGAM (ஏகம் - <span className="text-[#D4AF37]">{isTa ? 'அக ஒளியின் மூலமாக ஒருங்கிணைத்தல்' : 'Unity Through Inner Light'}</span>) {isTa ? 'என்பது இயந்திர உற்பத்தி, தொழில்துறை செயல்பாடுகள், உட்கட்டமைப்பு, நிர்வாகம் மற்றும் எதிர்கால தொழில்நுட்ப அமைப்புகளை ஒருங்கிணைக்கும் சுற்றுச்சூழல் அமைப்பாகும்.' : 'is a structured ecosystem integrating manufacturing, industrial operations, infrastructure, governance, commerce, and future technology systems.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <span className="px-2.5 py-1 bg-[#1F0B0E] border border-[#4D1E27] rounded text-[11px] font-mono text-[#D4AF37]">
                AEGAM.IN ({isTa ? 'சுற்றுச்சூழல்' : 'Ecosystem'})
              </span>
              <span className="text-[#4D1E27]">•</span>
              <a
                href="https://www.aeganai.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-[#1F0B0E] border border-[#4D1E27] hover:border-[#D4AF37]/60 rounded text-[11px] font-mono text-[#D4AF37] transition-colors inline-flex items-center gap-1"
              >
                AEGANAI.IN ({isTa ? 'இயந்திர உற்பத்தி' : 'Manufacturing'}) <ExternalLink className="w-3 h-3 inline" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4 border-b border-[#4D1E27] pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF3EB]">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('ecosystem')} className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.ecosystem}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.products}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('infrastructure')} className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.infrastructure}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.gallery}
                </button>
              </li>
            </ul>
          </div>

          {/* Ecosystem Entities Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4 border-b border-[#4D1E27] pb-2">
              {t.footer.entitiesList}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1B8BC]">
              <li className="flex items-start gap-1.5">
                <span className="text-[#D4AF37] font-bold">•</span>
                <div>
                  <span className="text-white font-semibold block">{isTa ? 'ஏகம் டிரஸ்ட்' : 'AEGAM TRUST'}</span>
                  <span className="text-[10px] text-[#D1B8BC]/80">{isTa ? 'நிர்வாக அறக்கட்டளை' : 'Governance & Stewardship'}</span>
                </div>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#D4AF37] font-bold">•</span>
                <div>
                  <span className="text-white font-semibold block">{isTa ? 'ஏகனானேகன் இண்டஸ்ட்ரீஸ்' : 'Aegan Anegan Industries'}</span>
                  <span className="text-[10px] text-[#D1B8BC]/80">{isTa ? 'இயந்திர உற்பத்தி' : 'Machinery Manufacturing'}</span>
                </div>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#D4AF37] font-bold">•</span>
                <div>
                  <span className="text-white font-semibold block">{isTa ? 'வளரிவன் இண்டஸ்ட்ரி' : 'Valarivan Industry'}</span>
                  <span className="text-[10px] text-[#D1B8BC]/80">{isTa ? 'விற்பனை & வணிகம்' : 'Sales & Distribution'}</span>
                </div>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#D4AF37] font-bold">•</span>
                <div>
                  <span className="text-white font-semibold block">{isTa ? 'அருளாட்சி ஒபிசி' : 'Arulatchi OPC'}</span>
                  <span className="text-[10px] text-[#D1B8BC]/80">{isTa ? 'கொள்முதல் & விநியோகம்' : 'Procurement & Supply Chain'}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Governance & Communication Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4 border-b border-[#4D1E27] pb-2">
              {isTa ? 'தகவல் தொடர்பு' : 'Communication'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF3EB]">
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.faq}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.contact}
                </button>
              </li>
              <li>
                <button onClick={onOpenEosGateway} className="hover:text-[#D4AF37] transition-colors text-[#D4AF37] font-bold">
                  {t.nav.eosGateway}
                </button>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.aeganai.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-[#1F0B0E] border border-[#4D1E27] rounded text-xs text-[#D4AF37] hover:bg-[#2E1218] transition-colors block text-center font-medium"
                >
                  www.aeganai.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Philosophy Strip */}
        <div className="mt-12 pt-8 border-t border-[#4D1E27] p-6 bg-[#1F0B0E]/80 rounded-xl border">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
            <div>
              <h5 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                {isTa ? 'கூட்டுச் சுற்றுச்சூழல் தத்துவம்' : 'Collaborative Ecosystem Philosophy'}
              </h5>
              <p className="text-xs text-[#D1B8BC] mt-1 max-w-3xl">
                {isTa ? 'நடைமுறைச் செயலாக்கம், விரிவாக்கக்கூடிய அமைப்புகள், ஒருங்கிணைக்கப்பட்ட செயல்பாடுகள் மற்றும் நீண்ட கால சுற்றுச்சூழல் சிந்தனை ஆகியவற்றின் மூலம் தொழில்துறை அமைப்புகளை உருவாக்குதல்.' : 'Building structured industrial and operational ecosystems through practical implementation, scalable systems, coordinated execution, collaborative operational culture, and long-term ecosystem thinking.'}
              </p>
            </div>
            <button
              onClick={onOpenInquiry}
              className="shrink-0 px-5 py-2.5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#1F0B0E] font-bold text-xs rounded transition-colors"
            >
              {t.nav.getStarted}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-[#150709] border-t border-[#4D1E27] py-4 text-[10px] uppercase tracking-[0.2em] text-[#D1B8BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex items-center gap-6 text-[10px] text-[#D1B8BC] font-medium uppercase tracking-[0.2em]">
            <span>{t.footer.phase}</span>
            <button onClick={() => handleNav('faq')} className="hover:text-[#D4AF37] transition-colors">
              {t.footer.governance}
            </button>
            <a href="https://www.aeganai.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] text-[#D4AF37] transition-colors">
              WWW.AEGANAI.IN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
