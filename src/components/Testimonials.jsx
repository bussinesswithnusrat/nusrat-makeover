import useScrollReveal from '../hooks/useScrollReveal';

export default function Testimonials() {
  const [sectionRef, isVisible] = useScrollReveal(0.1);

  const reviews = [
    {
      name: 'Ayesha K.',
      date: 'December 2025',
      text: 'Nusrat made me feel like an absolute queen on my Nikah. The makeup was flawless, lasted all night, and looked stunning in photos. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Priya S.',
      date: 'November 2025',
      text: 'I booked her for my reception and I was blown away. She perfectly understood the subtle, elegant look I wanted. Her hygiene standards are impeccable.',
      rating: 5,
    },
    {
      name: 'Sana F.',
      date: 'October 2025',
      text: 'The best makeup artist in Delhi! She is so polite, professional, and magical with her brushes. My entire family loved the bridal look.',
      rating: 5,
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-primary-light">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className={`section-title testi-title ${isVisible ? 'testi-reveal' : ''}`}>
          Client <span>Love</span>
        </h2>
        <p className={`section-subtitle ${isVisible ? 'testi-reveal' : ''}`}
           style={{ animationDelay: '0.1s' }}>
          Hear from our beautiful brides about their transformation experience.
        </p>

        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className={`testimonial-card ${isVisible ? 'testi-card-reveal' : ''}`}
              style={{ animationDelay: `${0.15 + idx * 0.15}s` }}
            >
              <div className="quote-icon">"</div>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
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
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        /* ── Heading / subtitle reveal ── */
        .testi-title, .section-subtitle {
          opacity: 0;
          transform: translateY(30px);
        }
        .testi-reveal {
          animation: testiUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* ── Card reveal ── */
        .testimonial-card {
          background-color: var(--background);
          padding: 1.5rem 1.25rem;
          border-radius: 12px;
          box-shadow: var(--shadow);
          position: relative;
          border-top: 4px solid var(--highlight);
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(40px);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        @media (min-width: 768px) {
          .testimonial-card { padding: 2.5rem 2rem; }
        }
        .testi-card-reveal {
          animation: testiUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes testiUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        @media (hover: hover) {
          .testimonial-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: var(--shadow-hover) !important;
          }
        }
        .quote-icon {
          position: absolute;
          top: 10px; right: 20px;
          font-family: var(--font-heading);
          font-size: 4rem;
          color: var(--primary);
          opacity: 0.8;
          line-height: 1;
        }
        @media (min-width: 768px) {
          .quote-icon { font-size: 5rem; }
        }
        .stars {
          color: var(--highlight);
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          position: relative;
          z-index: 1;
        }
        .testimonial-text {
          font-style: italic;
          color: #555;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex: 1;
          position: relative;
          z-index: 1;
          font-size: 0.95rem;
        }
        @media (min-width: 768px) {
          .testimonial-text { font-size: 1rem; margin-bottom: 2rem; }
        }
        .testimonial-author {
          border-top: 1px solid #eee;
          padding-top: 1rem;
        }
        .testimonial-author h4 {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text);
          margin-bottom: 0.2rem;
        }
        .testimonial-author span { font-size: 0.85rem; color: #888; }

        @media (prefers-reduced-motion: reduce) {
          .testi-title, .section-subtitle,
          .testimonial-card, .testi-reveal,
          .testi-card-reveal { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}