export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column */}
        {/* Subtle luxury gradient overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(248,237,235,0.4) 100%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div className="hero-content" style={{ zIndex: 1, position: 'relative' }}>
          <h1 className="hero-title">
            Ibrahim <br />
            <span className="highlight-text">Makeup Studio</span>
          </h1>
          <h2 className="hero-subtitle">Professional Bridal Makeup Artist</h2>
          <p className="hero-tagline">
            Discover your most beautiful self on your special day. Premium, elegant, and flawless bridal transformations crafted by Nusrat.
          </p>
          <div className="hero-actions">
            <a href="#bridal" className="btn-primary">Book Bridal Makeup</a>
            <a href="#gallery" className="btn-outline">View Our Work</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="hero-image-wrapper" style={{ zIndex: 1, position: 'relative' }}>
          <img src="/assets/images/hero.png" alt="Bridal Makeup Artistry" className="hero-image" loading="lazy" />
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 5% 100px;
          background-color: var(--background);
          position: relative;
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
        }
        .hero-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .hero-image {
          width: 100%;
          max-width: 500px;
          border-radius: 12px;
          box-shadow: var(--shadow-hover);
          object-fit: cover;
          aspect-ratio: 4/5;
        }

        /* Mobile specific styling */
        @media (max-width: 900px) {
          .hero-section {
            padding: 120px 5% 60px;
          }
          .hero-container {
            flex-direction: column;
            text-align: center;
            gap: 4rem;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-image-wrapper {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
