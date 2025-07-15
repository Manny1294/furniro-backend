// Where you write the logic for each route (like fetching all products, adding a new product).

const Product = require("../models/Product"); // Import Product model

// Create a new product
const createProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      description,
      category,
      image,
      rating_rate,
      rating_count,
    } = req.body;

    if (!title || !price || !category || !image) {
      return res.status(400).json({
        message: "Missing required fields: title, price, category, image",
      });
    }

    // Create the product
    const newProduct = await Product.create({
      title,
      price,
      description,
      category,
      image,
      rating_rate,
      rating_count,
    });

    return res.status(201).json(newProduct); // Return the created product
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    // Raw SQL to confirm DB connection
    const rawResult = await Product.sequelize.query("SELECT * FROM products", {
      type: Product.sequelize.QueryTypes.SELECT,
    });

    console.log("✅ Raw SQL result:", rawResult); // See which DB returns results

    // Optional: fallback to Sequelize method
    const products = await Product.findAll();

    return res.status(200).json(products); // Return all products
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product); // Return the found product
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      price,
      description,
      category,
      image,
      ratingRate,
      ratingCount,
    } = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update the product
    product.title = title || product.title;
    product.price = price || product.price;
    product.description = description || product.description;
    product.category = category || product.category;
    product.image = image || product.image;
    product.rating_rate = ratingRate || product.rating_rate;
    product.rating_count = ratingCount || product.rating_count;

    await product.save(); // Save updated product

    return res.status(200).json(product); // Return the updated product
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.destroy(); // Delete the product

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
