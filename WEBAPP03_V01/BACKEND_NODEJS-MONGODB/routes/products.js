// # Routes for managing products

// routes/products.js
const express = require('express');
const Product = require('../models/Product'); // Import Product model

const router = express.Router();

// Create a new product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct); // Return created product
  } catch (error) {
    res.status(400).json({ message: 'Error creating product', error });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products); // Return all products
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
});

module.exports = router;
