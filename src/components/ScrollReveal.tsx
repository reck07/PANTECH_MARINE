import { ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

export default function ScrollReveal({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up'
}: ScrollRevealProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(30px)'
        case 'down': return 'translateY(-30px)'
        case 'left': return 'translateX(30px)'
        case 'right': return 'translateX(-30px)'
        default: return 'none'
      }
    }
    return 'none'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

