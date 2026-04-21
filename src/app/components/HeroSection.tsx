import { ArrowRight, Award, MessageCircle, Shield, Sparkles, Target, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../../imports/image-4.png';

type HeroSectionProps = {
  onOpenWhatsApp: () => void;
};

const differentials = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Sigilo absoluto',
    text: 'Atendimento seguro e etico',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Plano claro',
    text: 'Foco em objetivos terapeuticos',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Evolucao real',
    text: 'Metodo baseado em evidencias',
  },
];

const heroNumbers = [
  { value: '200+', label: 'Pacientes atendidos' },
  { value: '50 min', label: 'Por sessao' },
  { value: '5.0', label: 'Avaliacao media' },
];

export default function HeroSection({ onOpenWhatsApp }: HeroSectionProps) {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C9A88A]/10 to-[#A88968]/10 border border-[#C9A88A]/20 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-[#A88968]" />
              <span className="text-sm font-medium text-[#A88968]">Atendimento online personalizado</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Terapia online para viver com{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#A88968]">clareza, calma e direcao</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute bottom-1 sm:bottom-2 left-0 h-2 sm:h-3 bg-[#C9A88A]/20 -z-0"
                  />
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Psicoterapia com abordagem humanizada e objetiva para ansiedade,
                relacionamentos e desenvolvimento emocional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {differentials.map((diff, index) => (
                <motion.div
                  key={diff.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.12 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-[#C9A88A]/20 bg-white/80 backdrop-blur-sm p-4"
                >
                  <div className="flex items-center gap-2 mb-2 text-[#A88968]">
                    <motion.div
                      className="bg-[#C9A88A]/10 p-2 rounded-lg"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {diff.icon}
                    </motion.div>
                    <p className="font-semibold text-sm text-gray-900">{diff.title}</p>
                  </div>
                  <p className="text-xs text-gray-600">{diff.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onOpenWhatsApp}
                className="px-8 py-4 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar primeira sessao
              </button>

              <a
                href="#servicos"
                className="px-8 py-4 border-2 border-[#C9A88A]/30 text-[#A88968] rounded-full font-semibold hover:bg-[#C9A88A]/5 transition-all flex items-center justify-center gap-2"
              >
                Conhecer servicos
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {heroNumbers.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.12 }}
                  className="rounded-xl bg-white/70 border border-gray-200 px-4 py-3"
                >
                  <p className="text-xl font-bold text-gray-900">{item.value}</p>
                  <p className="text-xs text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-[#C9A88A]/10 to-[#A88968]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-[#A88968]/10 to-[#C9A88A]/10 rounded-full blur-3xl"></div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Telma Lacerda - Psicologa"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />

              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 max-w-[220px] border border-[#E8DCC4]/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C9A88A] to-[#A88968] rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">CRP 12345-6</p>
                    <p className="text-xs text-gray-600">Registro ativo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
