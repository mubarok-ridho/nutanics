import { useState, useEffect, useRef } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('vision')
  const [hoveredStat, setHoveredStat] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { 
      value: '150+', 
      label: 'Projects Delivered', 
      icon: 'fas fa-code',
      change: '+32% YoY',
      color: 'from-blue-500 to-cyan-500',
      description: 'Successful software implementations'
    },
    { 
      value: '99.9%', 
      label: 'Client Satisfaction', 
      icon: 'fas fa-check-circle',
      change: 'Industry Leader',
      color: 'from-green-500 to-emerald-500',
      description: 'Based on post-project reviews'
    },
    { 
      value: '24/7', 
      label: 'DevOps Support', 
      icon: 'fas fa-headset',
      change: 'Zero Downtime',
      color: 'from-indigo-500 to-purple-500',
      description: 'Continuous integration & deployment'
    },
    { 
      value: '8+', 
      label: 'Years Innovating', 
      icon: 'fas fa-chart-line',
      change: 'Since 2016',
      color: 'from-violet-500 to-pink-500',
      description: 'Pioneering digital solutions'
    },
  ]

  const tabs = [
    { 
      id: 'vision', 
      label: 'Our Vision', 
      icon: 'fas fa-rocket',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'mission', 
      label: 'Our Mission', 
      icon: 'fas fa-bullseye',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      id: 'values', 
      label: 'Our Values', 
      icon: 'fas fa-gem',
      color: 'from-violet-500 to-pink-500'
    },
  ]

  const content = {
    vision: {
      title: "Shaping The Future of Digital Solutions",
      subtitle: "Leading innovation in software development across Southeast Asia",
      points: [
        "Creating next-generation platforms that redefine user experience",
        "Building scalable architectures for tomorrow's digital challenges",
        "Setting new standards in code quality and development practices",
        "Empowering businesses through cutting-edge technology stacks"
      ],
      cta: "Explore Our Vision →"
    },
    mission: {
      title: "Delivering Excellence in Every Line of Code",
      subtitle: "Transforming ideas into robust, scalable software solutions",
      points: [
        "Crafting bespoke software with agile development methodologies",
        "Providing continuous learning and knowledge transfer to clients",
        "Collaborating with industry leaders to drive innovation",
        "Nurturing Indonesia's tech talent ecosystem"
      ],
      cta: "See Our Work →"
    },
    values: {
      title: "Code with Integrity, Build with Passion",
      subtitle: "Our principles guide every project we undertake",
      points: [
        "Technical excellence as our foundation for every solution",
        "Continuous innovation through R&D and experimentation",
        "Transparent collaboration with clients and partners",
        "Sustainable development practices for long-term success"
      ],
      cta: "Join Our Culture →"
    }
  }

  const timeline = [
    { 
      year: '2016', 
      title: 'Foundation', 
      description: 'PT. Nutanics established with focus on custom software',
      milestone: true,
      tech: ['React', 'Node.js']
    },
    { 
      year: '2018', 
      title: 'Cloud Expansion', 
      description: 'Launched cloud-native solutions for enterprise clients',
      milestone: true,
      tech: ['AWS', 'Docker']
    },
    { 
      year: '2020', 
      title: 'AI Integration', 
      description: 'Incorporated machine learning into our service offerings',
      milestone: true,
      tech: ['Python', 'TensorFlow']
    },
    { 
      year: '2023', 
      title: 'Scale-Up', 
      description: 'Expanded to serve 50+ enterprise clients across ASEAN',
      milestone: false,
      tech: ['Kubernetes', 'Microservices']
    },
    { 
      year: '2025', 
      title: 'Innovation Hub', 
      description: 'Launching our R&D center for emerging technologies',
      milestone: true,
      tech: ['Web3', 'Edge AI']
    },
  ]

  // Intersection Observer untuk trigger animations
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
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-cyan-50/10"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating code elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-sm text-blue-400/20 animate-float pointer-events-none"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.sin(i) * 40}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {i % 3 === 0 ? '<div>' : i % 3 === 1 ? 'function()' : 'const ='}
          </div>
        ))}

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with animation */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-blue-100 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700 tracking-wider">
              ABOUT OUR JOURNEY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
            <span className="block">Building Digital</span>
            <span className="font-normal">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                Excellence Since 2016
              </span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From startup to industry leader, we've been crafting software solutions that transform businesses 
            and push the boundaries of what's possible with technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Interactive Content */}
          <div className="space-y-8">
            {/* Animated Tabs */}
            <div className={`bg-white/90 backdrop-blur-sm rounded-2xl p-1 border border-gray-200 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-3 gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-500 group ${
                      activeTab === tab.id 
                        ? 'bg-gradient-to-r shadow-lg' 
                        : 'hover:bg-white/50'
                    } ${tab.color}`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-transform ${
                      activeTab === tab.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-100 text-gray-600 group-hover:scale-110'
                    }`}>
                      <i className={`${tab.icon} text-lg`}></i>
                    </div>
                    <span className={`font-semibold transition-colors ${
                      activeTab === tab.id ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Card with enhanced animations */}
            <div className={`bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/40 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.2s' }}>
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {content[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {content[activeTab].subtitle}
                </p>
              </div>
              
              <ul className="space-y-5 mb-10">
                {content[activeTab].points.map((point, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-4 group cursor-pointer p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <i className="fas fa-check text-blue-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors flex-1">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="group w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-1">
                <span className="flex items-center justify-center gap-3">
                  <span>{content[activeTab].cta}</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </span>
              </button>
            </div>

            {/* Interactive Timeline */}
            <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-10 text-white overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-history text-2xl text-cyan-400"></i>
                    <h3 className="text-2xl font-bold">Our Evolution</h3>
                  </div>
                  <p className="text-gray-400">Milestones in our tech journey</p>
                </div>
                <div className="text-4xl font-light text-gray-700">2016-2025</div>
              </div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"></div>
                
                {timeline.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-6 mb-8 last:mb-0 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                        item.milestone 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30' 
                          : 'bg-gray-800 border border-gray-700'
                      }`}>
                        <span className={`font-bold text-lg ${item.milestone ? 'text-white' : 'text-gray-400'}`}>
                          {item.year}
                        </span>
                      </div>
                      {item.tech && (
                        <div className="mt-3 flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.tech.map((tech, techIdx) => (
                            <span key={techIdx} className="px-2 py-1 bg-gray-800 text-xs text-cyan-300 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 pt-2">
                      <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50 backdrop-blur-sm group-hover:border-cyan-500/30 transition-all duration-300 group-hover:bg-gray-800/70">
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        {item.milestone && (
                          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs">
                            <i className="fas fa-star"></i>
                            <span>Key Milestone</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Team */}
          <div className="space-y-8">
            {/* Animated Stats Grid */}
            <div className={`grid grid-cols-2 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer ${
                    hoveredStat === idx ? 'ring-2 ring-blue-500/20' : ''
                  }`}
                  onMouseEnter={() => setHoveredStat(idx)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  {/* Animated background on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <i className={`${stat.icon} text-white text-xl`}></i>
                      </div>
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {stat.change}
                      </span>
                    </div>
                    
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    
                    <div className="text-lg font-semibold text-gray-800 mb-2">
                      {stat.label}
                    </div>
                    
                    <div className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.description}
                    </div>
                    
                    {/* Animated progress bar */}
                    <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ${
                          hoveredStat === idx ? 'w-full' : 'w-0'
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Team Section */}
            <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-10 text-white overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-6 mb-10">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <i className="fas fa-users text-3xl"></i>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold">
                    50+
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Elite Development Team</h3>
                  <p className="text-gray-400">Senior engineers & architects</p>
                </div>
              </div>
              
              {/* Tech Stack Badges */}
              <div className="mb-10">
                <p className="text-gray-400 mb-4">Core Expertise</p>
                <div className="flex flex-wrap gap-3">
                  {['React.js', 'Node.js', 'Python', 'AWS', 'Kubernetes', 'TypeScript', 'Docker', 'GraphQL'].map((tech, idx) => (
                    <div 
                      key={idx} 
                      className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors cursor-pointer group"
                    >
                      <span className="text-sm text-gray-300 group-hover:text-cyan-400">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="text-center p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
                  <div className="text-2xl font-bold text-cyan-400">15+</div>
                  <div className="text-xs text-gray-400 mt-1">Senior Devs</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
                  <div className="text-2xl font-bold text-cyan-400">8+</div>
                  <div className="text-xs text-gray-400 mt-1">Years Avg XP</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
                  <div className="text-2xl font-bold text-cyan-400">Git</div>
                  <div className="text-xs text-gray-400 mt-1">Expertise</div>
                </div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Our team combines deep technical expertise with creative problem-solving to deliver 
                exceptional software solutions that drive business growth.
              </p>

              <button className="group w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-105">
                <span className="flex items-center justify-center gap-3">
                  <i className="fas fa-user-plus"></i>
                  <span>Join Our Engineering Team</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </span>
              </button>
            </div>

            {/* Certifications Carousel */}
            <div className={`grid grid-cols-2 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1s' }}>
              <div className="bg-gradient-to-r from-white to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <i className="fas fa-award text-white text-2xl"></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <i className="fas fa-check text-green-500 text-xs"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">ISO 27001:2022</h4>
                    <p className="text-sm text-gray-600">Security Management</p>
                    <div className="mt-2 text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Certified since 2020
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-white to-emerald-50/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                      <i className="fas fa-shield-check text-white text-2xl"></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <i className="fas fa-star text-yellow-500 text-xs"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">AWS Partner</h4>
                    <p className="text-sm text-gray-600">Cloud Excellence</p>
                    <div className="mt-2 text-xs text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Advanced Tier
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.1; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        
        .animate-float {
          animation: float 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  )
}

export default About