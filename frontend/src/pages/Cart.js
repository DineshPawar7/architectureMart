import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    axios
      .get("https://architecturemart.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleBuy = (item) => {
    localStorage.setItem("buyItem", JSON.stringify(item));
    navigate("/buyone");
  };

  const getImageForItem = (item) => {
    const matchedProduct = products.find((p) => p._id === item._id);
    if (matchedProduct && matchedProduct.images?.length > 0) {
      return `https://architecturemart.onrender.com/${matchedProduct.images[0].replace(/\\/g, "/")}`;
    }
    return "https://via.placeholder.com/300x200?text=No+Image";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-500">
          Your cart is empty 😕
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={getImageForItem(item)}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-lg text-green-600 font-medium mb-4">
                  ₹{item.price}
                </p>

                <div className="flex justify-between">
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleBuy(item)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
