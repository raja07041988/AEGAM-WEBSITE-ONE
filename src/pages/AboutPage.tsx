import React from 'react';
import { PageRoute } from '../types';
import { HeartHandshake, Eye, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();

  const isTa = language === 'ta';

  return (
    <div className={`min-h-screen py-12 lg:py-20 transition-colors duration-300 ${
      isDark ? 'bg-[#1F0B0E] text-[#FAF3EB]' : 'bg-[#FAF7F2] text-[#2B1015]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 border rounded-full text-xs font-bold uppercase tracking-wider ${
            isDark 
              ? 'bg-[#2E1218] border-[#4D1E27] text-[#D4AF37]' 
              : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#8C2A38]'
          }`}>
            <span>{t.about.eyebrow}</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-[#2B1015]'
          }`}>
            {t.about.title}
          </h1>
          <p className={`text-base leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
            {t.about.subtitle}
          </p>
        </div>

        {/* Meaning & Etymology Card */}
        <div className={`border rounded-2xl p-8 lg:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
          isDark 
            ? 'bg-[#2E1218] text-[#FAF3EB] border-[#4D1E27]' 
            : 'bg-[#FFFFFF] text-[#2B1015] border-[#E2D5B8]'
        }`}>
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
              {t.about.etymologySub}
            </span>
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>
              {t.about.etymologyTitle}
            </h2>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
              {t.about.etymologyDesc1}
            </p>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#D1B8BC]/80' : 'text-[#5C2B32]/80'}`}>
              {t.about.etymologyDesc2}
            </p>
          </div>

          <div className={`lg:col-span-4 p-6 border rounded-xl text-center space-y-2 ${
            isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
          }`}>
            <span className="text-5xl font-bold text-[#D4AF37]">ஏகம்</span>
            <h3 className={`text-xs font-mono uppercase tracking-widest pt-2 ${isDark ? 'text-[#D1B8BC]' : 'text-[#8C2A38]'}`}>
              {t.about.philosophyTitle}
            </h3>
            <p className={`text-xs ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
              {isTa ? 'செயல்பாட்டு ஒத்துழைப்பு • தெளிவான பொறுப்புக்கூறல் • அமைதியான தொடர்ச்சி' : 'Practical Cooperation • Visible Accountability • Peaceful Continuity'}
            </p>
          </div>
        </div>

        {/* Collaborative Ecosystem Culture */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
              {isTa ? 'முக்கிய செயல்பாட்டுக் கோட்பாடு' : 'Core Operational Principle'}
            </span>
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>
              {isTa ? 'கூட்டுச் சுற்றுச்சூழல் தத்துவம்' : 'Collaborative Ecosystem Philosophy'}
            </h2>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
              {isTa ? 'நீண்ட கால அமைப்புகள் தனிப்பட்ட போட்டியாலும் துண்டிக்கப்பட்ட செயலாக்கத்தாலும் இயங்கக்கூடாது என்று ஏகம் நம்புகிறது. நாங்கள் கட்டமைக்கப்பட்ட ஒத்துழைப்பு மற்றும் ஒருங்கிணைந்த வளர்ச்சிக்கு முன்னுரிமை அளிக்கிறோம்.' : 'AEGAM believes long-term ecosystems should not operate through isolated competition and disconnected execution. We prioritize structured cooperation, coordinated growth, and shared operational direction.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`p-6 border rounded-xl space-y-3 shadow-sm ${
              isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />
              <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{t.about.collabTitle}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                {t.about.collabDesc}
              </p>
            </div>

            <div className={`p-6 border rounded-xl space-y-3 shadow-sm ${
              isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <Eye className="w-6 h-6 text-[#D4AF37]" />
              <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{t.about.accountabilityTitle}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                {t.about.accountabilityDesc}
              </p>
            </div>

            <div className={`p-6 border rounded-xl space-y-3 shadow-sm ${
              isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <BookOpen className="w-6 h-6 text-[#D4AF37]" />
              <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{t.about.knowledgeTitle}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                {t.about.knowledgeDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Operational Communication Philosophy */}
        <div className={`p-8 border rounded-2xl space-y-6 ${
          isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
        }`}>
          <div className="max-w-2xl">
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{t.about.commTitle}</h3>
            <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
              {t.about.commSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className={`p-4 rounded-lg border ${
              isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <strong className="block text-[#D4AF37] mb-1">{isTa ? 'எளிய & களப்பணி சார்ந்தது' : 'Simple & Grounded'}</strong>
              <span className={isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}>
                {isTa ? 'தகவல் தொடர்பு தெளிவானதாகவும், நடைமுறைக்கு ஏற்றதாகவும் இருக்கும்.' : 'Communication remains practical, clear, and operationally authentic.'}
              </span>
            </div>
            <div className={`p-4 rounded-lg border ${
              isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <strong className="block text-[#D4AF37] mb-1">{isTa ? 'மிகைப்படுத்தலற்றது' : 'No Hype Language'}</strong>
              <span className={isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}>
                {isTa ? 'போலி வாக்குறுதிகள் மற்றும் விளம்பர மிகைப்படுத்தல்களை முழுமையாகத் தவிர்க்கிறது.' : 'Strictly avoids exaggerated claims, inflated marketing metrics, or hype promises.'}
              </span>
            </div>
            <div className={`p-4 rounded-lg border ${
              isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <strong className="block text-[#D4AF37] mb-1">{isTa ? 'உண்மையான தொழில்துறை' : 'Industrial Authenticity'}</strong>
              <span className={isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}>
                {isTa ? 'நேரடி உற்பத்தி பட்டறைகள் மற்றும் சரிபார்க்கப்பட்ட இயந்திர தரத்தைப் பிரதிபலிக்கிறது.' : 'Reflects real workshops, physical machinery, and verified manufacturing quality.'}
              </span>
            </div>
            <div className={`p-4 rounded-lg border ${
              isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <strong className="block text-[#D4AF37] mb-1">{isTa ? 'அமைதியான தொடர்ச்சி' : 'Peaceful Continuity'}</strong>
              <span className={isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}>
                {isTa ? 'நீண்ட கால நிறுவன நிலைத்தன்மை மற்றும் அமைதியான சூழலில் கவனம் செலுத்துகிறது.' : 'Focuses on long-term institutional stability and peaceful operational environment.'}
              </span>
            </div>
          </div>
        </div>

        {/* Founder Vision & Mandate */}
        <div className={`border rounded-2xl p-8 lg:p-12 space-y-6 ${
          isDark 
            ? 'bg-[#150709] text-[#FAF3EB] border-[#4D1E27]' 
            : 'bg-[#2B1015] text-white border-[#4A1E24]'
        }`}>
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
              {isTa ? 'நிறுவனரின் பார்வை & வழிநடத்துதல்' : 'Founder Vision & Leadership Direction'}
            </span>
            <h2 className="text-2xl font-bold text-white">
              {t.about.founderTitle}
            </h2>
            <p className="text-sm text-[#D1B8BC] leading-relaxed">
              &ldquo;{t.about.founderQuote}&rdquo;
            </p>
          </div>

          <div className="pt-4 border-t border-[#4D1E27] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-white block">AEGAM TRUST Leadership</span>
              <span className="text-[11px] text-[#D1B8BC]">Tamil Nadu, India</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('ecosystem')}
                className={`px-4 py-2 font-bold text-xs rounded transition-colors ${
                  isDark ? 'bg-[#C5A059] text-[#1F0B0E] hover:bg-[#D4AF37]' : 'bg-[#D4AF37] text-[#2B1015] hover:bg-[#E5C158]'
                }`}
              >
                {t.about.exploreStructure}
              </button>
              <button
                onClick={onOpenInquiry}
                className={`px-4 py-2 border text-xs font-semibold rounded transition-colors ${
                  isDark ? 'bg-[#2E1218] border-[#4D1E27] text-[#D1B8BC] hover:text-white' : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
              >
                {t.about.getInTouch}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
