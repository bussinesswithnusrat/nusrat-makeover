import React, { useState, useEffect } from 'react';

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [viewMode, setViewMode] = useState('details'); // 'details' | 'enroll'

  const courseData = [
    {
      id: 1,
      title: "Basic to Advanced Professional Makeup Course",
      duration: "1–2 Months",
      price: "Enquire for Pricing",
      shortHighlights: [
        "Product knowledge",
        "Color correction",
        "Contouring & highlighting",
        "Full bridal makeup looks"
      ],
      details: {
        includes: [
          "Product knowledge",
          "Brush types and uses",
          "Color correction",
          "Flawless base according to skin type",
          "Contouring & highlighting",
          "Blush application according to face shape"
        ],
        eyeMakeup: [
          "Subtle eye makeup",
          "Halo eye",
          "Half cut crease",
          "Full cut crease",
          "Smokey eyes",
          "Arabic eyes",
          "Colorful eyes",
          "Pakistani glittery eyes",
          "Signature eye look"
        ],
        additionalSkills: [
          "10 types of eyeliner",
          "Full makeup looks:",
          "Engagement makeup",
          "Haldi makeup",
          "Cocktail makeup",
          "Nikah makeup",
          "Reception makeup"
        ]
      }
    }
  ];

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setViewMode('details');
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const experience = formData.get('experience');
    
    const message = `Hi Nusrat! 🎓 I am interested in enrolling for a professional makeup course.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Course Name:* ${selectedCourse.title}\n*Experience Level:* ${experience}\n\nPlease share more details and enrollment process.`;
    const whatsappUrl = `https://wa.me/919873603257?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    handleCloseModal();
  };

  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCourse]);

  return (
    <div className="courses-page" style={{ backgroundColor: '#F8EDEB', minHeight: '100vh', color: '#333', paddingBottom: '60px' }}>
      
      {/* 1. PAGE HEADER */}
      <section style={{
        padding: '120px 5% 80px 5%',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontFamily: 'var(--font-heading, "Playfair Display", serif)', 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          color: '#1a1a1a',
          marginBottom: '1rem',
          fontWeight: '700'
        }}>
          Our Makeup <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Courses</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          Learn Professional Makeup from Expert Artist
        </p>
      </section>

      {/* 2. COURSE GRID */}
      <section style={{ padding: '0 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          justifyContent: 'center'
        }}>
          {courseData.map((course) => (
            <div key={course.id} style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '40px 30px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              maxWidth: '500px',
              margin: '0 auto',
              width: '100%'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
            }}
            >
              <h3 style={{ 
                fontFamily: 'var(--font-heading, "Playfair Display", serif)',
                fontSize: '1.8rem',
                color: '#111',
                marginBottom: '1rem',
                lineHeight: '1.3'
              }}>{course.title}</h3>
              
              <div style={{ color: '#777', fontSize: '1.05rem', marginBottom: '1.5rem', display: 'flex', gap: '15px' }}>
                <span>⏱ {course.duration}</span>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', flexGrow: 1 }}>
                {course.shortHighlights.map((highlight, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '1rem', 
                    color: '#555', 
                    fontSize: '1.05rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>✓</span> {highlight}
                  </li>
                ))}
              </ul>

              <button onClick={() => handleOpenModal(course)} style={{
                width: '100%',
                padding: '16px',
                backgroundColor: 'transparent',
                color: '#D4AF37',
                border: '2px solid #D4AF37',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '1.05rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: 'auto',
                minHeight: '48px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#D4AF37';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#D4AF37';
              }}
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MODAL SYSTEM & 5. ENROLLMENT FLOW */}
      {selectedCourse && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '20px',
          animation: 'fadeIn 0.3s ease forwards'
        }} onClick={handleCloseModal}>
          
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '600px',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            padding: '50px 40px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            animation: 'slideUp 0.3s ease forwards'
          }} onClick={e => e.stopPropagation()}>
            
            <button onClick={handleCloseModal} style={{
              position: 'absolute',
              top: '20px',
              right: '25px',
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              color: '#aaa',
              cursor: 'pointer',
              lineHeight: 1,
              transition: 'color 0.2s',
              zIndex: 10
            }}
            onMouseOver={e => e.currentTarget.style.color='#111'}
            onMouseOut={e => e.currentTarget.style.color='#aaa'}
            >&times;</button>
            
            {viewMode === 'details' ? (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <h2 style={{ 
                  fontFamily: 'var(--font-heading, "Playfair Display", serif)',
                  fontSize: '2.2rem',
                  color: '#111',
                  marginBottom: '1.5rem',
                  lineHeight: '1.2'
                }}>{selectedCourse.title}</h2>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid #f0f0f0',
                  marginBottom: '2rem',
                  fontSize: '1.1rem'
                }}>
                  <div style={{ color: '#555' }}><strong>Duration:</strong> {selectedCourse.duration}</div>
                </div>
                
                <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#D4AF37', marginBottom: '1rem' }}>This course includes:</h3>
                <ol style={{ paddingLeft: '1.5rem', margin: '0 0 2rem 0', color: '#555', lineHeight: '1.8' }}>
                  {selectedCourse.details.includes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>

                <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#D4AF37', marginBottom: '1rem' }}>Eye Makeup Techniques:</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                  {selectedCourse.details.eyeMakeup.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem', color: '#555', display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ color: '#D4AF37', fontSize: '0.8rem' }}>•</span> {item}
                    </li>
                  ))}
                </ul>

                <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#D4AF37', marginBottom: '1rem' }}>Additional Skills:</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0' }}>
                  {selectedCourse.details.additionalSkills.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem', color: '#555', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#D4AF37', fontSize: '0.8rem', marginTop: '6px' }}>•</span> 
                      <span style={{ marginLeft: item.includes("makeup") && !item.includes("Full makeup looks") ? '15px' : '0' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <button onClick={() => setViewMode('enroll')} style={{
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
                  Enroll Now
                </button>
              </div>
            ) : (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <button onClick={() => setViewMode('details')} style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#555', 
                  cursor: 'pointer', 
                  marginBottom: '1.5rem', 
                  fontWeight: '500', 
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: 0
                }}>
                  &larr; Back to Details
                </button>
                
                <h2 style={{ 
                  fontFamily: 'var(--font-heading, "Playfair Display", serif)',
                  fontSize: '2rem',
                  color: '#111',
                  marginBottom: '2rem',
                  lineHeight: '1.2'
                }}>Enroll in <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>{selectedCourse.title}</span></h2>
                
                <form onSubmit={handleEnrollSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Full Name</label>
                    <input type="text" name="name" required placeholder="Enter your full name" style={{ 
                      width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' 
                    }} onFocus={e => e.target.style.borderColor='#D4AF37'} onBlur={e => e.target.style.borderColor='#ddd'} />
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Phone Number</label>
                    <input type="tel" name="phone" required placeholder="Enter your phone number" style={{ 
                      width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' 
                    }} onFocus={e => e.target.style.borderColor='#D4AF37'} onBlur={e => e.target.style.borderColor='#ddd'} />
                  </div>
                  
                  <div style={{ marginBottom: '2.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Experience Level</label>
                    <select name="experience" required style={{ 
                      width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', backgroundColor: '#fff', outline: 'none', transition: 'border-color 0.3s' 
                    }} onFocus={e => e.target.style.borderColor='#D4AF37'} onBlur={e => e.target.style.borderColor='#ddd'}>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                    </select>
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
                    Continue to WhatsApp
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (max-width: 600px) {
          .courses-page section { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </div>
  );
}
