import React from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { ExternalLink, Factory, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface ManufacturingHighlightProps {
  onOpenInquiry: (productName?: string) => void;
  onNavigateToProducts: () => void;
}

export const ManufacturingHighlight: React.FC<ManufacturingHighlightProps> = ({
  onOpenInquiry,
  onNavigateToProducts
}) => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();
  const flagship = PRODUCTS_DATA[0];

  const isTa = language === 'ta';

  const name = isTa && flagship.taName ? flagship.taName : flagship.name;
  const category = isTa && flagship.taCategory ? flagship.taCategory : flagship.category;
  const tagline = isTa && flagship.taTagline ? flagship.taTagline : flagship.tagline;
  const description = isTa && flagship.taDescription ? flagship.taDescription : flagship.description;
  const features = isTa && flagship.taFeatures ? flagship.taFeatures : flagship.features;
  const capacity = isTa && flagship.taCapacity ? flagship.taCapacity : flagship.capacity;
  const powerRequirement = isTa && flagship.taPowerRequirement ? flagship.taPowerRequirement : flagship.powerRequirement;

  return (
    <section className={`py-20 border-t border-b transition-colors duration-300 ${
      isDark ? 'bg-[#100D06] text-[#FAF3EB] border-[#4A3B18]' : 'bg-[#FAF7F2] text-[#1C1810] border-[#E2D5B8]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b ${
          isDark ? 'border-[#4A3B18]' : 'border-[#E2D5B8]'
        }`}>
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
              isDark ? 'bg-[#241E0F] border-[#4A3B18] text-[#D4AF37]' : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#B8860B]'
            }`}>
              <Factory className="w-3.5 h-3.5" />
              <span>{t.manufacturing.eyebrow}</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-[#1C1810]'
            }`}>
              {t.manufacturing.title}
            </h2>
            <p className={`text-xs sm:text-sm mt-2 max-w-2xl ${
              isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'
            }`}>
              {t.manufacturing.subtitle}
            </p>
          </div>

          <a
            href="https://www.aeganai.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 px-5 py-3 font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center gap-2 shadow-lg ${
              isDark ? 'bg-[#C5A059] hover:bg-[#D4AF37] text-[#18140B]' : 'bg-[#B8860B] hover:bg-[#A37409] text-white'
            }`}
          >
            <span>{isTa ? 'வலைத்தளம் www.aeganai.in' : 'Visit www.aeganai.in'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Flagship Showcase Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Image side (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className={`rounded-2xl overflow-hidden border shadow-2xl relative group ${
              isDark ? 'border-[#4A3B18]' : 'border-[#E2D5B8]'
            }`}>
              <img
                src={flagship.image}
                alt={name}
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className={`absolute bottom-4 left-4 right-4 p-4 backdrop-blur-md rounded-xl border flex items-center justify-between ${
                isDark ? 'bg-[#100D06]/90 border-[#4A3B18]' : 'bg-[#FFFFFF]/90 border-[#E2D5B8]'
              }`}>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider block">
                    {isTa ? 'முதன்மையான இயந்திரம்' : 'Flagship Machinery'}
                  </span>
                  <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>{name}</p>
                </div>
                <button
                  onClick={() => onOpenInquiry(name)}
                  className={`px-3.5 py-1.5 font-bold text-xs rounded transition-colors ${
                    isDark ? 'bg-[#C5A059] text-[#18140B] hover:bg-[#D4AF37]' : 'bg-[#B8860B] text-white hover:bg-[#A37409]'
                  }`}
                >
                  {isTa ? 'விலை அறிய' : 'Inquire Specs'}
                </button>
              </div>
            </div>
          </div>

          {/* Details side (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
                {category}
              </span>
              <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                {tagline}
              </h3>
              <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                {description}
              </p>
            </div>

            {/* Specifications Specs Pill Matrix */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className={`p-3 border rounded-lg ${
                isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
              }`}>
                <span className={`text-[10px] block uppercase tracking-wider ${isDark ? 'text-[#D8CCA8]' : 'text-[#786235]'}`}>
                  {isTa ? 'செயலாக்கத் திறன்' : 'Processing Capacity'}
                </span>
                <span className="text-sm font-bold text-[#D4AF37]">{capacity}</span>
              </div>
              <div className={`p-3 border rounded-lg ${
                isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
              }`}>
                <span className={`text-[10px] block uppercase tracking-wider ${isDark ? 'text-[#D8CCA8]' : 'text-[#786235]'}`}>
                  {isTa ? 'மின்சாரத் தேவை' : 'Drive & Power'}
                </span>
                <span className="text-sm font-bold text-[#D4AF37]">{powerRequirement}</span>
              </div>
            </div>

            {/* Features checkmarks */}
            <div className={`space-y-2 text-xs ${isDark ? 'text-[#D8CCA8]' : 'text-[#423414]'}`}>
              {features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenInquiry(name)}
                className={`px-5 py-2.5 font-bold text-xs rounded transition-colors ${
                  isDark ? 'bg-[#C5A059] hover:bg-[#D4AF37] text-[#18140B]' : 'bg-[#B8860B] hover:bg-[#A37409] text-white'
                }`}
              >
                {isTa ? 'இயந்திர விவரங்கள் கோருக' : 'Inquire Machinery Specifications'}
              </button>

              <button
                onClick={onNavigateToProducts}
                className={`px-5 py-2.5 border font-semibold text-xs rounded transition-colors flex items-center gap-1.5 ${
                  isDark 
                    ? 'bg-[#241E0F] hover:bg-[#362A10] text-[#FAF3EB] border-[#4A3B18]' 
                    : 'bg-[#F2EAE0] hover:bg-[#E8DEC8] text-[#1C1810] border-[#E2D5B8]'
                }`}
              >
                <span>{t.manufacturing.exploreProducts}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Manufacturing Note Box */}
        <div className={`mt-16 p-6 border rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 ${
          isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-[#FFFFFF] border-[#E2D5B8]'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                {isTa ? 'பிரத்யேக இயந்திர உற்பத்தி இணையதளம்' : 'Dedicated Machinery Website'}
              </h4>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                {isTa ? (
                  <>இயந்திர விவரங்கள், வரைபடங்கள் மற்றும் வீடியோக்களுக்கு <a href="https://www.aeganai.in" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] underline">www.aeganai.in</a> தளத்தைப் பார்க்கவும்.</>
                ) : (
                  <>For detailed machine models, technical brochures, and manufacturing operational videos, visit <a href="https://www.aeganai.in" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] underline">www.aeganai.in</a>.</>
                )}
              </p>
            </div>
          </div>

          <a
            href="https://www.aeganai.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 px-4 py-2 border text-xs font-semibold rounded transition-colors flex items-center gap-1.5 ${
              isDark 
                ? 'border-[#C5A059]/40 hover:border-[#C5A059] text-[#D4AF37]' 
                : 'border-[#B8860B]/40 hover:border-[#B8860B] text-[#B8860B]'
            }`}
          >
            <span>www.aeganai.in</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
