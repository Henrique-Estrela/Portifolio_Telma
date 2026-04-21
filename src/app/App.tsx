import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import SiteFooter from './components/SiteFooter';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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

  const whatsappNumber = "5511987654321";
  const whatsappMessage = "Olá Telma! Gostaria de agendar uma sessão de terapia.";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#FAF9F6] via-white to-[#F5F3EE]">
      <SiteHeader
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((value: boolean) => !value)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
        onOpenWhatsApp={openWhatsApp}
      />
      <HeroSection onOpenWhatsApp={openWhatsApp} />
      <BenefitsSection />
      <ServicesSection onOpenWhatsApp={openWhatsApp} />
      <ProcessSection onOpenWhatsApp={openWhatsApp} />
      <AboutSection onOpenWhatsApp={openWhatsApp} />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection openFaq={openFaq} onToggleFaq={setOpenFaq} onOpenWhatsApp={openWhatsApp} />
      <FinalCtaSection onOpenWhatsApp={openWhatsApp} />
      <SiteFooter whatsappNumber={whatsappNumber} />
      <FloatingButtons
        showBackToTop={showBackToTop}
        onScrollToTop={scrollToTop}
        onOpenWhatsApp={openWhatsApp}
      />
    </div>
  );
}
