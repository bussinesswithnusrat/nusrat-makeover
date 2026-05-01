import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import MakeupBooking from './pages/MakeupBooking';

import useProtection from './hooks/useProtection';
import ProtectionOverlay from './components/ProtectionOverlay';

import "./styles/global.css";
import "./styles/responsive.css";

function App() {
  const isProtected = useProtection();

  return (
    <Router>
      <ScrollToTop />
      
      {/* Global CSS for text protection & blurring */}
      <style>{`
        body {
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }
        input, textarea {
          user-select: auto;
          -webkit-user-select: auto;
        }
        ${isProtected ? `
          img, .protected-image-bg, video {
            filter: blur(15px) !important;
            transition: filter 0.3s ease;
          }
        ` : `
          img, .protected-image-bg, video {
            transition: filter 0.3s ease;
          }
        `}
      `}</style>

      <ProtectionOverlay isProtected={isProtected} />

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
        <Navbar />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/makeup-booking" element={<MakeupBooking />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;