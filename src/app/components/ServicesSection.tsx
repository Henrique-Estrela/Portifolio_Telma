import { BookOpen, Brain, GraduationCap, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

type ServicesSectionProps = {
  onOpenWhatsApp: () => void;
};

const services = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Atendimento Clinico',
    subtitle: 'Pratica baseada em evidencia',
    description:
      'Minha pratica clinica e direcionada a uma psicoterapia baseada em evidencias no cuidado de criancas e adolescentes.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Orientacao Parental',
    subtitle: 'Educacao para familias',
    description:
      'Sou educadora parental com certificacao pela Positive Discipline Association e realizo orientacao focada nas necessidades das familias.',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Supervisao Clinica',
    subtitle: 'Desenvolvimento profissional',
    description:
      'Realizo supervisao de casos clinicos para profissionais que desejam fortalecer a pratica e a seguranca no atendimento infantojuvenil.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'LAPSIA',
    subtitle: 'Laboratorio de desenvolvimento',
    description:
      'Fundadora e diretora do LAPSIA, laboratorio de desenvolvimento de carreira para psicologos e estudantes da area.',
  },
];

export default function ServicesSection({ onOpenWhatsApp }: ServicesSectionProps) {
  return (
    <section id="servicos" className="py-18 sm:py-20 px-4 sm:px-6 bg-[#f4e8df] border-y border-[#f1ddd1]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-serif text-[#3d3534] mb-4">Saiba como posso te ajudar!</h2>
          <p className="text-[#6d6361] leading-relaxed">
            A psicoterapia e direcionada para dificuldades familiares, desafios emocionais e comportamentais.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative bg-[#f8f8f8] border border-[#eadfda] rounded-xl p-6 h-full shadow-sm">
                <div className="w-12 h-12 rounded-full border-4 border-[#f7b0ad] bg-white text-[#ee8686] flex items-center justify-center mb-4">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-serif text-[#3f3636] mb-2">{service.title}</h3>
                <p className="text-sm font-semibold text-[#9c8a84] mb-4">{service.subtitle}</p>
                <p className="text-sm text-[#625a58] leading-relaxed mb-6">{service.description}</p>

                <button
                  onClick={onOpenWhatsApp}
                  className="text-sm font-semibold text-[#f18786] hover:text-[#e27474] transition-colors"
                >
                  Saiba mais
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
