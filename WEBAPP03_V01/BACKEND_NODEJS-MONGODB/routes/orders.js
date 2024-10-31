// # Routes for managing orders

// # Routes for managing products

// routes/products.js
const express = require('express');
const Order = require('../models/Order'); // Import Product model

const router = express.Router();

// Create a new product
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder); // Return created product
  } catch (error) {
    res.status(400).json({ message: 'Error creating order', error });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products.product');
    res.json(orders); // Return all products
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
});


// Get a single order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user').populate('products.product');
    if (order) {
      res.json(order); // Respond with found order
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving order', error });
  }
});

module.exports = router;
