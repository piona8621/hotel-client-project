import React from "react";

const EventsAndConferences = () => {
  return (
    <div className="bg-blue-200 bg-opacity-30 py-12 px-6 mt-12">
      <h2 className="text-3xl font-bold font-serif  italic text-purple-900 text-center mb-6"> <span className="text-yellow-900">Host Your</span> Events with Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-yellow-200  bg-opacity-45  p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold  text-blue-800 font-serif italic">Corporate Meetings</h3>
          <p className="text-blue-800 font-medium text-base  mt-2">
            Our conference rooms are equipped with the latest tech and can accommodate small to large corporate meetings, ensuring your events run smoothly.
          </p>
        </div>
        <div className="bg-purple-500 bg-opacity-60 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-800 font-serif italic">Weddings & Celebrations</h3>
          <p className="text-purple-50 mt-2">
            Celebrate your special day in a luxurious setting. Our wedding venues provide an unforgettable atmosphere with professional event planning services.
          </p>
        </div>
        <div className="bg-blue-300 p-6 bg-opacity-50 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-800 font-serif italic">Expos & Trade Shows</h3>
          <p className="text-purple-800 font-medium mt-2 ">
            Host large-scale expos or trade shows with us! Our spacious halls can accommodate exhibitors and visitors for a seamless event experience.
          </p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-3 font-serif italic font-bold  bg-violet-400 text-purple-900 text-xl rounded-full hover:bg-purple-700">
        🚀  Book Your Event
        </button>
      </div>
    </div>
  );
};

export default EventsAndConferences;
