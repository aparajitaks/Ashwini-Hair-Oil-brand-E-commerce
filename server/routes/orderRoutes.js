import express from 'express';
import Order from '../models/Order.js';
import { getDBStatus } from '../config/db.js';
import { PRODUCTS_DATA, COUPONS_DATA } from '../data/productsData.js';

const router = express.Router();
const WHATSAPP_NUMBER = '919845012345';

// Memory storage fallback
const inMemoryOrders = new Map();

// POST /api/orders - Create an order
router.post('/', async (req, res) => {
  try {
    const { items, customer, couponCode, paymentMethod } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Cart cannot be empty' });
    }

    if (!customer || !customer.name || !customer.phone || !customer.address) {
      return res.status(400).json({ success: false, message: 'Customer details (name, phone, address) are required' });
    }

    // Verify products and compute subtotal
    let subtotal = 0;
    let hasCombo = false;
    const verifiedItems = [];

    for (const item of items) {
      const prod = PRODUCTS_DATA.find(p => p.id === item.productId || p.id === item.id);
      if (!prod) continue;

      const qty = Math.max(1, parseInt(item.quantity) || 1);
      subtotal += prod.price * qty;

      if (prod.badge && (prod.badge.includes('Pack of 3') || prod.badge.includes('Bundle') || prod.badge.includes('Trio') || prod.badge.includes('Kit'))) {
        hasCombo = true;
      }

      verifiedItems.push({
        productId: prod.id,
        name: prod.name,
        price: prod.price,
        quantity: qty,
        netQuantity: prod.netQuantity,
        image: prod.image
      });
    }

    if (verifiedItems.length === 0) {
      return res.status(400).json({ success: false, message: 'No valid products in cart' });
    }

    // Calculate coupon discount
    let discount = 0;
    if (couponCode) {
      const coupon = COUPONS_DATA.find(c => c.code === couponCode.trim().toUpperCase());
      if (coupon && subtotal >= (coupon.minOrder || 0)) {
        if (coupon.type === 'percent') {
          discount = Math.round(subtotal * coupon.value);
        } else {
          discount = Math.min(subtotal, coupon.value);
        }
      }
    }

    // Shipping fee calculation: Free on >= 499 or on combo packs
    const shippingFee = (subtotal >= 499 || hasCombo) ? 0 : 60;
    const grandTotal = Math.max(0, subtotal - discount + shippingFee);

    const orderId = 'ASH-' + Math.floor(100000 + Math.random() * 900000);

    // Build WhatsApp message URL
    let waMsg = `*NEW ORDER #${orderId} - ASHWINI HERBAL*\n`;
    waMsg += `---------------------------------\n`;
    verifiedItems.forEach((it, i) => {
      waMsg += `${i + 1}. *${it.name}* (${it.netQuantity})\n   Qty: ${it.quantity} x ₹${it.price} = ₹${it.quantity * it.price}\n`;
    });
    waMsg += `---------------------------------\n`;
    waMsg += `*Subtotal:* ₹${subtotal}\n`;
    if (discount > 0) waMsg += `*Discount (${couponCode}):* -₹${discount}\n`;
    waMsg += `*Delivery:* ${shippingFee === 0 ? 'FREE' : '₹' + shippingFee}\n`;
    waMsg += `*TOTAL AMOUNT:* ₹${grandTotal}\n`;
    waMsg += `---------------------------------\n`;
    waMsg += `*Customer:* ${customer.name}\n`;
    waMsg += `*Phone:* ${customer.phone}\n`;
    waMsg += `*Address:* ${customer.address}, ${customer.city || ''}, ${customer.state || ''} - ${customer.pincode || ''}\n`;
    waMsg += `*Payment:* ${paymentMethod || 'COD'}\n`;
    waMsg += `\nPlease confirm dispatch!`;

    const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

    const orderDoc = {
      orderId,
      items: verifiedItems,
      customer: {
        name: customer.name,
        phone: customer.phone,
        address: customer.address,
        city: customer.city || 'Bengaluru',
        state: customer.state || 'Karnataka',
        pincode: customer.pincode || '560001'
      },
      subtotal,
      discount,
      couponCode: couponCode || null,
      shippingFee,
      grandTotal,
      paymentMethod: paymentMethod || 'COD',
      status: 'Placed',
      whatsAppUrl,
      createdAt: new Date()
    };

    if (getDBStatus()) {
      await Order.create(orderDoc);
    } else {
      inMemoryOrders.set(orderId, orderDoc);
    }

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: orderDoc
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/orders/:id - Fetch order details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (getDBStatus()) {
      const order = await Order.findOne({ orderId: id });
      if (order) return res.json({ success: true, data: order });
    }

    const memOrder = inMemoryOrders.get(id);
    if (memOrder) {
      return res.json({ success: true, data: memOrder });
    }

    res.status(404).json({ success: false, message: 'Order not found' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;

