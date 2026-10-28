import React, { useState, useEffect, useRef } from 'react';
import { api } from './api/client';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { OffersBanner } from './components/OffersBanner';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { RoutineAdvisor } from './components/RoutineAdvisor';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileCartBar } from './components/MobileCartBar';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([
    { id: "all", name: "All Products", icon: "✨" },
    { id: "soaps", name: "Handmade Soaps", icon: "🧼" },
    { id: "skincare", name: "Face & Skin Care", icon: "🌿" },
    { id: "haircare", name: "Hair Care Solutions", icon: "💆‍♀️" },
    { id: "babycare", name: "Baby Care Range", icon: "👶" },
    { id: "combos", name: "Value Combos & Offers", icon: "🎁" }
  ]);
  const [concerns, setConcerns] = useState([
    { id: "all", name: "All Concerns" },
    { id: "pigmentation", name: "Pigmentation & Dark Spots" },
    { id: "acne", name: "Acne & Oily Skin" },
    { id: "glowing", name: "Dull Skin & Radiance" },
    { id: "hairfall", name: "Hair Fall & Dandruff" },
    { id: "baby-gentle", name: "Gentle Baby Care" }
  ]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeConcern, setActiveConcern] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [loading, setLoading] = useState(true);

  const searchInputRef = useRef(null);

  // Initial load of metadata (categories, testimonials, faqs)
  useEffect(() => {
    const loadMetadata = async () => {
      try {
        const [catsRes, concsRes, testsRes, faqsRes] = await Promise.allSettled([
          api.getCategories(),
          api.getConcerns(),
          api.getTestimonials(),
          api.getFaqs()
        ]);

        if (catsRes.status === 'fulfilled' && catsRes.value?.data) setCategories(catsRes.value.data);
        if (concsRes.status === 'fulfilled' && concsRes.value?.data) setConcerns(concsRes.value.data);
        if (testsRes.status === 'fulfilled' && testsRes.value?.data) setTestimonials(testsRes.value.data);
        if (faqsRes.status === 'fulfilled' && faqsRes.value?.data) setFaqs(faqsRes.value.data);
      } catch (err) {
        console.error('Error loading metadata:', err);
      }
    };

    loadMetadata();
  }, []);

  // Fetch products whenever filters or sort change
  useEffect(() => {
    let isMounted = true;
    const fetchFiltered = async () => {
      setLoading(true);
      try {
        const res = await api.getProducts({
          category: activeCategory,
          concern: activeConcern,
          q: searchTerm,
          sort: sortBy
        });

        if (isMounted && res.data) {
          setProducts(res.data);
          // Save full list if unfiltered
          if (activeCategory === 'all' && activeConcern === 'all' && !searchTerm) {
            setAllProducts(res.data);
          }
        }
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    // Debounce search input
    const timer = setTimeout(() => {
      fetchFiltered();
    }, 200);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [activeCategory, activeConcern, searchTerm, sortBy]);

  // Keyboard shortcut '/' for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
        document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setActiveConcern('all');
    setSearchTerm('');
    setSortBy('featured');
  };

  const handleFocusSearch = () => {
    searchInputRef.current?.focus();
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCombosClick = () => {
    setActiveCategory('combos');
    scrollToCatalog();
  };

  const handleShopPackOf3 = () => {
    setActiveCategory('soaps');
    scrollToCatalog();
  };

  return (
    <div className="app-root">
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onFocusSearch={handleFocusSearch}
      />

      <Hero
        onExploreClick={scrollToCatalog}
        onCombosClick={handleCombosClick}
      />

      <TrustBar />

      <OffersBanner onShopPackOf3={handleShopPackOf3} />

      {/* Main Catalog */}
      <section className="catalog-section" id="catalog">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Authentic Herbal Catalog (MERN)</span>
            <h3 className="section-title">Explore Our Ayurvedic Creations</h3>
            <p className="section-subtitle">
              Pure formulations designed for your skin and hair concerns. Select a category or concern to filter.
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            concerns={concerns}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            activeConcern={activeConcern}
            onSelectConcern={setActiveConcern}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortBy={sortBy}
            onSortChange={setSortBy}
            searchInputRef={searchInputRef}
          />

          <ProductGrid
            products={products}
            onResetFilters={handleResetFilters}
            loading={loading}
          />
        </div>
      </section>

      <RoutineAdvisor allProducts={allProducts.length ? allProducts : products} />

      <AboutSection />

      <Testimonials testimonials={testimonials} />

      <FAQSection faqs={faqs} />

      <Footer onSelectCategory={(cat) => { setActiveCategory(cat); scrollToCatalog(); }} />

      {/* Modals & Overlays */}
      <CartDrawer />
      <ProductModal />
      <CheckoutModal />
      <Toast />
      <FloatingWhatsApp />
      <MobileCartBar />
    </div>
  );
};

