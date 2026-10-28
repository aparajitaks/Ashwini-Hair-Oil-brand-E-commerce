import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { api } from '../api/client';

export const CheckoutModal = () => {
  const {
    cart,
    isCheckoutOpen,
    closeCheckout,
    totals,
    appliedCoupon,
    clearCart,
    showToast
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    address: '',
    city: '',
    state: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [submitting, setSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setSubmitting(true);
    try {
      const payload = {
        items: cart.map(item => ({
          productId: item.product.id,
          quantity: item.quantity
        })),
        customer: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          address: formData.address.trim(),
          city: formData.city.trim(),
          state: formData.state.trim(),
          pincode: formData.pincode.trim()
        },
        paymentMethod,
        couponCode: appliedCoupon ? appliedCoupon.code : null
      };

      const orderResult = await api.createOrder(payload);
      setConfirmedOrder(orderResult);
      clearCart();
      showToast('Order confirmed! 🌿 Thank you!');
    } catch (err) {
      showToast(err.message || 'Error creating order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setConfirmedOrder(null);
    closeCheckout();
  };

  return (
    <div className="modal-overlay open" onClick={handleClose}>
      <div className="modal-card checkout-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close Checkout">
          ✕
        </button>

        {!confirmedOrder ? (
          <div>
            <h3 className="checkout-form-title">Shipping & Order Details</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Enter your delivery address below to place your order via Express Backend.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group full">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="e.g. Ananya Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="e.g. 9845012345"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pincode">Pincode *</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    className="form-input"
                    placeholder="e.g. 560001"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group full">
                  <label htmlFor="address">Complete Street Address *</label>
                  <textarea
                    id="address"
                    name="address"
                    className="form-input"
                    rows="2"
                    placeholder="House/Flat No, Street, Landmark"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City / Town *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-input"
                    placeholder="e.g. Bengaluru"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="form-input"
                    placeholder="e.g. Karnataka"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Payment selector */}
              <div style={{ marginTop: '18px' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary-deep)', display: 'block', marginBottom: '8px' }}>
                  Select Payment Mode:
                </label>
                <div className="payment-method-selector">
                  <div
                    className={`payment-method-card ${paymentMethod === 'COD' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('COD')}
                  >
                    <span>💵</span>
                    <div>
                      <div>Cash on Delivery</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Pay cash/UPI at doorstep</div>
                    </div>
                  </div>
                  <div
                    className={`payment-method-card ${paymentMethod === 'UPI' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('UPI')}
                  >
                    <span>📱</span>
                    <div>
                      <div>UPI / Google Pay</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Instant zero-fee transfer</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={submitting}
                >
                  <span>{submitting ? 'Confirming...' : `Confirm & Place Order (₹${totals.grandTotal})`}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="order-success-box">
            <div className="success-icon">✓</div>
            <h3>Order Placed Successfully!</h3>
            <div className="order-id-badge">Order #{confirmedOrder.orderId}</div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Thank you for choosing Ashwini Herbal! We have saved your order in MongoDB and our specialists are packaging your herbal products.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {confirmedOrder.whatsAppUrl && (
                <a
                  href={confirmedOrder.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-order"
                >
                  <img src="/whatsapp.png" alt="WhatsApp" className="whatsapp-btn-icon" />
                  <span>Send Order Summary to WhatsApp Hotline</span>
                </a>
              )}
              <button
                className="btn-secondary"
                onClick={handleClose}
                style={{ color: 'var(--primary-deep)', borderColor: 'var(--border-light)' }}
              >
                Continue Exploring
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

