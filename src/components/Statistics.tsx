import { Users, Award, Ship, Globe } from 'lucide-react'

export default function Statistics() {
  const stats = [
    {
      icon: Award,
      value: '40+',
      label: 'Years of Experience',
      description: 'Established in 1982'
    },
    {
      icon: Ship,
      value: '15,000+',
      label: 'Surveys Completed',
      description: 'Since inception'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Satisfied Clients',
      description: 'Trusted partners'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Ports Covered',
      description: 'GCC & Mediterranean'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-navy-deep via-primary to-steel-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'}}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Our track record speaks for itself
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all hover:scale-105 shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-3 font-heading">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-200">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

