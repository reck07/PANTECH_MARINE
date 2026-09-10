import { useEffect } from 'react'
import { Ship, Phone, Mail, MapPin, Clock, Anchor, Globe, Shield } from 'lucide-react'
import MarineCoin from '../components/MarineCoin'

export default function RedWaterMarine() {
  useEffect(() => {
    document.title = 'Red Water Marine Co. | Marine Surveys in Saudi Arabia'
  }, [])

  const services = [
    { icon: Ship, title: 'Marine Claims', description: 'Expert assessment and documentation for marine insurance claims.' },
    { icon: Anchor, title: 'Draft Surveys', description: 'Accurate draft surveys for cargo loading and discharge operations.' },
    { icon: Shield, title: 'Classification Surveys', description: 'Vessel and cargo classification inspections and certifications.' },
    { icon: Globe, title: 'Port Surveys', description: 'Comprehensive port condition surveys and cargo inspections.' },
  ]

  const ports = [
    'Jeddah', 'Dammam', 'Riyadh', 'Jubail', 'Yanbu', 'Dhahran',
    'King Abdullah Port', 'Jizan', 'Neom', 'Red Sea Coast'
  ]

  return (
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
            <MarineCoin size={200} className="mb-8" />
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Red Water Marine Co.
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-loose mb-10">
              A subsidiary of Pantech Marine Services — providing trusted marine surveying and consulting across Saudi Arabia.
            </p>
            <a
              href="tel:+966565286769"
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
                To provide reliable, accurate, and timely marine surveying services across all Saudi Arabian ports and Red Sea terminals. As part of the Pantech Marine Services family, we bring 40+ years of expertise to the Kingdom.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl">
              <h3 className="font-heading font-semibold text-xl mb-4 text-white">Why Choose Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-ocean-teal flex-shrink-0 mt-0.5" />
                  <span>Fully certified and accredited marine surveyors</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-ocean-teal flex-shrink-0 mt-0.5" />
                  <span>24/7 emergency response across all KSA ports</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-ocean-teal flex-shrink-0 mt-0.5" />
                  <span>Extensive coverage of Red Sea and Arabian Gulf</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-[#0A1F3D] to-navy-deep">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-white">
              Our Services in KSA
            </h2>
            <div className="w-24 h-1 bg-ocean-teal mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 text-center group hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    <div className="bg-ocean-teal/20 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-ocean-teal" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              )
            })}
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
              <a href="tel:+966565286769" className="text-gray-300 hover:text-white transition-colors">+966 56 528 6769</a>
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
            href="tel:+966565286769"
            className="group bg-white text-[#0A1F3D] px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl inline-flex items-center"
          >
            Call Now
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>
    </div>
  )
}
