require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");




const app = express();

const cashfreeRoutes = require("./Routes/CashfreeRoutes");
const webhookRoutes = require("./Routes/WebhookRoutes");
const productRoutes = require("./Routes/ProductRoutes");
const authRoutes = require("./Routes/AuthRouter");
const paymentRoutes = require("./Routes/Payment");


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/products", productRoutes);
app.use("/api/cashfree", cashfreeRoutes);
app.use("/api/webhooks", webhookRoutes);
app.use("/auth", authRoutes);
app.use("/api", paymentRoutes);
app.use("/api/orders", paymentRoutes);

const mongo_url = process.env.MONGO_CONN;
if (!mongo_url) {
  console.error("MongoDB connection string is missing! Check .env file.");
  process.exit(1);
}

mongoose
  .connect(mongo_url)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));









