import { Heart, Shield, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Autoconhecimento profundo',
    description:
      'Aprenda a identificar padroes de comportamento, compreender suas emocoes e desenvolver uma relacao mais saudavel consigo mesmo.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Gestao da ansiedade',
    description: 'Desenvolva ferramentas praticas para reconhecer e controlar sintomas de ansiedade no dia a dia.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Relacionamentos saudaveis',
    description: 'Melhore sua comunicacao e construa vinculos mais autenticos e satisfatorios.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Crescimento pessoal',
    description: 'Alcance seus objetivos pessoais e profissionais com mais clareza e confianca.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#F5F3EE] to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#A88968" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#A88968" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#A88968" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">Beneficios da terapia</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Um processo terapeutico estruturado traz transformacoes profundas e duradouras para sua vida pessoal,
            profissional e relacional.
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
              whileHover={{ y: -5 }}
              className="group"
            >
              <motion.div
                className="flex gap-4 items-start p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#C9A88A]/5 via-[#A88968]/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
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
                  className="w-12 h-12 bg-gradient-to-br from-[#C9A88A]/10 to-[#A88968]/10 rounded-xl flex items-center justify-center text-[#A88968] flex-shrink-0 relative z-10"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    background: 'linear-gradient(135deg, #C9A88A 0%, #A88968 100%)',
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
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
