import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-nutanics-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-nutanics-black">Hubungi </span>
            <span className="bg-gradient-to-r from-nutanics-blue to-nutanics-dark bg-clip-text text-transparent">
              Kami
            </span>
          </h2>
          <p className="text-lg text-nutanics-gray max-w-3xl mx-auto">
            Siap melindungi bisnis Anda? Hubungi tim kami untuk konsultasi gratis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-nutanics-blue/10 to-nutanics-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-nutanics-blue" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-nutanics-dark text-lg">Telepon</h4>
                <p className="text-nutanics-gray">+62 21 1234 5678</p>
                <p className="text-sm text-nutanics-gray">Senin - Jumat, 08:00 - 17:00 WIB</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-nutanics-blue/10 to-nutanics-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-nutanics-blue" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-nutanics-dark text-lg">Email</h4>
                <p className="text-nutanics-gray">info@nutanics.co.id</p>
                <p className="text-sm text-nutanics-gray">Respon dalam 1-2 jam kerja</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-nutanics-blue/10 to-nutanics-dark/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-nutanics-blue" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-nutanics-dark text-lg">Kantor Pusat</h4>
                <p className="text-nutanics-gray">Jl. Sudirman No. 123, Jakarta Selatan</p>
                <p className="text-sm text-nutanics-gray">Gedung Cyber Security Tower Lt. 15</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-nutanics-blue/5 to-nutanics-dark/5 rounded-xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-nutanics-blue" size={24} />
                <h4 className="font-semibold text-nutanics-dark">Butuh Bantuan Cepat?</h4>
              </div>
              <p className="text-sm text-nutanics-gray mb-4">
                Tim support kami siap membantu 24/7 untuk emergency security incidents.
              </p>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <Send size={18} />
                Emergency Contact
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-nutanics-light">
            <h3 className="text-2xl font-bold text-nutanics-dark mb-2">Konsultasi Gratis</h3>
            <p className="text-nutanics-gray mb-8">Isi formulir dan kami akan menghubungi Anda.</p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-nutanics-dark mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-nutanics-gray/30 focus:border-nutanics-blue focus:ring-2 focus:ring-nutanics-blue/20 outline-none transition-colors"
                  placeholder="Nama Anda"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-nutanics-dark mb-2">Email Perusahaan</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-nutanics-gray/30 focus:border-nutanics-blue focus:ring-2 focus:ring-nutanics-blue/20 outline-none transition-colors"
                  placeholder="email@perusahaan.co.id"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-nutanics-dark mb-2">Perusahaan</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-nutanics-gray/30 focus:border-nutanics-blue focus:ring-2 focus:ring-nutanics-blue/20 outline-none transition-colors"
                  placeholder="Nama Perusahaan"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-nutanics-dark mb-2">Pesan</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-nutanics-gray/30 focus:border-nutanics-blue focus:ring-2 focus:ring-nutanics-blue/20 outline-none transition-colors resize-none"
                  placeholder="Deskripsikan kebutuhan keamanan Anda..."
                />
              </div>
              
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send size={18} />
                Kirim Permintaan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact