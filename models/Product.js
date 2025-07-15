// models/Product.js
// Defines how a "Product" looks in the database (name, price, description, etc.).

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT, // Used float for decimal values
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating_rate: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    rating_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "products", // Matches the exact table name in PostgreSQL
    schema: "public", // Matches the default schema in your database
    timestamps: true, // Yes createdAt/updatedAt columns in your table
  }
);

module.exports = Product;
