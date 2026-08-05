import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/gallery';
import { GalleryItem } from '../types';
import { Camera, X, Filter, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const GalleryPage: React.FC = () => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const isTa = language === 'ta';

  const categories = ['All', 'Machinery', 'Workshop', 'Campus', 'Fabrication', 'Operations', 'Engineering'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className={`min-h-screen py-12 lg:py-20 transition-colors duration-300 ${
      isDark ? 'bg-[#18140B] text-[#FAF3EB]' : 'bg-[#FAF7F2] text-[#1C1810]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 border rounded-full text-xs font-bold uppercase tracking-wider ${
            isDark 
              ? 'bg-[#241E0F] border-[#4A3B18] text-[#D4AF37]' 
              : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#B8860B]'
          }`}>
            <Camera className="w-3.5 h-3.5" />
            <span>{t.gallery.eyebrow}</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#1C1810]'
          }`}>
            {t.gallery.title}
          </h1>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider shrink-0 flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" /> {t.gallery.categoryLabel}
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors shrink-0 ${
                selectedCategory === cat
                  ? isDark ? 'bg-[#241E0F] text-[#D4AF37] border border-[#4A3B18]' : 'bg-[#B8860B] text-white shadow'
                  : isDark ? 'bg-[#100D06] text-[#D8CCA8] border border-[#4A3B18]' : 'bg-[#F2EAE0] text-[#61502C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const title = isTa && item.taTitle ? item.taTitle : item.title;
            const caption = isTa && item.taCaption ? item.taCaption : item.caption;

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`border rounded-xl overflow-hidden shadow-sm transition-all cursor-pointer group flex flex-col justify-between ${
                  isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-white border-[#E2D5B8]'
                }`}
              >
                <div className="relative h-64 overflow-hidden bg-[#100D06]">
                  <img
                    src={item.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 bg-[#100D06]/90 rounded-full text-[#D4AF37] border border-[#D4AF37]">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#100D06]/80 text-[#D4AF37] text-[10px] font-mono rounded backdrop-blur border border-[#4A3B18]">
                    {item.category}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className={`text-sm font-bold transition-colors ${
                    isDark ? 'text-white group-hover:text-[#D4AF37]' : 'text-[#1C1810] group-hover:text-[#B8860B]'
                  }`}>
                    {title}
                  </h3>
                  <p className={`text-xs mt-1 line-clamp-2 ${isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'}`}>
                    {caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity">
            <div 
              className={`relative w-full max-w-4xl border rounded-2xl overflow-hidden shadow-2xl animate-fadeIn ${
                isDark 
                  ? 'bg-[#100D06] text-[#FAF3EB] border-[#4A3B18]' 
                  : 'bg-[#FFFFFF] text-[#1C1810] border-[#E2D5B8]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`flex items-center justify-between px-6 py-4 border-b ${
                isDark ? 'bg-[#241E0F] border-[#4A3B18]' : 'bg-[#F2EAE0] border-[#E2D5B8]'
              }`}>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#D4AF37] tracking-wider block">
                    {activeItem.category}
                  </span>
                  <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-[#1C1810]'}`}>
                    {isTa && activeItem.taTitle ? activeItem.taTitle : activeItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className={`p-1.5 rounded-lg transition-colors ${
                    isDark ? 'text-[#D8CCA8] hover:text-white hover:bg-[#362A10]' : 'text-[#61502C] hover:text-black'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className={`p-4 sm:p-6 ${isDark ? 'bg-[#100D06]' : 'bg-[#FAF7F2]'}`}>
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full max-h-[60vh] object-contain rounded-lg mx-auto"
                  referrerPolicy="no-referrer"
                />
                <p className={`text-xs sm:text-sm mt-4 text-center max-w-2xl mx-auto leading-relaxed ${
                  isDark ? 'text-[#D8CCA8]' : 'text-[#61502C]'
                }`}>
                  {isTa && activeItem.taCaption ? activeItem.taCaption : activeItem.caption}
                </p>
              </div>

              <div className={`px-6 py-3 border-t flex items-center justify-between text-xs ${
                isDark ? 'bg-[#241E0F] border-[#4A3B18] text-[#D8CCA8]' : 'bg-[#F2EAE0] border-[#E2D5B8] text-[#61502C]'
              }`}>
                <span>AEGAM Industrial Operations</span>
                <button
                  onClick={() => setActiveItem(null)}
                  className={`px-4 py-1.5 font-bold text-xs rounded transition-colors ${
                    isDark ? 'bg-[#C5A059] text-[#18140B] hover:bg-[#D4AF37]' : 'bg-[#B8860B] text-white hover:bg-[#A37409]'
                  }`}
                >
                  {t.gallery.closeViewer}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
