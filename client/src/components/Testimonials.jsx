import React from 'react';

export const Testimonials = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="testimonials-section" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Verified Customer Love</span>
          <h3 className="section-title">Real Stories, Real Radiance</h3>
          <p className="section-subtitle">
            Over 10,000+ happy customers across India trust Ashwini Herbal for daily family care.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
              <p className="testimonial-text">"{t.comment}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h5>{t.name}</h5>
                  <span>{t.city} • Verified Buyer</span>
                </div>
                <span className="verified-badge">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

