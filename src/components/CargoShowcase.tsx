import { useState, useEffect, memo, useCallback } from 'react';
import { X, Filter, Search, Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import LazyImage from './LazyImage';
import ScrollReveal from './ScrollReveal';

const cargoImages = [
  {
    id: 1,
    src: '/img1.webp',
    alt: 'Heavy Lift',
    category: 'Heavy Lift',
    description: 'Specialized handling of oversized and heavy machinery',
  },
  {
    id: 2,
    src: 'https://media.istockphoto.com/id/479431970/photo/container-operation-in-port.jpg?s=612x612&w=0&k=20&c=aNjl9SjxVBOEWPU_zQ4TGxStuY5bnBKDNXwOlgXbhgc=',
    alt: 'Heavy Lift',
    category: 'Heavy Lift',
    description: 'Towering cranes maneuver heavy shipping containers within a high-capacity maritime terminal. This logistical hub serves as a vital artery for global commerce and international supply chains.',
  },
  {
    id: 3,
    src: '/img2.jpg',
    alt: 'Oil tanker at sunset',
    category: 'Liquid Bulk',
    description: 'Safe transport of liquid cargo including oil and chemicals',
  },
  {
    id: 4,
    src: 'https://eu-images.contentstack.com/v3/assets/bltdcfe6aab5515629e/blt2c219cdb0944c6e4/668e9238c4a41cdc3a949d01/Intermarines_20MV_20Industrial_20Skipper_2000399.jpg?width=1280&auto=webp&quality=80&format=jpg&disable=upscale',
    alt: 'Oil tanker at sunset',
    category: 'Liquid Bulk',
    description: 'The heavy-lift vessel utilizes its massive onboard cranes to precisely maneuver oversized industrial cargo at a busy maritime dock.',
  },
  {
    id: 5,
    src: 'https://www.shutterstock.com/image-photo/intermodal-container-transport-liquids-gases-260nw-2684640631.jpg',
    alt: 'Oil tanker at sunset',
    category: 'Liquid Bulk',
    description: 'Safe transport of liquid cargo including oil and chemicals',
  },
  {
    id: 6,
    src: '/img3.jpg',
    alt: 'Cranes loading cargo',
    category: 'Containerized Cargo',
    description: 'Efficient container handling and logistics management',
  },
  {
    id: 7,
    src: 'https://thumbs.dreamstime.com/z/container-terminal-scene-features-maersk-being-lifted-industrial-crane-several-multicolored-intermodal-containers-379759280.jpg?ct=jpeg',
    alt: 'Heavy Lift',
    category: 'Heavy Lift',
    description: 'An industrial crane maneuvers a heavy Maersk container above rows of vibrant, stacked intermodal units.',
  },
  {
    id: 8,
    src: '/img4.jpg',
    alt: 'Bulk carrier in port',
    category: 'Dry Bulk',
    description: 'Expert handling of dry bulk commodities',
  },
];

const categories = ['All', ...new Set(cargoImages.map(img => img.category))];

const CargoShowcase = memo(function CargoShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<typeof cargoImages[0] | null>(null);
  const [filteredImages, setFilteredImages] = useState(cargoImages);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const filterImages = useCallback(() => {
    let filtered = cargoImages;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(img =>
        img.category.toLowerCase().includes(query) ||
        img.description.toLowerCase().includes(query) ||
        img.alt.toLowerCase().includes(query)
      );
    }

    setFilteredImages(filtered);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    filterImages();
  }, [filterImages]);

  const handleImageClick = (image: typeof cargoImages[0]) => {
    setSelectedImage(image);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handleNextImage = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  }, [selectedImage, filteredImages]);

  const handlePrevImage = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  }, [selectedImage, filteredImages]);

  const toggleFavorite = useCallback((id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handleCloseModal, handleNextImage, handlePrevImage]);

  const currentImageIndex = selectedImage
    ? filteredImages.findIndex(img => img.id === selectedImage.id) + 1
    : 0;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-navy-deep mb-4">Our Expertise in Cargo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We handle a diverse range of cargo with precision and care, ensuring safe and efficient transport across the globe.</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search cargo by category, description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2 md:mb-0">
            <Filter className="h-4 w-4" />
            <span className="font-medium">Filter by category:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-6 text-gray-600">
          Showing {filteredImages.length} of {cargoImages.length} cargo items
        </div>

        {/* Cargo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 100} direction="up">
              <div
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => handleImageClick(image)}
              >
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button
                  onClick={(e) => toggleFavorite(image.id, e)}
                  className={`absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-all z-10 ${
                    favorites.has(image.id) ? 'text-red-500' : 'text-gray-400'
                  }`}
                  aria-label={favorites.has(image.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart className={`h-5 w-5 ${favorites.has(image.id) ? 'fill-current' : ''}`} />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold mb-2">{image.category}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{image.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4 group-hover:hidden">
                  <h3 className="text-white text-xl font-semibold">{image.category}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cargo found matching your search.</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full z-20 transition-colors shadow-lg"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Favorite Button */}
              <button
                onClick={(e) => toggleFavorite(selectedImage.id, e)}
                className={`absolute top-4 right-16 bg-white/90 hover:bg-white p-2 rounded-full z-20 transition-colors shadow-lg ${
                  favorites.has(selectedImage.id) ? 'text-red-500' : 'text-gray-400'
                }`}
                aria-label={favorites.has(selectedImage.id) ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart className={`h-6 w-6 ${favorites.has(selectedImage.id) ? 'fill-current' : ''}`} />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full z-20 transition-colors shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full z-20 transition-colors shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {filteredImages.length > 1 && (
                <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full z-20 text-sm font-medium">
                  {currentImageIndex} / {filteredImages.length}
                </div>
              )}

              {/* Image */}
              <LazyImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Image Info */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-navy-deep">{selectedImage.category}</h3>
                  {favorites.has(selectedImage.id) && (
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="text-sm font-medium">Favorited</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600">{selectedImage.description}</p>
                <p className="text-sm text-gray-500 mt-2">Press ESC to close • Use arrow keys to navigate</p>
              </div>
            </div>
          </div>
        )}

        {/* Favorites Section */}
        {favorites.size > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-5 w-5 text-red-500 fill-current" />
              <h3 className="text-2xl font-bold text-navy-deep">Your Favorites ({favorites.size})</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cargoImages
                .filter(img => favorites.has(img.id))
                .map((image) => (
                  <div
                    key={image.id}
                    className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105"
                    onClick={() => handleImageClick(image)}
                  >
                    <LazyImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                      <p className="text-white text-xs font-medium truncate w-full">{image.category}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
})

export default CargoShowcase

