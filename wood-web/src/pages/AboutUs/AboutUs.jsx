import React from "react";

import image1 from "../../assets/person-taking-measures-wood 1.png";
import image2 from "../../assets/portrait-young-motivated-carpenter-standing-by-woodworking-machine-his-carpentry-workshop 1.png";
import image3 from "../../assets/image-1.png";
export default function AboutUs() {
  return (
    <div className="bg-[#211f21] min-h-screen flex flex-col justify-center items-start">

        {/* Header */}

        {/* About Us Section */}
        <section className="w-10/12 min-h-10/12 max-w-6xl max-sm:mt-8 bg-[#1d0c05] p-4 md:p-10 rounded-r-4xl text-white  flex flex-col md:flex-row items-center relative shadow-[0px_0px_25px_rgba(255,255,255,0.4)]">
          <div className="text-left md:w-1/2 p-5">
            <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>
            <p className="text-lg text-gray-300">
              <span className="font-bold text-white">BIO CWT</span> - We
              manufacture solid wood products according to individual drawings.
              We make chairs, armchairs, wardrobes, beds, and much more in our
              own workshop, equipped with all the necessary industrial
              equipment.
            </p>
          </div>
          <div className="flex justify-center items-center p-10 relative w-full md:w-[500px] h-[450px]">
            <div className="relative w-full h-full">
              {/* Top Image */}
              <img
                src={image1}
                alt="Measuring wood"
                className="absolute top-0 right-0 w-32 h-32 sm:w-20 sm:h-20 md:w-40 md:h-40"
              />

              {/* Middle Image */}
              <img
                src={image2}
                alt="Worker with wood"
                className="absolute top-1/2 left-10 transform   border-[#1d0c05] border-8 -translate-y-1/2 w-40 md:w-60 rounded-4xl shadow-xl"
              />

              {/* Bottom Image */}
              <img
                src={image3}
                alt="Woodwork drafting"
                className="absolute bottom-0 right-0 w-30 h-30 md:w-40 md:h-40 rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>
      
    </div>
  );
}