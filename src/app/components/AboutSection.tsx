import { CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import photo3 from '../../imports/image-3.png';
import logoCompleta from '../../imports/logocompleta.png';

type AboutSectionProps = {
  onOpenWhatsApp: () => void;
};

export default function AboutSection({ onOpenWhatsApp }: AboutSectionProps) {
  const highlights = [
    'Psicologa desde 2006 com atuacao clinica continua',
    'Especialista em Terapia Cognitivo-Comportamental',
    'Formacao em Terapia Analitico Comportamental',
    'Formacao em Psiquiatria Infantil para profissionais',
    'Certificacao internacional em terapia comportamental',
    'Palestrante e facilitadora de workshops',
    'Professora de cursos, formacao e pos-graduacao',
    'Ofereco supervisao clinica para psicologas da infancia',
  ];

  return (
    <section id="sobre" className="py-18 sm:py-20 px-4 sm:px-6 bg-[#efefef]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.img
              src={photo3}
              alt="Psicologa em atendimento"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img src={logoCompleta} alt="Logo da profissional" className="h-12 w-auto object-contain mb-4" />

            <h2 className="text-4xl sm:text-[2.7rem] font-serif text-[#3d3534] leading-tight mb-6">
              Ha mais de 10 anos ajudando familias em busca de uma vida mais leve e feliz!
            </h2>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#615958]">
                  <CheckCircle2 className="w-5 h-5 text-[#f08a87] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

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
