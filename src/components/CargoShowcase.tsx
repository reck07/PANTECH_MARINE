import { memo } from 'react'
import LazyImage from './LazyImage'
import ScrollReveal from './ScrollReveal'

const cargoCards = [
  {
    id: 1,
    src: '/heavy-lift-Geelong.jpg',
    alt: 'Heavy lift cargo operation',
    category: 'Heavy Lift',
    description: 'Heavy lift and project cargo supervision.',
  },
  {
    id: 2,
    src: '/img2.jpg',
    alt: 'Project cargo supervision',
    category: 'Project Cargo',
    description: 'Project cargo loading and discharge supervision.',
  },
  {
    id: 3,
    src: '/img3.jpg',
    alt: 'Ro-Ro operations',
    category: 'Ro-Ro / MAFI',
    description: 'Ro-Ro and MAFI supervision and stowage inspections.',
  },
  {
    id: 4,
    src: '/img4.jpg',
    alt: 'Stowage and lashing inspection',
    category: 'Stowage & Lashing',
    description: 'Stowage, securing and lashing inspections.',
  },
]

const CargoShowcase = memo(function CargoShowcase() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">Our Expertise in Cargo Surveys</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We conduct a comprehensive range of cargo inspections and surveys, delivering accurate, impartial and detailed reports that support the safety, security and integrity of cargo throughout transportation and handling.
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
