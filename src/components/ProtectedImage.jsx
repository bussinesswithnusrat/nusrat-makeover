import React from 'react';

export default function ProtectedImage({ src, alt, className, style, showWatermark = true }) {
  return (
    <div 
      className={`protected-image-container ${className || ''}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none', // Disables long-press context menu on iOS
        ...style
      }}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Background Image Approach for better protection */}
      <div 
        className="protected-image-bg"
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'filter 0.3s ease, transform 0.4s ease',
        }}
        aria-label={alt}
      />
      
      {/* Invisible overlay to block clicks/drags on background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 10 }} />

      {/* Watermark Overlay */}
      {showWatermark && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'rgba(255, 255, 255, 0.25)',
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 20,
          textShadow: '0 2px 5px rgba(0,0,0,0.3)',
          fontFamily: 'var(--font-heading, "Playfair Display", serif)',
        }}>
          Ibrahim Makeup Studio
        </div>
      )}
    </div>
  );
}
