import React from 'react';
import { ShieldCheck, Factory, ShoppingCart, Truck, Cpu, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const EcosystemDiagram: React.FC = () => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();

  const isTa = language === 'ta';

  const nodes = [
    {
      id: 'trust',
      title: t.ecosystemDiagram.trustTitle,
      desc: t.ecosystemDiagram.trustDesc,
      icon: ShieldCheck,
      badge: isTa ? 'நிர்வாக அறக்கட்டளை' : 'Non-Profit Governance',
    },
    {
      id: 'mfg',
      title: t.ecosystemDiagram.mfgTitle,
      desc: t.ecosystemDiagram.mfgDesc,
      icon: Factory,
      badge: isTa ? 'இயந்திர உற்பத்தி' : 'Rotary & Fabrication',
    },
    {
      id: 'sales',
      title: t.ecosystemDiagram.salesTitle,
      desc: t.ecosystemDiagram.salesDesc,
      icon: ShoppingCart,
      badge: isTa ? 'வணிக விநியோகம்' : 'Commercial & Dealerships',
    },
    {
      id: 'supply',
      title: t.ecosystemDiagram.supplyTitle,
      desc: t.ecosystemDiagram.supplyDesc,
      icon: Truck,
      badge: isTa ? 'மூலப்பொருள் கொள்முதல்' : 'Raw Materials & Agro',
    },
    {
      id: 'future',
      title: t.ecosystemDiagram.futureTitle,
      desc: t.ecosystemDiagram.futureDesc,
      icon: Cpu,
      badge: isTa ? 'கட்டம் 2 டிஜிட்டல் தளம்' : 'Phase 2 Digital Layer',
    },
  ];

  return (
    <div className={`py-12 border-t border-b transition-colors duration-300 ${
      isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-[0.25em]">
            {t.ecosystemDiagram.eyebrow}
          </span>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#2B1015]'
          }`}>
            {t.ecosystemDiagram.title}
          </h2>
          <p className={`text-xs sm:text-sm leading-relaxed ${
            isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'
          }`}>
            {t.ecosystemDiagram.subtitle}
          </p>
        </div>

        {/* Visual Diagram - Flow Grid */}
        <div className="relative pt-4">
          
          {/* Connecting line background (Desktop) */}
          <div className={`hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 -translate-y-1/2 z-0 ${
            isDark 
              ? 'bg-gradient-to-r from-[#D4AF37] via-[#4D1E27] to-[#D4AF37]' 
              : 'bg-gradient-to-r from-[#8C2A38] via-[#E2D5B8] to-[#8C2A38]'
          }`}></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {nodes.map((node, index) => {
              const IconComp = node.icon;
              return (
                <div key={node.id} className="flex flex-col items-center">
                  <div className={`w-full p-5 rounded-xl border shadow-sm transition-all hover:shadow-md flex flex-col justify-between h-full space-y-4 ${
                    isDark 
                      ? 'bg-[#2E1218] border-[#4D1E27] text-[#FAF3EB]' 
                      : 'bg-[#FFFFFF] border-[#E2D5B8] text-[#2B1015]'
                  }`}>
                    
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className={`text-[9px] font-mono uppercase font-bold px-2 py-0.5 rounded border ${
                        isDark ? 'bg-[#150709] text-[#D4AF37] border-[#4D1E27]' : 'bg-[#F2EAE0] text-[#8C2A38] border-[#E2D5B8]'
                      }`}>
                        {node.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold tracking-tight mb-1">{node.title}</h3>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>{node.desc}</p>
                    </div>

                    <div className={`pt-2 border-t flex items-center justify-between text-[10px] font-mono ${
                      isDark ? 'border-[#4D1E27] text-[#D4AF37]' : 'border-[#F2EAE0] text-[#8C2A38]'
                    }`}>
                      <span>Node 0{index + 1}</span>
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Flow Arrow (Mobile / Inter-card) */}
                  {index < nodes.length - 1 && (
                    <div className="my-2 lg:hidden text-[#D4AF37]">
                      <ArrowDown className="w-5 h-5 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};
