import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll
      const sections = ['home', 'about', 'services', 'clients', 'technology', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'Tentang Kami', icon: 'fas fa-building' },
    { id: 'services', label: 'Layanan', icon: 'fas fa-shield-alt' },
    { id: 'clients', label: 'Klien', icon: 'fas fa-users' },
    { id: 'technology', label: 'Teknologi', icon: 'fas fa-microchip' },
    { id: 'contact', label: 'Kontak', icon: 'fas fa-envelope' },
  ]

  // Function to handle image loading error
  const handleImageError = () => {
    setLogoError(true)
    console.log('Logo image failed to load, using fallback')
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-white/95 backdrop-blur-lg shadow-2xl shadow-nutanics-blue/20' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a 
            href="#home" 
            className="flex items-center space-x-3 group animate-slide-in-left no-underline"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-nutanics-blue to-nutanics-dark rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Logo Container */}
              <div className="relative p-2 bg-white rounded-xl shadow-sm border border-nutanics-light group-hover:border-nutanics-blue/30 transition-colors">
                {logoError ? (
                  // Fallback icon if image fails to load
                  <div className="w-10 h-10 bg-gradient-to-r from-nutanics-blue to-nutanics-dark rounded-lg flex items-center justify-center animate-pulse-slow">
                    <i className="fas fa-shield-alt text-white text-lg"></i>
                  </div>
                ) : (
                  // Logo Image
                  <img 
                    src="/src/assets/Logo.png" 
                    alt="PT. Nutanics - Numerik Talenta Teknologi" 
                    className="h-10 w-auto object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    onError={handleImageError}
                    loading="eager"
                  />
                )}
              </div>
            </div>
            
            {/* Company Name and Tagline */}
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-nutanics-dark group-hover:text-nutanics-blue transition-colors">
                PT. Nutanics
              </h1>
              <p className="text-xs text-nutanics-gray font-medium leading-tight max-w-[140px]">
                Numerik Talenta Teknologi
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-nutanics-blue/10 to-nutanics-dark/10 text-nutanics-blue border border-nutanics-blue/20 shadow-sm' 
                    : 'text-nutanics-gray hover:text-nutanics-blue hover:bg-nutanics-light'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(item.id)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                <i className={`${item.icon} text-sm`}></i>
                <span className="font-medium">{item.label}</span>
                {activeSection === item.id && (
                  <div className="w-2 h-2 bg-gradient-to-r from-nutanics-blue to-cyan-400 rounded-full animate-pulse"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button and Contact */}
          <div className="hidden lg:flex items-center space-x-4 animate-slide-in-right">
            {/* Contact Number - Visible on XL screens */}
            <a 
              href="tel:+622112345678" 
              className="hidden xl:flex items-center space-x-2 text-nutanics-gray hover:text-nutanics-blue transition-colors group/phone"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-nutanics-blue/10 rounded-full blur group-hover/phone:blur-sm transition-all"></div>
                <div className="relative w-8 h-8 bg-nutanics-light rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-xs text-nutanics-blue"></i>
                </div>
              </div>
              <div>
                <div className="text-xs text-nutanics-gray">Hubungi Kami</div>
                <div className="text-sm font-semibold text-nutanics-dark">+62 21 1234 5678</div>
              </div>
            </a>
            
            {/* Main CTA Button */}
            <button 
              className="group relative px-6 py-3 bg-gradient-to-r from-nutanics-blue to-nutanics-dark text-white font-semibold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-nutanics-blue/40 transition-all duration-500 hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-nutanics-dark to-nutanics-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center space-x-2">
                <i className="fas fa-comments"></i>
                <span className="hidden sm:inline">Konsultasi Gratis</span>
                <span className="sm:hidden">Konsultasi</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl bg-nutanics-light hover:bg-nutanics-blue/10 transition-colors focus:outline-none focus:ring-2 focus:ring-nutanics-blue/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-nutanics-dark text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-[600px] mt-4 opacity-100 visible' 
              : 'max-h-0 mt-0 opacity-0 invisible'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-nutanics-light animate-slide-up">
            {/* Mobile Contact Information */}
            <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-nutanics-light to-white rounded-xl border border-nutanics-light">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-nutanics-blue to-nutanics-dark rounded-lg flex items-center justify-center shadow-sm">
                  <i className="fas fa-headset text-white text-lg"></i>
                </div>
                <div>
                  <div className="text-sm font-semibold text-nutanics-gray">Call Center 24/7</div>
                  <a 
                    href="tel:+622112345678" 
                    className="text-nutanics-dark font-bold text-lg hover:text-nutanics-blue transition-colors"
                  >
                    +62 21 1234 5678
                  </a>
                </div>
              </div>
              <div className="flex space-x-2">
                <a 
                  href="mailto:info@nutanics.co.id"
                  className="w-10 h-10 bg-nutanics-blue/10 rounded-lg flex items-center justify-center text-nutanics-blue hover:bg-nutanics-blue hover:text-white transition-colors"
                  aria-label="Email us"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a 
                  href="https://wa.me/628112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors"
                  aria-label="Chat on WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            
            {/* Mobile Navigation Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-br from-nutanics-blue/10 to-nutanics-dark/10 border border-nutanics-blue/30 shadow-sm' 
                      : 'hover:bg-nutanics-light border border-transparent'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    const element = document.getElementById(item.id)
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }, 100)
                    }
                  }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-nutanics-blue to-cyan-400' 
                      : 'bg-nutanics-light'
                  }`}>
                    <i className={`${item.icon} ${activeSection === item.id ? 'text-white' : 'text-nutanics-blue'} text-lg`}></i>
                  </div>
                  <span className="text-sm font-medium text-nutanics-dark text-center">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="mt-2 w-1.5 h-1.5 bg-gradient-to-r from-nutanics-blue to-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </a>
              ))}
            </div>
            
            {/* Mobile CTA Button */}
            <button 
              className="w-full py-4 bg-gradient-to-r from-nutanics-blue to-nutanics-dark text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 group mb-4"
              onClick={() => {
                setIsMenuOpen(false)
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  setTimeout(() => {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 100)
                }
              }}
            >
              <i className="fas fa-calendar-check group-hover:scale-110 transition-transform"></i>
              <span>Jadwalkan Konsultasi</span>
              <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
            </button>
            
            {/* Quick Links Footer */}
            <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-nutanics-light text-xs">
              <a href="#" className="text-nutanics-gray hover:text-nutanics-blue transition-colors flex items-center">
                <i className="fas fa-user-shield mr-1.5"></i>
                Client Portal
              </a>
              <a href="#" className="text-nutanics-gray hover:text-nutanics-blue transition-colors flex items-center">
                <i className="fas fa-file-alt mr-1.5"></i>
                Blog & News
              </a>
              <a href="#" className="text-nutanics-gray hover:text-nutanics-blue transition-colors flex items-center">
                <i className="fas fa-download mr-1.5"></i>
                Resources
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress Indicator Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-nutanics-light to-transparent overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-nutanics-blue via-cyan-400 to-nutanics-blue animate-gradient"
          style={{ 
            width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`,
            transition: 'width 0.5s ease-in-out'
          }}
        ></div>
      </div>
    </header>
  )
}

export default Header