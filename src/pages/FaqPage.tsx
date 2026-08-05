import React, { useState } from 'react';
import { PageRoute } from '../types';
import { FAQS_DATA } from '../data/faqs';
import { HelpCircle, Search, ChevronDown, ChevronUp, Filter, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface FaqPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenInquiry: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('why-aegam-created');

  const categories = [
    { key: 'All', en: 'All', ta: 'அனைத்தும்' },
    { key: 'General', en: 'General', ta: 'பொதுவானவை' },
    { key: 'Ecosystem Structure', en: 'Ecosystem Structure', ta: 'சுற்றுச்சூழல் கட்டமைப்பு' },
    { key: 'Governance & Investment', en: 'Governance & Investment', ta: 'நிர்வாகம் & முதலீடு' },
    { key: 'Future Direction', en: 'Future Direction', ta: 'எதிர்கால தொலைநோக்கு' },
    { key: 'Collaborations', en: 'Collaborations', ta: 'கூட்டாண்மை & டீலர்ஷிப்' },
  ];

  const isTa = language === 'ta';

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    
    const qText = isTa ? (faq.taQuestion || faq.question) : faq.question;
    const aText = isTa ? (faq.taAnswer || faq.answer) : faq.answer;
    
    const matchesSearch = 
      qText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      aText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className={`min-h-screen py-12 lg:py-20 transition-colors duration-300 ${
      isDark ? 'bg-[#1F0B0E] text-[#FAF3EB]' : 'bg-[#FAF7F2] text-[#2B1015]'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 border rounded-full text-xs font-bold uppercase tracking-wider ${
            isDark 
              ? 'bg-[#2E1218] border-[#4D1E27] text-[#D4AF37]' 
              : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#8C2A38]'
          }`}>
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.eyebrow}</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#2B1015]'
          }`}>
            {t.faq.title}
          </h1>
          <p className={`text-sm leading-relaxed max-w-2xl mx-auto ${
            isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'
          }`}>
            {t.faq.subtitle}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className={`space-y-4 border p-6 rounded-2xl shadow-sm transition-colors duration-300 ${
          isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#FFFFFF] border-[#E2D5B8]'
        }`}>
          
          {/* Search bar */}
          <div className="relative">
            <Search className={`w-4 h-4 absolute left-3.5 top-3.5 ${
              isDark ? 'text-[#D1B8BC]' : 'text-[#8C6D27]'
            }`} />
            <input
              type="text"
              placeholder={t.faq.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-xs sm:text-sm outline-none transition-colors ${
                isDark 
                  ? 'bg-[#150709] border-[#4D1E27] text-[#FAF3EB] placeholder-[#8C6B71] focus:border-[#C5A059]' 
                  : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#2B1015] placeholder-[#8C6D27]/60 focus:border-[#8C2A38]'
              }`}
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1">
            <span className={`text-xs font-bold uppercase tracking-wider shrink-0 flex items-center gap-1 mr-2 ${
              isDark ? 'text-[#D4AF37]' : 'text-[#8C2A38]'
            }`}>
              <Filter className="w-3.5 h-3.5" /> {t.faq.categoryLabel}
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              const label = isTa ? cat.ta : cat.en;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all shrink-0 ${
                    isActive
                      ? isDark 
                        ? 'bg-[#4D1E27] text-[#D4AF37] border border-[#C5A059]/50 shadow' 
                        : 'bg-[#8C2A38] text-white shadow'
                      : isDark
                        ? 'bg-[#150709] text-[#D1B8BC] hover:bg-[#36151C] border border-[#4D1E27]/40'
                        : 'bg-[#F2EAE0] text-[#5C2B32] hover:bg-[#E8DEC8]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className={`p-8 text-center border rounded-2xl ${
              isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#FFFFFF] border-[#E2D5B8]'
            }`}>
              <p className={`text-sm ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                {t.faq.noResults} &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className={`mt-3 text-xs font-bold underline ${isDark ? 'text-[#D4AF37]' : 'text-[#8C2A38]'}`}
              >
                {t.faq.resetFilters}
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              const question = isTa ? (faq.taQuestion || faq.question) : faq.question;
              const answer = isTa ? (faq.taAnswer || faq.answer) : faq.answer;
              const category = isTa ? (faq.taCategory || faq.category) : faq.category;
              const highlights = isTa ? (faq.taHighlights || faq.highlights) : faq.highlights;

              return (
                <div
                  key={faq.id}
                  className={`border rounded-xl overflow-hidden transition-all shadow-sm ${
                    isOpen 
                      ? isDark
                        ? 'bg-[#2E1218] border-[#C5A059] ring-1 ring-[#C5A059]/30'
                        : 'bg-[#FFFFFF] border-[#8C2A38] ring-1 ring-[#8C2A38]/20'
                      : isDark
                        ? 'bg-[#2E1218]/80 border-[#4D1E27] hover:border-[#C5A059]/50'
                        : 'bg-[#FFFFFF] border-[#E2D5B8] hover:border-[#8C2A38]/40'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className={`w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base transition-colors ${
                      isDark ? 'text-white hover:text-[#D4AF37]' : 'text-[#2B1015] hover:text-[#8C2A38]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
                      <span className={`shrink-0 text-xs font-mono px-2.5 py-0.5 rounded border self-start sm:self-auto ${
                        isDark 
                          ? 'bg-[#150709] text-[#D4AF37] border-[#4D1E27]' 
                          : 'bg-[#F2EAE0] text-[#8C2A38] border-[#E2D5B8]'
                      }`}>
                        {category}
                      </span>
                      <span>{question}</span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className={`w-5 h-5 shrink-0 ${isDark ? 'text-[#D4AF37]' : 'text-[#8C2A38]'}`} />
                    ) : (
                      <ChevronDown className={`w-5 h-5 shrink-0 ${isDark ? 'text-[#D1B8BC]' : 'text-[#8C6D27]'}`} />
                    )}
                  </button>

                  {isOpen && (
                    <div className={`px-5 pb-5 pt-3 border-t space-y-4 animate-fadeIn ${
                      isDark ? 'border-[#4D1E27]' : 'border-[#F2EAE0]'
                    }`}>
                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-[#FAF3EB]' : 'text-[#4A1E24]'
                      }`}>
                        {answer}
                      </p>

                      {highlights && highlights.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {highlights.map((hl, i) => (
                            <span 
                              key={i} 
                              className={`px-2.5 py-1 text-[11px] font-semibold rounded border ${
                                isDark 
                                  ? 'bg-[#150709] border-[#4D1E27] text-[#D4AF37]' 
                                  : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#8C2A38]'
                              }`}
                            >
                              &bull; {hl}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Unresolved Questions CTA Box */}
        <div className={`p-8 border rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl ${
          isDark 
            ? 'bg-[#150709] border-[#4D1E27] text-[#FAF3EB]' 
            : 'bg-[#2B1015] border-[#4A1E24] text-white'
        }`}>
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">{t.faq.unresolvedTitle}</h3>
            <p className="text-xs text-[#D1B8BC]">{t.faq.unresolvedSub}</p>
          </div>

          <button
            onClick={onOpenInquiry}
            className={`shrink-0 px-5 py-2.5 font-bold text-xs rounded-lg transition-colors inline-flex items-center gap-1.5 ${
              isDark 
                ? 'bg-[#C5A059] hover:bg-[#D4AF37] text-[#1F0B0E]' 
                : 'bg-[#D4AF37] hover:bg-[#E5C158] text-[#2B1015]'
            }`}
          >
            <span>{t.faq.submitInquiryBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
