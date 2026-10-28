import React, { useState } from 'react';

export const FAQSection = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (idx) => {
    setActiveIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Help & Answers</span>
          <h3 className="section-title">Frequently Asked Questions</h3>
          <p className="section-subtitle">
            Got questions? We're here to help you choose the best routine.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${activeIndex === idx ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggle(idx)}>
                <span>{faq.question}</span>
                <span className="faq-arrow">▼</span>
              </button>
              {activeIndex === idx && (
                <div className="faq-answer" style={{ display: 'block' }}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

