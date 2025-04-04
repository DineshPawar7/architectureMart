import React from "react";
import Aboutphoto from '../assets//about-banner.png';
import Homephoto from '../assets/home-photo.png';
import { motion } from 'framer-motion';
import { IoMdStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const services = [
    { id: 1, title: "Home Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3i1jpJLXqxV-RpdvAe0yT2l-NdXgpq8UBCQ&s", src:'/category' },
    { id: 2, title: "Office Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFFWRZHjNJJoDAJtSWxampNoRbs1vg9Rf9A&s", src:'/category' },
    { id: 3, title: "Shop Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtim1bELlwAkWpb9df8FbQLXDFFy7Pp2hRAA&s", src:'/category' }
  ];

  const navigate = useNavigate();



  return (
    <div id="homepage">
      <div className="flex flex-wrap justify-center items-center m-[5vw] p-[2vw] bg-[#481E14] rounded-[3vw]">
      <div className="flex-1 p-[2vw]">
        <h1 className="uppercase text-[6vw] text-[#EEE4B1] pl-[2vw] font-sans">Let's</h1>
        <h1 className="uppercase text-[6vw] text-[#EEE4B1] pl-[2vw] font-sans">Explore</h1>
        <h1 className="uppercase text-[6vw] text-[#EEE4B1] pl-[2vw] font-sans">Unique</h1>
        <h1 className="uppercase text-[6vw] text-[#EEE4B1] pl-[2vw] font-sans">Designs</h1>
        <p className="mt-[1vw] ml-[2vw] text-[1.5vw] text-[#8C6A5D]">
          Discover unique architectural designs tailored for your dream home
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center -mb-[40px]">
        <img
          src={Homephoto}
          alt="Homepage"
          className="w-[35vw] h-[44vw] max-w-full"
        />
      </div>
    </div>

    <section id="about" className="py-16 px-5">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    <figure className="mb-8 lg:mb-0">
      <img
        src={Aboutphoto}
        width="700"
        height="532"
        loading="lazy"
        alt="about banner"
        className="w-full rounded-lg animate-[waveAnim_2s_ease-in-out_infinite_alternate]"
      />
    </figure>

    <div className="text-left lg:text-left w-full">
      <h2 className="text-4xl font-bold mb-6 text-center relative after:content-[''] after:absolute after:bottom-[-16px] after:left-1/2 after:-translate-x-1/2 after:w-2/5 after:h-[5px] after:bg-gradient-to-r after:from-[#EEE4B1] after:to-[#8C6A5D] after:rounded-sm">
        Why Our Agency
      </h2>

      <p className="text-lg text-gray-600 mb-4">
        Our agency specializes in crafting tailored, responsive designs for modern home architecture. We combine expert craftsmanship with cutting-edge technology to deliver secure, innovative, and scalable solutions for your dream home.
      </p>

      <p className="text-lg text-gray-600 mb-6">
        We focus on your satisfaction and provide ongoing support to ensure your architectural vision becomes a stunning reality.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <li className="text-center p-5 border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
          <p className="text-3xl font-bold text-[#8C6A5D] mb-1">01+</p>
          <p className="text-gray-500 text-sm">Satisfied Clients</p>
        </li>
        <li className="text-center p-5 border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
          <p className="text-3xl font-bold text-[#8C6A5D] mb-1">50+</p>
          <p className="text-gray-500 text-sm">Designs Launched</p>
        </li>
        <li className="text-center p-5 border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
          <p className="text-3xl font-bold text-[#8C6A5D] mb-1">2.5+</p>
          <p className="text-gray-500 text-sm">Years Completed</p>
        </li>
      </ul>
    </div>
  </div>
</section>


<div className="py-12 px-4 sm:px-6 lg:px-8 services-section">
  <h1 className="text-3xl text-center font-bold text-[#333] mb-10 services-heading">
    Our Services
  </h1>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 services-container">
    {services.map((service) => (
      <motion.div
        key={service.id}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.05] text-center p-4 service-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-auto rounded-md service-image"
        />
        <h3 className="mt-4 text-lg font-bold text-[#333] service-title">
          {service.title}
        </h3>
        <button
          onClick={() => navigate(service.src)}
          className="mt-4 px-4 py-2 bg-[#8C6A5D] text-white rounded-md hover:bg-[#6d5247] transition-all buy-button"
        >
          More Designs
        </button>
      </motion.div>
    ))}
  </div>
</div>


<div className="max-w-7xl mx-auto px-5 py-20 text-center testimonial-main-container">
      <h1 className="text-4xl font-bold mb-10 text-black">What Our Clients Say</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 testimonial-container">
        {[
          {
            id: 1,
            name: "Rohan Lokhande",
            role: "Client",
            img: "https://img.freepik.com/free-photo/lifestyle-scene-anime-style-with-person-doing-daily-tasks_23-2151002606.jpg",
            review:
              "Amazing designs that truly capture our vision. The process was smooth, and the results exceeded our expectations!",
            stars: 5,
          },
          {
            id: 2,
            name: "Rushikesh Satdive",
            role: "Cad Designer",
            img: "https://t4.ftcdn.net/jpg/06/22/22/17/360_F_622221708_Gg16ZdaNSixeaIORq9MuuT4w9VWTkYw4.jpg",
            review:
              "Their attention to detail and creativity transformed our home. Professional and efficient throughout the entire project.",
            stars: 5,
          },
          {
            id: 3,
            name: "Dinesh Pawar",
            role: "Software Engineer",
            img: "https://avatars.githubusercontent.com/u/175672643?v=4",
            review:
              "We’re passionate about designing homes that blend functionality with beauty, always focusing on our clients' unique needs.",
            stars: 4.5,
          },
        ].map(({ id, name, role, img, review, stars }) => (
          <div
            key={id}
            className="bg-[#481E14] text-white p-6 rounded-xl text-left shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1 testimonial"
          >
            <p className="mb-4">{review}</p>

            <div className="flex items-center gap-4 bg-[#691500] p-3 rounded-full user-info">
              <img
                src={img}
                alt={`${name} profile`}
                className="w-12 h-12 rounded-full object-cover user-logo"
              />
              <div className="user-details">
                <h4 className="font-semibold">{name}</h4>
                <p className="italic text-gray-300 profession">{role}</p>
              </div>
            </div>

            <div className="flex mt-3 text-[#dfff0f] text-xl stars">
              {[...Array(Math.floor(stars))].map((_, i) => (
                <IoMdStar key={i} />
              ))}
              {stars % 1 !== 0 && <CiStar />}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomePage;
