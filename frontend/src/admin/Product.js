import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://architecturemart.onrender.com/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h2>Products List</h2>
      {products.map((product) => (
  <div key={product._id}>
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <p>₹{product.price}</p>
    
    {product.images.map((image, index) => (
  <img key={index} src={`https://architecturemart.onrender.com${image.replace(/\\/g, "/")}`} alt="Product" width="200" />

))}

    
  </div>
))}

    </div>
  );
};

export default Products;
