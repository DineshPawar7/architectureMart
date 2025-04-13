const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

const { CASHFREE_APP_ID, CASHFREE_SECRET_KEY, NODE_ENV } = process.env;
if (!CASHFREE_APP_ID || !CASHFREE_SECRET_KEY) process.exit(1);

const CASHFREE_URL =
  NODE_ENV === "production"
    ? "https://api.cashfree.com/pg/orders"
    : "https://sandbox.cashfree.com/pg/orders";

const WEBHOOK_URL = "https://architecture-mart07.vercel.app/api/webhooks/cashfree-webhook";

router.post("/order", async (req, res) => {
  try {
    const { amount, customer } = req.body;
    if (!amount || !customer) return res.status(400).json({ error: "Invalid request" });

    const { data } = await axios.post(
      CASHFREE_URL,
      {
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id: customer.id,
          customer_email: customer.email,
          customer_phone: customer.phone,
        },
        order_meta: {
          return_url: `${WEBHOOK_URL}?order_id={order_id}&order_token={order_token}`,
          notify_url: WEBHOOK_URL,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "2022-01-01",
          "x-client-id": CASHFREE_APP_ID,
          "x-client-secret": CASHFREE_SECRET_KEY,
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Cashfree order" });
  }
});

module.exports = router;




