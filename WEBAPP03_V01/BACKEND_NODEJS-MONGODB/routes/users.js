// # Routes for managing users

// routes/users.js
const express = require('express');
const User = require('../models/User'); // Import the User model

const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body); // Create user from request body
    const savedUser = await user.save(); // Save to database
    res.status(201).json(savedUser); // Respond with created user
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all users
    res.json(users); // Respond with all users
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
});

// Get a single user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Retrieve user by ID
    if (user) {
      res.json(user); // Respond with found user
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
});

module.exports = router;
