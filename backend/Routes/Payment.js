const express = require("express");
const router = express.Router();
const Order = require("../Models/Order");
const { v4: uuidv4 } = require("uuid");

router.post("/cashfree/order", async (req, res) => {
  const { amount, email, productId } = req.body;
  const order_id = uuidv4();

  await Order.create({
    order_id,
    email,
    product_id: productId,
    status: "PENDING",
  });

  const payment_link = `https://cashfree.com/pay/${order_id}`; 

  res.json({ payment_link });
});

module.exports = router;
