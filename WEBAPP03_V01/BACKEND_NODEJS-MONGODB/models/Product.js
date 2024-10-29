// models/Product.js
const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },           // Name of the product, required field
  description: { type: String },                    // Description of the product
  price: { type: Number, required: true },          // Price of the product, required field
  inStock: { type: Boolean, default: true },        // Boolean indicating if the product is in stock
  category: { type: String },                       // Optional category for the product
  createdAt: { type: Date, default: Date.now }      // Timestamp of creation, default is current date
});

// Export the product model
module.exports = mongoose.model('Product', productSchema);
