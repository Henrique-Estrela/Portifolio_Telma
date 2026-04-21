import { Clock, Instagram, Mail, Phone } from 'lucide-react';
import logoCompleta from '../../imports/logo-branca.png';

type SiteFooterProps = {
  whatsappNumber: string;
};

export default function SiteFooter({ whatsappNumber }: SiteFooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src={logoCompleta}
                alt="Logo Telma Lacerda"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md text-sm sm:text-base">
              Transformando vidas atraves de um processo terapeutico humanizado, acolhedor e baseado em evidencias
              cientificas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Contato</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <a href={`https://wa.me/${whatsappNumber}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (75) 99145-3325
              </a>
              <a href="mailto:contato@telmalacerda.psi.br" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                contato@telmalacerda.psi.br
              </a>
              <a href="https://instagram.com/telmalacerdapsi" className="flex items-center gap-2 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
                @telmalacerdapsi
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Atendimento</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Segunda a sexta: 9h - 20h
              </p>
              <p className="ml-6">Sabado: 9h - 14h</p>
              <p className="mt-4 text-xs text-gray-500">CRP: 12345-6</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2026 Telma Lacerda. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Politica de privacidade</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
