import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export const Hero = ({ onExploreClick, onSelectCategory }) => {
  const { openQuickView } = useCart();
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: "rosemary-black-hair-oil",
      eyebrow: "🌿 CUSTOMIZED AYURVEDIC HAIR CARE",
      title: "Root Cause Hair Fall Solution",
      titleHighlight: "Powered by 22 Herbs",
      subtitle: "Handcrafted with pure Rosemary, Bhringraj (King of Hair), and cold-pressed seed oils to halt excessive shedding, clear dandruff, and nourish dormant roots.",
      categoryTarget: "haircare",
      ctaText: "Explore Hair Care",
      features: [
        { icon: "🌿", text: "22 Herbal Ingredients" },
        { icon: "🧪", text: "Paraben & Sulphate Free" },
        { icon: "💆‍♀️", text: "Stimulates New Growth" }
      ],
      product: {
        id: "rosemary-black-hair-oil",
        name: "Ashwini Herbal Rosemary Black Hair Oil",
        subtitle: "22 Herbal Ingredients for Strong & Healthy Black Hair",
        category: "haircare",
        concerns: ["hairfall", "dandruff", "hair-growth"],
        price: 449,
        originalPrice: 649,
        image: "/products/Gemini_Generated_Image_lg7ikqlg7ikqlg7i.png",
        rating: 4.9,
        reviewsCount: 520,
        badge: "Bestseller #1 • 200 ml",
        netQuantity: "200 ml",
        tagline: "Enriched with 22 Potent Ayurvedic Herbs & Rosemary",
        description: "Our signature hair elixir crafted through traditional slow-heat decoction (Kshirapak vidhi). Packed with 22 pure botanicals including Rosemary, Bhringraj, Amla, Fenugreek, and Curry Leaves to stimulate dormant follicles, eliminate dandruff, and promote thick, lustrous black hair.",
        keyIngredients: [
          { name: "Rosemary Essential Extract", role: "Stimulates scalp micro-circulation and hair regrowth" },
          { name: "Bhringraj (King of Herbs)", role: "Strengthens hair roots and halts excessive shedding" },
          { name: "Amla (Indian Gooseberry)", role: "Rich Vitamin C prevents premature greying and adds shine" }
        ],
        benefits: [
          "Significantly reduces hair fall and hair breakage",
          "Stimulates baby hair growth along hairline and crown"
        ],
        howToUse: "Part hair into sections. Apply oil generously directly onto scalp using fingertips. Gently massage scalp for 10 minutes. Leave overnight.",
        features: ["22 Herbal Ingredients", "100% Pure & Organic Formula", "Mineral Oil Free"]
      }
    },
    {
      id: "kumkumadi-thailam",
      eyebrow: "✨ SACRED AYURVEDIC SKINCARE",
      title: "Pure Kashmir Saffron & Sandalwood",
      titleHighlight: "Face Glowing Elixir",
      subtitle: "Authentic classical Kumkumadi Thailam infused with Goat Milk, Kashmiri Saffron, and pure Sandalwood to fade stubborn dark spots, melasma, and restore timeless golden glow.",
      categoryTarget: "skincare",
      ctaText: "Explore Skin Care",
      features: [
        { icon: "✨", text: "100% Pure Kashmir Saffron" },
        { icon: "🌸", text: "Fades Dark Spots & Tan" },
        { icon: "💧", text: "Dermatologically Tested" }
      ],
      product: {
        id: "kumkumadi-thailam",
        name: "Ashwini Herbal Kumkumadi Thailam",
        subtitle: "Ayurvedic Face Glowing Oil for Radiant Skin",
        category: "skincare",
        concerns: ["pigmentation", "glowing", "anti-aging"],
        price: 599,
        originalPrice: 899,
        image: "/products/Kumkumadi Thailam Ayurvedic Glow Oil.png",
        rating: 4.9,
        reviewsCount: 312,
        badge: "Ayurvedic Classic • 30 ml",
        netQuantity: "30 ml",
        tagline: "Natural Skin Brightening & Dark Spot Reduction",
        description: "An authentic classical Ayurvedic formulation crafted with pure Kashmir Saffron, Goat Milk, and Sandalwood. This sacred facial oil deeply nourishes, visibly fades stubborn pigmentation and dark spots, and restores a timeless golden radiance to dull, fatigued skin.",
        keyIngredients: [
          { name: "Kashmiri Keshari (Saffron)", role: "Brightens complexion & evens skin tone" },
          { name: "Goat Milk", role: "Deeply hydrates & enriches skin with natural lactic acid" },
          { name: "Sandalwood (Chandan)", role: "Soothes inflammation & calms redness" }
        ],
        benefits: [
          "Visibly fades dark spots, blemishes & hyperpigmentation",
          "Gives soft, glowing, radiant complexion within weeks"
        ],
        howToUse: "Take 3-4 golden drops on your palm, gently dab across face and neck, and massage in upward circular motions before bedtime.",
        features: ["100% Natural", "Herbal Formula", "Handmade Small Batch"]
      }
    },
    {
      id: "charcoal-soap-pack-of-3",
      eyebrow: "🧼 HANDCRAFTED BOTANICAL SOAPS",
      title: "Cold-Processed Bamboo Charcoal",
      titleHighlight: "Detox Pack of 3",
      subtitle: "Small-batch cold-processed bars with zero detergents and zero parabens. Deeply purifies pores, sloughs off dull dead skin cells, and balances oily skin with cold-pressed coconut oil.",
      categoryTarget: "combos",
      ctaText: "Explore Soap Combos",
      features: [
        { icon: "🧼", text: "Small-Batch Handcrafted" },
        { icon: "🍃", text: "Deep Pore Cleansing" },
        { icon: "🚚", text: "Free Pan-India Delivery" }
      ],
      product: {
        id: "charcoal-soap-pack-of-3",
        name: "Ashwini Herbal Charcoal Soap (Pack of 3)",
        subtitle: "Handmade Activated Bamboo Charcoal Detox Bars",
        category: "soaps",
        concerns: ["acne", "oily-skin"],
        price: 449,
        originalPrice: 599,
        image: "/products/Gemini_Generated_Image_2p1dbl2p1dbl2p1d.png",
        rating: 4.8,
        reviewsCount: 388,
        badge: "Pack of 3 Deal • ₹449",
        netQuantity: "Pack of 3 Bars (100g each)",
        tagline: "Deep Pore Cleansing & Oil Control • Free Shipping",
        description: "Cold-processed handmade soap bars loaded with activated coconut bamboo charcoal and cold-pressed coconut oil. Acts like a natural magnet to pull dirt, pollution, and oil from deep inside pores, leaving your skin thoroughly detoxified, clean, and velvety smooth.",
        keyIngredients: [
          { name: "Activated Bamboo Charcoal", role: "Adsorbs deep micro-toxins and unclogs blackheads" },
          { name: "Cold Pressed Coconut Oil", role: "Provides rich lather and ensures zero dryness" }
        ],
        benefits: [
          "Eliminates back acne, chest acne, and facial breakout triggers",
          "Balances oily skin throughout humid days"
        ],
        howToUse: "Wet the soap bar to create rich creamy black-grey lather. Apply gently over face and body. Rinse thoroughly.",
        features: ["Handmade", "Chemical & Paraben Free", "Pack of 3 Offer"]
      }
    }
  ];

  // Auto-advance slides every 5.5 seconds (paused when user hovers)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const activeSlide = slides[currentSlide];

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const handleCategoryNav = (cat) => {
    onSelectCategory(cat);
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container hero-grid" key={activeSlide.id}>
        {/* Left Column: Text & Call to Action */}
        <div className="hero-content">
          <div className="hero-tag">
            <span>✨</span> {activeSlide.eyebrow}
          </div>

          <h2 className="hero-title">
            {activeSlide.title} <br />
            <em>{activeSlide.titleHighlight}</em>
          </h2>

          <p className="hero-subtitle">
            {activeSlide.subtitle}
          </p>

          <div className="hero-cta-group">
            <button
              className="btn-primary"
              onClick={() => handleCategoryNav(activeSlide.categoryTarget)}
            >
              <span>{activeSlide.ctaText}</span>
              <span>→</span>
            </button>
            <button
              className="btn-secondary"
              onClick={() => openQuickView(activeSlide.product)}
            >
              <span>{t('quickView')}</span>
            </button>
          </div>

          <div className="hero-features">
            {activeSlide.features.map((feat, idx) => (
              <div key={idx} className="hero-feature-item">
                <span className="hero-feature-icon">{feat.icon}</span>
                <span>{feat.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Ashwini Product Visual Showcase */}
        <div className="hero-visual">
          <div
            className="hero-card-showcase"
            onClick={() => openQuickView(activeSlide.product)}
            style={{ cursor: 'pointer' }}
            title="Click to view details"
          >
            <div className="hero-floating-badge">
              <span>🏆</span> {activeSlide.product.badge}
            </div>

            <div className="hero-image-wrapper">
              <img
                src={activeSlide.product.image}
                alt={activeSlide.product.name}
              />
            </div>

            <div className="hero-card-details">
              <div>
                <div className="hero-card-title">{activeSlide.product.name}</div>
                <div className="hero-card-sub">{activeSlide.product.subtitle}</div>
              </div>
              <div className="hero-card-price">
                <div className="price">₹{activeSlide.product.price}</div>
                <div className="mrp">₹{activeSlide.product.originalPrice}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vedix-Style Carousel Controls & Slide Indicators */}
      <div className="container hero-controls-container">
        <button
          className="hero-arrow-btn prev"
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          ‹
        </button>

        <div className="hero-slide-indicators">
          {slides.map((s, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className="hero-dot-fill"></span>
            </button>
          ))}
        </div>

        <button
          className="hero-arrow-btn next"
          onClick={handleNext}
          aria-label="Next Slide"
        >
          ›
        </button>
      </div>
    </section>
  );
};
