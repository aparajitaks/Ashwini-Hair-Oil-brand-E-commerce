import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Top Bar & Branding
    announcement: '🌿 Festive Herbal Offer: Use coupon AYURVEDA10 for 10% OFF | Free Express Shipping on Pack of 3 Deals & Orders over ₹499!',
    brandTag: 'Herbal • Pure You',

    // Navbar Categories
    navAll: 'Shop All',
    navHair: 'Hair Care',
    navSkin: 'Skin Care',
    navBaby: 'Baby Care',
    navCombo: 'Combo',

    // Header Actions
    whatsapp: 'WhatsApp',
    cart: 'Cart',
    langName: 'English',

    // Trust Bar
    t1Title: '100% Ayurvedic',
    t1Sub: 'Ancient Classical Recipes',
    t2Title: 'Zero Chemicals',
    t2Sub: 'Paraben & Sulphate Free',
    t3Title: 'Handmade in India',
    t3Sub: 'Cold-Pressed Seed Oils',
    t4Title: 'Express Delivery',
    t4Sub: 'Safe Doorstep Transit',

    // Hero Section
    ctaHair: 'Explore Hair Care',
    ctaSkin: 'Explore Skin Care',
    ctaCombo: 'Explore Soap Combos',
    quickView: 'Quick View Product',

    // Catalog Section
    catalogTag: 'Authentic Herbal Catalog (MERN)',
    catalogTitle: 'Explore Our Ayurvedic Creations',
    catalogSubtitle: 'Pure formulations designed for your skin and hair wellness. Select a category or search below.',
    searchPlaceholder: 'Search herbs, oils, soaps...',
    sortBy: 'Sort By',
    sortFeatured: 'Featured',
    sortPriceLow: 'Price: Low to High',
    sortPriceHigh: 'Price: High to Low',
    sortRating: 'Top Customer Rated',
    addToBasket: '+ Add',
    reviews: 'verified reviews',
    noProducts: 'No products match your criteria. Try adjusting your search or category filter.',
    resetFilters: 'Reset All Filters',

    // Cart Drawer
    cartTitle: 'Your Shopping Basket',
    emptyCartTitle: 'Your basket is empty',
    emptyCartSub: 'Experience the healing touch of classical Ayurveda today.',
    exploreCatalog: 'Explore Herbal Store',
    itemSubtotal: 'Item Subtotal',
    couponDiscount: 'Coupon Discount',
    shipping: 'Express Delivery',
    freeShipping: 'FREE',
    grandTotal: 'Grand Total',
    orderWhatsApp: 'Order via WhatsApp (1-Click)',
    proceedCheckout: 'Proceed to Checkout',
    couponPlaceholder: 'Enter coupon (e.g. AYURVEDA10)',
    apply: 'Apply',
    remove: 'Remove',
    savingsTag: 'You are saving',

    // Checkout Modal
    checkoutTitle: 'Shipping & Order Details',
    checkoutSub: 'Enter your delivery address below to place your order via Express Backend.',
    fullName: 'Full Name *',
    phone: 'WhatsApp Phone Number *',
    address: 'Complete Street Address *',
    city: 'City / Town *',
    state: 'State *',
    pincode: 'PIN Code *',
    selectPayment: 'Select Payment Mode:',
    cod: 'Cash on Delivery',
    codSub: 'Pay cash/UPI at doorstep',
    razorpayOnline: 'Razorpay Online',
    razorpaySub: 'UPI, Cards, Netbanking, Wallets',
    confirmAndPlace: 'Confirm & Place Order',
    orderSuccessTitle: 'Order Placed Successfully!',
    sendWhatsAppSummary: 'Send Order Summary to WhatsApp Hotline',
    continueShopping: 'Continue Shopping',

    // Footer
    aboutTitle: 'About Ashwini Herbal',
    aboutText: 'Dedicated to resurrecting classical Ayurvedic wisdom into daily life. Handcrafted in Bengaluru, Karnataka using cold-pressed oils, wild-harvested botanicals, and zero synthetic detergents.',
    customerCare: 'Customer Care',
    quickLinks: 'Quick Links',
    contactUs: 'Contact & Hotline',
    verifiedReviews: 'Verified Reviews',
    faqTitle: 'Frequently Asked Questions',
    directWhatsApp: 'Direct WhatsApp Support',
    rightsReserved: 'Ashwini Herbal Products Pvt Ltd. Handcrafted with botanical care.'
  },

  kn: {
    // Top Bar & Branding
    announcement: '🌿 ಹಬ್ಬದ ಗಿಡಮೂಲಿಕೆ ಆಫರ್: 10% ರಿಯಾಯಿತಿಗಾಗಿ AYURVEDA10 ಕೂಪನ್ ಬಳಸಿ | ₹499 ಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಆರ್ಡರ್‌ಗಳಿಗೆ ಉಚಿತ ವಿತರಣೆ!',
    brandTag: 'ಗಿಡಮೂಲಿಕೆ • ಶುದ್ಧ ನೀವು',

    // Navbar Categories
    navAll: 'ಎಲ್ಲ ಉತ್ಪನ್ನಗಳು',
    navHair: 'ಕೂದಲ ಆರೈಕೆ',
    navSkin: 'ಚರ್ಮದ ಆರೈಕೆ',
    navBaby: 'ಮಕ್ಕಳ ಆರೈಕೆ',
    navCombo: 'ಕಾಂಬೊ ಆಫರ್ಸ್',

    // Header Actions
    whatsapp: 'ವಾಟ್ಸಾಪ್',
    cart: 'ಕಾರ್ಟ್',
    langName: 'ಕನ್ನಡ',

    // Trust Bar
    t1Title: '100% ಆಯುರ್ವೇದ',
    t1Sub: 'ಪ್ರಾಚೀನ ಶಾಸ್ತ್ರೀಯ ವಿಧಾನ',
    t2Title: 'ಶೂನ್ಯ ರಾಸಾಯನಿಕ',
    t2Sub: 'ಪ್ಯಾರಾಬೆನ್ & ಸಲ್ಫೇಟ್ ಮುಕ್ತ',
    t3Title: 'ಭಾರತದಲ್ಲಿ ತಯಾರಿಸಿದ',
    t3Sub: 'ಶುದ್ಧ ಗಾಣದ ಎಣ್ಣೆಗಳು',
    t4Title: 'ತ್ವರಿತ ವಿತರಣೆ',
    t4Sub: 'ಸುರಕ್ಷಿತ ಮನೆ ಬಾಗಿಲಿಗೆ',

    // Hero Section
    ctaHair: 'ಕೂದಲ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ',
    ctaSkin: 'ಚರ್ಮದ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ',
    ctaCombo: 'ಕಾಂಬೊ ಆಫರ್ಸ್ ನೋಡಿ',
    quickView: 'ತ್ವರಿತ ನೋಟ',

    // Catalog Section
    catalogTag: 'ಅಧಿಕೃತ ಆಯುರ್ವೇದ ಸಂಗ್ರಹ (MERN)',
    catalogTitle: 'ನಮ್ಮ ಆಯುರ್ವೇದ ಉತ್ಪನ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    catalogSubtitle: 'ನಿಮ್ಮ ಚರ್ಮ ಮತ್ತು ಕೂದಲಿನ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಶುದ್ಧ ಗಿಡಮೂಲಿಕೆಗಳ ಸೂತ್ರಗಳು. ವರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ಹುಡುಕಿ.',
    searchPlaceholder: 'ಗಿಡಮೂಲಿಕೆಗಳು, ಎಣ್ಣೆಗಳು, ಸಾಬೂನುಗಳನ್ನು ಹುಡುಕಿ...',
    sortBy: 'ವಿಂಗಡಿಸಿ',
    sortFeatured: 'ಜನಪ್ರಿಯ',
    sortPriceLow: 'ಬೆಲೆ: ಕಡಿಮೆಯಿಂದ ಹೆಚ್ಚು',
    sortPriceHigh: 'ಬೆಲೆ: ಹೆಚ್ಚಿನಿಂದ ಕಡಿಮೆ',
    sortRating: 'ಅತ್ಯುನ್ನತ ರೇಟಿಂಗ್',
    addToBasket: '+ ಸೇರಿಸಿ',
    reviews: 'ಗ್ರಾಹಕರ ವಿಮರ್ಶೆಗಳು',
    noProducts: 'ಯಾವುದೇ ಉತ್ಪನ್ನಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ಹುಡುಕಾಟವನ್ನು ಬದಲಾಯಿಸಿ ಪ್ರಯತ್ನಿಸಿ.',
    resetFilters: 'ಫಿಲ್ಟರ್ ಮರುಹೊಂದಿಸಿ',

    // Cart Drawer
    cartTitle: 'ನಿಮ್ಮ ಶಾಪಿಂಗ್ ಬುಟ್ಟಿ',
    emptyCartTitle: 'ನಿಮ್ಮ ಬುಟ್ಟಿ ಖಾಲಿಯಾಗಿದೆ',
    emptyCartSub: 'ಪ್ರಾಚೀನ ಆಯುರ್ವೇದದ ಶುದ್ಧತೆಯನ್ನು ಇಂದು ಅನುಭವಿಸಿ.',
    exploreCatalog: 'ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ',
    itemSubtotal: 'ಉತ್ಪನ್ನಗಳ ಒಟ್ಟು ಬೆಲೆ',
    couponDiscount: 'ಕೂಪನ್ ರಿಯಾಯಿತಿ',
    shipping: 'ವಿತರಣಾ ಶುಲ್ಕ',
    freeShipping: 'ಉಚಿತ',
    grandTotal: 'ಅಂತಿಮ ಮೊತ್ತ',
    orderWhatsApp: 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಆರ್ಡರ್ ಮಾಡಿ (1-ಕ್ಲಿಕ್)',
    proceedCheckout: 'ಖರೀದಿಗೆ ಮುಂದುವರಿಯಿರಿ',
    couponPlaceholder: 'ಕೂಪನ್ ಕೋಡ್ (ಉದಾ: AYURVEDA10)',
    apply: 'ಅನ್ವಯಿಸಿ',
    remove: 'ತೆಗೆದುಹಾಕಿ',
    savingsTag: 'ನಿಮ್ಮ ಉಳಿತಾಯ',

    // Checkout Modal
    checkoutTitle: 'ವಿತರಣಾ ವಿವರಗಳು & ವಿಳಾಸ',
    checkoutSub: 'ನಿಮ್ಮ ಆರ್ಡರ್ ಪೂರೈಸಲು ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.',
    fullName: 'ಪೂರ್ಣ ಹೆಸರು *',
    phone: 'ವಾಟ್ಸಾಪ್ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ *',
    address: 'ಪೂರ್ಣ ವಿಳಾಸ (ಮನೆ/ಬೀದಿ) *',
    city: 'ಊರು / ನಗರ *',
    state: 'ರಾಜ್ಯ *',
    pincode: 'ಪಿನ್ ಕೋಡ್ *',
    selectPayment: 'ಪಾವತಿ ವಿಧಾನ ಆಯ್ಕೆಮಾಡಿ:',
    cod: 'ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ (COD)',
    codSub: 'ಮನೆಗೆ ಬಂದಾಗ ಹಣ/UPI ಪಾವತಿಸಿ',
    razorpayOnline: 'ರೇಜರ್‌ಪೇ ಆನ್‌ಲೈನ್',
    razorpaySub: 'UPI, ಗೂಗಲ್ ಪೇ, ಕಾರ್ಡ್‌ಗಳು, ನೆಟ್‌ಬ್ಯಾಂಕಿಂಗ್',
    confirmAndPlace: 'ಆರ್ಡರ್ ದೃಢೀಕರಿಸಿ',
    orderSuccessTitle: 'ಆರ್ಡರ್ ಯಶಸ್ವಿಯಾಗಿ ದಾಖಲಾಗಿದೆ!',
    sendWhatsAppSummary: 'ವಾಟ್ಸಾಪ್‌ಗೆ ಆರ್ಡರ್ ವಿವರ ಕಳುಹಿಸಿ',
    continueShopping: 'ಇನ್ನಷ್ಟು ಶಾಪಿಂಗ್ ಮಾಡಿ',

    // Footer
    aboutTitle: 'ಅಶ್ವಿನಿ ಗಿಡಮೂಲಿಕೆ ಬಗ್ಗೆ',
    aboutText: 'ಸಾಂಪ್ರದಾಯಿಕ ಆಯುರ್ವೇದ ಜ್ಞಾನವನ್ನು ದೈನಂದಿನ ಜೀವನಕ್ಕೆ ತರುವ ಬದ್ಧತೆ. ಬೆಂಗಳೂರಿನಲ್ಲಿ ಶುದ್ಧ ಗಾಣದ ಎಣ್ಣೆಗಳು ಮತ್ತು ಗಿಡಮೂಲಿಕೆಗಳಿಂದ ತಯಾರಿಸಲ್ಪಟ್ಟಿದೆ.',
    customerCare: 'ಗ್ರಾಹಕ ಸೇವೆ',
    quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    contactUs: 'ಸಂಪರ್ಕಿಸಿ',
    verifiedReviews: 'ದೃಢೀಕೃತ ವಿಮರ್ಶೆಗಳು',
    faqTitle: 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೋತ್ತರಗಳು',
    directWhatsApp: 'ವಾಟ್ಸಾಪ್ ನೇರ ಸಹಾಯ',
    rightsReserved: 'ಅಶ್ವಿನಿ ಹರ್ಬಲ್ ಪ್ರಾಡಕ್ಟ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('ashwini_language') || 'en';
  });

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'kn') {
      setLanguageState(lang);
      localStorage.setItem('ashwini_language', lang);
    }
  };

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

