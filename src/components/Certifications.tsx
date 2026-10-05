import { memo } from 'react'
import { Shield, FileCheck, Award } from 'lucide-react'

interface Certification {
  icon: typeof Shield
  title: string
  description: string
}

const Certifications = memo(function Certifications() {
  const certifications: Certification[] = [
    {
      icon: Shield,
      title: 'Marine Survey Standards Compliance',
      description: 'Operating in accordance with recognized international marine survey practices'
    },
    {
      icon: FileCheck,
      title: 'Marine Insurance Survey Protocols',
      description: 'Following standard procedures for marine insurance claims and cargo surveys'
    },
    {
      icon: Award,
      title: 'Professional Surveyor Qualifications',
      description: 'Team members hold relevant marine surveyor certifications and experience'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
            Professional Standards
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our surveyors operate to recognized professional standards
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div key={index} className="group bg-navy-light/10 border border-navy-light/30 p-8 rounded-xl hover:shadow-xl hover:border-navy-medium transition-all duration-300 text-foreground transform hover:-translate-y-1">
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
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default Certifications

