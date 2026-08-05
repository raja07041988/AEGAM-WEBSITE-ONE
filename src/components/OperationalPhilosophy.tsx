import React from 'react';
import { ShieldCheck, Users, Eye, BookOpen, HeartHandshake, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const OperationalPhilosophy: React.FC = () => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();

  const isTa = language === 'ta';

  const principles = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />,
      title: t.about.collabTitle,
      desc: t.about.collabDesc
    },
    {
      icon: <Eye className="w-5 h-5 text-[#D4AF37]" />,
      title: t.about.accountabilityTitle,
      desc: t.about.accountabilityDesc
    },
    {
      icon: <Users className="w-5 h-5 text-[#D4AF37]" />,
      title: isTa ? 'ஒருங்கிணைந்த செயலாக்கம் & தகவல் தொடர்பு' : 'Coordinated Execution & Communication',
      desc: isTa ? 'செயல்பாட்டு இடைவெளிகளையும் குழப்பங்களையும் நீக்குதல். குழுக்கள் மற்றும் பங்குதாரர்கள் தெளிவான வழிமுறைகளுடன் செயல்படுகிறார்கள்.' : 'Eliminating communication gaps and workflow friction. Teams and participants operate with structured direction and clear operational channels.'
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#D4AF37]" />,
      title: t.about.knowledgeTitle,
      desc: t.about.knowledgeDesc
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
      title: isTa ? 'அமைதியான செயல்பாடுகள் & நிலைத்தன்மை' : 'Peaceful Operations & Continuity',
      desc: isTa ? 'நம்பிக்கை, நிலத்தோடு ஒன்றிய வளர்ச்சி மற்றும் நீண்ட கால அமைப்பின் நிலைத்தன்மையை வளர்த்தல்.' : 'Fostering an operational environment anchored in trust, grounded growth, industrial authenticity, and long-term ecosystem stability.'
    },
    {
      icon: <Compass className="w-5 h-5 text-[#D4AF37]" />,
      title: isTa ? 'நடைமுறை சார்ந்த செயலாக்கம்' : 'Grounded Real-World Execution',
      desc: isTa ? 'போலி விளம்பரங்கள் அல்லது மிகைப்படுத்தப்பட்ட உரிமைகோரல்களைத் தவிர்த்தல். ஏகம் உறுதியான உற்பத்தித் துறையில் நிலைத்து நிற்கிறது.' : 'Avoiding short-term hype, exaggerated claims, or aggressive SaaS positioning. AEGAM stays firmly connected to physical manufacturing and real infrastructure.'
    }
  ];

  return (
    <section className={`py-20 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#100D06] text-[#FAF3EB] border-[#4A3B18]' : 'bg-[#FAF7F2] text-[#1C1810] border-[#E2D5B8]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 border rounded-full text-xs font-semibold uppercase tracking-wider ${
            isDark ? 'bg-[#241E0F] border-[#4A3B18] text-[#D4AF37]' : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#B8860B]'
          }`}>
            <span>{t.operationalPhilosophy.eyebrow}</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#1C1810]'
          }`}>
            {t.operationalPhilosophy.title}
          </h2>
          <p className={`text-xs sm:text-sm leading-relaxed ${
            isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'
          }`}>
            {t.operationalPhilosophy.subtitle}
          </p>
        </div>

        {/* Principles Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className={`border rounded-xl p-6 transition-all shadow-sm group ${
                isDark 
                  ? 'bg-[#241E0F] border-[#4A3B18] hover:border-[#C5A059]/50' 
                  : 'bg-[#FFFFFF] border-[#E2D5B8] hover:border-[#B8860B]/50'
              }`}
            >
              <div className={`p-3 border rounded-lg w-fit mb-4 transition-colors ${
                isDark ? 'bg-[#100D06] border-[#4A3B18] group-hover:border-[#C5A059]/40' : 'bg-[#F2EAE0] border-[#E2D5B8]'
              }`}>
                {item.icon}
              </div>
              <h3 className={`text-base font-bold mb-2 transition-colors ${
                isDark ? 'text-white group-hover:text-[#D4AF37]' : 'text-[#1C1810] group-hover:text-[#B8860B]'
              }`}>
                {item.title}
              </h3>
              <p className={`text-xs leading-relaxed ${
                isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'
              }`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Etymology Quote Banner */}
        <div className={`mt-14 p-8 border rounded-2xl text-center max-w-4xl mx-auto space-y-3 shadow-lg ${
          isDark 
            ? 'bg-[#241E0F] border-[#4A3B18]' 
            : 'bg-[#1C1810] border-[#423414] text-white'
        }`}>
          <span className="text-[#D4AF37] font-serif text-3xl font-bold">ஏகம் (AEGAM)</span>
          <h4 className="text-lg font-bold text-white">
            {isTa ? 'பொருள்: அக ஒளியின் மூலமாக ஒருங்கிணைத்தல்' : 'Meaning: Unity Through Inner Light'}
          </h4>
          <p className="text-xs text-[#D8CCA8] max-w-2xl mx-auto leading-relaxed">
            &ldquo;{isTa ? 'நீண்ட கால அமைப்புகள் தனித்தனியான போட்டியாலும் துண்டிக்கப்பட்ட செயல்பாடுகளாலும் இயங்கக் கூடாது. தெளிவு, பொறுப்புணர்ச்சி மற்றும் ஒழுக்கம் இணையும் போது, நீண்ட கால நம்பிக்கையும் தொடர்ச்சியும் இயல்பாக உருவாகிறது.' : 'Long-term ecosystems should not operate through isolated competition and disconnected execution. When clarity, responsibility, and operational discipline align, long-term trust and ecosystem continuity naturally follow.'}&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
};
