import { useState, useEffect } from 'react';
import { coursesData } from '../utils/coursesData';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [viewMode, setViewMode] = useState('details');

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
    
    const message = `Hi Nusrat! 🎓 I am interested in enrolling for a professional makeup course.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Selected Course:* ${selectedCourse.title}\n*Experience Level:* ${experience}\n\nPlease share more details and enrollment process.`;
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
    <section id="courses" className="section-padding" style={{ backgroundColor: 'var(--primary)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 className="section-title">Our <span>Courses</span></h2>
        <p className="section-subtitle">Master the art of makeup with our completely hands-on professional courses designed for beginners to advanced artists.</p>
        
        <div className="courses-grid">
          {coursesData.map((course) => (
            <div key={course.id} className="course-card">
              <h3 className="course-card-title">{course.title}</h3>
              <div className="course-card-fee">{course.fee}</div>
              <div className="course-card-duration">Duration: {course.duration}</div>
              
              <ul className="course-card-benefits">
                {course.benefits.slice(0, 3).map((benefit, idx) => (
                  <li key={idx}>✓ {benefit}</li>
                ))}
              </ul>

              <button onClick={() => handleOpenModal(course)} className="btn-outline" style={{ marginTop: 'auto' }}>
                View More
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
            
            {viewMode === 'details' ? (
              <div className="modal-details fade-in">
                <h2 className="modal-title">{selectedCourse.title}</h2>
                <div className="modal-meta">
                  <div><strong>Duration:</strong> {selectedCourse.duration}</div>
                  <div className="fee"><strong>Fee:</strong> {selectedCourse.fee}</div>
                </div>
                
                <h3 className="modal-subtitle">Course Description</h3>
                <p className="modal-desc">{selectedCourse.description}</p>
                
                <h3 className="modal-subtitle">What You'll Learn</h3>
                <ul className="modal-benefits-list">
                  {selectedCourse.benefits.map((benefit, idx) => (
                    <li key={idx}><span>✓</span> {benefit}</li>
                  ))}
                </ul>

                <button onClick={() => setViewMode('enroll')} className="btn-primary" style={{ width: '100%' }}>
                  Enroll Now
                </button>
              </div>
            ) : (
              <div className="modal-enroll fade-in">
                <button onClick={() => setViewMode('details')} style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', marginBottom: '1rem', fontWeight: '500', fontSize: '1rem' }}>
                  &larr; Back to Details
                </button>
                <h2 className="modal-title" style={{ fontSize: '1.75rem' }}>Enroll in <span>{selectedCourse.title}</span></h2>
                
                <form onSubmit={handleEnrollSubmit} style={{ marginTop: '1.5rem' }}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" className="form-control" required placeholder="Enter your full name" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" className="form-control" required placeholder="Enter your phone number" />
                  </div>
                  <div className="form-group">
                    <label>Experience Level</label>
                    <select name="experience" className="form-control" required>
                      <option value="Beginner (No experience)">Beginner (No experience)</option>
                      <option value="Intermediate (Some basic knowledge)">Intermediate (Some basic knowledge)</option>
                      <option value="Advanced (Professional)">Advanced (Professional)</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    Continue to WhatsApp
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .courses-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media(min-width: 768px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .course-card {
          background-color: #fff;
          padding: 40px 30px;
          border-radius: 12px;
          box-shadow: var(--shadow);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          text-align: left;
          border: 1px solid rgba(0,0,0,0.02);
        }
        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-hover);
        }
        .course-card-title {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          color: var(--text);
          font-family: var(--font-heading);
          letter-spacing: -0.5px;
        }
        .course-card-fee {
          color: var(--highlight);
          font-size: 1.35rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .course-card-duration {
          color: #666;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        .course-card-benefits {
          list-style: none;
          padding: 0;
          margin-bottom: 2.5rem;
          flex-grow: 1;
        }
        .course-card-benefits li {
          margin-bottom: 0.75rem;
          color: #555;
          font-size: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          animation: fadein 0.3s forwards;
          backdrop-filter: blur(8px);
        }
        .modal-content {
          background-color: #fff;
          border-radius: 12px;
          width: 100%;
          max-width: 550px;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          padding: 50px 40px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          text-align: left;
          animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (max-width: 500px) {
          .modal-content {
            padding: 40px 25px;
          }
        }
        .modal-close {
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          font-size: 2.5rem;
          line-height: 1;
          cursor: pointer;
          color: #aaa;
          transition: color 0.2s;
        }
        .modal-close:hover {
          color: var(--text);
        }
        .modal-title {
          font-size: 2.25rem;
          font-family: var(--font-heading);
          margin-bottom: 1.5rem;
          letter-spacing: -0.5px;
        }
        .modal-title span {
          color: var(--highlight);
          font-style: italic;
        }
        .modal-meta {
          display: flex;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
        }
        .modal-meta .fee strong { color: var(--highlight); }
        .modal-subtitle {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-family: var(--font-body);
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #222;
        }
        .modal-desc {
          color: #555;
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }
        .modal-benefits-list {
          list-style: none;
          padding: 0;
          margin-bottom: 2.5rem;
        }
        .modal-benefits-list li {
          margin-bottom: 0.85rem;
          color: #555;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 1.05rem;
        }
        .modal-benefits-list li span {
          color: var(--highlight);
          font-weight: bold;
        }
        .fade-in {
          animation: fadein 0.3s;
        }
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .modal-overlay {
            align-items: flex-end !important;
            padding: 0 !important;
          }
          .modal-content {
            padding: 32px 18px 44px !important;
            max-height: 92vh;
            border-radius: 16px 16px 0 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .modal-title {
            font-size: 1.6rem !important;
          }
          .modal-meta {
            flex-direction: column;
            gap: 0.4rem;
          }
          .course-card {
            padding: 28px 20px !important;
          }
          .course-card-title {
            font-size: 1.4rem !important;
          }
          .form-control {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}