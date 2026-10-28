import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = ({ activeCategory, onSelectCategory, onFocusSearch }) => {
  const { totals, openCart } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'all', label: t('navAll') },
    { id: 'haircare', label: t('navHair') },
    { id: 'skincare', label: t('navSkin') },
    { id: 'babycare', label: t('navBaby') },
    { id: 'combos', label: t('navCombo') }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container">
          {t('announcement')}
        </div>
      </div>

      {/* Main Header */}
      <header className="header" id="mainHeader">
        <div className="container header-inner">
          <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); onSelectCategory('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/logo.jpg" alt="Ashwini Herbal Logo" className="brand-logo-img" />
            <div className="brand-text">
              <h1>Ashwini</h1>
              <span>{t('brandTag')}</span>
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
            {/* Language Selection: English / Kannada */}
            <div className="language-selector" title="Choose Language / ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ">
              <button
                type="button"
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
                aria-label="English"
              >
                EN
              </button>
              <span className="lang-divider">|</span>
              <button
                type="button"
                className={`lang-btn ${language === 'kn' ? 'active' : ''}`}
                onClick={() => setLanguage('kn')}
                aria-label="ಕನ್ನಡ"
              >
                ಕನ್ನಡ
              </button>
            </div>

            <a
              href="https://wa.me/919845012345?text=Hello%20Ashwini%20Herbal,%20I%20would%20like%20to%20know%20more%20about%20your%20Ayurvedic%20products!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-header"
              title="Chat on WhatsApp"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="whatsapp-nav-icon" />
              <span>{t('whatsapp')}</span>
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>🌐 Language / ಭಾಷೆ:</span>
              <div className="language-selector">
                <button
                  type="button"
                  className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                  onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }}
                >
                  English
                </button>
                <span className="lang-divider">|</span>
                <button
                  type="button"
                  className={`lang-btn ${language === 'kn' ? 'active' : ''}`}
                  onClick={() => { setLanguage('kn'); setMobileMenuOpen(false); }}
                >
                  ಕನ್ನಡ
                </button>
              </div>
            </div>

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
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

