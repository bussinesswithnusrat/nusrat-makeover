export default function ContactCTA() {
  const whatsappMessage = "Hi Nusrat! I'm interested in your makeup services and would like to know more.";
  const whatsappUrl = `https://wa.me/919873603257?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="contact-cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready for your dream bridal look?</h2>
        <p className="cta-subtitle">Let's discuss your vision and create magic together. Reach out to us directly for quick bookings.</p>

        <div className="cta-buttons">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary cta-btn">
            <span className="whatsapp-icon">💬</span> Chat on WhatsApp
          </a>
          <a href="tel:+919873603257" className="btn-outline cta-btn cta-btn-outline">
            Call Us Now
          </a>
        </div>
      </div>

      <style>{`
        .contact-cta-section {
          background: linear-gradient(135deg, var(--primary) 0%, #fff 100%);
          padding: 80px 5%;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* Decorative background elements */
        .contact-cta-section::before,
        .contact-cta-section::after {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          opacity: 0.4;
          z-index: 0;
          pointer-events: none;
        }

        .contact-cta-section::before {
          top: -100px;
          left: -100px;
        }

        .contact-cta-section::after {
          bottom: -100px;
          right: -100px;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--text);
          margin-bottom: 1rem;
        }

        .cta-subtitle {
          font-size: 1.15rem;
          color: #555;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .cta-btn {
          min-width: 220px;
        }

        .cta-btn-outline {
          background-color: transparent;
          border-color: var(--highlight);
          color: var(--text);
        }

        .cta-btn-outline:hover {
          background-color: var(--highlight);
          color: #fff;
        }

        .whatsapp-icon {
          margin-right: 8px;
          font-size: 1.2rem;
        }

        @media (max-width: 600px) {
          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .cta-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
