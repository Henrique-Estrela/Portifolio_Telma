import { CalendarClock, Check, Clock3, GraduationCap, House, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

type ProcessSectionProps = {
  onOpenWhatsApp: () => void;
};

const processSteps = [
  {
    icon: <House className="w-6 h-6" />,
    title: 'Atendimento Clinico',
    items: [
      'Atendimento semanal',
      'Criancas a partir de 6 anos e adolescentes ate 17 anos e adultos',
      '40 a 50 minutos por sessao',
      'Orientacao de pais',
      'Atendimento particular (nao aceitamos convenio)',
    ],
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Modalidade Online ou Presencial',
    items: ['A sessao pode ocorrer de forma online ou presencial, de acordo com a preferencia do paciente.'],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Palestras, cursos e workshops',
    items: [
      'Abordagem pratica, acolhedora e estrategica para profissionais e equipes.',
      'Embasamento cientifico com aplicabilidade real no cotidiano.',
      'Reflexao, troca de experiencias e estrategias com impacto direto.',
    ],
  },
  {
    icon: <Clock3 className="w-6 h-6" />,
    title: 'Agende seu Horario',
    highlighted: true,
  },
];

export default function ProcessSection({ onOpenWhatsApp }: ProcessSectionProps) {
  return (
    <section className="py-18 sm:py-20 px-4 sm:px-6 bg-[#f4e8df] border-y border-[#f1ddd1]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif text-[#3d3534]">Agende hoje mesmo o seu horario.</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl border p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${
                step.highlighted
                  ? 'bg-gradient-to-b from-[#f8a386] to-[#ef7f87] border-[#ee8888] text-white shadow-lg'
                  : 'bg-white border-[#eadfda] hover:border-[#e8b5ad]'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full border-4 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105 ${
                  step.highlighted
                    ? 'border-white/40 bg-white/95 text-[#ee8686]'
                    : 'border-[#f7b0ad] bg-white text-[#ee8686]'
                }`}
              >
                {step.icon}
              </div>

              <h3 className={`text-2xl font-serif mb-4 leading-snug ${step.highlighted ? 'text-white' : 'text-[#3f3636]'}`}>{step.title}</h3>

              {step.highlighted ? (
                <div className="space-y-4">
                  <p className="text-sm text-white/90 leading-relaxed">
                    Agende seu horario e inicie a sua transformacao.
                  </p>
                  <div className="flex items-center justify-between text-sm border-b border-white/30 pb-3">
                    <span>Seg-Sex</span>
                    <span className="inline-flex items-center gap-1"><Clock3 className="w-4 h-4" />08h as 18h</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-b border-white/30 pb-3">
                    <span>Sab-Dom</span>
                    <span className="inline-flex items-center gap-1"><CalendarClock className="w-4 h-4" />Agenda fechada</span>
                  </div>
                  <button
                    onClick={onOpenWhatsApp}
                    className="mt-3 w-full py-3 rounded-full bg-white text-[#e6777d] font-semibold shadow-sm transition-colors hover:bg-[#fff4f2]"
                  >
                    Agendar seu horario
                  </button>
                </div>
              ) : (
                <ul className="space-y-3">
                  {step.items?.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#625a58] text-sm leading-relaxed">
                      <Check className="w-4 h-4 text-[#f08a87] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
