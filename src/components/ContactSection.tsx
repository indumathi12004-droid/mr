import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070B28] via-[#2A2E7A] to-[#070B28]" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(0, 108, 255, 0.05) 0px, transparent 2px, transparent 20px), repeating-linear-gradient(-45deg, rgba(122, 60, 255, 0.05) 0px, transparent 2px, transparent 20px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#006CFF] to-[#7A3CFF] bg-clip-text text-transparent">
            Apply Now
          </h2>
          <p className="text-xl text-[#D1D5E0]">
            Begin Your Journey to Excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#006CFF] to-[#7A3CFF] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#006CFF]/10 to-[#7A3CFF]/10 rounded-3xl" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#D1D5E0] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#D1D5E0]/50 focus:outline-none focus:border-[#006CFF] transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#D1D5E0] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#D1D5E0]/50 focus:outline-none focus:border-[#006CFF] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-[#D1D5E0] mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#D1D5E0]/50 focus:outline-none focus:border-[#006CFF] transition-colors"
                  placeholder="Your city"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#D1D5E0] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-[#D1D5E0]/50 focus:outline-none focus:border-[#006CFF] transition-colors resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[#006CFF] to-[#7A3CFF] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-[#006CFF]/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Submit Application</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="relative p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7A3CFF]/10 to-[#006CFF]/10 rounded-3xl" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6">The Beginning,
Bengaluru, Karnataka</h3>

                <div className="space-y-6">
                  <a
                    href="mailto:ea@happimisspagenat.com"
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#006CFF] to-[#7A3CFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#D1D5E0]/70 mb-1">Email</p>
                      <p className="text-white group-hover:text-[#006CFF] transition-colors">
                        ea@happimrpagenat.com
                      </p>
                    </div>
                  </a>

                  <a href="tel:+919880012482" className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#006CFF] to-[#7A3CFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#D1D5E0]/70 mb-1">Phone</p>
                      <p className="text-white group-hover:text-[#006CFF] transition-colors">
                        +91 98800 12482
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#006CFF] to-[#7A3CFF] flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#D1D5E0]/70 mb-1">Location</p>
                      <p className="text-white">The Beginning,
Bengaluru, Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#006CFF]/10 to-[#7A3CFF]/10 rounded-3xl" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>

                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-lg bg-gradient-to-br from-[#006CFF]/20 to-[#7A3CFF]/20 border border-white/10 hover:border-[#006CFF]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Instagram className="w-6 h-6 text-white group-hover:text-[#006CFF] transition-colors" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-lg bg-gradient-to-br from-[#006CFF]/20 to-[#7A3CFF]/20 border border-white/10 hover:border-[#006CFF]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Youtube className="w-6 h-6 text-white group-hover:text-[#006CFF] transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-lg bg-gradient-to-br from-[#006CFF]/20 to-[#7A3CFF]/20 border border-white/10 hover:border-[#006CFF]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Linkedin className="w-6 h-6 text-white group-hover:text-[#006CFF] transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
