import { Link } from 'react-router-dom'
import { Menu, Phone, Mail, Shield, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Trust Banner */}
      <div className="bg-gradient-to-r from-primary/8 via-primary/5 to-primary/8 border-b border-primary/10 overflow-hidden">
        <div className="py-3 px-4">
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 text-[10px] md:text-xs whitespace-nowrap">
            <div className="flex items-center gap-1.5 text-primary shrink-0">
              <Shield className="h-3 w-3 md:h-3.5 md:w-3.5" />
              <span className="font-semibold">Certified</span>
            </div>
            <div className="w-px h-4 bg-primary/20 shrink-0"></div>
            <div className="flex items-center gap-1.5 text-primary shrink-0">
              <Clock className="h-3 w-3 md:h-3.5 md:w-3.5" />
              <span className="font-semibold">24/7</span>
            </div>
            <div className="w-px h-4 bg-primary/20 shrink-0"></div>
            <div className="text-primary shrink-0">
              <span className="font-semibold">40+ Years</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 bg-white px-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="Pantech Marine Services Logo"
                className="h-12 md:h-16 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="font-heading font-bold text-xl text-primary">PANTECH</span>';
                  }
                }}
              />
            </div>
            <div className="border-l border-gray-200 pl-3">
              <div className="font-heading font-semibold text-lg text-foreground">Pantech Marine Services</div>
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
            <a href="tel:+97142345678" className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-primary/5">
              <Phone className="h-4 w-4" />
              <span>+971 4 234 5678</span>
            </a>
            <a href="mailto:operations@pantechmarine.com" className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors p-2 rounded-lg hover:bg-primary/5">
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/contact" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/red-water-marine" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Red Water Marine
            </Link>
            <div className="pt-4 border-t space-y-2">
              <a href="tel:+97142345678" className="flex items-center space-x-2 text-primary">
                <Phone className="h-4 w-4" />
                <span>+971 4 234 5678</span>
              </a>
              <a href="mailto:operations@pantechmarine.com" className="flex items-center space-x-2 text-primary">
                <Mail className="h-4 w-4" />
                <span>operations@pantechmarine.com</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

