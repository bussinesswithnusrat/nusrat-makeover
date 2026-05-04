import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * ServiceModal – centered overlay card for choosing a service.
 * Props:
 *   isOpen  {boolean}  – controls visibility
 *   onClose {function} – called to close the modal
 */
export default function ServiceModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNavigate = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <div
      className="sm-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Choose Your Service"
    >
      <div className="sm-card" onClick={(e) => e.stopPropagation()}>

        <button className="sm-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="sm-header">
          <span className="sm-sparkle">✨</span>
          <h2 className="sm-title">Choose Your Service</h2>
          <p className="sm-subtitle">Select how you'd like to get started with us</p>
        </div>

        <div className="sm-actions">
          <button
            id="service-btn-booking"
            className="sm-service-btn sm-btn-primary"
            onClick={() => handleNavigate('/makeup-booking')}
          >
            <span className="sm-btn-icon">💄</span>
            <span className="sm-btn-text">
              <strong>Makeup Booking</strong>
              <small>Book bridal & party makeup</small>
            </span>
            <span className="sm-btn-arrow">→</span>
          </button>

          <button
            id="service-btn-courses"
            className="sm-service-btn sm-btn-outline"
            onClick={() => handleNavigate('/courses')}
          >
            <span className="sm-btn-icon">🎓</span>
            <span className="sm-btn-text">
              <strong>Enroll in Courses</strong>
              <small>Professional makeup training</small>
            </span>
            <span className="sm-btn-arrow">→</span>
          </button>
        </div>
      </div>

      <style>{`
        /* ── Overlay ── */
        .sm-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: flex-end; /* bottom-sheet on mobile */
          justify-content: center;
          z-index: 9000;
          padding: 0;
          animation: smOverlayIn 0.25s ease forwards;
        }
        @media (min-width: 480px) {
          .sm-overlay {
            align-items: center;
            padding: 20px;
          }
        }
        @keyframes smOverlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Card ── */
        .sm-card {
          background: #fff;
          border-radius: 20px 20px 0 0; /* bottom-sheet style on mobile */
          padding: 2rem 1.25rem 2.5rem; /* extra bottom padding for safe area */
          padding-bottom: calc(2.5rem + env(safe-area-inset-bottom));
          width: 100%;
          max-width: 100%;
          position: relative;
          box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.18);
          animation: smCardInMobile 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (min-width: 480px) {
          .sm-card {
            border-radius: 20px;
            padding: 2.5rem 2rem 2rem;
            max-width: 440px;
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);
            animation: smCardIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        }
        @keyframes smCardInMobile {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes smCardIn {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to   { opacity: 1; transform: scale(1)   translateY(0);    }
        }

        /* ── Close ── */
        .sm-close {
          position: absolute;
          top: 16px;
          right: 18px;
          background: none;
          border: none;
          font-size: 1.3rem;
          color: #aaa;
          cursor: pointer;
          line-height: 1;
          padding: 8px 10px; /* larger tap target on mobile */
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sm-close:hover { color: #333; background: #f0f0f0; }

        /* ── Header ── */
        .sm-header { text-align: center; margin-bottom: 1.5rem; }
        .sm-sparkle { font-size: 2rem; display: block; margin-bottom: 0.5rem; }
        .sm-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 1.5rem;
          color: #1a1a1a;
          margin-bottom: 0.4rem;
        }
        @media (min-width: 480px) {
          .sm-header { margin-bottom: 2rem; }
          .sm-title  { font-size: 1.8rem; }
        }
        .sm-subtitle { color: #777; font-size: 0.9rem; }

        /* ── Service buttons ── */
        .sm-actions { display: flex; flex-direction: column; gap: 0.875rem; }

        .sm-service-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 0.9rem 1.1rem;
          border-radius: 12px;
          border: 2px solid transparent;
          cursor: pointer;
          text-align: left;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          font-family: var(--font-body, 'Poppins', sans-serif);
          min-height: 64px; /* accessible tap target */
          -webkit-tap-highlight-color: transparent;
        }
        /* Disable scale hover on touch devices to prevent sticky states */
        @media (hover: hover) {
          .sm-service-btn:hover  { transform: scale(1.03); }
        }
        .sm-service-btn:active { transform: scale(0.97); }

        .sm-btn-primary {
          background: linear-gradient(135deg, #D4AF37 0%, #e0c25a 100%);
          color: #fff;
          box-shadow: 0 6px 20px rgba(212, 175, 55, 0.3);
        }
        @media (hover: hover) {
          .sm-btn-primary:hover { box-shadow: 0 10px 30px rgba(212, 175, 55, 0.45); }
        }

        .sm-btn-outline {
          background: #fafafa;
          border-color: #e8e8e8;
          color: #333;
        }
        @media (hover: hover) {
          .sm-btn-outline:hover { border-color: #D4AF37; background: #fffbf0; box-shadow: 0 6px 20px rgba(0,0,0,0.07); }
        }

        .sm-btn-icon { font-size: 1.6rem; flex-shrink: 0; }

        .sm-btn-text {
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 2px;
        }
        .sm-btn-text strong { font-size: 0.95rem; font-weight: 600; }
        .sm-btn-text small  { font-size: 0.8rem; opacity: 0.75; font-weight: 400; }

        .sm-btn-arrow { font-size: 1.1rem; flex-shrink: 0; opacity: 0.6; }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .sm-overlay, .sm-card { animation: none; }
        }
      `}</style>
    </div>
  );
}