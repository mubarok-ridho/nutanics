import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [activeStat, setActiveStat] = useState(0)
  const [hoveredService, setHoveredService] = useState(null)
  const [textReveal, setTextReveal] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  // Updated stats dengan lebih fokus pada software dev
  const stats = [
    { value: '150+', label: 'Software Projects', description: 'Delivered Successfully', color: 'text-blue-600', icon: '💻' },
    { value: '99.9%', label: 'Code Quality', description: 'Industry Best Practices', color: 'text-cyan-600', icon: '⚡' },
    { value: '50+', label: 'Global Clients', description: 'Across 20 Countries', color: 'text-indigo-600', icon: '🌍' },
    { value: '5+', label: 'Tech Awards', description: 'Innovation Excellence', color: 'text-purple-600', icon: '🏆' }
  ]

  // Services dengan lebih fokus pada software development
  const services = [
    { 
      name: 'Custom Software', 
      description: 'Tailored solutions for unique business challenges',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Cloud Platforms', 
      description: 'Scalable infrastructure for growing businesses',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
        </svg>
      ),
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI & Analytics', 
      description: 'Intelligent insights and automation solutions',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-cyan-500 to-teal-500'
    },
    { 
      name: 'DevOps & Security', 
      description: 'Secure and efficient development pipelines',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-violet-500 to-pink-500'
    }
  ]

  // Floating code elements untuk efek software development
  const codeElements = [
    { text: 'const innovate = () => {', top: '15%', left: '10%', delay: '0s' },
    { text: 'function transformBusiness()', top: '25%', left: '85%', delay: '0.5s' },
    { text: '<DevOps pipeline />', top: '70%', left: '15%', delay: '1s' },
    { text: 'AI.analyze(data)', top: '80%', left: '80%', delay: '1.5s' },
    { text: 'cloud.scale(infra)', top: '40%', left: '20%', delay: '2s' },
    { text: 'security.protect()', top: '60%', left: '70%', delay: '2.5s' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setTextReveal(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Mouse tracking untuk efek parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      setMousePosition({ x, y })
    }

    const container = containerRef.current
    container.addEventListener('mousemove', handleMouseMove)
    
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern untuk coding theme */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #3B82F6 1px, transparent 1px),
              linear-gradient(to bottom, #3B82F6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating code snippets */}
        {codeElements.map((code, index) => (
          <div
            key={index}
            className="absolute font-mono text-sm text-blue-400/40 animate-float pointer-events-none"
            style={{
              top: code.top,
              left: code.left,
              animationDelay: code.delay,
              transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
            }}
          >
            {code.text}
          </div>
        ))}

        {/* Abstract tech shapes */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/8 to-purple-400/8 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20">
            <div className={`inline-flex items-center gap-3 px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full mb-10 border border-blue-100 shadow-sm transition-all duration-700 ${textReveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700 tracking-wide">
                  SOFTWARE DEVELOPMENT EXCELLENCE
                </span>
              </div>
            </div>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-tight mb-8 transition-all duration-1000 ${textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Building Digital
              <span className="block font-normal mt-2">
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                    Solutions That Scale
                  </span>
                  <span className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-indigo-600/20 blur-2xl -z-10"></span>
                </span>
              </span>
              For Tomorrow's Challenges
            </h1>
            
            <p className={`text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-300 ${textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              We transform complex business needs into elegant, scalable software solutions. 
              From concept to deployment, we build technology that drives growth and innovation.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 delay-500 ${textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button className="group relative px-9 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="tracking-wide">Start Your Project</span>
                </div>
              </button>
              
              <button className="group px-9 py-3.5 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 font-medium rounded-xl hover:border-blue-300 hover:text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="tracking-wide">View Our Codebase</span>
                </div>
              </button>
            </div>
          </div>

          {/* Services Grid - Modernized */}
          <div className="mb-20 lg:mb-24">
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Our Development Stack</h2>
              <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                End-to-end solutions crafted with modern technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative p-7 bg-white/95 backdrop-blur-sm rounded-2xl border border-white/40 hover:border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    hoveredService === index ? 'ring-2 ring-blue-500/20' : ''
                  }`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    transform: hoveredService === index ? 'translateY(-8px)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    {/* Icon container */}
                    <div className={`mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                      {service.icon}
                    </div>
                    
                    {/* Service title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {service.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Animated underline */}
                    <div className={`h-0.5 bg-gradient-to-r ${service.color} transition-all duration-500 ${
                      hoveredService === index ? 'w-full' : 'w-16'
                    }`}></div>
                    
                    {/* Hover tech badges */}
                    <div className="mt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {index === 0 && ['React', 'Node.js', 'TypeScript'].map(tech => (
                        <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                      {index === 1 && ['AWS', 'Azure', 'Kubernetes'].map(tech => (
                        <span key={tech} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                      {index === 2 && ['TensorFlow', 'Python', 'ML'].map(tech => (
                        <span key={tech} className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                      {index === 3 && ['Docker', 'CI/CD', 'Security'].map(tech => (
                        <span key={tech} className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Tech Stack */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-white/40 p-8 lg:p-10 mb-20 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left - Stats */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-10">By The Numbers</h2>
                
                <div className="grid grid-cols-2 gap-5">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className={`p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer ${
                        activeStat === index 
                          ? 'bg-gradient-to-br from-blue-50/80 to-cyan-50/80 border-blue-200 transform -translate-y-1' 
                          : 'bg-white/80'
                      }`}
                      onMouseEnter={() => setActiveStat(index)}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">{stat.value}</div>
                          <div className={`font-semibold text-lg mb-1 ${stat.color}`}>{stat.label}</div>
                          <div className="text-gray-600 text-sm">{stat.description}</div>
                        </div>
                        <div className="text-2xl opacity-80">{stat.icon}</div>
                      </div>
                      
                      {/* Progress indicator */}
                      <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${stat.color.replace('text-', 'bg-')} transition-all duration-1000 ${
                            activeStat === index ? 'w-full' : 'w-0'
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Tech Stack */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-10">Our Technology Stack</h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-blue-50/60 to-cyan-50/60 rounded-2xl border border-blue-100/50">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Frontend Excellence</h3>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Next.js', 'Vue', 'TypeScript'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white text-blue-600 text-sm font-medium rounded-full border border-blue-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-indigo-50/60 to-purple-50/60 rounded-2xl border border-indigo-100/50">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Backend & Cloud</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Node.js', 'Python', 'AWS', 'Azure'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white text-indigo-600 text-sm font-medium rounded-full border border-indigo-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-cyan-50/60 to-teal-50/60 rounded-2xl border border-cyan-100/50">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">AI & Data Science</h3>
                        <div className="flex flex-wrap gap-2">
                          {['TensorFlow', 'PyTorch', 'ML', 'Big Data'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white text-cyan-600 text-sm font-medium rounded-full border border-cyan-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Partners */}
          <div className="text-center">
            <p className="text-gray-700 text-lg mb-10">Trusted by innovative teams at</p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {[
                { name: 'TechCorp', color: 'blue' },
                { name: 'DataFlow', color: 'cyan' },
                { name: 'CloudNet', color: 'indigo' },
                { name: 'SoftWorks', color: 'purple' },
                { name: 'AI Labs', color: 'violet' },
                { name: 'DevHub', color: 'pink' }
              ].map((company, i) => (
                <div key={i} className="group p-4">
                  <div className="w-full h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/40 hover:border-white hover:shadow-xl transition-all duration-300">
                    <div className={`text-sm font-medium bg-gradient-to-r ${
                      company.color === 'blue' ? 'from-blue-600 to-cyan-600' :
                      company.color === 'cyan' ? 'from-cyan-600 to-teal-600' :
                      company.color === 'indigo' ? 'from-indigo-600 to-purple-600' :
                      company.color === 'purple' ? 'from-purple-600 to-pink-600' :
                      company.color === 'violet' ? 'from-violet-600 to-fuchsia-600' :
                      'from-pink-600 to-rose-600'
                    } bg-clip-text text-transparent`}>
                      {company.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.2; }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Smooth transitions */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Glow effect for text */
        .glow-text {
          text-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  )
}

export default Hero