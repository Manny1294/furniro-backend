import fetch from "node-fetch"; // fallback if needed, or just use global fetch
import sequelize from "./config/db.js";
import Product from "./models/Product.js";

async function seedProducts() {
  try {
    await sequelize.sync(); // no force!

    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    const products = data.map((item) => ({
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
      rating_rate: item.rating.rate,
      rating_count: item.rating.count,
    }));

    await Product.bulkCreate(products);
    console.log("Products restored successfully!");
    process.exit();
  } catch (error) {
    console.error(" Seeding failed:", error);
    process.exit(1);
  }
}

seedProducts();
