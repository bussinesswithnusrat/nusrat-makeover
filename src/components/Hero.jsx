import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import makeup3 from '../assets/images/makeup3.png';
import ServiceModal from './ServiceModal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* Luxury gradient overlay */}
        <div className="hero-overlay" />

        {/* LEFT: Text */}
        <div className="hero-content hero-anim-left" style={{ zIndex: 1, position: 'relative' }}>
          <h1 className="hero-title">
            Ibrahim <br />
            <span className="highlight-text">Makeup Studio</span>
          </h1>
          <h2 className="hero-subtitle">Professional Bridal Makeup Artist</h2>
          <p className="hero-tagline">
            Discover your most beautiful self on your special day. Premium, elegant, and flawless bridal transformations crafted by Nusrat.
          </p>

          <div className="hero-actions">
            {/* Opens service selection modal */}
            <button
              id="hero-btn-services"
              className="btn-primary hero-btn"
              onClick={() => setModalOpen(true)}
            >
              View Our Services
            </button>

            {/* Navigates to gallery page */}
            <button
              id="hero-btn-gallery"
              className="btn-outline hero-btn"
              onClick={() => navigate('/gallery')}
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="hero-image-wrapper hero-anim-right" style={{ zIndex: 1, position: 'relative' }}>
          <img
            src={makeup3}
            alt="Bridal Makeup Artistry by Nusrat"
            className="hero-image"
            loading="lazy"
          />
        </div>

      </div>

      {/* Service selection modal */}
      <ServiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 5% 100px;
          background-color: var(--background);
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(248,237,235,0.4) 100%);
          z-index: 0;
          pointer-events: none;
        }
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 5rem;
          width: 100%;
        }
        .hero-content {
          flex: 1;
          max-width: 600px;
        }
        .hero-title {
          font-size: clamp(3.5rem, 6vw, 5rem);
          line-height: 1.05;
          margin-bottom: 1rem;
          color: var(--text);
        }
        .highlight-text {
          color: var(--highlight);
          font-style: italic;
          font-weight: 600;
        }
        .hero-subtitle {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          font-weight: 500;
          color: #555;
          margin-bottom: 1rem;
          font-family: var(--font-body);
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .hero-tagline {
          font-size: 1.15rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Button base overrides for <button> elements */
        .hero-btn {
          font-family: var(--font-body, 'Poppins', sans-serif);
          cursor: pointer;
        }

        /* Enhanced hover glow */
        .hero-btn.btn-primary:hover {
          box-shadow: 0 8px 32px rgba(212, 175, 55, 0.55) !important;
          transform: translateY(-3px) scale(1.05) !important;
        }
        .hero-btn.btn-primary:active { transform: scale(0.97) !important; }

        .hero-btn.btn-outline:hover {
          transform: translateY(-3px) scale(1.05) !important;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }
        .hero-btn.btn-outline:active { transform: scale(0.97) !important; }

        .hero-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .hero-image {
          width: 100%;
          max-width: 480px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.13);
          object-fit: cover;
          aspect-ratio: 4 / 5;
          will-change: transform, opacity;
        }

        /* ── Entrance animations ── */
        .hero-anim-left {
          animation: heroSlideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }
        .hero-anim-right {
          animation: heroScaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
        }
        @keyframes heroSlideLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        @keyframes heroScaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1);    }
        }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .hero-section { padding: 120px 5% 60px; }
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
            gap: 2.5rem;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-image-wrapper { justify-content: center; width: 100%; }
          .hero-image { max-width: 300px; }
          .hero-actions { justify-content: center; }

          .hero-anim-left {
            animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
          }
          .hero-anim-right {
            animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
          }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .hero-anim-left,
          .hero-anim-right { animation: none; opacity: 1; }
        }
      `}</style>
    </section>
  );
}
