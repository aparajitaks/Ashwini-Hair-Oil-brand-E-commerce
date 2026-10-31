import React from 'react';

export const AboutSection = () => {
  return (
    <section className="about-section" id="aboutUs">
      <div className="container about-grid">
        <div className="about-text">
          <span className="section-tag">Pure Ayurvedic Craft</span>
          <h2>Honoring Traditional Wisdom, One Batch at a Time</h2>
          <p>
            At <strong>Ashwini Herbal</strong>, we believe true radiance comes directly from mother nature. We revive classical Ayurvedic recipes using slow Kshirapak extraction and cold-process saponification that keeps raw herbal nutrients active and potent.
          </p>
          <p>
            Every soap, serum, and oil is crafted in hygienic, small batches in Karnataka, free from synthetic foaming agents, artificial silicones, animal cruelty, and petrochemical parabens.
          </p>

          <div className="about-pillars">
            <div className="pillar-item">
              <h4>Wild-Harvested Herbs</h4>
              <p>Manjistha, Neem, Amla, Bhringraj, and Kashmiri saffron sourced responsibly.</p>
            </div>
            <div className="pillar-item">
              <h4>Cold-Pressed Seed Oils</h4>
              <p>Virgin almond, castor, sesame and coconut oils that nourish skin mantles.</p>
            </div>
            <div className="pillar-item">
              <h4>Tested for Efficacy</h4>
              <p>Gentle on delicate Indian skin types, proven for pigmentation and hair regrowth.</p>
            </div>
            <div className="pillar-item">
              <h4>Direct to Your Door</h4>
              <p>Fresh from our herbal workshop with express courier tracking across India.</p>
            </div>
          </div>
        </div>

        <div className="about-image-mosaic">
          <img src="/products/Ashwini Herbal Hair Care Collection.png" alt="Hair Care Collection" className="mosaic-img" />
          <img src="/products/Ashwini Manjista Herbal Face Wash Display.png" alt="Manjista Face Wash" className="mosaic-img" />
        </div>
      </div>
    </section>
  );
};

