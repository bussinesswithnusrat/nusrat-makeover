export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: '#fff',
      padding: '40px 5% 20px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem', color: 'var(--highlight)' }}>
          Ibrahim Studio
        </h2>
        <p style={{ color: '#aaa', marginBottom: '2rem', fontSize: '0.95rem' }}>
          By Nusrat Makeup Artist. Redefining elegance.
        </p>
        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '20px',
          color: '#777',
          fontSize: '0.9rem'
        }}>
          &copy; {new Date().getFullYear()} Ibrahim Makeup Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
