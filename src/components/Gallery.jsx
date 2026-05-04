import { useState } from 'react';

export default function Gallery() {
  const [previewImage, setPreviewImage] = useState(null);

  const galleryItems = [
    { src: '/assets/images/gallery1.png', tag: 'Bridal' },
    { src: '/assets/images/hero.png', tag: 'Bridal' },
    { src: '/assets/images/about.png', tag: 'Student' },
    { src: '/assets/images/gallery1.png', tag: 'Bridal' },
  ];

  return (
    <section id="gallery" className="section-padding bg-accent-light">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="section-title">Our <span>Work</span></h2>
        <p className="section-subtitle">Bridal & Student Results showcasing our premium techniques.</p>
        
        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="gallery-card"
              onClick={() => setPreviewImage(item.src)}
            >
              <img 
                src={item.src} 
                alt={`${item.tag} Portfolio ${idx + 1}`} 
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewImage && (
        <div className="preview-modal" onClick={() => setPreviewImage(null)}>
          <button className="preview-close" onClick={() => setPreviewImage(null)}>&times;</button>
          <img src={previewImage} alt="Fullscreen Portfolio" className="preview-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media(min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }
        @media(min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2.5rem;
          }
        }
        .gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          border: 4px solid #fff;
          box-shadow: var(--shadow);
          aspect-ratio: 4/5;
          cursor: pointer;
        }
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .gallery-card:hover .gallery-image {
          transform: scale(1.08);
        }
        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          padding: 25px;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-tag {
          background-color: var(--background);
          color: var(--text);
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        /* Show overlay always on touch devices */
        @media (hover: none) {
          .gallery-overlay {
            opacity: 1;
          }
        }
        .preview-modal {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3000;
          animation: fadein 0.3s forwards;
          backdrop-filter: blur(8px);
        }
        .preview-image {
          max-width: 90%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .preview-close {
          position: absolute;
          top: 25px;
          right: 35px;
          background: none;
          border: none;
          color: #fff;
          font-size: 3rem;
          line-height: 1;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s;
          /* Larger tap target on mobile */
          padding: 10px;
          min-width: 44px;
          min-height: 44px;
        }
        .preview-close:hover {
          opacity: 1;
        }
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 480px) {
          .gallery-grid { gap: 0.75rem; }
          .gallery-card { border-width: 2px; border-radius: 8px; }
          .preview-close { top: 12px; right: 12px; }
        }
      `}</style>
    </section>
  );
}