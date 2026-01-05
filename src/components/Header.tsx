import { Link } from 'react-router-dom'
import { Menu, Phone, Mail, Shield, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Trust Banner */}
      <div className="bg-gradient-to-r from-primary/8 via-primary/5 to-primary/8 border-b border-primary/10">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2.5 text-primary">
              <Shield className="h-4 w-4" />
              <span className="font-semibold">Certified & Accredited</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-primary/20"></div>
            <div className="flex items-center space-x-2.5 text-primary">
              <Clock className="h-4 w-4" />
              <span className="font-semibold">24/7 Available</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-primary/20"></div>
            <div className="text-navy-medium">
              <span className="font-semibold text-primary">40+ Years</span> of Experience
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 bg-white">
        <div className="flex items-center justify-between">
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
            <div className="hidden md:block border-l border-gray-200 pl-3">
              <div className="font-heading font-semibold text-lg text-foreground">Marine Services</div>
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

