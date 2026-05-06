import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo/Logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeStyle = {
    color: 'var(--highlight, #D4AF37)',
    fontWeight: '600',
    borderBottom: '2px solid var(--highlight, #D4AF37)'
  };

  const linkStyle = {
    fontWeight: 500,
    fontSize: '0.95rem',
    color: 'var(--text, #333)',
    textDecoration: 'none',
    paddingBottom: '4px',
    transition: 'color 0.3s ease'
  };

  const whatsappMessage = "Hello, I want to book a makeup appointment.";
  const whatsappUrl = `https://wa.me/919873603257?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
      boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      zIndex: 1000,
    }}>
      <div className="navbar-inner" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 4%',
        minHeight: '110px',
        width: '100%',
        margin: '0 auto',
        position: 'relative',
      }}>
        {/* LEFT: Logo + Brand Name (desktop & mobile) */}
        <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '10px' }}>
          <img src={logo} alt="Logo" style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
          <span className="brand-name" style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontSize: '1.15rem',
            fontWeight: '600',
            lineHeight: '1.25',
            color: '#2a2a2a',
            letterSpacing: '0.02em',
          }}>
            Ibrahim<br />
            <span style={{ color: '#D4AF37', fontWeight: '400', fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Makeup Studio</span>
          </span>
        </Link>

        {/* CENTER: Desktop Menu */}
        <ul className="desktop-menu" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', margin: 0, padding: 0, listStyle: 'none' }}>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}
                className="nav-link-hover"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT: Book Button (desktop) */}
        <div className="desktop-menu">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#D4AF37',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.95rem',
            minHeight: '48px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            boxShadow: '0 4px 10px rgba(212, 175, 55, 0.3)'
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#b5952f';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#D4AF37';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div
          className="mobile-toggle"
          onClick={toggleMenu}
          style={{
            cursor: 'pointer',
            fontSize: '1.8rem',
            color: 'var(--text, #333)',
            position: 'absolute',
            right: '4%',
          }}
        >
          {isOpen ? '✕' : '☰'}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          padding: '20px 5%',
          borderTop: '1px solid #eee',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          position: 'absolute',
          width: '100%',
          left: 0,
          top: '100%'
        }}>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => isActive
                    ? { ...linkStyle, fontSize: '1.1rem', display: 'block', ...activeStyle, borderBottom: 'none', paddingLeft: '10px', borderLeft: '3px solid #D4AF37' }
                    : { ...linkStyle, fontSize: '1.1rem', display: 'block', paddingLeft: '10px' }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li style={{ marginTop: '10px' }}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
                backgroundColor: '#D4AF37',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%'
              }} onClick={() => setIsOpen(false)}>
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap');
        * {
          box-sizing: border-box;
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
          .brand-name { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .navbar-logo {
            position: static !important;
            left: unset !important;
            transform: none !important;
          }
        }
        .nav-link-hover:hover {
          color: var(--highlight, #D4AF37) !important;
        }
      `}</style>
    </nav>
  );
}