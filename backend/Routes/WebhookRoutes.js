const express = require("express");
const router = express.Router();
const Order = require("../Models/Order");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

router.post("/cashfree-webhook", async (req, res) => {
  try {
    const { order_id, order_status, transaction_id } = req.body;

    if (order_status === "PAID") {
      const order = await Order.findOne({ order_id });

      if (!order) {
        return res.status(404).json({ success: false, message: "Order not found" });
      }

      order.status = "PAID";
      order.transaction_id = transaction_id;
      await order.save();

      const pdfPath = path.join(__dirname, "../files/design.pdf"); 

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: '"Architecture Mart" <no-reply@architecturemart.com>',
        to: order.email,
        subject: "Your Design PDF",
        text: "Thanks for your purchase. Your design is attached below.",
        attachments: [
          {
            filename: "design.pdf",
            path: pdfPath,
          },
        ],
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Webhook Error:", error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;




