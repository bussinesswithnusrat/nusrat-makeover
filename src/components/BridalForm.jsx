export default function BridalForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const service = formData.get('service');
    const userMessage = formData.get('message');
    
    const message = `Hi Nusrat! 🌸 I am interested in booking Bridal Makeup.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Event Date:* ${date}\n*Makeup Type:* ${service}\n\n*Message:* ${userMessage}\n\nPlease let me know your availability.`;
    const whatsappUrl = `https://wa.me/919868444149?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="bridal" className="section-padding bg-accent-light">
      <div className="bridal-form-wrapper">
        <h2 className="section-title">Book <span>Bridal</span> Makeup</h2>
        <p className="section-subtitle">Reserve your date for an unforgettable bridal transformation.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" className="form-control" required placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" className="form-control" required placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label>Event Date</label>
            <input type="date" name="date" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Makeup Type</label>
            <select name="service" className="form-control" required>
              <option value="Bridal Makeup">Bridal Makeup</option>
              <option value="Engagement Makeup">Engagement Makeup</option>
              <option value="Party/Guest Makeup">Party/Guest Makeup</option>
              <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" className="form-control" placeholder="Any specific requirements or questions?"></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Book via WhatsApp
          </button>
        </form>
      </div>

      <style>{`
        .bridal-form-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background-color: #fff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: var(--shadow);
        }
        @media (max-width: 600px) {
          .bridal-form-wrapper {
            padding: 24px 16px;
            border-radius: 0;
            box-shadow: none;
          }
          .form-control {
            font-size: 16px !important; /* Prevents iOS zoom on focus */
          }
        }
      `}</style>
    </section>
  );
}