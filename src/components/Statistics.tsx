import { useState, useEffect, useRef } from 'react'
import { Users, Award, Ship, Globe } from 'lucide-react'

interface Stat {
  icon: typeof Award
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    icon: Award,
    value: 40,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Established in 1982'
  },
  {
    icon: Ship,
    value: 15000,
    suffix: '+',
    label: 'Surveys Completed',
    description: 'Since inception'
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Satisfied Clients',
    description: 'Trusted partners'
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'Ports Covered',
    description: 'GCC & Mediterranean'
  }
]

function useCountUp(end: number, duration: number = 2000, start: number = 0): number {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const startTimeRef = useRef<number | null>(null)
  const requestRef = useRef<number>()

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime
      }

      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(start + (end - start) * easeOutQuart)

      if (current !== countRef.current) {
        countRef.current = current
        setCount(current)
      }

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [end, duration, start])

  return count
}

function AnimatedStat({ stat, index }: { stat: Stat; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const statRef = useRef<HTMLDivElement>(null)
  const count = useCountUp(isVisible ? stat.value : 0, 2000, 0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (statRef.current) {
      observer.observe(statRef.current)
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current)
      }
    }
  }, [isVisible])

  const Icon = stat.icon
  const displayValue = stat.value >= 1000 
    ? `${(count / 1000).toFixed(1)}K${stat.suffix}`
    : `${count}${stat.suffix}`

  return (
    <div
      ref={statRef}
      className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all hover:scale-105 shadow-lg transform transition-all duration-500"
      style={{
        animationDelay: `${index * 0.1}s`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="flex justify-center mb-6">
        <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm transform transition-transform duration-300 hover:scale-110">
          <Icon className="h-8 w-8" />
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold mb-3 font-heading">
        {displayValue}
      </div>
      <div className="text-lg font-semibold mb-2">{stat.label}</div>
      <div className="text-sm text-gray-200">{stat.description}</div>
    </div>
  )
}

export default function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-deep via-primary to-steel-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'}}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Our track record speaks for itself
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

