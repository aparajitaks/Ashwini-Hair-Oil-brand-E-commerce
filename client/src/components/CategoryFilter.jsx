import React from 'react';

export const CategoryFilter = ({
  categories,
  concerns,
  activeCategory,
  onSelectCategory,
  activeConcern,
  onSelectConcern,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  searchInputRef
}) => {
  return (
    <div className="filter-wrapper">
      {/* Category Tabs */}
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

      {/* Filter Sub-bar */}
      <div className="filter-sub-bar">
        <div className="concern-filters">
          <span className="concern-label">Target Concern:</span>
          {concerns.map(con => (
            <button
              key={con.id}
              className={`concern-chip ${con.id === activeConcern ? 'active' : ''}`}
              onClick={() => onSelectConcern(con.id)}
            >
              {con.name}
            </button>
          ))}
        </div>

        <div className="filter-controls-right">
          <div className="search-input-wrapper">
            <span className="search-icon-inside">🔍</span>
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Search herbs, aloevera, hair..."
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

