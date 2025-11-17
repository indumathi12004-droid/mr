import { Handshake } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    { name: 'Fashion Designers & Boutiques', logo: '/unnamed (14).jpg' },
    { name: 'Photographers & Videographers', logo: '/b05addfc-f353-4f35-99f3-e7204fc88ee3[1].jpg' },
    { name: 'Grooming & Makeup Artists', logo: '/7702a8bb-3e66-4174-b2fd-ced93d0657e0[1].jpg' },
    { name: 'Fitness & Gym Partners', logo: '/f1db0e9d-dba3-43b4-98d0-5640359485ac[1].jpg' },
    { name: 'Hotels & Hospitality Partners', logo: '/0f9ad7f1-ce37-4f5a-8ffd-1aa45920943e[1].jpg' },
    { name: 'Jewelry & Accessories Brands', logo: '/883e7ea9-9ed3-4998-a54b-6e874990d7de[1].jpg' },
    { name: 'Media & PR Partners', logo: '/bf25e5ed-cb9a-4585-b448-cdcd7c22259e[1].jpg' },
    { name: 'Lifestyle & Wellness Partners', logo: '/22cffa72-cdf8-49e8-a916-56ce187bb2cc[1].jpg' },
  ];

  return (
    <section id="partners" className="py-24 gradient-bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Handshake className="text-white mr-4" size={48} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Global Collaborators
          </h2>
          <p className="text-xl text-[#D1D5E0] max-w-3xl mx-auto italic font-serif">
            Empowering beauty with purpose through strategic alliances
          </p>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00B8E6]/30 group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 w-auto object-contain mb-4 rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-white/80 font-medium text-lg group-hover:text-white transition-all duration-300">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 rounded-full gradient-brand text-white text-lg font-semibold hover:shadow-xl hover:shadow-[#00B8E6]/50 transition-all duration-300">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
