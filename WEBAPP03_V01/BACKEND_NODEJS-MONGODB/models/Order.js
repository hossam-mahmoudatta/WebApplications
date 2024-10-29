// models/Order.js
const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User reference
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Product reference
      quantity: { type: Number, required: true } // Quantity of each product in the order
    }
  ],
  status: { type: String, default: 'Pending' }, // Order status, default is "Pending"
  totalAmount: { type: Number, required: true }, // Total cost of the order
  createdAt: { type: Date, default: Date.now }   // Timestamp of creation
});

// Export the order model
module.exports = mongoose.model('Order', orderSchema);
