export default function About() {
  return (
    <section id="about" className="section-padding">
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div>
          <img 
            src="/assets/images/about.png" 
            alt="Nusrat Makeup Artist Setup" 
            style={{
              width: '100%',
              borderRadius: '8px',
              boxShadow: 'var(--shadow)'
            }}
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            Meet <span>Nusrat</span>
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#555' }}>
            Welcome to Ibrahim Makeup Studio. Led by Nusrat, a passionate and experienced makeup artist specializing in high-end bridal transformations and professional makeup education.
          </p>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            We believe that makeup should enhance, not mask. Our signature style revolves around soft, luminous, and elegant aesthetics that bring out your natural beauty and radiance on your most important day.
          </p>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
