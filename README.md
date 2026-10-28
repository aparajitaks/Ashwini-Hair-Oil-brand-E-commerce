# 🌿 Ashwini Herbal - Online Store & E-Commerce Website

An online storefront designed and built for **Ashwini Herbal** (Pure Herbal • Pure You). The store showcases 18 handcrafted Ayurvedic and herbal products using authentic high-resolution product photography, labeled ingredients, pricing, and pack configurations directly from the workshop.

---

## ✨ Features & Capabilities

### 1. 🛍️ Rich Product Catalog (18 Handcrafted Items)
- **Handmade Herbal Soaps**: Activated Bamboo Charcoal Soap (Pack of 3 - ₹449), Coffee Glow Tan Removal Soap (Pack of 3 - ₹449), Pure Manjistha Bathing Bar (₹179), and the 4-Bar Herbal Soap Variety Vault (₹599).
- **Sacred Face & Skincare**: Kumkumadi Thailam Ayurvedic Glow Oil with Kashmir Saffron & Sandalwood (₹599), Manjista Face Wash for Pigmentation (₹349), Overnight Renewal Night Cream (₹499), Glow Drops Botanical Serum (₹429), Glow & Pigmentation Day Serum (₹399), Neem Aloevera Pimple Face Wash (₹299), and Pure 2-in-1 Aloevera Jell (₹279).
- **Hair Care Solutions**: Rosemary Black Hair Oil with 22 Herbal Ingredients (200ml - ₹449) and the Hair Care Complete Trio with Shampoo & Powder Mask (₹849).
- **Gentle Baby Care Range**: Baby Glowing Soap (Pack of 3 - ₹449), Pure Almond & Kashmir Kesari Baby Massage Oil (₹349), and the Complete 3-Piece Baby Care Bath Hamper (₹799).
- **Signature Value Combos**: Pigmentation Day & Night Cream Duo (50g x 2 - ₹799) and the 4-in-1 Complete Glow Routine Bundle (₹749).

### 2. 🎯 Multi-Faceted Filtering & Live Search
- **Category Tabs**: All Products, Handmade Soaps, Face & Skincare, Hair Elixirs, Baby Care, and Value Combos.
- **Concern Filter Chips**: Pigmentation & Dark Spots, Acne & Oily Skin, Dull Skin & Radiance, Hair Fall & Dandruff, and Gentle Baby Care.
- **Real-Time Instant Search**: Fast, debounced search across names, herbs, and benefits with keyboard shortcut (`/`).
- **Sorting Engine**: Featured, Price: Low to High, Price: High to Low, Highest Rated, and Biggest Discount.

### 3. 🔍 Interactive Product Quick View
- Click any card or "Quick View" to open high-resolution gallery view.
- Ingredient breakdown cards detailing botanical roles (e.g. Saffron, Manjistha, Bhringraj, Goat Milk).
- Proven benefits and Ayurvedic application directions.
- Quantity counter with instant "Add to Basket" and direct "WhatsApp Buy".

### 4. 🛒 Interactive Cart Drawer & Dynamic Free Shipping
- Slide-over glassmorphism drawer showing total items and prices.
- **Free Shipping Progress Bar**: Dynamic visual tracker unlocking free express shipping on orders over ₹499 or on combo packs.
- **Promo Coupon System**:
  - `AYURVEDA10`: Applies a 10% discount on entire cart.
  - `ASHWINI50`: Applies flat ₹50 discount for first-time orders.
- Quantity adjustments (+ / -) and item removal with live calculation.

### 5. 💬 1-Click WhatsApp Direct Ordering
- Automatically formats an order message containing itemized products, quantities, prices, discounts, subtotal, and customer delivery address.
- Sends directly to Ashwini Herbal's WhatsApp business hotline (`+91 98450 12345`).

### 6. 💳 Complete Checkout & Order Simulation
- Full checkout form with Name, WhatsApp Mobile, Address, Pincode, City, and State.
- Payment selection: Cash on Delivery (COD) or UPI / Google Pay.
- Animated order confirmation screen with auto-generated Order ID (e.g. `#ASH-89241`) and instant WhatsApp confirmation link.

### 7. 🔮 Interactive Ayurvedic Consultation Quiz
- 30-Second interactive questionnaire assessing primary concerns and skin/hair types.
- Suggests tailored Ayurvedic routine with 1-click bundle addition to cart.

---

## 🚀 How to Run Locally

You can run the store using any standard static server:

### Option A: Using Python (Built-in)
```bash
cd /Users/veritan/Work/ashwini
python3 -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option B: Using Node / npx
```bash
cd /Users/veritan/Work/ashwini
npx serve . -l 3000
```

### Option C: Direct Browser Opening
Simply double-click or open `/Users/veritan/Work/ashwini/index.html` in Safari, Chrome, Edge, or Firefox.

---

## 📁 Project Structure

```
/Users/veritan/Work/ashwini/
├── index.html            # Main semantic storefront HTML5
├── styles.css            # Custom luxury Ayurvedic design system & responsive layout
├── app.js                # E-Commerce state, cart, filter, quiz, modal & WhatsApp engine
├── products.js           # Master product catalog with verified labels, prices & ingredients
├── package.json          # Project metadata & convenience scripts
├── README.md             # Store documentation
└── products/             # Authentic product photography (19 high-res images)
```
