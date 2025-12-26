import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Shield, 
  Cloud, 
  Server, 
  Cpu, 
  Globe, 
  Lock, 
  Database, 
  Zap, 
  Headphones,
  ArrowRight,
  Calendar,
  Download,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Managed Workforce Services',
      description: 'Menyediakan dan mengelola tim IT profesional untuk mendukung operasional bisnis Anda dengan efisiensi maksimal.',
      features: [
        'Tim IT Dedicated',
        'Workforce Management',
        'Performance Monitoring',
        'Training & Development'
      ],
      color: '#1E40AF',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Security Solutions',
      description: 'Solusi keamanan komprehensif untuk melindungi infrastruktur digital dan data bisnis Anda dari ancaman siber.',
      features: [
        'Security Assessment',
        'Threat Protection',
        'Data Encryption',
        'Compliance Audit'
      ],
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Cloud className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Cloud Computing Services',
      description: 'Layanan cloud terintegrasi untuk meningkatkan skalabilitas, fleksibilitas, dan efisiensi infrastruktur IT Anda.',
      features: [
        'Cloud Migration',
        'Infrastructure Setup',
        'Performance Optimization',
        'Cost Management'
      ],
      color: '#3B82F6',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Server className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'General IT Services',
      description: 'Layanan IT menyeluruh untuk mendukung dan mengoptimalkan infrastruktur teknologi informasi bisnis Anda.',
      features: [
        'IT Infrastructure',
        'Network Setup',
        'Hardware Support',
        'Software Solutions'
      ],
      color: '#8B5CF6',
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: <Cpu className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'IT Infrastructure Management',
      description: 'Manajemen dan pemeliharaan infrastruktur IT untuk memastikan operasional yang stabil dan andal.',
      features: [
        'Server Management',
        'Network Monitoring',
        'System Maintenance',
        'Disaster Recovery'
      ],
      color: '#10B981',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Digital Transformation',
      description: 'Pendampingan transformasi digital untuk mengoptimalkan proses bisnis dengan teknologi terkini.',
      features: [
        'Digital Strategy',
        'Process Automation',
        'System Integration',
        'Digital Adoption'
      ],
      color: '#F59E0B',
      gradient: 'from-amber-500 to-orange-500'
    }
  ]

  const stats = [
    { value: '100%', label: 'Client Satisfaction', icon: <CheckCircle className="w-5 h-5" /> },
    { value: '50+', label: 'Projects Delivered', icon: <Database className="w-5 h-5" /> },
    { value: '24/7', label: 'Support Available', icon: <Headphones className="w-5 h-5" /> },
  ]

  return (
    <section id="services" className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-blue-100 shadow-sm"
          >
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-700">
              LAYANAN KAMI
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6"
          >
            Solusi <span className="font-normal bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Komprehensif</span> untuk Bisnis Digital Anda
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4"
          >
            Kami menyediakan berbagai layanan IT terpadu yang dirancang untuk mendukung pertumbuhan 
            dan mengoptimalkan operasional bisnis Anda di era digital.
          </motion.p>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onMouseEnter={() => setHoveredService(idx)}
              onMouseLeave={() => setHoveredService(null)}
              className="relative group"
            >
              {/* Service Card */}
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-2xl border border-blue-100 p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Hover Gradient Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                  }}
                />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                      boxShadow: `0 10px 40px ${service.color}20, inset 0 2px 0 ${service.color}10`
                    }}
                  >
                    <div 
                      className="transition-all duration-500 group-hover:scale-110"
                      style={{ color: service.color }}
                    >
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed text-center">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <motion.li 
                      key={fIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fIdx * 0.05 }}
                      className="flex items-center text-sm sm:text-base"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: service.color }}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}10, ${service.color}05)`,
                    color: service.color,
                    border: `1px solid ${service.color}30`
                  }}
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl lg:rounded-3xl p-6 lg:p-10 text-white overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="lg:flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
                  Butuh Solusi IT yang Disesuaikan?
                </h3>
                <p className="text-blue-100 mb-6 lg:mb-8 text-sm lg:text-base leading-relaxed">
                  Konsultasikan kebutuhan IT Anda dengan tim ahli kami. Kami akan membantu merancang solusi yang tepat untuk bisnis Anda.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 lg:px-8 py-3 lg:py-4 bg-white text-blue-700 font-semibold rounded-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="text-sm lg:text-base">Jadwalkan Konsultasi</span>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Download className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="text-sm lg:text-base">Download Brochure</span>
                  </motion.button>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="lg:flex-1 grid grid-cols-3 gap-4 lg:gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-colors group/stat"
                  >
                    <div className="text-xl lg:text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                      {stat.icon}
                      <span>{stat.value}</span>
                    </div>
                    <div className="text-xs lg:text-sm text-blue-100 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 lg:w-64 lg:h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 lg:w-64 lg:h-64 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl" />
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Why Choose Us */}
            <div className="sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Mengapa Memilih Kami?</h4>
                  <p className="text-gray-600 text-sm">Keunggulan Layanan</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Tim ahli dengan sertifikasi internasional',
                  'Solusi yang dapat disesuaikan',
                  'Dukungan 24/7',
                  'Implementasi cepat dan efisien'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Process */}
            <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-6 border border-cyan-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Proses Kerja</h4>
                  <p className="text-gray-600 text-sm">Metodologi Terstruktur</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Kami mengikuti metodologi yang terstruktur mulai dari assessment, perencanaan, implementasi, hingga support berkelanjutan.
              </p>
            </div>
            
            {/* Support */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/10 to-blue-800/10 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Dukungan Lengkap</h4>
                  <p className="text-gray-600 text-sm">Layanan Komprehensif</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Tidak hanya implementasi, kami juga menyediakan dukungan teknis, maintenance, dan optimization berkelanjutan.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services