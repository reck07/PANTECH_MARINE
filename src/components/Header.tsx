import { Link } from 'react-router-dom'
import { Menu, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import MarineCoin from './MarineCoin'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="py-4 bg-white/60 backdrop-blur-lg px-4 border-b border-gray-100/30">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-3 group">
            <MarineCoin size={64} className="shrink-0" />
            <div className="border-l border-gray-200 pl-3">
              <div className="font-heading font-semibold text-lg text-foreground">Pantech Marine Group</div>
              <div className="text-xs text-muted-foreground font-medium tracking-wide">DMCEST</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5 relative">
              Home
            </Link>
            <Link to="/about" className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5">
              About
            </Link>
            <Link to="/services" className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5">
              Services
            </Link>
            <Link to="/contact" className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5">
              Contact
            </Link>
            <Link to="/red-water-marine" className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary/5">
              Red Water Marine
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+971552294871" className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-primary/5">
              <Phone className="h-4 w-4" />
              <span>+971 55 229 4871</span>
            </a>
            <a href="mailto:operations@pantechmarine.com" className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors p-2 rounded-lg hover:bg-primary/5">
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile click-to-call button */}
          <div className="md:hidden flex items-center space-x-2">
            <a href="tel:+971552294871" className="bg-primary text-white p-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors" aria-label="Call Dubai office">
              <Phone className="h-6 w-6" />
            </a>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden animate-slide-in-right">
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
                <a href="tel:+971552294871" className="flex items-center space-x-3 px-4 py-3 text-primary hover:bg-primary/5 rounded-lg transition-colors">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">+971 55 229 4871</span>
                </a>
                <a href="tel:+966565286769" className="flex items-center space-x-3 px-4 py-3 text-primary hover:bg-primary/5 rounded-lg transition-colors">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">+966 56 528 6769</span>
                </a>
                <a href="mailto:operations@pantechmarine.com" className="flex items-center space-x-3 px-4 py-3 text-primary hover:bg-primary/5 rounded-lg transition-colors">
                  <Mail className="h-5 w-5" />
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

