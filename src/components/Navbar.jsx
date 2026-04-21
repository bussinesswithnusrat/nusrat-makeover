import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
  ];

  const activeStyle = {
    color: 'var(--highlight)',
    fontWeight: '600',
    borderBottom: '2px solid var(--highlight)' // Added premium gold underline
  };

  const linkStyle = {
    fontWeight: 500, 
    fontSize: '0.95rem',
    color: 'var(--text)',
    textDecoration: 'none',
    paddingBottom: '4px',
    transition: 'color 0.3s ease'
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(10px)',
      boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
      transition: 'box-shadow 0.3s ease',
      zIndex: 1000,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 5%',
        margin: '0 auto',
        maxWidth: '1200px'
      }}>
        <NavLink to="/" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: '700', color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.5px' }}>
          Ibrahim <span style={{ color: 'var(--highlight)', fontStyle: 'italic' }}>Studio</span>
        </NavLink>
        
        {/* Desktop Menu */}
        <ul className="desktop-menu" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
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
          <li>
            <a href="#contact" style={linkStyle} className="nav-link-hover">Contact</a>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-toggle" onClick={toggleMenu} style={{ cursor: 'pointer', fontSize: '1.8rem', color: 'var(--text)' }}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          padding: '20px 5%',
          borderTop: '1px solid #eee',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
        }}>
          {navItems.map((item) => (
            <li key={item.name} style={{ padding: '12px 0' }}>
              <NavLink 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => isActive ? { ...linkStyle, fontSize: '1.1rem', display: 'block', ...activeStyle, borderBottom: 'none', paddingLeft: '10px', borderLeft: '3px solid var(--highlight)' } : { ...linkStyle, fontSize: '1.1rem', display: 'block', paddingLeft: '10px' }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li style={{ padding: '12px 0' }}>
            <a href="#contact" onClick={() => setIsOpen(false)} style={{ ...linkStyle, fontSize: '1.1rem', display: 'block', paddingLeft: '10px' }}>Contact</a>
          </li>
        </ul>
      )}
      
      <style>{`
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
        }
        .nav-link-hover:hover {
          color: var(--highlight) !important;
        }
      `}</style>
    </nav>
  );
}
