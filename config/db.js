const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load .env variables

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Username
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false, // Optional: turn off SQL logging
  }
);

module.exports = sequelize;

sequelize
  .authenticate()
  .then(() => console.log("✅ Connected to local PostgreSQL database"))
  .catch((err) => console.error("❌ Connection error:", err));
