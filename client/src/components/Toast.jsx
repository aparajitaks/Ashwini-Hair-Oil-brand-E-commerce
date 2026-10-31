import React from 'react';
import { useCart } from '../context/CartContext';

export const Toast = () => {
  const { toasts } = useCart();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className="toast show">
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
};

