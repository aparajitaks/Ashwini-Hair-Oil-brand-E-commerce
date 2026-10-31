import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TrustBar = () => {
  const { t } = useLanguage();

  return (
    <section className="trust-bar">
      <div className="container trust-grid">
        <div className="trust-item">
          <div className="trust-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>
          </div>
          <div>
            <h4>{t('t1Title')}</h4>
            <p>{t('t1Sub')}</p>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <div>
            <h4>{t('t2Title')}</h4>
            <p>{t('t2Sub')}</p>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12l4 6-10 13L2 9Z"></path>
              <path d="M11 3 8 9l4 13 4-13-3-6"></path>
              <path d="M2 9h20"></path>
            </svg>
          </div>
          <div>
            <h4>{t('t3Title')}</h4>
            <p>{t('t3Sub')}</p>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
          <div>
            <h4>{t('t4Title')}</h4>
            <p>{t('t4Sub')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

