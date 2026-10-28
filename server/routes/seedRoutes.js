import express from 'express';
import Product from '../models/Product.js';
import Coupon from '../models/Coupon.js';
import { getDBStatus } from '../config/db.js';
import { PRODUCTS_DATA, COUPONS_DATA } from '../data/productsData.js';

const router = express.Router();

router.post('/seed', async (req, res) => {
  try {
    if (!getDBStatus()) {
      return res.status(503).json({
        success: false,
        message: 'MongoDB is not currently connected. Start MongoDB to seed persistent database.'
      });
    }

    await Product.deleteMany({});
    await Coupon.deleteMany({});

    const seededProducts = await Product.insertMany(PRODUCTS_DATA);
    const seededCoupons = await Coupon.insertMany(COUPONS_DATA);

    res.json({
      success: true,
      message: 'Database seeded successfully',
      productsCount: seededProducts.length,
      couponsCount: seededCoupons.length
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;

