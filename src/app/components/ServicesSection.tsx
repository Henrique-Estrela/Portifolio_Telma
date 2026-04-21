import { ArrowRight, Brain, CheckCircle, Lightbulb, Users } from 'lucide-react';
import { motion } from 'motion/react';

type ServicesSectionProps = {
  onOpenWhatsApp: () => void;
};

const services = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'Psicoterapia Individual',
    subtitle: 'Autoconhecimento e equilibrio emocional',
    description:
      'Trabalho terapeutico focado em ansiedade, depressao, autoestima e desenvolvimento pessoal atraves de tecnicas baseadas em evidencias.',
    benefits: ['Reducao de ansiedade', 'Autoconhecimento profundo', 'Gestao emocional'],
    color: 'from-violet-500/10 via-purple-500/10 to-fuchsia-500/10',
    iconBg: 'bg-gradient-to-br from-violet-500 to-fuchsia-500',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Terapia de Casal',
    subtitle: 'Fortalecendo vinculos afetivos',
    description:
      'Atendimento especializado para casais que desejam melhorar a comunicacao, resolver conflitos e fortalecer o relacionamento.',
    benefits: ['Comunicacao assertiva', 'Resolucao de conflitos', 'Reconexao emocional'],
    color: 'from-blue-500/10 via-cyan-500/10 to-teal-500/10',
    iconBg: 'bg-gradient-to-br from-blue-500 to-teal-500',
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: 'Psicopedagogia',
    subtitle: 'Potencializando o aprendizado',
    description:
      'Avaliacao e intervencao em dificuldades de aprendizagem, leitura, escrita e concentracao em criancas e adolescentes.',
    benefits: ['Melhora no desempenho escolar', 'Estrategias de aprendizagem', 'Aumento da confianca'],
    color: 'from-amber-500/10 via-orange-500/10 to-rose-500/10',
    iconBg: 'bg-gradient-to-br from-amber-500 to-rose-500',
  },
];

export default function ServicesSection({ onOpenWhatsApp }: ServicesSectionProps) {
  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">Como posso te ajudar</h2>
          <p className="text-xl text-gray-600">Atendimento especializado e personalizado para suas necessidades</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-xl`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 100 }}
                transition={{ duration: 0.5 }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 rounded-3xl"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
              />

              <div className="relative bg-white border border-gray-100 hover:border-[#C9A88A] rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#C9A88A] rounded-full opacity-0 group-hover:opacity-100"
                    style={{ top: `${20 + i * 30}%`, right: `${10 + i * 10}%` }}
                    animate={{ y: [0, -20, 0], scale: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}

                <motion.div
                  className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center text-white mb-6 relative`}
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                    {service.icon}
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-white/30"
                    animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  />
                </motion.div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-[#A88968] mb-4 font-medium">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#A88968]" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenWhatsApp}
                  className="w-full py-3 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  Agendar sessao
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
