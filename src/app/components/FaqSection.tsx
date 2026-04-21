import { ArrowRight, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

type FaqSectionProps = {
  openFaq: number | null;
  onToggleFaq: (value: number | null) => void;
  onOpenWhatsApp: () => void;
};

const faqs = [
  {
    question: 'Como funciona a terapia online?',
    answer:
      'As sessoes sao realizadas por videochamada em plataformas seguras como Google Meet ou Zoom. Voce so precisa de um ambiente tranquilo, boa conexao com internet e um dispositivo (celular, tablet ou computador). A eficacia da terapia online e comprovada por diversos estudos cientificos.',
  },
  {
    question: 'Quanto tempo dura cada sessao?',
    answer:
      'Cada sessao tem duracao de 50 minutos, seguindo o padrao estabelecido pelo Conselho Federal de Psicologia. Este tempo e ideal para um trabalho terapeutico profundo e efetivo.',
  },
  {
    question: 'Com que frequencia preciso fazer terapia?',
    answer:
      'Geralmente recomendo sessoes semanais no inicio do processo terapeutico. Conforme voce evolui, podemos ajustar a frequencia de acordo com suas necessidades e objetivos. Cada caso e unico e sera personalizado.',
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer:
      'Os resultados variam de pessoa para pessoa. Algumas pessoas relatam melhorias ja nas primeiras sessoes, enquanto outras precisam de mais tempo. O importante e manter a regularidade e o comprometimento com o processo.',
  },
  {
    question: 'Aceita convenios ou planos de saude?',
    answer:
      'Trabalho como particular, mas forneco recibo para que voce possa solicitar reembolso junto ao seu plano de saude, conforme as politicas de cada operadora.',
  },
];

export default function FaqSection({ openFaq, onToggleFaq, onOpenWhatsApp }: FaqSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">Perguntas frequentes</h2>
          <p className="text-xl text-gray-600">Tire suas duvidas sobre o processo terapeutico</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#C9A88A] transition-colors relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A88A]/5 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
              />

              <button
                onClick={() => onToggleFaq(openFaq === index ? null : index)}
                className="w-full px-4 sm:px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors relative z-10"
              >
                <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0, scale: openFaq === index ? 1.2 : 1 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                >
                  <ArrowRight className="w-5 h-5 text-[#A88968] transform rotate-90 flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      className="px-4 sm:px-6 pb-5 text-gray-600 leading-relaxed text-sm sm:text-base"
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-gradient-to-br from-[#C9A88A]/10 to-[#A88968]/10 rounded-3xl"
        >
          <p className="text-gray-700 mb-6">Ainda tem duvidas? Fale comigo diretamente!</p>
          <button
            onClick={onOpenWhatsApp}
            className="px-8 py-4 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Tirar duvidas no WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}
