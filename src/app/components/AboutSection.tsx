import { CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import photo3 from '../../imports/image-3.png';
import logoCompleta from '../../imports/logocompleta-transparente.png';

type AboutSectionProps = {
  onOpenWhatsApp: () => void;
};

export default function AboutSection({ onOpenWhatsApp }: AboutSectionProps) {
  const highlights = [
    'Psicologa desde 2016 pela FTC',
    'Especialista em Psicologia Educacional',
    'Formacao em Terapia Cognitivo-Comportamental',
    'Professora de cursos, formacoes e workshops',
  ];

  return (
    <section id="sobre" className="py-18 sm:py-20 px-4 sm:px-6 bg-[#efefef]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.img
              src={photo3}
              alt="Psicologa em atendimento"
              className="rounded-3xl shadow-xl w-full max-w-[460px] lg:max-w-[520px] mx-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img src={logoCompleta} alt="Logo da profissional" className="h-16 sm:h-20 w-auto object-contain mb-4" />

            <p className="text-sm uppercase tracking-[0.2em] text-[#b58d7d] font-semibold mb-3">Formacao</p>
            <h2 className="text-4xl sm:text-[2.6rem] font-serif text-[#3d3534] leading-tight mb-4">
              Uma base solida para um cuidado clinico sensivel
            </h2>
            <p className="text-[#6a6262] leading-relaxed mb-6">
              Trajetoria dedicada ao desenvolvimento humano e a pratica baseada em evidencias.
            </p>

            <div className="grid gap-3 mb-7">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white/70 border border-[#eadfda] rounded-2xl px-4 py-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f08a87] mt-0.5 flex-shrink-0" />
                  <span className="text-[#5d5555]">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenWhatsApp}
              className="px-7 py-3 bg-gradient-to-r from-[#f8a386] to-[#ef7f87] text-white rounded-full font-semibold inline-flex items-center gap-2"
            >
              Agendar sua sessao
              <MessageCircle className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
