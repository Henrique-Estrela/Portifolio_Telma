import { motion } from 'motion/react';

type ServicesSectionProps = {
  onOpenWhatsApp: () => void;
};

/*
const services = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Psicoterapia Individual',
    subtitle: 'Atendimento personalizado',
    description:
      'Apoio para pessoas com dificuldades para lidar com ansiedade, depressao e outros transtornos mentais.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Relacionamentos e Convivencia',
    subtitle: 'Familia, amor e trabalho',
    description:
      'Para quem deseja melhorar relacionamentos familiares, amorosos e profissionais.',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Regulacao Emocional',
    subtitle: 'Qualidade de vida',
    description:
      'Para pessoas que desejam ajuda para regular as emocoes e fortalecer a qualidade de vida.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Demandas Mais Frequentes',
    subtitle: 'Focos de trabalho',
    description:
      'Transtornos ansiosos, transtornos de humor, transtornos do neurodesenvolvimento, relacionamentos e desregulacao emocional.',
  },
];
*/

export default function ServicesSection({ onOpenWhatsApp }: ServicesSectionProps) {
  return (
    <section id="servicos" className="py-18 sm:py-20 px-4 sm:px-6 bg-[#f4e8df] border-y border-[#f1ddd1]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#a58a82] mb-3">
            Psicoterapia e desenvolvimento emocional
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#3d3534] mb-4">Como posso te ajudar?</h2>
          <p className="text-base sm:text-lg text-[#6d6361] leading-relaxed">
            Um espaço seguro para acolher, compreender e transformar o que te desafia hoje.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#625a58] space-y-6 text-base sm:text-lg leading-relaxed"
          >
            <p>
              A psicoterapia é um espaço de acolhimento, escuta e desenvolvimento emocional. É direcionada para apoiar pessoas com desregulação emocional e demandas que surgem ao longo das diferentes fases da vida — ansiedade, dificuldades familiares, orientação e treino de pais — além de contribuir no tratamento de diversos transtornos mentais.
            </p>

            <p>
              O objetivo é promover uma vida com mais equilíbrio, significado e bem-estar, para que cada pessoa possa viver de um jeito mais autêntico, alinhado ao que realmente importa e que faça sentido.
            </p>

            <p className="text-sm sm:text-base text-[#7a6b68] border-l-2 border-[#e4cfc7] pl-4">
              Cada encontro é pensado para oferecer cuidado, clareza e ferramentas práticas para o seu dia a dia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8 lg:border-l lg:border-[#eadfda]"
          >
            <h3 className="text-2xl font-serif text-[#3f3636]">Para quem é?</h3>
            <ul className="mt-6 space-y-4 text-sm sm:text-base text-[#625a58]">
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#f18786] flex-none"></span>
                <span>Para quem quer desenvolver estratégias para lidar com ansiedade, depressão, luto e outros transtornos mentais.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#f18786] flex-none"></span>
                <span>Para quem deseja fortalecer relacionamentos e melhorar a qualidade de vida.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#f18786] flex-none"></span>
                <span>Para você que busca uma abordagem acolhedora, sem julgamentos e com foco em autoconhecimento e equilíbrio emocional.</span>
              </li>
            </ul>

            <button
              onClick={onOpenWhatsApp}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f18786] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#e27474]"
            >
              Quero conversar
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
