import { memo } from 'react'
import LazyImage from './LazyImage'
import ScrollReveal from './ScrollReveal'

const cargoCards = [
  {
    id: 1,
    src: '/heavy-lift-Geelong.jpg',
    alt: 'Heavy lift cargo operation',
    category: 'Heavy Lift',
    description: 'Specialized handling of oversized and heavy machinery.',
  },
  {
    id: 2,
    src: '/img2.jpg',
    alt: 'Liquid bulk tanker',
    category: 'Liquid Bulk',
    description: 'Safe transport of liquid cargo including oil and chemicals.',
  },
  {
    id: 3,
    src: '/img3.jpg',
    alt: 'Containerized cargo handling',
    category: 'Containerized Cargo',
    description: 'Efficient container handling and logistics management.',
  },
  {
    id: 4,
    src: '/img4.jpg',
    alt: 'Dry bulk carrier in port',
    category: 'Dry Bulk',
    description: 'Expert handling of dry bulk commodities.',
  },
]

const CargoShowcase = memo(function CargoShowcase() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">Our Expertise in Cargo</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We handle a diverse range of cargo with precision and care, ensuring safe and efficient transport across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cargoCards.map((image, index) => (
            <ScrollReveal key={image.id} delay={Math.min(index * 100, 300)} direction="up">
              <div className="relative overflow-hidden rounded-xl shadow-sm group border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-white text-lg font-semibold">{image.category}</h3>
                    <p className="text-white/80 text-sm mt-1 line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
})

export default CargoShowcase
