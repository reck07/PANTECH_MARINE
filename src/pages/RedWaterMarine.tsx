import { useEffect } from 'react'
import { Ship, Phone, Mail, MapPin, Package, Anchor, CheckCircle } from 'lucide-react'
import RedWaterSlider from '../components/RedWaterSlider'
import SEO from '../components/SEO'
import { organizationSchema, breadcrumbSchema } from '../components/SEO'

export default function RedWaterMarine() {
  useEffect(() => {
    document.title = 'Red Water Marine Co. | Marine Surveys in Saudi Arabia'
  }, [])

  const breadcrumbs = [
    { name: 'Home', url: 'https://pantech-marine.vercel.app/' },
    { name: 'Red Water Marine', url: 'https://pantech-marine.vercel.app/red-water-marine' }
  ]

  const ports = ['Dammam', 'Jubail', 'Ras Al Khair', 'Ras Tanura', 'Jeddah', 'Yanbu'];

  const serviceGroups = [
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
        title="Red Water Marine Co. - Marine Surveys in Saudi Arabia"
        description="Red Water Marine Co., a subsidiary of Pantech Marine Services, provides trusted marine surveying and consulting across Saudi Arabia. Services include Marine Claims, Draft Surveys, Classification Surveys, and Port Surveys. 24/7 emergency response across KSA ports."
        canonical="https://pantech-marine.vercel.app/red-water-marine"
        structuredData={{
          '@graph': [
            organizationSchema,
            breadcrumbSchema(breadcrumbs)
          ]
        }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-navy-deep via-[#0A1F3D] to-steel-dark text-white py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'}}></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="relative flex flex-col items-center text-center bg-gradient-to-br from-red-700 via-[#C02A2E] to-red-800 rounded-2xl px-8 py-12 md:p-14 overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.06) 10px, rgba(255,255,255,0.06) 20px)'}}></div>
              <div className="relative z-10 flex flex-col items-center text-center">
              <img
                src="/red_water_logo.png"
                alt="Red Water Marine Co."
                className="h-20 md:h-28 w-auto mb-8 object-contain"
                loading="lazy"
                decoding="async"
              />
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Red Water Marine Co.
              </h1>
              <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-loose mb-10">
                A subsidiary of Pantech Marine Services — providing trusted marine surveying and consulting across Saudi Arabia.
              </p>
              <a
                href="tel:+971552294871"
                className="bg-white text-[#0A1F3D] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl inline-flex items-center"
              >
                Get in Touch
              </a>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 bg-[#0A1F3D]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-white">
                About Red Water Marine
              </h2>
              <div className="w-24 h-1 bg-ocean-teal mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl">
                <h3 className="font-heading font-semibold text-xl mb-4 text-white">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                "To provide reliable, independent and timely marine surveying and project cargo services at seaports across Saudi Arabia. As part of the Pantech Group, with surveying roots in Dammam dating back to 1982, we deliver factual reporting to shipowners, operators and cargo interests."
                </p>
              </div>
            </div>
          </div>
        </section>

        <RedWaterSlider />

        {/* Services */}
        <section className="py-20 bg-gradient-to-b from-[#0A1F3D] to-navy-deep">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-white">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-ocean-teal mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Red Water Marine Co. provides a comprehensive range of independent marine surveying services at seaports across Saudi Arabia.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceGroups.map((group, index) => {
                const Icon = group.icon
                return (
                  <div key={index} className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                    <div className="bg-ocean-teal/20 p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-ocean-teal" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-4 text-white">{group.title}</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-ocean-teal flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-gray-300 leading-relaxed">
                Our reports are prepared on a factual, independent and observational basis, supported by operational records and photographic evidence.
              </p>
            </div>
          </div>
        </section>

        {/* Port Coverage */}
        <section className="py-20 bg-navy-deep">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-white">
                Port Coverage — KSA
              </h2>
              <div className="w-24 h-1 bg-ocean-teal mx-auto mb-6"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {ports.map((port) => (
                <span key={port} className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-full text-gray-200 text-sm hover:bg-white/20 transition-colors">
                  {port}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-gradient-to-b from-navy-deep to-[#0A1F3D]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-white">
                Contact Red Water Marine
              </h2>
              <div className="w-24 h-1 bg-ocean-teal mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center">
                <Phone className="h-8 w-8 text-ocean-teal mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2 text-white">Mobile</h3>
                <a href="tel:+971552294871" className="text-gray-300 hover:text-white transition-colors">+971 55 229 4871</a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center">
                <Mail className="h-8 w-8 text-ocean-teal mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2 text-white">Email</h3>
                <a href="mailto:operations@pantechmarine.com" className="text-gray-300 hover:text-white transition-colors">operations@pantechmarine.com</a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center">
                <MapPin className="h-8 w-8 text-ocean-teal mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2 text-white">Address</h3>
                <p className="text-gray-300">Bin Dawood Building, Office No. 13, Floor No. 02, Dammam, Kingdom of Saudi Arabia</p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto mt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center">
                <h3 className="font-heading font-semibold text-lg mb-3 text-white">Ports Covered</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Dammam', 'Jubail', 'Jeddah', 'Yanbu'].map((port) => (
                    <span key={port} className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-full text-gray-200 text-sm">{port}</span>
                  ))}
                  <span className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-full text-gray-200 text-sm">Other Saudi Ports</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0A1F3D] pb-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-white">
              Need Marine Surveys in KSA?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Contact Red Water Marine for reliable, certified marine surveying services across Saudi Arabia.
            </p>
            <a
              href="tel:+971552294871"
              className="group bg-white text-[#0A1F3D] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl inline-flex items-center"
            >
              Call Now
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </section>
      </div>
    </>
  )
}