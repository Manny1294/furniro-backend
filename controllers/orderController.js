// Import the Order model
const Order = require("../models/Order");

let dummyUserId = 1;
// Create a new order
const createOrder = async (req, res) => {
  try {
    // Get the order data from the request body
    // const { userId, products, total } = req.body;
    const { products, total } = req.body;

    // Make sure required fields are present
    if (!products || !total) {
      return res
        .status(400)
        .json({ message: "products, and total are required" });
    }

    // Create and save the new order(JSON array of items)
    const newOrder = await Order.create({
      userId: dummyUserId++,
      products,
      total,
    });

    // Respond with success and the created order
    res.status(201).json({
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll(); // fetch all orders from DB
    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Export the controller
module.exports = { createOrder, getAllOrders };
