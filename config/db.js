// Database connection file.
// connect Node.js to your database (PostgreSQL).

const { Sequelize } = require("sequelize");
require("dotenv").config(); // To load environment variables from .env

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // necessary for some managed DBs like Render
    },
  },
});

module.exports = sequelize;

sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Unable to connect to the database:", err));
console.log("Connected to DB:", process.env.DB_URL || process.env.DB_NAME);
