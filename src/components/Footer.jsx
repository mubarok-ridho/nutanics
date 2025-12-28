import { useState } from 'react'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Klien', href: '#clients' },
    { name: 'Kontak', href: '#contact' },
  ]

  const services = [
    { name: 'Security Solution' },
    { name: 'General IT Services' },
    { name: 'Cloud Computing' },
    { name: 'IT Infrastucture' },
  ]

  const contactInfo = [
    { icon: Mail, text: 'commercial@nutanics.co.id', href: 'mailto:commercial@nutanics.co.id' },
    { icon: Phone, text: '+62 21 1234 5678', href: 'tel:+622112345678' },
    { icon: MapPin, text: 'Jl. Abadi Setia Budi, Medan', href: 'https://maps.app.goo.gl/NzH8t5sUZYpgPSjC9' },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      alert('Terima kasih telah berlangganan newsletter!')
      setEmail('')
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="https://res.cloudinary.com/doafwrddd/image/upload/v1766936388/Screenshot_2025-12-28_223621-removebg-preview_fjetbl.png"
                alt="Pt. Nutanics"
                className="w-32 h-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Penyedia solusi keamanan siber terdepan di Indonesia, berkomitmen melindungi ekosistem digital bisnis Anda.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Tautan Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Layanan</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Kontak</h4>
            <div className="space-y-3">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  target={info.icon === MapPin ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <info.icon className="w-4 h-4" />
                  <span className="break-words">{info.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} PT. Numerik Talenta Teknologi. All rights reserved.</p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Syarat Layanan
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Peta Situs
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer