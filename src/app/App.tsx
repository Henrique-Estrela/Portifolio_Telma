import { useState, useEffect, useMemo } from 'react';
import {
  MessageCircle, Heart, Brain, Users, Sparkles,
  CheckCircle, Phone, Mail, Instagram, Quote,
  Award, Clock, Star, ArrowRight, Menu, X,
  Lightbulb, Shield, Target, TrendingUp, Calendar
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import heroImage from '../imports/image-4.png';
import aboutImage from '../imports/image-5.png';
import photo3 from '../imports/image-3.png';
import photo4 from '../imports/image-4.png';
import photo5 from '../imports/image-5.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = "5511987654321";
  const whatsappMessage = "Olá Telma! Gostaria de agendar uma sessão de terapia.";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const services = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: "Psicoterapia Individual",
      subtitle: "Autoconhecimento e equilíbrio emocional",
      description: "Trabalho terapêutico focado em ansiedade, depressão, autoestima e desenvolvimento pessoal através de técnicas baseadas em evidências.",
      benefits: ["Redução de ansiedade", "Autoconhecimento profundo", "Gestão emocional"],
      color: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
      iconBg: "bg-gradient-to-br from-violet-500 to-fuchsia-500"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Terapia de Casal",
      subtitle: "Fortalecendo vínculos afetivos",
      description: "Atendimento especializado para casais que desejam melhorar a comunicação, resolver conflitos e fortalecer o relacionamento.",
      benefits: ["Comunicação assertiva", "Resolução de conflitos", "Reconexão emocional"],
      color: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
      iconBg: "bg-gradient-to-br from-blue-500 to-teal-500"
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Psicopedagogia",
      subtitle: "Potencializando o aprendizado",
      description: "Avaliação e intervenção em dificuldades de aprendizagem, leitura, escrita e concentração em crianças e adolescentes.",
      benefits: ["Melhora no desempenho escolar", "Estratégias de aprendizagem", "Aumento da confiança"],
      color: "from-amber-500/10 via-orange-500/10 to-rose-500/10",
      iconBg: "bg-gradient-to-br from-amber-500 to-rose-500"
    }
  ];

  const processSteps = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      number: "01",
      title: "Entre em contato",
      description: "Envie uma mensagem pelo WhatsApp para agendar sua primeira sessão"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      number: "02",
      title: "Agendamento personalizado",
      description: "Escolhemos juntos o melhor horário que se encaixa na sua rotina"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      number: "03",
      title: "Início da jornada",
      description: "Começamos o processo terapêutico focado em seus objetivos"
    }
  ];

  const differentials = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Sigilo absoluto",
      text: "Atendimento seguro e ético"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Plano claro",
      text: "Foco em objetivos terapêuticos"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Evolução real",
      text: "Método baseado em evidências"
    }
  ];

  const heroNumbers = [
    { value: "200+", label: "Pacientes atendidos" },
    { value: "50 min", label: "Por sessão" },
    { value: "5.0", label: "Avaliação média" }
  ];

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

  const testimonials = [
    {
      name: "Amanda Silva",
      role: "Executiva",
      text: "A terapia com a Telma transformou completamente minha relação com a ansiedade. Hoje consigo lidar muito melhor com os desafios do dia a dia e me sinto muito mais equilibrada emocionalmente.",
      rating: 5,
      image: "AS"
    },
    {
      name: "Ricardo Santos",
      role: "Empresário",
      text: "As sessões de terapia de casal salvaram nosso casamento. A Dra. Telma nos ajudou a reconectar e construir uma comunicação muito mais saudável. Somos extremamente gratos!",
      rating: 5,
      image: "RS"
    },
    {
      name: "Patricia Lima",
      role: "Professora",
      text: "O acompanhamento psicopedagógico do meu filho foi excepcional. Ele evoluiu muito na escola e voltou a ter prazer em aprender. Profissional extremamente competente!",
      rating: 5,
      image: "PL"
    }
  ];

  const faqs = [
    {
      question: "Como funciona a terapia online?",
      answer: "As sessões são realizadas por videochamada em plataformas seguras como Google Meet ou Zoom. Você só precisa de um ambiente tranquilo, boa conexão com internet e um dispositivo (celular, tablet ou computador). A eficácia da terapia online é comprovada por diversos estudos científicos."
    },
    {
      question: "Quanto tempo dura cada sessão?",
      answer: "Cada sessão tem duração de 50 minutos, seguindo o padrão estabelecido pelo Conselho Federal de Psicologia. Este tempo é ideal para um trabalho terapêutico profundo e efetivo."
    },
    {
      question: "Com que frequência preciso fazer terapia?",
      answer: "Geralmente recomendo sessões semanais no início do processo terapêutico. Conforme você evolui, podemos ajustar a frequência de acordo com suas necessidades e objetivos. Cada caso é único e será personalizado."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os resultados variam de pessoa para pessoa. Algumas pessoas relatam melhorias já nas primeiras sessões, enquanto outras precisam de mais tempo. O importante é manter a regularidade e o comprometimento com o processo."
    },
    {
      question: "Aceita convênios ou planos de saúde?",
      answer: "Trabalho como particular, mas forneço recibo para que você possa solicitar reembolso junto ao seu plano de saúde, conforme as políticas de cada operadora."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#FAF9F6] via-white to-[#F5F3EE]">

      {/* Header Premium */}
      <motion.header 
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-sm z-50 border-b border-[#E8DCC4]/20"
      >
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Sofisticado */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-[#C9A88A] to-[#A88968] rounded-2xl flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg sm:text-xl">ψ</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-serif font-bold text-gray-900">Telma Lacerda</h1>
                <p className="text-[10px] sm:text-xs text-[#A88968] tracking-wide">Psicóloga & Psicopedagoga</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="text-sm text-gray-700 hover:text-[#A88968] transition-colors font-medium">Serviços</a>
              <a href="#sobre" className="text-sm text-gray-700 hover:text-[#A88968] transition-colors font-medium">Sobre</a>
              <a href="#depoimentos" className="text-sm text-gray-700 hover:text-[#A88968] transition-colors font-medium">Depoimentos</a>
              <button
                onClick={openWhatsApp}
                className="px-6 py-2.5 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Agende sua sessão
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 py-2">Serviços</a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 py-2">Sobre</a>
              <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 py-2">Depoimentos</a>
              <button
                onClick={openWhatsApp}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full font-semibold shadow-lg"
              >
                Agende sua sessão
              </button>
            </div>
          )}
        </nav>
      </motion.header>

      {/* Hero Section - Estilo Sofisticado */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">

        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Conteúdo Hero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 space-y-8"
            >
              {/* Badge Premium */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C9A88A]/10 to-[#A88968]/10 border border-[#C9A88A]/20 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-[#A88968]" />
                <span className="text-sm font-medium text-[#A88968]">Atendimento online personalizado</span>
              </motion.div>

              {/* Título Principal */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                  Terapia online para viver com{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#A88968]">clareza, calma e direção</span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="absolute bottom-1 sm:bottom-2 left-0 h-2 sm:h-3 bg-[#C9A88A]/20 -z-0"
                    />
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Psicoterapia com abordagem humanizada e objetiva para ansiedade,
                  relacionamentos e desenvolvimento emocional.
                </p>
              </div>

              {/* Highlights curtos e sofisticados */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {differentials.map((diff, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.12 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="rounded-2xl border border-[#C9A88A]/20 bg-white/80 backdrop-blur-sm p-4"
                  >
                    <div className="flex items-center gap-2 mb-2 text-[#A88968]">
                      <motion.div
                        className="bg-[#C9A88A]/10 p-2 rounded-lg"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 2 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        {diff.icon}
                      </motion.div>
                      <p className="font-semibold text-sm text-gray-900">{diff.title}</p>
                    </div>
                    <p className="text-xs text-gray-600">{diff.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={openWhatsApp}
                  className="px-8 py-4 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar primeira sessão
                </button>

                <a
                  href="#servicos"
                  className="px-8 py-4 border-2 border-[#C9A88A]/30 text-[#A88968] rounded-full font-semibold hover:bg-[#C9A88A]/5 transition-all flex items-center justify-center gap-2"
                >
                  Conhecer serviços
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Métricas rápidas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {heroNumbers.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.12 }}
                    className="rounded-xl bg-white/70 border border-gray-200 px-4 py-3"
                  >
                    <p className="text-xl font-bold text-gray-900">{item.value}</p>
                    <p className="text-xs text-gray-600">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Imagem Hero */}
            <div className="order-1 lg:order-2 relative">
              {/* Elementos decorativos sutis */}
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-[#C9A88A]/10 to-[#A88968]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-[#A88968]/10 to-[#C9A88A]/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <img
                  src={heroImage}
                  alt="Telma Lacerda - Psicóloga"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />

                {/* Card de registro */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 max-w-[220px] border border-[#E8DCC4]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C9A88A] to-[#A88968] rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">CRP 12345-6</p>
                      <p className="text-xs text-gray-600">Registro ativo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios da Terapia - Layout Assimétrico */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#F5F3EE] to-white relative overflow-hidden">
        {/* Padrão decorativo */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#A88968" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="#A88968" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="#A88968" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
              Benefícios da terapia
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Um processo terapêutico estruturado traz transformações profundas e duradouras 
              para sua vida pessoal, profissional e relacional.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Autoconhecimento profundo",
                description: "Aprenda a identificar padrões de comportamento, compreender suas emoções e desenvolver uma relação mais saudável consigo mesmo."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Gestão da ansiedade",
                description: "Desenvolva ferramentas práticas para reconhecer e controlar sintomas de ansiedade no dia a dia."
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Relacionamentos saudáveis",
                description: "Melhore sua comunicação e construa vínculos mais autênticos e satisfatórios."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Crescimento pessoal",
                description: "Alcance seus objetivos pessoais e profissionais com mais clareza e confiança."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
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
                  {/* Gradiente animado de fundo */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#C9A88A]/5 via-[#A88968]/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />

                  {/* Partículas decorativas */}
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#C9A88A] rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        top: `${30 + i * 40}%`,
                        right: `${10 + i * 15}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}

                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[#C9A88A]/10 to-[#A88968]/10 rounded-xl flex items-center justify-center text-[#A88968] flex-shrink-0 relative z-10"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      background: "linear-gradient(135deg, #C9A88A 0%, #A88968 100%)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {benefit.icon}
                    </motion.div>
                  </motion.div>

                  <div className="relative z-10">
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-[#A88968] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços - Cards Premium */}
      <section id="servicos" className="py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
              Como posso te ajudar
            </h2>
            <p className="text-xl text-gray-600">
              Atendimento especializado e personalizado para suas necessidades
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Card com efeito glassmorphism */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-xl`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 100 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Brilho animado */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 rounded-3xl"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative bg-white border border-gray-100 hover:border-[#C9A88A] rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                  {/* Partículas decorativas */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#C9A88A] rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        top: `${20 + i * 30}%`,
                        right: `${10 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}

                  {/* Ícone com animação */}
                  <motion.div
                    className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center text-white mb-6 relative`}
                    whileHover={{
                      scale: 1.15,
                      rotate: 360,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Anel pulsante */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-white/30"
                      animate={{
                        scale: [1, 1.3],
                        opacity: [0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  </motion.div>

                  {/* Conteúdo */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#A88968] mb-4 font-medium">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Benefícios */}
                    <div className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#A88968]" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={openWhatsApp}
                    className="w-full py-3 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    Agendar sessão
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona - Timeline */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FAF9F6] to-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
              Como vai funcionar
            </h2>
            <p className="text-xl text-gray-600">
              Um processo simples para começar sua jornada de transformação
            </p>
          </motion.div>

          <div className="relative">
            {/* Linha conectora animada */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C9A88A] via-[#A88968] to-[#C9A88A]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  {/* Número do passo com animação */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.6, 0.4],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-[#C9A88A] to-[#A88968] rounded-full blur-lg"
                      />

                      <motion.div
                        className="relative w-20 h-20 bg-white border-4 border-[#C9A88A] rounded-full flex items-center justify-center"
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          borderColor: '#A88968',
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-2xl font-bold text-[#A88968] font-serif"
                        >
                          {step.number}
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Card com animações */}
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg text-center relative overflow-hidden group"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 25px 50px -12px rgba(201, 168, 138, 0.25)",
                    }}
                  >
                    {/* Gradiente de fundo animado */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#C9A88A]/5 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.5 }}
                    />

                    {/* Brilho animado */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent"
                      animate={{
                        x: ['-200%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-[#C9A88A]/10 to-[#A88968]/10 rounded-xl flex items-center justify-center text-[#A88968] mx-auto mb-4 relative z-10"
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      {step.icon}
                    </motion.div>

                    <h3 className="font-bold text-gray-900 mb-3 text-lg relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={openWhatsApp}
              className="px-8 py-4 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Começar agora
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sobre - Layout Moderno */}
      <section id="sobre" className="py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-[#C9A88A]/10 to-transparent rounded-full blur-3xl"
        />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagem com moldura super animada */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              {/* Moldura decorativa animada */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 bg-gradient-to-br from-[#C9A88A]/20 to-[#A88968]/20 rounded-3xl"
              />

              {/* Badge de anos de experiência */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-white to-[#FAF9F6] rounded-full flex items-center justify-center shadow-xl border-4 border-[#E8DCC4] z-10"
              >
                <div className="text-center">
                  <motion.p
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-3xl font-bold text-[#A88968]"
                  >
                    10+
                  </motion.p>
                  <p className="text-xs text-gray-600 font-semibold">anos</p>
                </div>
              </motion.div>

              {/* Círculos decorativos flutuantes */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-[#C9A88A] rounded-full"
                  style={{
                    top: `${30 + i * 20}%`,
                    right: `${-5 + i * 2}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <motion.img
                src={photo5}
                alt="Dra. Telma Lacerda em seu consultório"
                className="relative rounded-3xl shadow-2xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Conteúdo */}
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

              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
                Olá, sou a Telma Lacerda
              </h2>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                  <strong className="text-gray-900">Psicóloga (CRP 12345-6)</strong> e <strong className="text-gray-900">Psicopedagoga</strong> com 
                  mais de 10 anos dedicados a ajudar pessoas a transformarem suas vidas através 
                  de um processo terapêutico acolhedor e efetivo.
                </p>
                <p>
                  Minha abordagem combina técnicas da <strong className="text-gray-900">Terapia Cognitivo-Comportamental</strong>, 
                  <strong className="text-gray-900"> Terapia Humanista</strong> e <strong className="text-gray-900">Psicopedagogia Clínica</strong>, 
                  sempre respeitando a individualidade e o tempo de cada pessoa.
                </p>
                <p>
                  Acredito que a terapia é um espaço seguro de acolhimento, escuta e transformação. 
                  Trabalho com amor, dedicação e compromisso ético para que você alcance seus objetivos.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#C9A88A]/5 to-[#A88968]/5 rounded-xl">
                  <Award className="w-5 h-5 text-[#A88968] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Formação</h4>
                    <p className="text-xs text-gray-600 mt-1">Psicologia & Psicopedagogia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#C9A88A]/5 to-[#A88968]/5 rounded-xl">
                  <Users className="w-5 h-5 text-[#A88968] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Experiência</h4>
                    <p className="text-xs text-gray-600 mt-1">200+ pacientes atendidos</p>
                  </div>
                </div>
              </div>

              <button
                onClick={openWhatsApp}
                className="px-8 py-4 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
              >
                Conversar no WhatsApp
                <MessageCircle className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos - Nova Seção */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-white to-[#FAF9F6]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Conheça meu trabalho
            </h2>
            <p className="text-lg text-gray-600">
              Dedicação e amor em cada atendimento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Foto 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group overflow-hidden rounded-3xl shadow-xl"
            >
              {/* Borda decorativa animada */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-4 border-[#C9A88A]/0 group-hover:border-[#C9A88A]/50"
                transition={{ duration: 0.3 }}
              />

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={photo3}
                  alt="Telma com livro sobre desenvolvimento infantil"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </motion.div>

              {/* Partículas decorativas */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-80"
                  style={{
                    top: `${20 + i * 25}%`,
                    right: `${10 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6"
              >
                <div className="text-white">
                  <p className="font-semibold text-base sm:text-lg mb-1">Psicopedagogia</p>
                  <p className="text-xs sm:text-sm opacity-90">Especialização em desenvolvimento infantil</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Foto 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="relative group overflow-hidden rounded-3xl shadow-xl"
            >
              {/* Borda decorativa animada */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-4 border-[#C9A88A]/0 group-hover:border-[#C9A88A]/50"
                transition={{ duration: 0.3 }}
              />

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <img
                  src={photo4}
                  alt="Telma em sessão terapêutica"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </motion.div>

              {/* Partículas decorativas */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-80"
                  style={{
                    top: `${25 + i * 25}%`,
                    left: `${10 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6"
              >
                <div className="text-white">
                  <p className="font-semibold text-base sm:text-lg mb-1">Atendimento Acolhedor</p>
                  <p className="text-xs sm:text-sm opacity-90">Ambiente seguro e confortável</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos - Cards Premium */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FAF9F6] to-white relative overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
              Histórias de transformação
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que meus pacientes têm a dizer sobre o processo terapêutico
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100 hover:border-[#C9A88A] relative overflow-hidden">
                  {/* Gradiente de fundo animado */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#C9A88A]/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />

                  {/* Brilho diagonal */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                      y: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Quote Icon animado */}
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Quote className="w-10 h-10 text-[#C9A88A] mb-4" />
                    </motion.div>

                    {/* Rating com animação */}
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

                    {/* Texto */}
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                      "{testimonial.text}"
                    </p>

                    {/* Autor */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <motion.div
                        className="w-14 h-14 bg-gradient-to-br from-[#C9A88A] to-[#A88968] rounded-full flex items-center justify-center text-white font-bold text-lg"
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
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

      {/* FAQ - Accordion Premium */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre o processo terapêutico
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#C9A88A] transition-colors relative group"
              >
                {/* Brilho animado */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A88A]/5 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                />

                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors relative z-10"
                >
                  <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">{faq.question}</span>
                  <motion.div
                    animate={{
                      rotate: openFaq === index ? 180 : 0,
                      scale: openFaq === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3, type: "spring" }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#A88968] transform rotate-90 flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
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
            <p className="text-gray-700 mb-6">Ainda tem dúvidas? Fale comigo diretamente!</p>
            <button
              onClick={openWhatsApp}
              className="px-8 py-4 bg-gradient-to-r from-[#C9A88A] to-[#A88968] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Tirar dúvidas no WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Final - Super Animado */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Gradiente animado de fundo */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#C9A88A] via-[#A88968] to-[#C9A88A]"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />

        {/* Padrões decorativos animados */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="white"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>

        {/* Partículas flutuantes */}
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-sm font-medium text-white">Oferta especial</span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Pronto para transformar sua vida?
            </motion.h2>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Agende sua primeira sessão e comece sua jornada de autoconhecimento,
              crescimento e bem-estar emocional hoje mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                onClick={openWhatsApp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#A88968] rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3 overflow-hidden group"
              >
                {/* Brilho animado */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A88A]/30 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 relative z-10" />
                </motion.div>
                <span className="relative z-10">Agendar Minha Primeira Sessão</span>
              </motion.button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80 text-sm">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <CheckCircle className="w-5 h-5" />
                <span>Primeira sessão com desconto</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <Shield className="w-5 h-5" />
                <span>100% online e seguro</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo e descrição */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9A88A] to-[#A88968] rounded-2xl flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-lg">ψ</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl">Telma Lacerda</h3>
                  <p className="text-sm text-gray-400">Psicóloga & Psicopedagoga</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md text-sm sm:text-base">
                Transformando vidas através de um processo terapêutico humanizado,
                acolhedor e baseado em evidências científicas.
              </p>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-semibold mb-4 text-base sm:text-lg">Contato</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (11) 98765-4321
                </a>
                <a
                  href="mailto:contato@telmalacerda.psi.br"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@telmalacerda.psi.br
                </a>
                <a
                  href="https://instagram.com/telmalacerda"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @telmalacerda
                </a>
              </div>
            </div>

            {/* Horários */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Atendimento</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Segunda a Sexta: 9h - 20h
                </p>
                <p className="ml-6">Sábado: 9h - 14h</p>
                <p className="mt-4 text-xs text-gray-500">CRP: 12345-6</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Telma Lacerda. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-white border-2 border-[#C9A88A] text-[#A88968] rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center"
        >
          <ArrowRight className="w-5 h-5 -rotate-90" />
        </button>
      )}

      {/* WhatsApp Flutuante - Simples e Elegante */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />

        {/* Tooltip sutil */}
        <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale comigo
        </span>
      </button>
    </div>
  );
}
