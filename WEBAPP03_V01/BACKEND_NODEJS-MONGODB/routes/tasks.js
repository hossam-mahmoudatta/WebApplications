// tasks.js
const Express = require("express");
const router = Express.Router();

// Define a route to fetch all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await req.db.collection("tasks").find().toArray();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
});

module.exports = router;
