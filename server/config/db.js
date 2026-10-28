import mongoose from 'mongoose';
import { PRODUCTS_DATA, COUPONS_DATA } from '../data/productsData.js';
import Product from '../models/Product.js';
import Coupon from '../models/Coupon.js';

let isConnected = false;

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ashwini_herbal';

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 2000 // Quick 2s check
    });

    isConnected = true;
    console.log(`🌿 MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);

    // Auto-seed if database is empty
    await autoSeedDatabase();

    return true;
  } catch (error) {
    console.warn(`⚠️ MongoDB connection skipped (${error.message}).`);
    console.log(`🍃 Express is running with memory fallback. Start MongoDB anytime at: ${mongoURI}`);
    isConnected = false;
    return false;
  }
};

export const getDBStatus = () => isConnected;

export const autoSeedDatabase = async () => {
  if (!isConnected) return;

  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      console.log('🌱 Seeding initial 18 authentic Ashwini Herbal products into MongoDB...');
      await Product.insertMany(PRODUCTS_DATA);
      console.log('✅ Successfully seeded products collection.');
    }

    const couponCount = await Coupon.countDocuments();
    if (couponCount === 0) {
      console.log('🌱 Seeding initial coupons into MongoDB...');
      await Coupon.insertMany(COUPONS_DATA);
      console.log('✅ Successfully seeded coupons collection.');
    }
  } catch (err) {
    console.error('Error during auto-seed:', err.message);
  }
};

