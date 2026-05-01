import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import nusratImg from '../assets/nusrat/nusrat.jpeg';

export default function AboutPage() {
  const [introVisible, setIntroVisible] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (introRef.current) {
      observer.observe(introRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <div className="about-page" style={{ backgroundColor: '#fffdfd', color: '#333' }}>
      
      {/* 1. HERO / HEADER */}
      <section style={{
        padding: '120px 5% 100px 5%',
        background: 'linear-gradient(135deg, #fff5f7 0%, #ffe4e8 100%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(0,0,0,0.03)'
      }}>
        <h1 style={{ 
          fontFamily: 'var(--font-heading, "Playfair Display", serif)', 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          color: '#1a1a1a',
          marginBottom: '1rem',
          fontWeight: '700'
        }}>
          About <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Nusrat</span> Makeup Artist
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          Crafting timeless bridal looks and empowering the next generation of makeup artists at Ibrahim Makeup Studio.
        </p>
      </section>

      {/* 2. INTRO SECTION */}
      <section ref={introRef} className="intro-section" style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}>
        <div className="intro-container">
          {/* IMAGE LEFT */}
          <div className={`intro-image-wrapper ${introVisible ? 'animate-slide-right' : ''}`}>
            <div className="intro-image-bg"></div>
            <img src={nusratImg} alt="Nusrat Makeup Artist" className="intro-image" loading="lazy" />
          </div>
          
          {/* TEXT RIGHT */}
          <div className="intro-text-wrapper">
            <h2 className={`intro-heading ${introVisible ? 'animate-slide-left stagger-1' : ''}`}>
              Meet Nusrat
            </h2>
            <h3 className={`intro-subheading ${introVisible ? 'animate-slide-left stagger-2' : ''}`}>
              Lead Artist & Educator
            </h3>
            <p className={`intro-p ${introVisible ? 'animate-slide-left stagger-3' : ''}`}>
              I am Nusrat, the creative force behind <strong>Ibrahim Makeup Studio</strong>. With a profound love for artistry and an eye for detail, my mission is to make every client feel like the most beautiful version of themselves.
            </p>
            <p className={`intro-p ${introVisible ? 'animate-slide-left stagger-4' : ''}`}>
              Specializing in high-definition bridal makeovers and contemporary styling, I bring years of professional experience, a calm presence, and a commitment to perfection to every vanity chair I stand behind.
            </p>
          </div>
        </div>
      </section>

      {/* 3. STORY SECTION */}
      <section style={{ padding: '100px 5%', backgroundColor: '#fff5f7' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)', fontSize: '2.5rem', marginBottom: '2rem', color: '#111' }}>
            The Journey & Passion
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            My journey into the makeup industry started with a simple fascination for how colors and textures could enhance natural beauty. What began as a passionate hobby quickly evolved into a dedicated career. I spent years honing my craft, learning from industry veterans, and mastering the delicate balance of light, shade, and skin tones.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
            Today, Ibrahim Makeup Studio stands as a sanctuary where creativity meets elegance. I specialize in bridal makeup because there is nothing quite like the joy of being part of someone's most cherished day, ensuring they walk down the aisle with absolute confidence.
          </p>
        </div>
      </section>

      {/* 4. EXPERIENCE & ACHIEVEMENTS */}
      <section style={{ padding: '100px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)', fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', color: '#111' }}>
          Experience & Achievements
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div style={{ padding: '40px 20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid #f9f9f9', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
            <div style={{ fontSize: '3.5rem', color: '#D4AF37', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}>5+</div>
            <h4 style={{ fontSize: '1.2rem', color: '#333', fontWeight: '600' }}>Years Experience</h4>
            <p style={{ color: '#777', marginTop: '0.5rem' }}>Perfecting the art of makeup.</p>
          </div>
          <div style={{ padding: '40px 20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid #f9f9f9', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
            <div style={{ fontSize: '3.5rem', color: '#D4AF37', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}>500+</div>
            <h4 style={{ fontSize: '1.2rem', color: '#333', fontWeight: '600' }}>Happy Brides</h4>
            <p style={{ color: '#777', marginTop: '0.5rem' }}>Smiles delivered on big days.</p>
          </div>
          <div style={{ padding: '40px 20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid #f9f9f9', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
            <div style={{ fontSize: '3.5rem', color: '#D4AF37', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}>100+</div>
            <h4 style={{ fontSize: '1.2rem', color: '#333', fontWeight: '600' }}>Students Trained</h4>
            <p style={{ color: '#777', marginTop: '0.5rem' }}>Through professional courses.</p>
          </div>
          <div style={{ padding: '40px 20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', border: '1px solid #f9f9f9', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
            <div style={{ fontSize: '3.5rem', color: '#D4AF37', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-heading, "Playfair Display", serif)' }}>✓</div>
            <h4 style={{ fontSize: '1.2rem', color: '#333', fontWeight: '600' }}>Certified Pro</h4>
            <p style={{ color: '#777', marginTop: '0.5rem' }}>Internationally recognized training.</p>
          </div>
        </div>
      </section>

      {/* 5. WHY TRUST US */}
      <section style={{ padding: '100px 5%', backgroundColor: '#1a1a1a', color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)', fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', color: '#fff' }}>
            Why Trust <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Ibrahim Studio</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(212, 175, 55, 0.5)' }}>
                <span style={{ fontSize: '1.5rem' }}>✨</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#D4AF37', marginBottom: '0.75rem', fontWeight: '600' }}>Impeccable Hygiene Standards</h3>
                <p style={{ color: '#ddd', lineHeight: '1.7', fontSize: '1.05rem' }}>We maintain strict sanitation protocols. All brushes, tools, and products are thoroughly sanitized between clients to ensure your safety and absolute comfort.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(212, 175, 55, 0.5)' }}>
                <span style={{ fontSize: '1.5rem' }}>💎</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#D4AF37', marginBottom: '0.75rem', fontWeight: '600' }}>Premium Products & Professionalism</h3>
                <p style={{ color: '#ddd', lineHeight: '1.7', fontSize: '1.05rem' }}>We exclusively use high-end, luxury makeup brands that are gentle on the skin, long-lasting, and photograph beautifully in any lighting condition.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(212, 175, 55, 0.5)' }}>
                <span style={{ fontSize: '1.5rem' }}>👰</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#D4AF37', marginBottom: '0.75rem', fontWeight: '600' }}>Bridal Specialization</h3>
                <p style={{ color: '#ddd', lineHeight: '1.7', fontSize: '1.05rem' }}>Bridal makeup is our core expertise. We understand the timing, the stress, and the significance of a wedding day, ensuring a seamless, relaxing, and timely makeover experience.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section style={{ padding: '100px 5%', textAlign: 'center', backgroundColor: '#fff5f7' }}>
        <h2 style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)', fontSize: '2.5rem', marginBottom: '1rem', color: '#111' }}>
          Ready to Look Your Best?
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: '1.6' }}>
          Whether you are a bride-to-be or looking to master the art of makeup yourself, we are here for you.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/makeup-booking" style={{
            backgroundColor: '#D4AF37',
            color: '#fff',
            padding: '16px 36px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
          }}
          onMouseOver={e => e.currentTarget.style.transform='translateY(-2px)'}
          onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}
          >
            Book Bridal Makeup
          </Link>
          <Link to="/courses" style={{
            backgroundColor: 'transparent',
            color: '#111',
            padding: '16px 36px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            border: '2px solid #111',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={e => { e.currentTarget.style.backgroundColor='#111'; e.currentTarget.style.color='#fff'; e.currentTarget.style.transform='translateY(-2px)' }}
          onMouseOut={e => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#111'; e.currentTarget.style.transform='translateY(0)' }}
          >
            Explore Courses
          </Link>
        </div>
      </section>

      <style>{`
        .intro-container {
          display: flex;
          flex-wrap: wrap;
          gap: 4rem;
          align-items: center;
        }

        .intro-image-wrapper {
          flex: 1 1 400px;
          position: relative;
          padding: 20px;
          opacity: 0;
        }

        .intro-image-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 40px;
          bottom: 40px;
          background-color: #F8EDEB;
          border-radius: 20px;
          z-index: 1;
        }

        .intro-image {
          width: 100%;
          height: auto;
          aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 20px;
          position: relative;
          z-index: 2;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        @media (hover: hover) {
          .intro-image-wrapper:hover .intro-image {
            transform: scale(1.03);
            box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          }
        }

        .intro-text-wrapper {
          flex: 1 1 500px;
        }

        .intro-heading {
          font-family: var(--font-heading, "Playfair Display", serif);
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #111;
          opacity: 0;
        }

        .intro-subheading {
          font-size: 1.2rem;
          color: #D4AF37;
          margin-bottom: 1.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0;
        }

        .intro-p {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          opacity: 0;
        }

        .animate-slide-right {
          animation: slideFromLeftIntro 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-left {
          animation: slideFromRightIntro 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.25s; }
        .stagger-3 { animation-delay: 0.4s; }
        .stagger-4 { animation-delay: 0.55s; }

        @keyframes slideFromLeftIntro {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideFromRightIntro {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @media (max-width: 900px) {
          .intro-container {
            flex-direction: column;
            gap: 3rem;
          }
          .intro-image-bg {
            right: 20px;
            bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}
