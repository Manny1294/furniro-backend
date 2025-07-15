const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/db"); // Import the sequelize instance
const productRoutes = require("./routes/productRoutes"); // Import product routes
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Load environment variables from .env
dotenv.config();

// Initialize express app
const app = express();

// Middlewares
app.use(cors()); // Allow Cross-Origin Requests
app.use(express.json()); // Parse incoming JSON requests

// Use product routes
app.use("/api", productRoutes); // All product-related routes will be prefixed with '/api'

//user routes
app.use("/api/auth", userRoutes);

//order routes
app.use("/api", orderRoutes);

//  Test route
app.get("/", (req, res) => {
  res.send("E-Commerce API is running...");
});

// Sync models with the database and start the server
// Test database connection.
sequelize
  .sync({ force: false }) // Avoid dropping existing tables with force: false/ Wont overwrite existing tables.
  .then(() => {
    console.log("Database synced successfully.");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing the database:", err);
  });
