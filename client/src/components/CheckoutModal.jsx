import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
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
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    address: '',
    city: '',
    state: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('RAZORPAY');
  const [submitting, setSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRazorpayPayment = async (orderPayload) => {
    try {
      const config = await api.getPaymentConfig();
      if (!config.isConfigured || !config.keyId) {
        showToast('⚠️ Razorpay credentials pending in server/.env. Falling back to COD/WhatsApp order.');
        const orderResult = await api.createOrder({ ...orderPayload, paymentMethod: 'COD' });
        setConfirmedOrder(orderResult);
        clearCart();
        return;
      }

      if (!window.Razorpay) {
        throw new Error('Razorpay SDK failed to load. Please check your internet connection.');
      }

      const rzpOrderData = await api.createRazorpayOrder(
        totals.grandTotal,
        `rcpt_${Date.now()}`,
        { customerName: formData.name, customerPhone: formData.phone }
      );

      const options = {
        key: config.keyId,
        amount: rzpOrderData.order.amount,
        currency: 'INR',
        name: 'Ashwini Herbal',
        description: 'Pure Ayurvedic & Herbal Wellness Order',
        image: '/logo.jpg',
        order_id: rzpOrderData.order.id,
        prefill: {
          name: formData.name.trim(),
          contact: formData.phone.trim()
        },
        theme: {
          color: '#194833'
        },
        handler: async function (response) {
          try {
            setSubmitting(true);
            const verifyRes = await api.verifyRazorpayPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderDetails: {
                ...orderPayload,
                pricing: totals
              }
            });

            setConfirmedOrder({
              orderId: verifyRes.orderId,
              customer: orderPayload.customer,
              pricing: totals,
              paymentMethod: 'ONLINE_RAZORPAY',
              paymentStatus: 'PAID',
              transactionId: response.razorpay_payment_id
            });

            clearCart();
            showToast('Payment successful! 🌿 Order confirmed!');
          } catch (verifyErr) {
            showToast(verifyErr.message || 'Payment verification failed');
          } finally {
            setSubmitting(false);
          }
        },
        modal: {
          ondismiss: function () {
            setSubmitting(false);
            showToast('Payment window closed');
          }
        }
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.on('payment.failed', function (resp) {
        setSubmitting(false);
        showToast(`Payment failed: ${resp.error.description}`);
      });

      razorpayInstance.open();
    } catch (err) {
      setSubmitting(false);
      showToast(err.message || 'Could not initiate Razorpay payment');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setSubmitting(true);
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

    if (paymentMethod === 'RAZORPAY') {
      await handleRazorpayPayment(payload);
    } else {
      try {
        const orderResult = await api.createOrder(payload);
        setConfirmedOrder(orderResult);
        clearCart();
        showToast('Order confirmed! 🌿 Thank you!');
      } catch (err) {
        showToast(err.message || 'Error creating order. Please try again.');
      } finally {
        setSubmitting(false);
      }
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
            <h3 className="checkout-form-title">{t('checkoutTitle')}</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              {t('checkoutSub')}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group full">
                  <label htmlFor="name">{t('fullName')}</label>
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
                  <label htmlFor="phone">{t('phone')}</label>
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
                  <label htmlFor="pincode">{t('pincode')}</label>
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
                  <label htmlFor="address">{t('address')}</label>
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
                  <label htmlFor="city">{t('city')}</label>
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
                  <label htmlFor="state">{t('state')}</label>
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
                  {t('selectPayment')}
                </label>
                <div className="payment-method-selector">
                  <div
                    className={`payment-method-card ${paymentMethod === 'RAZORPAY' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('RAZORPAY')}
                  >
                    <span>💳</span>
                    <div>
                      <div>{t('razorpayOnline')}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t('razorpaySub')}</div>
                    </div>
                  </div>
                  <div
                    className={`payment-method-card ${paymentMethod === 'COD' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('COD')}
                  >
                    <span>💵</span>
                    <div>
                      <div>{t('cod')}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t('codSub')}</div>
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
                  <span>{submitting ? 'Confirming...' : `${t('confirmAndPlace')} (₹${totals.grandTotal})`}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="order-success-box">
            <div className="success-icon">✓</div>
            <h3>{t('orderSuccessTitle')}</h3>
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

