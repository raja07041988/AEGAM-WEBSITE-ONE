import React from 'react';
import { X, Shield, Lock, Cpu, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface EosGatewayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EosGatewayModal: React.FC<EosGatewayModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const { isDark } = useTheme();

  const isTa = language === 'ta';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
      <div 
        className={`relative w-full max-w-3xl border rounded-xl shadow-2xl overflow-hidden animate-fadeIn ${
          isDark 
            ? 'bg-[#100D06] text-[#FAF3EB] border-[#4A3B18]' 
            : 'bg-[#FFFFFF] text-[#1C1810] border-[#E2D5B8]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-[#F2EAE0] border-[#E2D5B8]'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#D4AF37]/20 rounded-lg text-[#D4AF37] border border-[#D4AF37]/30">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-bold tracking-wider ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  {isTa ? 'ஏகம் EOS கேட்வே' : 'AEGAM EOS GATEWAY'}
                </span>
                <span className="px-2 py-0.5 text-[10px] uppercase font-semibold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 rounded">
                  {isTa ? 'கட்டம் 2 முன்னோட்டம்' : 'Phase 2 Preview'}
                </span>
              </div>
              <p className={`text-xs ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                {isTa ? 'சுற்றுச்சூழல் ஆப்பரேட்டிங் சிஸ்டம் & ஒருங்கிணைந்த நுழைவாயில்' : 'Ecosystem Operating System & Unified Gateway'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              isDark ? 'text-[#D8CCA8] hover:text-white hover:bg-[#362A10]' : 'text-[#61502C] hover:text-black hover:bg-[#FAF7F2]'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          <div className={`p-4 border rounded-lg ${
            isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
          }`}>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-[#D4AF37]">
                  {isTa ? 'கட்டமைப்பு அடித்தளம் & தயார்நிலை' : 'Architectural Foundation & Phase Readiness'}
                </h4>
                <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                  {isTa ? 'AEGAM.IN (கட்டம் 1) அதிகாரப்பூர்வ பொது அடித்தளமாக வடிவமைக்கப்பட்டுள்ளது. எதிர்கால கட்டங்களில், இந்த இணையதளம் உள் மற்றும் வெளி செயல்பாட்டு தொகுதிகளுக்கான போர்டல் நுழைவாயிலாக செயல்படும்.' : 'AEGAM.IN (Phase 1) is designed as the official public foundation. In future phases, this website will serve as the portal entry point for internal and external operational modules without requiring visual or structural re-architecture.'}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-[#D8CCA8]' : 'text-[#B8860B]'}`}>
              {isTa ? 'திட்டமிடப்பட்ட போர்டல் இணைப்புகள் (எதிர்கால கட்டங்கள்)' : 'Planned Gateway Integrations (Future Phases)'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className={`p-4 border rounded-lg ${isDark ? 'bg-[#100D06] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'}`}>
                <div className={`flex items-center gap-2 mb-2 ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  <Server className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm font-semibold">{isTa ? 'டீலர் & விநியோகஸ்தர் போர்டல்' : 'Dealer & Distributor Portal'}</span>
                </div>
                <p className={`text-xs ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                  {isTa ? 'இயந்திர இருப்பு, உதிரி பாகங்கள் பட்டியல் மற்றும் ஆர்டர் கண்காணிப்புக்கான அங்கீகரிக்கப்பட்ட விநியோகஸ்தர் உள்நுழைவு.' : 'Authorized machinery distributor login for inventory availability, spare parts catalog, and order tracking.'}
                </p>
              </div>

              <div className={`p-4 border rounded-lg ${isDark ? 'bg-[#100D06] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'}`}>
                <div className={`flex items-center gap-2 mb-2 ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  <Lock className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm font-semibold">{isTa ? 'நிறுவன ஒருங்கிணைப்பு தளம்' : 'Entity Coordination Desk'}</span>
                </div>
                <p className={`text-xs ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                  {isTa ? 'ஏகம் டிரஸ்ட், உற்பத்தி, வணிகம் மற்றும் கொள்முதல் இடையேயான பணிப்பாய்வு இணைப்பு.' : 'Inter-entity workflow routing between AEGAM Trust, Manufacturing, Commerce, and Procurement.'}
                </p>
              </div>

              <div className={`p-4 border rounded-lg ${isDark ? 'bg-[#100D06] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'}`}>
                <div className={`flex items-center gap-2 mb-2 ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  <Cpu className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm font-semibold">{isTa ? 'எகோசிஸ்டம் ஆப்பரேட்டிங் சிஸ்டம் (EOS)' : 'Ecosystem Operating System (EOS)'}</span>
                </div>
                <p className={`text-xs ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                  {isTa ? 'ஒருங்கிணைக்கப்பட்ட செயல்பாட்டு நுண்ணறிவு, தர சோதனைகள் மற்றும் மூலப்பொருள் கண்காணிப்பு அமைப்புகள்.' : 'Unified operational intelligence, quality inspection logs, and raw material tracking systems.'}
                </p>
              </div>

              <div className={`p-4 border rounded-lg ${isDark ? 'bg-[#100D06] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'}`}>
                <div className={`flex items-center gap-2 mb-2 ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm font-semibold">{isTa ? 'பங்களிப்பாளர் & நிர்வாக போர்டல்' : 'Contributor & Governance Portal'}</span>
                </div>
                <p className={`text-xs ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                  {isTa ? 'கூட்டாளர்கள் மற்றும் ஆலோசகர்களுக்கான பிரத்யேக ஒருங்கிணைப்பு தளம்.' : 'Structured coordination desk for strategic collaborators, freelancers, and operational advisors.'}
                </p>
              </div>
            </div>
          </div>

          <div className={`p-4 border rounded-lg ${isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-[#F2EAE0] border-[#E2D5B8]'}`}>
            <h4 className={`text-xs font-semibold mb-2 ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
              {isTa ? 'தற்போதைய கட்டம் 1 செயல்பாட்டு ஆணை' : 'Current Phase 1 Operational Mandate'}
            </h4>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
              {isTa ? 'நாங்கள் உள்கட்டமைப்பு நிறைவுக்கு பிறகு மென்பொருள் தொகுதிகளை படிப்படியாக இயக்குவோம்.' : 'We adhere strictly to grounded operational reality. Active software modules will be enabled in phased sequences following industrial infrastructure completion.'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className={`flex items-center justify-between px-6 py-4 border-t ${
          isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-[#F2EAE0] border-[#E2D5B8]'
        }`}>
          <span className={`text-xs ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
            AEGAM Industrial & Venture Ecosystem
          </span>
          <button
            onClick={onClose}
            className={`px-4 py-2 font-semibold text-xs rounded transition-colors flex items-center gap-1.5 ${
              isDark ? 'bg-[#C5A059] hover:bg-[#D4AF37] text-[#18140B]' : 'bg-[#B8860B] hover:bg-[#A37409] text-white'
            }`}
          >
            {isTa ? 'புரிந்துகொண்டேன் & மூடுக' : 'Acknowledge & Close'}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
