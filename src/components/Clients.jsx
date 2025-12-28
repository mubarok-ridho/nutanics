import { Building2, Globe, Shield } from 'lucide-react'

const Clients = () => {
  const clients = [
    { name: 'Bank Nasional', sector: 'Financial', logo: '🏦' },
    { name: 'Telco Indonesia', sector: 'Telecommunication', logo: '📡' },
    { name: 'E-commerce Giant', sector: 'E-commerce', logo: '🛒' },
  ]

  return (
    <section id="clients" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-nutanics-black">Klien yang </span>
            <span className="bg-gradient-to-r from-nutanics-blue to-nutanics-dark bg-clip-text text-transparent">
              Mempercayai Kami
            </span>
          </h2>
          <p className="text-lg text-nutanics-gray max-w-3xl mx-auto">
            Kami bangga bermitra dengan perusahaan-perusahaan terkemuka di Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white to-nutanics-light rounded-xl p-6 border border-nutanics-light hover:border-nutanics-blue/30 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{client.logo}</div>
                <div>
                  <h3 className="font-bold text-nutanics-dark">{client.name}</h3>
                  <p className="text-sm text-nutanics-gray">{client.sector}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-nutanics-gray">
                <Shield size={14} className="text-green-500" />
                <span>Protected since 2022</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients