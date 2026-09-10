import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon, Play } from 'lucide-react'

function VideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  return (
    <div className="relative h-52 bg-black/40">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/heavy-lift-geelong_9HWG1mJK.mp4"
        preload="metadata"
        playsInline
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!playing && (
        <button
          onClick={toggle}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="rounded-full bg-white/90 p-4 hover:scale-105 transition-transform shadow-xl">
            <Play className="h-8 w-8 text-[#0A1F3D] fill-current" />
          </span>
        </button>
      )}
    </div>
  )
}

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
    id: 5,
    title: 'Selected Operational Experience',
    media: 'none' as const,
    points: [
      'Heavy Lift Operations — Single Crane, Tandem Crane, Heavy-Duty Sling Arrangements, Spreader Beams',
      'Heavy Industrial Units — Transformers, Compressors, Condensers, Pressure Vessels, Process Equipment',
      'Project Logistics Interface — SPMT, Multi-Axle Trailers, Low-Bed Trailers, MAFI/Ro-Ro Operations',
      'Breakbulk & Steel Cargo — Pipes, Structural Steel, Fabricated Units, Machinery',
    ],
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
    <section className="py-20 bg-gradient-to-b from-[#0A1F3D] to-navy-deep">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-white">
            Our Operations
          </h2>
          <div className="w-24 h-1 bg-ocean-teal mx-auto mb-6"></div>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {slides.map((slide) => (
              <article
                key={slide.id}
                className="snap-start shrink-0 w-[85%] sm:w-[420px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden flex flex-col"
              >
                {slide.media === 'image' && slide.src && (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    loading="lazy"
                    decoding="async"
                    className={`h-52 w-full ${slide.fit === 'contain' ? 'object-contain bg-white/5 p-4' : 'object-cover'}`}
                  />
                )}
                {slide.media === 'image' && !slide.src && (
                  <div className="h-52 bg-gray-500/40 flex flex-col items-center justify-center gap-2 text-gray-300">
                    <ImageIcon className="h-10 w-10" />
                    <span className="text-xs font-medium tracking-wide">Photo coming soon</span>
                  </div>
                )}
                {slide.media === 'video' && <VideoCard />}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-lg mb-2 text-white">{slide.title}</h3>
                  {slide.text && (
                    <p className="text-gray-300 text-sm leading-relaxed">{slide.text}</p>
                  )}
                  {slide.points && (
                    <ol className="space-y-3 text-gray-300 text-sm leading-relaxed list-decimal list-inside">
                      {slide.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ol>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => scrollByStep(-1)}
              className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => scrollTo(i)}
                  className={`h-2.5 rounded-full transition-all ${i === active ? 'w-8 bg-ocean-teal' : 'w-2.5 bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => scrollByStep(1)}
              className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
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
