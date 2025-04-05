import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./buypage.css";

const API_BASE_URL = "https://architecturemart.onrender.com";

const BuyPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);

  useEffect(() => {
    if (!product) {
      axios
        .get(`${API_BASE_URL}/api/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch(() => {});
    }
  }, [id, product]);

  const handlePayment = async () => {
    if (!product || !product.price) return;
  
    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/cashfree/order`, {
        amount: product.price,
        customer: {
          id: "12345",
          email: "customer@example.com",
          phone: "9876543210",
        },
      });
  
      if (data.payment_link) {
        window.location.href = data.payment_link;
  
        const pdfDownloadUrl = `${API_BASE_URL}/api/products/download-pdf/${product._id}`;
        
        fetch(pdfDownloadUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "design.pdf";
            link.click();
          })
          .catch((err) => console.error("Error downloading PDF", err));
      }
    } catch (error) {
      alert("Payment failed. Please try again.");
    }
  };
  

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="buy-page-container">
      <div className="buy-page-product-card">
        <div className="buy-page-image-slider">
          <Swiper navigation={true} modules={[Navigation]} className="buy-page-product-images">
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={`${API_BASE_URL}/${img}`} alt="Product" className="buy-page-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h1 className="buy-page-product-name">{product.title}</h1>
        <p className="buy-page-product-description">{product.description}</p>
        <p className="buy-page-price">₹{product.price}</p>

        <button className="buy-page-buy-button" onClick={handlePayment}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BuyPage;
