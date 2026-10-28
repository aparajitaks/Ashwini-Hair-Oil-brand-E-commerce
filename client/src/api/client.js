// API Client for Ashwini Herbal MERN Stack

const API_BASE = '/api';

export const api = {
  // Products
  async getProducts({ category, concern, q, sort } = {}) {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    if (concern && concern !== 'all') params.append('concern', concern);
    if (q && q.trim()) params.append('q', q.trim());
    if (sort) params.append('sort', sort);

    const queryStr = params.toString() ? `?${params.toString()}` : '';
    const res = await fetch(`${API_BASE}/products${queryStr}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  },

  async getProductById(id) {
    const res = await fetch(`${API_BASE}/products/${id}`);
    if (!res.ok) throw new Error('Failed to fetch product details');
    return res.json();
  },

  async getCategories() {
    const res = await fetch(`${API_BASE}/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    return res.json();
  },

  async getConcerns() {
    const res = await fetch(`${API_BASE}/concerns`);
    if (!res.ok) throw new Error('Failed to fetch concerns');
    return res.json();
  },

  async getTestimonials() {
    const res = await fetch(`${API_BASE}/testimonials`);
    if (!res.ok) throw new Error('Failed to fetch testimonials');
    return res.json();
  },

  async getFaqs() {
    const res = await fetch(`${API_BASE}/faqs`);
    if (!res.ok) throw new Error('Failed to fetch FAQs');
    return res.json();
  },

  // Coupons
  async applyCoupon(code, subtotal) {
    const res = await fetch(`${API_BASE}/coupons/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, subtotal })
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Invalid coupon code');
    }
    return data.data;
  },

  // Orders
  async createOrder(orderPayload) {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Failed to place order');
    }
    return data.data;
  }
};

