// Import Express
const express = require("express");
// Create router
const router = express.Router();
// Import controller
const { createOrder, getAllOrders } = require("../controllers/orderController");

// Import auth middleware
const auth = require("../middleware/auth");

// POST /api/orders
// router.post("/orders", auth, createOrder);
router.post("/orders", createOrder);

//GET /api/orders
router.get("/orders", getAllOrders);
// Export router
module.exports = router;
