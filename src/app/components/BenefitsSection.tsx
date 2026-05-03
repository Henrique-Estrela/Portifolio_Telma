import { Heart, Shield, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Autoconhecimento profundo',
    description:
      'Aprenda a identificar padroes de comportamento, compreender suas emocoes e desenvolver uma relacao mais gentil consigo mesmo.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Gestao da ansiedade',
    description: 'Desenvolva ferramentas praticas para reconhecer e lidar com sintomas de ansiedade no dia a dia.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Relacionamentos saudaveis',
    description: 'Melhore sua comunicacao e construa vinculos mais autenticos e saudaveis.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Crescimento pessoal',
    description: 'Alcance seus objetivos pessoais e profissionais com mais clareza e confianca.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#f7f3ee] via-[#fdfaf6] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(201,168,138,0.18),transparent_44%),radial-gradient(circle_at_82%_28%,rgba(168,137,104,0.14),transparent_46%),radial-gradient(circle_at_56%_88%,rgba(184,152,122,0.12),transparent_50%)]" />

      <motion.div
        aria-hidden
        className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-[#d8b79a]/34 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 14, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        aria-hidden
        className="absolute top-[14%] right-[8%] w-80 h-80 rounded-full bg-[#c8a98b]/28 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 16, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      />

      <motion.div
        aria-hidden
        className="absolute bottom-[-10rem] left-[30%] w-96 h-96 rounded-full bg-[#bfa084]/24 blur-3xl"
        animate={{ x: [0, -14, 0], y: [0, -18, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <motion.div
        aria-hidden
        className="absolute top-[42%] -right-24 hidden sm:block w-64 h-64 rounded-full bg-[#d2b396]/26 blur-3xl"
        animate={{ x: [0, -14, 0], y: [0, -10, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />

      <motion.div
        aria-hidden
        className="absolute top-[56%] left-[6%] hidden sm:block w-56 h-56 rounded-full bg-[#c9a88a]/20 blur-3xl"
        animate={{ x: [0, 12, 0], y: [0, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">Beneficios da terapia</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transforme dor em clareza com um processo terapeutico acolhedor e estrategico para gerar mudancas reais na
            vida pessoal, profissional e relacional.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="group"
            >
              <motion.div
                className="flex gap-4 items-start p-6 rounded-2xl bg-white/78 border border-[#efe5da] shadow-[0_10px_30px_rgba(152,106,73,0.08)] hover:bg-white hover:shadow-[0_14px_34px_rgba(152,106,73,0.14)] transition-all duration-500 relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#C9A88A]/16 via-[#A88968]/10 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.65 }}
                />

                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#C9A88A] rounded-full opacity-0 group-hover:opacity-60"
                    style={{ top: `${30 + i * 40}%`, right: `${10 + i * 15}%` }}
                    animate={{ y: [0, -15, 0], scale: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}

                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-[#A88968] bg-gradient-to-br from-[#C9A88A]/12 to-[#A88968]/12 group-hover:text-white group-hover:bg-[#A88968] transition-all duration-500 flex-shrink-0 relative z-10"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <motion.div>
                    {benefit.icon}
                  </motion.div>
                </motion.div>

                <div className="relative z-10">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-[#A88968] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
