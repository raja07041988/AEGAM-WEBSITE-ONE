import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Factory, ShieldCheck, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { imgHeroIndustrial, imgRotaryMachine } from '../assets/images';

interface HeroProps {
  onNavigate: (page: PageRoute) => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenInquiry }) => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();

  const isTa = language === 'ta';

  return (
    <section className={`relative overflow-hidden border-b transition-colors duration-300 ${
      isDark ? 'bg-[#18140B] text-[#FAF3EB] border-[#4A3B18]' : 'bg-[#FAF7F2] text-[#1C1810] border-[#E2D5B8]'
    }`}>
      {/* Background overlay with subtle industrial image texture */}
      <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center mix-blend-luminosity" style={{ backgroundImage: `url(${imgHeroIndustrial})` }}></div>
      <div className={`absolute inset-0 z-0 ${
        isDark 
          ? 'bg-gradient-to-r from-[#18140B] via-[#18140B]/90 to-[#18140B]/70' 
          : 'bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-[#FAF7F2]/70'
      }`}></div>

      {/* Decorative subtle gold grid accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Badge / Eyebrow */}
            <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded border text-[11px] font-bold uppercase tracking-[0.25em] shadow-sm ${
              isDark 
                ? 'bg-[#241E0F] border-[#4A3B18] text-[#D4AF37]' 
                : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#B8860B]'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span>AEGAM (ஏகம்)</span>
              <span className="opacity-40">•</span>
              <span className={`font-normal tracking-wider ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>{t.hero.eyebrow}</span>
            </div>

            {/* Main Title */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] ${
              isDark ? 'text-white' : 'text-[#1C1810]'
            }`}>
              {t.hero.titleLine1} <br/>
              <span className={isDark ? 'text-[#D4AF37]' : 'text-[#B8860B]'}>{t.hero.titleLine2}</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-sm sm:text-base leading-relaxed max-w-2xl font-normal ${
              isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'
            }`}>
              {t.hero.subtitle}
            </p>

            {/* Hero CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('ecosystem')}
                className={`px-7 py-3.5 font-bold text-xs uppercase tracking-widest rounded transition-all shadow-xl flex items-center gap-2 group ${
                  isDark 
                    ? 'bg-[#C5A059] hover:bg-[#D4AF37] text-[#18140B] shadow-[#C5A059]/20' 
                    : 'bg-[#B8860B] hover:bg-[#A37409] text-white shadow-[#B8860B]/20'
                }`}
              >
                <span>{t.hero.exploreEcosystem}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('products')}
                className={`px-7 py-3.5 border font-bold text-xs uppercase tracking-widest rounded transition-all flex items-center gap-2 ${
                  isDark 
                    ? 'bg-[#241E0F] hover:bg-[#362A10] text-white border-[#4A3B18]' 
                    : 'bg-[#FFFFFF] hover:bg-[#F2EAE0] text-[#1C1810] border-[#E2D5B8]'
                }`}
              >
                <Factory className="w-4 h-4 text-[#C5A059]" />
                <span>{t.hero.manufacturingDivision}</span>
              </button>

              <button
                onClick={onOpenInquiry}
                className={`px-6 py-3.5 border font-bold text-xs uppercase tracking-widest rounded transition-all ${
                  isDark 
                    ? 'border-[#4A3B18] hover:border-[#C5A059] text-[#D8CCA8] hover:text-white' 
                    : 'border-[#E2D5B8] hover:border-[#B8860B] text-[#61502C] hover:text-black'
                }`}
              >
                {t.hero.contactUs}
              </button>
            </div>

            {/* Key Principles Pills */}
            <div className={`pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs ${
              isDark ? 'border-[#4A3B18] text-[#D8CCA8]' : 'border-[#E2D5B8] text-[#61502C]'
            }`}>
              <div>
                <span className={`font-bold block text-sm ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  {isTa ? 'ஏகம் டிரஸ்ட்' : 'AEGAM TRUST'}
                </span>
                <span className="text-[11px] opacity-75">{isTa ? 'நிர்வாக அறக்கட்டளை' : 'Governance Stewardship'}</span>
              </div>
              <div>
                <span className={`font-bold block text-sm ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  {isTa ? 'ஏகன் அநேகன்' : 'AEGAN ANEGAN'}
                </span>
                <span className="text-[11px] opacity-75">{isTa ? 'இயந்திரங்கள் & உற்பத்தி' : 'Machinery & Fabrication'}</span>
              </div>
              <div>
                <span className={`font-bold block text-sm ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  {isTa ? 'வாலறிவன்' : 'VALARIVAN'}
                </span>
                <span className="text-[11px] opacity-75">{isTa ? 'விற்பனை & வணிகம்' : 'Sales & Distribution'}</span>
              </div>
              <div>
                <span className={`font-bold block text-sm ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  {isTa ? 'அருளாட்சி' : 'ARULATCHI OPC'}
                </span>
                <span className="text-[11px] opacity-75">{isTa ? 'கொள்முதல் & விநியோகம்' : 'Procurement Supply'}</span>
              </div>
            </div>

          </div>

          {/* Right Card / Visual Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className={`border border-t-4 rounded p-6 sm:p-8 shadow-2xl relative overflow-hidden ${
              isDark 
                ? 'bg-[#241E0F] border-[#4A3B18] border-t-[#C5A059]' 
                : 'bg-[#FFFFFF] border-[#E2D5B8] border-t-[#B8860B]'
            }`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Card Header */}
              <div className={`flex items-center justify-between pb-4 border-b ${
                isDark ? 'border-[#4A3B18]' : 'border-[#E2D5B8]'
              }`}>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                  <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                    {isTa ? 'சுற்றுச்சூழல் அடித்தளம்' : 'Ecosystem Foundation'}
                  </span>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  isDark ? 'bg-[#100D06] text-[#D4AF37] border-[#4A3B18]' : 'bg-[#F2EAE0] text-[#B8860B] border-[#E2D5B8]'
                }`}>
                  {t.hero.visionBadge}
                </span>
              </div>

              {/* Machinery Preview Image */}
              <div className={`my-5 relative rounded-lg overflow-hidden border group ${
                isDark ? 'border-[#4A3B18]' : 'border-[#E2D5B8]'
              }`}>
                <img
                  src={imgRotaryMachine}
                  alt="Aegan Anegan Rotary Oil Machine"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
                  <span className="bg-black/70 px-2 py-1 rounded backdrop-blur border border-white/20 text-[11px]">
                    {isTa ? 'ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரம்' : 'Rotary Oil Extraction System'}
                  </span>
                  <a
                    href="https://www.aeganai.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline font-bold text-[11px]"
                  >
                    www.aeganai.in &rarr;
                  </a>
                </div>
              </div>

              {/* Quote Card */}
              <div className={`p-4 border rounded space-y-2 ${
                isDark ? 'bg-[#100D06] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
              }`}>
                <p className={`italic text-xs leading-relaxed ${isDark ? 'text-[#D8CCA8]' : 'text-[#423414]'}`}>
                  &ldquo;{t.hero.quote}&rdquo;
                </p>
                <div className={`flex items-center gap-2 pt-1 border-t ${
                  isDark ? 'border-[#362A10]' : 'border-[#E8DEC8]'
                }`}>
                  <div className={`w-6 h-6 rounded-full font-bold text-[10px] flex items-center justify-center ${
                    isDark ? 'bg-[#C5A059] text-[#18140B]' : 'bg-[#B8860B] text-white'
                  }`}>
                    ஏ
                  </div>
                  <div>
                    <span className={`text-[11px] font-bold uppercase block ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                      {t.hero.quoteAuthor}
                    </span>
                    <span className={`text-[9px] ${isDark ? 'text-[#D8CCA8]' : 'text-[#786235]'}`}>
                      {t.hero.quoteRole}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Link Button */}
              <div className={`mt-5 pt-4 border-t ${isDark ? 'border-[#4A3B18]' : 'border-[#E2D5B8]'}`}>
                <button
                  onClick={() => onNavigate('about')}
                  className={`w-full py-2.5 border rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 ${
                    isDark 
                      ? 'bg-[#100D06] hover:bg-[#362A10] text-[#D4AF37] border-[#4A3B18]' 
                      : 'bg-[#F2EAE0] hover:bg-[#E8DEC8] text-[#B8860B] border-[#E2D5B8]'
                  }`}
                >
                  <span>{isTa ? 'ஏகம் தத்துவத்தைப் படிக்க' : 'Learn About AEGAM Philosophy'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
