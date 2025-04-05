# 🏠 ArchitectureMart - The Home Architecture Design Marketplace

**ArchitectureMart** is a full-stack MERN (MongoDB, Express, React, Node.js) based web application built for selling **home architecture designs**. This project allows non-tech users (like designers or architects) to easily upload and sell their house design blueprints online, while customers can browse, purchase, and download designs with ease.

## 🛠️ About the Project

This platform was built for a friend who wanted a simple yet powerful way to sell architecture designs online. It includes:

- A secure **admin panel** (protected with a password known only to the site owner).
- A smooth **user experience** where anyone can:
  - View all available home designs
  - Add designs to cart
  - Make payments securely
  - Automatically download the purchased design as a **PDF**
- Complete **responsive design** for mobile, tablet, and desktop.



## 🔥 Key Features

- 🔐 **Password-Protected Admin Panel**
- 🧾 **Add to Cart & Checkout System**
- 💳 **Cashfree Payment Gateway Integration**
- 📥 **Auto PDF Download on Successful Purchase**
- 👤 **User Authentication**
- 🧑‍💻 **Secure Admin Access**
- 📱 **Fully Responsive Design**



## 🧱 Tech Stack

### 🔧 Frontend:
- React.js
- React Router
- Axios
- TailwindCSS
- Redux
- JWT for authentication

### 🚀 Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Cashfree Payments SDK
- Multer



## 🌐 How It Works

1. **Visitors** can browse all available home designs.
2. To **purchase**, users must log in or sign up.
3. Upon successful **payment**, a PDF version of the design is auto-downloaded.
4. **Admins** can log in using a secret password and upload new products easily.
5. All data is managed through MongoDB.



## 📁 Example `.env` Files

### 🔐 Frontend (`frontend/.env`)
```env
REACT_APP_ADMIN_PASSWORD=example_password
REACT_APP_CASHFREE_APP_ID=your_cashfree_app_id

```


### 🔐 Backend (`backend/.env`)
```env
MONGO_CONN=mongo_conn_string
PORT=5000
JWT_SECRET=example_secret
CASHFREE_APP_ID=example_cashfree_app_id
CASHFREE_SECRET_KEY=example_secret_key
CASHFREE_API_URL=example_api_key
WEBHOOK_URL=example_webhook_url_com
NODE_ENV=_test_or_production
