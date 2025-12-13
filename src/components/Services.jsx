const Services = () => {
  const services = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Security Audit & Assessment',
      description: 'Comprehensive security system analysis with detailed reports and improvement recommendations.',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Assessment'],
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: 'fas fa-fingerprint',
      title: 'Identity Management',
      description: 'Secure identity and access management system with multi-factor authentication.',
      features: ['Multi-factor Auth', 'Single Sign-On', 'Role-based Access'],
      gradient: 'from-purple-400 to-violet-500'
    },
    {
      icon: 'fas fa-database',
      title: 'Data Protection',
      description: 'End-to-end encryption solutions to protect sensitive data in storage and transit.',
      features: ['AES-256 Encryption', 'Data Loss Prevention', 'Key Management'],
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Security',
      description: 'Integrated security for cloud infrastructure with real-time monitoring.',
      features: ['Cloud Compliance', 'Container Security', 'Serverless Protection'],
      gradient: 'from-orange-400 to-red-500'
    },
    {
      icon: 'fas fa-network-wired',
      title: 'Network Defense',
      description: 'Network protection from DDoS attacks, malware, and intrusion with intelligent detection.',
      features: ['Firewall Management', 'Intrusion Detection', 'DDoS Mitigation'],
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      icon: 'fas fa-code',
      title: 'Secure Development',
      description: 'Security consultation and implementation throughout the software development lifecycle.',
      features: ['Code Review', 'Security Training', 'DevSecOps'],
      gradient: 'from-pink-400 to-rose-500'
    }
  ]

  return (
    <section id="services" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nutanics-light via-white to-blue-50"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-nutanics-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-nutanics-dark/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-nutanics-blue/10 to-nutanics-dark/10 rounded-full px-6 py-2 mb-6">
            <i className="fas fa-cogs text-nutanics-blue"></i>
            <span className="text-sm font-semibold gradient-text">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-nutanics-black">Comprehensive </span>
            <span className="gradient-text">Security Solutions</span>
          </h2>
          <p className="text-lg text-nutanics-gray max-w-3xl mx-auto">
            Tailored security solutions designed to meet the specific needs of your business infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-nutanics-light transition-all duration-700 hover:-translate-y-4 animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-nutanics-blue/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-nutanics-blue/20 to-nutanics-dark/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-nutanics-dark mb-4 group-hover:text-nutanics-blue transition-colors">
                {service.title}
              </h3>
              
              <p className="text-nutanics-gray mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-nutanics-blue to-cyan-400 rounded-full mr-3"></div>
                    <span className="text-nutanics-gray group-hover:text-nutanics-dark transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <button className="w-full py-3 border-2 border-nutanics-blue/30 text-nutanics-blue font-semibold rounded-xl hover:bg-nutanics-blue hover:text-white transition-all duration-500 group-hover:border-nutanics-blue flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </button>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-nutanics-blue/5 transform rotate-45 translate-x-16 -translate-y-16"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-nutanics-dark to-nutanics-black rounded-3xl p-8 lg:p-12 text-white overflow-hidden animate-slide-up">
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Need Custom Security Solution?
                </h3>
                <p className="text-cyan-100 mb-8">
                  Contact our experts for a tailored security assessment and solution design.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-nutanics-blue to-cyan-400 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-500 hover:scale-105">
                    <i className="fas fa-calendar-check mr-3"></i>
                    Schedule Consultation
                  </button>
                  <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-500">
                    <i className="fas fa-file-download mr-3"></i>
                    Download Brochure
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '100%', label: 'Client Satisfaction' },
                  { value: '50+', label: 'Projects Delivered' },
                  { value: '24/7', label: 'Support Available' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-nutanics-blue/30 transition-colors">
                    <div className="text-2xl lg:text-3xl font-bold text-nutanics-blue">{stat.value}</div>
                    <div className="text-sm text-cyan-100 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Animated Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-nutanics-blue/20 to-cyan-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-nutanics-dark/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  )
}

export default Services