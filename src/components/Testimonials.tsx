import { Star, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  company: string
  position: string
  rating: number
  text: string
  service: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ahmed Al-Mansouri',
      company: 'Arabian Shipping Lines',
      position: 'Operations Manager',
      rating: 5,
      text: 'Pantech Marine Services has been our trusted partner for over 10 years. Their expertise in marine claims and their 24/7 availability has saved us countless times. Highly professional and reliable.',
      service: 'Marine Claims'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Global Heavy Lift',
      position: 'Project Director',
      rating: 5,
      text: 'Their heavy lift cargo surveys are exceptional. The team understands the complexities of oversized cargo and provides detailed, accurate reports. Couldn\'t ask for better service.',
      service: 'Heavy Lift Cargo'
    },
    {
      id: 3,
      name: 'Mohammed Hassan',
      company: 'Dubai Port Authority',
      position: 'Marine Inspector',
      rating: 5,
      text: 'As a port authority, we rely on certified surveyors. Pantech Marine Services consistently delivers thorough classification surveys. Their certifications and attention to detail are unmatched.',
      service: 'Classification Surveys'
    },
    {
      id: 4,
      name: 'David Chen',
      company: 'Pacific Maritime Group',
      position: 'Logistics Manager',
      rating: 5,
      text: 'We\'ve worked with Pantech for draft surveys across multiple ports. Their accuracy and quick turnaround times help us maintain our shipping schedules. Excellent service!',
      service: 'Draft Surveys'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 relative group"
            >
              <Quote className="h-10 w-10 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
              <div className="flex items-center mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 italic relative z-10 leading-relaxed text-base">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-100 pt-6">
                <div className="font-semibold text-lg text-foreground mb-1">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground mb-2">{testimonial.position}</div>
                <div className="text-sm font-semibold text-primary">{testimonial.company}</div>
                <div className="text-xs text-muted-foreground mt-3 px-3 py-1 bg-primary/5 rounded-full inline-block">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

