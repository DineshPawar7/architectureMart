import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/products`)
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
  <img key={index} src={`${API_BASE_URL}${image.replace(/\\/g, "/")}`} alt="Product" width="200" />

))}

    
  </div>
))}

    </div>
  );
};

export default Products;
