import { useState, useEffect } from 'react'
import { Package, Ship, Anchor, CheckCircle } from 'lucide-react'
import SEO from '../components/SEO'
import { organizationSchema, breadcrumbSchema } from '../components/SEO'

export default function Services() {
  useEffect(() => {
    document.title = 'Our Services | Pantech Marine Group DMCEST'
  }, [])

  const breadcrumbs = [
    { name: 'Home', url: 'https://pantech-marine.vercel.app/' },
    { name: 'Services', url: 'https://pantech-marine.vercel.app/services' }
  ]

  const services = [
    {
      icon: Package,
      title: 'Project & Cargo',
      items: [
        'Heavy Lift / Project Cargo Surveys',
        'Loading & Discharge Supervision',
        'Cargo Condition / Outturn Surveys',
        'Pre-Shipment Surveys',
        'Cargo Damage Surveys',
        'Tally & Quantity Supervision'
      ]
    },
    {
      icon: Ship,
      title: 'Vessel',
      items: [
        'On-Hire / Off-Hire Surveys',
        'Bunker Quantity Surveys',
        'Draft Surveys',
        'Vessel Condition Surveys',
        'Pre-Purchase Surveys',
        'Hatch Sealing / Unsealing'
      ]
    },
    {
      icon: Anchor,
      title: 'Operational',
      items: [
        'Port Captain / Supercargo Services',
        'Ro-Ro / MAFI Supervision',
        'Stowage & Securing Inspections',
        'Lashing Inspections',
        'P&I Related Attendance',
        'Marine Claims & Damage Surveys'
      ]
    }
  ]

  return (
    <>
      <SEO
        title="Our Services - Marine Surveying Services"
        description="Independent marine surveying services: project cargo surveys, vessel surveys, and operational attendance. Serving UAE, KSA, Oman, Qatar, and Kuwait ports with 24/7 availability."
        canonical="https://pantech-marine.vercel.app/services"
        structuredData={{
          '@graph': [
            organizationSchema,
            breadcrumbSchema(breadcrumbs)
          ]
        }}
      />
      <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-deep via-primary to-steel-dark text-white py-24 md:py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-white/30 mb-6"></div>
          <p className="text-xl text-gray-100 max-w-3xl leading-relaxed">
            Beyond project cargo operations, our team provides a comprehensive range of independent marine surveying services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl">{service.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Footer line under the cards */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our reports are prepared on a factual, independent and observational basis, supported by operational records and photographic evidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  </>
)
}