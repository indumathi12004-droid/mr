import { Award, Target, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030A1E] via-[#101B4C] to-[#030A1E]" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(0, 108, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(122, 60, 255, 0.2) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#006CFF] to-[#7A3CFF] bg-clip-text text-transparent">
            About Happi Mr Global
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#006CFF] to-[#7A3CFF] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#006CFF]/20 to-[#7A3CFF]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative h-96 rounded-2xl overflow-hidden border border-[#006CFF]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#006CFF]/10 to-[#7A3CFF]/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <img
  src="/ed28a11b-623a-4272-af2d-54623447ba4b[1].jpg"   // 🔹 Replace with your actual image filename in the public folder
  alt="Excellence in Masculinity"
  className="w-full h-full object-cover rounded-2xl"
/>
<p className="text-xl text-[#D1D5E0] mt-4">Excellence in Masculinity</p>

                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-[#D1D5E0]">
              Happi Mr Global celebrates the evolution of the modern man — confident, creative, and conscious.
            </p>
            <p className="text-lg leading-relaxed text-[#D1D5E0]">
              Our platform goes beyond appearance, shaping men into leaders with presence, purpose, and poise.
            </p>
            <p className="text-lg leading-relaxed text-[#D1D5E0]">
              Over 90 days, contestants experience transformative grooming, public-speaking mentorship, and brand-safe digital challenges, culminating in a world-class finale that blends intelligence with impact.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#006CFF]/10 to-transparent border border-[#006CFF]/30 backdrop-blur-sm">
                <Target className="w-8 h-8 text-[#006CFF] mb-2" />
                <h3 className="text-xl font-semibold mb-1">Purpose</h3>
                <p className="text-sm text-[#D1D5E0]/80">Leading with intention</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#7A3CFF]/10 to-transparent border border-[#7A3CFF]/30 backdrop-blur-sm">
                <Users className="w-8 h-8 text-[#7A3CFF] mb-2" />
                <h3 className="text-xl font-semibold mb-1">Community</h3>
                <p className="text-sm text-[#D1D5E0]/80">Brotherhood & growth</p>
              </div>
            </div>

            <a
              href="#journey"
              className="inline-block mt-8 px-8 py-3 rounded-lg border-2 border-[#006CFF] text-[#006CFF] font-semibold hover:bg-[#006CFF] hover:text-white transition-all duration-300"
            >
              Discover the Vision
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
