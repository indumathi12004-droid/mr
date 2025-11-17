import { ExternalLink } from 'lucide-react';

const galleryImages = [
  { src: '/WhatsApp Image 2025-10-31 at 21.24.37_61a3aa24.jpg' },
  { src: '/WhatsApp Image 2025-10-31 at 21.24.38_cd94f095.jpg' },
  { src: '/WhatsApp Image 2025-10-31 at 21.45.21_3db0efaa.jpg' },
  { src: '/WhatsApp Image 2025-11-12 at 17.30.15_39c188b8.jpg'},
  { src: '/WhatsApp Image 2025-11-12 at 17.10.44_18bf3b00 copy.jpg' },
  { src: '/WhatsApp Image 2025-11-12 at 17.10.54_faa797f4.jpg' },
  { src: '/WhatsApp Image 2025-11-12 at 17.11.47_c2b1009e copy.jpg' },
  { src: '/WhatsApp Image 2025-11-12 at 17.24.29_1e06e223.jpg'},
  { src: '/WhatsApp Image 2025-11-13 at 14.57.30_4dcd3380 copy.jpg'},
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030A1E] via-[#0A1235] to-[#030A1E]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#006CFF] to-[#7A3CFF] bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-[#D1D5E0]">
            Moments of Excellence & Transformation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#006CFF] to-[#7A3CFF] mx-auto rounded-full mt-4" />
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#006CFF]/50 transition-all duration-500"
            >
              {/* IMAGE */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

              {/* TEXT */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white px-4">
                <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
                <ExternalLink className="w-5 h-5 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg border-2 border-[#006CFF] text-[#006CFF] font-semibold hover:bg-[#006CFF] hover:text-white transition-all duration-300"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
