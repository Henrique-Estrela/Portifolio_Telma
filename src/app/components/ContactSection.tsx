import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import photo4 from '../../imports/image-4.png';

type ContactSectionProps = {
  onOpenWhatsApp: () => void;
};

export default function ContactSection({ onOpenWhatsApp }: ContactSectionProps) {
  return (
    <section id="contato" className="py-18 sm:py-20 px-4 sm:px-6 bg-[#efefef] border-y border-[#e2e2e2]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif text-[#312c2c] mb-4">Fale Comigo</h2>
            <p className="text-[#6a6262] mb-8 max-w-xl">
              Entre em contato comigo para tirar suas duvidas ou realizar seu agendamento atraves dos meus canais de
              contato ou do formulario.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <button
                onClick={onOpenWhatsApp}
                className="flex items-start gap-3 text-left bg-white border border-[#e8dfdb] rounded-xl p-4 hover:border-[#ef8e87] transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[#ef8e87] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#3b3535]">(71) 98122-0355</p>
                  <p className="text-sm text-[#7c7373]">Pelo WhatsApp</p>
                </div>
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="flex items-start gap-3 text-left bg-white border border-[#e8dfdb] rounded-xl p-4 hover:border-[#ef8e87] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#ef8e87] mt-0.5" />
                <div>
                  <p className="font-semibold text-[#3b3535]">(71) 9866-2235</p>
                  <p className="text-sm text-[#7c7373]">Pelo WhatsApp</p>
                </div>
              </button>
            </div>

            <a
              href="https://instagram.com/telmalacerdapsi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#ef8e87] font-semibold mb-6"
            >
              <Instagram className="w-4 h-4" />
              Mandar um DM
            </a>

            <div className="mb-6 text-[#5f5757] flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-[#ef8e87] mt-0.5 flex-shrink-0" />
              <p>
                Rua Eduardo Jose dos Santos, 147, Centro Integrado de Saude Professor Fernando Figueiras, Sala 210,
                Cairu/BA.
              </p>
            </div>

            <form className="space-y-3" onSubmit={(event) => event.preventDefault()}>
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-3 rounded-xl border border-[#ddd3cf] bg-white text-[#3f3838]"
              />
              <input
                type="email"
                placeholder="Seu Email"
                className="w-full px-4 py-3 rounded-xl border border-[#ddd3cf] bg-white text-[#3f3838]"
              />
              <textarea
                rows={4}
                placeholder="Digite sua mensagem aqui..."
                className="w-full px-4 py-3 rounded-xl border border-[#ddd3cf] bg-white text-[#3f3838] resize-none"
              />
              <button
                type="submit"
                onClick={onOpenWhatsApp}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#f8a386] to-[#ef7f87] text-white font-semibold"
              >
                Entrar em contato
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <img src={photo4} alt="Psicologa em consultorio" className="w-full rounded-3xl shadow-xl object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
