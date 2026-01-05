import React from 'react';

const cargoImages = [
  {
    src: '../img1.jpg',
    alt: 'Container ship at sea',
    category: 'Containerized Cargo',
  },
  {
    src: '../img2.jpg',
    alt: 'Oil tanker at sunset',
    category: 'Liquid Bulk',
  },
  {
    src: '../img3.webp',
    alt: 'Cranes loading cargo',
    category: 'Heavy Lift',
  },
  {
    src: '../img4.jpg',
    alt: 'Bulk carrier in port',
    category: 'Dry Bulk',
  },
];

export default function CargoShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-navy-deep mb-4">Our Expertise in Cargo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We handle a diverse range of cargo with precision and care, ensuring safe and efficient transport across the globe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cargoImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">{image.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

