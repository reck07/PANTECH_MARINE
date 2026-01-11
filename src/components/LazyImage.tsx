import { useState, useRef, useEffect } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  onError?: () => void
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==',
  onError
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [ref, isIntersecting] = useIntersectionObserver<HTMLImageElement>({
    threshold: 0.01,
    rootMargin: '50px'
  })

  useEffect(() => {
    if (isIntersecting && !isLoaded && !hasError) {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setImageSrc(src)
        setIsLoaded(true)
      }
      img.onerror = () => {
        setHasError(true)
        if (onError) onError()
      }
    }
  }, [isIntersecting, src, isLoaded, hasError, onError])

  return (
    <img
      ref={ref}
      src={imageSrc}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-50'}`}
      loading="lazy"
    />
  )
}

