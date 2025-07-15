// Import jsonwebtoken to verify tokens
const jwt = require("jsonwebtoken");

// Middleware function to check JWT token
function auth(req, res, next) {
  // Get token from Authorization header (format: "Bearer <token>")
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // If no token, return 401 error
  if (!token) {
    return res.status(401).json({ message: "Please log in" });
  }

  // Verify token with JWT_SECRET
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Store user ID from token in req.user
    req.user = decoded;
    // Proceed to next middleware/route
    next();
  } catch (error) {
    // If token is invalid, return 401 error
    return res.status(401).json({ message: "Invalid token" });
  }
}

// Export middleware for use in routes
module.exports = auth;
