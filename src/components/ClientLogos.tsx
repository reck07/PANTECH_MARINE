export default function ClientLogos() {
  // Using text-based logos for now - can be replaced with actual logo images
  const clients = [
    { name: 'Arabian Shipping Lines', category: 'Shipping' },
    { name: 'Dubai Port Authority', category: 'Port Authority' },
    { name: 'Global Heavy Lift', category: 'Logistics' },
    { name: 'Marine Insurance Group', category: 'Insurance' },
    { name: 'GCC Maritime', category: 'Shipping' },
    { name: 'Mediterranean Cargo', category: 'Logistics' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Serving leading companies across shipping, logistics, and maritime industries
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-200 h-32 hover:border-primary/30 group"
            >
              <div className="text-center">
                <div className="font-semibold text-sm text-gray-700 mb-1 group-hover:text-primary transition-colors">{client.name}</div>
                <div className="text-xs text-muted-foreground">{client.category}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            * Logo placeholders - replace with actual client logos
          </p>
        </div>
      </div>
    </section>
  )
}

