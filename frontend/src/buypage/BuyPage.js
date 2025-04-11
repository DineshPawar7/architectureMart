import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const API_BASE_URL = "https://architecturemart.onrender.com";

const BuyPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!product) {
      axios
        .get(`${API_BASE_URL}/api/products/${id}`)
        .then((res) => {
          setProduct(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching product details:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id, product]);

  const handlePayment = async () => {
    if (!product || !product.price) return;
  
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const customerEmail = loggedInUser?.email;
  
    if (!customerEmail) {
      alert("User email not found. Please log in.");
      return;
    }
  
    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/cashfree/order`, {
        amount: product.price,
        productId: product._id,
        email: customerEmail,
      });
  
      if (data.payment_link) {
        window.location.href = data.payment_link;
      }
    } catch (error) {
      alert("Payment failed. Please try again.");
    }
  };
  
  
  if (loading) return <h1>Loading...</h1>;

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center">
        <div className="w-full h-96 relative mb-4 overflow-hidden rounded-lg">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-full h-full"
          >
            {product.images.map((img, index) => {
              const imageUrl = img.startsWith("https://")
                ? img
                : `${API_BASE_URL}/${img.replace(/\\/g, "/")}`;
              return (
                <SwiperSlide key={index}>
                  <img
                    src={imageUrl}
                    alt={`Product ${index}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
        <p className="text-sm text-gray-600 mb-6">{product.description}</p>
        <p className="text-lg font-bold text-gray-800 mb-6">₹{product.price}</p>

        <button
          className="w-full py-4 text-xl font-semibold text-white bg-[#481E14] rounded-lg hover:bg-[#3e180f] transition-colors duration-300"
          onClick={handlePayment}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BuyPage;
