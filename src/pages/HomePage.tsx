import React from 'react';
import { PageRoute } from '../types';
import { Hero } from '../components/Hero';
import { EcosystemEntities } from '../components/EcosystemEntities';
import { EcosystemDiagram } from '../components/EcosystemDiagram';
import { ManufacturingHighlight } from '../components/ManufacturingHighlight';
import { CurrentVsFuture } from '../components/CurrentVsFuture';
import { OperationalPhilosophy } from '../components/OperationalPhilosophy';
import { Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { imgRotaryMachine, imgHeroIndustrial, imgCampusFacility } from '../assets/images';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenInquiry: (entityOrProduct?: string) => void;
  onOpenEosGateway: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenInquiry,
  onOpenEosGateway
}) => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();

  const isTa = language === 'ta';

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} onOpenInquiry={() => onOpenInquiry()} />

      {/* 2. Mission / Vision / Ecosystem 3-Column Grid */}
      <section className={`border-b transition-colors duration-300 ${
        isDark ? 'bg-[#18140B] border-[#4A3B18] text-[#FAF3EB]' : 'bg-white border-[#E2D5B8] text-[#1C1810]'
      }`}>
        <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x ${
          isDark ? 'divide-[#4A3B18]' : 'divide-[#E2D5B8]'
        }`}>
          
          <div className="p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#D4AF37] font-mono font-bold text-lg">{t.missionVision.visionNumber}</span>
                <h3 className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  {t.missionVision.visionTitle}
                </h3>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                {t.missionVision.visionText}
              </p>
            </div>
          </div>

          <div className={`p-8 lg:p-10 flex flex-col justify-between ${
            isDark ? 'bg-[#241E0F]/40' : 'bg-[#FAF7F2]/60'
          }`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#D4AF37] font-mono font-bold text-lg">{t.missionVision.missionNumber}</span>
                <h3 className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  {t.missionVision.missionTitle}
                </h3>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                {t.missionVision.missionText}
              </p>
            </div>
          </div>

          <div className="p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#D4AF37] font-mono font-bold text-lg">{t.missionVision.ecosystemNumber}</span>
                <h3 className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  {t.missionVision.ecosystemTitle}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className={`p-2.5 border rounded-sm flex items-center justify-between ${
                  isDark ? 'bg-[#100D06] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
                }`}>
                  <span className={`text-[10px] font-bold uppercase ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                    {isTa ? 'ஏகன் அநேகன்' : 'AEGAN ANEGAN'}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                </div>
                <div className={`p-2.5 border rounded-sm flex items-center justify-between ${
                  isDark ? 'bg-[#100D06] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
                }`}>
                  <span className={`text-[10px] font-bold uppercase ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                    {isTa ? 'வாலறிவன்' : 'VALARIVAN'}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                </div>
                <div className={`p-2.5 border rounded-sm flex items-center justify-between ${
                  isDark ? 'bg-[#100D06] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
                }`}>
                  <span className={`text-[10px] font-bold uppercase ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                    {isTa ? 'அருளாட்சி' : 'ARULATCHI'}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                </div>
                <div className={`p-2.5 border rounded-sm flex items-center justify-between ${
                  isDark ? 'bg-[#100D06] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
                }`}>
                  <span className={`text-[10px] font-bold uppercase ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                    EOS GATEWAY
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Why AEGAM Exists (Four Pillars of Industrial Foundation) */}
      <section className={`py-16 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#100D06] text-[#FAF3EB] border-[#4A3B18]' : 'bg-[#1C1810] text-white border-[#423414]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-[0.25em] block">
              {t.whyAegam.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.whyAegam.title}
            </h2>
            <p className="text-sm text-[#D8CCA8] leading-relaxed">
              {t.whyAegam.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#18140B] border border-[#4A3B18] border-t-2 border-t-[#D4AF37] rounded-sm space-y-2">
              <h3 className="text-base font-bold text-white">{t.whyAegam.pillar1Title}</h3>
              <p className="text-xs text-[#D8CCA8] leading-relaxed">{t.whyAegam.pillar1Desc}</p>
            </div>
            <div className="p-6 bg-[#18140B] border border-[#4A3B18] border-t-2 border-t-[#D4AF37] rounded-sm space-y-2">
              <h3 className="text-base font-bold text-white">{t.whyAegam.pillar2Title}</h3>
              <p className="text-xs text-[#D8CCA8] leading-relaxed">{t.whyAegam.pillar2Desc}</p>
            </div>
            <div className="p-6 bg-[#18140B] border border-[#4A3B18] border-t-2 border-t-[#D4AF37] rounded-sm space-y-2">
              <h3 className="text-base font-bold text-white">{t.whyAegam.pillar3Title}</h3>
              <p className="text-xs text-[#D8CCA8] leading-relaxed">{t.whyAegam.pillar3Desc}</p>
            </div>
            <div className="p-6 bg-[#18140B] border border-[#4A3B18] border-t-2 border-t-[#D4AF37] rounded-sm space-y-2">
              <h3 className="text-base font-bold text-white">{t.whyAegam.pillar4Title}</h3>
              <p className="text-xs text-[#D8CCA8] leading-relaxed">{t.whyAegam.pillar4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Manufacturing Capability & Rotary Oil Extraction Machines */}
      <ManufacturingHighlight
        onOpenInquiry={onOpenInquiry}
        onNavigateToProducts={() => onNavigate('products')}
      />

      {/* 5. Visual Ecosystem Architecture Flow Diagram */}
      <EcosystemDiagram />

      {/* 6. Ecosystem Entities Breakdown */}
      <EcosystemEntities onOpenInquiry={onOpenInquiry} />

      {/* 7. Gallery Preview Section */}
      <section className={`py-16 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#18140B] text-[#FAF3EB] border-[#4A3B18]' : 'bg-[#FAF7F2] text-[#1C1810] border-[#E2D5B8]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-[0.25em] block">
                {t.gallery.eyebrow}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-[#1C1810]'
              }`}>
                {t.gallery.title}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className={`px-5 py-2.5 font-bold uppercase tracking-wider text-xs rounded-sm transition-colors inline-flex items-center gap-2 ${
                isDark ? 'bg-[#241E0F] hover:bg-[#362A10] text-[#D4AF37] border border-[#4A3B18]' : 'bg-[#B8860B] hover:bg-[#A37409] text-white'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{t.gallery.viewAll}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`border rounded-xl overflow-hidden shadow-sm ${
              isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <img src={imgRotaryMachine} alt="Rotary Oil Press Machine" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  {isTa ? 'வணிக ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் அலகு' : 'Commercial Rotary Oil Extraction Unit'}
                </h3>
                <p className={`text-[11px] mt-1 ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                  {isTa ? 'ஏகம் பட்டறையில் 48 மணிநேர தொடர் சோதனைகளுக்கு உட்படுத்தப்பட்டது.' : 'Bench tested under full mechanical load at AEGAM workshop.'}
                </p>
              </div>
            </div>

            <div className={`border rounded-xl overflow-hidden shadow-sm ${
              isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <img src={imgHeroIndustrial} alt="Workshop Assembly Bay" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  {isTa ? 'கனரக லேத் & பிரேம் தயாரிப்பு தளம்' : 'Heavy Lathe & Frame Fabrication Bay'}
                </h3>
                <p className={`text-[11px] mt-1 ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                  {isTa ? 'எஃகு வெல்டிங் மற்றும் துல்லியமான லேத் வேலைபாடுகள்.' : 'In-house heavy structural steel welding and precision lathe turning.'}
                </p>
              </div>
            </div>

            <div className={`border rounded-xl overflow-hidden shadow-sm ${
              isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <img src={imgCampusFacility} alt="AEGAM Industrial Campus" loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  {isTa ? 'ஏகம் தொழில்துறை வளாகம் & நிர்வாக மையம்' : 'AEGAM Campus & Governance Center'}
                </h3>
                <p className={`text-[11px] mt-1 ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                  {isTa ? 'நிறுவன ஒருங்கிணைப்பு மற்றும் வாடிக்கையாளர் ஆலோசனை மையம்.' : 'Headquarters for entity coordination and client technical inquiries.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Current vs Future Matrix (Phase 1 vs Phase 2 EOS Gateway) */}
      <CurrentVsFuture />

      {/* 9. Operational Philosophy */}
      <OperationalPhilosophy />

      {/* 10. Contact CTA Section */}
      <section className={`py-20 text-white transition-colors duration-300 ${
        isDark ? 'bg-[#100D06]' : 'bg-[#1C1810]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#241E0F] via-[#18140B] to-[#100D06] border border-[#4A3B18] rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
                  {t.contact.eyebrow}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {t.contact.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#D8CCA8] leading-relaxed max-w-2xl">
                  {t.contact.subtitle}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#D8CCA8]">
                  <span className="px-3 py-1 bg-[#100D06] border border-[#4A3B18] rounded">{isTa ? 'இயந்திர உற்பத்தி' : 'Machinery Manufacturing'}</span>
                  <span className="px-3 py-1 bg-[#100D06] border border-[#4A3B18] rounded">{isTa ? 'டீலர்ஷிப் / விநியோகம்' : 'Dealership / Distribution'}</span>
                  <span className="px-3 py-1 bg-[#100D06] border border-[#4A3B18] rounded">{isTa ? 'செயல்பாட்டு ஒத்துழைப்பு' : 'Operational Collaboration'}</span>
                  <span className="px-3 py-1 bg-[#100D06] border border-[#4A3B18] rounded">{isTa ? 'எதிர்கால வாய்ப்புகள்' : 'Future Opportunities'}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenInquiry()}
                  className="w-full py-3.5 px-6 bg-[#C5A059] hover:bg-[#D4AF37] text-[#18140B] font-bold text-xs sm:text-sm rounded-lg transition-colors shadow-lg text-center"
                >
                  {t.contact.submit}
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3.5 px-6 bg-[#100D06] hover:bg-[#241E0F] text-white border border-[#4A3B18] font-semibold text-xs sm:text-sm rounded-lg transition-colors text-center"
                >
                  {t.contact.address}
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
