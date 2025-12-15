import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [activeStat, setActiveStat] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredService, setHoveredService] = useState(null)
  const [textReveal, setTextReveal] = useState(false)
  const containerRef = useRef(null)
  const statsRef = useRef(null)

  const stats = [
    { value: '50+', label: 'Global Enterprises', suffix: '', description: 'Digital Transformation Partners', icon: '🌍' },
    { value: '99.9%', label: 'System Reliability', suffix: '', description: 'Enterprise Grade SLA', icon: '⚡' },
    { value: '200+', label: 'Projects Delivered', suffix: '', description: 'Successful Implementations', icon: '🎯' },
    { value: '5+', label: 'Industry Awards', suffix: '', description: 'Excellence Recognition', icon: '🏆' }
  ]

  const services = [
    { name: 'AI Solutions', color: 'from-blue-500 to-cyan-500', icon: '🤖' },
    { name: 'Cloud Infrastructure', color: 'from-indigo-500 to-blue-500', icon: '☁️' },
    { name: 'Data Analytics', color: 'from-cyan-500 to-teal-500', icon: '📊' },
    { name: 'IoT Systems', color: 'from-purple-500 to-pink-500', icon: '🔗' }
  ]

  const achievements = [
    { year: '2024', title: 'Innovation Excellence Award', company: 'Tech Leaders Summit' },
    { year: '2023', title: 'Best Digital Transformation', company: 'Global Business Awards' },
    { year: '2022', title: 'Top AI Implementation', company: 'Enterprise Tech Forum' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - left) / width - 0.5) * 15
      const y = ((e.clientY - top) / height - 0.5) * 15
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setTextReveal(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-white"
    >
      {/* Modern Geometric Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main white background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, #3B82F6 1px, transparent 1px),
                             linear-gradient(180deg, #3B82F6 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
          }}></div>
        </div>

        {/* Main background image with white overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/doafwrddd/image/upload/v1765811552/asset_d7amsx.jpg)',
              transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px) scale(1.05)`,
              filter: 'grayscale(1) contrast(1.2)'
            }}
          ></div>
          
          {/* White gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
          
          {/* Accent gradient corners */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-50/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-50/40 via-transparent to-transparent"></div>
        </div>

        {/* Floating abstract shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 right-1/4 w-96 h-96 border-2 border-blue-100/30 rounded-full animate-float-slow"
            style={{ 
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px) rotate(${mousePosition.x * 0.1}deg)`
            }}
          ></div>
          
          <div 
            className="absolute bottom-1/3 left-1/4 w-64 h-64 border-2 border-cyan-100/20 rounded-full animate-float-slow"
            style={{ 
              animationDelay: '2s',
              transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * -0.15}px)`
            }}
          ></div>
        </div>

        {/* Subtle grid lines */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-100/20 to-transparent"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100/20 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-10 lg:space-y-12">
              {/* Professional Badge */}
              <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full transition-all duration-700 ${textReveal ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">
                    Enterprise Technology Partner
                  </span>
                </div>
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight transition-all duration-1000 ${textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <span className="block font-normal">Transforming</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Businesses
                    </span>{' '}
                    <span className="text-gray-800">with</span>
                  </span>
                  <span className="block font-normal">Intelligent Technology</span>
                </h1>
                
                <p className={`text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-1000 delay-300 ${textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  PT. Nutanics delivers enterprise-grade digital solutions that drive growth, 
                  optimize operations, and create sustainable competitive advantages through 
                  strategic technology implementation.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3 tracking-wide">
                    <span>Schedule Consultation</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                
                <button className="group px-8 py-4 border-2 border-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-300">
                  <span className="flex items-center justify-center gap-3 tracking-wide">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>View Case Studies</span>
                  </span>
                </button>
              </div>

              {/* Awards & Recognition */}
              <div className={`pt-6 transition-all duration-1000 delay-700 ${textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Industry Recognized</span>
                  </div>
                  <div className="flex gap-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="px-3 py-1.5 bg-blue-50/50 rounded-lg border border-blue-100">
                        <div className="text-xs font-semibold text-blue-700">{achievement.year}</div>
                        <div className="text-xs text-gray-600">{achievement.company}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Dashboard */}
            <div className="space-y-8">
              {/* Services Showcase */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Core Solutions</h3>
                  <span className="text-sm text-blue-600 font-medium">Explore →</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`group relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        hoveredService === index 
                          ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg shadow-blue-100/50'
                          : 'border-gray-100 hover:border-blue-100 hover:bg-blue-50/30'
                      }`}
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="text-3xl mb-4">{service.icon}</div>
                        {hoveredService === index && (
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className={`font-semibold transition-colors duration-300 ${
                          hoveredService === index ? 'text-blue-800' : 'text-gray-900'
                        }`}>
                          {service.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Enterprise-grade {service.name.toLowerCase()} solutions tailored to your business needs.
                        </p>
                      </div>
                      
                      <div className={`absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredService === index 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white translate-x-0 opacity-100'
                          : 'bg-blue-50 text-blue-500 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Stats Dashboard */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Performance Metrics</h3>
                  <div className="flex gap-1">
                    {stats.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStat(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeStat === index
                            ? 'w-6 bg-gradient-to-r from-blue-500 to-cyan-500'
                            : 'bg-blue-200 hover:bg-blue-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Animated Stats Display */}
                <div className="relative h-48">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      ref={activeStat === index ? statsRef : null}
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeStat === index
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="text-4xl">{stat.icon}</div>
                          <div>
                            <div className="text-5xl lg:text-6xl font-light bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                          </div>
                        </div>
                        <div className="text-lg font-medium text-gray-900">{stat.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Bar Chart Visualization */}
                <div className="mt-8">
                  <div className="flex items-end justify-between h-20 px-2">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div 
                          className={`w-12 transition-all duration-700 rounded-t-lg ${
                            activeStat === index
                              ? 'bg-gradient-to-t from-blue-600 to-cyan-500 h-16'
                              : 'bg-gradient-to-t from-blue-100 to-cyan-100 h-8'
                          }`}
                        ></div>
                        <div className={`text-xs mt-2 font-medium transition-colors duration-300 ${
                          activeStat === index ? 'text-blue-700' : 'text-gray-400'
                        }`}>
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Enterprise Security</div>
                    <div className="text-xs text-gray-500">ISO 27001 Certified</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-700">100%</div>
                  <div className="text-xs text-gray-500">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos Carousel */}
          <div className="mt-20 pt-10 border-t border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 font-light tracking-wider uppercase mb-2">
                Trusted By Industry Leaders
              </div>
              <div className="text-lg font-light text-gray-700">
                Partnering with forward-thinking enterprises across sectors
              </div>
            </div>
            
            <div className="relative">
              {/* Animated logos */}
              <div className="flex overflow-hidden">
                <div className="flex animate-scroll-slow">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="mx-8 flex-shrink-0">
                      <div className="w-32 h-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                        <div className="text-gray-400 font-light text-sm">
                          Client {i + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[...Array(8)].map((_, i) => (
                    <div key={`dup-${i}`} className="mx-8 flex-shrink-0">
                      <div className="w-32 h-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                        <div className="text-gray-400 font-light text-sm">
                          Client {i + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Gradient fades */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-400 font-light tracking-wider">Scroll to Explore</span>
          <div className="relative">
            <div className="w-6 h-10 border-2 border-gray-200 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full animate-bounce-slow"></div>
            </div>
            <div className="absolute inset-0 border-2 border-blue-200 rounded-full animate-ping opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-scroll-slow {
          animation: scroll-slow 40s linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero