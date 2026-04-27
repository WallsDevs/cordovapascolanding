import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Building2, Users, Target, GraduationCap, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      const currentValue = Math.floor(progress * numericValue);
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [numericValue, duration]);

  return (
    <span>{value.includes('%') ? `${displayValue}%` : value.includes('+') ? `+${displayValue}` : displayValue}</span>
  );
};

const teamMembers = [
  {
    name: 'Omar E. Córdova Paredes',
    role: 'Socio Director',
    image: '/src/assets/Omar.jpeg',
    experience: '12+ años de experiencia',
    education: [
      'Maestría en Relaciones Industriales',
      'Maestría en Gestión y Políticas Públicas',
      'Docente Universitario en UPC',
    ],
    highlights: [
      'Experiencia en OSINERGMIN',
      'Especialista en Derecho Administrativo',
      'Consultor en proyectos de energía',
    ],
  },
  {
    name: 'Jorge Pasco',
    role: 'Socio',
    image: '/src/assets/Jorge Pasco.jpeg',
    experience: '10+ años de experiencia',
    education: [
      'Abogado por la Pontificia Universidad Católica del Perú',
      'Maestría en Derecho de la Empresa',
      'Especialización en Contrataciones del Estado',
    ],
    highlights: [
      'Experiencia en el sector público',
      'Especialista en defensa de funcionarios',
      'Consultor en gestión contractual',
    ],
  },
  {
    name: 'Alejandro Castillo',
    role: 'Socio',
    image: '/src/assets/Alejandro Castillo.jpeg',
    experience: '8+ años de experiencia en Arbitraje',
    education: [
      'Abogado por la Universidad Nacional Mayor de San Marcos',
      'Maestría en Derecho Arbitral',
      'Especialización en Contratos Internacionales',
    ],
    highlights: [
      'Árbitro en el Centro de Arbitraje de la Cámara de Lima',
      'Experiencia en arbitrajes comerciales y de construcción',
      'Especialista en resolución de controversias contractuales',
      'Consultor en estructuras contractuales complejas',
    ],
  },
  {
    name: 'Diego Larico',
    role: 'Asociado Senior',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
    experience: '7+ años de experiencia en Derecho Corporativo',
    education: [
      'Abogado por la Universidad del Pacífico',
      'Maestría en Derecho de los Negocios',
      'Diplomado en Fusiones y Adquisiciones',
    ],
    highlights: [
      'Experiencia en Miranda & Amado, Philippi Prietocarrizana',
      'Especialista en reestructuraciones corporativas',
      'Experto en derecho societario y gubernamental',
      'Asesor en transacciones M&A y due diligence',
    ],
  },
  {
    name: 'Mayra Ormea',
    role: 'Asociada Senior',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
    experience: '10+ años de experiencia en Derecho Laboral',
    education: [
      'Abogada por la Universidad de Lima (magna cum laude)',
      'Especialización en Derecho Laboral Corporativo',
    ],
    highlights: [
      'Experiencia en Cornejo & Santiváñez, PwC Perú',
      'Trayectoria en Facto Litigios & Compliance',
      'Experta en EBS Abogados',
      'Asesoría laboral corporativa integral',
    ],
  },
];

const values = [
  {
    icon: Award,
    title: 'Excelencia Técnica',
    description: 'Compromiso inquebrantable con el rigor académico y la actualización permanente en tendencias jurídicas y normativas.',
  },
  {
    icon: Target,
    title: 'Enfoque Estratégico',
    description: 'Cada caso es abordado con visión de negocio, analizando aspectos legales, organizacionales y financieros.',
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Nuestros socios participan directamente en cada asunto, asegurando un servicio boutique de primer nivel.',
  },
  {
    icon: Building2,
    title: 'Integridad Institucional',
    description: 'Ética profesional y transparencia como pilares fundamentales de nuestra relación con clientes.',
  },
];

export function Nosotros() {
  const [currentPartner, setCurrentPartner] = useState(0);

  const nextPartner = () => {
    setCurrentPartner((prev) => (prev + 1) % teamMembers.length);
  };

  const prevPartner = () => {
    setCurrentPartner((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextPartner();
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#1A1B29]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1574469373613-c3672c38bfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Modern Office"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1B29]/95 to-[#1A1B29]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Nuestro Equipo
            </h1>
            <p className="font-sans text-lg text-gray-300 max-w-3xl mx-auto font-normal">
              Liderazgo con trayectoria comprobada en instituciones públicas y privadas de primer nivel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="py-20 lg:py-24 bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Carrusel del Equipo */}
          <div className="relative max-w-5xl mx-auto">
            {/* Contenedor del carrusel */}
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentPartner * 100}%)` }}>
                {teamMembers.map((member, index) => (
                  <div key={member.name} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Imagen */}
                        <div className="relative">
                          <div className="aspect-[4/5] overflow-hidden">
                            <ImageWithFallback
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Badge de rol */}
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#B32017] text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                              {member.role}
                            </span>
                          </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <h3 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1B29] mb-3">
                            {member.name}
                          </h3>
                          
                          <p className="font-sans text-lg text-[#2D2D3D] font-medium mb-8">
                            {member.experience}
                          </p>

                          <div className="space-y-6">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <GraduationCap className="w-5 h-5 text-[#B32017]" />
                                <h4 className="font-sans text-sm font-bold text-[#1A1B29] uppercase tracking-wide">
                                  Formación Académica
                                </h4>
                              </div>
                              <ul className="space-y-2">
                                {member.education.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-3 font-sans text-[#2D2D3D] font-normal">
                                    <span className="inline-block w-1.5 h-1.5 bg-[#B32017] mt-2 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <Briefcase className="w-5 h-5 text-[#B32017]" />
                                <h4 className="font-sans text-sm font-bold text-[#1A1B29] uppercase tracking-wide">
                                  Experiencia Destacada
                                </h4>
                              </div>
                              <ul className="space-y-2">
                                {member.highlights.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-3 font-sans text-[#2D2D3D] font-normal">
                                    <span className="inline-block w-1.5 h-1.5 bg-[#B32017] mt-2 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles del carrusel */}
            <button
              onClick={prevPartner}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl hover:border-[#B32017]/20 transition-all duration-300 z-10"
              aria-label="Anterior miembro"
            >
              <ChevronLeft className="w-6 h-6 text-[#1A1B29]" />
            </button>

            <button
              onClick={nextPartner}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl hover:border-[#B32017]/20 transition-all duration-300 z-10"
              aria-label="Siguiente miembro"
            >
              <ChevronRight className="w-6 h-6 text-[#1A1B29]" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {teamMembers.map((member, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPartner(index)}
                  className={`group relative transition-all duration-500 ${
                    currentPartner === index 
                      ? 'scale-125' 
                      : 'hover:scale-110'
                  }`}
                  aria-label={`Ir al ${member.name}`}
                >
                  <div className={`relative transition-all duration-500 ${
                    currentPartner === index 
                      ? 'w-4 h-4 bg-[#B32017] rounded-full shadow-lg shadow-[#B32017]/30 scale-125' 
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                  }`}>
                    {currentPartner === index && (
                      <>
                        <div className="absolute inset-0 bg-[#B32017] rounded-full animate-ping opacity-20"></div>
                        <div className="absolute inset-0 bg-[#B32017] rounded-full"></div>
                        <div className="absolute inset-1 bg-white rounded-full"></div>
                        <div className="absolute inset-2 bg-[#B32017] rounded-full"></div>
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1B29] mb-8">
                Nuestra Misión
              </h2>

              <div className="space-y-6 font-sans text-lg text-[#2D2D3D] font-normal leading-relaxed">
                <p>
                  Somos un estudio boutique de abogados con sede en Lima, Perú, especializado en brindar
                  asesoría jurídica de alta complejidad en diversas materias legales.
                </p>

                <p>
                  Nuestro enfoque combina la rigurosidad técnica de los grandes estudios jurídicos con la
                  cercanía, agilidad y compromiso personalizado que solo un estudio boutique puede ofrecer.
                </p>

                <p className="font-medium text-[#1A1B29] text-xl">
                  Ofrecer soluciones jurídicas de excelencia, con un enfoque estratégico y orientado a la
                  protección efectiva de los derechos e intereses de nuestros clientes, dentro de un marco de
                  absoluta reserva, confidencialidad y ética profesional.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 lg:py-24 bg-[#F8F9FA] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1B29] mb-4">
              Nuestros Diferenciadores
            </h2>
            <p className="font-sans text-lg text-[#2D2D3D] max-w-3xl mx-auto font-normal">
              Los valores que nos distinguen y definen nuestro compromiso con la excelencia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excelencia Técnica',
                description: 'Compromiso inquebrantable con el rigor académico y la actualización permanente en tendencias jurídicas y normativas.',
              },
              {
                icon: Target,
                title: 'Enfoque Estratégico',
                description: 'Cada caso es abordado con visión de negocio, analizando aspectos legales, organizacionales y financieros.',
              },
              {
                icon: Users,
                title: 'Atención Personalizada',
                description: 'Nuestros socios participan directamente en cada asunto, asegurando un servicio boutique de primer nivel.',
              },
              {
                icon: Building2,
                title: 'Integridad Institucional',
                description: 'Ética profesional y transparencia como pilares fundamentales de nuestra relación con clientes.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 border border-gray-200 p-8 text-center hover:shadow-lg hover:border-[#B32017]/20 transition-all"
              >
                <div className="w-16 h-16 bg-[#B32017] mx-auto mb-6 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

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

      {/* Metrics */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1B29] mb-4">
              Nuestros Logros
            </h2>
            <p className="font-sans text-lg text-[#2D2D3D] max-w-3xl mx-auto font-normal">
              Números que reflejan nuestro compromiso y trayectoria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
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
                className="bg-gray-50 border border-gray-200 p-8 text-center hover:shadow-lg hover:border-[#B32017]/20 transition-all"
              >
                <div className="font-display text-5xl font-bold text-[#B32017] mb-3">
                  <AnimatedCounter value={metric.value} />
                </div>
                <p className="font-sans text-sm text-[#1A1B29] uppercase tracking-wide font-medium">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliance */}
      <section className="py-20 lg:py-24 bg-[#F8F9FA] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 lg:p-12 border-l-4 border-[#B32017]"
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-[#B32017]" />
              <h3 className="font-sans text-sm font-bold text-[#B32017] uppercase tracking-wider">
                Alianza Estratégica
              </h3>
            </div>

            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1B29] mb-6">
              Canal Estratégico de Consultus Group
            </h2>

            <div className="space-y-4 font-sans text-lg text-[#2D2D3D] font-normal leading-relaxed">
              <p>
                Operamos como <span className="font-semibold text-[#1A1B29]">canal estratégico de los servicios
                legales de Consultus Group</span>, combinando la profundidad analítica de una firma de consultoría
                de primer nivel con la solidez jurídica de un estudio legal especializado.
              </p>

              <p>
                Esta alianza nos permite integrar la experiencia de ingenieros especializados en sectores clave
                como energía, hidrocarburos, agroindustria e infraestructura. <span className="font-semibold text-[#1A1B29]">Cada
                caso es atendido directamente por nuestros socios</span>, garantizando un servicio boutique con
                respaldo multidisciplinario de primer nivel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1A1B29] mb-4">
              Nuestros Valores
            </h2>
            <p className="font-sans text-lg text-[#2D2D3D] max-w-3xl mx-auto font-normal">
              Principios que guían cada decisión y cada relación que construimos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 border border-gray-200 p-8 text-center hover:shadow-lg hover:border-[#B32017]/20 transition-all"
              >
                <div className="w-14 h-14 bg-[#B32017] flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="font-sans text-lg font-semibold text-[#1A1B29] mb-4">
                  {value.title}
                </h3>

                <p className="font-sans text-sm text-[#2D2D3D] leading-relaxed font-normal">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
