import { memo } from 'react'

const ClientLogos = memo(function ClientLogos() {
  const clients = [
    { name: 'HMM', type: 'logo', src: '/1.jpeg', alt: 'HMM' },
    { name: 'MUR Shipping', type: 'logo', src: '/2.jpeg', alt: 'MUR Shipping' },
    { name: 'CJ Logistics', type: 'logo', src: '/3.jpeg', alt: 'CJ Logistics' },
    { name: 'Kanoo Shipping', type: 'logo', src: '/4.jpeg', alt: 'Kanoo Shipping' },
    { name: 'Sako Arabia', type: 'text' },
    { name: 'Sedres Maritime', type: 'text' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" aria-labelledby="client-experience-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="client-experience-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
          Client Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team has provided marine and cargo-related services to shipowners, operators, logistics companies, insurers and cargo interests, including:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto" role="list">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group bg-white h-28 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-4"
              role="listitem"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {client.type === 'logo' ? (
                <>
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-h-12 max-w-[80%] w-auto h-auto object-contain transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="mt-2 font-heading font-medium text-sm text-gray-700 text-center">
                    {client.name}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-heading font-semibold tracking-wide text-gray-600 uppercase text-sm">
                    {client.name}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm italic text-muted-foreground">
          Additional project and client references can be provided subject to confidentiality requirements.
        </p>
      </div>
    </section>
  )
})

export default ClientLogos