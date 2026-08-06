import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EosGatewayModal } from './components/EosGatewayModal';
import { InquiryModal } from './components/InquiryModal';
import { SEO } from './components/SEO';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { ProductsPage } from './pages/ProductsPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { GalleryPage } from './pages/GalleryPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Route path mapper for static URLs & Cloudflare Pages SPA navigation
const ROUTE_TO_PATH: Record<PageRoute, string> = {
  home: '/',
  about: '/about',
  ecosystem: '/ecosystem',
  products: '/products',
  infrastructure: '/infrastructure',
  gallery: '/gallery',
  faq: '/faq',
  contact: '/contact',
  'not-found': '/404',
};

const PATH_TO_ROUTE: Record<string, PageRoute> = {
  '/': 'home',
  '': 'home',
  '/about': 'about',
  '/ecosystem': 'ecosystem',
  '/products': 'products',
  '/infrastructure': 'infrastructure',
  '/gallery': 'gallery',
  '/faq': 'faq',
  '/contact': 'contact',
  '/404': 'not-found',
};

function getRouteFromPath(pathname: string): PageRoute {
  const normalized = pathname.replace(/\/$/, '') || '/';
  return PATH_TO_ROUTE[normalized] || 'not-found';
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      return getRouteFromPath(window.location.pathname);
    }
    return 'home';
  });

  const [eosGatewayOpen, setEosGatewayOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryProductName, setInquiryProductName] = useState<string | undefined>(undefined);
  const { isDark } = useTheme();

  // Sync state with browser location & popstate navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getRouteFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle navigate with browser pushState
  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    const targetPath = ROUTE_TO_PATH[page] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (productName?: string) => {
    setInquiryProductName(productName);
    setInquiryModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans antialiased flex flex-col selection:bg-[#C5A059] selection:text-[#1A1816] transition-colors duration-300 ${
      isDark ? 'bg-[#18140B] text-[#FAF3EB]' : 'bg-[#FAF7F2] text-[#1C1810]'
    }`}>
      {/* Dynamic Metadata & Structured Data SEO Component */}
      <SEO page={currentPage} />

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
            onOpenInquiry={() => handleOpenInquiry()}
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

        {currentPage === 'not-found' && (
          <NotFoundPage onNavigate={handleNavigate} />
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

