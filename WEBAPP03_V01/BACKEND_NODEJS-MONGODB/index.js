// # Main entry point for the server

var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");
require('dotenv').config();  // Load .env variables


var app = Express();
const PORT = 5038;



const client = new MongoClient(process.env.MONGO_URI);


let db;
app.use(Express.json());

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

// var CONNECTION_STRING = "mongodb+srv://hosa:Hossam123@cluster0.r9pmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


