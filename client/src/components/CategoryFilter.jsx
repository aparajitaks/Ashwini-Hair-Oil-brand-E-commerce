import React from 'react';

export const CategoryFilter = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  searchInputRef
}) => {
  return (
    <div className="filter-wrapper">
      {/* Category Tabs: Exactly matching the navbar links */}
      <div className="category-tabs-wrapper">
        <div className="category-tabs" id="categoryTabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`cat-tab ${cat.id === activeCategory ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filter Controls: Search & Sort only (Target Concern removed) */}
      <div className="filter-sub-bar" style={{ justifyContent: 'flex-end' }}>
        <div className="filter-controls-right" style={{ width: '100%', justifyContent: 'space-between' }}>
          <div className="search-input-wrapper" style={{ flexGrow: 1, maxWidth: '400px' }}>
            <span className="search-icon-inside">🔍</span>
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Search herbs, aloevera, hair, saffron..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              autoComplete="off"
            />
          </div>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort products"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="discount">Biggest Savings</option>
          </select>
        </div>
      </div>
    </div>
  );
};
