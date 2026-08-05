import React, { useState } from 'react';
import { ECOSYSTEM_ENTITIES } from '../data/entities';
import { EcosystemEntity } from '../types';
import { ShieldCheck, Factory, TrendingUp, Boxes, CheckCircle2, ArrowRight, ExternalLink, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface EcosystemEntitiesProps {
  onOpenInquiry: (entityName?: string) => void;
}

export const EcosystemEntities: React.FC<EcosystemEntitiesProps> = ({ onOpenInquiry }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();
  const [selectedEntity, setSelectedEntity] = useState<EcosystemEntity | null>(null);

  const isTa = language === 'ta';

  const getEntityIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Factory': return <Factory className="w-6 h-6 text-[#D4AF37]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#D4AF37]" />;
      case 'Boxes': return <Boxes className="w-6 h-6 text-[#D4AF37]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

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
            <span>{t.entities.eyebrow}</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#2B1015]'
          }`}>
            {t.entities.title}
          </h2>
          <p className={`text-sm leading-relaxed ${
            isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'
          }`}>
            {t.entities.subtitle}
          </p>
        </div>

        {/* Entities Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ECOSYSTEM_ENTITIES.map((entity) => {
            const displayName = isTa && entity.taName ? entity.taName : entity.name;
            const displayRole = isTa && entity.taRole ? entity.taRole : entity.role;
            const displayShortDesc = isTa && entity.taShortDescription ? entity.taShortDescription : entity.shortDescription;
            const displayResps = isTa && entity.taKeyResponsibilities ? entity.taKeyResponsibilities : entity.keyResponsibilities;
            const displayBadge = isTa && entity.taBadge ? entity.taBadge : entity.badge;

            return (
              <div
                key={entity.id}
                className={`border rounded-xl p-6 sm:p-8 shadow-sm transition-all flex flex-col justify-between group ${
                  isDark 
                    ? 'bg-[#2E1218] border-[#4D1E27] hover:border-[#C5A059]' 
                    : 'bg-[#FFFFFF] border-[#E2D5B8] hover:border-[#8C2A38]'
                }`}
              >
                <div>
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 border rounded-lg transition-colors ${
                        isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-[#F2EAE0] border-[#E2D5B8]'
                      }`}>
                        {getEntityIcon(entity.iconName)}
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold transition-colors ${
                          isDark ? 'text-white group-hover:text-[#D4AF37]' : 'text-[#2B1015] group-hover:text-[#8C2A38]'
                        }`}>
                          {displayName}
                        </h3>
                        {entity.taName && !isTa && (
                          <p className="text-xs text-[#D4AF37] font-semibold">{entity.taName}</p>
                        )}
                      </div>
                    </div>
                    <span className={`shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border rounded ${
                      isDark ? 'bg-[#150709] text-[#D4AF37] border-[#4D1E27]' : 'bg-[#F2EAE0] text-[#8C2A38] border-[#E2D5B8]'
                    }`}>
                      {displayBadge}
                    </span>
                  </div>

                  {/* Role subtitle */}
                  <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-[#FAF3EB]' : 'text-[#2B1015]'}`}>
                    {displayRole}
                  </p>

                  {/* Short description */}
                  <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                    {displayShortDesc}
                  </p>

                  {/* Responsibilities list snippet */}
                  <div className={`space-y-2 mb-6 text-xs ${isDark ? 'text-[#FAF3EB]' : 'text-[#2B1015]'}`}>
                    {displayResps.slice(0, 3).map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className={`pt-4 border-t flex items-center justify-between gap-3 ${
                  isDark ? 'border-[#4D1E27]' : 'border-[#F2EAE0]'
                }`}>
                  <button
                    onClick={() => setSelectedEntity(entity)}
                    className={`text-xs font-bold transition-colors flex items-center gap-1 ${
                      isDark ? 'text-[#D4AF37] hover:text-white' : 'text-[#8C2A38] hover:text-[#2B1015]'
                    }`}
                  >
                    <span>{isTa ? 'முழு விவரம் & எல்லை' : 'View Full Structure & Scope'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {entity.link ? (
                    <a
                      href={entity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-1.5 text-xs font-bold rounded transition-colors inline-flex items-center gap-1 ${
                        isDark ? 'bg-[#150709] text-[#D4AF37] hover:bg-[#36151C]' : 'bg-[#8C2A38] text-white hover:bg-[#72202C]'
                      }`}
                    >
                      <span>www.aeganai.in</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenInquiry(entity.name)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                        isDark ? 'bg-[#150709] hover:bg-[#36151C] text-[#FAF3EB]' : 'bg-[#F2EAE0] hover:bg-[#E8DEC8] text-[#2B1015]'
                      }`}
                    >
                      {t.entities.inquireBtn}
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal for detailed entity view */}
        {selectedEntity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className={`relative w-full max-w-3xl border rounded-xl shadow-2xl overflow-hidden animate-fadeIn ${
              isDark ? 'bg-[#150709] text-[#FAF3EB] border-[#4D1E27]' : 'bg-[#FFFFFF] text-[#2B1015] border-[#E2D5B8]'
            }`}>
              
              {/* Header */}
              <div className={`flex items-center justify-between px-6 py-4 border-b ${
                isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#F2EAE0] border-[#E2D5B8]'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#D4AF37]/20 rounded-lg">
                    {getEntityIcon(selectedEntity.iconName)}
                  </div>
                  <div>
                    <h3 className={`text-base font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>
                      {isTa && selectedEntity.taName ? selectedEntity.taName : selectedEntity.name}
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                      {isTa && selectedEntity.taType ? selectedEntity.taType : selectedEntity.type}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEntity(null)}
                  className={`p-1.5 rounded-lg ${isDark ? 'text-[#D1B8BC] hover:text-white' : 'text-[#5C2B32] hover:text-black'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal content */}
              <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
                    {isTa ? 'நிறுவனத்தின் நோக்கம் & எல்லை' : 'Entity Scope & Purpose'}
                  </h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#4A1E24]'}`}>
                    {isTa && selectedEntity.taFullDescription ? selectedEntity.taFullDescription : selectedEntity.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
                    {isTa ? 'முக்கிய பொறுப்புகள் & கடமைகள்' : 'Core Accountabilities & Responsibilities'}
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {(isTa && selectedEntity.taKeyResponsibilities ? selectedEntity.taKeyResponsibilities : selectedEntity.keyResponsibilities).map((resp, i) => (
                      <div key={i} className={`flex items-start gap-2.5 p-2.5 border rounded ${
                        isDark ? 'bg-[#2E1218] border-[#4D1E27] text-[#FAF3EB]' : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#2B1015]'
                      }`}>
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`p-4 border rounded ${
                    isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
                  }`}>
                    <h5 className={`text-xs font-semibold mb-2 ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>
                      {isTa ? 'செயல்பாட்டு கவனம்' : 'Operational Focus'}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {(isTa && selectedEntity.taOperationalFocus ? selectedEntity.taOperationalFocus : selectedEntity.operationalFocus).map((focus, i) => (
                        <span key={i} className={`px-2 py-0.5 text-[11px] rounded border ${
                          isDark ? 'bg-[#150709] text-[#D4AF37] border-[#4D1E27]' : 'bg-[#FFFFFF] text-[#8C2A38] border-[#E2D5B8]'
                        }`}>
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`p-4 border rounded ${
                    isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
                  }`}>
                    <h5 className={`text-xs font-semibold mb-1 ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>
                      {isTa ? 'நிர்வாக எல்லை' : 'Governance Scope'}
                    </h5>
                    <p className={`text-xs ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                      {isTa && selectedEntity.taGovernanceScope ? selectedEntity.taGovernanceScope : selectedEntity.governanceScope}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className={`flex items-center justify-between px-6 py-4 border-t ${
                isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#F2EAE0] border-[#E2D5B8]'
              }`}>
                <button
                  onClick={() => setSelectedEntity(null)}
                  className={`px-4 py-2 border text-xs rounded ${
                    isDark ? 'border-[#4D1E27] text-[#D1B8BC] hover:text-white' : 'border-[#E2D5B8] text-[#5C2B32] hover:text-black'
                  }`}
                >
                  {isTa ? 'மூடுக' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    const name = selectedEntity.name;
                    setSelectedEntity(null);
                    onOpenInquiry(name);
                  }}
                  className={`px-5 py-2 font-bold text-xs rounded transition-colors ${
                    isDark ? 'bg-[#C5A059] text-[#1F0B0E] hover:bg-[#D4AF37]' : 'bg-[#8C2A38] text-white hover:bg-[#72202C]'
                  }`}
                >
                  {isTa ? `${selectedEntity.taName || selectedEntity.name} - விசாரணை` : `Send Inquiry for ${selectedEntity.name}`}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
