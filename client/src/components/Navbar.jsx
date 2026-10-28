import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const Navbar = ({ activeCategory, onSelectCategory, onFocusSearch }) => {
  const { totals, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'all', label: 'Shop All' },
    { id: 'haircare', label: 'Hair Care' },
    { id: 'skincare', label: 'Skin Care' },
    { id: 'babycare', label: 'Baby Care' },
    { id: 'combos', label: 'Combo' }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container">
          🌿 Festive Herbal Offer: Use coupon <strong>AYURVEDA10</strong> for 10% OFF | Free Express Shipping on Pack of 3 Deals & Orders over ₹499!
        </div>
      </div>

      {/* Main Header */}
      <header className="header" id="mainHeader">
        <div className="container header-inner">
          <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); onSelectCategory('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/logo.jpg" alt="Ashwini Herbal Logo" className="brand-logo-img" />
            <div className="brand-text">
              <h1>Ashwini</h1>
              <span>Herbal • Pure You</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav>
            <ul className="nav-links">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    className={`nav-link ${activeCategory === item.id ? 'active' : ''}`}
                    onClick={() => {
                      onSelectCategory(item.id);
                      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <div className="search-trigger" onClick={onFocusSearch}>
              <span>🔍</span>
              <span>Search herbs...</span>
              <kbd>/</kbd>
            </div>

            <a
              href="https://wa.me/919845012345?text=Hello%20Ashwini%20Herbal,%20I%20would%20like%20to%20know%20more%20about%20your%20Ayurvedic%20products!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-header"
              title="Chat on WhatsApp"
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </a>

            <button className="cart-btn" onClick={openCart} aria-label="Open Shopping Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="cart-badge">{totals.totalItems}</span>
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{ background: 'var(--bg-card)', padding: '16px 24px', borderBottom: '1px solid var(--border-light)' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    style={{ textAlign: 'left', width: '100%', padding: '6px 0', fontWeight: 600, color: 'var(--primary-deep)' }}
                    onClick={() => {
                      onSelectCategory(item.id);
                      setMobileMenuOpen(false);
                      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  style={{ textAlign: 'left', width: '100%', padding: '6px 0', fontWeight: 600, color: 'var(--accent-gold-dark)' }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('quizSection')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  ✨ Take Ayurvedic Quiz
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

