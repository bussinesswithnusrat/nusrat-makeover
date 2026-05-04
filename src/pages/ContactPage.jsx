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
    <div
      className="contact-page"
      style={{ backgroundColor: '#F8EDEB', minHeight: '100vh', color: '#333', paddingBottom: '80px' }}
    >
      {/* PAGE HEADER */}
      <section
        style={{
          padding: 'clamp(80px, 12vw, 120px) 5% clamp(32px, 6vw, 60px)',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-heading, "Playfair Display", serif)',
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            color: '#1a1a1a',
            marginBottom: '0.75rem',
            fontWeight: '700',
          }}
        >
          Contact <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Us</span>
        </h1>
        <p
          style={{
            fontSize: 'clamp(0.95rem, 3vw, 1.15rem)',
            color: '#555',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}
        >
          We would love to hear from you. Book an appointment or inquire about our makeup courses.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: '0 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="contact-layout">

          {/* LEFT: Details + Map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                backgroundColor: '#fff',
                padding: 'clamp(24px, 5vw, 40px)',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Playfair Display", serif)',
                  fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                  marginBottom: '1.5rem',
                  color: '#111',
                }}
              >
                Get In Touch
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  {
                    icon: '📞',
                    title: 'Call or WhatsApp',
                    content: (
                      <a href="tel:+919873603257" style={{ color: '#555', textDecoration: 'none', fontSize: '1rem' }}>
                        +91 98736 03257
                      </a>
                    ),
                  },
                  {
                    icon: '✉️',
                    title: 'E-Mail',
                    content: (
                      <a href="mailto:bussinesswithnusrat@gmail.com" style={{ color: '#555', textDecoration: 'none', fontSize: '1rem', wordBreak: 'break-word' }}>
                        bussinesswithnusrat@gmail.com
                      </a>
                    ),
                  },
                  {
                    icon: '📍',
                    title: 'Studio Address',
                    content: <p style={{ margin: 0, color: '#555', fontSize: '1rem', lineHeight: '1.5' }}>Old Mustafabad, Delhi - 110094</p>,
                  },
                ].map(({ icon, title, content }) => (
                  <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        minWidth: '44px',
                        borderRadius: '50%',
                        backgroundColor: '#F8EDEB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#D4AF37',
                        fontSize: '1.1rem',
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 4px', fontSize: '1rem', color: '#111' }}>{title}</h4>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MAP */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                height: 'clamp(220px, 45vw, 300px)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.348405051996!2d77.2605232!3d28.7180182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc0a6b7201c7%3A0xc610c6628edcb9fb!2sOld%20Mustafabad%2C%20Delhi%2C%20110094!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location"
              />
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div>
            <div
              style={{
                backgroundColor: '#fff',
                padding: 'clamp(24px, 6vw, 50px) clamp(20px, 5vw, 40px)',
                borderRadius: '16px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "Playfair Display", serif)',
                  fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
                  marginBottom: '0.75rem',
                  color: '#111',
                }}
              >
                Send a Message
              </h2>
              <p style={{ color: '#666', marginBottom: '2rem', fontSize: 'clamp(0.9rem, 3vw, 1.05rem)', lineHeight: '1.6' }}>
                Fill out the form below and we will get back to you via WhatsApp.
              </p>

              <form onSubmit={handleContactSubmit}>
                {[
                  { label: 'Your Name', type: 'text', name: 'name', placeholder: 'Enter your full name' },
                  { label: 'Phone Number', type: 'tel', name: 'phone', placeholder: 'Enter your WhatsApp number' },
                ].map(({ label, type, name, placeholder }) => (
                  <div key={name} style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#333', fontSize: '0.95rem' }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      required
                      placeholder={placeholder}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid #eee',
                        borderRadius: '8px',
                        /* 16px prevents iOS auto-zoom */
                        fontSize: '16px',
                        outline: 'none',
                        backgroundColor: '#fafafa',
                        minHeight: '52px',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.3s',
                        WebkitAppearance: 'none',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#D4AF37')}
                      onBlur={e => (e.target.style.borderColor = '#eee')}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#333', fontSize: '0.95rem' }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="How can we help you?"
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1px solid #eee',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none',
                      backgroundColor: '#fafafa',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                      minHeight: '120px',
                      transition: 'border-color 0.3s',
                      fontFamily: 'inherit',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#D4AF37')}
                    onBlur={e => (e.target.style.borderColor = '#eee')}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: '#D4AF37',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '30px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                    minHeight: '52px',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  onMouseOver={e => (e.currentTarget.style.backgroundColor = '#b5952f')}
                  onMouseOut={e => (e.currentTarget.style.backgroundColor = '#D4AF37')}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 860px) {
          .contact-layout {
            grid-template-columns: 1fr 1.2fr;
            gap: 2.5rem;
            align-items: start;
          }
        }
      `}</style>
    </div>
  );
}