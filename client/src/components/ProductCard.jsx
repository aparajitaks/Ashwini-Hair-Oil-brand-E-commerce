import React from 'react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { cart, addToCart, openQuickView } = useCart();

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const inCart = cart.some(item => item.product.id === product.id);

  return (
    <article className="product-card" data-id={product.id}>
      <div className="card-image-box" onClick={() => openQuickView(product)}>
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="card-badge">{product.badge}</span>
        <span className="card-discount-tag">{discountPercent}% OFF</span>

        <div className="card-quick-actions">
          <button
            className="btn-quick-view"
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
          >
            <span>👁️</span> Quick View
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

          <button
            className={`btn-add-cart ${inCart ? 'added' : ''}`}
            onClick={() => addToCart(product, 1)}
          >
            <span>{inCart ? '✓ Added' : '+ Add'}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

