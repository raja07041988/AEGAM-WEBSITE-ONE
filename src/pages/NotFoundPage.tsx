import React from 'react';
import { Compass, Home, Shield, ArrowLeft, PhoneCall } from 'lucide-react';
import { PageRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { SEO } from '../components/SEO';

interface NotFoundPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const isTa = language === 'ta';

  return (
    <>
      <SEO page="not-found" />
      <div className={`min-h-[75vh] flex items-center justify-center px-4 sm:px-6 py-16 transition-colors duration-300 ${
        isDark ? 'bg-[#100D06] text-[#FAF3EB]' : 'bg-[#FAF7F2] text-[#1C1810]'
      }`}>
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Badge & Visual Symbol */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>{isTa ? '404 — பக்கம் கிடைக்கவில்லை' : '404 — Page Not Found'}</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#D4AF37]">
              404
            </h1>
            <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
              {isTa ? 'நீங்கள் தேடும் பக்கம் கண்டறியப்படவில்லை' : 'The requested location is not available'}
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed max-w-lg mx-auto ${
              isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'
            }`}>
              {isTa 
                ? 'நீங்கள் உள்ளிட்ட முகவரி தவறாக இருக்கலாம் அல்லது இந்தப் பக்கம் மாற்றப்பட்டிருக்கலாம். ஏகம் சுற்றுச்சூழல் முகப்பிற்குத் திரும்ப கீழே உள்ள பொத்தானைப் பயன்படுத்தவும்.'
                : 'The page address you followed may be incorrect, updated, or removed. Please navigate back to the AEGAM ecosystem home or explore our core operations below.'}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto pt-2">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-md bg-[#D4AF37] text-[#100D06] hover:bg-[#E5C158] focus:ring-2 focus:ring-[#D4AF37]/50"
            >
              <Home className="w-4 h-4" />
              <span>{isTa ? 'முகப்பிற்குத் திரும்பு' : 'Return to Home'}</span>
            </button>

            <button
              onClick={() => onNavigate('products')}
              className={`flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg font-bold text-xs sm:text-sm transition-all border ${
                isDark 
                  ? 'border-[#4A3B18] bg-[#241E0F] text-[#D4AF37] hover:bg-[#362A10]' 
                  : 'border-[#E2D5B8] bg-white text-[#B8860B] hover:bg-[#FAF7F2]'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>{isTa ? 'இயந்திரங்கள் & தயாரிப்புகள்' : 'Rotary Machinery'}</span>
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold pt-4">
            <button 
              onClick={() => onNavigate('ecosystem')} 
              className={`hover:underline flex items-center gap-1 ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}
            >
              <span>{isTa ? 'சுற்றுச்சூழல் கட்டமைப்பு' : 'Ecosystem Architecture'}</span>
            </button>
            <span className="text-[#D4AF37]/40">•</span>
            <button 
              onClick={() => onNavigate('contact')} 
              className={`hover:underline flex items-center gap-1 ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{isTa ? 'தொடர்பு கொள்ளவும்' : 'Contact AEGAM'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
