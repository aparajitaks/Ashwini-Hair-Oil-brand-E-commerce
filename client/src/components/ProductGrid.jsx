import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products, onResetFilters, loading }) => {
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
        <div style={{ display: 'inline-flex', marginBottom: '12px', color: 'var(--primary-deep)' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
          </svg>
        </div>
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

