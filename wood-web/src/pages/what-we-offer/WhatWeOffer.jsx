import React from "react";
import "../../app.css";
import background from "../../assets/backGround.jpg";
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import image3 from "../../assets/image-3.png";
const WhatWeOffer = () => {
return (
    <div
        className="w-full min-h-screen flex flex-col md:flex-row items-center bg-blend-luminosity backdrop-brightness-200 justify-center md:justify-end py-8 md:py-20"
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // backgroundColor: "rgba(0,0, 0, 0.5)", // Adds a dark overlay
            backdropFilter: "brightness(0.7)", // Darkens the background image
        }}
    >
        <div className="bg-[#1d0c05] w-[85%] md:w-[80%] lg:w-[70%] h-auto md:h-[75%] rounded-2xl md:rounded-l-4xl text-white shadow-[0_0_20px_20px_rgba(255,255,255,0.2)] flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 px-6 py-8 md:pl-10 md:pt-10 md:pb-10">
                <div className="md:border-r-2 md:border-white md:pr-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">SOLID</h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">WOOD</h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8">PRODUCTS</h1>

                    <p className="mb-6 text-base md:text-lg">
                        Oak, beech, ash from <br />
                        <span className="font-bold">1700 CZK per m3</span>
                    </p>
                </div>
                <div className="flex justify-center md:justify-start">
                    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-8 md:px-12 rounded-full transition duration-300">
                        Order
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative p-4 md:p-6 lg:p-15">
                <div className="w-full justify-end h-[40%] flex">
                    <img src={image1} className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]" alt="Wood product" />
                </div>
                <div className="flex justify-between h-[60%] w-full">
                    <div>
                        <img src={image2} className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]" alt="Wood product" />
                    </div>
                    <div className="flex items-end">
                        <img src={image3} className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]" alt="Wood product" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default WhatWeOffer;
