import React, { useState } from 'react';
import { CheckCircle2, Cpu, HardHat, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const CurrentVsFuture: React.FC = () => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<'current' | 'future'>('current');

  const isTa = language === 'ta';

  const currentItems = [
    { 
      title: isTa ? 'இயந்திர உற்பத்தி' : 'Machinery Manufacturing', 
      desc: isTa ? 'ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரங்கள், கனரக எக்ஸ்பெல்லர் பொறியியல் மற்றும் பட்டறை செயல்பாடுகள்.' : 'Rotary oil extraction machines, heavy expeller engineering, and workshop operations.' 
    },
    { 
      title: isTa ? 'கனரக தயாரிப்பு' : 'Heavy Fabrication', 
      desc: isTa ? 'கட்டமைப்பு எஃகு வெட்டுதல், வளைத்தல், வெல்டிங் சேசிஸ் தயாரிப்பு மற்றும் அசெம்பிளி.' : 'Structural steel cutting, forming, welded chassis fabrication, and bench assembly.' 
    },
    { 
      title: isTa ? 'தொழில்துறை செயல்பாடுகள்' : 'Industrial Operations', 
      desc: isTa ? 'நேரடி பட்டறை ஒழுக்கம், தரக் கட்டுப்பாட்டு தரநிலைகள் மற்றும் 48 மணிநேர இயந்திர சோதனைகள்.' : 'Physical workshop discipline, quality control standards, and equipment bench testing.' 
    },
    { 
      title: isTa ? 'வணிகம் & விநியோகம்' : 'Commerce & Distribution', 
      desc: isTa ? 'வளரிவன் இண்டஸ்ட்ரி வாடிக்கையாளர் சேர்க்கை, டீலர்ஷிப் அமைப்புகள் மற்றும் விநியோகம்.' : 'Valarivan Industry client onboarding, dealership structures, and regional distribution.' 
    },
    { 
      title: isTa ? 'மூலோபாய கொள்முதல்' : 'Strategic Procurement', 
      desc: isTa ? 'அருளாட்சி ஒபிசி உயர்தர எஃகு கொள்முதல், விற்பனையாளர் ஒருங்கிணைப்பு மற்றும் விநியோகச் சங்கிலி.' : 'Arulatchi OPC raw material sourcing, steel vendor coordination, and supply chain flow.' 
    },
    { 
      title: isTa ? 'உட்கட்டமைப்பு மேம்பாடு' : 'Infrastructure Development', 
      desc: isTa ? 'தொழில்துறை வளாக விரிவாக்கம், பட்டறை வசதிகள் மற்றும் மூலப்பொருள் தளங்கள்.' : 'Physical campus expansion, workshop facilities, and heavy material yards.' 
    }
  ];

  const futureItems = [
    { 
      title: isTa ? 'செயல்பாட்டு மென்பொருள் அமைப்புகள்' : 'Operational Software Systems', 
      desc: isTa ? 'உற்பத்தி நிலைகளைக் கண்காணிக்கும் பிரத்யேக உள் நிறுவன மென்பொருள் அமைப்புகள்.' : 'Custom internal tracking and workflow coordination modules tailored to physical manufacturing.' 
    },
    { 
      title: isTa ? 'எகோசிஸ்டம் ஆப்பரேட்டிங் சிஸ்டம் (EOS)' : 'Ecosystem Operating System (EOS)', 
      desc: isTa ? 'நிர்வாகம், டீலர் ஆர்டர்கள், சரக்கு இருப்பு மற்றும் தர சோதனைகளை இணைக்கும் போர்டல்.' : 'Unified portal bridging governance, dealer orders, inventory flow, and quality logs.' 
    },
    { 
      title: isTa ? 'பணிப்பாய்வு ஒருங்கிணைப்புக் கருவிகள்' : 'Workflow Coordination Tools', 
      desc: isTa ? 'நிறுவனங்களுக்கிடையேயான பணிகளைப் பிரித்து ஒருங்கிணைக்கும் டிஜிட்டல் பணிப்பாய்வு.' : 'Structured communication desks for inter-entity task routing and accountability.' 
    },
    { 
      title: isTa ? 'செயல்பாட்டு நுண்ணறிவு ஆதரவு' : 'Operational Intelligence Support', 
      desc: isTa ? 'இயந்திர பயன்பாடு, விதை எண்ணெய் மகசூல் மற்றும் கொள்முதல் கணிப்புகளுக்கான பகுப்பாய்வு.' : 'Data analytics on machine usage, seed yield efficiency, and procurement forecasting.' 
    },
    { 
      title: isTa ? 'செயற்கை நுண்ணறிவு வழிகாட்டல்' : 'AI-Assisted Operational Support', 
      desc: isTa ? 'தொழில்நுட்ப கையேடுகள் மற்றும் பராமரிப்பு வழிகாட்டல்களுக்கான AI உதவியாளர்.' : 'Domain-trained operational assistant for technical manual lookups and maintenance guidance.' 
    },
    { 
      title: isTa ? 'வளரக்கூடிய சுற்றுச்சூழல் ஒருங்கிணைப்பு' : 'Scalable Ecosystem Coordination', 
      desc: isTa ? 'கூட்டாளர்கள், விநியோகஸ்தர்கள் மற்றும் தொழில்துறை பங்குதாரர்களுக்கான பிரத்யேக போர்டல்.' : 'Structured portals for strategic collaborators, freelancers, and industrial partners.' 
    }
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-[#1F0B0E] text-[#FAF3EB]' : 'bg-[#FAF7F2] text-[#2B1015]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 border rounded-full text-xs font-bold uppercase tracking-wider ${
            isDark 
              ? 'bg-[#2E1218] border-[#4D1E27] text-[#D4AF37]' 
              : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#8C2A38]'
          }`}>
            <Compass className="w-3.5 h-3.5" />
            <span>{t.currentVsFuture.eyebrow}</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#2B1015]'
          }`}>
            {t.currentVsFuture.title}
          </h2>
          <p className={`text-sm leading-relaxed ${
            isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'
          }`}>
            {t.currentVsFuture.subtitle}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="mt-10 flex justify-center">
          <div className={`p-1 rounded-xl flex items-center gap-1 shadow-inner max-w-md w-full border ${
            isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-[#F2EAE0] border-[#E2D5B8]'
          }`}>
            <button
              onClick={() => setActiveTab('current')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'current'
                  ? isDark 
                    ? 'bg-[#36151C] text-[#D4AF37] border border-[#C5A059]/40 shadow' 
                    : 'bg-[#FFFFFF] text-[#8C2A38] border border-[#8C2A38]/30 shadow'
                  : isDark
                    ? 'text-[#D1B8BC] hover:text-white'
                    : 'text-[#5C2B32] hover:text-black'
              }`}
            >
              <HardHat className="w-4 h-4" />
              <span>{isTa ? 'தற்போதைய நிலை (இயக்கத்தில்)' : 'Current Reality (Active)'}</span>
            </button>

            <button
              onClick={() => setActiveTab('future')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'future'
                  ? isDark 
                    ? 'bg-[#36151C] text-[#D4AF37] border border-[#C5A059]/40 shadow' 
                    : 'bg-[#FFFFFF] text-[#8C2A38] border border-[#8C2A38]/30 shadow'
                  : isDark
                    ? 'text-[#D1B8BC] hover:text-white'
                    : 'text-[#5C2B32] hover:text-black'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{isTa ? 'எதிர்கால விரிவாக்கம் (படிப்படியாக)' : 'Future Expansion (Phased)'}</span>
            </button>
          </div>
        </div>

        {/* Matrix Grid Content */}
        <div className="mt-10">
          {activeTab === 'current' ? (
            <div className="space-y-6">
              <div className={`p-4 border rounded-lg text-xs flex items-center justify-between ${
                isDark ? 'bg-[#2E1218] border-[#4D1E27] text-[#D1B8BC]' : 'bg-[#FFFFFF] border-[#E2D5B8] text-[#5C2B32]'
              }`}>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>
                  {t.currentVsFuture.phase1Title}:
                </span>
                <span className="text-[#D4AF37] font-bold">{t.currentVsFuture.phase1Subtitle}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`border p-6 rounded-xl transition-colors shadow-sm ${
                      isDark 
                        ? 'bg-[#2E1218] border-[#4D1E27] hover:border-[#C5A059]' 
                        : 'bg-[#FFFFFF] border-[#E2D5B8] hover:border-[#8C2A38]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{item.title}</h3>
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className={`p-4 border rounded-lg text-xs flex items-center justify-between ${
                isDark ? 'bg-[#150709] border-[#4D1E27] text-[#FAF3EB]' : 'bg-[#8C2A38] text-white border-[#8C2A38]'
              }`}>
                <span className="font-semibold text-[#D4AF37]">{t.currentVsFuture.phase2Title}:</span>
                <span className="opacity-90">{t.currentVsFuture.phase2Subtitle}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {futureItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`border p-6 rounded-xl transition-colors shadow-sm ${
                      isDark 
                        ? 'bg-[#150709] border-[#4D1E27] hover:border-[#C5A059]' 
                        : 'bg-[#FFFFFF] border-[#E2D5B8] hover:border-[#8C2A38]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{item.title}</h3>
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
