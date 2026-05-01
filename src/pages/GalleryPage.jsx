import React, { useState } from 'react';
import { motion } from 'framer-motion';

import makeup1 from '../assets/images/makeup1.png';
import makeup2 from '../assets/images/makeup2.png';
import makeup3 from '../assets/images/makeup3.png';
import makeup4 from '../assets/images/makeup4.png';
import makeup5 from '../assets/images/makeup5.png';
import makeup6 from '../assets/images/makeup6.png';
import makeup7 from '../assets/images/makeup7.png';
import makeup8 from '../assets/images/makeup8.png';

import video1 from '../assets/video/16V.MOV';
import video2 from '../assets/video/2V.MOV';

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const cardHover = {
  rest: { scale: 1, boxShadow: '0 10px 30px rgba(0,0,0,0.07)' },
  hover: { scale: 1.025, boxShadow: '0 20px 45px rgba(0,0,0,0.14)' },
};

// ─── Section heading style ────────────────────────────────────────────────────
const sectionHeadingStyle = {
  fontFamily: 'var(--font-heading, "Playfair Display", serif)',
  fontSize: '2.2rem',
  marginBottom: '2.5rem',
  color: '#111',
  borderBottom: '2px solid rgba(212, 175, 55, 0.25)',
  paddingBottom: '10px',
  display: 'inline-block',
};

// ─── Tag badge ────────────────────────────────────────────────────────────────
function Tag({ label, position = 'top' }) {
  return (
    <div style={{
      position: 'absolute',
      top: position === 'top' ? '14px' : 'auto',
      bottom: position === 'bottom' ? '14px' : 'auto',
      left: '14px',
      backgroundColor: 'rgba(255, 255, 255, 0.88)',
      backdropFilter: 'blur(6px)',
      padding: '5px 16px',
      borderRadius: '20px',
      color: '#111',
      fontWeight: '600',
      fontSize: '0.88rem',
      zIndex: 10,
      pointerEvents: 'none',
    }}>
      {label}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [previewMedia, setPreviewMedia] = useState(null);

  const images = [
    { src: makeup1, tag: 'Bridal Makeover' },
    { src: makeup2, tag: 'Haldi Look' },
    { src: makeup3, tag: 'Student Work' },
    { src: makeup4, tag: 'Engagement' },
    { src: makeup5, tag: 'Reception' },
    { src: makeup6, tag: 'Party Makeup' },
    { src: makeup7, tag: 'Bridal Detail' },
    { src: makeup8, tag: 'Traditional' },
  ];

  const videos = [
    { src: video1, label: 'Bridal BTS' },
    { src: video2, label: 'Studio Session' },
  ];

  return (
    <div style={{ backgroundColor: '#F8EDEB', minHeight: '100vh', paddingBottom: '100px' }}>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <motion.section
        style={{ padding: '120px 5% 60px 5%', textAlign: 'center' }}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 style={{
          fontFamily: 'var(--font-heading, "Playfair Display", serif)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          color: '#1a1a1a',
          marginBottom: '1rem',
          fontWeight: '700',
        }}>
          Our <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Gallery</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
          A closer look at our premium bridal transformations and student success stories.
        </p>
      </motion.section>

      {/* ── Video Showcases ─────────────────────────────────────────── */}
      <section style={{ padding: '0 5% 80px' }}>
        <motion.h2
          style={{ ...sectionHeadingStyle, display: 'block', textAlign: 'center' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Video Showcases
        </motion.h2>

        <div className="video-grid">
          {videos.map((vid, idx) => (
            <div key={idx} className="video-card">
              <Tag label={vid.label} position="top" />
              <video
                src={vid.src}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Image Portfolio ──────────────────────────────────────────── */}
      <section style={{ padding: '0 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          style={sectionHeadingStyle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Portfolio
        </motion.h2>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              custom={idx % 4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              whileHover={{ scale: 1.025, boxShadow: '0 20px 45px rgba(0,0,0,0.13)' }}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '4px solid #fff',
                backgroundColor: '#fff',
                aspectRatio: '4/5',
                position: 'relative',
                cursor: 'pointer',
                boxShadow: '0 8px 28px rgba(0,0,0,0.07)',
              }}
              onClick={() => setPreviewMedia({ type: 'image', src: img.src })}
            >
              <img
                src={img.src}
                alt={img.tag}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              <Tag label={img.tag} position="bottom" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Modal ───────────────────────────────────────────────────── */}
      {previewMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setPreviewMedia(null)}
          style={{
            position: 'fixed', inset: 0,
            backgroundColor: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 3000, padding: '20px',
          }}
        >
          <button
            onClick={() => setPreviewMedia(null)}
            style={{
              position: 'absolute', top: '22px', right: '30px',
              background: 'none', border: 'none', color: '#fff',
              fontSize: '3.5rem', cursor: 'pointer', opacity: 0.75,
              transition: 'opacity 0.2s', lineHeight: 1,
            }}
            onMouseOver={e => e.currentTarget.style.opacity = '1'}
            onMouseOut={e => e.currentTarget.style.opacity = '0.75'}
          >
            &times;
          </button>

          <motion.img
            src={previewMedia.src}
            alt="Preview"
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              maxWidth: '100%', maxHeight: '90vh',
              objectFit: 'contain', borderRadius: '10px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            }}
            onClick={e => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* ── Styles ──────────────────────────────────────────────────── */}
      <style>{`
        /* ── Video Grid ── */
        .video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 780px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .video-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        /* ── Video Card ── */
        .video-card {
          position: relative;
          aspect-ratio: 9 / 16;
          border-radius: 16px;
          overflow: hidden;
          background-color: #fff;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.10);
          width: 100%;
        }

        /* ── Gallery Grid ── */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        }
        @media (min-width: 1024px) {
          .gallery-grid { grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        }
      `}</style>
    </div>
  );
}
