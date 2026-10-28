import React from 'react';

export const TrustBar = () => {
  return (
    <section className="trust-bar">
      <div className="container trust-grid">
        <div className="trust-item">
          <div className="trust-icon">🌱</div>
          <div>
            <h4>100% Herbal & Pure</h4>
            <p>Hand-selected medicinal botanicals</p>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon">⚗️</div>
          <div>
            <h4>Small Batch Handcrafted</h4>
            <p>Preserving natural vital phytonutrients</p>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon">🧪</div>
          <div>
            <h4>Zero Harmful Chemicals</h4>
            <p>No parabens, SLS, or synthetic fragrance</p>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon">📦</div>
          <div>
            <h4>Free Pan-India Delivery</h4>
            <p>On all soap bundles & combos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

