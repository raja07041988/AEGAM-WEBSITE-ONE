import React, { useState } from 'react';
import { PageRoute } from '../types';
import { INFRASTRUCTURE_DATA } from '../data/infrastructure';
import { Building, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface InfrastructurePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenInquiry: () => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({ onNavigate, onOpenInquiry }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const isTa = language === 'ta';

  const facilities = activeCategory === 'all'
    ? INFRASTRUCTURE_DATA
    : INFRASTRUCTURE_DATA.filter(f => f.category === activeCategory);

  return (
    <div className={`min-h-screen py-12 lg:py-20 transition-colors duration-300 ${
      isDark ? 'bg-[#1F0B0E] text-[#FAF3EB]' : 'bg-[#FAF7F2] text-[#2B1015]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 border rounded-full text-xs font-bold uppercase tracking-wider ${
            isDark 
              ? 'bg-[#2E1218] border-[#4D1E27] text-[#D4AF37]' 
              : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#8C2A38]'
          }`}>
            <Building className="w-3.5 h-3.5" />
            <span>{t.infrastructure.eyebrow}</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#2B1015]'
          }`}>
            {t.infrastructure.title}
          </h1>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
            {t.infrastructure.subtitle}
          </p>
        </div>

        {/* Facilities Filter */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeCategory === 'all'
                ? isDark ? 'bg-[#2E1218] text-[#D4AF37] border border-[#4D1E27]' : 'bg-[#8C2A38] text-white shadow'
                : isDark ? 'bg-[#150709] text-[#D1B8BC] border border-[#4D1E27]' : 'bg-[#F2EAE0] text-[#5C2B32]'
            }`}
          >
            {isTa ? 'அனைத்து வசதிகள்' : 'All Facilities'}
          </button>
          <button
            onClick={() => setActiveCategory('workshop')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeCategory === 'workshop'
                ? isDark ? 'bg-[#2E1218] text-[#D4AF37] border border-[#4D1E27]' : 'bg-[#8C2A38] text-white shadow'
                : isDark ? 'bg-[#150709] text-[#D1B8BC] border border-[#4D1E27]' : 'bg-[#F2EAE0] text-[#5C2B32]'
            }`}
          >
            {isTa ? 'இயந்திர பட்டறை' : 'Machinery Workshop'}
          </button>
          <button
            onClick={() => setActiveCategory('fabrication')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeCategory === 'fabrication'
                ? isDark ? 'bg-[#2E1218] text-[#D4AF37] border border-[#4D1E27]' : 'bg-[#8C2A38] text-white shadow'
                : isDark ? 'bg-[#150709] text-[#D1B8BC] border border-[#4D1E27]' : 'bg-[#F2EAE0] text-[#5C2B32]'
            }`}
          >
            {isTa ? 'உற்பத்தி தளம்' : 'Fabrication Bay'}
          </button>
          <button
            onClick={() => setActiveCategory('coordination')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeCategory === 'coordination'
                ? isDark ? 'bg-[#2E1218] text-[#D4AF37] border border-[#4D1E27]' : 'bg-[#8C2A38] text-white shadow'
                : isDark ? 'bg-[#150709] text-[#D1B8BC] border border-[#4D1E27]' : 'bg-[#F2EAE0] text-[#5C2B32]'
            }`}
          >
            {isTa ? 'மூலப்பொருள் கிடங்கு' : 'Raw Material Yard'}
          </button>
          <button
            onClick={() => setActiveCategory('campus')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeCategory === 'campus'
                ? isDark ? 'bg-[#2E1218] text-[#D4AF37] border border-[#4D1E27]' : 'bg-[#8C2A38] text-white shadow'
                : isDark ? 'bg-[#150709] text-[#D1B8BC] border border-[#4D1E27]' : 'bg-[#F2EAE0] text-[#5C2B32]'
            }`}
          >
            {isTa ? 'வளாக தலைமையகம்' : 'Campus Headquarters'}
          </button>
        </div>

        {/* Facilities Showcase List */}
        <div className="space-y-12">
          {facilities.map((fac, idx) => {
            const title = isTa && fac.taTitle ? fac.taTitle : fac.title;
            const subtitle = isTa && fac.taSubtitle ? fac.taSubtitle : fac.subtitle;
            const desc = isTa && fac.taDescription ? fac.taDescription : fac.description;
            const keySpecs = isTa && fac.taKeySpecs ? fac.taKeySpecs : fac.keySpecs;

            return (
              <div
                key={fac.id}
                className={`border rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                  isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
                } ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image side (6 cols) */}
                <div className="lg:col-span-6 relative bg-[#150709] min-h-[320px]">
                  <img
                    src={fac.image}
                    alt={title}
                    className="w-full h-full object-cover min-h-[320px]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150709]/80 via-transparent to-transparent lg:hidden"></div>
                  <div className="absolute top-3 left-3 bg-[#150709]/90 px-3 py-1 rounded text-[11px] font-mono text-[#D4AF37] border border-[#4D1E27]">
                    {subtitle}
                  </div>
                </div>

                {/* Text side (6 cols) */}
                <div className="lg:col-span-6 p-8 lg:p-12 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                      {fac.category} Overview
                    </span>
                    <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>
                      {title}
                    </h2>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                      {desc}
                    </p>

                    <div className="space-y-2 pt-2">
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>
                        {isTa ? 'வசதி விவரக்குறிப்புகள்:' : 'Facility Specifications:'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {keySpecs.map((spec, i) => (
                          <div key={i} className={`p-2.5 border rounded flex items-start gap-2 ${
                            isDark ? 'bg-[#150709] border-[#4D1E27] text-[#D1B8BC]' : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#5C2B32]'
                          }`}>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`pt-4 border-t ${isDark ? 'border-[#4D1E27]' : 'border-[#E2D5B8]'}`}>
                    <button
                      onClick={onOpenInquiry}
                      className={`px-5 py-2.5 font-bold text-xs rounded-lg transition-colors inline-flex items-center gap-2 ${
                        isDark ? 'bg-[#C5A059] text-[#1F0B0E] hover:bg-[#D4AF37]' : 'bg-[#8C2A38] text-white hover:bg-[#72202C]'
                      }`}
                    >
                      <span>{isTa ? 'வளாகத்தைப் பார்வையிட திட்டமிடுங்கள்' : 'Schedule Facility / Campus Visit'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Future Infrastructure Expansion Note */}
        <div className={`p-8 border rounded-2xl space-y-4 ${
          isDark 
            ? 'bg-[#150709] text-[#FAF3EB] border-[#4D1E27]' 
            : 'bg-[#2B1015] text-white border-[#4A1E24]'
        }`}>
          <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>{isTa ? 'எதிர்கால உள்கட்டமைப்பு விரிவாக்கம்' : 'Future Infrastructure Expansion'}</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {isTa ? 'படிபடியான தொழில்துறை வளர்ச்சி & வளாக விரிவாக்கம்' : 'Phased Industrial Development & Campus Growth'}
          </h3>
          <p className="text-xs sm:text-sm text-[#D1B8BC] leading-relaxed max-w-3xl">
            {isTa ? 'கட்டம் 2 விரிவாக்கத்திற்காக ஏகம் கூடுதல் தொழில்துறை நிலங்களை ஒதுக்கியுள்ளது.' : 'AEGAM preserves adjacent industrial land parcels for Phase 2 expansion, including dedicated automated testing bays, expanded steel staging yards, and an interactive dealer demonstration pavilion.'}
          </p>
        </div>

      </div>
    </div>
  );
};
