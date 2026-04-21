import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import logoCompleta from '../../imports/logocompleta.png';

type SiteHeaderProps = {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
  onOpenWhatsApp: () => void;
};

export default function SiteHeader({
  mobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
  onOpenWhatsApp,
}: SiteHeaderProps) {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-sm z-50 border-b border-[#E8DCC4]/20"
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center" aria-label="Inicio - Telma Lacerda">
            <img
              src={logoCompleta}
              alt="Logo Telma Lacerda"
              className="h-20 sm:h-20 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm text-gray-700 hover:text-[#A88968] transition-colors font-medium">Servicos</a>
            <a href="#sobre" className="text-sm text-gray-700 hover:text-[#A88968] transition-colors font-medium">Sobre</a>
            <a href="#depoimentos" className="text-sm text-gray-700 hover:text-[#A88968] transition-colors font-medium">Depoimentos</a>
            <button
              onClick={onOpenWhatsApp}
              className="px-6 py-2.5 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Agende sua sessao
            </button>
          </div>

          <button onClick={onToggleMobileMenu} className="md:hidden p-2 text-gray-700">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#servicos" onClick={onCloseMobileMenu} className="block text-gray-700 py-2">Servicos</a>
            <a href="#sobre" onClick={onCloseMobileMenu} className="block text-gray-700 py-2">Sobre</a>
            <a href="#depoimentos" onClick={onCloseMobileMenu} className="block text-gray-700 py-2">Depoimentos</a>
            <button
              onClick={onOpenWhatsApp}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full font-semibold shadow-lg"
            >
              Agende sua sessao
            </button>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
