import { Shield, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Klien', href: '#clients' },
    { name: 'Kontak', href: '#contact' },
  ]

  const services = [
    { name: 'Security Audit' },
    { name: 'Data Protection' },
    { name: 'Cloud Security' },
    { name: 'Network Defense' },
  ]

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-nutanics-dark text-white">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-nutanics-blue to-cyan-400 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">PT. Nutanics</h3>
                <p className="text-sm text-cyan-100">Numerik Talenta Teknologi</p>
              </div>
            </div>
            <p className="text-cyan-100/80 mb-6">
              Penyedia solusi keamanan siber terdepan di Indonesia, berkomitmen melindungi ekosistem digital bisnis Anda.
            </p>
            <div className="flex space-x-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 bg-nutanics-black/30 hover:bg-nutanics-blue rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cyan-100/80 hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name} className="text-cyan-100/80">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-cyan-100/80 mb-4">
              Dapatkan update terbaru tentang keamanan siber dan tips keamanan.
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-3 bg-nutanics-black/30 border border-cyan-900 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-4 bg-gradient-to-r from-nutanics-blue to-cyan-400 hover:opacity-90 transition-opacity rounded-r-lg">
                <Mail size={20} />
              </button>
            </div>
            <p className="text-sm text-cyan-100/60">
              Bergabung dengan 1000+ profesional IT
            </p>
          </div>
        </div>

        <div className="border-t border-cyan-900 mt-12 pt-8 text-center text-cyan-100/60">
          <p>© {new Date().getFullYear()} PT. Numerik Talenta Teknologi. Semua hak dilindungi undang-undang.</p>
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat Layanan</a>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer