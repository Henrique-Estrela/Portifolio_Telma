import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../../imports/image-5.png';

type HeroSectionProps = {
  onOpenWhatsApp: () => void;
};

export default function HeroSection({ onOpenWhatsApp }: HeroSectionProps) {
  return (
    <section className="pt-10 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden bg-[#f8f4ef]">
      <div className="container mx-auto">
        <div className="relative rounded-[2.25rem] bg-[#fdfaf7] border border-[#eadfcd] shadow-[0_24px_70px_rgba(124,85,54,0.12)] overflow-hidden">
          <div className="absolute -top-14 -right-12 w-64 h-64 rounded-full bg-[#d59f79]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-24 w-80 h-80 rounded-full bg-[#b57c56]/12 blur-3xl" />
          <div className="absolute left-3 top-14 hidden xl:block pointer-events-none [writing-mode:vertical-rl] rotate-180 text-[#d7cdc0] tracking-[0.55em] uppercase text-xs font-semibold">
            Psicologia Clinica
          </div>

          <div className="grid lg:grid-cols-[1.06fr_0.94fr] gap-10 lg:gap-6 items-center px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 space-y-7"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#b98561]/10 border border-[#b98561]/20 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-[#9f6f4e]" />
                <span className="text-sm font-semibold text-[#9f6f4e]">Atendimento personalizado on-line</span>
              </motion.div>

              <div className="space-y-4 max-w-xl">
                <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-bold text-[#3f3328] leading-[1.08]">
                  Aprenda recursos mentais para identificar e controlar a ansiedade
                </h1>
                <p className="text-base sm:text-lg text-[#6e5d50] leading-relaxed">
                  Psicoterapia humanizada para mulheres que desejam viver com mais clareza, acolhimento e equilibrio
                  emocional.
                </p>
                <p className="text-sm sm:text-base text-[#8f7d6f]">Atendimento online ou presencial com plano terapeutico individual.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={onOpenWhatsApp}
                  className="px-8 py-4 bg-[#b97852] text-white rounded-xl font-semibold shadow-lg shadow-[#b97852]/30 hover:bg-[#a76945] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agende sua sessao
                </button>

                <a
                  href="#servicos"
                  className="px-8 py-4 border border-[#c8ab93] text-[#855f44] rounded-xl font-semibold hover:bg-[#b98561]/10 transition-all flex items-center justify-center gap-2"
                >
                  Conhecer servicos
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1 text-sm text-[#7d6a5c]">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#b97852]" />
                  Especialista em saude mental feminina
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#b97852]" />
                  Escuta acolhedora e estrategia pratica
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#b97852]" />
                  200+ pacientes atendidos
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px]">
                <motion.div
                  className="absolute -top-10 right-0 w-32 h-32 bg-[#efb6b6]/60 rounded-tl-[8rem] rounded-br-[8rem] blur-[1px]"
                  animate={{ y: [0, -14, 0], rotate: [0, 3, 0], scale: [1, 1.04, 1] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.svg
                  viewBox="0 0 100 100"
                  aria-hidden
                  className="absolute -bottom-20 -right-30 w-50 h-50"
                  animate={{ y: [0, 10, 0], x: [0, -6, 0], rotate: [0, -4, 0] }}
                  transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                >
                  <path
                    d="M50 0 C58 25 75 42 100 50 C75 58 58 75 50 100 C42 75 25 58 0 50 C25 42 42 25 50 0 Z"
                    fill="#b97852"
                  />
                </motion.svg>

                <motion.div
                  className="absolute top-10 -left-3 sm:-left-5 w-14 h-14 rounded-2xl bg-[#b97852] text-white text-lg font-semibold tracking-wide flex items-center justify-center shadow-lg z-20"
                  animate={{ y: [0, -8, 0], rotate: [0, 5, 0], boxShadow: ['0 12px 20px rgba(185,120,82,0.25)', '0 20px 30px rgba(185,120,82,0.38)', '0 12px 20px rgba(185,120,82,0.25)'] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
                >
                  PSI
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-4 sm:-right-6 z-20 w-16 h-20 rounded-2xl border border-[#f0d7c6] bg-white/75 backdrop-blur-sm shadow-md"
                  animate={{ y: [0, -12, 0], rotate: [0, -5, 0], opacity: [0.88, 1, 0.88] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                />

                <div className="relative rounded-[2.25rem] overflow-hidden border border-[#eadfcd] shadow-[0_24px_50px_rgba(58,43,34,0.2)] bg-white z-10">
                  <img
                    src={heroImage}
                    alt="Telma Lacerda - Psicologa"
                    className="w-full h-[430px] sm:h-[500px] object-cover object-top"
                  />
                </div>

                <motion.div
                  className="absolute -bottom-5 left-4 sm:left-6 z-20 rounded-2xl bg-white/95 border border-[#eadfcd] px-4 py-3 shadow-lg"
                  animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.55 }}
                >
                  <p className="text-xs text-[#8e7867]">Atendimento individual</p>
                  <p className="text-sm font-semibold text-[#5a4738]">Online e presencial</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
