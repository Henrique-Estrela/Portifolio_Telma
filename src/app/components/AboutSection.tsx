import { Award, MessageCircle, Quote, Users } from 'lucide-react';
import { motion } from 'motion/react';
import photo5 from '../../imports/image-5.png';

type AboutSectionProps = {
  onOpenWhatsApp: () => void;
};

export default function AboutSection({ onOpenWhatsApp }: AboutSectionProps) {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-[#C9A88A]/10 to-transparent rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-4 bg-gradient-to-br from-[#C9A88A]/20 to-[#A88968]/20 rounded-3xl"
            />

            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-white to-[#FAF9F6] rounded-full flex items-center justify-center shadow-xl border-4 border-[#E8DCC4] z-10"
            >
              <div className="text-center">
                <motion.p
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-3xl font-bold text-[#A88968]"
                >
                  10+
                </motion.p>
                <p className="text-xs text-gray-600 font-semibold">anos</p>
              </div>
            </motion.div>

            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-[#C9A88A] rounded-full"
                style={{ top: `${30 + i * 20}%`, right: `${-5 + i * 2}%` }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.7, ease: 'easeInOut' }}
              />
            ))}

            <motion.img
              src={photo5}
              alt="Dra. Telma Lacerda em seu consultorio"
              className="relative rounded-3xl shadow-2xl w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A88A]/10 rounded-full mb-6">
              <Quote className="w-4 h-4 text-[#A88968]" />
              <span className="text-sm font-medium text-[#A88968]">Sobre mim</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">Ola, sou a Telma Lacerda</h2>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                <strong className="text-gray-900">Psicologa (CRP 12345-6)</strong> e{' '}
                <strong className="text-gray-900">Psicopedagoga</strong> com mais de 10 anos dedicados a ajudar pessoas a
                transformarem suas vidas atraves de um processo terapeutico acolhedor e efetivo.
              </p>
              <p>
                Minha abordagem combina tecnicas da{' '}
                <strong className="text-gray-900">Terapia Cognitivo-Comportamental</strong>,
                <strong className="text-gray-900"> Terapia Humanista</strong> e{' '}
                <strong className="text-gray-900">Psicopedagogia Clinica</strong>, sempre respeitando a individualidade e o tempo
                de cada pessoa.
              </p>
              <p>
                Acredito que a terapia e um espaco seguro de acolhimento, escuta e transformacao. Trabalho com amor,
                dedicacao e compromisso etico para que voce alcance seus objetivos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#C9A88A]/5 to-[#A88968]/5 rounded-xl">
                <Award className="w-5 h-5 text-[#A88968] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Formacao</h4>
                  <p className="text-xs text-gray-600 mt-1">Psicologia & Psicopedagogia</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#C9A88A]/5 to-[#A88968]/5 rounded-xl">
                <Users className="w-5 h-5 text-[#A88968] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Experiencia</h4>
                  <p className="text-xs text-gray-600 mt-1">200+ pacientes atendidos</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenWhatsApp}
              className="px-8 py-4 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              Conversar no WhatsApp
              <MessageCircle className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
