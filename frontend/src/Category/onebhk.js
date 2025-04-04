import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Onebhk = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://architecturemart.onrender.com/api/products")
      .then((res) => {
        console.log("Fetched Products:", res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
    const fullImagePath =
      product.images && product.images.length > 0
        ? `https://architecturemart.onrender.com/${product.images[0].replace(/\\/g, "/")}`
        : null;
  
    const cartItem = {
      _id: product._id,
      title: product.title,
      description: product.description,
      price: product.price,
      image: fullImagePath,
    };
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  };
  

  return (
    <div className="product-section">
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={`https://architecturemart.onrender.com/${product.images[0].replace(/\\/g, "/")}`}
                alt={product.title}
              />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>₹{product.price}</p>
              <button onClick={() => navigate(`/buypage/${product._id}`, { state: { product } })}>
                See More
              </button>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Onebhk;
