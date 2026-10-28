import React, { useState, useEffect, useRef } from 'react';
import { api } from './api/client';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
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
    { id: "all", name: "Shop All", icon: "✨" },
    { id: "haircare", name: "Hair Care", icon: "💆‍♀️" },
    { id: "skincare", name: "Skin Care", icon: "🌿" },
    { id: "babycare", name: "Baby Care", icon: "👶" },
    { id: "combos", name: "Combo", icon: "🎁" }
  ]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [loading, setLoading] = useState(true);

  const searchInputRef = useRef(null);

  // Initial load of metadata (categories, testimonials, faqs)
  useEffect(() => {
    const loadMetadata = async () => {
      try {
        const [catsRes, testsRes, faqsRes] = await Promise.allSettled([
          api.getCategories(),
          api.getTestimonials(),
          api.getFaqs()
        ]);

        if (catsRes.status === 'fulfilled' && catsRes.value?.data) setCategories(catsRes.value.data);
        if (testsRes.status === 'fulfilled' && testsRes.value?.data) setTestimonials(testsRes.value.data);
        if (faqsRes.status === 'fulfilled' && faqsRes.value?.data) setFaqs(faqsRes.value.data);
      } catch (err) {
        console.error('Error loading metadata:', err);
      }
    };

    loadMetadata();
  }, []);

  // Fetch products whenever category, search, or sort change
  useEffect(() => {
    let isMounted = true;
    const fetchFiltered = async () => {
      setLoading(true);
      try {
        const res = await api.getProducts({
          category: activeCategory,
          q: searchTerm,
          sort: sortBy
        });

        if (isMounted && res.data) {
          setProducts(res.data);
          // Save full list if unfiltered
          if (activeCategory === 'all' && !searchTerm) {
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
  }, [activeCategory, searchTerm, sortBy]);

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

  return (
    <div className="app-root">
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onFocusSearch={handleFocusSearch}
      />

      <Hero
        onExploreClick={scrollToCatalog}
        onSelectCategory={setActiveCategory}
      />

      <TrustBar />

      {/* Main Catalog */}
      <section className="catalog-section" id="catalog">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Authentic Herbal Catalog (MERN)</span>
            <h3 className="section-title">Explore Our Ayurvedic Creations</h3>
            <p className="section-subtitle">
              Pure formulations designed for your skin and hair wellness. Select a category or search below.
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
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
