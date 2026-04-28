import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { Scale, FileText, Users, Gavel, Shield, Briefcase, ArrowRight, Search, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';

// Importar datos de abogados desde el componente Abogados
const teamMembers = [
  {
    id: 1,
    name: 'Omar E. Córdova Paredes',
    role: 'Socio Director',
    image: '/assets/Omar.jpeg',
    experience: '12+ años de experiencia',
    practiceAreas: ['Derecho Administrativo', 'Energía', 'Control Gubernamental'],
  },
  {
    id: 2,
    name: 'Jorge Pasco',
    role: 'Socio',
    image: '/assets/Jorge Pasco.jpeg',
    experience: '10+ años de experiencia',
    practiceAreas: ['Derecho Administrativo', 'Defensa de Funcionarios', 'Gestión Contractual'],
  },
  {
    id: 3,
    name: 'Alejandro Castillo',
    role: 'Socio',
    image: '/assets/Alejandro Castillo.jpeg',
    experience: '8+ años de experiencia en Arbitraje',
    practiceAreas: ['Arbitraje', 'Contratos', 'Resolución de Controversias'],
  },
  {
    id: 4,
    name: 'Diego Larico',
    role: 'Asociado Senior',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
    experience: '7+ años de experiencia en Derecho Corporativo',
    practiceAreas: ['Derecho Corporativo', 'M&A', 'Due Diligence'],
  },
  {
    id: 5,
    name: 'Mayra Ormea',
    role: 'Asociada Senior',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
    experience: '10+ años de experiencia en Derecho Laboral',
    practiceAreas: ['Derecho Laboral', 'Relaciones Laborales', 'Compliance Laboral'],
  },
];

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
                src="/assets/logo.png"
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
                <p className="font-kanit text-base sm:text-lg md:text-xl lg:text-2xl text-[#B32017] font-semibold mb-1.5">
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

      {/* Separador */}
      <div className="border-y border-gray-200"></div>

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

      {/* Separador */}
      <div className="border-y border-gray-200"></div>

      {/* Blog Preview Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1B29] mb-4">
              Blog Legal
            </h2>
            <p className="font-sans text-lg text-[#2D2D3D] max-w-3xl mx-auto font-normal">
              Análisis jurídico y perspectivas sobre las últimas tendencias regulatorias en el sector legal peruano.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Nuevas regulaciones en el sector energético peruano',
                excerpt: 'Análisis de las últimas disposiciones regulatorias que impactan el desarrollo de proyectos de energía renovable.',
                author: 'Dr. Carlos Córdova',
                date: '15 de abril, 2026',
                readTime: '5 min',
                category: 'Energía',
                image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
              },
              {
                title: 'Compliance laboral: Guía para empresas',
                excerpt: 'Best practices y consideraciones legales para mantener el cumplimiento normativo en relaciones laborales.',
                author: 'Dra. María Pasco',
                date: '10 de abril, 2026',
                readTime: '7 min',
                category: 'Laboral',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
              },
              {
                title: 'Arbitrajes comerciales: Tendencias recientes',
                excerpt: 'Evolución jurisprudencial en materia de arbitraje comercial y su aplicación en contratos complejos.',
                author: 'Dr. Luis Mendez',
                date: '5 de abril, 2026',
                readTime: '6 min',
                category: 'Arbitraje',
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
              }
            ].map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#B32017]/20 transition-all"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="inline-block px-3 py-1 bg-[#B32017]/10 text-[#B32017] font-sans text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-[#1A1B29] mb-3 leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-[#2D2D3D] leading-relaxed mb-4 font-normal text-sm">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-3">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Read More Link */}
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-[#B32017] font-sans font-semibold text-sm hover:gap-4 transition-all"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#1A1B29] text-white font-sans font-semibold hover:bg-[#B32017] transition-colors"
            >
              Ver todos los artículos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Separador */}
      <div className="border-y border-gray-200"></div>

      {/* Abogados Search Section */}
      <section className="py-20 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1B29] mb-4">
              Nuestro Equipo de Abogados
            </h2>
            <p className="font-sans text-lg text-[#2D2D3D] max-w-3xl mx-auto font-normal">
              Encuentre al profesional ideal para sus necesidades legales. Nuestro equipo combina 
              experiencia técnica con visión estratégica para ofrecer soluciones de excelencia.
            </p>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-200 mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Filter className="w-6 h-6 text-[#B32017]" />
              <h2 className="font-display text-2xl font-bold text-[#1A1B29]">
                Buscar Abogados
              </h2>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const searchTerm = e.target.search.value;
                // Redirigir a la página de abogados con el término de búsqueda
                window.location.href = `/abogados?search=${encodeURIComponent(searchTerm)}`;
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Search Input */}
                <div className="lg:col-span-1">
                  <label className="block font-sans text-sm font-medium text-[#1A1B29] mb-2">
                    Abogados
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="search"
                      placeholder="Nombre o cargo..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:border-[#B32017] focus:ring-1 focus:ring-[#B32017]"
                    />
                  </div>
                </div>

                {/* Practice Areas */}
                <div>
                  <label className="block font-sans text-sm font-medium text-[#1A1B29] mb-2">
                    Áreas de Práctica
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:border-[#B32017] focus:ring-1 focus:ring-[#B32017]"
                  >
                    <option>Todas</option>
                    <option>Derecho Administrativo</option>
                    <option>Arbitraje</option>
                    <option>Contratos</option>
                    <option>Derecho Corporativo</option>
                    <option>Derecho Laboral</option>
                    <option>Energía</option>
                    <option>Control Gubernamental</option>
                    <option>Defensa de Funcionarios</option>
                    <option>Gestión Contractual</option>
                    <option>Resolución de Controversias</option>
                    <option>M&A</option>
                    <option>Due Diligence</option>
                    <option>Relaciones Laborales</option>
                    <option>Compliance Laboral</option>
                  </select>
                </div>

                {/* Industries */}
                <div>
                  <label className="block font-sans text-sm font-medium text-[#1A1B29] mb-2">
                    Industrias
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:border-[#B32017] focus:ring-1 focus:ring-[#B32017]"
                  >
                    <option>Todas</option>
                    <option>Energía</option>
                    <option>Oil & Gas</option>
                    <option>Sector Público</option>
                    <option>Infraestructura</option>
                    <option>APPs</option>
                    <option>Construcción</option>
                    <option>Financiero</option>
                    <option>Corporativo</option>
                    <option>Startups</option>
                    <option>Retail</option>
                    <option>Manufactura</option>
                    <option>Servicios</option>
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label className="block font-sans text-sm font-medium text-[#1A1B29] mb-2">
                    Categoría
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:border-[#B32017] focus:ring-1 focus:ring-[#B32017]"
                  >
                    <option>Todos</option>
                    <option>Socios</option>
                    <option>Asociados</option>
                    <option>Asociadas</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <p className="font-sans text-sm text-gray-600">
                  Presione Buscar para ver resultados
                </p>
                <button
                  type="submit"
                  className="font-sans text-sm text-[#B32017] hover:text-[#8B1810] transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            </form>
          </motion.div>

          {/* Featured Lawyers Preview */}
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-[#1A1B29] mb-2">
              Abogados Destacados
            </h3>
            <p className="font-sans text-gray-600">
              Conozca a nuestros socios directores
            </p>
          </div>

          {/* Small Lawyer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {teamMembers.slice(0, 3).map((lawyer, index) => (
              <motion.div
                key={lawyer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#B32017]/20 transition-all"
              >
                <div className="flex items-start p-4">
                  {/* Small Image */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                    <ImageWithFallback
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-left">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 bg-[#B32017] text-white font-sans text-xs font-semibold rounded-full">
                        {lawyer.role}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-[#1A1B29] mb-1">
                      {lawyer.name}
                    </h4>
                    <p className="font-sans text-xs text-gray-600 mb-2">
                      {lawyer.experience}
                    </p>
                    {/* Practice Areas */}
                    <div className="flex flex-wrap gap-1">
                      {lawyer.practiceAreas.slice(0, 2).map((area, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#B32017]/10 text-[#B32017] font-sans text-xs rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link
              to="/abogados"
              className="inline-flex items-center justify-center gap-2 px-12 py-4 bg-white border-2 border-[#B32017] text-[#B32017] font-sans font-semibold hover:bg-[#B32017] hover:text-white transition-colors"
            >
              Ver Todos los Abogados
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Separador */}
      <div className="border-y border-gray-200"></div>

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
