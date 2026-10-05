import { useEffect } from 'react'
import { MapPin } from 'lucide-react'
import SEO from '../components/SEO'
import { organizationSchema, breadcrumbSchema } from '../components/SEO'

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Pantech Marine Group'
  }, [])

  const breadcrumbs = [
    { name: 'Home', url: 'https://pantech-marine.vercel.app/' },
    { name: 'About Us', url: 'https://pantech-marine.vercel.app/about' }
  ]

  return (
    <>
      <SEO
        title="About Us - Marine Surveyors Since 1982"
        description="Marine surveying roots in Dammam since 1982, with UAE expansion in 2010. Operating as Pantech Marine Services DMCEST (Dubai Maritime City) and Red Water Marine Co. (Dammam)."
        canonical="https://pantech-marine.vercel.app/about"
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
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">About Us</h1>
            <div className="w-24 h-1 bg-white/30 mb-6"></div>
            <p className="text-xl text-gray-100 max-w-3xl leading-relaxed">
              Marine surveying roots in Dammam since 1982, with UAE expansion in 2010.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our surveying roots trace back to Dammam, Saudi Arabia, where we began operations in 1982. 
                In 2010, we expanded into the UAE, establishing our presence in Dubai Maritime City.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Today, Pantech Marine Group operates through two entities: Pantech Marine Services DMCEST 
                based in Dubai Maritime City, and Red Water Marine Co. based in Dammam, Kingdom of Saudi Arabia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team provides independent marine surveying services across the region, with reports 
                prepared on a factual, independent and observational basis, supported by operational 
                records and photographic evidence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-8 w-8 text-primary" />
                <h3 className="font-heading font-semibold text-xl">Heavy Lift & Project Cargo Focus</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Specialized in heavy lift, project cargo, SPMT, and Ro-Ro/MAFI operations.
              </p>
            </div>

            {/* Our Entities */}
            <div className="bg-primary/10 p-8 rounded-xl mb-12">
              <h2 className="font-heading font-bold text-2xl mb-6">Our Entities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2">Pantech Marine Services DMCEST</h3>
                  <p className="text-muted-foreground text-sm">Dubai Maritime City, United Arab Emirates</p>
                  <p className="text-muted-foreground text-sm mt-2">UAE operations covering Dubai, Fujairah, and Sharjah.</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-2">Red Water Marine Co.</h3>
                  <p className="text-muted-foreground text-sm">Dammam, Kingdom of Saudi Arabia</p>
                  <p className="text-muted-foreground text-sm mt-2">KSA operations covering Dammam, Jubail, Jeddah, and Yanbu.</p>
                </div>
              </div>
            </div>

            {/* Coverage Section */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="font-heading font-bold text-2xl mb-6">Coverage</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">UAE</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Dubai Maritime City', 'Fujairah', 'Sharjah'].map(port => (
                      <span key={port} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-muted-foreground">{port}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Saudi Arabia</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Dammam', 'Jubail', 'Jeddah', 'Yanbu'].map(port => (
                      <span key={port} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-muted-foreground">{port}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Regional Attendance</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Oman (Sohar)', 'Qatar (Ras Laffan)', 'Kuwait (Shuwaikh)'].map(port => (
                      <span key={port} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-muted-foreground">{port}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}