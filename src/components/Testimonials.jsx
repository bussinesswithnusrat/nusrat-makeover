export default function Testimonials() {
  const reviews = [
    {
      name: "Ayesha K.",
      date: "December 2025",
      text: "Nusrat made me feel like an absolute queen on my Nikah. The makeup was flawless, lasted all night, and looked stunning in photos. Highly recommend!",
      rating: 5
    },
    {
      name: "Priya S.",
      date: "November 2025",
      text: "I booked her for my reception and I was blown away. She perfectly understood the subtle, elegant look I wanted. Her hygiene standards are impeccable.",
      rating: 5
    },
    {
      name: "Sana F.",
      date: "October 2025",
      text: "The best makeup artist in Delhi! She is so polite, professional, and magical with her brushes. My entire family loved the bridal look.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-primary-light">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="section-title">Client <span>Love</span></h2>
        <p className="section-subtitle">Hear from our beautiful brides about their transformation experience.</p>
        
        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="quote-icon">"</div>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">{review.text}</p>
              <div className="testimonial-author">
                <h4>{review.name}</h4>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .testimonial-card {
          background-color: var(--background);
          padding: 2.5rem 2rem;
          border-radius: 12px;
          box-shadow: var(--shadow);
          position: relative;
          transition: var(--transition);
          border-top: 4px solid var(--highlight);
          display: flex;
          flex-direction: column;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
        }

        .quote-icon {
          position: absolute;
          top: 10px;
          right: 20px;
          font-family: var(--font-heading);
          font-size: 5rem;
          color: var(--primary);
          opacity: 0.8;
          line-height: 1;
        }

        .stars {
          color: var(--highlight);
          font-size: 1.2rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .testimonial-text {
          font-style: italic;
          color: #555;
          line-height: 1.7;
          margin-bottom: 2rem;
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .testimonial-author {
          border-top: 1px solid #eee;
          padding-top: 1rem;
        }

        .testimonial-author h4 {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--text);
          margin-bottom: 0.2rem;
        }

        .testimonial-author span {
          font-size: 0.85rem;
          color: #888;
        }
      `}</style>
    </section>
  );
}
