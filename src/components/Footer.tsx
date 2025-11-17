import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Bootcamp', href: '#bootcamp' },
      { label: 'Partners', href: '#partners' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Terms', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' },
    ],
  };

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#040820] to-[#1A1C4A]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#006CFF] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="/WhatsApp Image 2025-10-30 at 20.00.56_a15967b1.jpg"
              alt="HAPPI MR GLOBAL"
              className="h-16 w-auto mb-6"
              style={{ filter: 'drop-shadow(0 0 10px rgba(0, 108, 255, 0.3))' }}
            />
            <p className="text-[#D1D5E0] leading-relaxed mb-6">
              Happi Mr Global redefines what it means to be a modern man — confident, ethical, and globally aware.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#006CFF]/20 to-[#7A3CFF]/20 border border-white/10 hover:border-[#006CFF]/50 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-[#D1D5E0] group-hover:text-[#006CFF] transition-colors" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#006CFF]/20 to-[#7A3CFF]/20 border border-white/10 hover:border-[#006CFF]/50 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-[#D1D5E0] group-hover:text-[#006CFF] transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#006CFF]/20 to-[#7A3CFF]/20 border border-white/10 hover:border-[#006CFF]/50 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-[#D1D5E0] group-hover:text-[#006CFF] transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#D1D5E0] hover:text-[#006CFF] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:ea@happimisspagenat.com"
                className="flex items-center space-x-3 text-[#D1D5E0] hover:text-[#006CFF] transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">ea@happimrpagenat.com</span>
              </a>
              <a
                href="tel:+919880012482"
                className="flex items-center space-x-3 text-[#D1D5E0] hover:text-[#006CFF] transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+91 98800 12482</span>
              </a>
              <div className="flex items-center space-x-3 text-[#D1D5E0]">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">The Beginning, 
Bengaluru, Karnataka </span>
                
                
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-[#D1D5E0]/70">
            © {currentYear} Happi Mr Global. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
