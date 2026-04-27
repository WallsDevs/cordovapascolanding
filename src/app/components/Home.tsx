import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { Scale, FileText, Users, Gavel, Shield, Briefcase, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';

// Componente para conteo animado
function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = parseInt(value.replace(/\D/g, ''));
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onAnimationComplete={() => setIsVisible(true)}
    >
      {value.includes('%') ? `${count}%` : value.includes('+') ? `+${count}` : count}
    </motion.div>
  );
}

const services = [
  {
    icon: Shield,
    title: 'Derecho Administrativo y Control Gubernamental',
    description: 'Soporte técnico-legal especializado en fiscalizaciones, auditorías y compliance regulatorio.',
  },
  {
    icon: Gavel,
    title: 'Defensa de Funcionarios Públicos',
    description: 'Representación y soporte legal integral en procedimientos sancionadores.',
  },
  {
    icon: Users,
    title: 'Derecho Laboral y Relaciones Colectivas',
    description: 'Asesoría jurídica laboral integral, negociación colectiva y litigio.',
  },
  {
    icon: Scale,
    title: 'Disputas, Arbitrajes y Litigios',
    description: 'Resolución estratégica de controversias contractuales y técnicas.',
  },
  {
    icon: FileText,
    title: 'Gestión Contractual y Compliance',
    description: 'Gestión integral del ciclo de vida contractual y cumplimiento normativo.',
  },
  {
    icon: Briefcase,
    title: 'Gestión Legal y Documental',
    description: 'Documentación estratégica, due diligence y gestión documental ISO.',
  },
];

const differentiators = [
  {
    title: 'Enfoque Integrado',
    description: 'Nuestros servicios interactúan y se potencian mutuamente bajo una sola gobernanza estratégica.',
  },
  {
    title: 'Profundidad Sectorial',
    description: 'Experiencia directa en energía, oil & gas, agroindustria, APPs y sector público.',
  },
  {
    title: 'Equipos Multidisciplinarios',
    description: 'Ingenieros, abogados y economistas garantizan una perspectiva integral en cada caso.',
  },
  {
    title: 'Experiencia Institucional',
    description: 'Nuestros socios han ocupado posiciones estratégicas en entidades del Estado.',
  },
  {
    title: 'Resultados Medibles',
    description: 'Cada intervención genera impacto cuantificable: reducción de riesgo y protección de intereses.',
  },
  {
    title: 'Confidencialidad Absoluta',
    description: 'Operamos bajo los más altos estándares de reserva, independencia y ética profesional.',
  },
];

const heroImages = [
  'https://images.unsplash.com/photo-1686676104932-3d7b6bbaef52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  'https://images.unsplash.com/photo-1574469373613-c3672c38bfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
];

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Cambio cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Hero Section - Enhanced & Fully Responsive with Image Slider */}
      <section className="relative h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden bg-[#1A1B29]">
        {/* Background Image Slider */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={heroImages[currentImageIndex]}
                alt="Background"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1B29]/90 via-[#1A1B29]/85 to-[#1A1B29]/80" />

          {/* Additional Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(#B32017 1px, transparent 1px), linear-gradient(90deg, #B32017 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Decorative Elements - Hidden on small screens */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-1/4 left-0 w-32 md:w-48 lg:w-64 h-1 bg-gradient-to-r from-transparent via-[#B32017] to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/3 right-0 w-48 md:w-64 lg:w-96 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-1/3 left-0 w-40 md:w-60 lg:w-80 h-1 bg-gradient-to-r from-transparent via-[#B32017] to-transparent"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4 flex justify-center"
            >
              <img
                src="/src/assets/logo.png"
                alt="Córdova & Pasco Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
              />
            </motion.div>

            {/* Main Heading with Stagger Animation */}
            <div className="mb-2 px-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-1"
              >
                Córdova & Pasco
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-white">Asociados</span>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-3 px-4"
            >
              <div className="inline-block max-w-full">
                <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-[#B32017] font-semibold mb-1.5">
                  Legal Partners
                </p>
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#B32017] to-transparent" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-3 max-w-3xl mx-auto font-light leading-snug px-4"
            >
              Estudio boutique especializado en asesoría jurídica de alta complejidad para el sector público y privado.
              Canal estratégico de <span className="text-white font-medium">Consultus Group</span>.
            </motion.p>

            {/* Sectors Pills - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center gap-1.5 px-4"
            >
              {['Energía', 'Oil & Gas', 'Agroindustria', 'APPs', 'Sector Público'].map((sector, index) => (
                <motion.span
                  key={sector}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="px-2 sm:px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 font-sans text-xs font-medium hover:bg-[#B32017]/20 hover:border-[#B32017] hover:text-white transition-all cursor-default"
                >
                  {sector}
                </motion.span>
              ))}
            </motion.div>


          </div>
        </div>

        {/* Slider Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20 hidden"
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 ${
                index === currentImageIndex
                  ? 'w-8 h-1.5 bg-[#B32017]'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
              } rounded-full`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </motion.div>

              </section>

      {/* About Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
                  alt="Professional Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1B29] mb-6">
                Acerca del Estudio
              </h2>

              <p className="font-sans text-lg text-[#2D2D3D] leading-relaxed mb-6 font-normal">
                Somos un estudio boutique de abogados con sede en Lima, Perú, especializado en brindar
                asesoría jurídica de alta complejidad en diversas materias legales.
              </p>

              <p className="font-sans text-lg text-[#2D2D3D] leading-relaxed mb-6 font-normal">
                Nuestro enfoque combina la rigurosidad técnica de los grandes estudios jurídicos con la
                cercanía, agilidad y compromiso personalizado que solo un estudio boutique puede ofrecer.
              </p>

              <p className="font-sans text-lg text-[#2D2D3D] leading-relaxed mb-8 font-normal">
                Operamos como <span className="font-semibold text-[#1A1B29]">canal estratégico de los servicios
                legales de Consultus Group</span>, combinando la profundidad analítica de una firma de
                consultoría de primer nivel con la solidez jurídica de un estudio legal especializado.
              </p>

              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 text-[#B32017] font-sans font-semibold hover:gap-4 transition-all"
              >
                Conocer más sobre nosotros
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-24 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1B29] mb-4">
              Nuestros Servicios
            </h2>
            <p className="font-sans text-lg text-[#2D2D3D] max-w-3xl mx-auto font-normal">
              Portafolio integral de seis prácticas legales especializadas, articuladas bajo una
              gobernanza estratégica única.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 border border-gray-200 p-8 hover:shadow-lg hover:border-[#B32017]/20 transition-all"
              >
                <div className="w-14 h-14 bg-[#B32017] flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="font-sans text-xl font-semibold text-[#1A1B29] mb-4">
                  {service.title}
                </h3>

                <p className="font-sans text-[#2D2D3D] leading-relaxed font-normal mb-6">
                  {service.description}
                </p>

                <Link
                  to="/servicios"
                  className="inline-flex items-center gap-2 text-[#B32017] font-sans font-semibold text-sm hover:gap-4 transition-all"
                >
                  Ver más
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#B32017] text-white font-sans font-semibold hover:bg-[#8B1810] transition-colors"
            >
              Ver Portafolio Completo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: '+25', label: 'Años de experiencia combinada' },
              { value: '+100', label: 'Casos gestionados en diversas materias' },
              { value: '100%', label: 'Compromiso con resultados' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="font-display text-5xl lg:text-6xl font-bold text-[#B32017] mb-3">
                  <AnimatedCounter value={metric.value} duration={2000} />
                </div>
                <p className="font-sans text-sm text-[#6B6B7B] uppercase tracking-wide font-medium">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1B29] mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="font-sans text-lg text-[#2D2D3D] max-w-3xl mx-auto font-normal">
              Diferenciadores que nos posicionan como la mejor opción para asesoría jurídica especializada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 border border-gray-200 p-8 hover:shadow-lg hover:border-[#B32017]/20 transition-all"
              >
                <div className="w-12 h-1 bg-[#B32017] mb-6" />
                <h3 className="font-sans text-xl font-semibold text-[#1A1B29] mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-[#2D2D3D] leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-[#1A1B29] border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Necesita Asesoría Especializada?
            </h2>
            <p className="font-sans text-xl text-gray-300 mb-10 font-light">
              Nuestro equipo está preparado para analizar su caso y ofrecerle soluciones
              jurídicas de excelencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#B32017] text-white font-sans font-semibold hover:bg-[#8B1810] transition-colors"
              >
                Solicitar Consulta
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:contacto@cp-asociados.pe"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent border-2 border-white text-white font-sans font-semibold hover:bg-white hover:text-[#1A1B29] transition-colors"
              >
                Enviar Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
