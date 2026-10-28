import React from 'react';
import { useCart } from '../context/CartContext';

export const MobileCartBar = () => {
  const { totals, openCart } = useCart();

  if (totals.totalItems === 0) return null;

  return (
    <div className="mobile-cart-bar" style={{ display: 'flex' }}>
      <div>
        <div style={{ fontSize: '0.8rem', color: '#a9c5b6' }}>
          <span>{totals.totalItems}</span> items in Basket
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffde8a' }}>
          ₹{totals.grandTotal}
        </div>
      </div>
      <button
        className="btn-primary"
        onClick={openCart}
        style={{ padding: '10px 20px', fontSize: '0.88rem' }}
      >
        <span>View Cart</span>
        <span>→</span>
      </button>
    </div>
  );
};

