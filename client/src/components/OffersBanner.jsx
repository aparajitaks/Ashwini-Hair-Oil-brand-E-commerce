import React from 'react';

export const OffersBanner = ({ onShopPackOf3 }) => {
  return (
    <section className="offers-callout" id="offersBanner">
      <div className="container">
        <div className="offer-banner-card">
          <div className="offer-content">
            <h3>🔥 Signature Pack of 3 Soap Offer at Just ₹449!</h3>
            <p>
              Choose from Activated Bamboo Charcoal, Coffee Tan Removal, or Baby Glowing Almond Soaps. Handmade with cold-pressed oils. Free express delivery anywhere in India.
            </p>
            <div className="offer-pills">
              <span className="offer-pill">Activated Charcoal (₹449)</span>
              <span className="offer-pill">Coffee Glow (₹449)</span>
              <span className="offer-pill">Gentle Baby Soap (₹449)</span>
              <span className="offer-pill">100% Free Shipping</span>
            </div>
          </div>
          <button className="offer-btn" onClick={onShopPackOf3}>
            <span>Shop Pack of 3 Deals</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

