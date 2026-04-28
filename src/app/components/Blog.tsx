import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Datos de ejemplo para el blog
const blogPosts = [
  {
    id: 1,
    title: 'Nuevas regulaciones en el sector energético peruano',
    excerpt: 'Análisis de las últimas disposiciones regulatorias que impactan el desarrollo de proyectos de energía renovable en el Perú.',
    author: 'Dr. Carlos Córdova',
    date: '15 de abril, 2026',
    readTime: '5 min',
    category: 'Energía',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: true
  },
  {
    id: 2,
    title: 'Compliance laboral: Guía para empresas del sector privado',
    excerpt: 'Best practices y consideraciones legales para mantener el cumplimiento normativo en relaciones laborales.',
    author: 'Dra. María Pasco',
    date: '10 de abril, 2026',
    readTime: '7 min',
    category: 'Laboral',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: false
  },
  {
    id: 3,
    title: 'Arbitrajes comerciales: Tendencias y casos relevantes',
    excerpt: 'Evolución jurisprudencial en materia de arbitraje comercial y su aplicación en contratos complejos.',
    author: 'Dr. Luis Mendez',
    date: '5 de abril, 2026',
    readTime: '6 min',
    category: 'Arbitraje',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: false
  },
  {
    id: 4,
    title: 'Gestión de riesgos en contratos de APP',
    excerpt: 'Estrategias legales para la identificación y mitigación de riesgos en Asociaciones Público Privadas.',
    author: 'Dr. Carlos Córdova',
    date: '1 de abril, 2026',
    readTime: '8 min',
    category: 'APPs',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: false
  },
  {
    id: 5,
    title: 'Due diligence legal: Aspectos clave en M&A',
    excerpt: 'Proceso de debida diligencia en fusiones y adquisiciones: enfoque práctico y consideraciones críticas.',
    author: 'Dra. María Pasco',
    date: '28 de marzo, 2026',
    readTime: '10 min',
    category: 'Corporativo',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: false
  },
  {
    id: 6,
    title: 'Control gubernamental: Derechos y garantías del administrado',
    excerpt: 'Marco jurídico que protege a los administrados durante procedimientos de fiscalización y control.',
    author: 'Dr. Luis Mendez',
    date: '25 de marzo, 2026',
    readTime: '6 min',
    category: 'Administrativo',
    image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    featured: false
  }
];

const categories = ['Todos', 'Energía', 'Laboral', 'Arbitraje', 'APPs', 'Corporativo', 'Administrativo'];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#1A1B29] to-[#2D2D3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
              Blog Legal
            </h1>
            <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Análisis jurídico, tendencias regulatorias y perspectives legales para empresas y profesionales del sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-[#B32017] text-white font-sans text-sm font-semibold rounded-full mb-4">
                  Artículo Destacado
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1B29] mb-4">
                  {featuredPost.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <p className="font-sans text-lg text-[#2D2D3D] leading-relaxed mb-6 font-normal">
                    {featuredPost.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 text-[#B32017] font-sans font-semibold hover:gap-4 transition-all"
                  >
                    Leer artículo completo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-24 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 font-sans text-sm font-medium rounded-full transition-all ${
                  category === 'Todos'
                    ? 'bg-[#1A1B29] text-white'
                    : 'bg-white text-[#1A1B29] border border-gray-300 hover:bg-[#1A1B29] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <ImageWithFallback
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
                    <Link to={`/blog/${post.id}`} className="hover:text-[#B32017] transition-colors">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-[#2D2D3D] leading-relaxed mb-4 font-normal text-sm">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center gap-2 px-10 py-4 bg-[#1A1B29] text-white font-sans font-semibold hover:bg-[#B32017] transition-colors">
              Cargar más artículos
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-24 bg-[#1A1B29] border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
              Mantente Informado
            </h2>
            <p className="font-sans text-xl text-gray-300 mb-10 font-light">
              Suscríbete a nuestro newsletter para recibir análisis jurídico y actualizaciones regulatorias.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 font-sans focus:outline-none focus:border-[#B32017] focus:bg-white/20 transition-all"
              />
              <button className="px-8 py-4 bg-[#B32017] text-white font-sans font-semibold hover:bg-[#8B1810] transition-colors">
                Suscribirse
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
