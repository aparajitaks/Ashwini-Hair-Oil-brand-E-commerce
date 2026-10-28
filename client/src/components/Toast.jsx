import React from 'react';
import { useCart } from '../context/CartContext';

export const Toast = () => {
  const { toasts } = useCart();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className="toast show">
          <span>🌿</span>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
};

