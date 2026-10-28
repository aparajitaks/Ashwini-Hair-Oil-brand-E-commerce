// Ashwini Herbal - E-Commerce Application Engine
import { PRODUCTS, CATEGORIES, CONCERNS, TESTIMONIALS, FAQS } from './products.js';

// Application State
const state = {
  cart: JSON.parse(localStorage.getItem('ashwini_cart') || '[]'),
  activeCategory: 'all',
  activeConcern: 'all',
  searchTerm: '',
  sortBy: 'featured',
  appliedCoupon: null, // { code, type: 'percent'|'flat', value: 0.10 }
  selectedPaymentMethod: 'COD',
  lastPlacedOrder: null
};

// WhatsApp Business Number
const WHATSAPP_NUMBER = '919845012345';

// DOM Element Selectors
const productGrid = document.getElementById('productGrid');
const categoryTabs = document.getElementById('categoryTabs');
const concernFilters = document.getElementById('concernFilters');
const catalogSearchInput = document.getElementById('catalogSearchInput');
const sortSelect = document.getElementById('sortSelect');
const cartOverlay = document.getElementById('cartOverlay');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartCountBadge = document.getElementById('cartCountBadge');
const cartItemCountText = document.getElementById('cartItemCountText');
const cartItemsList = document.getElementById('cartItemsList');
const cartSubtotalText = document.getElementById('cartSubtotalText');
const cartDiscountRow = document.getElementById('cartDiscountRow');
const cartDiscountText = document.getElementById('cartDiscountText');
const cartShippingText = document.getElementById('cartShippingText');
const cartGrandTotalText = document.getElementById('cartGrandTotalText');
const shippingProgressMsg = document.getElementById('shippingProgressMsg');
const shippingProgressPct = document.getElementById('shippingProgressPct');
const shippingBarFill = document.getElementById('shippingBarFill');
const couponCodeInput = document.getElementById('couponCodeInput');
const applyCouponBtn = document.getElementById('applyCouponBtn');
const appliedCouponDisplay = document.getElementById('appliedCouponDisplay');
const couponNameTag = document.getElementById('couponNameTag');
const removeCouponBtn = document.getElementById('removeCouponBtn');
const cartWhatsAppOrderBtn = document.getElementById('cartWhatsAppOrderBtn');
const cartOpenCheckoutBtn = document.getElementById('cartOpenCheckoutBtn');
const productModalOverlay = document.getElementById('productModalOverlay');
const closeProductModalBtn = document.getElementById('closeProductModalBtn');
const productModalContent = document.getElementById('productModalContent');
const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
const closeCheckoutModalBtn = document.getElementById('closeCheckoutModalBtn');
const checkoutAddressForm = document.getElementById('checkoutAddressForm');
const checkoutTotalBtnText = document.getElementById('checkoutTotalBtnText');
const checkoutFormStep = document.getElementById('checkoutFormStep');
const checkoutSuccessStep = document.getElementById('checkoutSuccessStep');
const successOrderId = document.getElementById('successOrderId');
const sendOrderToWhatsAppBtn = document.getElementById('sendOrderToWhatsAppBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const toastContainer = document.getElementById('toastContainer');
const mobileCartBar = document.getElementById('mobileCartBar');
const mobileCartCount = document.getElementById('mobileCartCount');
const mobileCartTotal = document.getElementById('mobileCartTotal');
const mobileCartOpenBtn = document.getElementById('mobileCartOpenBtn');

// ==========================================================================
// INITIALIZATION
// ==========================================================================

function init() {
  renderCategoryTabs();
  renderConcernFilters();
  renderProductGrid();
  renderTestimonials();
  renderFaqs();
  initQuiz();
  updateCartUI();
  setupEventListeners();
}

// ==========================================================================
// RENDERING
// ==========================================================================

function renderCategoryTabs() {
  categoryTabs.innerHTML = CATEGORIES.map(cat => `
    <button class="cat-tab ${cat.id === state.activeCategory ? 'active' : ''}" data-cat="${cat.id}">
      <span>${cat.icon}</span>
      <span>${cat.name}</span>
    </button>
  `).join('');
}

function renderConcernFilters() {
  const chipsHtml = CONCERNS.map(con => `
    <button class="concern-chip ${con.id === state.activeConcern ? 'active' : ''}" data-concern="${con.id}">
      ${con.name}
    </button>
  `).join('');

  concernFilters.innerHTML = `<span class="concern-label">Target Concern:</span>` + chipsHtml;
}

function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Category Filter
  if (state.activeCategory !== 'all') {
    list = list.filter(p => p.category === state.activeCategory);
  }

  // Concern Filter
  if (state.activeConcern !== 'all') {
    list = list.filter(p => p.concerns && p.concerns.includes(state.activeConcern));
  }

  // Search Filter
  if (state.searchTerm.trim() !== '') {
    const term = state.searchTerm.toLowerCase().trim();
    list = list.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.subtitle.toLowerCase().includes(term) ||
      p.tagline.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.keyIngredients.some(ing => ing.name.toLowerCase().includes(term))
    );
  }

  // Sorting
  switch (state.sortBy) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'discount':
      list.sort((a, b) => {
        const discA = ((a.originalPrice - a.price) / a.originalPrice);
        const discB = ((b.originalPrice - b.price) / b.originalPrice);
        return discB - discA;
      });
      break;
    case 'featured':
    default:
      // Keep natural catalog order
      break;
  }

  return list;
}

function renderProductGrid() {
  const products = getFilteredProducts();

  if (products.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-catalog">
        <h4>No Ayurvedic remedies found</h4>
        <p>Try clearing your search or choosing a different skin/hair category.</p>
        <button class="btn-primary" id="resetFiltersBtn">Reset All Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.activeCategory = 'all';
        state.activeConcern = 'all';
        state.searchTerm = '';
        if (catalogSearchInput) catalogSearchInput.value = '';
        renderCategoryTabs();
        renderConcernFilters();
        renderProductGrid();
      });
    }
    return;
  }

  productGrid.innerHTML = products.map(product => {
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const inCart = state.cart.some(item => item.id === product.id);

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="card-image-box" onclick="window.app.openQuickView('${product.id}')">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="card-badge">${product.badge}</span>
          <span class="card-discount-tag">${discountPercent}% OFF</span>

          <div class="card-quick-actions">
            <button class="btn-quick-view" onclick="event.stopPropagation(); window.app.openQuickView('${product.id}')">
              <span>👁️</span> Quick View
            </button>
          </div>
        </div>

        <div class="card-body">
          <div class="card-meta">
            <div class="card-rating">
              <span>★</span>
              <span>${product.rating}</span>
              <span style="color: var(--text-light); font-weight: 500;">(${product.reviewsCount})</span>
            </div>
            <span class="card-net-qty">${product.netQuantity}</span>
          </div>

          <h4 class="card-title" onclick="window.app.openQuickView('${product.id}')">${product.name}</h4>
          <p class="card-tagline">${product.tagline}</p>

          <div class="card-footer">
            <div class="card-pricing">
              <span class="card-price">₹${product.price}</span>
              <span class="card-mrp">₹${product.originalPrice}</span>
            </div>

            <button class="btn-add-cart ${inCart ? 'added' : ''}" onclick="window.app.addToCart('${product.id}', 1, this)">
              <span>${inCart ? '✓ Added' : '+ Add'}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${'★'.repeat(t.rating)}</div>
      <p class="testimonial-text">"${t.comment}"</p>
      <div class="testimonial-author">
        <div class="author-info">
          <h5>${t.name}</h5>
          <span>${t.city} • Verified Buyer</span>
        </div>
        <span class="verified-badge">✓ Verified</span>
      </div>
    </div>
  `).join('');
}

function renderFaqs() {
  const container = document.getElementById('faqList');
  if (!container) return;

  container.innerHTML = FAQS.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
        <span>${faq.question}</span>
        <span class="faq-arrow">▼</span>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// CART & PRICING LOGIC
// ==========================================================================

function addToCart(productId, quantity = 1, buttonEl = null) {
  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ id: productId, quantity });
  }

  saveCart();
  updateCartUI();

  const product = PRODUCTS.find(p => p.id === productId);
  showToast(`Added ${product ? product.name : 'item'} to Basket 🌿`);

  if (buttonEl) {
    buttonEl.classList.add('added');
    buttonEl.innerHTML = '<span>✓ Added</span>';
    setTimeout(() => {
      // Keep it synced with cart
    }, 1200);
  }
}

function updateCartQuantity(productId, delta) {
  const index = state.cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  state.cart[index].quantity += delta;

  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
    showToast('Item removed from basket');
  }

  saveCart();
  updateCartUI();
  renderProductGrid(); // Refresh 'Added' tags
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  renderProductGrid();
  showToast('Item removed from basket');
}

function saveCart() {
  localStorage.setItem('ashwini_cart', JSON.stringify(state.cart));
}

function calculateCartTotals() {
  let subtotal = 0;
  let totalItems = 0;
  let hasFreeShippingBundle = false;

  state.cart.forEach(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (p) {
      subtotal += p.price * item.quantity;
      totalItems += item.quantity;
      if (p.badge && (p.badge.includes('Pack of 3') || p.badge.includes('Bundle') || p.badge.includes('Trio') || p.badge.includes('Kit'))) {
        hasFreeShippingBundle = true;
      }
    }
  });

  // Discount calculation
  let discount = 0;
  if (state.appliedCoupon) {
    if (state.appliedCoupon.type === 'percent') {
      discount = Math.round(subtotal * state.appliedCoupon.value);
    } else if (state.appliedCoupon.type === 'flat') {
      discount = Math.min(subtotal, state.appliedCoupon.value);
    }
  }

  // Shipping policy: Free if subtotal >= 499 or has combo bundle, else 60
  const isFreeShipping = (subtotal >= 499) || hasFreeShippingBundle || (subtotal === 0);
  const shippingFee = (subtotal === 0 || isFreeShipping) ? 0 : 60;
  const grandTotal = Math.max(0, subtotal - discount + shippingFee);

  return { subtotal, totalItems, discount, shippingFee, grandTotal, isFreeShipping };
}

function updateCartUI() {
  const { subtotal, totalItems, discount, shippingFee, grandTotal, isFreeShipping } = calculateCartTotals();

  // Badges
  cartCountBadge.textContent = totalItems;
  cartItemCountText.textContent = totalItems;
  if (mobileCartCount) mobileCartCount.textContent = totalItems;
  if (mobileCartTotal) mobileCartTotal.textContent = `₹${grandTotal}`;

  // Shipping progress (threshold 499)
  const threshold = 499;
  if (subtotal === 0) {
    shippingProgressMsg.textContent = `Add ₹${threshold} for FREE Express Shipping`;
    shippingProgressPct.textContent = `0%`;
    shippingBarFill.style.width = '0%';
  } else if (isFreeShipping) {
    shippingProgressMsg.textContent = `🎉 You've unlocked 100% FREE Express Shipping!`;
    shippingProgressPct.textContent = `100%`;
    shippingBarFill.style.width = '100%';
  } else {
    const remaining = threshold - subtotal;
    const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
    shippingProgressMsg.textContent = `Add ₹${remaining} more for FREE Express Shipping`;
    shippingProgressPct.textContent = `${pct}%`;
    shippingBarFill.style.width = `${pct}%`;
  }

  // Item List
  if (state.cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-view">
        <div class="empty-cart-icon">🌿</div>
        <h4>Your basket is empty</h4>
        <p>Explore our handcrafted soaps and herbal hair oils to fill it up.</p>
        <button class="btn-primary" onclick="window.app.closeCart();">Start Shopping</button>
      </div>
    `;
    cartSubtotalText.textContent = '₹0';
    cartShippingText.textContent = 'FREE';
    cartGrandTotalText.textContent = '₹0';
    cartDiscountRow.style.display = 'none';
    if (checkoutTotalBtnText) checkoutTotalBtnText.textContent = '₹0';
    return;
  }

  cartItemsList.innerHTML = state.cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';

    return `
      <div class="cart-item-row">
        <img src="${product.image}" alt="${product.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h5>${product.name}</h5>
          <div class="cart-item-qty-tag">${product.netQuantity}</div>
          <div class="cart-item-stepper">
            <button onclick="window.app.updateCartQuantity('${item.id}', -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="window.app.updateCartQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
        <div class="cart-item-price-col">
          <span class="cart-item-price">₹${product.price * item.quantity}</span>
          <button class="cart-item-remove" onclick="window.app.removeFromCart('${item.id}')" title="Remove item">✕</button>
        </div>
      </div>
    `;
  }).join('');

  // Summary breakdown
  cartSubtotalText.textContent = `₹${subtotal}`;
  if (discount > 0) {
    cartDiscountRow.style.display = 'flex';
    cartDiscountText.textContent = `-₹${discount}`;
  } else {
    cartDiscountRow.style.display = 'none';
  }
  cartShippingText.textContent = shippingFee === 0 ? 'FREE' : `₹${shippingFee}`;
  cartGrandTotalText.textContent = `₹${grandTotal}`;
  if (checkoutTotalBtnText) checkoutTotalBtnText.textContent = `₹${grandTotal}`;
}

// ==========================================================================
// COUPON ENGINE
// ==========================================================================

function applyCoupon(code) {
  const cleanCode = code.trim().toUpperCase();

  if (cleanCode === 'AYURVEDA10') {
    state.appliedCoupon = { code: 'AYURVEDA10', type: 'percent', value: 0.10, desc: '10% OFF' };
    appliedCouponDisplay.style.display = 'block';
    couponNameTag.textContent = `AYURVEDA10 (-10%)`;
    couponCodeInput.value = '';
    updateCartUI();
    showToast('Applied 10% Festive Discount! 🎉');
  } else if (cleanCode === 'ASHWINI50') {
    state.appliedCoupon = { code: 'ASHWINI50', type: 'flat', value: 50, desc: '₹50 OFF' };
    appliedCouponDisplay.style.display = 'block';
    couponNameTag.textContent = `ASHWINI50 (-₹50)`;
    couponCodeInput.value = '';
    updateCartUI();
    showToast('Applied ₹50 First-Time Discount! 🌿');
  } else {
    showToast('Invalid Coupon. Try AYURVEDA10 or ASHWINI50');
  }
}

function removeCoupon() {
  state.appliedCoupon = null;
  appliedCouponDisplay.style.display = 'none';
  updateCartUI();
  showToast('Coupon removed');
}

// ==========================================================================
// WHATSAPP ORDER GENERATOR
// ==========================================================================

function buildWhatsAppMessage(customer = null) {
  const { subtotal, discount, shippingFee, grandTotal } = calculateCartTotals();

  let msg = `*🌿 NEW ORDER - ASHWINI HERBAL*\n`;
  msg += `---------------------------------\n`;

  state.cart.forEach((item, idx) => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (p) {
      msg += `${idx + 1}. *${p.name}* (${p.netQuantity})\n   Qty: ${item.quantity} x ₹${p.price} = ₹${p.price * item.quantity}\n`;
    }
  });

  msg += `---------------------------------\n`;
  msg += `*Subtotal:* ₹${subtotal}\n`;
  if (discount > 0) {
    msg += `*Coupon Discount (${state.appliedCoupon.code}):* -₹${discount}\n`;
  }
  msg += `*Shipping:* ${shippingFee === 0 ? 'FREE' : '₹' + shippingFee}\n`;
  msg += `*GRAND TOTAL:* ₹${grandTotal}\n`;
  msg += `---------------------------------\n`;

  if (customer) {
    msg += `*Customer Details:*\n`;
    msg += `Name: ${customer.name}\n`;
    msg += `Phone: ${customer.phone}\n`;
    msg += `Delivery Address: ${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}\n`;
    msg += `Payment Preference: ${customer.paymentMethod}\n`;
  } else {
    msg += `*Payment Preference:* Cash on Delivery / UPI\n`;
    msg += `(Please confirm my order and share payment instructions/delivery date)\n`;
  }

  msg += `\nThank you! 🙏`;
  return encodeURIComponent(msg);
}

function openWhatsAppOrder(customer = null) {
  if (state.cart.length === 0) {
    showToast('Please add items to your basket before ordering!');
    return;
  }
  const encodedText = buildWhatsAppMessage(customer);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  window.open(url, '_blank');
}

// ==========================================================================
// QUICK VIEW MODAL
// ==========================================================================

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const ingredientsListHtml = product.keyIngredients.map(ing => `
    <div class="ingredient-pill">
      <strong>${ing.name}:</strong> ${ing.role}
    </div>
  `).join('');

  const benefitsListHtml = product.benefits.map(ben => `
    <li style="margin-bottom: 4px;">✓ ${ben}</li>
  `).join('');

  const featuresPillsHtml = product.features.map(f => `
    <span class="modal-chip">${f}</span>
  `).join('');

  productModalContent.innerHTML = `
    <div class="modal-gallery">
      <img src="${product.image}" alt="${product.name}" class="modal-main-img">
      <div class="modal-badges-row">
        ${featuresPillsHtml}
      </div>
    </div>

    <div class="modal-content-details">
      <span class="modal-subtitle">${product.subtitle}</span>
      <h3 class="modal-title">${product.name}</h3>

      <div class="modal-rating-row">
        <span style="color: #b07d1a; font-weight: 700;">★ ${product.rating}</span>
        <span style="color: var(--text-muted); font-size: 0.85rem;">(${product.reviewsCount} verified reviews)</span>
        <span style="margin-left: auto; font-size: 0.82rem; font-weight: 600; color: var(--text-light);">${product.netQuantity}</span>
      </div>

      <div class="modal-price-box">
        <span class="price">₹${product.price}</span>
        <span class="mrp">₹${product.originalPrice}</span>
        <span class="discount-tag">${discountPercent}% OFF</span>
      </div>

      <p class="modal-desc">${product.description}</p>

      <div class="modal-ingredients-heading">🌿 Key Ayurvedic Actives:</div>
      <div class="modal-ingredients-list">
        ${ingredientsListHtml}
      </div>

      <div class="modal-ingredients-heading" style="margin-top: 10px;">✨ Proven Benefits:</div>
      <ul style="list-style: none; font-size: 0.84rem; color: var(--text-muted); margin-bottom: 16px;">
        ${benefitsListHtml}
      </ul>

      <div class="modal-how-to-use">
        <strong>How to Use:</strong> ${product.howToUse}
      </div>

      <div class="modal-actions">
        <div class="modal-qty-control">
          <button id="modalQtyMinus">-</button>
          <span id="modalQtyVal">1</span>
          <button id="modalQtyPlus">+</button>
        </div>

        <button class="modal-btn-cart" id="modalAddToCartBtn">
          <span>Add to Basket</span>
        </button>

        <button class="modal-btn-whatsapp" id="modalWhatsAppBuyBtn" title="Buy directly on WhatsApp">
          <span>💬</span>
          <span>WhatsApp Buy</span>
        </button>
      </div>
    </div>
  `;

  // Attach modal quantity listeners
  let currentModalQty = 1;
  const qtyVal = document.getElementById('modalQtyVal');
  const qtyMinus = document.getElementById('modalQtyMinus');
  const qtyPlus = document.getElementById('modalQtyPlus');
  const addCartBtn = document.getElementById('modalAddToCartBtn');
  const waBuyBtn = document.getElementById('modalWhatsAppBuyBtn');

  qtyMinus.addEventListener('click', () => {
    if (currentModalQty > 1) {
      currentModalQty--;
      qtyVal.textContent = currentModalQty;
    }
  });

  qtyPlus.addEventListener('click', () => {
    currentModalQty++;
    qtyVal.textContent = currentModalQty;
  });

  addCartBtn.addEventListener('click', () => {
    addToCart(product.id, currentModalQty);
    closeProductModal();
  });

  waBuyBtn.addEventListener('click', () => {
    addToCart(product.id, currentModalQty);
    closeProductModal();
    openWhatsAppOrder();
  });

  productModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  productModalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// CHECKOUT & ORDER FLOW
// ==========================================================================

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your basket is empty!');
    return;
  }
  closeCart();
  checkoutFormStep.style.display = 'block';
  checkoutSuccessStep.style.display = 'none';
  checkoutModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  checkoutModalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const customer = {
    name: document.getElementById('custName').value.trim(),
    phone: document.getElementById('custPhone').value.trim(),
    pincode: document.getElementById('custPincode').value.trim(),
    address: document.getElementById('custAddress').value.trim(),
    city: document.getElementById('custCity').value.trim(),
    state: document.getElementById('custState').value.trim(),
    paymentMethod: state.selectedPaymentMethod
  };

  const orderId = 'ASH-' + Math.floor(100000 + Math.random() * 900000);
  state.lastPlacedOrder = { orderId, customer, items: [...state.cart] };

  // Show Success Screen
  checkoutFormStep.style.display = 'none';
  checkoutSuccessStep.style.display = 'block';
  successOrderId.textContent = `Order #${orderId}`;

  // Clear Cart
  state.cart = [];
  saveCart();
  updateCartUI();
  renderProductGrid();

  showToast('Order confirmed! 🌿 Thank you!');
}

// ==========================================================================
// AYURVEDIC CONSULTATION QUIZ
// ==========================================================================

function initQuiz() {
  let quizGoal = null;
  let quizType = null;

  const step1 = document.getElementById('quizStep1');
  const step2 = document.getElementById('quizStep2');
  const step3 = document.getElementById('quizStep3');
  const ind1 = document.getElementById('quizStepIndicator1');
  const ind2 = document.getElementById('quizStepIndicator2');
  const ind3 = document.getElementById('quizStepIndicator3');
  const backBtn = document.getElementById('quizBackBtn');
  const restartBtn = document.getElementById('quizRestartBtn');
  const resultBox = document.getElementById('quizResultBox');

  if (!step1) return;

  // Step 1 Options
  step1.querySelectorAll('.quiz-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      quizGoal = btn.getAttribute('data-goal');
      step1.style.display = 'none';
      step2.style.display = 'block';
      ind1.classList.remove('active');
      ind2.classList.add('active');
    });
  });

  // Step 2 Options
  step2.querySelectorAll('.quiz-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      quizType = btn.getAttribute('data-type');
      showQuizResult(quizGoal, quizType);
      step2.style.display = 'none';
      step3.style.display = 'block';
      ind2.classList.remove('active');
      ind3.classList.add('active');
    });
  });

  backBtn.addEventListener('click', () => {
    step2.style.display = 'none';
    step1.style.display = 'block';
    ind2.classList.remove('active');
    ind1.classList.add('active');
  });

  restartBtn.addEventListener('click', () => {
    quizGoal = null;
    quizType = null;
    step3.style.display = 'none';
    step1.style.display = 'block';
    ind3.classList.remove('active');
    ind1.classList.add('active');
  });

  function showQuizResult(goal, type) {
    let recProduct;
    let explanation;

    if (goal === 'pigmentation') {
      recProduct = PRODUCTS.find(p => p.id === 'day-night-cream-duo') || PRODUCTS[0];
      explanation = 'Your dual action 24hr protocol with Licorice and Chamomile to clear hyperpigmentation and sun spots.';
    } else if (goal === 'acne') {
      recProduct = PRODUCTS.find(p => p.id === 'charcoal-soap-pack-of-3') || PRODUCTS[1];
      explanation = 'Deep activated charcoal pore detoxification to clear stubborn blemishes and regulate daily sebum.';
    } else if (goal === 'hairfall') {
      recProduct = PRODUCTS.find(p => p.id === 'herbal-hair-care-collection') || PRODUCTS[2];
      explanation = 'Target dormant follicles with 22 Ayurvedic herbs, Rosemary, and pure Amla-Reetha cleansing.';
    } else {
      recProduct = PRODUCTS.find(p => p.id === 'baby-care-complete-trio') || PRODUCTS[15];
      explanation = '100% pure cold-pressed sweet almond and Kesari saffron bath regimen safe from newborn stage.';
    }

    resultBox.innerHTML = `
      <img src="${recProduct.image}" alt="${recProduct.name}" class="quiz-result-img">
      <div class="quiz-result-details">
        <h4>✨ Recommended Regimen: ${recProduct.name}</h4>
        <p>${explanation}</p>
        <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
          <span style="font-size: 1.3rem; font-weight: 800; color: var(--primary-deep);">₹${recProduct.price}</span>
          <span style="text-decoration: line-through; color: var(--text-light); font-size: 0.9rem;">₹${recProduct.originalPrice}</span>
          <button class="btn-primary" onclick="window.app.addToCart('${recProduct.id}', 1); window.app.openCart();">
            <span>Add Regimen to Basket</span>
            <span>→</span>
          </button>
        </div>
      </div>
    `;
  }
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>🌿</span><span>${message}</span>`;
  toastContainer.appendChild(toast);

  // Force reflow
  toast.offsetHeight;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 300);
  }, 3000);
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================

function setupEventListeners() {
  // Drawer controls
  openCartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  if (mobileCartOpenBtn) mobileCartOpenBtn.addEventListener('click', openCart);
  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) closeCart();
  });

  // Category Tabs
  categoryTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.cat-tab');
    if (!tab) return;
    state.activeCategory = tab.getAttribute('data-cat');
    renderCategoryTabs();
    renderProductGrid();
  });

  // Concern Filter Chips
  concernFilters.addEventListener('click', (e) => {
    const chip = e.target.closest('.concern-chip');
    if (!chip) return;
    state.activeConcern = chip.getAttribute('data-concern');
    renderConcernFilters();
    renderProductGrid();
  });

  // Search input
  catalogSearchInput.addEventListener('input', (e) => {
    state.searchTerm = e.target.value;
    renderProductGrid();
  });

  // Sort select
  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProductGrid();
  });

  // Search shortcut
  const searchTriggerBtn = document.getElementById('searchTriggerBtn');
  if (searchTriggerBtn) {
    searchTriggerBtn.addEventListener('click', () => {
      catalogSearchInput.focus();
      catalogSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Keyboard '/' shortcut
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== catalogSearchInput) {
      e.preventDefault();
      catalogSearchInput.focus();
      catalogSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (e.key === 'Escape') {
      closeCart();
      closeProductModal();
      closeCheckoutModal();
    }
  });

  // Apply Coupon
  applyCouponBtn.addEventListener('click', () => {
    applyCoupon(couponCodeInput.value);
  });

  couponCodeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyCoupon(couponCodeInput.value);
    }
  });

  removeCouponBtn.addEventListener('click', removeCoupon);

  // Cart actions
  cartWhatsAppOrderBtn.addEventListener('click', () => openWhatsAppOrder());
  cartOpenCheckoutBtn.addEventListener('click', openCheckoutModal);

  // Pack of 3 banner CTA
  const viewPackOf3Btn = document.getElementById('viewPackOf3Btn');
  if (viewPackOf3Btn) {
    viewPackOf3Btn.addEventListener('click', () => {
      state.activeCategory = 'soaps';
      state.searchTerm = '';
      renderCategoryTabs();
      renderProductGrid();
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Modals
  closeProductModalBtn.addEventListener('click', closeProductModal);
  productModalOverlay.addEventListener('click', (e) => {
    if (e.target === productModalOverlay) closeProductModal();
  });

  closeCheckoutModalBtn.addEventListener('click', closeCheckoutModal);
  checkoutModalOverlay.addEventListener('click', (e) => {
    if (e.target === checkoutModalOverlay) closeCheckoutModal();
  });

  // Checkout Payment selector
  document.querySelectorAll('.payment-method-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.selectedPaymentMethod = card.getAttribute('data-method');
    });
  });

  // Checkout Form Submit
  checkoutAddressForm.addEventListener('submit', handleCheckoutSubmit);

  // WhatsApp confirm button on success screen
  sendOrderToWhatsAppBtn.addEventListener('click', () => {
    if (state.lastPlacedOrder) {
      const msg = `*CONFIRMED ORDER #${state.lastPlacedOrder.orderId}*\nCustomer: ${state.lastPlacedOrder.customer.name}\nPhone: ${state.lastPlacedOrder.customer.phone}\nAddress: ${state.lastPlacedOrder.customer.address}, ${state.lastPlacedOrder.customer.city} (${state.lastPlacedOrder.customer.pincode})\nPayment: ${state.lastPlacedOrder.customer.paymentMethod}\n\nPlease confirm shipping dispatch! 🙏`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  });

  continueShoppingBtn.addEventListener('click', () => {
    closeCheckoutModal();
  });

  // Nav Links with category filtering
  document.querySelectorAll('.nav-link[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.getAttribute('data-filter');
      state.activeCategory = filter;
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      renderCategoryTabs();
      renderProductGrid();
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function openCart() {
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Global App Namespace for Inline Handlers
window.app = {
  openQuickView,
  closeProductModal,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  openCart,
  closeCart,
  openCheckoutModal
};

// Start application
document.addEventListener('DOMContentLoaded', init);
