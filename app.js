const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // Import body-parser
const routes = require("./routes/route");

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://ajithkumararun1111:Q7Ls8xZpxl7tT4hS@task-39.nmneued.mongodb.net/zen"
  )
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.error("mongo db is not connect", err));

// Middleware
app.use(bodyParser.json()); // Use body-parser for JSON parsing
app.use(express.json()); // This is optional if you're using Express 4.16.0 and higher

// Use Routes
app.use("/api", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
