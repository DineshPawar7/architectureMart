const express = require("express");
const router = express.Router();
const Order = require("../Models/Order");

router.post("/cashfree-webhook", async (req, res) => {
  try {
    const { order_id, order_status, transaction_id } = req.body;

    if (order_status === "PAID") {
      await Order.create({
        order_id: order_id,
        transaction_id: transaction_id,
        status: "PAID",
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Webhook Error:", error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
