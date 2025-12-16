import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      
      // Update active section based on scroll
      const sections = ['home', 'services', 'clients', 'contact']
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
    { 
      id: 'home', 
      label: 'Home', 
      icon: HomeIcon,
      accent: 'from-blue-400 to-cyan-400'
    },
    { 
      id: 'services', 
      label: 'Services', 
      icon: ServicesIcon,
      accent: 'from-cyan-400 to-emerald-400'
    },
    { 
      id: 'clients', 
      label: 'Clients', 
      icon: ClientsIcon,
      accent: 'from-indigo-400 to-purple-400'
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: ContactIcon,
      accent: 'from-blue-500 to-violet-500'
    },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-gradient-to-b from-white/95 to-blue-50/95 backdrop-blur-xl shadow-lg border-b border-blue-100' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section dengan dominan biru */}
          <a 
            href="#home" 
            className="flex items-center space-x-3 group animate-slide-in-left no-underline"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            {/* Blue glow effect */}
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-blue-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Blue gradient border */}
              <div className="relative p-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-xl animate-gradient">
                <div className="p-2 bg-white rounded-lg shadow-inner">
                  <img 
                    src="https://res.cloudinary.com/doafwrddd/image/upload/v1765691516/image_5_1_mhx7xh.png" 
                    alt="PT. Nutanics - Cyber Security Solutions" 
                    className="h-10 w-auto object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
            
            {/* Company name dengan blue gradient */}
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-nutanics-dark via-nutanics-blue to-cyan-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                PT. Nutanics
              </h1>
              <p className="text-xs text-blue-600/70 font-medium leading-tight max-w-[140px] tracking-wide">
                <span className="bg-gradient-to-r from-blue-600/80 to-cyan-500/80 bg-clip-text text-transparent">
                  Numerik Talenta Teknologi
                </span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation dengan blue dominance */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group/nav relative flex items-center space-x-3 px-5 py-2.5 rounded-xl transition-all duration-500 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-blue-50/80 to-cyan-50/80 shadow-md border border-blue-100' 
                    : 'text-blue-800/70 hover:text-blue-900 hover:bg-blue-50/50'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(item.id)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                {/* Blue gradient circle */}
                <div className={`relative w-9 h-9 rounded-full flex items-center justify-center ${
                  activeSection === item.id 
                    ? `bg-gradient-to-br ${item.accent} shadow-lg shadow-blue-400/30` 
                    : `bg-gradient-to-br from-blue-100 to-cyan-50 group-hover/nav:bg-gradient-to-br ${item.accent}`
                } transition-all duration-500`}>
                  <div className={activeSection === item.id ? 'text-white' : 'text-blue-600 group-hover/nav:text-white transition-colors'}>
                    <item.icon />
                  </div>
                  
                  {/* Blue pulse effect for active */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-br from-blue-400/40 to-cyan-400/40"></div>
                  )}
                </div>
                
                {/* Label */}
                <span className={`font-medium transition-all duration-500 ${
                  activeSection === item.id 
                    ? `bg-gradient-to-r ${item.accent} bg-clip-text text-transparent font-semibold` 
                    : 'text-blue-800/80 group-hover/nav:text-blue-900'
                }`}>
                  {item.label}
                </span>
                
                {/* Blue active indicator line */}
                {activeSection === item.id && (
                  <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r ${item.accent} animate-pulse`}></div>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button dengan blue gradient */}
          <div className="hidden lg:flex items-center space-x-4 animate-slide-in-right">
            {/* Contact badge dengan blue gradient */}
            {/* <a 
              href="tel:+622112345678" 
              className="group/phone relative flex items-center space-x-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 hover:border-blue-300 transition-all duration-500 shadow-sm"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur group-hover/phone:blur-md transition-all"></div>
                <div className="relative w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <PhoneIcon className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="text-left">
                <div className="text-xs text-blue-600/70">Support 24/7</div>
                <div className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  +62 21 1234 5678
                </div>
              </div>
            </a> */}
            
            {/* Blue gradient CTA Button */}
            <button 
              className="group relative px-6 py-3 rounded-xl overflow-hidden transition-all duration-700 hover:scale-105 shadow-lg shadow-blue-400/20"
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              {/* Blue gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 animate-gradient"></div>
              
              {/* Water ripple effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Content */}
              <span className="relative flex items-center justify-center space-x-2 text-white font-semibold">
                <MessageIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Free Consultation</span>
                <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Blue floating bubbles */}
              <div className="absolute inset-0 overflow-hidden">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-float"
                    style={{
                      left: `${20 * i}%`,
                      top: `${30 + i * 10}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
            </button>
          </div>

          {/* Mobile Menu Button dengan blue gradient */}
          <button
            className="lg:hidden relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:border-blue-300 transition-all duration-500 group/menu focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {/* Blue gradient lines */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1.5">
              <div className={`w-6 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></div>
              <div className={`w-6 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-500 ${
                isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}></div>
              <div className={`w-6 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></div>
            </div>
            
            {/* Blue glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-xl opacity-0 group-hover/menu:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Mobile Navigation Panel dengan blue theme */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMenuOpen 
              ? 'max-h-[600px] mt-4 opacity-100 visible' 
              : 'max-h-0 mt-0 opacity-0 invisible'
          }`}
        >
          <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-2xl p-6 border border-blue-100 animate-slide-up">
            {/* Mobile Header dengan blue gradient */}
            <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-600/70">Emergency Support</div>
                  <a 
                    href="tel:+622112345678" 
                    className="text-lg font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent"
                  >
                    +62 21 1234 5678
                  </a>
                </div>
              </div>
              <div className="flex space-x-2">
                <a 
                  href="mailto:info@nutanics.co.id"
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300"
                  aria-label="Email"
                >
                  <MailIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/628112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 flex items-center justify-center text-green-600 hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-500 hover:text-white transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Mobile Navigation Grid dengan blue cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group/mobile relative flex flex-col items-center p-4 rounded-xl transition-all duration-500 ${
                    activeSection === item.id 
                      ? `bg-gradient-to-br ${item.accent} shadow-lg` 
                      : 'bg-gradient-to-br from-white to-blue-50 hover:shadow-md border border-blue-100'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    const element = document.getElementById(item.id)
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }, 300)
                    }
                  }}
                >
                  {/* Icon dengan blue background */}
                  <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-500 ${
                    activeSection === item.id 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-br from-blue-50 to-cyan-50 group-hover/mobile:from-blue-100 group-hover/mobile:to-cyan-100`
                  }`}>
                    <div className={activeSection === item.id ? 'text-white' : 'text-blue-600 group-hover/mobile:text-blue-700'}>
                      <item.icon />
                    </div>
                  </div>
                  
                  {/* Label */}
                  <span className={`text-sm font-medium text-center transition-all duration-500 ${
                    activeSection === item.id 
                      ? 'text-white font-semibold' 
                      : 'text-blue-800 group-hover/mobile:text-blue-900'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Blue sparkle effect for active */}
                  {activeSection === item.id && (
                    <div className="absolute top-2 right-2">
                      <SparkleIcon className="w-4 h-4 text-white/80 animate-spin-slow" />
                    </div>
                  )}
                </a>
              ))}
            </div>
            
            {/* Mobile CTA Button dengan blue gradient */}
            <button 
              className="group/cta w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-semibold transition-all duration-500 hover:shadow-xl hover:scale-105 mb-4"
              onClick={() => {
                setIsMenuOpen(false)
                setTimeout(() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }, 300)
              }}
            >
              <div className="flex items-center justify-center space-x-3">
                <CalendarIcon className="w-5 h-5 group-hover/cta:rotate-12 transition-transform" />
                <span>Book Free Demo</span>
                <ArrowIcon className="w-4 h-4 group-hover/cta:translate-x-2 transition-transform" />
              </div>
            </button>
            
            {/* Quick Links dengan blue theme */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-blue-100">
              {[
                { icon: ShieldIcon, label: 'Login', color: 'blue' },
                { icon: FileIcon, label: 'Blog', color: 'cyan' },
                { icon: DownloadIcon, label: 'Resources', color: 'indigo' },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group/link flex flex-col items-center space-y-1"
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-${link.color}-50 to-white border border-${link.color}-200 flex items-center justify-center group-hover/link:scale-110 group-hover/link:bg-gradient-to-br group-hover/link:from-${link.color}-500 group-hover/link:to-${link.color}-600 transition-all duration-300`}>
                    <link.icon className={`w-5 h-5 text-${link.color}-600 group-hover/link:text-white transition-colors`} />
                  </div>
                  <span className="text-xs text-blue-600/70 group-hover/link:text-blue-800 transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Blue Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-blue-500/30 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 transition-all duration-1000"
          style={{ 
            width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`,
          }}
        ></div>
      </div>
    </header>
  )
}

// Blue-themed SVG Icons
const HomeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const ServicesIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ClientsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0h-15" />
  </svg>
)

const ContactIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MessageIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

const ArrowIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.549 4.126 1.517 5.877L0 24l6.335-1.545A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.237 16.673c-.336 1.001-1.562 1.834-2.562 2.061-.924.204-2.134.367-3.675-.417-2.256-1.135-3.736-3.835-3.85-4.011-.115-.176-.924-1.379-.924-2.633 0-1.254.648-1.863.924-2.253.23-.332.512-.417.687-.417.176 0 .353 0 .506.006.177.006.416-.077.646.511.23.587.789 2.033.86 2.181.07.148.117.332.035.517-.083.185-.148.332-.294.516-.148.185-.294.37-.42.503-.14.148-.294.31-.126.587.168.277.75 1.213 1.609 1.966 1.122.973 2.074 1.279 2.357 1.416.282.138.448.115.615-.07.168-.185.721-.793.914-1.066.193-.273.385-.23.646-.138.262.092 1.656.782 1.94.924.283.142.47.212.54.332.07.119.07.677-.265 1.678z" />
  </svg>
)

const CalendarIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const ShieldIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const FileIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const DownloadIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
)

const SparkleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

export default Header