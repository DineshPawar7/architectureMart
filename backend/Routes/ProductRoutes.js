const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const Product = require("../Models/Product");

const router = express.Router();
const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

 router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithFullImages = products.map(product => ({
      ...product._doc,
      images: product.images.map(imgPath => `https://architecturemart.onrender.com/${imgPath}`),
    }));

    res.json(productsWithFullImages);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});



const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

  
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

 router.post(
  "/upload",
  upload.fields([{ name: "images", maxCount: 3 }, { name: "pdf", maxCount: 1 }]),
  async (req, res) => {
    try {
      const { title, description, price } = req.body;
 
 
       if (!title || !description || !price) {
        return res.status(400).json({ error: "Title, description, and price are required" });
      }

      const newProduct = new Product({
        title,
        description,
        price,
         images: req.files["images"] ? req.files["images"].map(file => `uploads/${file.filename}`) : [],

 
        images: req.files["images"] ? req.files["images"].map((file) => file.path) : [],
         pdf: req.files["pdf"] ? req.files["pdf"][0].path : null,
      });

      await newProduct.save();
       res.status(201).json({ message: "Product uploaded successfully!", product: newProduct });
    } catch (error) {
      console.error("Upload Error:", error);
 
      res.json({ message: "Product uploaded successfully!", product: newProduct });
    } 
  }
);

module.exports = router;
