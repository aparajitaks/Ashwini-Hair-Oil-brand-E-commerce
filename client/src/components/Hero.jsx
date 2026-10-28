import React from 'react';
import { useCart } from '../context/CartContext';

export const Hero = ({ onExploreClick, onCombosClick }) => {
  const { openQuickView } = useCart();

  const featuredProduct = {
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
    badge: "Ayurvedic Classic",
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
    howToUse: "Take 3-4 golden drops, gently massage in upward circular motions before bedtime for overnight absorption.",
    features: ["100% Natural", "Herbal Formula", "Handmade Small Batch"]
  };

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-tag">
            <span>✨</span> Handcrafted Botanical Alchemy (MERN Stack)
          </div>
          <h2 className="hero-title">
            Sacred Ayurvedic Elixirs for <em>Radiant Skin</em> & Healthy Hair
          </h2>
          <p className="hero-subtitle">
            Rooted in ancient South Indian herbal traditions. Formulated with wild-harvested herbs, saffron, and cold-pressed seed oils with zero parabens or artificial fillers.
          </p>

          <div className="hero-cta-group">
            <button className="btn-primary" onClick={onExploreClick}>
              <span>Explore All Products</span>
              <span>→</span>
            </button>
            <button className="btn-secondary" onClick={onCombosClick}>
              <span>View Combos</span>
            </button>
          </div>

          <div className="hero-features">
            <div className="hero-feature-item">
              <span className="hero-feature-icon">🌿</span>
              <span>100% Ayurvedic Formula</span>
            </div>
            <div className="hero-feature-item">
              <span className="hero-feature-icon">🧼</span>
              <span>Cold-Processed Handmade</span>
            </div>
            <div className="hero-feature-item">
              <span className="hero-feature-icon">🚚</span>
              <span>Free Delivery on ₹449+</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="hero-visual">
          <div
            className="hero-card-showcase"
            onClick={() => openQuickView(featuredProduct)}
            style={{ cursor: 'pointer' }}
            title="Click to view details"
          >
            <div className="hero-floating-badge">
              <span>🏆</span> Bestseller Elixir
            </div>
            <div className="hero-image-wrapper">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
              />
            </div>
            <div className="hero-card-details">
              <div>
                <div className="hero-card-title">{featuredProduct.name}</div>
                <div className="hero-card-sub">{featuredProduct.subtitle} ({featuredProduct.netQuantity})</div>
              </div>
              <div className="hero-card-price">
                <div className="price">₹{featuredProduct.price}</div>
                <div className="mrp">₹{featuredProduct.originalPrice}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

