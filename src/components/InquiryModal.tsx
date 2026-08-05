import React, { useState } from 'react';
import { X, Send, Check, Building2, Phone, Mail } from 'lucide-react';
import { ContactFormInput } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInquiryType?: ContactFormInput['inquiryType'];
  productName?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultInquiryType = 'manufacturing',
  productName
}) => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();

  const isTa = language === 'ta';

  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: defaultInquiryType,
    message: productName ? (isTa ? `${productName} பற்றிய விசாரணை: ` : `Inquiry regarding ${productName}: `) : '',
    agreeToTerms: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
      <div 
        className={`relative w-full max-w-2xl border rounded-xl shadow-2xl overflow-hidden animate-fadeIn ${
          isDark 
            ? 'bg-[#100D06] text-[#FAF3EB] border-[#4A3B18]' 
            : 'bg-[#FFFFFF] text-[#1C1810] border-[#E2D5B8]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-[#F2EAE0] border-[#E2D5B8]'
        }`}>
          <div>
            <h3 className={`text-base font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
              <Building2 className="w-4 h-4 text-[#D4AF37]" />
              {productName ? `${t.modals.inquiryTitle}: ${productName}` : t.modals.inquiryTitle}
            </h3>
            <p className={`text-xs ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>{t.modals.inquirySub}</p>
          </div>
          <button 
            onClick={resetAndClose}
            className={`p-1.5 rounded-lg transition-colors ${
              isDark ? 'text-[#D8CCA8] hover:text-white hover:bg-[#362A10]' : 'text-[#61502C] hover:text-black hover:bg-[#FAF7F2]'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <Check className="w-8 h-8" />
              </div>
              <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>{t.contact.successTitle}</h4>
              <p className={`text-sm max-w-md mx-auto leading-relaxed ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                {t.contact.successDesc}
              </p>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className={`px-6 py-2.5 font-semibold text-xs rounded transition-colors ${
                    isDark ? 'bg-[#C5A059] text-[#18140B] hover:bg-[#D4AF37]' : 'bg-[#B8860B] text-white hover:bg-[#A37409]'
                  }`}
                >
                  {t.modals.close}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-[#D8CCA8]' : 'text-[#1C1810]'}`}>
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isTa ? 'எ.கா. க. சுந்தரம்' : 'e.g. K. Sundaram'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2 border rounded text-xs outline-none transition-colors ${
                      isDark 
                        ? 'bg-[#241E0F] border-[#4A3B18] text-white focus:border-[#C5A059] placeholder-[#998A68]' 
                        : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#1C1810] focus:border-[#B8860B] placeholder-[#8C6D27]/60'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-[#D8CCA8]' : 'text-[#1C1810]'}`}>
                    {t.contact.phoneLabel}
                  </label>
                  <div className="relative">
                    <Phone className={`w-3.5 h-3.5 absolute left-3 top-3 ${isDark ? 'text-[#D8CCA8]' : 'text-[#8C6D27]'}`} />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3.5 py-2 border rounded text-xs outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#241E0F] border-[#4A3B18] text-white focus:border-[#C5A059] placeholder-[#998A68]' 
                          : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#1C1810] focus:border-[#B8860B] placeholder-[#8C6D27]/60'
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-[#D8CCA8]' : 'text-[#1C1810]'}`}>
                    {t.contact.emailLabel}
                  </label>
                  <div className="relative">
                    <Mail className={`w-3.5 h-3.5 absolute left-3 top-3 ${isDark ? 'text-[#D8CCA8]' : 'text-[#8C6D27]'}`} />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3.5 py-2 border rounded text-xs outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#241E0F] border-[#4A3B18] text-white focus:border-[#C5A059] placeholder-[#998A68]' 
                          : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#1C1810] focus:border-[#B8860B] placeholder-[#8C6D27]/60'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-[#D8CCA8]' : 'text-[#1C1810]'}`}>
                    {t.contact.orgLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={isTa ? 'நிறுவனத்தின் பெயர் அல்லது தனிநபர்' : 'Company name or Individual'}
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className={`w-full px-3.5 py-2 border rounded text-xs outline-none transition-colors ${
                      isDark 
                        ? 'bg-[#241E0F] border-[#4A3B18] text-white focus:border-[#C5A059] placeholder-[#998A68]' 
                        : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#1C1810] focus:border-[#B8860B] placeholder-[#8C6D27]/60'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-[#D8CCA8]' : 'text-[#1C1810]'}`}>
                  {t.contact.purposeLabel}
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as ContactFormInput['inquiryType'] })}
                  className={`w-full px-3.5 py-2 border rounded text-xs outline-none transition-colors ${
                    isDark 
                      ? 'bg-[#241E0F] border-[#4A3B18] text-white focus:border-[#C5A059]' 
                      : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#1C1810] focus:border-[#B8860B]'
                  }`}
                >
                  <option value="manufacturing">{isTa ? 'இயந்திர உற்பத்தி விசாரணை (ஏகன் அநேகன்)' : 'Machinery Manufacturing Inquiry (Aegan Anegan)'}</option>
                  <option value="dealership">{isTa ? 'டீலர்ஷிப் / விநியோகஸ்தர் கூட்டாண்மை' : 'Dealership / Distributor Partnership'}</option>
                  <option value="collaboration">{isTa ? 'செயல்பாட்டு ஒத்துழைப்பு' : 'Operational Collaboration'}</option>
                  <option value="partnership">{isTa ? 'மூலோபாய கூட்டாண்மை / நிர்வாகம்' : 'Strategic Partnership / Governance'}</option>
                  <option value="future_opportunities">{isTa ? 'எதிர்கால சுற்றுச்சூழல் வாய்ப்புகள்' : 'Future Ecosystem Opportunities'}</option>
                  <option value="general">{isTa ? 'பொதுவான தகவல் கோரிக்கை' : 'General Information Request'}</option>
                </select>
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-[#D8CCA8]' : 'text-[#1C1810]'}`}>
                  {t.contact.messageLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={isTa ? 'இயந்திர தேவைகள், கொள்ளளவு, இடம் அல்லது ஒத்துழைப்பு எல்லை போன்றவற்றை குறிப்பிடவும்...' : 'Specify machine requirements, capacity needed, dealership location, or collaboration scope...'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-3.5 py-2 border rounded text-xs outline-none transition-colors ${
                    isDark 
                      ? 'bg-[#241E0F] border-[#4A3B18] text-white focus:border-[#C5A059] placeholder-[#998A68]' 
                      : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#1C1810] focus:border-[#B8860B] placeholder-[#8C6D27]/60'
                  }`}
                ></textarea>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="rounded border-[#4A3B18] text-[#D4AF37] focus:ring-[#D4AF37]"
                />
                <label htmlFor="agreeToTerms" className={`text-[11px] ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                  {isTa ? 'இந்த விசாரணை தொடர்பாக என்னைத் தொடர்பு கொள்ள ஒப்புக்கொள்கிறேன்.' : 'I agree to be contacted regarding this operational inquiry.'}
                </label>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className={`px-4 py-2 border rounded text-xs transition-colors ${
                    isDark ? 'border-[#4A3B18] text-[#D8CCA8] hover:text-white' : 'border-[#E2D5B8] text-[#61502C] hover:text-black'
                  }`}
                >
                  {isTa ? 'ரத்துசெய்' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-5 py-2 font-bold text-xs rounded transition-colors flex items-center gap-2 ${
                    isDark ? 'bg-[#C5A059] hover:bg-[#D4AF37] text-[#18140B]' : 'bg-[#B8860B] hover:bg-[#A37409] text-white'
                  }`}
                >
                  {loading ? t.contact.submitting : t.contact.submit}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
