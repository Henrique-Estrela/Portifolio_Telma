import { ArrowRight, Brain, HeartPulse, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../../imports/image-5.png';

type HeroSectionProps = {
  onOpenWhatsApp: () => void;
};

export default function HeroSection({ onOpenWhatsApp }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 pt-24 sm:pt-28 pb-12">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-gradient-to-tl from-pink-200 to-rose-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      {/* Floating accents across hero */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          className="absolute top-28 left-6 sm:left-12 w-[52px] h-[52px] rounded-full bg-white/75 backdrop-blur border border-rose-200/50 text-rose-200 flex items-center justify-center shadow-sm opacity-60"
          aria-hidden
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 7, 0], rotate: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut', delay: 0.4 }}
          className="absolute top-36 left-1/3 w-[52px] h-[52px] rounded-full bg-white/80 backdrop-blur border border-rose-200/60 text-rose-300 flex items-center justify-center shadow-sm opacity-60"
          aria-hidden
        >
          <HeartPulse className="w-5 h-5" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 9.5, ease: 'easeInOut', delay: 0.2 }}
          className="absolute top-16 right-16 sm:right-24 w-[52px] h-[52px] rounded-full bg-white/75 backdrop-blur border border-rose-200/50 text-rose-200 flex items-center justify-center shadow-sm opacity-60"
          aria-hidden
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 10.5, ease: 'easeInOut', delay: 0.1 }}
          className="absolute top-24 right-1/3 w-[52px] h-[52px] rounded-full bg-white/80 backdrop-blur border border-rose-200/60 text-rose-300 flex items-center justify-center shadow-sm opacity-60"
          aria-hidden
        >
          <Brain className="w-5 h-5" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0], rotate: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 11.5, ease: 'easeInOut', delay: 0.6 }}
          className="absolute top-[55%] left-10 sm:left-20 w-[52px] h-[52px] rounded-full bg-white/75 backdrop-blur border border-rose-200/50 text-rose-200 flex items-center justify-center shadow-sm opacity-60"
          aria-hidden
        >
          <HeartPulse className="w-4 h-4" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -7, 0], rotate: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 10.8, ease: 'easeInOut', delay: 0.3 }}
          className="absolute top-[60%] right-8 sm:right-16 w-[52px] h-[52px] rounded-full bg-white/75 backdrop-blur border border-rose-200/50 text-rose-200 flex items-center justify-center shadow-sm opacity-60"
          aria-hidden
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0], rotate: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-[72%] left-[45%] w-[52px] h-[52px] rounded-full bg-white/80 backdrop-blur border border-rose-200/60 text-rose-300 flex items-center justify-center shadow-sm opacity-60"
          aria-hidden
        >
          <Brain className="w-5 h-5" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 h-full">
        <div className="grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1.05fr] gap-10 lg:gap-6 xl:gap-10 items-center min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 order-2 lg:order-1"
          >
            <div className="max-w-xl">
              {/* Eyebrow text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-4 px-4 py-2 bg-white/60 backdrop-blur rounded-full border border-pink-200"
              >
                <span className="text-sm font-semibold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                  Psicologia clinica para criancas, adolescentes e adultos
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-4"
              >
                Ola, eu sou<br />
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Telma Lacerda</span>
              </motion.h1>

              {/* Subheading */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl sm:text-2xl lg:text-3xl font-serif text-gray-700 mb-6 font-light"
              >
                Psicologa clinica desde 2016
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed max-w-xl"
              >
                Atendo criancas, adolescentes e adultos com base na Terapia Cognitivo-Comportamental (TCC), auxiliando no
                gerenciamento das emocoes, na resolucao de desafios do dia a dia e no tratamento de transtornos.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  onClick={onOpenWhatsApp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-3.5 sm:py-4 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 text-white rounded-full font-bold text-base sm:text-lg inline-flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agende sua sessao
                </motion.button>

                <motion.a
                  href="#servicos"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-3.5 sm:py-4 border-2 border-rose-400 text-gray-900 rounded-full font-bold text-base sm:text-lg inline-flex items-center justify-center gap-3 bg-white/50 backdrop-blur hover:bg-white/80 transition-all"
                >
                  Como posso te ajudar
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200"
              >
                <p className="text-sm text-gray-600 font-semibold mb-4">✓ Atendimento sensivel, tecnico e humanizado</p>
                <div className="flex flex-wrap gap-6">
                  <div>
                    <p className="text-lg font-bold text-gray-900">TCC</p>
                    <p className="text-sm text-gray-600">Abordagem orientada por evidencias</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">Escuta acolhedora</p>
                    <p className="text-sm text-gray-600">Ambiente seguro para voce</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex items-center justify-center"
          >
            {/* Main image container */}
            <motion.div
              className="relative z-10 w-full max-w-[520px] xl:max-w-[600px] h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[600px]"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-transparent to-transparent rounded-3xl"></div>
              <img
                src={heroImage}
                alt="Telma Lacerda"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{ delay: 0.8, type: "spring", y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
              className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur rounded-2xl px-6 py-4 shadow-xl"
            >
              <p className="font-bold text-gray-900 text-lg">Psicologa Clinica</p>
              <p className="text-sm text-rose-500 font-semibold">CRP ____</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
