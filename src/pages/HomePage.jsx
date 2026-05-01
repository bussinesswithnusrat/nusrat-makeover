import Hero from '../components/Hero';
import GallerySlider from '../components/GallerySlider';
import TrustSection from '../components/TrustSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <GallerySlider />
      <TrustSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}
