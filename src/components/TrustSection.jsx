export default function TrustSection() {
  const stats = [
    { value: "300+", label: "Brides Served", icon: "👑" },
    { value: "100+", label: "Students Trained", icon: "🎓" },
    { value: "5+", label: "Years Experience", icon: "✨" }
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        {stats.map((stat, idx) => (
          <div key={idx} className="trust-item">
            <div className="trust-icon">{stat.icon}</div>
            <div className="trust-value">{stat.value}</div>
            <div className="trust-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        .trust-section {
          background-color: var(--primary);
          padding: 60px 5%;
          position: relative;
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
        
        .trust-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          min-width: 200px;
        }
        
        .trust-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
          background: linear-gradient(135deg, var(--highlight) 0%, var(--highlight-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0px 2px 4px rgba(212,175,55,0.3));
        }
        
        .trust-value {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.1;
          margin-bottom: 5px;
        }
        
        .trust-label {
          font-size: 1.1rem;
          color: #555;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .trust-section {
            padding: 40px 5%;
          }
          .trust-container {
            flex-direction: column;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
