import Hero from '../components/Hero';
import BridalForm from '../components/BridalForm';
import Gallery from '../components/Gallery';

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <BridalForm />
      <Gallery />
    </div>
  );
}
