import express from 'express';
import Coupon from '../models/Coupon.js';
import { getDBStatus } from '../config/db.js';
import { COUPONS_DATA } from '../data/productsData.js';

const router = express.Router();

router.post('/apply', async (req, res) => {
  try {
    const { code, subtotal } = req.body;

    if (!code || typeof subtotal !== 'number') {
      return res.status(400).json({ success: false, message: 'Valid code and subtotal are required' });
    }

    const cleanCode = code.trim().toUpperCase();
    let coupon = null;

    if (getDBStatus()) {
      coupon = await Coupon.findOne({ code: cleanCode, isActive: true });
    }

    if (!coupon) {
      coupon = COUPONS_DATA.find(c => c.code === cleanCode);
    }

    if (!coupon) {
      return res.status(404).json({ success: false, message: 'Invalid coupon code. Try AYURVEDA10 or ASHWINI50' });
    }

    if (subtotal < (coupon.minOrder || 0)) {
      return res.status(400).json({
        success: false,
        message: `This coupon requires a minimum basket value of ₹${coupon.minOrder}`
      });
    }

    let discountAmount = 0;
    if (coupon.type === 'percent') {
      discountAmount = Math.round(subtotal * coupon.value);
    } else {
      discountAmount = Math.min(subtotal, coupon.value);
    }

    res.json({
      success: true,
      data: {
        code: coupon.code,
        type: coupon.type,
        value: coupon.value,
        discountAmount,
        desc: coupon.desc || `${coupon.type === 'percent' ? coupon.value * 100 + '%' : '₹' + coupon.value} OFF`
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;

