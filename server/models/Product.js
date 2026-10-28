import mongoose from 'mongoose';

const keyIngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }
}, { _id: false });

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  subtitle: { type: String },
  category: { type: String, required: true, index: true },
  concerns: [{ type: String, index: true }],
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 4.8 },
  reviewsCount: { type: Number, default: 100 },
  badge: { type: String },
  netQuantity: { type: String },
  tagline: { type: String },
  description: { type: String },
  keyIngredients: [keyIngredientSchema],
  benefits: [{ type: String }],
  howToUse: { type: String },
  features: [{ type: String }],
  inStock: { type: Boolean, default: true }
}, {
  timestamps: true
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;

