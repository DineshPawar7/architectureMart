const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order_id: { type: String, required: true, unique: true },
  transaction_id: { type: String, required: true },
  status: { type: String, required: true },
  customer_email: { type: String, required: true },
  email: { type: String, required: true },
  product_id: { type: String }, // ✅ ADD THIS
  createdAt: { type: Date, default: Date.now },
});


const Order = mongoose.model("Order", orderSchema);
module.exports = Order;



