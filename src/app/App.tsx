import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = "557591453325";
  const whatsappMessage = "Ola Telma Lacerda! Gostaria de agendar uma sessao de terapia.";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f3f3f3]">
      <SiteHeader
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((value: boolean) => !value)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
        onOpenWhatsApp={openWhatsApp}
      />
      <HeroSection onOpenWhatsApp={openWhatsApp} />
      <ServicesSection onOpenWhatsApp={openWhatsApp} />
      <AboutSection onOpenWhatsApp={openWhatsApp} />
      <ProcessSection onOpenWhatsApp={openWhatsApp} />
      <ContactSection onOpenWhatsApp={openWhatsApp} />
      <SiteFooter whatsappNumber={whatsappNumber} />
      <FloatingButtons
        showBackToTop={showBackToTop}
        onScrollToTop={scrollToTop}
        onOpenWhatsApp={openWhatsApp}
      />
    </div>
  );
}
