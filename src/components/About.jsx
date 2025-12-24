import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Target, Gem, Users, Clock, Award, Code, Sparkles, Zap, Globe, Shield } from 'lucide-react'

const About = () => {
  const [activeTab, setActiveTab] = useState('vision')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const tabs = [
    { 
      id: 'vision', 
      label: 'Our Vision', 
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-blue-600 to-cyan-500'
    },
    { 
      id: 'mission', 
      label: 'Our Mission', 
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-blue-700 to-blue-500'
    },
    { 
      id: 'values', 
      label: 'Our Values', 
      icon: <Gem className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-blue-800 to-cyan-600'
    },
  ]

  const content = {
    vision: {
      title: "Menciptakan Solusi Digital yang Bermakna",
      subtitle: "Menggabungkan teknologi modern dengan kebutuhan bisnis yang sesungguhnya",
      points: [
        "Mengembangkan solusi digital yang intuitif dan berdampak nyata",
        "Memberdayakan bisnis dengan teknologi yang mudah diadopsi",
        "Menciptakan pengalaman digital yang menyenangkan dan produktif",
        "Membangun fondasi teknologi yang kuat untuk pertumbuhan berkelanjutan"
      ],
      cta: "Eksplor Visi Kami"
    },
    mission: {
      title: "Mendampingi Transformasi Digital",
      subtitle: "Menjadi mitra terpercaya dalam perjalanan digitalisasi bisnis Anda",
      points: [
        "Menyediakan solusi yang sesuai dengan kebutuhan dan anggaran Anda",
        "Mengedukasi tentang pemanfaatan teknologi secara optimal",
        "Berkolaborasi untuk menciptakan solusi yang benar-benar bermanfaat",
        "Memastikan setiap proyek memberikan nilai tambah yang nyata"
      ],
      cta: "Lihat Pendekatan Kami"
    },
    values: {
      title: "Integritas, Kreativitas, dan Kolaborasi",
      subtitle: "Prinsip yang membimbing setiap interaksi dan solusi yang kami berikan",
      points: [
        "Kejujuran dalam setiap rekomendasi dan implementasi",
        "Berpikir kreatif untuk menemukan solusi yang inovatif",
        "Bekerja sama dengan berbagai pemangku kepentingan",
        "Kualitas yang konsisten dalam setiap proyek"
      ],
      cta: "Pelajari Nilai Kami"
    }
  }

  const timeline = [
    { 
      year: '2023', 
      title: 'Awal Perjalanan', 
      description: 'Nutanics memulai perjalanan dengan fokus pada solusi digital komprehensif',
      milestone: true,
      tech: ['Digital', 'Consulting']
    },
    { 
      year: '2023', 
      title: 'Peluncuran Layanan', 
      description: 'Meluncurkan layanan konsultasi dan pengembangan solusi digital',
      milestone: true,
      tech: ['Development', 'Strategy']
    },
    { 
      year: '2024', 
      title: 'Ekspansi Portfolio', 
      description: 'Mengembangkan beragam solusi untuk berbagai kebutuhan bisnis',
      milestone: false,
      tech: ['Web', 'Mobile']
    },
    { 
      year: '2024', 
      title: 'Pembangunan Tim', 
      description: 'Mengembangkan tim multidisiplin dengan berbagai keahlian',
      milestone: true,
      tech: ['Team', 'Expertise']
    },
    { 
      year: '2025', 
      title: 'Inovasi Berkelanjutan', 
      description: 'Mempersiapkan solusi untuk tantangan digital masa depan',
      milestone: true,
      tech: ['Innovation', 'Future']
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500/3 to-cyan-500/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-blue-100 shadow-sm">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-blue-700 tracking-wide">
              TENTANG KAMI
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            <span className="block">Membangun Masa Depan</span>
            <span className="font-normal">
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Digital Bersama
              </span>
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Sejak 2023, kami berkomitmen menciptakan solusi digital yang mengubah cara bisnis beroperasi 
            dan berinteraksi di era digital.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tabs - Responsive */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-1 border border-blue-100"
            >
              <div className="grid grid-cols-3 gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl transition-all duration-300 group ${
                      activeTab === tab.id 
                        ? 'bg-gradient-to-r shadow-md' 
                        : 'hover:bg-white/50'
                    } ${tab.color}`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-2 sm:mb-3 transition-transform ${
                      activeTab === tab.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-blue-50 text-blue-600 group-hover:scale-105'
                    }`}>
                      {tab.icon}
                    </div>
                    <span className={`font-semibold text-sm sm:text-base transition-colors ${
                      activeTab === tab.id ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Content Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-white/40"
            >
              <div className="mb-6 lg:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {content[activeTab].title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  {content[activeTab].subtitle}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {content[activeTab].points.map((point, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3 group cursor-pointer p-3 sm:p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base group-hover:text-gray-900 transition-colors flex-1">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <span>{content[activeTab].cta}</span>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:space-y-8">
            {/* Timeline - Responsive */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <Clock className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Perjalanan Kami</h3>
                  <p className="text-gray-600 text-sm">2023 - Sekarang</p>
                </div>
              </div>
              
              <div className="relative">
                {/* Timeline line for mobile/desktop */}
                <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent"></div>
                
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4 sm:gap-6 mb-6 last:mb-0 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                        item.milestone 
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md shadow-blue-500/30' 
                          : 'bg-blue-50 border border-blue-200'
                      }`}>
                        <span className={`font-bold text-sm sm:text-lg ${item.milestone ? 'text-white' : 'text-blue-600'}`}>
                          {item.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 pt-1">
                      <div className="bg-white rounded-xl p-4 border border-blue-100 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-sm">
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-2 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Capabilities Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Tech Solutions */}
              <div className="bg-gradient-to-r from-white to-blue-50/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-600/10 to-cyan-500/10 flex items-center justify-center">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Solusi Teknologi</h4>
                    <p className="text-gray-600 text-xs">Modern & Efisien</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Mengembangkan aplikasi dan platform yang intuitif dan mudah digunakan
                </p>
              </div>
              
              {/* Digital Strategy */}
              <div className="bg-gradient-to-r from-white to-cyan-50/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Strategi Digital</h4>
                    <p className="text-gray-600 text-xs">Perencanaan Optimal</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Membantu merancang roadmap digital yang sesuai dengan tujuan bisnis
                </p>
              </div>

              {/* Performance */}
              <div className="bg-gradient-to-r from-white to-blue-50/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-700/10 to-blue-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Optimasi Performa</h4>
                    <p className="text-gray-600 text-xs">Cepat & Responsif</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Memastikan solusi berjalan optimal dengan performa yang konsisten
                </p>
              </div>

              {/* Security */}
              <div className="bg-gradient-to-r from-white to-blue-50/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-600/10 to-blue-800/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Perlindungan Data</h4>
                    <p className="text-gray-600 text-xs">Proteksi Optimal</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Menjaga keamanan data dengan implementasi praktik terbaik
                </p>
              </div>
            </motion.div>

            {/* Team Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 lg:p-8 border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/30">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Tim Multidisiplin</h3>
                  <p className="text-gray-600 text-sm">Beragam Keahlian</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Tim kami terdiri dari profesional dengan latar belakang berbeda yang saling melengkapi, 
                siap memberikan solusi komprehensif untuk kebutuhan digital Anda.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="text-center p-3 rounded-xl bg-blue-50/50 border border-blue-200">
                  <div className="text-base sm:text-lg font-bold text-blue-700">Beragam</div>
                  <div className="text-xs text-gray-600 mt-1">Keahlian</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-blue-50/50 border border-blue-200">
                  <div className="text-base sm:text-lg font-bold text-blue-700">Kreatif</div>
                  <div className="text-xs text-gray-600 mt-1">Pendekatan</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-blue-50/50 border border-blue-200">
                  <div className="text-base sm:text-lg font-bold text-blue-700">Kolaboratif</div>
                  <div className="text-xs text-gray-600 mt-1">Kerja Tim</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-blue-50/50 border border-blue-200">
                  <div className="text-base sm:text-lg font-bold text-blue-700">Inovatif</div>
                  <div className="text-xs text-gray-600 mt-1">Solusi</div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Bergabung dengan Kami</span>
                  <div className="w-3 h-3 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Kualitas Terbaik</h4>
                <p className="text-gray-600 text-sm">Standar Tinggi</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Komitmen untuk memberikan hasil terbaik dalam setiap proyek dengan perhatian terhadap detail
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Teknologi Modern</h4>
                <p className="text-gray-600 text-sm">Terbaru & Relevan</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Menggunakan teknologi terkini untuk solusi yang relevan dengan perkembangan zaman
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Keandalan</h4>
                <p className="text-gray-600 text-sm">Dapat Diandalkan</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Membangun kepercayaan melalui solusi yang andal, aman, dan konsisten dalam jangka panjang
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.08; transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default About