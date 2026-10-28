import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const RoutineAdvisor = ({ allProducts }) => {
  const { addToCart, openCart } = useCart();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState(null);
  const [skinType, setSkinType] = useState(null);

  const handleGoalSelect = (selectedGoal) => {
    setGoal(selectedGoal);
    setStep(2);
  };

  const handleTypeSelect = (selectedType) => {
    setSkinType(selectedType);
    setStep(3);
  };

  const getRecommendation = () => {
    let recId = 'day-night-cream-duo';
    let explanation = 'Your dual action 24hr protocol with Licorice and Chamomile to clear hyperpigmentation and sun spots.';

    if (goal === 'pigmentation') {
      recId = 'day-night-cream-duo';
      explanation = 'Your dual action 24hr protocol with Licorice and Chamomile to clear hyperpigmentation and sun spots.';
    } else if (goal === 'acne') {
      recId = 'charcoal-soap-pack-of-3';
      explanation = 'Deep activated charcoal pore detoxification to clear stubborn blemishes and regulate daily sebum.';
    } else if (goal === 'hairfall') {
      recId = 'herbal-hair-care-collection';
      explanation = 'Target dormant follicles with 22 Ayurvedic herbs, Rosemary, and pure Amla-Reetha cleansing.';
    } else if (goal === 'babycare') {
      recId = 'baby-care-complete-trio';
      explanation = '100% pure cold-pressed sweet almond and Kesari saffron bath regimen safe from newborn stage.';
    }

    const product = allProducts?.find(p => p.id === recId) || allProducts?.[0];
    return { product, explanation };
  };

  const { product: recProduct, explanation } = getRecommendation();

  const handleAddAndOpenCart = () => {
    if (recProduct) {
      addToCart(recProduct, 1);
      openCart();
    }
  };

  return (
    <section className="quiz-section" id="quizSection">
      <div className="container">
        <div className="quiz-card">
          <div className="quiz-header">
            <span className="section-tag">Ayurvedic Regimen Advisor</span>
            <h3>Find Your Perfect Herbal Regimen</h3>
            <p>Answer 2 quick questions to discover tailored botanicals for your skin & hair.</p>
          </div>

          <div className="quiz-steps-nav">
            <div className={`quiz-step-indicator ${step === 1 ? 'active' : ''}`}>
              <span className="quiz-step-num">1</span>
              <span>Primary Goal</span>
            </div>
            <div className={`quiz-step-indicator ${step === 2 ? 'active' : ''}`}>
              <span className="quiz-step-num">2</span>
              <span>Skin / Hair Type</span>
            </div>
            <div className={`quiz-step-indicator ${step === 3 ? 'active' : ''}`}>
              <span className="quiz-step-num">3</span>
              <span>Your Regimen</span>
            </div>
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="quiz-step-content">
              <div className="quiz-options-grid">
                <div className="quiz-option-btn" onClick={() => handleGoalSelect('pigmentation')}>
                  <div className="quiz-option-icon">✨</div>
                  <div className="quiz-option-title">Fade Pigmentation & Tan</div>
                  <div className="quiz-option-desc">Clear dark spots, melasma, and sun damage</div>
                </div>
                <div className="quiz-option-btn" onClick={() => handleGoalSelect('acne')}>
                  <div className="quiz-option-icon">🍃</div>
                  <div className="quiz-option-title">Control Acne & Oiliness</div>
                  <div className="quiz-option-desc">Purify pores with Neem, Charcoal & Tulsi</div>
                </div>
                <div className="quiz-option-btn" onClick={() => handleGoalSelect('hairfall')}>
                  <div className="quiz-option-icon">💆‍♀️</div>
                  <div className="quiz-option-title">Stop Hair Fall & Dandruff</div>
                  <div className="quiz-option-desc">Boost growth with Rosemary & 22 Herbs</div>
                </div>
                <div className="quiz-option-btn" onClick={() => handleGoalSelect('babycare')}>
                  <div className="quiz-option-icon">👶</div>
                  <div className="quiz-option-title">Gentle Baby Care</div>
                  <div className="quiz-option-desc">Tear-free almond massage & bath ritual</div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="quiz-step-content">
              <div className="quiz-options-grid">
                <div className="quiz-option-btn" onClick={() => handleTypeSelect('oily')}>
                  <div className="quiz-option-icon">💧</div>
                  <div className="quiz-option-title">Oily / Combination</div>
                  <div className="quiz-option-desc">Greasy T-zone, prone to shine & breakouts</div>
                </div>
                <div className="quiz-option-btn" onClick={() => handleTypeSelect('dry')}>
                  <div className="quiz-option-icon">🍂</div>
                  <div className="quiz-option-title">Dry / Dehydrated</div>
                  <div className="quiz-option-desc">Flaky, tight sensation after washing</div>
                </div>
                <div className="quiz-option-btn" onClick={() => handleTypeSelect('sensitive')}>
                  <div className="quiz-option-icon">🌸</div>
                  <div className="quiz-option-title">Sensitive / Normal</div>
                  <div className="quiz-option-desc">Prone to redness or looking for pure maintenance</div>
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button
                  className="btn-secondary"
                  onClick={() => setStep(1)}
                  style={{ color: 'var(--primary-deep)', borderColor: 'var(--border-light)' }}
                >
                  ← Back
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && recProduct && (
            <div className="quiz-step-content">
              <div className="quiz-result-box">
                <img src={recProduct.image} alt={recProduct.name} className="quiz-result-img" />
                <div className="quiz-result-details">
                  <h4>✨ Recommended Regimen: {recProduct.name}</h4>
                  <p>{explanation}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-deep)' }}>
                      ₹{recProduct.price}
                    </span>
                    <span style={{ textDecoration: 'line-through', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                      ₹{recProduct.originalPrice}
                    </span>
                    <button className="btn-primary" onClick={handleAddAndOpenCart}>
                      <span>Add Regimen to Basket</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setGoal(null);
                    setSkinType(null);
                    setStep(1);
                  }}
                  style={{ color: 'var(--primary-deep)', borderColor: 'var(--border-light)' }}
                >
                  ↺ Take Quiz Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

