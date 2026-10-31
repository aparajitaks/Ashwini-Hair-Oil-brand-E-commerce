import React from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export const ProductCard = ({ product }) => {
  const { cart, addToCart, updateQuantity, openQuickView } = useCart();
  const { t } = useLanguage();

  const cartItem = cart.find(item => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <article className="product-card" data-id={product.id}>
      <div className="card-image-box" onClick={() => openQuickView(product)}>
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="card-badge">{product.badge}</span>

        <div className="card-quick-actions">
          <button
            className="btn-quick-view"
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
          >
            Quick View
          </button>
        </div>
      </div>

      <div className="card-body">
        <div className="card-meta">
          <div className="card-rating">
            <span>★</span>
            <span>{product.rating}</span>
            <span style={{ color: 'var(--text-light)', fontWeight: 500 }}>({product.reviewsCount})</span>
          </div>
          <span className="card-net-qty">{product.netQuantity}</span>
        </div>

        <h4 className="card-title" onClick={() => openQuickView(product)}>
          {product.name}
        </h4>
        <p className="card-tagline">{product.tagline}</p>

        <div className="card-footer">
          <div className="card-pricing">
            <span className="card-price">₹{product.price}</span>
            <span className="card-mrp">₹{product.originalPrice}</span>
          </div>

          {quantity === 0 ? (
            <button
              className="btn-add-cart"
              onClick={() => addToCart(product, 1)}
            >
              <span>{t('addToBasket')}</span>
            </button>
          ) : (
            <div className="card-qty-stepper">
              <button
                className="card-qty-btn"
                onClick={() => updateQuantity(product.id, -1)}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="card-qty-count">{quantity}</span>
              <button
                className="card-qty-btn"
                onClick={() => updateQuantity(product.id, 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

