import React, { useState, useRef, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import makeup1 from '../assets/images/makeup1.png';
import makeup2 from '../assets/images/makeup2.png';
import makeup3 from '../assets/images/makeup3.png';
import makeup4 from '../assets/images/makeup4.png';
import makeup5 from '../assets/images/makeup5.png';

export default function GallerySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const [sectionRef, isVisible] = useScrollReveal(0.1);

  const galleryItems = [
    { src: makeup1, tag: 'Bridal Makeover' },
    { src: makeup2, tag: 'Haldi Look' },
    { src: makeup3, tag: 'Student Work' },
    { src: makeup4, tag: 'Engagement' },
    { src: makeup5, tag: 'Cocktail Look' },
  ];

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.children[0].offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      if (index !== activeIndex && index >= 0 && index < galleryItems.length) {
        setActiveIndex(index);
      }
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll, { passive: true });
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      style={{ padding: '100px 0', backgroundColor: '#F8EDEB', overflow: 'hidden' }}
    >
      {/* Section heading — fades up when in view */}
      <div
        className={`gs-header ${isVisible ? 'gs-header--visible' : ''}`}
        style={{ textAlign: 'center', marginBottom: '50px', padding: '0 5%' }}
      >
        <h2 style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)', fontSize: '2.8rem', color: '#111', marginBottom: '1rem' }}>
          Our <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Work</span>
        </h2>
        <p style={{ color: '#555', fontSize: '1.15rem' }}>
          Bridal &amp; Student Results showcasing our premium techniques.
        </p>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="hide-scrollbar gs-slider"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '20px',
          padding: '20px 5%',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className={`slider-card ${isVisible ? 'fade-slide-up' : ''}`}
            style={{
              flex: '0 0 auto',
              width: '85vw',
              maxWidth: '350px',
              aspectRatio: '4/5',
              borderRadius: '16px',
              overflow: 'hidden',
              scrollSnapAlign: 'center',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '4px solid #fff',
              backgroundColor: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              cursor: 'pointer',
              animationDelay: `${idx * 0.12}s`,
            }}
          >
            <img
              src={item.src}
              alt={item.tag}
              className="slider-image"
              loading="lazy"
            />
            {/* Badge */}
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              backgroundColor: 'rgba(255,255,255,0.88)',
              backdropFilter: 'blur(8px)',
              padding: '8px 20px',
              borderRadius: '30px',
              color: '#111',
              fontWeight: '600',
              fontSize: '0.95rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            }}>
              {item.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '30px' }}>
        {galleryItems.map((_, idx) => (
          <div
            key={idx}
            onClick={() => {
              if (sliderRef.current) {
                const cardWidth = sliderRef.current.children[0].offsetWidth + 20;
                sliderRef.current.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
              }
            }}
            style={{
              width: activeIndex === idx ? '30px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: activeIndex === idx ? '#D4AF37' : 'rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }

        /* ── Section heading reveal ── */
        .gs-header {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gs-header--visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Card image ── */
        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
          display: block;
        }

        /* ── Card hover: scale + slight tilt ── */
        @media (hover: hover) {
          .slider-card:hover {
            transform: scale(1.05) rotate(-1deg) !important;
            box-shadow: 0 22px 45px rgba(0,0,0,0.18) !important;
          }
          .slider-card:hover .slider-image {
            transform: scale(1.06);
          }
        }

        /* ── Card entry animation (triggered by isVisible) ── */
        .fade-slide-up {
          opacity: 0;
          animation: fadeSlideUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        /* ── Desktop ── */
        @media (min-width: 1024px) {
          .slider-card { width: calc(20vw - 25px) !important; max-width: none !important; }
          .gs-slider   { justify-content: center; }
        }

        /* ── Tablet ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .slider-card { width: calc(33.333vw - 30px) !important; }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .gs-header, .fade-slide-up { animation: none; transition: none; opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
