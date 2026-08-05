import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Menu, X, Cpu, ExternalLink, ChevronRight, Globe, Sun, Moon, Palette } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenEosGateway: () => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenEosGateway,
  onOpenInquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();

  const navItems: { route: PageRoute; label: string }[] = [
    { route: 'home', label: t.nav.home },
    { route: 'about', label: t.nav.about },
    { route: 'ecosystem', label: t.nav.ecosystem },
    { route: 'products', label: t.nav.products },
    { route: 'infrastructure', label: t.nav.infrastructure },
    { route: 'gallery', label: t.nav.gallery },
    { route: 'faq', label: t.nav.faq },
    { route: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 backdrop-blur-md border-b ${
      isDark 
        ? 'bg-[#18140B]/95 border-[#4A3B18]' 
        : 'bg-[#FAF7F2]/95 border-[#E2D5B8]'
    }`}>
      {/* Top Banner Notice */}
      <div className={`py-1.5 px-4 text-center text-[11px] border-b transition-colors duration-300 ${
        isDark 
          ? 'bg-[#100D06] border-[#362A10] text-[#D8CCA8]' 
          : 'bg-[#F2EAE0] border-[#E8DEC8] text-[#61502C]'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="font-semibold">{t.nav.topNotice}</span>
            <span className="hidden sm:inline opacity-40">|</span>
            <span className="hidden sm:inline font-medium">{t.nav.manufacturingNotice}</span>
            <a 
              href="https://www.aeganai.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden sm:inline text-[#D4AF37] hover:underline font-bold inline-flex items-center gap-0.5"
            >
              www.aeganai.in <ExternalLink className="w-2.5 h-2.5 inline" />
            </a>
          </div>

          {/* Top Toggles: Language + Color Mode */}
          <div className="flex items-center gap-2">
            {/* Color Mode Switcher */}
            <button
              onClick={toggleTheme}
              className={`px-2 py-0.5 border text-[10px] font-bold rounded flex items-center gap-1 transition-all ${
                isDark 
                  ? 'bg-[#362A10] hover:bg-[#4A3B18] border-[#C5A059]/40 text-[#D4AF37]' 
                  : 'bg-[#FFFFFF] hover:bg-[#F2EAE0] border-[#8C6D27]/40 text-[#B8860B]'
              }`}
              title="Toggle Color Theme (Cherry Brown / Cream Light)"
            >
              {isDark ? (
                <>
                  <Sun className="w-3 h-3 text-[#D4AF37]" />
                  <span className="hidden xs:inline">Cream Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3 h-3 text-[#B8860B]" />
                  <span className="hidden xs:inline">Cherry Dark Mode</span>
                </>
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`px-2.5 py-0.5 border text-[10px] font-bold uppercase rounded flex items-center gap-1.5 transition-all ${
                isDark 
                  ? 'bg-[#362A10] hover:bg-[#4A3B18] border-[#C5A059]/40 text-[#D4AF37]' 
                  : 'bg-[#FFFFFF] hover:bg-[#F2EAE0] border-[#8C6D27]/40 text-[#1C1810]'
              }`}
              title="Switch Language / மொழியை மாற்றுக"
            >
              <Globe className="w-3 h-3 text-[#C5A059]" />
              <span>{language === 'en' ? 'English | தமிழ்' : 'தமிழ் | English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
          aria-label="AEGAM Home"
        >
          <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shadow-inner transition-all ${
            isDark 
              ? 'bg-gradient-to-br from-[#362A10] to-[#18140B] border-[#C5A059]/40 group-hover:border-[#C5A059]' 
              : 'bg-gradient-to-br from-[#FFFFFF] to-[#F2EAE0] border-[#8C6D27]/40 group-hover:border-[#B8860B]'
          }`}>
            <span className={`font-bold text-lg tracking-wider ${isDark ? 'text-[#D4AF37]' : 'text-[#B8860B]'}`}>ஏ</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span 
                className={`font-extrabold text-xl tracking-wider font-sans transition-colors ${
                  isDark ? 'group-hover:text-[#D4AF37]' : 'group-hover:text-[#B8860B]'
                }`}
                style={{ color: '#e8c31c' }}
              >
                AEGAM
              </span>
              <span className={`text-xs font-semibold tracking-wide border-l pl-2 hidden xs:inline ${
                isDark ? 'text-[#C5A059] border-[#4A3B18]' : 'text-[#B8860B] border-[#E2D5B8]'
              }`}>
                ஏகம்
              </span>
            </div>
            <p className={`text-[10px] tracking-widest uppercase font-mono ${
              isDark ? 'text-[#D8CCA8]' : 'text-[#786235]'
            }`}>
              Unified Industrial Ecosystem
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded transition-all ${
                  isActive
                    ? isDark 
                      ? 'text-[#D4AF37] bg-[#362A10] border border-[#C5A059]/50 shadow-sm' 
                      : 'text-[#B8860B] bg-[#FFFFFF] border border-[#B8860B]/30 shadow-sm'
                    : isDark
                      ? 'text-[#FAF3EB] hover:text-white hover:bg-[#241E0F]'
                      : 'text-[#423414] hover:text-[#1C1810] hover:bg-[#F2EAE0]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Color Mode Switch Icon */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-md border transition-all ${
              isDark 
                ? 'bg-[#241E0F] border-[#4A3B18] text-[#D4AF37] hover:bg-[#362A10]' 
                : 'bg-[#FFFFFF] border-[#E2D5B8] text-[#B8860B] hover:bg-[#F2EAE0]'
            }`}
            title="Toggle Color Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenEosGateway}
            className={`px-3 py-2 text-xs font-semibold rounded-md border transition-all flex items-center gap-1.5 ${
              isDark 
                ? 'text-[#FAF3EB] hover:text-white bg-[#241E0F] border-[#4A3B18] hover:border-[#C5A059]/40' 
                : 'text-[#1C1810] hover:text-[#B8860B] bg-[#FFFFFF] border-[#E2D5B8] hover:border-[#B8860B]'
            }`}
            title="Preview Ecosystem Operating System & Gateway"
          >
            <Cpu className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.nav.eosGateway}</span>
          </button>

          <button
            onClick={onOpenInquiry}
            className={`px-4 py-2 text-xs font-bold rounded-md transition-all shadow-md flex items-center gap-1 ${
              isDark 
                ? 'text-[#18140B] bg-[#C5A059] hover:bg-[#D4AF37]' 
                : 'text-white bg-[#B8860B] hover:bg-[#A37409]'
            }`}
          >
            <span>{t.nav.inquiry}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 border rounded-md ${
              isDark 
                ? 'bg-[#241E0F] border-[#4A3B18] text-[#D4AF37]' 
                : 'bg-[#FFFFFF] border-[#E2D5B8] text-[#B8860B]'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenEosGateway}
            className={`p-2 border rounded-md sm:hidden ${
              isDark ? 'bg-[#241E0F] border-[#4A3B18] text-[#C5A059]' : 'bg-[#FFFFFF] border-[#E2D5B8] text-[#B8860B]'
            }`}
            aria-label="EOS Gateway"
          >
            <Cpu className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md focus:outline-none ${
              isDark ? 'text-[#FAF3EB] hover:bg-[#241E0F]' : 'text-[#1C1810] hover:bg-[#F2EAE0]'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-2 pb-6 space-y-2 animate-fadeIn ${
          isDark ? 'bg-[#100D06] border-[#4A3B18]' : 'bg-[#FAF7F2] border-[#E2D5B8]'
        }`}>
          {/* Language & Theme Controls in Mobile Menu */}
          <div className="flex items-center justify-between pb-3 border-b border-opacity-30 border-gray-500">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1.5 text-xs font-bold rounded flex items-center gap-2 border ${
                isDark ? 'bg-[#241E0F] border-[#4A3B18] text-[#D4AF37]' : 'bg-[#FFFFFF] border-[#E2D5B8] text-[#B8860B]'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'English | தமிழ்' : 'தமிழ் | English'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className={`px-3 py-1.5 text-xs font-bold rounded flex items-center gap-2 border ${
                isDark ? 'bg-[#241E0F] border-[#4A3B18] text-[#D4AF37]' : 'bg-[#FFFFFF] border-[#E2D5B8] text-[#B8860B]'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>{isDark ? 'Cream Light' : 'Cherry Dark'}</span>
            </button>
          </div>

          {navItems.map((item) => {
            const isActive = currentPage === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                  isActive
                    ? isDark
                      ? 'text-[#D4AF37] bg-[#362A10] border border-[#C5A059]/40 font-semibold'
                      : 'text-[#B8860B] bg-[#FFFFFF] border border-[#B8860B]/30 font-semibold'
                    : isDark
                      ? 'text-[#FAF3EB] hover:bg-[#241E0F]'
                      : 'text-[#1C1810] hover:bg-[#F2EAE0]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>}
              </button>
            );
          })}

          <div className="pt-4 border-t border-opacity-30 border-gray-500 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEosGateway();
              }}
              className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 border ${
                isDark ? 'text-[#FAF3EB] bg-[#241E0F] border-[#4A3B18]' : 'text-[#1C1810] bg-[#FFFFFF] border-[#E2D5B8]'
              }`}
            >
              <Cpu className="w-4 h-4 text-[#C5A059]" />
              <span>{t.nav.eosGateway}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className={`w-full py-2.5 px-4 text-xs font-bold rounded-lg text-center ${
                isDark ? 'text-[#18140B] bg-[#C5A059]' : 'text-white bg-[#B8860B]'
              }`}
            >
              {t.nav.inquiry}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
