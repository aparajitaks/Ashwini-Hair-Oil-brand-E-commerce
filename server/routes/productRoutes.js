import express from 'express';
import Product from '../models/Product.js';
import { getDBStatus } from '../config/db.js';
import {
  PRODUCTS_DATA,
  CATEGORIES_DATA,
  CONCERNS_DATA,
  TESTIMONIALS_DATA,
  FAQS_DATA
} from '../data/productsData.js';

const router = express.Router();

// GET /api/products - List products with search, category, concern, and sort
router.get('/products', async (req, res) => {
  try {
    const { category, concern, q, sort } = req.query;

    if (getDBStatus()) {
      const filter = {};

      if (category && category !== 'all') {
        filter.category = category;
      }

      if (concern && concern !== 'all') {
        filter.concerns = concern;
      }

      if (q && q.trim()) {
        const regex = new RegExp(q.trim(), 'i');
        filter.$or = [
          { name: regex },
          { subtitle: regex },
          { tagline: regex },
          { description: regex },
          { 'keyIngredients.name': regex }
        ];
      }

      let query = Product.find(filter);

      if (sort === 'price-asc') query = query.sort({ price: 1 });
      else if (sort === 'price-desc') query = query.sort({ price: -1 });
      else if (sort === 'rating') query = query.sort({ rating: -1 });

      const products = await query.exec();
      return res.json({ success: true, count: products.length, data: products });
    }

    // Memory Fallback
    let list = [...PRODUCTS_DATA];

    if (category && category !== 'all') {
      list = list.filter(p => p.category === category);
    }

    if (concern && concern !== 'all') {
      list = list.filter(p => p.concerns && p.concerns.includes(concern));
    }

    if (q && q.trim()) {
      const term = q.trim().toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.subtitle.toLowerCase().includes(term) ||
        p.tagline.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.keyIngredients.some(ing => ing.name.toLowerCase().includes(term))
      );
    }

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (sort === 'discount') {
      list.sort((a, b) => {
        const discA = (a.originalPrice - a.price) / a.originalPrice;
        const discB = (b.originalPrice - b.price) / b.originalPrice;
        return discB - discA;
      });
    }

    return res.json({ success: true, count: list.length, data: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/products/:id - Single product details
router.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (getDBStatus()) {
      const product = await Product.findOne({ id });
      if (product) return res.json({ success: true, data: product });
    }

    const item = PRODUCTS_DATA.find(p => p.id === id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    return res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/categories
router.get('/categories', (req, res) => {
  res.json({ success: true, data: CATEGORIES_DATA });
});

// GET /api/concerns
router.get('/concerns', (req, res) => {
  res.json({ success: true, data: CONCERNS_DATA });
});

// GET /api/testimonials
router.get('/testimonials', (req, res) => {
  res.json({ success: true, data: TESTIMONIALS_DATA });
});

// GET /api/faqs
router.get('/faqs', (req, res) => {
  res.json({ success: true, data: FAQS_DATA });
});

export default router;

