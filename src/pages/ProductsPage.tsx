import React, { useState } from 'react';
import { PageRoute } from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { Factory, ExternalLink, CheckCircle2, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface ProductsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenInquiry: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const isTa = language === 'ta';

  const categories = [
    { en: 'All', ta: 'அனைத்தும்' },
    { en: 'Rotary Oil Extraction Machinery', ta: 'ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரங்கள்' },
    { en: 'Fabrication & Engineering Operations', ta: 'உற்பத்தி & பொறியியல் செயல்பாடுகள்' }
  ];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <div className={`min-h-screen py-12 lg:py-20 transition-colors duration-300 ${
      isDark ? 'bg-[#18140B] text-[#FAF3EB]' : 'bg-[#FAF7F2] text-[#1C1810]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b ${
          isDark ? 'border-[#4A3B18]' : 'border-[#E2D5B8]'
        }`}>
          <div className="max-w-3xl space-y-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 border rounded-full text-xs font-bold uppercase tracking-wider ${
              isDark 
                ? 'bg-[#241E0F] border-[#4A3B18] text-[#D4AF37]' 
                : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#B8860B]'
            }`}>
              <Factory className="w-3.5 h-3.5" />
              <span>Aegan Anegan Industries Pvt Ltd</span>
            </div>
            <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-[#1C1810]'
            }`}>
              {t.products.title}
            </h1>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
              {t.products.subtitle}
            </p>
          </div>

          <a
            href="https://www.aeganai.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 px-5 py-3 font-bold text-xs sm:text-sm rounded-lg transition-colors inline-flex items-center gap-2 shadow ${
              isDark ? 'bg-[#241E0F] text-[#D4AF37] hover:bg-[#362A10] border border-[#4A3B18]' : 'bg-[#B8860B] text-white hover:bg-[#A37409]'
            }`}
          >
            <span>{t.products.visitAeganai}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider shrink-0 flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" /> {t.products.filterLabel}
          </span>
          {categories.map((catObj) => {
            const label = isTa ? catObj.ta : catObj.en;
            const isSelected = selectedCategory === catObj.en;
            return (
              <button
                key={catObj.en}
                onClick={() => setSelectedCategory(catObj.en)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors shrink-0 ${
                  isSelected
                    ? isDark 
                      ? 'bg-[#241E0F] text-[#D4AF37] border border-[#4A3B18]' 
                      : 'bg-[#B8860B] text-white shadow'
                    : isDark
                      ? 'bg-[#100D06] text-[#D8CCA8] border border-[#4A3B18] hover:text-white'
                      : 'bg-[#F2EAE0] text-[#61502C] hover:bg-[#E2D5B8]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => {
            const pName = isTa && product.taName ? product.taName : product.name;
            const pTagline = isTa && product.taTagline ? product.taTagline : product.tagline;
            const pDesc = isTa && product.taDescription ? product.taDescription : product.description;
            const pFeats = isTa && product.taFeatures ? product.taFeatures : product.features;
            const pSpecs = isTa && product.taSpecifications ? product.taSpecifications : product.specifications;
            const pCat = isTa && product.taCategory ? product.taCategory : product.category;

            return (
              <div
                key={product.id}
                className={`border rounded-2xl overflow-hidden shadow-sm transition-all flex flex-col justify-between group ${
                  isDark 
                    ? 'bg-[#241E0F] border-[#4A3B18] hover:border-[#C5A059]' 
                    : 'bg-white border-[#E2D5B8] hover:border-[#B8860B]'
                }`}
              >
                <div>
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden bg-[#100D06]">
                    <img
                      src={product.image}
                      alt={pName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100D06] via-transparent to-transparent"></div>
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      {product.isFlagship && (
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37] text-[#18140B] rounded shadow">
                          {t.products.flagshipBadge}
                        </span>
                      )}
                      <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#100D06]/80 text-[#D4AF37] backdrop-blur rounded border border-[#4A3B18]">
                        {pCat}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="font-mono text-[11px] bg-[#100D06]/90 px-2.5 py-1 rounded border border-[#4A3B18]">
                        {isTa ? 'கொள்ளளவு: ' : 'Cap: '}{product.capacity}
                      </span>
                      <span className="font-mono text-[11px] bg-[#100D06]/90 px-2.5 py-1 rounded border border-[#4A3B18]">
                        {isTa ? 'மின்சாரம்: ' : 'Power: '}{product.powerRequirement}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className={`text-xl font-bold transition-colors ${
                      isDark ? 'text-white group-hover:text-[#D4AF37]' : 'text-[#1C1810] group-hover:text-[#B8860B]'
                    }`}>
                      {pName}
                    </h3>
                    <p className="text-xs font-semibold text-[#D4AF37] italic">
                      &ldquo;{pTagline}&rdquo;
                    </p>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                      {pDesc}
                    </p>

                    {/* Highlights list */}
                    <div className={`space-y-1.5 pt-2 text-xs ${isDark ? 'text-[#FAF3EB]' : 'text-[#1C1810]'}`}>
                      {pFeats.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specifications snippet table */}
                    <div className={`pt-4 border-t ${isDark ? 'border-[#4A3B18]' : 'border-[#E2D5B8]'}`}>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mb-2">{t.products.specsTitle}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        {pSpecs.slice(0, 4).map((spec, i) => (
                          <div key={i} className={`p-2 border rounded ${
                            isDark ? 'bg-[#100D06] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
                          }`}>
                            <span className={`block ${isDark ? 'text-[#D8CCA8]' : 'text-[#8C6D27]'}`}>{spec.label}</span>
                            <span className={`font-bold ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenInquiry(pName)}
                    className={`flex-1 py-2.5 font-bold text-xs rounded-lg transition-colors text-center ${
                      isDark ? 'bg-[#C5A059] hover:bg-[#D4AF37] text-[#18140B]' : 'bg-[#B8860B] hover:bg-[#A37409] text-white'
                    }`}
                  >
                    {t.products.inquireSpecs}
                  </button>

                  <a
                    href="https://www.aeganai.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2.5 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1 border ${
                      isDark ? 'bg-[#100D06] border-[#4A3B18] text-[#FAF3EB] hover:text-white' : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#1C1810] hover:bg-[#E2D5B8]'
                    }`}
                  >
                    <span>aeganai.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Manufacturing Connection Banner */}
        <div className={`p-8 border rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl ${
          isDark 
            ? 'bg-[#100D06] text-[#FAF3EB] border-[#4A3B18]' 
            : 'bg-[#1C1810] text-white border-[#423414]'
        }`}>
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
              {isTa ? 'அதிகாரப்பூர்வ உற்பத்திப் பிரிவு' : 'Official Manufacturing Division'}
            </span>
            <h3 className="text-xl font-bold text-white">
              {t.products.customSetupTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#D8CCA8] leading-relaxed">
              {t.products.customSetupSub}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenInquiry('Custom Oil Extraction Plant Setup')}
              className={`px-5 py-3 font-bold text-xs rounded-lg transition-colors ${
                isDark ? 'bg-[#C5A059] hover:bg-[#D4AF37] text-[#18140B]' : 'bg-[#D4AF37] hover:bg-[#E5C158] text-[#1C1810]'
              }`}
            >
              {t.products.requestQuote}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
