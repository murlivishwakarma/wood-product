import React, { useState } from "react";
import background from "../../assets/backGround.jpg";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const NotFoundPage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div
        className="w-full min-h-screen bg-blend-luminosity backdrop-brightness-200"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundColor: "rgba(0,0, 0, 0.5)", // Adds a dark overlay
          // Darkens the background image
          filter: "brightness(0.7)",
            }}
          >
            <div className="w-full h-auto px-4 md:px-8 lg:px-20">
          <div className="flex items-center justify-between h-20">
            <img src={logo} className="w-30 md:w-35" alt="Logo" />
  
            {/* Desktop Menu */}
            <div className="hidden md:flex text-white space-x-6 lg:space-x-20 font-semibold">
              <Link
                to="/gallery"
                className="hover:text-gray-300 transition-colors"
              >
                Gallery
              </Link>
              <Link to="/price" className="hover:text-gray-300 transition-colors">
                Prices
              </Link>
              <Link to="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contacts
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
  
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col text-white space-y-4 py-4">
              <Link
                to="/gallery"
                className="hover:text-gray-300 transition-colors"
              >
                Gallery
              </Link>
              <Link to="/price" className="hover:text-gray-300 transition-colors">
                Prices
              </Link>
              <Link to="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contacts
              </Link>
            </div>
          )}
        </div>
        <div className="w-full h-screen backdrop-brightness-75 flex flex-col items-center justify-center">
        <div className="  text-white text-[200px] fahkwang-bold text-center">
            404
        </div>
        <p className=" fahkwang-bold text-center text-white text-6xl">Woops</p>
        <p className="fahkwang-bold text-center text-[#ffdaba] text-2xl">Oh, You must be lost, there is no such page!</p>
          <button onClick={()=>{
            window.location.href="/"
          }} className="bg-[#728aac] px-8 font-bold py-2 rounded-full text-xl text-white" >
            Go to the home page
          </button>
        </div>
      </div>
  );
};

export default NotFoundPage;
