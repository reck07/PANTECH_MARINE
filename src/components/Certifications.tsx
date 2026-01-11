import { memo } from 'react'
import { Shield, Award, CheckCircle, FileCheck, Globe, Badge } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface Certification {
  icon: typeof Shield
  title: string
  description: string
}

const Certifications = memo(function Certifications() {
  const certifications: Certification[] = [
    {
      icon: Shield,
      title: 'ISO 9001:2015 Certified',
      description: 'Quality management system certified'
    },
    {
      icon: Award,
      title: 'IMO Recognized',
      description: 'Recognized by International Maritime Organization'
    },
    {
      icon: FileCheck,
      title: 'Classification Society Approved',
      description: 'Approved by major classification societies'
    },
    {
      icon: Badge,
      title: 'Insurance Industry Certified',
      description: 'Certified by leading marine insurance companies'
    },
    {
      icon: Globe,
      title: 'International/Standards',
      description: 'Compliant with international marine survey standards'
    },
    {
      icon: CheckCircle,
      title: 'GCC Licensed',
      description: 'Fully licensed across GCC member states'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
            Certifications & Accreditations
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fully certified and accredited to serve your marine survey needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div className="group bg-navy-light/10 border border-navy-light/30 p-8 rounded-xl hover:shadow-xl hover:border-navy-medium transition-all duration-300 text-foreground transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-deep p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default Certifications

