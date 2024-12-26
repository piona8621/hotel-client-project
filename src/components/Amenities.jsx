import React from "react";

const Amenities = () => {
  const amenities = [
    { id: 1, name: "Free Wi-Fi", icon: "wifi" },
    { id: 2, name: "24/7 Room Service", icon: "room-service" },
    { id: 3, name: "Swimming Pool", icon: "pool" },
    { id: 4, name: "Fitness Center", icon: "fitness-center" },
    { id: 5, name: "Restaurant & Bar", icon: "restaurant" },
    { id: 6, name: "Spa & Wellness", icon: "spa" },
  ];

  return (
    <div className="bg-violet-500  bg-opacity-35 text-white py-12 px-6 mt-12">
      <h2 className="text-3xl font-bold font-serif italic text-center mb-6"> Our <span className="text-yellow-500 font-serif italic">Amenities</span></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3  font-serif italic lg:grid-cols-4 gap-8">
        {amenities.map((amenity) => (
          <div key={amenity.id} className="text-center">
            <div className="text-4xl mb-4">
              {/* Icon can be replaced with your preferred icon library like FontAwesome or Material Icons */}
              <i className={`material-icons`}>{amenity.icon}</i>
            </div>
            <p className="text-lg font-semibold">{amenity.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
