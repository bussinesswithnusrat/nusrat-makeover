import React from 'react';

export default function ProtectionOverlay({ isProtected }) {
  if (!isProtected) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(248, 237, 235, 0.85)', // Light pink overlay matching theme
      backdropFilter: 'blur(20px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      animation: 'fadeIn 0.3s ease forwards',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)', fontSize: '3rem', color: '#111', marginBottom: '1rem' }}>
        Content <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Protected</span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '500px' }}>
        We take the privacy and ownership of our bridal and student portfolios seriously. 
        Developer tools, saving, and content extraction are disabled.
      </p>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
