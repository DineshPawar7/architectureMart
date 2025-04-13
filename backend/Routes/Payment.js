const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Order = require('../Models/Order');  // Assuming your Order model is here

router.post("/cashfree/order", async (req, res) => {
  console.log("Request Body:", req.body);  // Log request body

  try {
    const { amount, email, productId } = req.body;

    if (!amount || !email || !productId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const order_id = uuidv4();

    await Order.create({
      order_id,
      email,
      product_id: productId,
      status: "PENDING",
    });

    const payment_link = `https://cashfree.com/pay/${order_id}`;

    res.json({ payment_link });
  } catch (err) {
    console.error("Error in /cashfree/order:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
