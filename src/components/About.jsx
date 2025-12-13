import { useState } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('vision')

  const stats = [
    { value: '50+', label: 'Enterprise Clients', icon: 'fas fa-building', change: '+15%' },
    { value: '99.9%', label: 'SLA Compliance', icon: 'fas fa-check-circle', change: '99.9%' },
    { value: '24/7', label: 'Support Team', icon: 'fas fa-headset', change: '100%' },
    { value: '5+', label: 'Years Experience', icon: 'fas fa-chart-line', change: '+2' },
  ]

  const tabs = [
    { id: 'vision', label: 'Our Vision', icon: 'fas fa-eye' },
    { id: 'mission', label: 'Our Mission', icon: 'fas fa-bullseye' },
    { id: 'values', label: 'Core Values', icon: 'fas fa-gem' },
  ]

  const content = {
    vision: {
      title: "Leading Cyber Security Innovation in Southeast Asia",
      points: [
        "Pioneering next-generation security solutions for digital transformation",
        "Building resilient digital ecosystems for Indonesian enterprises",
        "Setting industry benchmarks for security excellence",
        "Empowering businesses through cutting-edge technology"
      ]
    },
    mission: {
      title: "Protecting Digital Assets with Unmatched Excellence",
      points: [
        "Delivering comprehensive AI-driven security solutions",
        "Providing continuous education and security awareness",
        "Collaborating with industry for security standardization",
        "Developing Indonesia's cybersecurity talent pool"
      ]
    },
    values: {
      title: "Integrity, Innovation, Excellence",
      points: [
        "Uncompromising integrity in every security layer",
        "Continuous innovation as our growth driver",
        "Technical excellence that sets industry standards",
        "Collaborative approach for optimal solutions"
      ]
    }
  }

  return (
    <section id="about" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-nutanics-light/30 to-nutanics-blue/5"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-nutanics-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-nutanics-dark/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-nutanics-blue/10 to-nutanics-dark/10 rounded-full px-6 py-2 mb-6">
            <i className="fas fa-info-circle text-nutanics-blue"></i>
            <span className="text-sm font-semibold gradient-text">About Company</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-nutanics-black">PT. Numerik Talenta </span>
            <span className="gradient-text">Teknologi</span>
          </h2>
          <p className="text-lg text-nutanics-gray max-w-3xl mx-auto">
            Since 2019, we've been the trusted partner for securing Indonesia's digital infrastructure against evolving cyber threats.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Interactive Tabs */}
            <div className="bg-nutanics-light rounded-2xl p-1 animate-slide-up">
              <div className="grid grid-cols-3 gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-500 ${activeTab === tab.id ? 'bg-white shadow-lg' : 'hover:bg-white/50'}`}
                  >
                    <i className={`${tab.icon} text-xl mb-2 ${activeTab === tab.id ? 'text-nutanics-blue' : 'text-nutanics-gray'}`}></i>
                    <span className={`font-medium ${activeTab === tab.id ? 'text-nutanics-dark' : 'text-nutanics-gray'}`}>
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-nutanics-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-nutanics-dark mb-6">
                {content[activeTab].title}
              </h3>
              <ul className="space-y-4">
                {content[activeTab].points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-nutanics-blue/20 to-nutanics-dark/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <i className="fas fa-check text-nutanics-blue text-xs"></i>
                    </div>
                    <span className="text-nutanics-gray group-hover:text-nutanics-dark transition-colors">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-br from-nutanics-dark to-nutanics-black rounded-3xl p-8 text-white animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-3 mb-8">
                <i className="fas fa-history text-2xl text-nutanics-blue"></i>
                <h3 className="text-2xl font-bold">Our Journey</h3>
              </div>
              
              <div className="space-y-6 relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nutanics-blue via-cyan-400 to-transparent"></div>
                
                {[
                  { year: '2019', title: 'Foundation', desc: 'PT. Nutanics officially established', milestone: true },
                  { year: '2020', title: 'Expansion', desc: 'Serving 20+ enterprise clients' },
                  { year: '2022', title: 'AI Innovation', desc: 'Launched AI-powered security platform', milestone: true },
                  { year: '2024', title: 'Market Leader', desc: 'Becoming industry leader' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4 relative group">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${item.milestone ? 'bg-gradient-to-br from-nutanics-blue to-cyan-400' : 'bg-nutanics-dark border-2 border-nutanics-blue'}`}>
                      <span className={`font-bold ${item.milestone ? 'text-white' : 'text-nutanics-blue'}`}>
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 group-hover:border-nutanics-blue/30 transition-colors">
                      <h4 className="font-semibold text-white group-hover:text-nutanics-blue transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-cyan-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-nutanics-light shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 card-hover group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-nutanics-blue/10 to-nutanics-dark/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <i className={`${stat.icon} text-nutanics-blue text-xl`}></i>
                    </div>
                    <span className="text-sm font-semibold text-green-500 bg-green-50 px-3 py-1 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-nutanics-dark mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-nutanics-gray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Team Section */}
            <div className="bg-gradient-to-br from-nutanics-dark via-nutanics-black to-nutanics-dark/90 rounded-3xl p-8 text-white animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-nutanics-blue to-cyan-400 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-users text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Expert Team</h3>
                  <p className="text-cyan-100">Internationally Certified Professionals</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {['CISSP', 'CEH', 'CISM'].map((cert, idx) => (
                  <div key={idx} className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-xl font-bold text-nutanics-blue">{cert}</div>
                    <div className="text-xs text-cyan-100 mt-1">Certified</div>
                  </div>
                ))}
              </div>

              <p className="text-cyan-100/80 mb-8">
                Our team consists of cybersecurity experts with years of experience across finance, government, and technology sectors.
              </p>

              <button className="w-full py-4 bg-gradient-to-r from-nutanics-blue to-cyan-400 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-500 hover:scale-105 group">
                <span className="flex items-center justify-center space-x-3">
                  <i className="fas fa-handshake"></i>
                  <span>Meet Our Team</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </span>
              </button>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '1s' }}>
              <div className="bg-gradient-to-r from-white to-nutanics-light/50 backdrop-blur-sm rounded-2xl p-6 border border-nutanics-light">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                    <i className="fas fa-award text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-nutanics-dark">ISO 27001</h4>
                    <p className="text-sm text-nutanics-gray">Information Security</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-white to-nutanics-light/50 backdrop-blur-sm rounded-2xl p-6 border border-nutanics-light">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <i className="fas fa-shield-check text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-nutanics-dark">GDPR Compliant</h4>
                    <p className="text-sm text-nutanics-gray">Data Protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About