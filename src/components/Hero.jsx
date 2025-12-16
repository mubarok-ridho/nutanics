import { useState, useEffect } from 'react'

const Hero = () => {
  const [activeStat, setActiveStat] = useState(0)
  const [hoveredService, setHoveredService] = useState(null)
  const [textReveal, setTextReveal] = useState(false)

  const stats = [
    { value: '50+', label: 'Global Enterprises', description: 'Digital Transformation Partners' },
    { value: '99.9%', label: 'System Reliability', description: 'Enterprise Grade SLA' },
    { value: '200+', label: 'Projects Delivered', description: 'Successful Implementations' },
    { value: '5+', label: 'Industry Awards', description: 'Excellence Recognition' }
  ]

  const services = [
    { name: 'AI Solutions', description: 'Enterprise AI implementation & consulting' },
    { name: 'Cloud Infrastructure', description: 'Scalable cloud architecture & migration' },
    { name: 'Data Analytics', description: 'Advanced analytics & business intelligence' },
    { name: 'IoT Systems', description: 'Connected devices & smart solutions' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setTextReveal(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Main Background Image with Colorful Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/doafwrddd/image/upload/v1765811552/asset_d7amsx.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Colorful Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-cyan-500/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-indigo-500/15"></div>
        
        {/* White Overlay for Content Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/90"></div>
        
        {/* Light Blue Accent Gradient */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-50/40 to-transparent"></div>
        
        {/* Floating Colorful Shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-3xl"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-blue-100 transition-all duration-700 ${textReveal ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">
                Enterprise Technology Solutions
              </span>
            </div>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6 transition-all duration-1000 ${textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Intelligent Digital
              <span className="block font-normal relative">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  Transformation
                </span>
                {/* Glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 blur-xl opacity-30 -z-0"></span>
              </span>
              For Modern Enterprises
            </h1>
            
            <p className={`text-lg text-gray-700 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-300 ${textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              PT. Nutanics delivers strategic technology solutions that drive innovation, 
              optimize operations, and create sustainable competitive advantages.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <span>Start Partnership</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
              
              <button className="group px-8 py-3 bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-white hover:border-blue-300 hover:text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Our Work</span>
                </div>
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Core Services</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Comprehensive solutions designed for enterprise success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 ${
                    hoveredService === index ? 'transform scale-[1.02]' : ''
                  }`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Colorful Background Blur */}
                  <div className={`absolute inset-0 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                    index === 0 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' :
                    index === 1 ? 'bg-gradient-to-r from-indigo-400 to-blue-400' :
                    index === 2 ? 'bg-gradient-to-r from-cyan-400 to-teal-400' :
                    'bg-gradient-to-r from-purple-400 to-pink-400'
                  }`}></div>
                  
                  <div className="relative">
                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        index === 0 ? 'bg-blue-100 text-blue-600' :
                        index === 1 ? 'bg-indigo-100 text-indigo-600' :
                        index === 2 ? 'bg-cyan-100 text-cyan-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {index === 0 && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        )}
                        {index === 3 && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                    
                    <div className={`mt-4 h-1 rounded-full transition-all duration-300 ${
                      index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                      index === 1 ? 'bg-gradient-to-r from-indigo-500 to-blue-500' :
                      index === 2 ? 'bg-gradient-to-r from-cyan-500 to-teal-500' :
                      'bg-gradient-to-r from-purple-500 to-pink-500'
                    } ${hoveredService === index ? 'w-full' : 'w-12'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Achievements */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 p-8 mb-20 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left - Stats */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">Our Impact in Numbers</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className={`p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 ${
                        activeStat === index ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 transform -translate-y-1' : 'bg-white'
                      }`}
                      onMouseEnter={() => setActiveStat(index)}
                    >
                      <div className="text-3xl font-light text-gray-900 mb-1">{stat.value}</div>
                      <div className={`font-medium mb-1 ${
                        index === 0 ? 'text-blue-600' :
                        index === 1 ? 'text-cyan-600' :
                        index === 2 ? 'text-indigo-600' :
                        'text-purple-600'
                      }`}>{stat.label}</div>
                      <div className="text-gray-600 text-sm">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Achievements */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">Awards & Recognition</h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Innovation Excellence 2024</h3>
                        <p className="text-gray-600 text-sm">Tech Leaders Summit - For outstanding digital transformation solutions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">ISO 27001 Certified</h3>
                        <p className="text-gray-600 text-sm">Enterprise Security & Data Protection Standards</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl border border-cyan-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Best Enterprise Solution 2023</h3>
                        <p className="text-gray-600 text-sm">Global Business Awards - Cloud Infrastructure Category</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted By */}
          <div className="text-center">
            <p className="text-gray-700 mb-8">Trusted by leading enterprises worldwide</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="group flex items-center justify-center p-4">
                  <div className="w-32 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <div className="text-gray-500 font-medium text-sm group-hover:text-blue-600 transition-colors duration-300">
                      Client {i + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero