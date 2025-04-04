import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#481E14] text-white text-center py-6">
      <h1 className="text-lg font-semibold">
        All Right Reserved &copy;{" "}
        <a
          href="https://www.linkedin.com/in/dineshpawar07/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-orange-400 transition-colors duration-300"
        >
          Dinesh Pawar
        </a>
      </h1>

      <p className="mt-3 space-x-4 text-sm sm:text-base">
        <Link
          to="/about"
          className="hover:underline hover:text-orange-400 transition-colors duration-300"
        >
          About
        </Link>
        <span>|</span>
        <Link
          to="/contact"
          className="hover:underline hover:text-orange-400 transition-colors duration-300"
        >
          Contact
        </Link>
        <span>|</span>
        <Link
          to="/policy"
          className="hover:underline hover:text-orange-400 transition-colors duration-300"
        >
          Policy
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
