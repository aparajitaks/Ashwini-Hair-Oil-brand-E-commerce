import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../api/client';

const CartContext = createContext(null);

const WHATSAPP_NUMBER = '919845012345';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('ashwini_mern_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Sync cart with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ashwini_mern_cart', JSON.stringify(cart));
    } catch (err) {
      console.error('Failed to save cart to localStorage', err);
    }
  }, [cart]);

  // Toast Notification System
  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3200);
  };

  // Cart operations
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const idx = prev.findIndex(item => item.product.id === product.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
        return next;
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to basket 🌿`);
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from basket');
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Financial Calculations
  const calculateTotals = () => {
    let subtotal = 0;
    let totalItems = 0;
    let hasCombo = false;

    cart.forEach(({ product, quantity }) => {
      subtotal += product.price * quantity;
      totalItems += quantity;
      if (product.badge && (
        product.badge.includes('Pack of 3') ||
        product.badge.includes('Bundle') ||
        product.badge.includes('Trio') ||
        product.badge.includes('Kit')
      )) {
        hasCombo = true;
      }
    });

    let discount = 0;
    if (appliedCoupon) {
      discount = appliedCoupon.discountAmount || 0;
    }

    const isFreeShipping = (subtotal >= 499) || hasCombo || (subtotal === 0);
    const shippingFee = (subtotal === 0 || isFreeShipping) ? 0 : 60;
    const grandTotal = Math.max(0, subtotal - discount + shippingFee);

    return { subtotal, totalItems, discount, shippingFee, grandTotal, isFreeShipping };
  };

  const totals = calculateTotals();

  // Coupon handling
  const applyCouponCode = async (code) => {
    if (!code || !code.trim()) return;
    try {
      const couponData = await api.applyCoupon(code.trim(), totals.subtotal);
      setAppliedCoupon(couponData);
      showToast(`Coupon applied: ${couponData.desc} 🎉`);
    } catch (err) {
      showToast(err.message || 'Invalid coupon code');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed');
  };

  // WhatsApp Order Link generator
  const buildWhatsAppOrderUrl = (customer = null) => {
    let msg = `*🌿 NEW ORDER - ASHWINI HERBAL*\n`;
    msg += `---------------------------------\n`;

    cart.forEach(({ product, quantity }, idx) => {
      msg += `${idx + 1}. *${product.name}* (${product.netQuantity})\n   Qty: ${quantity} x ₹${product.price} = ₹${quantity * product.price}\n`;
    });

    msg += `---------------------------------\n`;
    msg += `*Subtotal:* ₹${totals.subtotal}\n`;
    if (totals.discount > 0) {
      msg += `*Discount (${appliedCoupon.code}):* -₹${totals.discount}\n`;
    }
    msg += `*Delivery:* ${totals.shippingFee === 0 ? 'FREE' : '₹' + totals.shippingFee}\n`;
    msg += `*TOTAL AMOUNT:* ₹${totals.grandTotal}\n`;
    msg += `---------------------------------\n`;

    if (customer) {
      msg += `*Customer:* ${customer.name}\n`;
      msg += `*Phone:* ${customer.phone}\n`;
      msg += `*Address:* ${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}\n`;
      msg += `*Payment:* ${customer.paymentMethod || 'COD'}\n`;
    } else {
      msg += `*Payment Preference:* Cash on Delivery / UPI\n`;
      msg += `(Please confirm my order and share delivery schedule)\n`;
    }

    msg += `\nThank you! 🙏`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      appliedCoupon,
      applyCouponCode,
      removeCoupon,
      totals,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      quickViewProduct,
      openQuickView: (product) => setQuickViewProduct(product),
      closeQuickView: () => setQuickViewProduct(null),
      isCheckoutOpen,
      openCheckout: () => {
        setIsCartOpen(false);
        setIsCheckoutOpen(true);
      },
      closeCheckout: () => setIsCheckoutOpen(false),
      toasts,
      showToast,
      buildWhatsAppOrderUrl
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

