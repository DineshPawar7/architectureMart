import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../buypage/buypage.css";

const product = {
  name: "Digital Marketing Guide",
  images: [
    "https://m.media-amazon.com/images/I/711AeOIZxjL._SX522_.jpg",
    "https://www.contractorbhai.com/wp-content/uploads/2012/08/space-saving-floor-plan-for-1-bhk-.jpg",
    "https://m.media-amazon.com/images/I/711AeOIZxjL._SX522_.jpg",  // Fixed this URL
  ],
  description: "A complete guide to mastering digital marketing.",
  price: "499",
  pdfUrl: "/downloads/digital-marketing-guide.pdf",
};


const BuyPage = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    const options = {
      key: "my_empty_key{ket_pest_here}",
      amount: product.price * 100,
      currency: "INR",
      name: product.name,
      description: "Secure Payment",
      handler: function (response) {
        alert("Payment Successful!");
        window.location.href = product.pdfUrl;
      },
      prefill: {
        name: "Rushi",
        email: "rushi@example.com",
      },
      theme: {
        color: "#f2a900",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return (
    <>
    <div className="buy-page-container">
      <div className="buy-page-product-card">
        {/* Image Slider */}
        <div className="buy-page-image-slider">
          <Swiper navigation={true} modules={[Navigation]} className="buy-page-product-images">
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt="Product" className="buy-page-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Name */}
        <h1 className="buy-page-product-name">{product.name}</h1>

        {/* Product Description */}
        <p className="buy-page-product-description">{product.description}</p>

        {/* Product Price and Buy Button */}
        <div className="buy-page-price-and-buy">
          <p className="buy-page-price">₹{product.price}</p>
          <button
            onClick={handlePayment}
            disabled={loading}
            className={`buy-page-buy-button ${loading ? "disabled" : ""}`}
          >
            {loading ? "Processing..." : "Buy Now"}
          </button>
        </div>
      </div>
    </div>

</>
   
  );
};

export default BuyPage;
