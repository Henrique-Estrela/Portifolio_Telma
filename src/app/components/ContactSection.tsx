import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import photo4 from '../../imports/image-4.png';

type ContactSectionProps = {
  onOpenWhatsApp: () => void;
};

export default function ContactSection({ onOpenWhatsApp }: ContactSectionProps) {
  return (
    <section
      id="contato"
      className="relative py-18 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#f7f3f1] via-[#fdf9f7] to-white border-y border-[#efe6e2]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(248,163,134,0.15),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(239,127,135,0.12),transparent_48%)]" />
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur rounded-3xl border border-[#efe0d8] p-6 sm:p-8 shadow-[0_20px_60px_rgba(170,120,90,0.15)]">
              <h2 className="text-4xl sm:text-5xl font-serif text-[#312c2c] mb-4">Agende seu horario</h2>
              <p className="text-[#6a6262] mb-6 max-w-xl">
                Fale comigo para tirar suas duvidas. De o primeiro passo para uma mudanca real e inicie a sua
                transformacao.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <button
                  onClick={onOpenWhatsApp}
                  className="flex items-start gap-3 text-left bg-[#fff9f6] border border-[#f2d8cf] rounded-2xl p-4 hover:border-[#ef8e87] hover:shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-[#ef8e87] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#3b3535]">Agende seu horario</p>
                    <p className="text-sm text-[#7c7373]">Atendimento via WhatsApp</p>
                  </div>
                </button>

                <button
                  onClick={onOpenWhatsApp}
                  className="flex items-start gap-3 text-left bg-[#fff9f6] border border-[#f2d8cf] rounded-2xl p-4 hover:border-[#ef8e87] hover:shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-[#ef8e87] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#3b3535]">Tire suas duvidas</p>
                    <p className="text-sm text-[#7c7373]">Fale comigo no WhatsApp</p>
                  </div>
                </button>

                <a
                  href="mailto:tellma.lacerda@gmail.com"
                  className="flex items-start gap-3 text-left bg-[#fff9f6] border border-[#f2d8cf] rounded-2xl p-4 hover:border-[#ef8e87] hover:shadow-md transition-all"
                >
                  <Mail className="w-5 h-5 text-[#ef8e87] mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#3b3535]">tellma.lacerda@gmail.com</p>
                    <p className="text-sm text-[#7c7373]">Responderemos em breve</p>
                  </div>
                </a>
              </div>

              <a
                href="https://instagram.com/telmalacerdapsi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#ef8e87] font-semibold mb-6"
              >
                <Instagram className="w-4 h-4" />
                Mande um direct no Instagram
              </a>

              <div className="mb-6">
                <iframe
                  title="Mapa do consultorio"
                  src="https://www.google.com/maps?q=Rua%20Marechal%20Castelo%20Branco%2C%201669%20-%20Santa%20Monica%2C%20Allure%20Empresarial&output=embed"
                  className="w-full h-56 rounded-2xl border border-[#f1dcd4]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p className="mt-3 text-sm text-[#6a6262]">
                  Rua Marechal Castelo Branco, 1669 - Santa Monica, Allure Empresarial.
                </p>
              </div>

              <form className="space-y-3" action="https://formsubmit.co/telmalacerdapsi@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="Novo contato pelo site" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#f1dcd4] bg-white text-[#3f3838] focus:outline-none focus:ring-2 focus:ring-[#f3b29f]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu Email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#f1dcd4] bg-white text-[#3f3838] focus:outline-none focus:ring-2 focus:ring-[#f3b29f]"
                />
                <input type="hidden" name="_next" value="https://portifolio-telma.onrender.com/"/>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Digite sua mensagem aqui..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#f1dcd4] bg-white text-[#3f3838] resize-none focus:outline-none focus:ring-2 focus:ring-[#f3b29f]"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#f8a386] to-[#ef7f87] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Entrar em contato
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="grid gap-6">
              <img src={photo4} alt="Psicologa em consultorio" className="w-full rounded-3xl shadow-xl object-cover" />
              <div className="rounded-3xl border border-[#efe0d8] bg-white/90 backdrop-blur p-6 shadow-[0_16px_40px_rgba(170,120,90,0.12)]">
                <h3 className="text-xl font-serif text-[#3b3535] mb-2">Ambiente acolhedor</h3>
                <p className="text-sm text-[#6a6262]">
                  Um espaco pensado para oferecer seguranca, escuta e conforto em cada atendimento.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
