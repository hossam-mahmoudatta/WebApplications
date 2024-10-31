// # Main entry point for the server

const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const multer = require("multer");
require('dotenv').config();  // Load .env variables


var app = express();
const PORT = 5038;

// Middleware
app.use(cors());           // Enable CORS for cross-origin requests
app.use(express.json());   // Parse JSON requests

const client = new MongoClient(process.env.MONGO_URI);


let db;


// Route Handlers
app.use('/products', require('./routes/products')); // Routes for products
app.use('/users', require('./routes/users')); // Routes for users
app.use('/orders', require('./routes/orders')); // Routes for orders


app.listen(PORT, async () => {
  try {
    await client.connect();  // Connect to MongoDB
    db = client.db("shoppingappDB");  // Specify the database name
    console.log("You're Connected to MongoDB Database Successfully Hossam!");

    // Middleware to inject db instance into requests
    app.use((req, res, next) => {
      req.db = db;
      next();
    });

    // Use the tasks route
    const tasksRouter = require("./routes/tasks");
    app.use("/tasks", tasksRouter);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});

