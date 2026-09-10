import { useState } from 'react'

interface MarineCoinProps {
  size?: number
  className?: string
}

export default function MarineCoin({ size = 170, className = '' }: MarineCoinProps) {
  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((f) => !f)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div
      className={`marine-coin-wrapper ${className}`}
      style={{ width: size, height: size }}
      onClick={toggle}
      role="button"
      tabIndex={0}
      aria-label="Switch marine company"
      onKeyDown={handleKeyDown}
    >
      <div className={`marine-coin${flipped ? ' flipped' : ''}`}>
        <div className="marine-coin-face">
          <img src="/logo.svg" alt="Pantech Marine Services" />
        </div>
        <div className="marine-coin-face marine-coin-back">
          <img src="/red_water_logo.png" alt="Red Water Marine" />
        </div>
      </div>
    </div>
  )
}
