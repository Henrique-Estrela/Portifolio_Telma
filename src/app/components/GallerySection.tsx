import { motion } from 'motion/react';
import photo3 from '../../imports/image-3.png';
import photo4 from '../../imports/image-4.png';

export default function GallerySection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-white to-[#FAF9F6]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Conheca meu trabalho</h2>
          <p className="text-lg text-gray-600">Dedicacao e amor em cada atendimento</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative group overflow-hidden rounded-3xl shadow-xl"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl border-4 border-[#C9A88A]/0 group-hover:border-[#C9A88A]/50"
              transition={{ duration: 0.3 }}
            />

            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}>
              <img
                src={photo3}
                alt="Telma com livro sobre desenvolvimento infantil"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </motion.div>

            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-80"
                style={{ top: `${20 + i * 25}%`, right: `${10 + i * 15}%` }}
                animate={{ y: [0, -20, 0], scale: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6"
            >
              <div className="text-white">
                <p className="font-semibold text-base sm:text-lg mb-1">Psicopedagogia</p>
                <p className="text-xs sm:text-sm opacity-90">Especializacao em desenvolvimento infantil</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="relative group overflow-hidden rounded-3xl shadow-xl"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl border-4 border-[#C9A88A]/0 group-hover:border-[#C9A88A]/50"
              transition={{ duration: 0.3 }}
            />

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <img src={photo4} alt="Telma em sessao terapeutica" className="w-full h-64 sm:h-80 object-cover" />
            </motion.div>

            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-80"
                style={{ top: `${25 + i * 25}%`, left: `${10 + i * 15}%` }}
                animate={{ y: [0, -20, 0], scale: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6"
            >
              <div className="text-white">
                <p className="font-semibold text-base sm:text-lg mb-1">Atendimento acolhedor</p>
                <p className="text-xs sm:text-sm opacity-90">Ambiente seguro e confortavel</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
