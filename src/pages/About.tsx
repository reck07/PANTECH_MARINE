import { Award, Users, MapPin, Calendar } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-deep via-primary to-steel-dark text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">About Us</h1>
          <div className="w-24 h-1 bg-white/30 mb-6"></div>
          <p className="text-xl text-gray-100 max-w-3xl leading-relaxed">
            Leading marine surveyors and consultants with over four decades of experience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="font-heading font-bold text-3xl mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Pantech Marine Services DMCEST has been a trusted name in marine surveying and consulting since 1982. 
                With over 40 years of experience, we have established ourselves as one of the leading marine survey 
                companies in the GCC region and Mediterranean ports.
              </p>
              <p className="text-muted-foreground mb-4">
                Our team of certified marine surveyors and consultants brings unparalleled expertise to every project, 
                ensuring accurate assessments, detailed documentation, and reliable consulting services for our clients.
              </p>
              <p className="text-muted-foreground">
                We pride ourselves on our commitment to excellence, integrity, and 24/7 availability to serve our 
                clients' urgent marine survey needs across the region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <h3 className="font-heading font-semibold text-xl">Established 1982</h3>
                </div>
                <p className="text-muted-foreground">
                  Over 40 years of continuous service in marine surveying and consulting.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h3 className="font-heading font-semibold text-xl">Regional Coverage</h3>
                </div>
                <p className="text-muted-foreground">
                  Serving UAE, KSA, GCC countries, and Mediterranean ports.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="font-heading font-semibold text-xl">Expert Team</h3>
                </div>
                <p className="text-muted-foreground">
                  Certified and experienced marine surveyors and consultants.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                  <h3 className="font-heading font-semibold text-xl">Certified & Accredited</h3>
                </div>
                <p className="text-muted-foreground">
                  Fully certified and accredited marine survey services.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg">
              <h2 className="font-heading font-bold text-2xl mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To provide exceptional marine survey and consulting services with the highest standards of 
                professionalism, accuracy, and reliability, while maintaining 24/7 availability to meet our 
                clients' urgent needs across the GCC and Mediterranean regions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

