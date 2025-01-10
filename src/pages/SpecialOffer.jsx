



import React, { useState, useEffect } from "react";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Stay 3 Nights,Get 1 Free!",
      description: "Enjoy a free night on us when you book 3 nights at any of our locations.",
      image: "https://www.ganggaisland.com/wp-content/uploads/2018/08/GIR-Instagram-Contest-1200x800.jpg", // Corrected URL
    },
    {
      id: 2,
      title: "Summer Sale - 50% Off",
      description: "Save 50% on bookings for the winter season. Limited time offer!",
      image: "https://www.thelinkdirectories.co.uk/wp-content/uploads/2022/11/Nov-blog-photo.jpg", // Replace with an actual image URL
    },
  ];

  const [showModal, setShowModal] = useState(true);

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 10000); // Close after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-purple-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-purple-400 bg-opacity-40 p-8 rounded-lg w-3/4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center italic font-serif text-purple-300 mb-6"><span className="text-3xl font-serif italic text-yellow-500 font-bold">Spacial</span> Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {offers.map((offer) => (
                <div key={offer.id} className="rounded-lg shadow-lg overflow-hidden bg-purple-500 bg-opacity-40">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold font-serif italic text-white">{offer.title}</h3>
                    <p className="text-gray-200 mt-2 italic">{offer.description}</p>
                    {/* <button className="mt-4 px-6 py-2 font-serif italic text-white bg-purple-500 bg-opacity-40 text-xl font-semibold  rounded-full hover:bg-yellow-600">
                      🚀 Book Now
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 font-serif italic text-xl bg-purple-800 bg-opacity-50 text-xl font-semibold text-white rounded-full hover:bg-purple-600 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialOffers;
































































