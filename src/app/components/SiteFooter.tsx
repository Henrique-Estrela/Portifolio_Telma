import { Instagram, MessageCircle } from 'lucide-react';
import logoCompleta from '../../imports/logocompleta-transparente.png';
import starmotionLogo from '../../imports/starmotion-placeholder.svg';

type SiteFooterProps = {
  whatsappNumber: string;
};

export default function SiteFooter({ whatsappNumber }: SiteFooterProps) {
  return (
    <footer className="bg-[#f7f7f7] text-[#4d4545] py-7 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-8 border-b border-[#dfdfdf] pb-8">
          <div>
            <div className="mb-4">
              <img
                src={logoCompleta}
                alt="Logo Telma Lacerda"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#665f5f] leading-relaxed">
              Eu sou Telma Lacerda, psicologa clinica desde 2006, atuando diretamente com criancas e adolescentes.
            </p>
            <p className="mt-4 font-semibold">CRP 03/4666</p>
            <div className="mt-4 text-sm text-[#665f5f]">
              <p>(75) 9145-3325</p>
              <p>tellma.lacerda@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Faca um agendamento</h4>
            <p className="text-sm text-[#665f5f] mb-4">
              Entre em contato comigo para tirar suas duvidas ou realizar seu agendamento.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f8a386] to-[#ef7f87] text-white text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar sua sessao
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Me siga nas redes sociais</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/telmalacerdapsi"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-[#f1c8c8] text-[#ef8e87] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="w-9 h-9 rounded-full border border-[#f1c8c8] text-[#ef8e87] flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-[#837c7c]">
          <div className="flex items-center gap-3">
            <span>Site desenvolvido por</span>
            <a
              href="https://starmotion.com.br"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-[#4d4545] hover:text-[#1f1f1f] transition-colors"
            >
              <img src={"https://i.imgur.com/OC3l2UQ.png"} alt="StarMotion" className="h-20 w-auto object-contain" />
            </a>
          </div>
          <p className="text-center">Copyright © 2026. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/termos.html#termos" className="hover:text-[#5f5757] transition-colors">Termos de uso</a>
            <a href="/termos.html#privacidade" className="hover:text-[#5f5757] transition-colors">Politica de privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
