import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ExchangePolicy from './components/ExchangePolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Contact from './components/Contact';

type Page = 'home' | 'about' | 'products' | 'exchange-policy' | 'privacy-policy' | 'terms-of-use' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return (
          <div className="min-h-screen">
            <About />
          </div>
        );
      case 'products':
        return (
          <div className="min-h-screen">
            <div className="pt-24 pb-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif text-olive-600 text-center mb-16">
                  Nossos Produtos
                </h1>
                <FeaturedProducts showAll={true} />
              </div>
            </div>
          </div>
        );
      case 'exchange-policy':
        return (
          <div className="min-h-screen">
            <ExchangePolicy />
          </div>
        );
      case 'privacy-policy':
        return (
          <div className="min-h-screen">
            <PrivacyPolicy />
          </div>
        );
      case 'terms-of-use':
        return (
          <div className="min-h-screen">
            <TermsOfUse />
          </div>
        );
      case 'contact':
        return (
          <div className="min-h-screen">
            <Contact />
          </div>
        );
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <FeaturedProducts />
          </>
        );
    }
  };

  return (
    <div className="bg-sand-50 min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {renderContent()}
      
      {currentPage === 'home' && <Newsletter />}
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}

export default App;