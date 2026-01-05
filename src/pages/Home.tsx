import { Link } from 'react-router-dom'
import { ArrowRight, Ship, FileCheck, Shield, Zap, CheckCircle } from 'lucide-react'
import Statistics from '../components/Statistics'
import Testimonials from '../components/Testimonials'
import Certifications from '../components/Certifications'
import ClientLogos from '../components/ClientLogos'
import CargoTracker from '../components/CargoTracker'
import CargoShowcase from '../components/CargoShowcase'
import AdditionalServices from '../components/AdditionalServices'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-deep via-primary to-steel-dark text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold">Trusted Since 1982. 40+ Years of Excellence</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance leading-tight">
              Trusted Marine Surveyors & Consultants
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-100 max-w-2xl leading-relaxed">
              Serving GCC & Mediterranean ports with 24/7 availability for all marine survey needs. Certified, accredited, and trusted by industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cargo Tracker Section */}
      <CargoTracker />

      {/* Cargo Showcase Section */}
      <CargoShowcase />

      {/* Statistics Section */}
      <Statistics />

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">Our Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive marine survey and consulting services across the region
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Ship className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Marine Claims</h3>
              <p className="text-muted-foreground leading-relaxed">
                Expert assessment and documentation for marine insurance claims and disputes.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <FileCheck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Heavy Lift Cargo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Specialized surveys for oversized and heavy lift cargo shipments.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Classification Surveys</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive vessel and cargo classification surveys and inspections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <AdditionalServices />

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">Why Choose Pantech Marine Services?</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <CheckCircle className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">40+ Years of Experience</h3>
                    <p className="text-muted-foreground leading-relaxed">Established in 1982 with extensive industry expertise and proven track record</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <Zap className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">24/7 Availability</h3>
                    <p className="text-muted-foreground leading-relaxed">Round-the-clock service for urgent marine survey needs across all time zones</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <Ship className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Regional Coverage</h3>
                    <p className="text-muted-foreground leading-relaxed">Serving UAE, KSA, GCC & Mediterranean ports with local expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <Shield className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Certified & Accredited</h3>
                    <p className="text-muted-foreground leading-relaxed">Fully certified marine surveyors and consultants with international recognition</p>
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
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-navy-deep via-primary to-steel-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'}}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ready to Work With Us?</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
          <p className="text-xl mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can assist with your marine survey requirements. Get in touch today for expert consultation.
          </p>
          <Link
            to="/contact"
            className="group bg-white text-primary px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl inline-flex items-center"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

