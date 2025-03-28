import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BuyPageOne = () => {
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
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BuyPageOne;
