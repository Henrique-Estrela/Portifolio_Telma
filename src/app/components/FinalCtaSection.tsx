import { CheckCircle, MessageCircle, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo } from 'react';

type FinalCtaSectionProps = {
  onOpenWhatsApp: () => void;
};

export default function FinalCtaSection({ onOpenWhatsApp }: FinalCtaSectionProps) {
  const floatingParticles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        left: 8 + ((index * 9) % 84),
        top: 12 + ((index * 11) % 72),
        duration: 3 + (index % 4) * 0.6,
        delay: (index % 5) * 0.35,
      })),
    []
  );

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#C9A88A] via-[#A88968] to-[#C9A88A]"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{ backgroundSize: '200% 200%' }}
      />

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
          animate={{ y: [0, -50, 0], opacity: [0, 1, 0] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
        />
      ))}

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
            <span className="text-sm font-medium text-white">Oferta especial</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Pronto para transformar sua vida?
          </motion.h2>

          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Agende sua primeira sessao e comece sua jornada de autoconhecimento, crescimento e bem-estar emocional
            hoje mesmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              onClick={onOpenWhatsApp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#A88968] rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3 overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A88A]/30 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5, ease: 'easeInOut' }}
              />

              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 relative z-10" />
              </motion.div>
              <span className="relative z-10">Agendar minha primeira sessao</span>
            </motion.button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80 text-sm">
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.1 }}>
              <CheckCircle className="w-5 h-5" />
              <span>Primeira sessao com desconto</span>
            </motion.div>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.1 }}>
              <Shield className="w-5 h-5" />
              <span>100% online e seguro</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
