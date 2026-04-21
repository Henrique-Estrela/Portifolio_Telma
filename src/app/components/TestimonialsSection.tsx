import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Amanda Silva',
    role: 'Executiva',
    text: 'A terapia com a Telma transformou completamente minha relacao com a ansiedade. Hoje consigo lidar muito melhor com os desafios do dia a dia e me sinto muito mais equilibrada emocionalmente.',
    rating: 5,
    image: 'AS',
  },
  {
    name: 'Ricardo Santos',
    role: 'Empresario',
    text: 'As sessoes de terapia de casal salvaram nosso casamento. A Dra. Telma nos ajudou a reconectar e construir uma comunicacao muito mais saudavel. Somos extremamente gratos!',
    rating: 5,
    image: 'RS',
  },
  {
    name: 'Patricia Lima',
    role: 'Professora',
    text: 'O acompanhamento psicopedagogico do meu filho foi excepcional. Ele evoluiu muito na escola e voltou a ter prazer em aprender. Profissional extremamente competente!',
    rating: 5,
    image: 'PL',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FAF9F6] to-white relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">Historias de transformação</h2>
          <p className="text-xl text-gray-600">Veja o que meus pacientes tem a dizer sobre o processo terapeutico</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100 hover:border-[#C9A88A] relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#C9A88A]/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent"
                  animate={{ x: ['-100%', '200%'], y: ['-100%', '200%'] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Quote className="w-10 h-10 text-[#C9A88A] mb-4" />
                  </motion.div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.15 + i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2, rotate: 20 }}
                      >
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">"{testimonial.text}"</p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-[#C9A88A] to-[#A88968] rounded-full flex items-center justify-center text-white font-bold text-lg"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                      {testimonial.image}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
