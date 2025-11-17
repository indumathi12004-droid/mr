import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import FinaleSection from './components/FinaleSection';
import BootcampSection from './components/BootcampSection';
import GallerySection from './components/GallerySection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030A1E] text-white overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <FinaleSection />
      <BootcampSection />
      <GallerySection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
