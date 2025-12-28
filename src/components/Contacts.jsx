import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Send,
  MessageSquare, Clock, ExternalLink,
  CheckCircle, AlertCircle, Building,
  Shield, User, MailCheck, Globe,
  Navigation, Info
} from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Contact Information - Nutanics
  const contactInfo = {
    email: 'commercial@nutanics.co.id',
    phone: '+62 21 1234 5678',
    // phoneWhatsapp: '082112345678',
    location: 'Jl. Abadi Setia Budi',
    locationDetails: 'Komp Abadi Palace, Blok D13, Medan',
    coordinates: '3.573810, 98.630784',
    mapUrl: 'https://maps.app.goo.gl/NzH8t5sUZYpgPSjC9',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1381434111767!2d98.62820907489051!3d3.573817243994532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f5832dfbafb%3A0x77f4137bda6f8a98!2sJl.%20Abadi%20Setia%20Budi%2C%20Medan%20Maimun%2C%20Kec.%20Medan%20Maimun%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020158!5e0!3m2!1sid!2sid!4v1704876543210!5m2!1sid!2sid',
    gmailUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=commercial@nutanics.co.id'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fungsi untuk membuka Gmail dengan subject dan body
  const openGmailCompose = (subject = '', body = '') => {
    let gmailUrl = contactInfo.gmailUrl;

    if (subject || body) {
      gmailUrl += `&su=${encodeURIComponent(subject)}`;
      if (body) {
        gmailUrl += `&body=${encodeURIComponent(body)}`;
      }
    }

    // Deteksi perangkat mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Untuk mobile, buka Gmail app atau web
      window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      // Untuk desktop, buka di tab baru
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    }

    return true;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailStatus(null);

    const subject = `Konsultasi Security - ${formData.company || formData.name || 'Website Visitor'}`;
    const body = `Halo Tim Nutanics,

Saya tertarik untuk berkonsultasi mengenai solusi keamanan digital.

Data Kontak:
- Nama: ${formData.name}
- Email: ${formData.email}
- Perusahaan: ${formData.company}

Pesan:
${formData.message}

---
Pesan ini dikirim melalui website Nutanics`;

    try {
      const success = openGmailCompose(subject, body);

      if (success) {
        setEmailStatus({
          type: 'success',
          message: 'Membuka aplikasi email...',
          details: 'Jika tidak terbuka otomatis, silakan kirim email ke commercial@nutanics.co.id'
        });

        // Reset form
        setTimeout(() => {
          setFormData({ name: '', email: '', company: '', message: '' });
          setIsSubmitting(false);
        }, 2000);
      }
    } catch (error) {
      setEmailStatus({
        type: 'error',
        message: 'Gagal membuka email client',
        details: 'Silakan kirim email manual ke: commercial@nutanics.co.id'
      });
      setIsSubmitting(false);
    }
  };

  const handleDirectGmail = () => {
    openGmailCompose();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setEmailStatus({
      type: 'success',
      message: 'Email berhasil disalin!',
      details: 'Sekarang Anda bisa paste di aplikasi email favorit Anda'
    });
  };

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E40AF 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700">Hubungi Tim Kami</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Konsultasi <span className="font-normal bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Gratis</span>
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Diskusikan kebutuhan keamanan digital Anda dengan pakar kami
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="group"
              >
                <button
                  onClick={handleDirectGmail}
                  className="w-full text-left"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-blue-300">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-7 h-7 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Resmi</h4>
                        <p className="text-blue-700 font-medium">{contactInfo.email}</p>
                        <p className="text-sm text-gray-500 mt-1">Respon dalam 1-2 jam kerja</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </button>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="group"
              >
                <a
                  href={contactInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-blue-300">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-7 h-7 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">Kantor Pusat</h4>
                        <p className="text-gray-700">{contactInfo.location}</p>
                        <p className="text-sm text-gray-500 mt-1">{contactInfo.locationDetails}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-amber-400 group-hover:text-amber-600 transition-colors" />
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Quick Response Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-blue-600/5" />
              <div className="relative bg-white/80 backdrop-blur-sm p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emergency Security Support</h4>
                    <p className="text-sm text-gray-600">Tim khusus untuk insiden keamanan mendesak</p>
                  </div>
                </div>
                <button
                  onClick={() => window.open(`tel:${contactInfo.phone.replace(/\D/g, '')}`, '_blank')}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Emergency Contact
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Formulir Konsultasi</h3>
                <p className="text-gray-600">Isi data dan kami akan menghubungi Anda segera</p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Nama Lengkap *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center gap-1">
                        <MailCheck className="w-4 h-4" />
                        Email Perusahaan *
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="email@perusahaan.co.id"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      Nama Perusahaan *
                    </span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="PT. Nama Perusahaan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      Detail Kebutuhan Keamanan *
                    </span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    placeholder="Deskripsikan kebutuhan keamanan, infrastruktur saat ini, dan timeline proyek..."
                  />
                </div>

                {/* Status Message */}
                {emailStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border ${emailStatus.type === 'success'
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : 'bg-red-50 border-red-200 text-red-800'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      {emailStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <div className="font-medium">{emailStatus.message}</div>
                        <div className="text-sm mt-1 opacity-90">{emailStatus.details}</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="grid sm:grid-cols-1 gap-1">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-4 px-6 bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-800 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Mengirim...</span>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      </>
                    ) : (
                      <>
                        <span>Kirim via Email</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>

                <div className="text-center pt-4 border-t border-blue-100">
                  <p className="text-sm text-gray-500">
                    Atau langsung email ke:{" "}
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                    >
                      {contactInfo.email}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Lokasi Kantor Kami</h3>
              <p className="text-gray-600">
                Kunjungi kantor kami untuk konsultasi langsung dengan tim kami
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={contactInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-blue-200 text-blue-700 rounded-xl font-medium hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-sm"
              >
                <Globe className="w-4 h-4" />
                Buka di Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${contactInfo.coordinates}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                Dapatkan Petunjuk
              </a>
            </div>
          </div>

          {/* Enhanced Map Container */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg overflow-hidden">
            <div className="relative h-[500px] bg-gradient-to-br from-blue-50/50 to-gray-50/50">
              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Memuat peta...</p>
                  </div>
                </div>
              )}
              
              <iframe
                src={contactInfo.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nutanics Office Location"
                className="absolute inset-0"
                onLoad={handleMapLoad}
              />
              
              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-blue-200 shadow-lg max-w-md">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Info className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Lokasi Tepat</h4>
                      <p className="text-sm text-gray-600">
                        {contactInfo.location}, {contactInfo.locationDetails}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                          Koordinat: {contactInfo.coordinates}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 border-t border-blue-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h4 className="font-medium text-gray-900">Alamat Lengkap</h4>
                  </div>
                  <p className="text-gray-700">{contactInfo.location}</p>
                  <p className="text-gray-600 text-sm">{contactInfo.locationDetails}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h4 className="font-medium text-gray-900">Jam Kunjungan</h4>
                  </div>
                  <p className="text-gray-700">Senin - Jumat: 08:00 - 17:00 WIB</p>
                  <p className="text-gray-600 text-sm">Mohon reservasi terlebih dahulu</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/10 to-cyan-500/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Jam Operasional</h4>
                <p className="text-sm text-gray-600">Senin - Jumat</p>
              </div>
            </div>
            <p className="text-gray-700">08:00 - 17:00 WIB</p>
            <p className="text-sm text-gray-500 mt-2">Emergency support: 24/7</p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/10 to-cyan-500/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Response Time</h4>
                <p className="text-sm text-gray-600">Waktu respon cepat</p>
              </div>
            </div>
            <p className="text-gray-700">Email: 1-2 jam kerja</p>
            <p className="text-sm text-gray-500 mt-2">WhatsApp: 15-30 menit</p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/10 to-cyan-500/10 flex items-center justify-center">
                <MailCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Follow-up</h4>
                <p className="text-sm text-gray-600">Timeline klarifikasi</p>
              </div>
            </div>
            <p className="text-gray-700">Follow-up dalam 24 jam</p>
            <p className="text-sm text-gray-500 mt-2">Termasuk proposal detail</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;