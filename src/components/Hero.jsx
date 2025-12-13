import { useState, useEffect } from 'react'

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0)
  const words = ['Data', 'Sistem', 'Cloud', 'Network', 'Aplikasi']

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen pt-24 lg:pt-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nutanics-light via-white to-nutanics-blue/10"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-nutanics-blue to-transparent animate-pulse-slow"></div>
      
      {/* Wave Effect */}
      <div className="wave-container absolute bottom-0 left-0 right-0 h-32">
        <div className="wave"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-nutanics-blue/10 to-nutanics-dark/10 border border-nutanics-blue/20 rounded-full px-4 py-2 backdrop-blur-sm animate-fade-in">
              <i className="fas fa-bolt text-nutanics-blue"></i>
              <span className="text-sm font-semibold gradient-text">
                Next-Gen Security Solutions
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="block text-nutanics-black">Lindungi</span>
                <div className="h-20 md:h-24 lg:h-28 overflow-hidden">
                  {words.map((word, index) => (
                    <div
                      key={word}
                      className={`transition-all duration-700 ${index === textIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
                      style={{ position: index === textIndex ? 'relative' : 'absolute' }}
                    >
                      <span className="gradient-text">{word}</span>
                    </div>
                  ))}
                </div>
                <span className="block text-nutanics-black">Digital Anda</span>
              </h1>
              
              <p className="text-lg md:text-xl text-nutanics-gray max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                PT. Nutanics menyediakan solusi keamanan siber terintegrasi dengan teknologi AI mutakhir untuk melindungi bisnis digital dari ancaman modern.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '<50ms', label: 'Response' },
                { value: '24/7', label: 'Support' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-nutanics-light hover:border-nutanics-blue/30 transition-colors hover:scale-105">
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-nutanics-gray mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-nutanics-blue to-nutanics-dark text-white font-semibold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-nutanics-blue/40 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-nutanics-dark to-nutanics-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <i className="fas fa-play-circle"></i>
                  <span>Demo Gratis</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </span>
              </button>
              
              <button className="px-8 py-4 border-2 border-nutanics-blue/30 text-nutanics-blue font-semibold rounded-xl hover:bg-nutanics-blue/5 hover:border-nutanics-blue transition-all duration-500 hover:scale-105 group">
                <span className="flex items-center justify-center space-x-3">
                  <i className="fas fa-book-open group-hover:rotate-12 transition-transform"></i>
                  <span>Pelajari Lebih</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - 3D Card Effect */}
          <div className="relative animate-slide-in-right">
            {/* Main Card */}
            <div className="relative z-10 bg-gradient-to-br from-white to-nutanics-light/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 transform perspective-1000 hover:rotate-y-6 transition-transform duration-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-nutanics-blue to-cyan-400 rounded-xl blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-nutanics-blue to-cyan-400 rounded-xl flex items-center justify-center">
                    <i className="fas fa-shield-alt text-white text-2xl"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-nutanics-dark">Nutanics AI Shield</h3>
                  <p className="text-nutanics-blue">Real-time Threat Detection</p>
                </div>
              </div>
              
              {/* Animated Progress Bars */}
              <div className="space-y-6">
                {[
                  { label: 'Threat Prevention', value: 95, color: 'from-green-400 to-emerald-500' },
                  { label: 'System Integrity', value: 98, color: 'from-blue-400 to-cyan-500' },
                  { label: 'Data Encryption', value: 99, color: 'from-purple-400 to-violet-500' },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-nutanics-dark">{item.label}</span>
                      <span className="text-sm font-bold text-nutanics-blue">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-nutanics-light rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: '0%' }}
                        ref={(el) => {
                          if (el) {
                            setTimeout(() => {
                              el.style.width = `${item.value}%`
                            }, idx * 300)
                          }
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Live Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-nutanics-blue/5 to-transparent border border-nutanics-blue/10">
                  <div className="text-2xl font-bold text-nutanics-dark">1.2K+</div>
                  <div className="text-xs text-nutanics-gray">Threats Blocked</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-nutanics-dark/5 to-transparent border border-nutanics-dark/10">
                  <div className="text-2xl font-bold text-nutanics-dark">0</div>
                  <div className="text-xs text-nutanics-gray">Data Breaches</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-64 bg-gradient-to-br from-nutanics-blue/10 to-cyan-400/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-nutanics-blue to-cyan-400 rounded-lg flex items-center justify-center">
                  <i className="fas fa-lock text-white"></i>
                </div>
                <div>
                  <div className="font-semibold text-nutanics-dark">AES-256 Encryption</div>
                  <div className="text-xs text-nutanics-gray">Military Grade</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-64 bg-gradient-to-br from-nutanics-dark/10 to-nutanics-blue/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-nutanics-dark to-nutanics-blue rounded-lg flex items-center justify-center">
                  <i className="fas fa-bolt text-white"></i>
                </div>
                <div>
                  <div className="font-semibold text-nutanics-dark">Real-time AI</div>
                  <div className="text-xs text-nutanics-gray">24/7 Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-nutanics-gray animate-pulse">Scroll</span>
          <div className="w-6 h-10 border-2 border-nutanics-blue/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gradient-to-b from-nutanics-blue to-nutanics-dark rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero