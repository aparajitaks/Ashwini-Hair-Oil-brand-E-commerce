import express from 'express';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import Order from '../models/Order.js';
import { getDBStatus } from '../config/db.js';

const router = express.Router();

// Helper to get Razorpay instance
const getRazorpayInstance = () => {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return null;
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret
  });
};

// GET /api/payment/config - Expose Razorpay Key ID and status to frontend
router.get('/config', (req, res) => {
  const keyId = process.env.RAZORPAY_KEY_ID || '';
  res.json({
    isConfigured: Boolean(keyId && process.env.RAZORPAY_KEY_SECRET),
    keyId: keyId,
    partnerAccountId: process.env.RAZORPAY_ACCOUNT_ID || null
  });
});

// POST /api/payment/create-order - Create Razorpay order
router.post('/create-order', async (req, res) => {
  try {
    const { amount, receipt, notes = {} } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    const rzp = getRazorpayInstance();
    if (!rzp) {
      return res.status(500).json({
        error: 'Razorpay is not configured yet. Please provide RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in server/.env'
      });
    }

    const options = {
      amount: Math.round(amount * 100), // Razorpay takes amount in paise (1 INR = 100 paise)
      currency: 'INR',
      receipt: receipt || `rcpt_${Date.now()}`,
      notes: {
        store: 'Ashwini Herbal',
        ...notes
      }
    };

    // If Partner Route with Linked Sub-merchant Account ID is configured
    if (process.env.RAZORPAY_ACCOUNT_ID) {
      options.transfers = [
        {
          account: process.env.RAZORPAY_ACCOUNT_ID,
          amount: Math.round(amount * 100),
          currency: 'INR',
          on_hold: 0
        }
      ];
    }

    const razorpayOrder = await rzp.orders.create(options);

    res.status(200).json({
      success: true,
      order: razorpayOrder,
      keyId: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    console.error('Razorpay Create Order Error:', error);
    res.status(500).json({
      error: error.message || 'Failed to create Razorpay order'
    });
  }
});

// POST /api/payment/verify - Verify HMAC signature after frontend checkout
router.post('/verify', async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderDetails
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing required payment verification fields' });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return res.status(500).json({ error: 'Razorpay secret key not configured on server' });
    }

    // Verify cryptographic signature
    const hmac = crypto.createHmac('sha256', keySecret);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest('hex');

    const isSignatureValid = generatedSignature === razorpay_signature;

    if (!isSignatureValid) {
      return res.status(400).json({
        success: false,
        error: 'Invalid payment signature. Payment verification failed.'
      });
    }

    // Payment is authentic & verified! Now save order to database
    let savedOrder = null;
    const orderId = `ASH-${Date.now().toString().slice(-6)}`;

    if (orderDetails && getDBStatus()) {
      try {
        const newOrder = new Order({
          orderId,
          items: orderDetails.items || [],
          customer: orderDetails.customer || {},
          pricing: orderDetails.pricing || {},
          paymentMethod: 'ONLINE_RAZORPAY',
          paymentStatus: 'PAID',
          transactionId: razorpay_payment_id,
          orderStatus: 'CONFIRMED'
        });

        savedOrder = await newOrder.save();
      } catch (dbErr) {
        console.error('Failed to save order to MongoDB:', dbErr.message);
      }
    }

    res.status(200).json({
      success: true,
      message: 'Payment verified successfully! Order confirmed.',
      orderId: savedOrder?.orderId || orderId,
      paymentId: razorpay_payment_id
    });
  } catch (error) {
    console.error('Razorpay Verification Error:', error);
    res.status(500).json({
      error: error.message || 'Payment verification processing failed'
    });
  }
});

export default router;
