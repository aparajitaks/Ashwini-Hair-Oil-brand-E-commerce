import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    appliedCoupon,
    applyCouponCode,
    removeCoupon,
    totals,
    openCheckout,
    buildWhatsAppOrderUrl
  } = useCart();
  const { t } = useLanguage();

  const [couponInput, setCouponInput] = useState('');

  const threshold = 499;
  const progressPercent = totals.subtotal === 0 ? 0 : totals.isFreeShipping ? 100 : Math.min(100, Math.round((totals.subtotal / threshold) * 100));
  const remainingForFree = Math.max(0, threshold - totals.subtotal);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    applyCouponCode(couponInput);
    setCouponInput('');
  };

  const handleWhatsAppOrder = () => {
    window.open(buildWhatsAppOrderUrl(), '_blank');
  };

  return (
    <div className={`drawer-overlay ${isCartOpen ? 'open' : ''}`} onClick={closeCart}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="drawer-header">
          <h3>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </span>
            <span>{t('cartTitle')} ({totals.totalItems})</span>
          </h3>
          <button className="drawer-close" onClick={closeCart} aria-label="Close Cart">
            ✕
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="shipping-progress-container">
          <div className="shipping-progress-text">
            <span>
              {totals.subtotal === 0
                ? `Add ₹${threshold} for FREE Shipping`
                : totals.isFreeShipping
                  ? `You've unlocked 100% FREE Express Shipping!`
                  : `Add ₹${remainingForFree} more for FREE Express Shipping`}
            </span>
            <span>{progressPercent}%</span>
          </div>
          <div className="shipping-bar-bg">
            <div className="shipping-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        {/* Cart Items Body */}
        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="empty-cart-view">
              <div className="empty-cart-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <h4>Your basket is empty</h4>
              <p>Explore our handcrafted soaps and herbal hair oils to fill it up.</p>
              <button className="btn-primary" onClick={closeCart}>
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map(({ product, quantity }) => (
              <div key={product.id} className="cart-item-row">
                <img src={product.image} alt={product.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h5>{product.name}</h5>
                  <div className="cart-item-qty-tag">{product.netQuantity}</div>
                  <div className="cart-item-stepper">
                    <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                  </div>
                </div>
                <div className="cart-item-price-col">
                  <span className="cart-item-price">₹{product.price * quantity}</span>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(product.id)}
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="drawer-footer">
            {/* Coupon Box */}
            <form className="coupon-box" onSubmit={handleApplyCoupon}>
              <input
                type="text"
                className="coupon-input"
                placeholder="Promo code (e.g. AYURVEDA10)"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
              />
              <button type="submit" className="btn-apply-coupon">
                Apply
              </button>
            </form>

            {appliedCoupon && (
              <div>
                <span className="applied-coupon-pill">
                  <span>{appliedCoupon.code} ({appliedCoupon.desc})</span>
                  <button
                    onClick={removeCoupon}
                    style={{ fontWeight: 700, color: 'inherit', marginLeft: '4px' }}
                  >
                    ✕
                  </button>
                </span>
              </div>
            )}

            {/* Price breakdown */}
            <div className="price-breakdown">
              <div className="breakdown-row">
                <span>Subtotal</span>
                <span>₹{totals.subtotal}</span>
              </div>
              {totals.discount > 0 && (
                <div className="breakdown-row" style={{ color: 'var(--success)' }}>
                  <span>Coupon Discount</span>
                  <span>-₹{totals.discount}</span>
                </div>
              )}
              <div className="breakdown-row">
                <span>Express Shipping</span>
                <span>{totals.shippingFee === 0 ? 'FREE' : `₹${totals.shippingFee}`}</span>
              </div>
              <div className="breakdown-row total">
                <span>Total Amount</span>
                <span>₹{totals.grandTotal}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="checkout-btn-group">
              <button className="btn-whatsapp-order" onClick={handleWhatsAppOrder}>
                <img src="/whatsapp.png" alt="WhatsApp" className="whatsapp-btn-icon" />
                <span>{t('orderWhatsApp')}</span>
              </button>
              <button className="btn-regular-checkout" onClick={openCheckout}>
                <span>{t('proceedCheckout')}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

