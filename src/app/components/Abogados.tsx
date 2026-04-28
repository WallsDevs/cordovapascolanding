import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, Briefcase, GraduationCap, Filter, ArrowLeft, Mail, Phone, Calendar } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Omar E. Córdova Paredes',
    role: 'Socio Director',
    category: 'socio',
    image: '/assets/Omar.jpeg',
    experience: '12+ años de experiencia',
    email: 'ocordova@cp-asociados.pe',
    phone: '+51 1 234 5678',
    education: [
      'Maestría en Relaciones Industriales',
      'Maestría en Gestión y Políticas Públicas',
      'Abogado por la Universidad Nacional Mayor de San Marcos',
      'Docente Universitario en UPC'
    ],
    languages: ['Español', 'Inglés'],
    practiceAreas: ['Derecho Administrativo', 'Energía', 'Control Gubernamental'],
    industries: ['Energía', 'Oil & Gas', 'Sector Público'],
    bio: 'Especialista en Derecho Administrativo con vasta experiencia en el sector energético. Ha sido consultor en proyectos de gran envergadura y cuenta con sólida formación académica y profesional.',
    achievements: [
      'Experiencia en OSINERGMIN',
      'Más de 50 casos de alta complejidad',
      'Publicaciones académicas en revistas especializadas',
      'Ponencias en congresos nacionales e internacionales'
    ]
  },
  {
    id: 2,
    name: 'Jorge Pasco',
    role: 'Socio',
    category: 'socio',
    image: '/assets/Jorge Pasco.jpeg',
    experience: '10+ años de experiencia',
    email: 'jpasco@cp-asociados.pe',
    phone: '+51 1 234 5679',
    education: [
      'Abogado por la Pontificia Universidad Católica del Perú',
      'Maestría en Derecho de la Empresa',
      'Especialización en Contrataciones del Estado'
    ],
    languages: ['Español', 'Inglés', 'Portugués'],
    practiceAreas: ['Derecho Administrativo', 'Defensa de Funcionarios', 'Gestión Contractual'],
    industries: ['Sector Público', 'Infraestructura', 'APPs'],
    bio: 'Experto en defensa de funcionarios públicos y gestión contractual. Su experiencia en el sector público le permite ofrecer un enfoque integral y estratégico a cada caso.',
    achievements: [
      'Experiencia en entidades del Estado',
      'Más de 30 procedimientos sancionadores defendidos',
      'Especialista en normativa de contrataciones',
      'Consultor en proyectos de infraestructura'
    ]
  },
  {
    id: 3,
    name: 'Alejandro Castillo',
    role: 'Socio',
    category: 'socio',
    image: '/assets/Alejandro Castillo.jpeg',
    experience: '8+ años de experiencia en Arbitraje',
    email: 'acastillo@cp-asociados.pe',
    phone: '+51 1 234 5680',
    education: [
      'Abogado por la Universidad Nacional Mayor de San Marcos',
      'Maestría en Derecho Arbitral',
      'Especialización en Contratos Internacionales'
    ],
    languages: ['Español', 'Inglés'],
    practiceAreas: ['Arbitraje', 'Contratos', 'Resolución de Controversias'],
    industries: ['Construcción', 'Financiero', 'Corporativo'],
    bio: 'Árbitro especializado con amplia experiencia en resolución de controversias comerciales y de construcción. Su conocimiento técnico y su visión estratégica lo posicionan como un referente en materia arbitral.',
    achievements: [
      'Árbitro en el Centro de Arbitraje de la Cámara de Lima',
      'Más de 40 laudos arbitrales emitidos',
      'Especialista en arbitrajes de construcción',
      'Consultor en estructuras contractuales complejas'
    ]
  },
  {
    id: 4,
    name: 'Diego Larico',
    role: 'Asociado Senior',
    category: 'asociado',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
    experience: '7+ años de experiencia en Derecho Corporativo',
    email: 'dlarico@cp-asociados.pe',
    phone: '+51 1 234 5681',
    education: [
      'Abogado por la Universidad del Pacífico',
      'Maestría en Derecho de los Negocios',
      'Diplomado en Fusiones y Adquisiciones'
    ],
    languages: ['Español', 'Inglés'],
    practiceAreas: ['Derecho Corporativo', 'M&A', 'Due Diligence'],
    industries: ['Corporativo', 'Financiero', 'Startups'],
    bio: 'Especialista en derecho corporativo con experiencia en transacciones M&A y reestructuraciones. Su formación en negocios le permite ofrecer asesoría integral a empresas de diversos sectores.',
    achievements: [
      'Experiencia en estudios de primer nivel',
      'Participación en más de 20 transacciones M&A',
      'Especialista en due diligence legal',
      'Asesor en reestructuraciones corporativas'
    ]
  },
  {
    id: 5,
    name: 'Mayra Ormea',
    role: 'Asociada Senior',
    category: 'asociada',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
    experience: '10+ años de experiencia en Derecho Laboral',
    email: 'mormea@cp-asociados.pe',
    phone: '+51 1 234 5682',
    education: [
      'Abogada por la Universidad de Lima (magna cum laude)',
      'Especialización en Derecho Laboral Corporativo'
    ],
    languages: ['Español', 'Inglés'],
    practiceAreas: ['Derecho Laboral', 'Relaciones Laborales', 'Compliance Laboral'],
    industries: ['Retail', 'Manufactura', 'Servicios'],
    bio: 'Experta en derecho laboral corporativo con amplia experiencia en la gestión de relaciones laborales y compliance. Su enfoque preventivo y estratégico ha beneficiado a numerosas empresas.',
    achievements: [
      'Experiencia en estudios especializados',
      'Más de 100 procesos laborales gestionados',
      'Especialista en negociaciones colectivas',
      'Consultora en programas de compliance laboral'
    ]
  },
];

const practiceAreas = [
  'Todas',
  'Derecho Administrativo',
  'Arbitraje',
  'Contratos',
  'Derecho Corporativo',
  'Derecho Laboral',
  'Energía',
  'Control Gubernamental',
  'Defensa de Funcionarios',
  'Gestión Contractual',
  'Resolución de Controversias',
  'M&A',
  'Due Diligence',
  'Relaciones Laborales',
  'Compliance Laboral',
];

const industries = [
  'Todas',
  'Energía',
  'Oil & Gas',
  'Sector Público',
  'Infraestructura',
  'APPs',
  'Construcción',
  'Financiero',
  'Corporativo',
  'Startups',
  'Retail',
  'Manufactura',
  'Servicios',
];

// Componente para vista individual de abogado
function AbogadoProfile() {
  const { id } = useParams();
  const lawyer = teamMembers.find(m => m.id === parseInt(id || ''));

  if (!lawyer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-[#1A1B29] mb-4">
            Abogado no encontrado
          </h1>
          <p className="font-sans text-gray-600 mb-8">
            El abogado que buscas no existe o ha sido removido.
          </p>
          <Link
            to="/abogados"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#B32017] text-white font-sans font-semibold hover:bg-[#8B1810] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a Abogados
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-[#1A1B29]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/abogados"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a Abogados
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <ImageWithFallback
                src={lawyer.image}
                alt={lawyer.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Info Principal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#B32017] text-white font-sans text-sm font-semibold rounded-full mb-4">
                  {lawyer.role}
                </span>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                  {lawyer.name}
                </h1>
                <p className="font-sans text-xl text-gray-300 font-light">
                  {lawyer.experience}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-5 h-5" />
                  <span>{lawyer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-5 h-5" />
                  <span>{lawyer.phone}</span>
                </div>
              </div>

              <p className="font-sans text-lg text-gray-300 leading-relaxed mb-8">
                {lawyer.bio}
              </p>

              <div className="flex flex-wrap gap-2">
                {lawyer.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 text-white font-sans text-sm rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detalles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Educación */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-[#B32017]" />
                <h3 className="font-display text-2xl font-bold text-[#1A1B29]">
                  Educación
                </h3>
              </div>
              <ul className="space-y-3">
                {lawyer.education.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-[#2D2D3D]">
                    <span className="inline-block w-1.5 h-1.5 bg-[#B32017] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Áreas de Práctica */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-[#B32017]" />
                <h3 className="font-display text-2xl font-bold text-[#1A1B29]">
                  Áreas de Práctica
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {lawyer.practiceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-[#B32017]/10 text-[#B32017] font-sans text-sm rounded-lg"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Industrias */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-[#B32017]" />
                <h3 className="font-display text-2xl font-bold text-[#1A1B29]">
                  Industrias
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {lawyer.industries.map((industry, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-gray-100 text-gray-700 font-sans text-sm rounded-lg"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Logros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="font-display text-3xl font-bold text-[#1A1B29] mb-8">
              Logros Destacados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lawyer.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-[#B32017] mt-2 flex-shrink-0 rounded-full" />
                  <p className="font-sans text-[#2D2D3D]">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-200">
              <h3 className="font-display text-2xl font-bold text-[#1A1B29] mb-4">
                ¿Necesita asesoría legal?
              </h3>
              <p className="font-sans text-[#2D2D3D] mb-6">
                Contacte a {lawyer.name.split(' ')[0]} para una consulta inicial y evalúe cómo podemos ayudarle con sus necesidades legales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${lawyer.email}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#B32017] text-white font-sans font-semibold hover:bg-[#8B1810] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Enviar Email
                </a>
                <a
                  href={`tel:${lawyer.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1A1B29] text-white font-sans font-semibold hover:bg-[#B32017] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Llamar
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function Abogados() {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('Todas');
  const [selectedIndustry, setSelectedIndustry] = useState('Todas');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Si hay un ID, mostrar vista individual
  if (id) {
    return <AbogadoProfile />;
  }

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPracticeArea = selectedPracticeArea === 'Todas' ||
                              member.practiceAreas.some(area => area.toLowerCase().includes(selectedPracticeArea.toLowerCase()));
    const matchesIndustry = selectedIndustry === 'Todas' ||
                          member.industries.some(industry => industry.toLowerCase().includes(selectedIndustry.toLowerCase()));
    const matchesCategory = selectedCategory === 'Todos' || member.category === selectedCategory;

    return matchesSearch && matchesPracticeArea && matchesIndustry && matchesCategory;
  });

  const stats = {
    socios: teamMembers.filter(m => m.category === 'socio').length,
    consejeros: 0,
    asociados: teamMembers.filter(m => m.category.includes('asociado')).length,
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#1A1B29]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1574469373613-c3672c38bfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Equipo Legal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1B29]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Nuestro Equipo Legal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-xl text-gray-300 max-w-3xl mx-auto font-normal"
          >
            Profesionales altamente especializados con experiencia comprobada en las industrias
            más complejas y reguladas del mercado.
          </motion.p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-200"
          >
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <Filter className="w-6 h-6 text-[#B32017]" />
              <h2 className="font-display text-2xl font-bold text-[#1A1B29]">
                Buscar Abogados
              </h2>
            </motion.div>

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
                    placeholder="Nombre o cargo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                  value={selectedPracticeArea}
                  onChange={(e) => setSelectedPracticeArea(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:border-[#B32017] focus:ring-1 focus:ring-[#B32017]"
                >
                  {practiceAreas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* Industries */}
              <div>
                <label className="block font-sans text-sm font-medium text-[#1A1B29] mb-2">
                  Industrias
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:border-[#B32017] focus:ring-1 focus:ring-[#B32017]"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block font-sans text-sm font-medium text-[#1A1B29] mb-2">
                  Categoría
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:border-[#B32017] focus:ring-1 focus:ring-[#B32017]"
                >
                  <option value="Todos">Todos</option>
                  <option value="socio">Socios</option>
                  <option value="asociado">Asociados</option>
                  <option value="asociada">Asociadas</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <p className="font-sans text-sm text-gray-600">
                {filteredMembers.length} {filteredMembers.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedPracticeArea('Todas');
                  setSelectedIndustry('Todas');
                  setSelectedCategory('Todos');
                }}
                className="font-sans text-sm text-[#B32017] hover:text-[#8B1810] transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-8 lg:gap-16"
          >
            {[
              { number: stats.socios, label: 'Socios' },
              { number: stats.consejeros, label: 'Consejeros' },
              { number: stats.asociados, label: 'Asociados' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-[#B32017] rounded-full flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-white">
                    {stat.number}
                  </span>
                </div>
                <span className="font-sans text-sm text-gray-600 uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {filteredMembers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1A1B29] mb-2">
                No se encontraron resultados
              </h3>
              <p className="font-sans text-gray-600">
                Intente ajustar los filtros de búsqueda para encontrar al profesional que necesita.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers.map((member, index) => (
                <Link
                  key={member.id}
                  to={`/abogados/${member.id}`}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 3 === 0 ? -100 : index % 3 === 1 ? 0 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.8 }}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#B32017]/20 transition-all cursor-pointer"
                  >
                    {/* Image */}
                    <div className="aspect-[4/5] overflow-hidden">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Role Badge */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-[#B32017] text-white font-sans text-xs font-semibold rounded-full">
                          {member.role}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="font-display text-xl font-bold text-[#1A1B29] mb-2">
                        {member.name}
                      </h3>

                      {/* Experience */}
                      <p className="font-sans text-sm text-gray-600 mb-4">
                        {member.experience}
                      </p>

                      {/* Practice Areas */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-4 h-4 text-[#B32017]" />
                          <h4 className="font-sans text-xs font-bold text-[#1A1B29] uppercase tracking-wider">
                            Áreas de Práctica
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {member.practiceAreas.slice(0, 2).map((area, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-[#B32017]/10 text-[#B32017] font-sans text-xs rounded"
                            >
                              {area}
                            </span>
                          ))}
                          {member.practiceAreas.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 font-sans text-xs rounded">
                              +{member.practiceAreas.length - 2}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Industries */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-4 h-4 text-[#B32017]" />
                          <h4 className="font-sans text-xs font-bold text-[#1A1B29] uppercase tracking-wider">
                            Industrias
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {member.industries.slice(0, 2).map((industry, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-700 font-sans text-xs rounded"
                            >
                              {industry}
                            </span>
                          ))}
                          {member.industries.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 font-sans text-xs rounded">
                              +{member.industries.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
