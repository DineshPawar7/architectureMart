import React from "react";
import Aboutphoto from '../assets/about-banner.png';
import '../components/style/HomePage.css';
import Homephoto from '../assets/home-photo.png';
import { motion } from 'framer-motion';
import { FaDollarSign, FaHeadset, FaCogs } from 'react-icons/fa';


const HomePage = () => {
  const options = [
    { id: 1, icon: <FaDollarSign />, title: "Budget Friendly", description: "Affordable pricing" },
    { id: 2, icon: <FaHeadset />, title: "24/7 Support", description: "Always available" },
    { id: 3, icon: <FaCogs />, title: "Top Quality Plans", description: "Premium features" },
    
  ];

  const services = [
    { id: 1, title: "Home Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3i1jpJLXqxV-RpdvAe0yT2l-NdXgpq8UBCQ&s" },
    { id: 2, title: "Office Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFFWRZHjNJJoDAJtSWxampNoRbs1vg9Rf9A&s" },
    { id: 3, title: "Shop Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtim1bELlwAkWpb9df8FbQLXDFFy7Pp2hRAA&s" }
  ];


  return (
    
      <div id="homepage">
    <div className="homepage-container">
      <div className="left-section">
        <h1 className="homepage-heading bg-color">Let's</h1>
        <h1 className="homepage-heading">Explore</h1>
        <h1 className="homepage-heading bg-color">Unique</h1>
        <h1 className="homepage-heading">Designs</h1>
        <p className="homepage-description">
        Discover unique architectural designs tailored for your dream home
        </p>
      </div>
      <div className="right-section">
        <img 
          src={Homephoto} 
          alt="Homepage" 
          className="image" 
        />
      </div>
    </div>

    <section className="section about" id="about">
  <div className="container">
    <figure className="about-banner">
      <img src={Aboutphoto} width="700" height="532" loading="lazy" alt="about banner" className="w-100 banner-animation" />
    </figure>

    <div className="about-content">
      <h2 className="h2 section-title underline">Why Our Agency</h2>
      <p className="about-text">
      Our agency specializes in crafting tailored, responsive designs for modern home architecture. We combine expert craftsmanship with cutting-edge technology to deliver secure, innovative, and scalable solutions for your dream home.
      </p>
      <p className="about-text">
      We focus on your satisfaction and provide ongoing support to ensure your architectural vision becomes a stunning reality.
      </p>

      <ul className="stats-list">
        <li className="stats-card">
          <p className="h3 stats-title">01+</p>
          <p className="stats-text">Satisfied Clients</p>
        </li>
        <li className="stats-card">
          <p className="h3 stats-title">50+</p>
          <p className="stats-text">Designs Launched</p>
        </li>
        <li className="stats-card">
          <p className="h3 stats-title">2.5+</p>
          <p className="stats-text">Years Completed</p>
        </li>
      </ul>
    </div>
  </div>
</section>



<div className="services-section">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-container">
        {services.map(service => (
          <motion.div
            key={service.id}
            className="service-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>




<div className="why-choose-section">
      <h2 className="section-heading">Why Choose Us</h2>
      <div className="options-container">
        {options.map((option) => (
          <motion.div
            key={option.id}
            className="option-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: option.id * 0.2 }}
          >
            <div className="icon-container">
              {option.icon}
            </div>
            <h3 className="option-title">{option.title}</h3>
            <p className="option-description">{option.description}</p>
          </motion.div>
        ))}
      </div>
    </div>





    

    
    </div>
    
  );
};


export default HomePage;