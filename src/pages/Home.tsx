import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Ship, Package, Anchor, MapPin, Users, CheckCircle, Phone, Mail } from 'lucide-react'
import ClientLogos from '../components/ClientLogos'
import CargoShowcase from '../components/CargoShowcase'
import SEO from '../components/SEO'
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from '../components/SEO'

export default function Home() {
  useEffect(() => {
    document.title = 'Pantech Marine Group UAE & SAUDI ARABIA & OMAN | Marine Cargo Surveyors & Consultants'
  }, [])

  const breadcrumbs = [
    { name: 'Home', url: 'https://pantech-marine.vercel.app/' }
  ]

  return (
    <>
      <SEO
        title="Pantech marine"
        description="Trusted marine surveyors since 1982. Specialists in heavy lift cargo, project cargo, vessel surveys, and marine claims across UAE, KSA, Oman, Qatar, and Kuwait ports. 24/7 availability."
        canonical="https://pantech-marine.vercel.app/"
        structuredData={{
          '@graph': [
            organizationSchema,
            localBusinessSchema,
            breadcrumbSchema(breadcrumbs)
          ]
        }}
      />
      <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-deep via-primary to-steel-dark text-white pt-20 pb-28 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'}}></div>
        </div>
        <div className="relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance leading-tight">
              Trusted Marine Surveyors & Consultants <small className="block mt-2 text-xl font-medium">Serving the Gulf since 1982</small>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-100 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Serving seaports in the Kingdom of Saudi Arabia, the UAE and Oman for all marine survey and inspection needs.
            </p>
            <div className="mt-10 flex items-center gap-6 justify-center md:justify-start">
              <img
                src="/color-replaced.png"
                alt="Pantech Marine Group Logo"
                className="h-[4.5rem] md:h-[5.5rem] w-auto object-contain filter brightness-0 invert"
              />
              <img
                src="/red_water_logo.png"
                alt="Red Water Marine Co."
                className="h-[4.5rem] md:h-[5.5rem] w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <CargoShowcase />

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white cv-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Beyond project cargo operations, our team provides a comprehensive range of independent marine surveying services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Package className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Project & Cargo</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Heavy Lift / Project Cargo Surveys</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Loading & Discharge Supervision</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Cargo Condition / Outturn Surveys</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Pre-Shipment Surveys</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Cargo Damage Surveys</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Tally & Quantity Supervision</span></li>
            </ul>
          </div>
          <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Ship className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Vessel</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>On-Hire / Off-Hire Surveys</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Bunker Quantity Surveys</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Draft Surveys</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Vessel Condition Surveys</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Pre-Purchase Surveys</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Hatch Sealing / Unsealing</span></li>
            </ul>
          </div>
          <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Anchor className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Operational</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Port Captain / Supercargo Services</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Ro-Ro / MAFI Supervision</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Stowage & Securing Inspections</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Lashing Inspections</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>P&I Related Attendance</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Marine Claims & Damage Surveys</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center max-w-6xl mx-auto px-4">
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our reports are prepared on a factual, independent and observational basis, supported by operational records and photographic evidence.
          </p>
        </div>
      </section>

      {/* Who We Are and Where We Work */}
      <section className="py-20 bg-white cv-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto px-4">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">Who We Are and Where We Work</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <div className="space-y-6">
              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary transition-colors flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Pantech Marine Services DMCEST</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pantech Marine Services DMCEST is based in Dubai, United Arab Emirates, and attends seaports across the UAE and Oman.
                  </p>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 flex items-start gap-4">
                <img src="/red_water_logo.png" alt="Red Water Marine Co." className="h-12 w-auto object-contain flex-shrink-0" loading="lazy" decoding="async" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Red Water Marine Co.</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Red Water Marine Co. is based in Dammam, Saudi Arabia, and serves seaports throughout the Kingdom.
                  </p>
                  <Link to="/red-water-marine" className="group/link inline-flex items-center text-primary font-semibold text-sm mt-3 hover:underline">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary transition-colors flex-shrink-0">
                  <Users className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Our Surveyors</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our surveyors come from marine engineering, deck, surveying and port-operational backgrounds, so we understand each operation from both the vessel and the cargo side.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-secondary p-10 rounded-2xl border border-primary/10 shadow-lg">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="font-heading font-semibold text-2xl mb-4 text-foreground">Get Started Today</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contact us for a consultation or request a quote for your marine survey needs. Our expert team is ready to assist you.
              </p>
              <Link
                to="/contact"
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-navy-deep via-primary to-steel-dark text-white py-16 md:py-20 pb-24 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'}}></div>
        </div>
        <div className="text-center relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ready to Work With Us?</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
          <p className="text-xl mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can assist with your marine survey requirements. Get in touch today for expert consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all shadow-md hover:shadow-lg inline-flex items-center"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/971552294871"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 rounded-lg font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Phone className="h-5 w-5 mr-2" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  </>
)
}
