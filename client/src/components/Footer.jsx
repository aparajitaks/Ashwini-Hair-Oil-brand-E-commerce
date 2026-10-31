import React from 'react';

export const Footer = ({ onSelectCategory }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Ashwini Herbal</h3>
            <span>Pure Herbal • Pure You</span>
            <p>
              Handcrafted Ayurvedic personal care products formulated with pure botanicals and sacred South Indian herbal wisdom. Delivered fresh to your home.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore Shop</h4>
            <ul className="footer-links">
              <li>
                <a href="#catalog" onClick={() => onSelectCategory('soaps')}>
                  Handmade Soaps (₹179+)
                </a>
              </li>
              <li>
                <a href="#catalog" onClick={() => onSelectCategory('skincare')}>
                  Kumkumadi Thailam
                </a>
              </li>
              <li>
                <a href="#catalog" onClick={() => onSelectCategory('haircare')}>
                  Rosemary 22 Herbs Oil
                </a>
              </li>
              <li>
                <a href="#catalog" onClick={() => onSelectCategory('babycare')}>
                  Pure Baby Massage Oil
                </a>
              </li>
              <li>
                <a href="#catalog" onClick={() => onSelectCategory('combos')}>
                  Pack of 3 Soap Combos (₹449)
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Customer Care</h4>
            <ul className="footer-links">
              <li>
                <a href="#aboutUs">About Ashwini Herbal</a>
              </li>
              <li>
                <a href="#offersBanner">Festive Deals & Combos</a>
              </li>
              <li>
                <a href="#reviews">Verified Reviews</a>
              </li>
              <li>
                <a href="#faq">Shipping & Returns Policy</a>
              </li>
              <li>
                <a href="https://wa.me/919845012345" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <img src="/whatsapp.png" alt="WhatsApp" className="whatsapp-footer-icon" />
                  Direct WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Order & Support</h4>
            <p>Ashwini Herbal Workshop, Bengaluru, Karnataka, India</p>
            <p>+91 98450 12345 (Mon - Sat, 9am - 7pm)</p>
            <p>WhatsApp Order Hotline: +91 98450 12345</p>
            <p>care@ashwiniherbal.com</p>
            <div style={{ marginTop: '14px', fontSize: '0.8rem', color: '#a2b7ac' }}>
              Accepted: UPI • GPay • PhonePe • COD • Cards
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Ashwini Herbal. All rights reserved.</div>
          <div>Handcrafted with care in India • Safe, Natural, Chemical-Free</div>
        </div>
      </div>
    </footer>
  );
};

