import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EosGatewayModal } from './components/EosGatewayModal';
import { InquiryModal } from './components/InquiryModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { ProductsPage } from './pages/ProductsPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { GalleryPage } from './pages/GalleryPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [eosGatewayOpen, setEosGatewayOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryProductName, setInquiryProductName] = useState<string | undefined>(undefined);
  const { isDark } = useTheme();

  // Scroll to top on page navigation
  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (productName?: string) => {
    setInquiryProductName(productName);
    setInquiryModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans antialiased flex flex-col selection:bg-[#C5A059] selection:text-[#1A1816] transition-colors duration-300 ${
      isDark ? 'bg-[#1F0B0E] text-[#FAF3EB]' : 'bg-[#FAF7F2] text-[#2B1015]'
    }`}>
      {/* Header Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEosGateway={() => setEosGatewayOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
            onOpenEosGateway={() => setEosGatewayOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentPage === 'ecosystem' && (
          <EcosystemPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
            onOpenEosGateway={() => setEosGatewayOpen(true)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentPage === 'infrastructure' && (
          <InfrastructurePage
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage />
        )}

        {currentPage === 'faq' && (
          <FaqPage
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenEosGateway={() => setEosGatewayOpen(true)}
      />

      {/* EOS Gateway Modal */}
      <EosGatewayModal
        isOpen={eosGatewayOpen}
        onClose={() => setEosGatewayOpen(false)}
      />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        productName={inquiryProductName}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

