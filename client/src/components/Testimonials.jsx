import React from 'react';

const DEFAULT_WHATSAPP_REVIEWS = [
  {
    name: "Selvin",
    city: "Udupi, Karnataka",
    rating: 5,
    verified: true,
    product: "Rosemary Hair Oil, Manjistha & Neem Soap",
    comment: "I have been using your products for 9 months and all have given 100% results! In this generation, it makes me very happy that you make genuine chemical-free products. My dandruff cleared in the very first wash with your hair oil! Manjistha soap reduced dark spots, gave face glow and reduced tanning. For pimples, I started Neem soap 8 days ago and already got 70% results, marks are fading away. Loving you from Udupi!"
  },
  {
    name: "Lakshmi K S",
    city: "Tumkur, Karnataka",
    rating: 5,
    verified: true,
    product: "Ashwini Herbal Black Henna",
    comment: "Black henna use madide tumba chenagi result bantu. Your product is 100% natural, nange tumba satisfaction aytu mam. Really it's worth our money! Highly recommended for everyone looking for pure herbal care."
  },
  {
    name: "Ani",
    city: "Bengaluru, Karnataka",
    rating: 5,
    verified: true,
    product: "Ashwini Herbal Kumkumadi Thailam",
    comment: "I use regular Kumkumadi Thailam daily. It reduced my dark circles, and acne marks are reduced by 75%! Truly an amazing product. Thank you so much Ashwini Herbal!"
  },
  {
    name: "Kavitha",
    city: "Karnataka",
    rating: 5,
    verified: true,
    product: "Manjistha & Coffee Glow Soaps",
    comment: "Your Manjistha and Coffee soap is really good mam! Faded tanning and skin feels so soft and refreshed. Now ordering the complete hair care kit with hair oil and herbal shampoo too!"
  }
];

export const Testimonials = ({ testimonials }) => {
  const reviewsList = (testimonials && testimonials.length > 0) ? testimonials : DEFAULT_WHATSAPP_REVIEWS;

  return (
    <section className="testimonials-section" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Verified Customer Love</span>
          <h3 className="section-title">Real Stories, Real Radiance</h3>
          <p className="section-subtitle">
            Authentic customer feedback and WhatsApp messages from happy families across Karnataka and India.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviewsList.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div className="testimonial-stars">{'★'.repeat(t.rating || 5)}</div>
                <span className="verified-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <img src="/whatsapp.png" alt="WhatsApp" style={{ width: '13px', height: '13px', objectFit: 'contain' }} />
                  WhatsApp Verified
                </span>
              </div>

              {t.product && (
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-gold)', marginBottom: '10px' }}>
                  {t.product}
                </div>
              )}

              <p className="testimonial-text">"{t.comment}"</p>

              <div className="testimonial-author">
                <div className="author-info">
                  <h5>{t.name}</h5>
                  <span>{t.city} • Verified Buyer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


