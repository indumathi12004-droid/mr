import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    
    { label: 'Partners', href: '#partners' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#030A1E]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/WhatsApp Image 2025-10-30 at 20.00.56_a15967b1.jpg"
              alt="HAPPI MR GLOBAL"
              className="h-16 w-auto"
              style={{ filter: 'drop-shadow(0 0 10px rgba(0, 108, 255, 0.3))' }}
            />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-light text-[#D1D5E0] hover:text-white transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#006CFF] to-[#7A3CFF] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#apply"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#006CFF] to-[#7A3CFF] text-white font-medium text-sm hover:shadow-lg hover:shadow-[#006CFF]/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Apply Now
            </a>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-light text-[#D1D5E0] hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              className="block w-full px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#006CFF] to-[#7A3CFF] text-white font-medium text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
