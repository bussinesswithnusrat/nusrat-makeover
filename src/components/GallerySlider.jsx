import React, { useState, useRef, useEffect } from 'react';
import makeup1 from '../assets/images/makeup1.png';
import makeup2 from '../assets/images/makeup2.png';
import makeup3 from '../assets/images/makeup3.png';
import makeup4 from '../assets/images/makeup4.png';
import makeup5 from '../assets/images/makeup5.png';

export default function GallerySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const galleryItems = [
    { src: makeup1, tag: 'Bridal Makeover' },
    { src: makeup2, tag: 'Haldi Look' },
    { src: makeup3, tag: 'Student Work' },
    { src: makeup4, tag: 'Engagement' },
    { src: makeup5, tag: 'Cocktail Look' },
  ];

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.children[0].offsetWidth;
      // Adding a little threshold helps with precise dot snapping
      const index = Math.round(scrollPosition / cardWidth);
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
    <section style={{ padding: '100px 0', backgroundColor: '#F8EDEB', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px', padding: '0 5%' }}>
        <h2 style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)', fontSize: '2.8rem', color: '#111', marginBottom: '1rem' }}>
          Our <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Work</span>
        </h2>
        <p style={{ color: '#555', fontSize: '1.15rem' }}>Bridal & Student Results showcasing our premium techniques.</p>
      </div>

      {/* Slider Container */}
      <div 
        ref={sliderRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '20px',
          padding: '20px 5%',
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none',  /* IE and Edge */
        }}
        className="hide-scrollbar"
      >
        {galleryItems.map((item, idx) => (
          <div 
            key={idx}
            className="slider-card fade-slide-up"
            style={{
              flex: '0 0 auto',
              width: '85vw', /* Mobile: Shows almost 1 full card */
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
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              animationDelay: `${idx * 0.15}s` /* Staggered entry animation */
            }}
          >
            <img 
              src={item.src} 
              alt={item.tag} 
              className="slider-image"
              loading="lazy"
            />
            {/* Glassmorphism White Overlay Badge */}
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '8px 20px',
              borderRadius: '30px',
              color: '#111',
              fontWeight: '600',
              fontSize: '0.95rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              {item.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '30px' }}>
        {galleryItems.map((_, idx) => (
          <div 
            key={idx}
            onClick={() => {
              if (sliderRef.current) {
                const cardWidth = sliderRef.current.children[0].offsetWidth + 20; // 20px gap
                sliderRef.current.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
              }
            }}
            style={{
              width: activeIndex === idx ? '30px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: activeIndex === idx ? '#D4AF37' : 'rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        /* Hover states for desktop */
        @media (hover: hover) {
          .slider-card:hover {
            transform: scale(1.05) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
          }
          .slider-card:hover .slider-image {
            transform: scale(1.05); /* Slight image zoom */
          }
        }

        /* Entry Animation (Fade + Slide Up) */
        .fade-slide-up {
          opacity: 0;
          animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Desktop specific styles */
        @media (min-width: 1024px) {
          .slider-card {
            width: calc(20vw - 25px) !important; /* Fit 5 cards across on desktop */
            max-width: none !important;
          }
          .hide-scrollbar {
            justify-content: center;
          }
        }

        /* Tablet styles */
        @media (min-width: 768px) and (max-width: 1023px) {
          .slider-card {
            width: calc(33.333vw - 30px) !important; /* Fit 3 cards across on tablet */
          }
        }
      `}</style>
    </section>
  );
}
