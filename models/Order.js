// Import Sequelize and database connection
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

// Define Order model
const Order = sequelize.define("Order", {
  // Order ID
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // User ID (links to Users)
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,

    // references: {
    //   model: User,
    //   key: "id", // this ensures an order must belong to a  user by matching the id with the users id
    // },
  },
  // Products array (e.g., [{ productId: 1, price: 25.00, quantity: 2, subtotal: 50.00 }])
  products: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  // Total cost (sum of subtotals, e.g., 75.00)
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Export model
module.exports = Order;
