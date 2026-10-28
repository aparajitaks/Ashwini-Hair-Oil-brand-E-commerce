import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const ProductModal = () => {
  const { quickViewProduct, closeQuickView, addToCart, buildWhatsAppOrderUrl } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const handleAddAndClose = () => {
    addToCart(quickViewProduct, quantity);
    closeQuickView();
  };

  const handleDirectWhatsAppBuy = () => {
    addToCart(quickViewProduct, quantity);
    closeQuickView();
    window.open(buildWhatsAppOrderUrl(), '_blank');
  };

  return (
    <div className="modal-overlay open" onClick={closeQuickView}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeQuickView} aria-label="Close Details">
          ✕
        </button>

        <div className="modal-grid">
          <div className="modal-gallery">
            <img src={quickViewProduct.image} alt={quickViewProduct.name} className="modal-main-img" />
            <div className="modal-badges-row">
              {quickViewProduct.features?.map((f, i) => (
                <span key={i} className="modal-chip">{f}</span>
              ))}
            </div>
          </div>

          <div className="modal-content-details">
            <span className="modal-subtitle">{quickViewProduct.subtitle}</span>
            <h3 className="modal-title">{quickViewProduct.name}</h3>

            <div className="modal-rating-row">
              <span style={{ color: '#b07d1a', fontWeight: 700 }}>★ {quickViewProduct.rating}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                ({quickViewProduct.reviewsCount} verified reviews)
              </span>
              <span style={{ marginLeft: 'auto', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-light)' }}>
                {quickViewProduct.netQuantity}
              </span>
            </div>

            <div className="modal-price-box">
              <span className="price">₹{quickViewProduct.price}</span>
              <span className="mrp">₹{quickViewProduct.originalPrice}</span>
            </div>

            <p className="modal-desc">{quickViewProduct.description}</p>

            <div className="modal-ingredients-heading">🌿 Key Ayurvedic Actives:</div>
            <div className="modal-ingredients-list">
              {quickViewProduct.keyIngredients?.map((ing, i) => (
                <div key={i} className="ingredient-pill">
                  <strong>{ing.name}:</strong> {ing.role}
                </div>
              ))}
            </div>

            <div className="modal-ingredients-heading" style={{ marginTop: '10px' }}>✨ Proven Benefits:</div>
            <ul style={{ listStyle: 'none', fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              {quickViewProduct.benefits?.map((b, i) => (
                <li key={i} style={{ marginBottom: '4px' }}>✓ {b}</li>
              ))}
            </ul>

            <div className="modal-how-to-use">
              <strong>How to Use:</strong> {quickViewProduct.howToUse}
            </div>

            <div className="modal-actions">
              <div className="modal-qty-control">
                <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
              </div>

              <button className="modal-btn-cart" onClick={handleAddAndClose}>
                <span>Add to Basket</span>
              </button>

              <button className="modal-btn-whatsapp" onClick={handleDirectWhatsAppBuy} title="Buy directly on WhatsApp">
                <span>💬</span>
                <span>WhatsApp Buy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

