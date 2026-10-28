import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { connectDB, getDBStatus } from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import couponRoutes from './routes/couponRoutes.js';
import seedRoutes from './routes/seedRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Static product images route
const productsDir = path.resolve(__dirname, '../products');
app.use('/products', express.static(productsDir));

// API Routes
app.use('/api', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api', seedRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Ashwini Herbal Backend API',
    mongoDB: getDBStatus() ? 'Connected' : 'Memory-Fallback-Mode',
    totalProducts: 18
  });
});

// Serve frontend in production if built
const clientDist = path.resolve(__dirname, '../client/dist');
app.use(express.static(clientDist));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api') || req.path.startsWith('/products')) {
    return next();
  }
  res.sendFile(path.join(clientDist, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('Ashwini Herbal MERN API is running. Frontend dev server is active on port 3000/5173.');
    }
  });
});

// Start Express server and connect to DB
app.listen(PORT, async () => {
  console.log(`\n==================================================`);
  console.log(`🌿 Ashwini Herbal MERN Server running on port ${PORT}`);
  console.log(`📡 API Endpoints: http://localhost:${PORT}/api/products`);
  console.log(`🖼️  Product Images: http://localhost:${PORT}/products/`);
  console.log(`==================================================\n`);

  await connectDB();
});

