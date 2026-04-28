import { motion, AnimatePresence } from 'motion/react';
import { Scale, Shield, FileText, Users, Gavel, Briefcase, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

const services = [
  {
    number: '01',
    icon: Shield,
    title: 'Derecho Administrativo y Control Gubernamental',
    subtitle: 'Soporte técnico-legal especializado en control gubernamental',
    description: 'Brindamos soporte técnico especializado a entidades del Estado y empresas sujetas a servicios de control gubernamental, fiscalizaciones regulatorias y auditorías por entes supervisores como OSINERGMIN, OEFA, ANA, OSITRAN y la Contraloría General de la República.',
    scope: [
      {
        title: 'Diagnóstico de Cumplimiento Regulatorio',
        details: 'Evaluación integral del estado de cumplimiento. Mapa regulatorio con obligaciones, plazos y consecuencias.',
      },
      {
        title: 'Preparación para Fiscalizaciones',
        details: 'Estrategias de atención, organización documental, preparación de equipos y simulación de escenarios.',
      },
      {
        title: 'Acompañamiento In Situ',
        details: 'Equipos especializados desplegados a exclusividad del cliente durante visitas de fiscalización y reuniones.',
      },
      {
        title: 'Defensa Técnico-Legal',
        details: 'Estrategias de defensa en procedimientos administrativos sancionadores, documentos de descargo y coordinación.',
      },
      {
        title: 'Fortalecimiento Institucional',
        details: 'Sistemas de compliance regulatorio, capacitación de equipos y procedimientos de cumplimiento sostenido.',
      },
    ],
    methodology: ['Regulatory Mapping', 'Compliance Readiness', 'War Room Protocol', 'Root Cause Analysis', 'Regulatory Intelligence'],
  },
  {
    number: '02',
    icon: Gavel,
    title: 'Defensa de Funcionarios Públicos',
    subtitle: 'Representación y soporte legal integral',
    description: 'Brindamos soporte técnico especializado a funcionarios del Estado que se encuentren inmersos en posibles hallazgos de responsabilidad administrativa, civil y penal, derivados de servicios de control aplicados en entidades públicas.',
    scope: [
      {
        title: 'Abordaje Integral',
        details: 'Acompañamiento durante todas las etapas del proceso de identificación de responsabilidades administrativas, civiles y penales.',
      },
      {
        title: 'Atención Personalizada',
        details: 'Consultores expertos asignados a cada caso en procedimiento administrativo sancionador y defensa legal especializada.',
      },
      {
        title: 'Estrategias de Defensa',
        details: 'Formulación de documentos requeridos en las diferentes instancias del procedimiento y su posible escalamiento judicial.',
      },
    ],
    ambits: [
      'Responsabilidad administrativa funcional ante la CGR',
      'Procedimientos administrativos sancionadores',
      'Defensa en instancias judiciales (civil y penal)',
      'Representación legal ante OCI y comisiones de control',
    ],
  },
  {
    number: '03',
    icon: Users,
    title: 'Derecho Laboral y Relaciones Colectivas',
    subtitle: 'Asesoría jurídica laboral integral',
    description: 'Ofrecemos asesoría jurídica de alta complejidad en materia laboral, relaciones colectivas de trabajo y derecho administrativo laboral, combinando rigor técnico con enfoque estratégico en la defensa de los derechos de nuestros clientes.',
    areas: [
      'Derecho laboral individual y colectivo',
      'Litigio laboral y representación judicial',
      'Negociación colectiva y relaciones sindicales',
      'Procedimientos de inspección ante SUNAFIL',
      'Asesoría en reestructuraciones laborales',
      'Capacitación empresarial en normativa laboral',
      'Due diligence laboral',
      'Gestión de conflictos laborales',
    ],
    valueProposition: [
      {
        title: 'Enfoque Estratégico',
        description: 'Combinamos la perspectiva empresarial con el rigor del litigio para diseñar estrategias integrales de protección laboral.',
      },
      {
        title: 'Experiencia Big 4',
        description: 'Nuestro equipo incluye profesionales con trayectoria en firmas como PwC y estudios de primer nivel.',
      },
      {
        title: 'Atención Personalizada',
        description: 'Cada caso es gestionado directamente por socios y asociados senior con expertise específico.',
      },
    ],
  },
  {
    number: '04',
    icon: Scale,
    title: 'Disputas, Arbitrajes y Litigios',
    subtitle: 'Resolución estratégica de controversias',
    description: 'Proporcionamos acompañamiento especializado en controversias contractuales y técnicas, integrando la perspectiva técnica, financiera y contractual para construir estrategias sólidas ante cualquier foro de resolución.',
    cycle: [
      { step: '01', phase: 'Evaluación', detail: 'Análisis de méritos y riesgos' },
      { step: '02', phase: 'Construcción', detail: 'Evidencia técnica y documental' },
      { step: '03', phase: 'Cuantificación', detail: 'Quantum con soporte riguroso' },
      { step: '04', phase: 'Presentación', detail: 'Documentos e interacción' },
      { step: '05', phase: 'Resolución', detail: 'Arbitraje, mediación, ADR' },
    ],
    services: [
      {
        title: 'Preparación de Reclamaciones',
        description: 'Desarrollo integral de claims, identificación de causas raíz, cuantificación de impacto y redacción bajo estándares de arbitraje internacional.',
      },
      {
        title: 'Soporte Técnico en Arbitraje',
        description: 'Informes periciales, declaraciones testimoniales, alegatos y asistencia en procedimientos de arbitraje, mediación y ADR.',
      },
      {
        title: 'Análisis Forense de Cronogramas',
        description: 'Time Impact Analysis, Collapsed As-Built, Window Analysis. Métodos del SCL Protocol y AACE RP 29R-03.',
      },
      {
        title: 'Prevención de Controversias',
        description: 'Marcos de gobernanza contractual, sistemas de Early Warning, negociación estructurada y Dispute Boards (FIDIC/ICC).',
      },
    ],
  },
  {
    number: '05',
    icon: FileText,
    title: 'Gestión Contractual y Compliance',
    subtitle: 'Gestión integral del ciclo de vida contractual',
    description: 'Cubrimos desde la estructuración y negociación hasta el cierre formal del contrato, pasando por la administración operativa, gestión de cambios, resolución de controversias y gestión documental integrada.',
    lifecycle: [
      { number: '01', phase: 'ESTRUCTURAR', description: 'Modelos contractuales (FIDIC, NEC, EPCM)' },
      { number: '02', phase: 'NEGOCIAR', description: 'Análisis de impacto y contraofertas' },
      { number: '03', phase: 'EJECUTAR', description: 'Administración contractual operativa' },
      { number: '04', phase: 'GESTIONAR', description: 'Cambios, variaciones y riesgos' },
      { number: '05', phase: 'CERRAR', description: 'Verificación y lecciones aprendidas' },
    ],
    complementary: [
      {
        title: 'Gestión Legal y Documental',
        description: 'Sistema de gestión documental (ISO 15489), control de correspondencia, due diligence legal-documental y soporte en auditorías.',
      },
      {
        title: 'Compliance Regulatorio',
        description: 'Mapa regulatorio integral, diagnóstico de madurez, sistemas de alertas tempranas y manuales de cumplimiento.',
      },
      {
        title: 'Gestión del Conocimiento',
        description: 'Base de precedentes, templates estandarizados, protocolos de preservación legal y preparación forense digital.',
      },
    ],
    frameworks: ['FIDIC', 'NEC4', 'ISO 15489', 'ISO 27001', 'ISO 31000', 'COSO ERM'],
  },
  {
    number: '06',
    icon: Briefcase,
    title: 'Gestión Legal y Documental',
    subtitle: 'Documentación estratégica y due diligence',
    description: 'Sistema de gestión documental profesional bajo estándares ISO, control riguroso de correspondencia, due diligence legal-documental completo y soporte especializado en auditorías y fiscalizaciones.',
    features: [
      'Sistema de gestión documental (ISO 15489)',
      'Control de correspondencia y notificaciones',
      'Due diligence legal-documental',
      'Soporte en auditorías y fiscalizaciones',
      'Base de precedentes y templates',
      'Protocolos de preservación legal',
      'Preparación forense digital',
    ],
  },
];

export default function Servicios() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    console.log('toggleService called with index:', index);
    console.log('current expandedService:', expandedService);
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#1A1B29]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1B29]/95 to-[#1A1B29]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Nuestros Servicios
            </h1>

            <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto font-normal">
              Seis prácticas legales especializadas, articuladas bajo una gobernanza estratégica única.
              Soluciones jurídicas integrales para el sector público y privado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail - Accordion Style */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="space-y-1">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleService(index)}
                  className="w-full p-6 lg:p-8 flex items-center justify-between bg-[#1A1B29] hover:bg-[#2D2D3D] text-white transition-colors group"
                >
                  <div className="flex items-center gap-8 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#B32017] rounded-xl flex items-center justify-center transition-colors group-hover:bg-[#B32017]/80">
                        <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="text-left flex-1">
                      <div className="font-sans text-sm text-white/90 font-bold tracking-[0.2em] uppercase mb-2">
                        {service.number}
                      </div>
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="font-sans text-lg text-white/80 font-normal">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 ml-8">
                    <motion.div
                      animate={{ 
                        rotate: expandedService === index ? 180 : 0,
                        scale: expandedService === index ? 1 : [1, 1.3, 1],
                        opacity: expandedService === index ? 0.8 : [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        rotate: { duration: 0.3, ease: "easeInOut" },
                        scale: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <ChevronDown
                        className="w-8 h-8 text-white/80"
                      />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ opacity: 0, maxHeight: 0 }}
                      animate={{ opacity: 1, maxHeight: 2000 }}
                      exit={{ opacity: 0, maxHeight: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 lg:p-6 pt-0 bg-[#F4F4F4]">
                        <div className="max-w-5xl">
                          <p className="font-sans text-xl text-[#1A1B29] leading-relaxed mb-6 font-normal">
                            {service.description}
                          </p>

                          {/* Scope/Areas */}
                          {service.scope && (
                            <div className="mb-6">
                              <h4 className="font-sans text-lg font-bold text-[#1A1B29] mb-4 uppercase tracking-wider">
                                Alcance del Servicio
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.scope.map((item, idx) => (
                                  <div key={idx} className="bg-white p-4 border-l-4 border-[#B32017]">
                                    <h5 className="font-sans text-base font-semibold text-[#1A1B29] mb-2">
                                      {item.title}
                                    </h5>
                                    <p className="font-sans text-sm text-[#2D2D3D] font-normal leading-relaxed">
                                      {item.details}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Areas (Laboral) */}
                          {service.areas && (
                            <div className="mb-6">
                              <h4 className="font-sans text-lg font-bold text-[#1A1B29] mb-4 uppercase tracking-wider">
                                Áreas de Especialización
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.areas.map((area, idx) => (
                                  <div key={idx} className="flex items-start gap-3 bg-white p-4">
                                    <span className="inline-block w-2 h-2 bg-[#B32017] mt-2 flex-shrink-0" />
                                    <span className="font-sans text-[#1A1B29] font-normal">{area}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Value Proposition */}
                          {service.valueProposition && (
                            <div className="mb-12">
                              <h4 className="font-sans text-lg font-bold text-[#1A1B29] mb-6 uppercase tracking-wider">
                                Propuesta de Valor
                              </h4>
                              <div className="space-y-6">
                                {service.valueProposition.map((item, idx) => (
                                  <div key={idx} className="bg-white p-6">
                                    <h5 className="font-sans text-base font-semibold text-[#1A1B29] mb-2">
                                      {item.title}
                                    </h5>
                                    <p className="font-sans text-sm text-[#2D2D3D] font-normal">
                                      {item.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Cycle (Disputas) */}
                          {service.cycle && (
                            <div className="mb-12">
                              <h4 className="font-sans text-lg font-bold text-[#1A1B29] mb-6 uppercase tracking-wider">
                                Ciclo de Gestión de Disputas
                              </h4>
                              <div className="flex flex-col md:flex-row gap-2">
                                {service.cycle.map((item) => (
                                  <div key={item.step} className="flex-1 bg-[#1A1B29] p-6 text-center">
                                    <div className="font-display text-4xl font-bold text-[#B32017] mb-3">
                                      {item.step}
                                    </div>
                                    <div className="font-sans text-base font-semibold text-white mb-2">
                                      {item.phase}
                                    </div>
                                    <div className="font-sans text-sm text-gray-400 font-normal">
                                      {item.detail}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Services (Disputas) */}
                          {service.services && (
                            <div className="mb-12">
                              <h4 className="font-sans text-lg font-bold text-[#1A1B29] mb-6 uppercase tracking-wider">
                                Servicios Especializados
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.services.map((item, idx) => (
                                  <div key={idx} className="bg-white p-6">
                                    <h5 className="font-sans text-base font-semibold text-[#1A1B29] mb-3">
                                      {item.title}
                                    </h5>
                                    <p className="font-sans text-sm text-[#2D2D3D] font-normal leading-relaxed">
                                      {item.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Lifecycle (Contractual) */}
                          {service.lifecycle && (
                            <div className="mb-12">
                              <h4 className="font-sans text-lg font-bold text-[#1A1B29] mb-6 uppercase tracking-wider">
                                Ciclo de Vida Contractual
                              </h4>
                              <div className="flex flex-col md:flex-row gap-2">
                                {service.lifecycle.map((item) => (
                                  <div key={item.number} className="flex-1 bg-white p-6 border-t-4 border-[#B32017]">
                                    <div className="font-display text-3xl font-bold text-[#B32017] mb-3">
                                      {item.number}
                                    </div>
                                    <div className="font-sans text-base font-bold text-[#1A1B29] mb-2 uppercase">
                                      {item.phase}
                                    </div>
                                    <div className="font-sans text-sm text-[#2D2D3D] font-normal">
                                      {item.description}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Complementary Services */}
                          {service.complementary && (
                            <div className="mb-12">
                              <h4 className="font-sans text-lg font-bold text-[#1A1B29] mb-6 uppercase tracking-wider">
                                Servicios Complementarios
                              </h4>
                              <div className="space-y-6">
                                {service.complementary.map((item, idx) => (
                                  <div key={idx} className="bg-white p-6 border-l-4 border-[#B32017]">
                                    <h5 className="font-sans text-base font-semibold text-[#1A1B29] mb-3">
                                      {item.title}
                                    </h5>
                                    <p className="font-sans text-sm text-[#2D2D3D] font-normal leading-relaxed">
                                      {item.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Ambits */}
                          {service.ambits && (
                            <div className="mb-8">
                              <h4 className="font-sans text-lg font-bold text-[#1A1B29] mb-6 uppercase tracking-wider">
                                Ámbitos de Actuación
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.ambits.map((ambit, idx) => (
                                  <div key={idx} className="flex items-start gap-3 bg-white p-4">
                                    <span className="inline-block w-2 h-2 bg-[#B32017] mt-2 flex-shrink-0" />
                                    <span className="font-sans text-[#1A1B29] font-normal">{ambit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Features */}
                          {service.features && (
                            <div className="mb-8">
                              <h4 className="font-sans text-lg font-bold text-[#1A1B29] mb-6 uppercase tracking-wider">
                                Características del Servicio
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-start gap-3 bg-white p-4">
                                    <span className="inline-block w-2 h-2 bg-[#B32017] mt-2 flex-shrink-0" />
                                    <span className="font-sans text-[#1A1B29] font-normal">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Methodology */}
                          {service.methodology && (
                            <div className="bg-[#1A1B29] p-6 inline-block">
                              <div className="font-sans text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
                                Marco Metodológico
                              </div>
                              <div className="flex flex-wrap gap-3">
                                {service.methodology.map((method, idx) => (
                                  <span key={idx} className="font-sans text-sm text-white font-normal">
                                    {method}{idx < service.methodology!.length - 1 && ' |'}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Frameworks */}
                          {service.frameworks && (
                            <div className="bg-[#1A1B29] p-6 inline-block mt-6">
                              <div className="font-sans text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
                                Frameworks & Estándares
                              </div>
                              <div className="flex flex-wrap gap-3">
                                {service.frameworks.map((framework, idx) => (
                                  <span key={idx} className="font-sans text-sm text-white font-normal">
                                    {framework}{idx < service.frameworks!.length - 1 && ' |'}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1A1B29] border-b border-gray-700">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Necesita Asesoría en Alguna de Estas Áreas?
            </h2>
            <p className="font-sans text-xl text-gray-300 mb-10 font-normal">
              Nuestro equipo está listo para ofrecerle soluciones jurídicas de excelencia.
            </p>
            <Link
              to="/contacto"
              className="inline-block px-12 py-6 bg-[#B32017] text-white font-sans font-semibold tracking-wide hover:bg-[#8B1810] transition-colors text-lg"
            >
              Solicitar Consulta
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
