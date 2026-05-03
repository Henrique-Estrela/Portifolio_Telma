import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

type FloatingButtonsProps = {
  showBackToTop: boolean;
  onScrollToTop: () => void;
  onOpenWhatsApp: () => void;
};

export default function FloatingButtons({ showBackToTop, onScrollToTop, onOpenWhatsApp }: FloatingButtonsProps) {
  return (
    <>
      {showBackToTop && (
        <button
          onClick={onScrollToTop}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-white border-2 border-[#C9A88A] text-[#A88968] rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center"
        >
          <ArrowRight className="w-5 h-5 -rotate-90" />
        </button>
      )}

      <button
        onClick={onOpenWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#f8a386] to-[#ef7f87] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <motion.div
          animate={{ opacity: [1, 1, 1, 0.7, 1], scale: [1, 1, 1, 0.97, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.82, 0.9, 0.95, 1] }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.div>
        <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale comigo
        </span>
      </button>
    </>
  );
}
