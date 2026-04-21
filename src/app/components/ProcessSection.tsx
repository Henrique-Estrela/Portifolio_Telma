import { Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

type ProcessSectionProps = {
  onOpenWhatsApp: () => void;
};

const processSteps = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    number: '01',
    title: 'Entre em contato',
    description: 'Envie uma mensagem pelo WhatsApp para agendar sua primeira sessao',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    number: '02',
    title: 'Agendamento personalizado',
    description: 'Escolhemos juntos o melhor horario que se encaixa na sua rotina',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    number: '03',
    title: 'Inicio da jornada',
    description: 'Comecamos o processo terapeutico focado em seus objetivos',
  },
];

export default function ProcessSection({ onOpenWhatsApp }: ProcessSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FAF9F6] to-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">Como vai funcionar</h2>
          <p className="text-xl text-gray-600">Um processo simples para comecar sua jornada de transformação</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C9A88A] via-[#A88968] to-[#C9A88A]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                      className="absolute inset-0 bg-gradient-to-br from-[#C9A88A] to-[#A88968] rounded-full blur-lg"
                    />

                    <motion.div
                      className="relative w-20 h-20 bg-white border-4 border-[#C9A88A] rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360, borderColor: '#A88968' }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-2xl font-bold text-[#A88968] font-serif"
                      >
                        {step.number}
                      </motion.span>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg text-center relative overflow-hidden group"
                  whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(201, 168, 138, 0.25)' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#C9A88A]/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                  />

                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[#C9A88A]/10 to-[#A88968]/10 rounded-xl flex items-center justify-center text-[#A88968] mx-auto mb-4 relative z-10"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    {step.icon}
                  </motion.div>

                  <h3 className="font-bold text-gray-900 mb-3 text-lg relative z-10">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={onOpenWhatsApp}
            className="px-8 py-4 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Comecar agora
          </button>
        </motion.div>
      </div>
    </section>
  );
}
