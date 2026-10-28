# 🌿 Ashwini Herbal — MERN Stack E-Commerce Store

A full-stack e-commerce storefront for **Ashwini Herbal** built with **MongoDB, Express.js, React (Vite), and Node.js**. Showcases 18 handcrafted Ayurvedic products using authentic high-resolution product photography with a complete shopping experience including cart, coupons, checkout, and WhatsApp ordering.

---

## 🏗️ Architecture Overview

```
/Users/veritan/Work/ashwini/
├── server/                       ← Node.js + Express Backend
│   ├── server.js                 ← Express entry point (port 5001)
│   ├── .env                      ← PORT, MONGODB_URI
│   ├── config/
│   │   └── db.js                 ← Mongoose connect + auto-seed
│   ├── models/
│   │   ├── Product.js            ← Mongoose Product schema
│   │   ├── Order.js              ← Mongoose Order schema
│   │   └── Coupon.js             ← Mongoose Coupon schema
│   ├── routes/
│   │   ├── productRoutes.js      ← GET /api/products, /api/categories, etc.
│   │   ├── orderRoutes.js        ← POST /api/orders
│   │   ├── couponRoutes.js       ← POST /api/coupons/apply
│   │   └── seedRoutes.js         ← POST /api/seed (re-seed MongoDB)
│   └── data/
│       └── productsData.js       ← Seed data (all 18 products + coupons)
│
├── client/                       ← React + Vite Frontend
│   ├── vite.config.js            ← Dev proxy → localhost:5001
│   ├── index.html                ← HTML entry point
│   └── src/
│       ├── main.jsx              ← ReactDOM.createRoot()
│       ├── App.jsx               ← Root component, filter/sort state
│       ├── index.css             ← Luxury Ayurvedic design system
│       ├── api/
│       │   └── client.js         ← fetch() wrappers for all API calls
│       ├── context/
│       │   └── CartContext.jsx   ← Global cart, coupons, modals, toasts
│       └── components/
│           ├── Navbar.jsx        ← Sticky header, nav, cart badge
│           ├── Hero.jsx          ← Hero section with featured product
│           ├── TrustBar.jsx      ← 4 trust badge icons
│           ├── OffersBanner.jsx  ← Pack of 3 ₹449 callout
│           ├── CategoryFilter.jsx← Category tabs, concern chips, search, sort
│           ├── ProductCard.jsx   ← Individual product card with quick view
│           ├── ProductGrid.jsx   ← Grid renderer with loading/empty states
│           ├── ProductModal.jsx  ← Full product detail modal
│           ├── CartDrawer.jsx    ← Slide-in cart with free-shipping bar
│           ├── CheckoutModal.jsx ← Order form → POST /api/orders
│           ├── RoutineAdvisor.jsx← 3-step Ayurvedic quiz
│           ├── AboutSection.jsx  ← Brand story
│           ├── Testimonials.jsx  ← Customer reviews
│           ├── FAQSection.jsx    ← Accordion FAQ
│           ├── Footer.jsx        ← Links, contact, copyright
│           ├── Toast.jsx         ← Toast notification system
│           ├── FloatingWhatsApp.jsx ← Floating WA button
│           └── MobileCartBar.jsx ← Sticky mobile cart bar
│
├── products/                     ← 19 high-res product images (served statically)
├── package.json                  ← Root dev/build/start scripts (concurrently)
└── README.md
```

---

## 🚀 Running the App

### Prerequisites
- Node.js v18+ and npm
- MongoDB (optional — app works in memory-fallback mode without it)

### Development Mode (Both servers with hot-reload)

```bash
cd /Users/veritan/Work/ashwini
npm run dev
```

This starts:
- **Express API server** on http://localhost:5001 (with `--watch` for auto-reload)
- **Vite dev server** on http://localhost:3000 (with API proxy to 5001)

Open **http://localhost:3000** in your browser.

### Production Mode (Single server)

```bash
# 1. Build React client
npm run build

# 2. Start Express server (serves built React app + API)
npm start
```

Open **http://localhost:5001** in your browser.

---

## 📡 API Reference

All endpoints are served at `http://localhost:5001/api/`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server & MongoDB status |
| `GET` | `/api/products` | List products (filter by `category`, `concern`, `q`, `sort`) |
| `GET` | `/api/products/:id` | Single product details |
| `GET` | `/api/categories` | All product categories |
| `GET` | `/api/concerns` | All skin/hair concerns |
| `GET` | `/api/testimonials` | Customer testimonials |
| `GET` | `/api/faqs` | FAQ list |
| `POST` | `/api/coupons/apply` | Validate & apply a coupon code |
| `POST` | `/api/orders` | Create a new order (returns WhatsApp URL) |
| `GET` | `/api/orders/:id` | Fetch order by ID |
| `POST` | `/api/seed` | Re-seed MongoDB from scratch |

### Example API calls

```bash
# Get all Soaps
curl "http://localhost:5001/api/products?category=soaps"

# Search for "charcoal"
curl "http://localhost:5001/api/products?q=charcoal"

# Sort by Price (Low → High)
curl "http://localhost:5001/api/products?sort=price-asc"

# Apply coupon
curl -X POST http://localhost:5001/api/coupons/apply \
  -H "Content-Type: application/json" \
  -d '{"code":"AYURVEDA10","subtotal":900}'

# Place an order
curl -X POST http://localhost:5001/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "items": [{"productId": "charcoal-soap-pack-of-3", "quantity": 1}],
    "customer": {"name":"Ananya","phone":"9845012345","address":"MG Road","city":"Bengaluru","state":"Karnataka","pincode":"560001"},
    "paymentMethod": "COD"
  }'
```

---

## 🛒 Features

| Feature | Details |
|---------|---------|
| **18 Products** | Soaps, Skincare, Haircare, Baby Care, Value Combos |
| **Category Filtering** | 6 category tabs, all API-driven |
| **Concern Chips** | Pigmentation, Acne, Dull Skin, Hair Fall, Baby Care |
| **Live Search + Sort** | Debounced; full-text across name, ingredients, description |
| **Product Quick View** | Modal with ingredients, benefits, directions, qty stepper |
| **Cart Drawer** | Slide-in, shipping progress bar, localStorage persisted |
| **Coupon System** | `AYURVEDA10` (10% off) · `ASHWINI50` (₹50 off) — API validated |
| **Free Shipping Logic** | Auto-free on ₹499+ orders or any combo/3-pack bundle |
| **WhatsApp 1-Click Order** | Pre-formatted order message sent to WhatsApp hotline |
| **Checkout + Order API** | Full form → `POST /api/orders` → MongoDB or memory store |
| **Ayurvedic Quiz** | 3-step skin/hair type advisor with product recommendation |
| **MongoDB + Fallback** | Auto-seeds 18 products. Gracefully falls back to memory if MongoDB offline |
| **Mobile Responsive** | Sticky mobile cart bar, collapsible nav, touch-friendly |

---

## 🍃 Enabling Persistent MongoDB

Start MongoDB locally, then restart the server:

```bash
# macOS (via Homebrew)
brew services start mongodb-community

# Or start manually
mongod --dbpath /usr/local/var/mongodb

# Then restart the server — it will auto-seed 18 products + coupons
npm start
```

### Re-seed database anytime:
```bash
curl -X POST http://localhost:5001/api/seed
```

---

## 🎨 Coupon Codes

| Code | Discount | Min Order |
|------|----------|-----------|
| `AYURVEDA10` | 10% off entire cart | No minimum |
| `ASHWINI50` | ₹50 flat off | ₹300+ |
