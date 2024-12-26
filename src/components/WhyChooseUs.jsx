import React from "react";
import { IoLocation } from "react-icons/io5";
import { FcServices } from "react-icons/fc";
import { FaCrown } from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <div className="bg-blue-200 bg-opacity-30 py-12 px-6 mt-12">
      <h2 className="text-3xl font-bold text-center font-serif italic mb-6"><span className="text-yellow-400 font-serif italic">Why</span> <span className="text-blue-600">Choose Us?</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-blue-400 bg-opacity-35 p-6 rounded-lg shadow-lg">
      
          <h3 className="text-2xl text-blue-800 font-serif italic font-semibold"> <IoLocation className="ml-36 text-4xl text-blue-900"></IoLocation> Prime Location</h3>
          <p className="text-yellow-400  font-semibold  mt-2">
            Our hotel is located in the heart of the city, with easy access to
            shopping, dining, and tourist attractions.
          </p>
        </div>
        <div className="bg-yellow-300 bg-opacity-35  p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl text-blue-500 font-serif italic  font-semibold"> <FcServices className="ml-36 text-4xl"></FcServices>   Exceptional Service</h3>
          <p className="text-blue-600 font-semibold mt-2">
            We offer 24/7 room service and dedicated staff to make sure your
            stay is as comfortable as possible.
          </p>
        </div>
        <div className="bg-blue-300 bg-opacity-35 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl text-purple-900 font-serif italic font-semibold"> <FaCrown className="ml-36 text-4xl text-blue-800"></FaCrown> Luxury Experience</h3>
          <p className="text-blue-900 font-semibold mt-2">
            Enjoy luxurious rooms, exquisite dining, and world-class amenities
            for the ultimate getaway.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;









