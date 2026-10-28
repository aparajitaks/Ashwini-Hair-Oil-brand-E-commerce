import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products, onResetFilters, loading }) => {
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌿</div>
        <h4>Loading handcrafted Ayurvedic remedies...</h4>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="empty-catalog">
        <h4>No Ayurvedic remedies found</h4>
        <p>Try clearing your search or choosing a different skin/hair category.</p>
        <button className="btn-primary" onClick={onResetFilters}>
          Reset All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="product-grid" id="productGrid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

