import { Instagram, Menu, MessageCircle, X } from 'lucide-react';
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

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Atuacao', href: '#servicos' },
    { label: 'Sobre mim', href: '#sobre' },
  ];

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-[#efdfd4]"
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center" aria-label="Inicio - Telma Lacerda">
            <img
              src={logoCompleta}
              alt="Logo Telma Lacerda"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-[#655951] font-semibold">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#ef8e87] transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://instagram.com/telmalacerdapsi"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-[#f1c8c8] text-[#ef8e87] flex items-center justify-center hover:bg-[#fff0ef] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenWhatsApp}
              className="w-8 h-8 rounded-full border border-[#f1c8c8] text-[#ef8e87] flex items-center justify-center hover:bg-[#fff0ef] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="px-6 py-2.5 bg-gradient-to-r from-[#f8a386] to-[#ef7f87] text-white rounded-full text-sm font-semibold"
            >
              Agendar sua sessao
            </button>
          </div>

          <button onClick={onToggleMobileMenu} className="md:hidden p-2 text-[#6a5f57]">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-[#f1e7df] pt-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onCloseMobileMenu}
                className="block text-[#5f554e] py-2"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onOpenWhatsApp}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#f8a386] to-[#ef7f87] text-white rounded-full font-semibold"
            >
              Agendar sua sessao
            </button>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
