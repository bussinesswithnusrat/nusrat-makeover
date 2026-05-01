import React, { useEffect, useRef, useState } from 'react';
import makeup1 from '../assets/images/makeup1.png';

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } /* Triggers when 20% of the section is visible */
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      title: "Professional Quality",
      desc: "Using only premium, long-lasting international products for a flawless finish.",
      icon: "✨"
    },
    {
      title: "Hygiene Standards",
      desc: "Strict sanitization protocols ensuring your safety and comfort.",
      icon: "🌸"
    },
    {
      title: "Personalized Looks",
      desc: "Customized makeup styles that enhance your natural beauty and match your vision.",
      icon: "💖"
    }
  ];

  return (
    <section 
      className="section-padding bg-accent-light" 
      ref={sectionRef} 
      style={{ overflow: 'hidden' }}
    >
      <div className="wcu-container">
        
        {/* LEFT: Image */}
        <div className={`wcu-image-wrapper ${isVisible ? 'animate-slide-right' : ''}`}>
          <div className="wcu-image-decoration"></div>
          <img 
            src={makeup1} 
            alt="Nusrat Makeup Artist working on bridal makeover" 
            className="wcu-image" 
            loading="lazy"
          />
        </div>
        
        {/* RIGHT: Text Content */}
        <div className={`wcu-content ${isVisible ? 'animate-slide-left' : ''}`}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Why Choose <span>Us?</span>
          </h2>
          <p style={{ color: '#666', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Your wedding day is one of the most important days of your life. We ensure you look and feel absolute perfection.
          </p>
          
          <div className="wcu-list">
            {reasons.map((item, idx) => (
              <div key={idx} className="wcu-list-item">
                <div className="wcu-icon">{item.icon}</div>
                <div>
                  <h3 className="wcu-item-title">{item.title}</h3>
                  <p className="wcu-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .wcu-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 4rem;
        }

        .wcu-image-wrapper {
          flex: 1;
          position: relative;
          padding: 20px;
          opacity: 0; /* Starts hidden for animation */
        }

        .wcu-image {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          object-fit: cover;
          aspect-ratio: 4/5;
          position: relative;
          z-index: 2;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        /* Hover Zoom Effect */
        .wcu-image-wrapper:hover .wcu-image {
          transform: scale(1.03);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }

        .wcu-image-decoration {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 40px;
          left: 40px;
          background-color: #F8EDEB;
          border-radius: 20px;
          z-index: 1;
        }

        .wcu-content {
          flex: 1;
          opacity: 0; /* Starts hidden for animation */
        }

        /* Animations */
        .animate-slide-right {
          animation: slideFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-left {
          animation: slideFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.15s; /* Slight delay for staggered effect */
        }

        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .wcu-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .wcu-list-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .wcu-icon {
          font-size: 1.8rem;
          background-color: #fff;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          flex-shrink: 0;
        }

        .wcu-item-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--text);
        }

        .wcu-item-desc {
          color: #666;
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 900px) {
          .wcu-container {
            flex-direction: column;
            gap: 3rem;
          }
          
          .wcu-content {
            padding-top: 1rem;
          }

          .wcu-image {
            border-radius: 20px;
          }

          .wcu-image-decoration {
            bottom: 20px;
            left: 20px;
            border-radius: 20px;
          }
        }
      `}</style>
    </section>
  );
}
