interface LoadingSkeletonProps {
  className?: string
  variant?: 'text' | 'image' | 'card' | 'circle'
  lines?: number
}

export default function LoadingSkeleton({ 
  className = '', 
  variant = 'card',
  lines = 3 
}: LoadingSkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded'

  if (variant === 'text') {
    return (
      <div className={className}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`${baseClasses} h-4 mb-2 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
          />
        ))}
      </div>
    )
  }

  if (variant === 'image') {
    return <div className={`${baseClasses} ${className}`} />
  }

  if (variant === 'circle') {
    return <div className={`${baseClasses} rounded-full ${className}`} />
  }

  // Card variant
  return (
    <div className={`${baseClasses} p-6 ${className}`}>
      <div className={`${baseClasses} h-8 w-8 rounded-full mb-4`} />
      <div className={`${baseClasses} h-6 w-3/4 mb-2`} />
      <div className={`${baseClasses} h-4 w-full mb-2`} />
      <div className={`${baseClasses} h-4 w-5/6`} />
    </div>
  )
}

