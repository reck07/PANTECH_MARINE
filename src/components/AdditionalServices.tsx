import { memo } from 'react';
import { Wrench, ShieldCheck, TrendingUp, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Wrench,
    title: 'Technical Consultancy',
    description: 'Providing expert technical advice and solutions for complex marine operations.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management',
    description: 'Comprehensive risk assessments and mitigation strategies for your maritime.',
  },
  {
    icon: TrendingUp,
    title: 'Market Analysis',
    description: 'In-depth market insights and trends to help you make informed business.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Leveraging our extensive network for seamless operations worldwide.',
  },
];

const AdditionalServices = memo(function AdditionalServices() {
  return (
    <section className="py-16 bg-gradient-to-br from-steel-light to-foam-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-navy-deep mb-4">Value-Added Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Beyond standard surveys, we offer a range of services to support your entire marine operation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 transform hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-12 w-12 text-ocean-teal transition-transform duration-300 hover:scale-110" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  );
})

export default AdditionalServices

