import React from "react";

const Pricing = () => {
  const redirectToPlan = () => {
    window.location.href = "https://razorpay.me/@darkhub"; // Replace with your URL
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Monthly Plans</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Basic Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full transform transition-all hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic</h2>
          <p className="text-xl font-bold text-primaryColor mb-4">
            ₹200<span className="text-sm text-gray-600">/month</span>
          </p>
          <ul className="text-gray-600 mb-6">
            <li className="mb-2">10 Designs</li>
            <li className="mb-2">Basic Support</li>
            <li className="mb-2">Access to Community</li>
          </ul>
          <button
            className="w-full py-3 bg-primaryColor text-white font-semibold rounded-lg hover:bg-hoverColor transition-colors"
            onClick={redirectToPlan}
          >
            Choose Plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full transform transition-all hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pro</h2>
          <p className="text-xl font-bold text-primaryColor mb-4">
            ₹500<span className="text-sm text-gray-600">/month</span>
          </p>
          <ul className="text-gray-600 mb-6">
            <li className="mb-2">Unlimited Designs</li>
            <li className="mb-2">Priority Support</li>
            <li className="mb-2">Access to All Features</li>
          </ul>
          <button className="w-full py-3 bg-primaryColor text-white font-semibold rounded-lg hover:bg-hoverColor transition-colors">
            Choose Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs w-full transform transition-all hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Premium</h2>
          <p className="text-xl font-bold text-primaryColor mb-4">
            ₹1000<span className="text-sm text-gray-600">/month</span>
          </p>
          <ul className="text-gray-600 mb-6">
            <li className="mb-2">Unlimited Designs</li>
            <li className="mb-2">24/7 Support</li>
            <li className="mb-2">Exclusive Features</li>
          </ul>
          <button className="w-full py-3 bg-primaryColor text-white font-semibold rounded-lg hover:bg-hoverColor transition-colors">
            Choose Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
