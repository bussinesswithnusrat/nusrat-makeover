import React from 'react';

export default function MakeupBooking() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const service = formData.get('service');
    const userMessage = formData.get('message');
    
    const message = `Hi Nusrat! 🌸 I am interested in booking a makeup appointment.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Event Date:* ${date}\n*Makeup Type:* ${service}\n\n*Message:* ${userMessage}\n\nPlease let me know your availability.`;
    const whatsappUrl = `https://wa.me/919873603257?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="section-padding bg-accent-light" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto', backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '10px' }}>Makeup <span>Booking</span></h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '30px' }}>Reserve your date for an unforgettable transformation.</p>
        
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Full Name</label>
            <input type="text" name="name" className="form-control" required placeholder="Enter your full name" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', minHeight: '48px' }} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Phone</label>
            <input type="tel" name="phone" className="form-control" required placeholder="Enter your phone number" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', minHeight: '48px' }} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Event Date</label>
            <input type="date" name="date" className="form-control" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', minHeight: '48px' }} />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Makeup Type</label>
            <select name="service" className="form-control" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', minHeight: '48px', backgroundColor: '#fff' }}>
              <option value="Bridal Makeup">Bridal Makeup</option>
              <option value="HD Glass Makeup">HD Glass Makeup</option>
              <option value="Glass Skin Makeup">Glass Skin Makeup</option>
              <option value="Cocktail Look">Cocktail Look</option>
              <option value="Engagement Makeup">Engagement Makeup</option>
              <option value="Haldi Makeup">Haldi Makeup</option>
              <option value="Mehndi Makeup">Mehndi Makeup</option>
              <option value="Party Makeup">Party Makeup</option>
              <option value="Pre-Bridal Makeup">Pre-Bridal Makeup</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Message (Optional)</label>
            <textarea name="message" className="form-control" placeholder="Any specific requirements or questions?" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', minHeight: '100px', resize: 'vertical' }}></textarea>
          </div>
          <button type="submit" style={{ 
            width: '100%', 
            padding: '14px', 
            backgroundColor: '#D4AF37', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '6px', 
            fontWeight: 'bold', 
            fontSize: '1.1rem', 
            cursor: 'pointer',
            minHeight: '48px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#b5952f'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#D4AF37'}
          >
            Book via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
