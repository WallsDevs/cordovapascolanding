import { motion } from 'motion/react';
import { Zap, Droplet, Wheat, Building } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

const sectors = [
  {
    icon: Zap,
    title: 'Energía',
    subtitle: 'Generación, Transmisión y Distribución',
    description: 'Asesoría legal especializada para proyectos de generación eléctrica, líneas de transmisión y sistemas de distribución.',
    services: [
      'Contratos de suministro de energía (PPA)',
      'Concesiones eléctricas y autorizaciones',
      'Aspectos regulatorios ante OSINERGMIN',
      'Proyectos de energías renovables',
      'Servidumbres y derecho de vía',
      'Resolución de controversias en energía',
    ],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
  },
  {
    icon: Droplet,
    title: 'Oil & Gas',
    subtitle: 'Hidrocarburos y Petroquímica',
    description: 'Experiencia comprobada en la industria de hidrocarburos, desde exploración hasta distribución.',
    services: [
      'Contratos upstream y downstream',
      'Licencias y autorizaciones sectoriales',
      'Normativa ambiental y seguridad',
      'Contratos EPC para plantas de procesamiento',
      'Arbitrajes en proyectos petroleros',
      'Gestión de pasivos ambientales',
    ],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
  },
  {
    icon: Wheat,
    title: 'Agroindustria',
    subtitle: 'Producción y Agronegocios',
    description: 'Soporte jurídico integral para empresas del sector agrícola y agroindustrial.',
    services: [
      'Derechos de uso de agua',
      'Contratos de compra de productos agrícolas',
      'Certificaciones y cumplimiento fitosanitario',
      'Derecho de propiedad rural',
      'Financiamiento agrícola y garantías',
      'Exportación e importación de productos',
    ],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
  },
  {
    icon: Building,
    title: 'Sector Público',
    subtitle: 'Infraestructura y Gestión Gubernamental',
    description: 'Experiencia institucional profunda en entidades del Estado y proyectos de infraestructura pública.',
    services: [
      'Contratos de obra pública',
      'Asociaciones Público-Privadas (APP)',
      'Procedimientos de selección del Estado',
      'Supervisión y liquidación de contratos',
      'Defensa en controversias contractuales',
      'Gestión de proyectos de inversión pública',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
  },
];

export function Sectores() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#1A1B29]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1B29]/95 to-[#1A1B29]/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Sectores Especializados
            </h1>

            <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto font-normal">
              Conocimiento profundo de las industrias más reguladas y técnicamente complejas,
              respaldado por ingeniería especializada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1B29] mb-6">
              La Diferencia Multidisciplinaria
            </h2>

            <p className="font-sans text-lg text-[#2D2D3D] leading-relaxed font-normal">
              En alianza con <span className="font-semibold text-[#1A1B29]">Consultus Group</span>, contamos
              con ingenieros especializados que comprenden la complejidad técnica de cada sector. Esta sinergia
              nos permite ofrecer asesoría legal fundamentada en la realidad operativa y regulatoria de
              industrias altamente especializadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`bg-gray-50 border border-gray-200 p-8 lg:p-10 hover:shadow-lg hover:border-[#B32017]/20 transition-all ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-14 h-14 bg-[#B32017] flex items-center justify-center mb-6">
                    <sector.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1B29] mb-2">
                    {sector.title}
                  </h3>

                  <p className="font-sans text-sm text-[#B32017] font-semibold uppercase tracking-wider mb-4">
                    {sector.subtitle}
                  </p>

                  <p className="font-sans text-lg text-[#2D2D3D] leading-relaxed font-normal mb-8">
                    {sector.description}
                  </p>

                  <div>
                    <h4 className="font-sans text-sm font-bold text-[#1A1B29] mb-4 uppercase tracking-wide">
                      Servicios Especializados:
                    </h4>
                    <ul className="space-y-3">
                      {sector.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 font-sans text-[#2D2D3D] font-normal"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-[#B32017] mt-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
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
              Ventaja Competitiva
            </h2>
            <p className="font-sans text-lg text-[#2D2D3D] max-w-3xl mx-auto font-normal">
              Nuestro enfoque multidisciplinario nos distingue en el mercado legal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Comprensión Técnica',
                description: 'Entendemos los aspectos de ingeniería detrás de cada proyecto. Hablamos el lenguaje técnico de nuestros clientes.',
              },
              {
                title: 'Experiencia Institucional',
                description: 'Trayectoria comprobada en entidades del Estado y empresas líderes en sectores regulados.',
              },
              {
                title: 'Visión Integral',
                description: 'Análisis que integra aspectos legales, técnicos, regulatorios y financieros para decisiones informadas.',
              },
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 border border-gray-200 p-8 text-center hover:shadow-lg hover:border-[#B32017]/20 transition-all"
              >
                <div className="w-12 h-12 bg-[#B32017] mx-auto mb-6 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-sans text-xl font-semibold text-[#1A1B29] mb-4">
                  {advantage.title}
                </h3>

                <p className="font-sans text-[#2D2D3D] font-normal leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A1B29] border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Su Proyecto Requiere Expertise Técnico-Legal?
            </h2>
            <p className="font-sans text-xl text-gray-300 mb-10 font-normal">
              Conversemos sobre cómo nuestra experiencia multidisciplinaria puede agregar valor a su organización.
            </p>
            <Link
              to="/contacto"
              className="inline-block px-10 py-4 bg-[#B32017] text-white font-sans font-semibold hover:bg-[#8B1810] transition-colors"
            >
              Contactar al Equipo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
