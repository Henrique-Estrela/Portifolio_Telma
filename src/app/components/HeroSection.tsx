import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../../imports/image-5.png';

type HeroSectionProps = {
  onOpenWhatsApp: () => void;
};

export default function HeroSection({ onOpenWhatsApp }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 pt-20">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-gradient-to-tl from-pink-200 to-rose-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 h-full">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-0 items-center min-h-[calc(100vh-100px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 order-2 lg:order-1"
          >
            <div className="max-w-lg">
              {/* Eyebrow text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-4 px-4 py-2 bg-white/60 backdrop-blur rounded-full border border-pink-200"
              >
                <span className="text-sm font-semibold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                  Bem-vindo ao consultório
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-3"
              >
                Conheca<br />
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Angelis Dantas
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl lg:text-3xl font-serif text-gray-700 mb-6 font-light"
              >
                Ola, prazer! 👋
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-gray-700 mb-8 leading-relaxed max-w-md"
              >
                Sou psicóloga clínica desde 2006, especializada no acompanhamento de crianças e adolescentes. Atendimento <span className="font-semibold text-rose-600">acolhedor, técnico e humanizado</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  onClick={onOpenWhatsApp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 text-white rounded-full font-bold text-lg inline-flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agende agora
                </motion.button>

                <motion.a
                  href="#servicos"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-rose-400 text-gray-900 rounded-full font-bold text-lg inline-flex items-center justify-center gap-3 bg-white/50 backdrop-blur hover:bg-white/80 transition-all"
                >
                  Conhecer serviços
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <p className="text-sm text-gray-600 font-semibold mb-4">✓ Confie em nosso atendimento</p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">18+</p>
                    <p className="text-sm text-gray-600">Anos de experiência</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Famílias atendidas</p>
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
            className="relative order-1 lg:order-2 h-[500px] lg:h-[700px] flex items-center justify-center"
          >
            {/* Floating background cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-10 -left-10 w-40 h-40 bg-gradient-to-br from-yellow-200/40 to-orange-200/40 rounded-3xl blur-2xl"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
              className="absolute bottom-20 -right-10 w-48 h-48 bg-gradient-to-tl from-pink-200/40 to-purple-200/40 rounded-3xl blur-2xl"
            ></motion.div>

            {/* Main image container */}
            <motion.div
              className="relative z-10 w-full h-full"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-transparent to-transparent rounded-3xl"></div>
              <img
                src={heroImage}
                alt="Angelis Dantas"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur rounded-2xl px-6 py-4 shadow-xl"
            >
              <p className="font-bold text-gray-900 text-lg">Psicóloga Clínica</p>
              <p className="text-sm text-rose-500 font-semibold">CRP 12/12345</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
