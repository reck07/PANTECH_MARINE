import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Who We Are',
    media: 'image' as const,
    src: '/red_water_logo.png',
    fit: 'contain' as const,
    text: 'Red Water Marine Co. provides independent marine surveying, project cargo supervision and port-captain services across the Kingdom of Saudi Arabia, with roots dating back to 1982 in Dammam.',
  },
  {
    id: 2,
    title: 'Regional Coverage',
    media: 'image' as const,
    src: '/P2.png',
    fit: 'cover' as const,
    text: 'Operating across Dammam, Jubail, Jeddah and Yanbu, with wider GCC attendance including Oman, Qatar and Kuwait as required.',
  },
  {
    id: 3,
    title: 'Port Captaincy & Cargo Operations',
    media: 'image' as const,
    src: '/P3.png',
    fit: 'cover' as const,
    text: 'Our team provides on-site representation during critical cargo operations, coordinating closely with vessel command, stevedores, terminals and transport contractors.',
  },
  {
    id: 4,
    title: 'Port Captaincy & Heavy Lift',
    media: 'image' as const,
    src: '/P4.png',
    fit: 'cover' as const,
    text: 'Experienced attendance throughout loading, discharge, lifting, transfer, stowage and securing of high-value and critical heavy-lift cargoes.',
  },
  {
    id: 6,
    title: 'In Action',
    media: 'video' as const,
    text: "Watch Red Water Marine's team in action during live cargo operations across Saudi ports.",
  },
]

export default function RedWaterSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index] as HTMLElement | undefined
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft - 16, behavior: 'smooth' })
    }
  }, [])

  const scrollByStep = useCallback((dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[0] as HTMLElement | undefined
    const step = card ? card.offsetWidth + 24 : 400
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const card = track.children[0] as HTMLElement | undefined
      const step = card ? card.offsetWidth + 24 : 400
      setActive(Math.min(slides.length - 1, Math.max(0, Math.round(track.scrollLeft / step))))
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A1F3D] to-navy-deep relative overflow-hidden">
      {/* Top Wave Line */}
      <svg className="absolute top-0 left-0 right-0 h-8 w-full pointer-events-none" viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M0 16 C360 -8 1080 40 1440 16 V32 H0 V16 Z" fill="url(#waveGradientTop)" opacity="0.3"/>
        <defs>
          <linearGradient id="waveGradientTop" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0A1F3D"/>
            <stop offset="50%" stopColor="#06B6D4"/>
            <stop offset="100%" stopColor="#0A1F3D"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom Wave Line */}
      <svg className="absolute bottom-0 left-0 right-0 h-8 w-full pointer-events-none" viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M0 16 C360 40 1080 -8 1440 16 V0 H0 V16 Z" fill="url(#waveGradientBottom)" opacity="0.3"/>
        <defs>
          <linearGradient id="waveGradientBottom" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0A1F3D"/>
            <stop offset="50%" stopColor="#06B6D4"/>
            <stop offset="100%" stopColor="#0A1F3D"/>
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-white">
            Our Operations
          </h2>
          <div className="w-24 h-1 bg-ocean-teal mx-auto mb-6"></div>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 sm:px-6"
            style={{ scrollbarWidth: 'none' }}
          >
            {slides.map((slide) => (
              <article
                key={slide.id}
                className="snap-start shrink-0 w-[85%] sm:w-[90%] lg:w-[420px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-ocean-teal/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:scale-[1.02] cursor-grab active:cursor-grabbing"
              >
                <div className="relative group">
                  {slide.media === 'image' && slide.src && (
                    <>
                      <img
                        src={slide.src}
                        alt={slide.title}
                        loading="lazy"
                        decoding="async"
                        className={`w-full ${slide.fit === 'contain' ? 'object-contain bg-white/5 p-4' : 'object-cover'} h-48 md:h-52 lg:h-56 transition-transform duration-500 group-hover:scale-105`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      <div className="p-3 md:p-4 md:p-5 bg-gradient-to-t from-white/10 via-white/5 to-transparent border-t border-white/10 transition-all duration-300 group-hover:border-ocean-teal/30 group-hover:bg-ocean-teal/5">
                        <h3 className="font-heading font-semibold text-white mb-2 text-sm md:text-base lg:text-lg">{slide.title}</h3>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{slide.text}</p>
                      </div>
                    </>
                  )}
                  {slide.media === 'image' && !slide.src && (
                    <div className="h-48 md:h-52 lg:h-56 bg-gray-500/40 flex flex-col items-center justify-center gap-2 text-gray-300">
                      <ImageIcon className="h-10 w-10" />
                      <span className="text-xs font-medium tracking-wide">Photo coming soon</span>
                    </div>
                  )}
                  {slide.media === 'video' && (
                    <>
                      <div className="relative h-48 md:h-52 lg:h-56 bg-black/40 group">
                        <video
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src="/heavy-lift-geelong_9HWG1mJK.mp4"
                          preload="metadata"
                          playsInline
                          controls
                          controlsList="nodownload"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                      <div className="p-3 md:p-4 md:p-5 bg-gradient-to-t from-white/10 via-white/5 to-transparent border-t border-white/10 transition-all duration-300 group-hover:border-ocean-teal/30 group-hover:bg-ocean-teal/5">
                        <h3 className="font-heading font-semibold text-white mb-2 text-sm md:text-base lg:text-lg">{slide.title}</h3>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{slide.text}</p>
                      </div>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => scrollByStep(-1)}
              className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-ocean-teal/50 hover:text-ocean-teal transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => scrollTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-ocean-teal shadow-[0_0_15px_rgba(14,165,233,0.5)]' : 'w-2.5 bg-white/30 hover:bg-white/50 hover:bg-ocean-teal/20'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => scrollByStep(1)}
              className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-ocean-teal/50 hover:text-ocean-teal transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex md:hidden justify-center gap-2 mt-6">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-ocean-teal' : 'w-2 bg-white/30'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
