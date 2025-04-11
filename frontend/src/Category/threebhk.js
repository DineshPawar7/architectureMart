import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
 

const Threebhk = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/products`) 
      .then((res) => {
        console.log("Fetched Products:", res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err)); // Error handling
  }, []);

  const addToCart = (product) => {
    const fullImagePath = product.images && product.images.length > 0
      ? product.images[0]
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

  const getImageUrl = (imagePath) => {
    if (imagePath) {
      if (imagePath.startsWith("https://") || imagePath.startsWith("http://")) {
        return imagePath;
      }
      return `${API_BASE_URL}/${imagePath.replace(/\\/g, "/")}`;
    }
    return "https://via.placeholder.com/150";
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        LATEST 1BHK LISTINGS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No products available</p>
        ) : (
          products.map((product) => {
            const imageUrl = getImageUrl(product.images[0]); 

            return (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <img
                  src={imageUrl}
                  alt={product.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 flex flex-col gap-2">
                  <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-sm text-gray-600">{product.description.slice(0, 100)}...</p>
                  <p className="text-lg font-bold text-green-700">₹{product.price}</p>

                  <div className="flex justify-between gap-3 mt-4">
                    <button
                      onClick={() =>
                        navigate(`/buypage/${product._id}`, { state: { product } })
                      }
                      className="bg-primaryColor hover:bg-hoverColor text-white px-4 py-2 rounded-lg transition duration-200"
                    >
                      See More
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-hoverColor hover:bg-primaryColor text-white px-4 py-2 rounded-lg transition duration-200"
                    >
                      Add to Cart 🛒
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};



export default Threebhk;
