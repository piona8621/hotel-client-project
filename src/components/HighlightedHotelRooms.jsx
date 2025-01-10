// import React from "react";
// import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// const HighlightedHotelRooms = () => {


//   const room = [{

//   }]




//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />

//       {/* Highlighted Hotel Rooms Section */}
//       <section className="highlighted-hotel-rooms py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold text-blue-900">Highlighted Hotel Rooms</h2>
//           <p className="text-gray-600 mt-2">Discover our top-rated rooms for your perfect stay.</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//             {/* Map over highlighted hotel rooms */}
//             {[...Array(8)].map((_, index) => (
//               <div
//                 key={index}
//                 className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
//               >
//                 <img
//                   src={`https://via.placeholder.com/150?text=Room+${index + 1}`}
//                   alt={`Room ${index + 1}`}
//                   className="rounded-md mb-4"
//                 />
//                 <h3 className="text-lg font-bold text-blue-900">Deluxe Room {index + 1}</h3>
//                 <p className="text-gray-600">Starting at $99/night</p>
//                 <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700">
//                   Book Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

      
//     </div>
//   );
// };

// export default HighlightedHotelRooms;


















































































// import React from "react";
// import { Link } from "react-router-dom";

// const HighlightedHotelRooms = () => {
//   // Static room data
//   const rooms = [
//     {
//       id: 1,
//       name: "Luxury Suite",
//       image: "https://www.luxxu.net/blog/wp-content/uploads/2019/12/Best-Luxury-Suites-in-Paris-04.jpg",
//       price: 250,
//     },
//     {
//       id: 2,
//       name: "Economy Room",
//       image: "https://www.libertyhotels.com/media/l4qnzntx/liberty-lara-odalar-standart-oda-banner.jpg",
//       price: 75,
//     },
//     {
//       id: 3,
//       name: "Deluxe Room",
//       image: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/9/8/4/%7B984A8BD0-FC33-4BC1-BF9A-661E56C4412F%7D72d8e1b8f63648b3a21cabed0642f70c.jpg",
//       price: 150,
//     },
//     {
//       id: 4,
//       name: "Presidential Suite",
//       image: "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-206,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BEV/BEV_1901_original.jpg",
//       price: 500,
//     },
//   ];

//   return (
//     <div>
//       {/* Highlighted Hotel Rooms Section */}
//       <section className="highlighted-hotel-rooms py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold font-serif italic text-violet-900 ">Highlighted <span className="text-yellow-500">Hotel Rooms</span></h2>
//           <p className="text-white font-serif italic text-xl  mt-2">Discover our top-rated rooms for your perfect stay.</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//             {/* Map over highlighted hotel rooms */}
//             {rooms.map((room) => (
//               <div
//                 key={room.id}
//                 className="flex flex-col bg-violet-100 bg-opacity-30 rounded-lg shadow-md hover:shadow-lg transition p-4"
//               >
//                 <img
//                   src={room.image}
//                   alt={room.name}
//                   className="rounded-md mb-4 h-40 w-full object-cover"
//                 />
//                 <div className="flex flex-col justify-between flex-grow">
//                   <h3 className="text-2xl font-serif italic font-bold text-yellow-500">{room.name}</h3>
//                   <p className="text-white font-serif italic text-lg ">Starting at ${room.price}/night</p>
//                   <Link
//               to={`/room-details/${room._id}`}  // Redirect to the room details page
//               className="mt-4 inline-block font-serif italic text-xl  px-6 py-2 opacity-90 bg-violet-400 text-purple-900 text-center rounded-full hover:bg-violet-400"
//             >
//              🚀 See More
//             </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HighlightedHotelRooms;















































import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HighlightedHotelRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetching top-rated rooms from the backend API
    axios
      .get('https://hotel-booking-server-project.vercel.app/featured-rooms')  // Adjust the URL as per your backend
      .then((response) => {
        setRooms(response.data);  // Update the state with the fetched room data
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error);
      });
  }, []);

  return (
    <>
      <h2 className="text-yellow-400 font-serif italic mt-20 text-3xl font-semibold">
        <span className="text-violet-100 text-3xl font-serif italic">Highlighted</span> Hotel Rooms
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {rooms.slice(0, 3).map((room) => (  // Slicing the first 3 rooms
          <div key={room._id} className="rounded-lg bg-violet-700 bg-opacity-50 text-yellow-400 text-lg shadow-lg overflow-hidden">
            <img
              src={room.image}  // Image URL from the fetched room data
              alt={room.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-white font-bold">{room.name}</h3>
              <p className="text-white text-xl mt-2">{room.description}</p>
              <Link
                to={`/room-details/${room._id}`}  // Redirect to the room details page
                className="mt-4 inline-block font-serif italic text-xl px-6 py-2 opacity-90 bg-violet-400 text-purple-900 text-center rounded-full hover:bg-violet-400"
              >
                🚀 See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HighlightedHotelRooms;



































































































// import React, { useState } from "react";

// const HighlightedHotelRooms = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);

//   // Static room data
//   const rooms = [
//     {
//       id: 1,
//       name: "Luxury Suite",
//       image: "https://www.luxxu.net/blog/wp-content/uploads/2019/12/Best-Luxury-Suites-in-Paris-04.jpg",
//       price: 250,
//       description: "A luxurious suite with a stunning city view and all premium facilities.",
//     },
//     {
//       id: 2,
//       name: "Economy Room",
//       image: "https://www.libertyhotels.com/media/l4qnzntx/liberty-lara-odalar-standart-oda-banner.jpg",
//       price: 75,
//       description: "A budget-friendly room with all the essential amenities for a comfortable stay.",
//     },
//     {
//       id: 3,
//       name: "Deluxe Room",
//       image: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/9/8/4/%7B984A8BD0-FC33-4BC1-BF9A-661E56C4412F%7D72d8e1b8f63648b3a21cabed0642f70c.jpg",
//       price: 150,
//       description: "A deluxe room offering luxury and comfort at an affordable price.",
//     },
//     {
//       id: 4,
//       name: "Presidential Suite",
//       image: "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-206,2500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BEV/BEV_1901_original.jpg",
//       price: 500,
//       description: "The ultimate luxury experience with exclusive amenities and services.",
//     },
//   ];

//   // Open modal and set selected room
//   const handleBookNow = (room) => {
//     setSelectedRoom(room);
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedRoom(null);
//   };

//   return (
//     <div>
//       {/* Highlighted Hotel Rooms Section */}
//       <section className="highlighted-hotel-rooms py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold text-blue-900">Highlighted Hotel Rooms</h2>
//           <p className="text-gray-600 mt-2">Discover our top-rated rooms for your perfect stay.</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//             {/* Map over highlighted hotel rooms */}
//             {rooms.map((room) => (
//               <div
//                 key={room.id}
//                 className="border rounded-lg shadow-md p-4 hover:shadow-lg transition flex flex-col justify-between h-80"
//               >
//                 <img
//                   src={room.image}
//                   alt={room.name}
//                   className="rounded-md mb-4 h-40 w-full object-cover"
//                 />
//                 <h3 className="text-lg font-bold text-blue-900">{room.name}</h3>
//                 <p className="text-gray-600">Starting at ${room.price}/night</p>
//                 <button
//                   onClick={() => handleBookNow(room)}
//                   className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       {isModalOpen && selectedRoom && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-bold text-blue-900 mb-4">{selectedRoom.name}</h2>
//             <img
//               src={selectedRoom.image}
//               alt={selectedRoom.name}
//               className="rounded-md mb-4 h-40 w-full object-cover"
//             />
//             <p className="text-gray-600">{selectedRoom.description}</p>
//             <p className="text-lg font-bold text-blue-900 mt-4">
//               Price: ${selectedRoom.price}/night
//             </p>
//             <button
//               onClick={closeModal}
//               className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HighlightedHotelRooms;






























































































































































