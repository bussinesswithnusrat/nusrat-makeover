import React from 'react';

export default function ContactPage() {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    const waMessage = `Hi Nusrat! I am reaching out from your website.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/919873603257?text=${encodeURIComponent(waMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page" style={{ backgroundColor: '#F8EDEB', minHeight: '100vh', color: '#333', paddingBottom: '100px' }}>
      
      {/* 1. PAGE HEADER */}
      <section style={{
        padding: '120px 5% 60px 5%',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontFamily: 'var(--font-heading, "Playfair Display", serif)', 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          color: '#1a1a1a',
          marginBottom: '1rem',
          fontWeight: '700'
        }}>
          Contact <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Us</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          We would love to hear from you. Book an appointment or inquire about our makeup courses.
        </p>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <section style={{ padding: '0 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          justifyContent: 'space-between'
        }}>
          
          {/* LEFT: 2. CONTACT DETAILS & 4. GOOGLE MAP */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{
              backgroundColor: '#fff',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h2 style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)', fontSize: '2rem', marginBottom: '2rem', color: '#111' }}>Get In Touch</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#F8EDEB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: '1.2rem', flexShrink: 0 }}>📞</div>
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#111' }}>Call or WhatsApp</h4>
                    <a href="tel:+919873603257" style={{ color: '#555', textDecoration: 'none', fontSize: '1.05rem' }}>+91 98736 03257</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#F8EDEB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: '1.2rem', flexShrink: 0 }}>✉️</div>
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#111' }}>E-Mail</h4>
                    <a href="mailto:bussinesswithnusrat@gmail.com" style={{ color: '#555', textDecoration: 'none', fontSize: '1.05rem' }}>bussinesswithnusrat@gmail.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#F8EDEB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: '1.2rem', flexShrink: 0 }}>📍</div>
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#111' }}>Studio Address</h4>
                    <p style={{ margin: 0, color: '#555', fontSize: '1.05rem', lineHeight: '1.5' }}>Old Mustafabad, Delhi - 110094</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. MAP EMBED */}
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              height: '300px'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.348405051996!2d77.2605232!3d28.7180182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc0a6b7201c7%3A0xc610c6628edcb9fb!2sOld%20Mustafabad%2C%20Delhi%2C%20110094!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location"
              ></iframe>
            </div>

          </div>

          {/* RIGHT: 3. CONTACT FORM */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{
              backgroundColor: '#fff',
              padding: '50px 40px',
              borderRadius: '16px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
            }}>
              <h2 style={{ fontFamily: 'var(--font-heading, "Playfair Display", serif)', fontSize: '2.2rem', marginBottom: '1rem', color: '#111' }}>Send a Message</h2>
              <p style={{ color: '#666', marginBottom: '2.5rem', fontSize: '1.05rem' }}>Fill out the form below and we will get back to you via WhatsApp.</p>
              
              <form onSubmit={handleContactSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Your Name</label>
                  <input type="text" name="name" required placeholder="Enter your full name" style={{ 
                    width: '100%', padding: '16px', border: '1px solid #eee', borderRadius: '8px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s', backgroundColor: '#fafafa', minHeight: '48px', boxSizing: 'border-box'
                  }} onFocus={e => e.target.style.borderColor='#D4AF37'} onBlur={e => e.target.style.borderColor='#eee'} />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Phone Number</label>
                  <input type="tel" name="phone" required placeholder="Enter your WhatsApp number" style={{ 
                    width: '100%', padding: '16px', border: '1px solid #eee', borderRadius: '8px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s', backgroundColor: '#fafafa', minHeight: '48px', boxSizing: 'border-box'
                  }} onFocus={e => e.target.style.borderColor='#D4AF37'} onBlur={e => e.target.style.borderColor='#eee'} />
                </div>
                
                <div style={{ marginBottom: '2.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Your Message</label>
                  <textarea name="message" required placeholder="How can we help you?" rows="5" style={{ 
                    width: '100%', padding: '16px', border: '1px solid #eee', borderRadius: '8px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s', backgroundColor: '#fafafa', resize: 'vertical', boxSizing: 'border-box'
                  }} onFocus={e => e.target.style.borderColor='#D4AF37'} onBlur={e => e.target.style.borderColor='#eee'}></textarea>
                </div>
                
                <button type="submit" style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: '#D4AF37',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                  minHeight: '48px'
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor='#b5952f'}
                onMouseOut={e => e.currentTarget.style.backgroundColor='#D4AF37'}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
