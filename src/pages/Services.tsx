import { Ship, FileCheck, Shield, Scale, AlertTriangle, Package, CheckCircle, Clipboard } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Ship,
      title: 'Marine Claims',
      description: 'Expert assessment and documentation for marine insurance claims, cargo damage, and disputes.',
      details: [
        'Cargo damage assessment',
        'Insurance claim documentation',
        'Loss assessment and reporting',
        'Claim dispute resolution support'
      ]
    },
    {
      icon: Package,
      title: 'Heavy Lift Cargo',
      description: 'Specialized surveys for oversized, heavy lift, and project cargo shipments.',
      details: [
        'Pre-loading surveys',
        'Lashing and securing inspections',
        'On-board cargo monitoring',
        'Discharge surveys'
      ]
    },
    {
      icon: Shield,
      title: 'Classification Surveys',
      description: 'Comprehensive vessel and cargo classification surveys and inspections.',
      details: [
        'Vessel condition surveys',
        'Cargo classification',
        'Equipment inspections',
        'Compliance verification'
      ]
    },
    {
      icon: Scale,
      title: 'Draft Surveys',
      description: 'Accurate weight determination through professional draft surveys.',
      details: [
        'Pre-loading draft surveys',
        'Post-discharge surveys',
        'Weight calculations',
        'Documentation and reporting'
      ]
    },
    {
      icon: FileCheck,
      title: 'P&I Surveys',
      description: 'Protection & Indemnity surveys for vessel owners and operators.',
      details: [
        'P&I condition surveys',
        'Risk assessments',
        'Recommendation reports',
        'Compliance checks'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessments',
      description: 'Comprehensive risk evaluation for marine operations and cargo handling.',
      details: [
        'Operational risk analysis',
        'Safety assessments',
        'Mitigation recommendations',
        'Ongoing monitoring'
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-deep via-primary to-steel-dark text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-white/30 mb-6"></div>
          <p className="text-xl text-gray-100 max-w-3xl leading-relaxed">
            Comprehensive marine survey and consulting services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-6 text-center">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <Clipboard className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Detailed Reporting</h3>
                <p className="text-muted-foreground">
                  Comprehensive documentation and reports for all surveys and assessments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Certified Expertise</h3>
                <p className="text-muted-foreground">
                  All surveys conducted by certified and experienced marine surveyors.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">24/7 Availability</h3>
                <p className="text-muted-foreground">
                  Round-the-clock service for urgent marine survey requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <Ship className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Regional Coverage</h3>
                <p className="text-muted-foreground">
                  Services available across UAE, KSA, GCC, and Mediterranean ports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

