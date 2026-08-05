import React, { useState } from 'react';
import { PageRoute, ContactFormInput } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ExternalLink, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();

  const isTa = language === 'ta';

  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'manufacturing',
    message: '',
    agreeToTerms: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className={`min-h-screen py-12 lg:py-20 transition-colors duration-300 ${
      isDark ? 'bg-[#1F0B0E] text-[#FAF3EB]' : 'bg-[#FAF7F2] text-[#2B1015]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 border rounded-full text-xs font-bold uppercase tracking-wider ${
            isDark 
              ? 'bg-[#2E1218] border-[#4D1E27] text-[#D4AF37]' 
              : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#8C2A38]'
          }`}>
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contact.eyebrow}</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#2B1015]'
          }`}>
            {t.contact.title}
          </h1>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts & Placeholders (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`border rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl ${
              isDark 
                ? 'bg-[#150709] text-[#FAF3EB] border-[#4D1E27]' 
                : 'bg-[#2B1015] text-white border-[#4A1E24]'
            }`}>
              <div>
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
                  AEGAM Headquarters
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {isTa ? 'நேரடி செயல்பாட்டு தொடர்புகள்' : 'Direct Operational Contacts'}
                </h3>
                <p className="text-xs text-[#D1B8BC] mt-1">
                  {isTa ? 'ஏகம் ஒருங்கிணைந்த தொழில்துறை & தொழில்முனைவு சூழல்' : 'AEGAM Unified Industrial & Venture Ecosystem'}
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#D1B8BC]">
                
                {/* Phone */}
                <div className={`flex items-start gap-3 p-3 border rounded-xl ${
                  isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#1F0B0E] border-[#4A1E24]'
                }`}>
                  <div className="p-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#D1B8BC] block">{t.contact.phone}</span>
                    <a href="tel:+919876543210" className="text-sm font-bold text-white hover:text-[#D4AF37] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className={`flex items-start gap-3 p-3 border rounded-xl ${
                  isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#1F0B0E] border-[#4A1E24]'
                }`}>
                  <div className="p-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#D1B8BC] block">{t.contact.whatsapp}</span>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#D4AF37] hover:underline inline-flex items-center gap-1"
                    >
                      {isTa ? 'வாட்ஸ்அப் வழியே தொடர்பு கொள்ளுங்கள் →' : 'Connect on WhatsApp →'}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className={`flex items-start gap-3 p-3 border rounded-xl ${
                  isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#1F0B0E] border-[#4A1E24]'
                }`}>
                  <div className="p-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#D1B8BC] block">{t.contact.email}</span>
                    <a href="mailto:contact@aegam.in" className="text-xs font-bold text-white hover:text-[#D4AF37] transition-colors">
                      contact@aegam.in
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className={`flex items-start gap-3 p-3 border rounded-xl ${
                  isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#1F0B0E] border-[#4A1E24]'
                }`}>
                  <div className="p-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#D1B8BC] block">{t.contact.address}</span>
                    <p className="text-xs font-semibold text-white">
                      {isTa ? 'ஏகம் தொழில்துறை வளாகம், தமிழ்நாடு, இந்தியா' : 'AEGAM Industrial Campus, Tamil Nadu, India'}
                    </p>
                  </div>
                </div>

                {/* Manufacturing link */}
                <div className={`flex items-start gap-3 p-3 border rounded-xl ${
                  isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-[#1F0B0E] border-[#4A1E24]'
                }`}>
                  <div className="p-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#D1B8BC] block">{isTa ? 'உற்பத்தி போர்டல்' : 'Manufacturing Portal'}</span>
                    <a href="https://www.aeganai.in" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#D4AF37] hover:underline inline-flex items-center gap-1">
                      www.aeganai.in <ExternalLink className="w-3 h-3 inline" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Links Placeholder */}
            <div className={`border rounded-2xl p-6 space-y-3 ${
              isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <h4 className={`text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-[#2B1015]'
              }`}>
                {isTa ? 'செய்திகள் & சமூக தொடர்பு' : 'Ecosystem Updates & Social Communication'}
              </h4>
              <p className={`text-xs ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                {isTa ? 'ஏகம் டிரஸ்ட் மற்றும் அங்கீகரிக்கப்பட்ட பிரிவுகளின் அதிகாரப்பூர்வ அறிவிப்புகள்.' : 'Official announcement channels for AEGAM Trust and participating industrial entities.'}
              </p>
              <div className="flex flex-wrap gap-2 text-xs pt-1">
                <span className={`px-3 py-1 border font-semibold rounded ${
                  isDark ? 'bg-[#150709] border-[#4D1E27] text-[#D4AF37]' : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#8C2A38]'
                }`}>LinkedIn</span>
                <span className={`px-3 py-1 border font-semibold rounded ${
                  isDark ? 'bg-[#150709] border-[#4D1E27] text-[#D4AF37]' : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#8C2A38]'
                }`}>{isTa ? 'யூடியூப் சேனல்' : 'YouTube Channel'}</span>
                <span className={`px-3 py-1 border font-semibold rounded ${
                  isDark ? 'bg-[#150709] border-[#4D1E27] text-[#D4AF37]' : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#8C2A38]'
                }`}>{isTa ? 'செய்திகள்' : 'Industry News'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form & Interactive Map (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className={`border rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 ${
              isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{t.contact.title}</h3>
                <p className={`text-xs mt-1 ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                  {isTa ? 'உங்கள் விவரங்களை நிரப்பவும். உங்கள் கோரிக்கை நேரடியாக ஒருங்கிணைப்பாளருக்கு அனுப்பப்படும்.' : 'Fill in your details below. Your request will be routed directly to the designated entity coordinator.'}
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{t.contact.successTitle}</h4>
                  <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={`px-6 py-2.5 font-bold text-xs rounded-lg transition-colors ${
                      isDark ? 'bg-[#C5A059] text-[#1F0B0E] hover:bg-[#D4AF37]' : 'bg-[#8C2A38] text-white hover:bg-[#72202C]'
                    }`}
                  >
                    {t.contact.submitAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-[#D1B8BC]' : 'text-[#2B1015]'}`}>
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isTa ? 'எ.கா. க. சுந்தரம்' : 'e.g. R. K. Sundaram'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border rounded-lg text-xs outline-none transition-colors ${
                          isDark 
                            ? 'bg-[#150709] border-[#4D1E27] text-white focus:border-[#C5A059] placeholder-[#8C6B71]' 
                            : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#2B1015] focus:border-[#8C2A38] placeholder-[#8C6D27]/60'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-[#D1B8BC]' : 'text-[#2B1015]'}`}>
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border rounded-lg text-xs outline-none transition-colors ${
                          isDark 
                            ? 'bg-[#150709] border-[#4D1E27] text-white focus:border-[#C5A059] placeholder-[#8C6B71]' 
                            : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#2B1015] focus:border-[#8C2A38] placeholder-[#8C6D27]/60'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-[#D1B8BC]' : 'text-[#2B1015]'}`}>
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border rounded-lg text-xs outline-none transition-colors ${
                          isDark 
                            ? 'bg-[#150709] border-[#4D1E27] text-white focus:border-[#C5A059] placeholder-[#8C6B71]' 
                            : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#2B1015] focus:border-[#8C2A38] placeholder-[#8C6D27]/60'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-[#D1B8BC]' : 'text-[#2B1015]'}`}>
                        {t.contact.orgLabel}
                      </label>
                      <input
                        type="text"
                        placeholder={isTa ? 'நிறுவனத்தின் பெயர் அல்லது தனிநபர்' : 'Company name or Individual'}
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border rounded-lg text-xs outline-none transition-colors ${
                          isDark 
                            ? 'bg-[#150709] border-[#4D1E27] text-white focus:border-[#C5A059] placeholder-[#8C6B71]' 
                            : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#2B1015] focus:border-[#8C2A38] placeholder-[#8C6D27]/60'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-[#D1B8BC]' : 'text-[#2B1015]'}`}>
                      {t.contact.purposeLabel}
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as ContactFormInput['inquiryType'] })}
                      className={`w-full px-3.5 py-2.5 border rounded-lg text-xs outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#150709] border-[#4D1E27] text-white focus:border-[#C5A059]' 
                          : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#2B1015] focus:border-[#8C2A38]'
                      }`}
                    >
                      <option value="manufacturing">{isTa ? 'ரோட்டரி எண்ணெய் இயந்திரங்கள் & தயாரிப்பு விசாரணை' : 'Rotary Oil Machinery & Fabrication Inquiry'}</option>
                      <option value="dealership">{isTa ? 'டீலர்ஷிப் / விநியோக கூட்டாண்மை விண்ணப்பம்' : 'Dealership / Distribution Partnership Application'}</option>
                      <option value="collaboration">{isTa ? 'செயல்பாட்டு ஒத்துழைப்பு' : 'Operational Collaboration'}</option>
                      <option value="partnership">{isTa ? 'மூலோபாய கூட்டாண்மை / ஏகம் டிரஸ்ட் நிர்வாகம்' : 'Strategic Partnership / AEGAM Trust Governance'}</option>
                      <option value="future_opportunities">{isTa ? 'எதிர்கால சுற்றுச்சூழல் வாய்ப்புகள்' : 'Future Ecosystem Opportunities'}</option>
                      <option value="general">{isTa ? 'பொதுவான தகவல் கோரிக்கை' : 'General Information Request'}</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-[#D1B8BC]' : 'text-[#2B1015]'}`}>
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={isTa ? 'கொள்ளளவு, இடம், இயந்திர தேவைகள் அல்லது கூட்டாண்மை விவரங்களை குறிப்பிடவும்...' : 'Please specify capacity needed, location, machinery requirements, or partnership details...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 border rounded-lg text-xs outline-none transition-colors ${
                        isDark 
                          ? 'bg-[#150709] border-[#4D1E27] text-white focus:border-[#C5A059] placeholder-[#8C6B71]' 
                          : 'bg-[#FAF7F2] border-[#E2D5B8] text-[#2B1015] focus:border-[#8C2A38] placeholder-[#8C6D27]/60'
                      }`}
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className={`text-[11px] ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                      {isTa ? 'ஏகம் தனியுரிமை மற்றும் ரகசியத்தன்மையை மதிக்கிறது.' : 'AEGAM respects privacy and operational confidentiality.'}
                    </span>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`px-6 py-3 font-bold text-xs rounded-lg transition-colors flex items-center gap-2 shadow ${
                        isDark ? 'bg-[#C5A059] text-[#1F0B0E] hover:bg-[#D4AF37]' : 'bg-[#8C2A38] text-white hover:bg-[#72202C]'
                      }`}
                    >
                      {loading ? t.contact.submitting : t.contact.submit}
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Google Maps Visual Interactive Placeholder */}
            <div className={`border rounded-2xl p-6 shadow-sm space-y-4 ${
              isDark ? 'bg-[#2E1218] border-[#4D1E27]' : 'bg-white border-[#E2D5B8]'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#2B1015]'}`}>{t.contact.mapTitle}</h4>
                  <p className={`text-xs ${isDark ? 'text-[#D1B8BC]' : 'text-[#5C2B32]'}`}>
                    {isTa ? 'ஏகம் தொழில்துறை வளாகம், தமிழ்நாடு' : 'AEGAM Industrial Campus, Tamil Nadu'}
                  </p>
                </div>
                <span className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded border ${
                  isDark ? 'bg-[#150709] text-[#D4AF37] border-[#4D1E27]' : 'bg-[#F2EAE0] text-[#8C2A38] border-[#E2D5B8]'
                }`}>
                  {isTa ? 'ஜிபிஎஸ் ஒருங்கிணைப்புகள் சரிபார்க்கப்பட்டன' : 'GPS Coordinates Verified'}
                </span>
              </div>

              <div className={`relative h-64 rounded-xl overflow-hidden border group ${
                isDark ? 'bg-[#150709] border-[#4D1E27]' : 'bg-[#2B1015] border-[#E2D5B8]'
              }`}>
                <img
                  src="/src/assets/images/aegam_campus_facility_1785940130717.jpg"
                  alt="AEGAM Campus Map Location"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150709] via-black/30 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#1F0B0E] flex items-center justify-center shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white bg-[#150709]/90 px-3 py-1 rounded border border-[#4D1E27]">
                    {isTa ? 'ஏகம் தொழில்துறை வளாகம் & நிர்வாக மையம்' : 'AEGAM Industrial Campus & Governance Center'}
                  </span>
                  <span className="text-[11px] text-[#D1B8BC] max-w-sm">
                    {isTa ? 'தமிழ்நாடு, இந்தியா • மாநில நெடுஞ்சாலை அணுகல்' : 'Tamil Nadu, India • Direct access via State Highway'}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
