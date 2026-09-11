import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-navy-deep via-steel-dark to-navy-deep text-white mt-auto border-t border-white/10">
      <div className="py-12 md:py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/logo.svg"
                alt="Pantech Marine Services Logo"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
              <Link to="/red-water-marine">
                <img
                  src="/red_water_logo.png"
                  alt="Red Water Marine Co. logo"
                  className="h-20 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </div>
            <p className="text-gray-300 text-sm">
              Trusted marine surveyors and consultants since 1982. Serving GCC & Mediterranean ports.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/pantechmarineservices/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/red-water-marine" className="text-gray-300 hover:text-white transition-colors">Red Water Marine</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+97142345678" className="hover:text-white">+971 4 234 5678</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:operations@pantechmarine.com" className="hover:text-white">operations@pantechmarine.com</a>
              </li>
              <li className="flex items-start gap-2 pt-3 border-t border-white/10">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Dammam, Saudi Arabia — <Link to="/red-water-marine" className="hover:text-white">Red Water Marine Co.</Link></span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+966565286769" className="hover:text-white">+966 56 528 6769</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Pantech Marine Services DMCEST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

