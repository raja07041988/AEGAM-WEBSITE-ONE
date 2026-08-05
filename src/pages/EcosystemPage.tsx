import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ECOSYSTEM_ENTITIES } from '../data/entities';
import { ArrowRight, ExternalLink, Cpu, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface EcosystemPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenInquiry: (entityName?: string) => void;
  onOpenEosGateway: () => void;
}

export const EcosystemPage: React.FC<EcosystemPageProps> = ({
  onNavigate,
  onOpenInquiry,
  onOpenEosGateway
}) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();
  const [activeEntityId, setActiveEntityId] = useState<string>('aegam-trust');

  const isTa = language === 'ta';

  const selectedEntity = ECOSYSTEM_ENTITIES.find(e => e.id === activeEntityId) || ECOSYSTEM_ENTITIES[0];

  const name = isTa && selectedEntity.taName ? selectedEntity.taName : selectedEntity.name;
  const role = isTa && selectedEntity.taRole ? selectedEntity.taRole : selectedEntity.role;
  const fullDesc = isTa && selectedEntity.taFullDescription ? selectedEntity.taFullDescription : selectedEntity.fullDescription;
  const keyResps = isTa && selectedEntity.taKeyResponsibilities ? selectedEntity.taKeyResponsibilities : selectedEntity.keyResponsibilities;
  const focus = isTa && selectedEntity.taOperationalFocus ? selectedEntity.taOperationalFocus : selectedEntity.operationalFocus;
  const govScope = isTa && selectedEntity.taGovernanceScope ? selectedEntity.taGovernanceScope : selectedEntity.governanceScope;
  const badge = isTa && selectedEntity.taBadge ? selectedEntity.taBadge : selectedEntity.badge;

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
            <span>{t.ecosystemPage.eyebrow}</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#2B1015]'
          }`}>
            {t.ecosystemPage.title}
          </h1>
          <p className={`text-base leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
            {t.ecosystemPage.subtitle}
          </p>
        </div>

        {/* Interactive Entity Explorer Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Entity Tabs List (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
              {t.ecosystemPage.selectEntity}
            </h3>
            {ECOSYSTEM_ENTITIES.map((entity) => {
              const isActive = entity.id === activeEntityId;
              const displayName = isTa && entity.taName ? entity.taName : entity.name;
              const displayType = isTa && entity.taType ? entity.taType : entity.type;

              return (
                <button
                  key={entity.id}
                  onClick={() => setActiveEntityId(entity.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isActive
                      ? isDark
                        ? 'bg-[#2E1218] text-white border-[#C5A059] shadow-lg'
                        : 'bg-[#8C2A38] text-white border-[#8C2A38] shadow-lg'
                      : isDark
                        ? 'bg-[#150709] text-[#FAF3EB] border-[#4D1E27] hover:border-[#C5A059]/50'
                        : 'bg-white text-[#2B1015] border-[#E2D5B8] hover:border-[#8C2A38]/50'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-sm ${isActive ? 'text-white' : (isDark ? 'text-white' : 'text-[#2B1015]')}`}>
                        {displayName}
                      </span>
                    </div>
                    <p className={`text-xs ${isActive ? 'text-white/80' : (isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]')}`}>
                      {displayType}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isActive ? 'text-[#D4AF37] translate-x-1' : 'text-[#8C6D27] group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}

            {/* Gateway Trigger Card */}
            <div className={`p-5 border rounded-xl space-y-3 mt-6 ${
              isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-[#2B1015] text-white border-[#4A1E24]'
            }`}>
              <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>{t.ecosystemPage.phase2Readiness}</span>
              </div>
              <p className="text-xs text-[#D1B8BC] leading-relaxed">
                {t.ecosystemPage.phase2Desc}
              </p>
              <button
                onClick={onOpenEosGateway}
                className={`w-full py-2 border rounded text-xs font-bold transition-colors ${
                  isDark 
                    ? 'bg-[#2E1218] hover:bg-[#36151C] text-[#D4AF37] border-[#4D1E27]' 
                    : 'bg-white/10 hover:bg-white/20 text-[#D4AF37] border-white/20'
                }`}
              >
                {t.ecosystemPage.previewEosBtn}
              </button>
            </div>
          </div>

          {/* Right Entity Details Showcase (8 cols) */}
          <div className={`lg:col-span-8 border rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 ${
            isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
          }`}>
            
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b ${
              isDark ? 'border-[#4D1E27]' : 'border-[#E2D5B8]'
            }`}>
              <div>
                <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border rounded inline-block mb-2 ${
                  isDark ? 'bg-[#150709] text-[#D4AF37] border-[#4D1E27]' : 'bg-[#F2EAE0] text-[#8C2A38] border-[#E2D5B8]'
                }`}>
                  {badge}
                </span>
                <h2 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>
                  {name}
                </h2>
              </div>

              {selectedEntity.link ? (
                <a
                  href={selectedEntity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 font-bold text-xs rounded-lg transition-colors inline-flex items-center gap-1.5 ${
                    isDark ? 'bg-[#150709] text-[#D4AF37] hover:bg-[#36151C]' : 'bg-[#8C2A38] text-white hover:bg-[#72202C]'
                  }`}
                >
                  <span>www.aeganai.in</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => onOpenInquiry(selectedEntity.name)}
                  className={`px-4 py-2 font-bold text-xs rounded-lg transition-colors ${
                    isDark ? 'bg-[#C5A059] text-[#1F0B0E] hover:bg-[#D4AF37]' : 'bg-[#8C2A38] text-white hover:bg-[#72202C]'
                  }`}
                >
                  {t.entities.inquireBtn}
                </button>
              )}
            </div>

            {/* Subtitle / Role */}
            <div>
              <h3 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">{t.ecosystemPage.roleScope}</h3>
              <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{role}</p>
              <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                {fullDesc}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h3 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">{t.ecosystemPage.accountabilities}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {keyResps.map((resp, i) => (
                  <div key={i} className={`p-3 border rounded-lg flex items-start gap-2.5 ${
                    isDark ? 'bg-[#150709] border-[#4D1E27] text-[#FAF3EB]' : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#2B1015]'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Focus & Governance Scope */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t ${
              isDark ? 'border-[#4D1E27]' : 'border-[#E2D5B8]'
            }`}>
              <div className={`p-4 rounded-xl border ${
                isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-[#F2EAE0] border-[#E2D5B8]'
              }`}>
                <h4 className={`text-xs font-bold mb-2 ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{t.ecosystemPage.focusTags}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {focus.map((f, i) => (
                    <span key={i} className={`px-2.5 py-1 text-[11px] font-semibold rounded border ${
                      isDark ? 'bg-[#2E1218] text-[#D4AF37] border-[#4D1E27]' : 'bg-white text-[#8C2A38] border-[#E2D5B8]'
                    }`}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-4 rounded-xl border ${
                isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-[#F2EAE0] border-[#E2D5B8]'
              }`}>
                <h4 className={`text-xs font-bold mb-1 ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{t.ecosystemPage.governanceBoundary}</h4>
                <p className={`text-xs ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>{govScope}</p>
              </div>
            </div>

          </div>

        </div>

        {/* Participation vs Ownership Section */}
        <div className={`border rounded-2xl p-8 lg:p-12 space-y-6 ${
          isDark 
            ? 'bg-[#150709] text-[#FAF3EB] border-[#4D1E27]' 
            : 'bg-[#2B1015] text-white border-[#4A1E24]'
        }`}>
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
              {isTa ? 'பங்கேற்பு & உறவுத் தெளிவு' : 'Participation & Relationship Clarity'}
            </span>
            <h2 className="text-2xl font-bold text-white">
              {t.ecosystemPage.participationTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#D1B8BC] leading-relaxed">
              {t.ecosystemPage.participationSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className={`p-4 border rounded-xl space-y-2 ${isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#1F0B0E] border-[#4A1E24]'}`}>
              <strong className="text-[#D4AF37] block font-bold">{isTa ? 'செயல்பாட்டு பங்களிப்பு' : 'Operational Contributions'}</strong>
              <p className="text-[#D1B8BC]">{isTa ? 'பொறியாளர்கள், பட்டறை ஊழியர்கள் மற்றும் தொழில்நுட்ப வல்லுநர்களின் பங்களிப்பு.' : 'Engineers, workshop contributors, and technical specialists providing expertise.'}</p>
            </div>
            <div className={`p-4 border rounded-xl space-y-2 ${isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#1F0B0E] border-[#4A1E24]'}`}>
              <strong className="text-[#D4AF37] block font-bold">{isTa ? 'டீலர்ஷிப் & விநியோகம்' : 'Dealership & Distribution'}</strong>
              <p className="text-[#D1B8BC]">{isTa ? 'ரோட்டரி எண்ணெய் பிழிந்தெடுக்கும் இயந்திரங்கள் மற்றும் உதிரிபாகங்களை விநியோகிக்கும் கூட்டாளர்கள்.' : 'Authorized regional partners distributing rotary oil machinery and spare parts.'}</p>
            </div>
            <div className={`p-4 border rounded-xl space-y-2 ${isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#1F0B0E] border-[#4A1E24]'}`}>
              <strong className="text-[#D4AF37] block font-bold">{isTa ? 'மூலோபாய ஒத்துழைப்பு' : 'Strategic Collaboration'}</strong>
              <p className="text-[#D1B8BC]">{isTa ? 'தொழில்துறை மற்றும் கல்வி நிறுவனங்களுடன் இணைந்து செயல்படும் கூட்டு.' : 'Industrial, academic, and technology collaborators aligned with ecosystem goals.'}</p>
            </div>
            <div className={`p-4 border rounded-xl space-y-2 ${isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#1F0B0E] border-[#4A1E24]'}`}>
              <strong className="text-[#D4AF37] block font-bold">{isTa ? 'சுற்றுச்சூழல் வழிகாட்டுதல்' : 'Ecosystem Stewardship'}</strong>
              <p className="text-[#D1B8BC]">{isTa ? 'நீண்ட கால நிறுவனத் தொடர்ச்சியை உறுதி செய்யும் ஏகம் டிரஸ்ட் நிர்வாகம்.' : 'Governed by AEGAM TRUST to ensure long-term institutional continuity.'}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
