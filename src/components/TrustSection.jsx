import useScrollReveal from '../hooks/useScrollReveal';

export default function TrustSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.2);

  const stats = [
    { value: '300+', label: 'Brides Served',     icon: '👑' },
    { value: '100+', label: 'Students Trained',  icon: '🎓' },
    { value: '5+',   label: 'Years Experience',  icon: '✨' },
  ];

  return (
    <section className="trust-section" ref={sectionRef}>
      <div className="trust-container">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`trust-item ${isVisible ? 'trust-item--visible' : ''}`}
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className="trust-icon">{stat.icon}</div>
            <div className="trust-value">{stat.value}</div>
            <div className="trust-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        .trust-section {
          background-color: var(--primary);
          padding: 40px 5%;
          position: relative;
        }
        @media (min-width: 768px) {
          .trust-section { padding: 60px 5%; }
        }
        .trust-container {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }
        /* 3-column row on mobile, equal spacing */
        @media (max-width: 767px) {
          .trust-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }
        .trust-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          min-width: 0; /* allow shrinking in grid */
          opacity: 0;
          transform: translateY(36px);
        }
        .trust-item--visible {
          animation: trustFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes trustFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .trust-icon {
          font-size: 2rem;
          margin-bottom: 10px;
          background: linear-gradient(135deg, var(--highlight) 0%, var(--highlight-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0px 2px 4px rgba(212,175,55,0.3));
        }
        @media (min-width: 768px) {
          .trust-icon { font-size: 2.5rem; margin-bottom: 15px; }
        }
        .trust-value {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.1;
          margin-bottom: 4px;
        }
        @media (min-width: 768px) {
          .trust-value { font-size: 3rem; }
        }
        .trust-label {
          font-size: 0.75rem;
          color: #555;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
          line-height: 1.3;
        }
        @media (min-width: 768px) {
          .trust-label { font-size: 1.1rem; letter-spacing: 1.5px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-item, .trust-item--visible { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}