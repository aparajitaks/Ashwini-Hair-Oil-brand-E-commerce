import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TrustBar = () => {
  const { t } = useLanguage();

  return (
    <section className="trust-bar">
      <div className="container trust-grid">
        <div className="trust-item">
          <div className="trust-icon">🌱</div>
          <div>
            <h4>{t('t1Title')}</h4>
            <p>{t('t1Sub')}</p>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon">⚗️</div>
          <div>
            <h4>{t('t2Title')}</h4>
            <p>{t('t2Sub')}</p>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon">🧪</div>
          <div>
            <h4>{t('t3Title')}</h4>
            <p>{t('t3Sub')}</p>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon">📦</div>
          <div>
            <h4>{t('t4Title')}</h4>
            <p>{t('t4Sub')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

