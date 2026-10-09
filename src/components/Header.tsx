import { Link } from 'react-router-dom'
import { Menu, Phone, Mail, X } from 'lucide-react'
import { useState } from 'react'
import MarineCoin from './MarineCoin'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Transparent blur effect on all screen sizes */}
      <div className="py-3 bg-white/60 backdrop-blur-md px-4 border-b border-gray-100/50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left side: MarineCoin + Brand Lockup */}
          <Link to="/" className="flex items-center gap-4 min-w-0 flex-1" aria-label="Pantech Marine Group - Home">
            {/* MarineCoin - 40px mobile, 64px from md */}
            <MarineCoin size={60} className="md:size-22 flex-shrink-0" aria-hidden="true" />

            {/* Brand Lockup - left-aligned, min-w-0 to prevent overflow, vertically centered */}
            <div className="min-w-0 text-left flex flex-col justify-center">
              {/* Line 1: PANTECH MARINE GROUP - largest */}
              <div className="font-brand uppercase tracking-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-none text-gray-900 whitespace-nowrap select-none">
                PANTECH MARINE GROUP
              </div>
              {/* Line 2: Coverage - smaller, serif style */}
              <div className="font-serifbrand uppercase text-[9px] sm:text-[10px] tracking-[0.1em] mt-0.5 text-gray-700 whitespace-nowrap">
                UAE • SAUDI ARABIA • GCC
              </div>
            </div>
          </Link>

          {/* Right side: Navigation + Contact (desktop) or Call + Menu button (mobile) */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            {/* Mobile: Menu button only */}
            <div className="md:hidden flex items-center">
              {/* Mobile Menu Button - fixed 44x44 */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                className="h-11 w-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Navigation + Contact */}
            <div className="hidden md:flex items-center gap-4">
              {/* Desktop Navigation */}
              <nav className="flex items-center space-x-1" aria-label="Main navigation">
                <Link to="/" className="px-3 py-2 text-sm text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5">
                  Home
                </Link>
                <Link to="/about" className="px-3 py-2 text-sm text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5">
                  About
                </Link>
                <Link to="/services" className="px-3 py-2 text-sm text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5">
                  Services
                </Link>
                <Link to="/contact" className="px-3 py-2 text-sm text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5">
                  Contact
                </Link>
                <Link to="/red-water-marine" className="px-3 py-2 text-sm text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5">
                  Red Water Marine
                </Link>
              </nav>

              {/* Desktop Contact Info */}
              <div className="flex items-center space-x-3">
                <a
                  href="tel:+971552294871"
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>+971 55 229 4871</span>
                </a>
                <a
                  href="mailto:operations@pantechmarine.com"
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">operations@pantechmarine.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <nav className="md:hidden animate-slide-in-right" aria-label="Mobile menu">
            <div className="pt-4 pb-4 space-y-2 border-t border-gray-200">
              <Link to="/" className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/services" className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/contact" className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/red-water-marine" className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                Red Water Marine
              </Link>
              <div className="pt-2 border-t border-gray-200 space-y-2">
                <a
                  href="tel:+971552294871"
                  className="flex items-center space-x-3 px-4 py-3 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <span className="font-medium">+971 55 229 4871</span>
                </a>
                <a
                  href="tel:+966567484034"
                  className="flex items-center space-x-3 px-4 py-3 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <span className="font-medium">+966 56 748 4034</span>
                </a>
                <a
                  href="mailto:operations@pantechmarine.com"
                  className="flex items-center space-x-3 px-4 py-3 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <span className="font-medium">operations@pantechmarine.com</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}