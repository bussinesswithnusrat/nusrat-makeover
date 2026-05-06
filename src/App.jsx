import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

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

function AppContent() {
  const location = useLocation();
  const isProtected = useProtection();

  return (
    <>
      <ScrollToTop />

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
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
              <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
              <Route path="/courses" element={<PageTransition><CoursesPage /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
              <Route path="/makeup-booking" element={<PageTransition><MakeupBooking /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;