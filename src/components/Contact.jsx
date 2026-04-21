export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="section-title">Get in <span>Touch</span></h2>
        <p className="section-subtitle">We would love to hear from you. Visit our studio or contact us directly.</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text)' }}>📍 Studio Address</h3>
              <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.8' }}>
                Ibrahim Makeup Studio<br/>
                Old Mustafabad<br/>
                Delhi - 110094
              </p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text)' }}>📞 Contact Numbers</h3>
              <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.8' }}>
                WhatsApp: <a href="https://wa.me/919868444149" style={{ color: 'var(--highlight)' }}>+91 9868444149</a><br/>
                Call: <a href="tel:+919873603257" style={{ color: 'var(--highlight)' }}>+91 9873603257</a>
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text)' }}>⏰ Business Hours</h3>
              <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.8' }}>
                Monday - Sunday: 10:00 AM - 8:00 PM<br/>
                Prior appointment necessary for Bridal
              </p>
            </div>
          </div>
          
          <div style={{
            height: '400px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
            border: '2px solid #eee'
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.508544839818!2d77.2605417!3d28.7188732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc06bedaa0f9%3A0xea8d4d7328af3dfa!2sOld%20Mustafabad%2C%20Delhi%2C%20110094!5e0!3m2!1sen!2sin!4v1703080000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
