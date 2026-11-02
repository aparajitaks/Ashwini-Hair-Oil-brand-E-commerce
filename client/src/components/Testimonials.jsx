import React, { useState } from 'react';

const DEFAULT_WHATSAPP_REVIEWS = [
  {
    name: "Adithi",
    city: "Karnataka",
    rating: 5,
    category: "haircare",
    verified: true,
    product: "Rosemary Hair Oil & Anti-Hairfall Kit",
    comment: "99% kammi agide hair fall! Before there was so much hair shedding on my comb, now it has stopped completely. Smell also tumba channagide, all your products are wonderful. Whenever you launch a new product, I will be the first to book — I am your regular customer now! Thank you!"
  },
  {
    name: "Shwetha Shet",
    city: "Karnataka",
    rating: 5,
    category: "haircare",
    verified: true,
    product: "Herbal Hair Oil & Natural Shampoo",
    comment: "Nimma hair oil and shampoo tumba channagide! Hair oil is super mam, night apply madidre chendha niddhe baruthe (applying at night gives such a peaceful, relaxing sleep). Keep it up mam, you are providing such great natural products to the public. God bless you!"
  },
  {
    name: "Selvin",
    city: "Udupi, Karnataka",
    rating: 5,
    category: "skincare",
    verified: true,
    product: "Rosemary Hair Oil, Manjistha & Neem Soap",
    comment: "I have been using your products for 9 months and all have given 100% results! In this generation, it makes me very happy that you make genuine chemical-free products. My dandruff cleared in the very first wash with your hair oil! Manjistha soap reduced dark spots, gave face glow and reduced tanning. For pimples, I started Neem soap 8 days ago and already got 70% results, marks are fading away. Loving you from Udupi!"
  },
  {
    name: "Verified Mother",
    city: "Karnataka",
    rating: 5,
    category: "babycare",
    verified: true,
    product: "Baby Massage Oil, Baby Soap & Manjistha Soap",
    comment: "Ordered baby massage oil, baby soap and Manjistha soap for my baby. Day by day my baby's face changes and glow are visibly improving! And Manjistha soap gives a visible glow in just 1 face wash. Herbal hair oil also gave super results, totally satisfied with all your products!"
  },
  {
    name: "Sakshi Pandit",
    city: "Verified Buyer",
    rating: 5,
    category: "haircare",
    verified: true,
    product: "Bhringraj Hair Oil, Growth Powder & Lip Balm",
    comment: "Mam your Bhringraj hair oil, hair growth powder and anti-dandruff shampoo is very good! I bought it 15 days ago and noticed visible difference. Its very effective, and the lip balm is also very nice and moisturizing."
  },
  {
    name: "Family Review",
    city: "Karnataka",
    rating: 5,
    category: "skincare",
    verified: true,
    product: "Coffee & Manjistha Soaps, Hibiscus Shampoo",
    comment: "Coffee and Manjistha soaps are a big hit at our home! My son loves the coffee soap the most. Used hibiscus shampoo, showing very good results — hair turned out silky and smooth. Black Henna also kept hair moist and soft without drying. May your service reach across Karnataka and globally!"
  },
  {
    name: "Traditional Shikakai Buyer",
    city: "Karnataka",
    rating: 5,
    category: "haircare",
    verified: true,
    product: "Traditional Shikakai Hair Wash Powder & Shampoo",
    comment: "ಅವರಿಗೆ ಆ ಪೌಡರ್ ಹಚ್ತಾ ಇದ್ರೆ ಆಗಿನ ಕಾಲದಲ್ಲಿ ಶಿಗೆಕಾಯಿ ಪೌಡರ್ ಹಚ್ಚಿದಾಗೆ ಫೀಲ್ ಆಗ್ತಾ ಇದೆ! It feels exactly like traditional authentic Shikakai from older days because you make it 100% naturally. My mother uses it daily and loves all your videos. Ordering 1kg powder and 1 liter shampoo again!"
  },
  {
    name: "Verified Customer",
    city: "Karnataka",
    rating: 5,
    category: "haircare",
    verified: true,
    product: "Ashwini Hair Growth Powder & Herbal Shampoo",
    comment: "This product is amazing! Complete 100% stop to hair fall. Your hair growth powder and herbal shampoo are truly amazing and effective."
  },
  {
    name: "Gurusithu",
    city: "Mandya, Karnataka",
    rating: 5,
    category: "general",
    verified: true,
    product: "Authentic Ashwini Herbal Care",
    comment: "Nim product ella tumba channagi ide! When I first bought, I had doubts because some sellers online sell fake items, but you responded so quickly and all your products are 100% genuine and effective. Super response and quality!"
  },
  {
    name: "Lakshmi K S",
    city: "Tumkur, Karnataka",
    rating: 5,
    category: "haircare",
    verified: true,
    product: "Ashwini Herbal Black Henna",
    comment: "Black henna use madide tumba chenagi result bantu. Your product is 100% natural, nange tumba satisfaction aytu mam. Really it's worth our money! Highly recommended for everyone looking for pure herbal care."
  },
  {
    name: "Ani",
    city: "Bengaluru, Karnataka",
    rating: 5,
    category: "skincare",
    verified: true,
    product: "Ashwini Herbal Kumkumadi Thailam",
    comment: "I use regular Kumkumadi Thailam daily. It reduced my dark circles, and acne marks are reduced by 75%! Truly an amazing product. Thank you so much Ashwini Herbal!"
  },
  {
    name: "Aswini",
    city: "Verified Buyer",
    rating: 5,
    category: "skincare",
    verified: true,
    product: "Ashwini Herbal Lip Balm",
    comment: "Lip balm tumba channagide, olle result kottide mam! Nange tumba ishta aytu. Natural shine and completely heals dry and pigmented lips."
  },
  {
    name: "Kavitha",
    city: "Karnataka",
    rating: 5,
    category: "skincare",
    verified: true,
    product: "Manjistha & Coffee Glow Soaps",
    comment: "Your Manjistha and Coffee soap is really good mam! Faded tanning and skin feels so soft and refreshed. Now ordering the complete hair care kit with hair oil and herbal shampoo too!"
  }
];

export const Testimonials = ({ testimonials }) => {
  const [filter, setFilter] = useState('all');
  const rawList = (testimonials && testimonials.length > 0) ? testimonials : DEFAULT_WHATSAPP_REVIEWS;

  const filteredReviews = filter === 'all'
    ? rawList
    : rawList.filter(r => r.category === filter);

  return (
    <section className="testimonials-section" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Verified Customer Love</span>
          <h3 className="section-title">Real Stories, Real Radiance</h3>
          <p className="section-subtitle">
            Authentic customer feedback and WhatsApp messages from happy families across Karnataka and India.
          </p>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
            <button
              className={`cat-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
              style={{ fontSize: '0.82rem', padding: '6px 16px' }}
            >
              All Reviews ({rawList.length})
            </button>
            <button
              className={`cat-tab ${filter === 'haircare' ? 'active' : ''}`}
              onClick={() => setFilter('haircare')}
              style={{ fontSize: '0.82rem', padding: '6px 16px' }}
            >
              Hair Care
            </button>
            <button
              className={`cat-tab ${filter === 'skincare' ? 'active' : ''}`}
              onClick={() => setFilter('skincare')}
              style={{ fontSize: '0.82rem', padding: '6px 16px' }}
            >
              Skin Care & Soaps
            </button>
            <button
              className={`cat-tab ${filter === 'babycare' ? 'active' : ''}`}
              onClick={() => setFilter('babycare')}
              style={{ fontSize: '0.82rem', padding: '6px 16px' }}
            >
              Baby Care
            </button>
          </div>
        </div>

        <div className="testimonials-grid">
          {filteredReviews.map((t, idx) => (
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


