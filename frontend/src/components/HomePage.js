import React from "react";
import Aboutphoto from '../assets//about-banner.png';
import '../style/HomePage.css';
import Homephoto from '../assets/home-photo.png';
import { motion } from 'framer-motion';
import { IoMdStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const services = [
    { id: 1, title: "Home Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3i1jpJLXqxV-RpdvAe0yT2l-NdXgpq8UBCQ&s" },
    { id: 2, title: "Office Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFFWRZHjNJJoDAJtSWxampNoRbs1vg9Rf9A&s" },
    { id: 3, title: "Shop Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtim1bELlwAkWpb9df8FbQLXDFFy7Pp2hRAA&s" }
  ];

  const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    localStorage.setItem('redirectProductId', productId);

    navigate('/login');
  }

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
          {services.map((service) => (
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
              <button
                className="buy-button"
                onClick={() => handleBuyNow(service.id)}
              >
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="testimonial-main-container">
        <h1>What Our Clients Say</h1>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"Amazing designs that truly capture our vision. The process was smooth, and the results exceeded our expectations!"</p>
            <div className="user-info">
              <img src="https://img.freepik.com/free-photo/lifestyle-scene-anime-style-with-person-doing-daily-tasks_23-2151002606.jpg" alt="User Logo" className="user-logo" />
              <div>
                <h4>Rohan Lokhande</h4>
                <p className="profession">Client</p>
              </div>
            </div>
            <div className="stars"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
          </div>
          <div className="testimonial">
            <p>"Their attention to detail and creativity transformed our home. Professional and efficient throughout the entire project."</p>
            <div className="user-info">
              <img src="https://t4.ftcdn.net/jpg/06/22/22/17/360_F_622221708_Gg16ZdaNSixeaIORq9MuuT4w9VWTkYw4.jpg" alt="User Logo" className="user-logo" />
              <div>
                <h4>Rushikesh Satdive</h4>
                <p className="profession">Cad Designer</p>
              </div>
            </div>
            <div className="stars"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
          </div>
          <div className="testimonial">
            <p>"We’re passionate about designing homes that blend functionality with beauty, always focusing on our clients' unique needs."</p>
            <div className="user-info">
              <img src="https://avatars.githubusercontent.com/u/175672643?v=4" alt="User Logo" className="user-logo" />
              <div>
                <h4>Dinesh Pawar</h4>
                <p className="profession">Software Engineer</p>
              </div>
            </div>
            <div className="stars"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><CiStar /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
