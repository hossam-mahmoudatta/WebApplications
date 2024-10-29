// models/User.js
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Username, must be unique
  password: { type: String, required: true },               // Password, required field
  email: { type: String, required: true, unique: true },    // Email, must be unique
  role: { type: String, default: 'customer' },              // User role, default is "customer"
  createdAt: { type: Date, default: Date.now }              // Timestamp of creation
});

// Export the user model
module.exports = mongoose.model('User', userSchema);
