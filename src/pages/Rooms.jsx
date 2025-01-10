


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]);
//   const [minPrice, setMinPrice] = useState(0); // Minimum price filter
//   const [maxPrice, setMaxPrice] = useState(1000); // Maximum price filter
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   // Convert price string to a number by removing the '$' and parsing as an integer
//   const convertPriceToNumber = (price) => {
//     return parseInt(price.replace("$", "").replace(",", ""));
//   };

//   // Fetch rooms from the backend based on price range
//   const fetchRooms = () => {
//     setLoading(true); // Show loading while fetching data
//     axios
//       .get("https://hotel-booking-server-project.vercel.app/hotels", {
//         params: { minPrice, maxPrice }, // Send minPrice and maxPrice as query parameters
//       })
//       .then((response) => {
//         const filteredRooms = response.data.map((room) => ({
//           ...room,
//           price: convertPriceToNumber(room.price), // Convert price to number
//         }));
//         setRooms(filteredRooms); // Update rooms state with filtered data
//         setLoading(false); // Hide loading
//       })
//       .catch((error) => {
//         console.error("Error fetching rooms:", error);
//         setLoading(false); // Hide loading even on error
//       });
//   };

//   // Fetch rooms initially and when price filters change
//   useEffect(() => {
//     fetchRooms();
//   }, [minPrice, maxPrice]);

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <Helmet>
//         <title>Rooms</title>
//       </Helmet>
//       {/* Filter Form */}
//       <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
//         <input
//           type="number"
//           placeholder="Min Price"
//           value={minPrice}
//           onChange={(e) => setMinPrice(e.target.value)}
//           className="border border-gray-300 rounded px-4 py-2"
//         />
//         <input
//           type="number"
//           placeholder="Max Price"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(e.target.value)}
//           className="border border-gray-300 rounded px-4 py-2"
//         />
//         <button
//           onClick={fetchRooms}
//           className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
//         >
//           Apply Filter
//         </button>
//       </div>

//       {/* Loading Indicator */}
//       {loading && <p className="text-center text-xl text-yellow-400">Loading rooms...</p>}

//       {/* No Rooms Found */}
//       {!loading && rooms.length === 0 && (
//         <p className="text-center text-xl text-red-500">No rooms available in this price range.</p>
//       )}

//       {/* Rooms List */}
//       <h1 className="text-4xl font-semibold text-center font-serif italic text-purple-300 mb-8">Our Rooms</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {rooms
//           .filter(
//             (room) => room.price >= minPrice && room.price <= maxPrice
//           )
//           .map((room) => (
//             <div
//               key={room._id}
//               className="max-w-sm bg-purple-900 bg-opacity-30 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//               onClick={() => navigate(`/room-details/${room._id}`)} // Redirect on card click

//             >
//               <img
//                 className="w-full h-56 object-cover"
//                 src={room.image}
//                 alt={room.name}
//               />
//               <div className="px-6 py-4 text-white text-xl font-serif italic">
//                 <h2 className="font-bold text-yellow-400 text-2xl">{room.name}</h2>
//                 <p className="text-lg text-white mt-2">{room.description}</p>
//               </div>
//               <div className="px-6 py-4 flex items-center justify-between text-white">
//                 <div className="flex items-center">
//                   <span className="mr-2">💵</span>
//                   <span className="text-lg text-white font-semibold">{room.price} USD</span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="mr-2">⭐</span>
//                   <span className="text-base text-white">{room.reviews} reviews</span>
//                 </div>
//               </div>
              
//               {room.isBooked && (
//                 <div className="absolute top-2 right-2 text-white">
//                   <span>🔒</span>
//                 </div>
//               )}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Rooms;




































































































































import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState(0); // Minimum price filter
  const [maxPrice, setMaxPrice] = useState(1000); // Maximum price filter
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("price"); // State for sorting

  const navigate = useNavigate();

  // Convert price string to a number by removing the '$' and parsing as an integer
  const convertPriceToNumber = (price) => {
    return parseInt(price.replace("$", "").replace(",", ""));
  };

  // Fetch rooms from the backend based on price range
  const fetchRooms = () => {
    setLoading(true); // Show loading while fetching data
    axios
      .get("https://hotel-booking-server-project.vercel.app/hotels", {
        params: { minPrice, maxPrice }, // Send minPrice and maxPrice as query parameters
      })
      .then((response) => {
        const filteredRooms = response.data.map((room) => ({
          ...room,
          price: convertPriceToNumber(room.price), // Convert price to number
        }));
        setRooms(filteredRooms); // Update rooms state with filtered data
        setLoading(false); // Hide loading
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
        setLoading(false); // Hide loading even on error
      });
  };

  // Sort rooms based on the selected criteria
  const sortRooms = (rooms, criteria) => {
    return rooms.sort((a, b) => {
      if (criteria === "price") {
        return a.price - b.price;
      } else if (criteria === "name") {
        return a.name.localeCompare(b.name);
      } else if (criteria === "reviews") {
        return b.reviews - a.reviews;
      }
      return rooms;
    });
  };

  // Fetch rooms initially and when price filters change
  useEffect(() => {
    fetchRooms();
  }, [minPrice, maxPrice]);

  return (
    <div className="container mx-auto py-8 px-4">
      <Helmet>
        <title>Rooms</title>
      </Helmet>
      {/* Filter Form */}
      <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="price">Sort by Price</option>
          <option value="name">Sort by Name</option>
          <option value="reviews">Sort by Reviews</option>
        </select>
        <button
          onClick={fetchRooms}
          className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
        >
          Apply Filter
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="text-center text-xl text-yellow-400">Loading rooms...</p>}

      {/* No Rooms Found */}
      {!loading && rooms.length === 0 && (
        <p className="text-center text-xl text-red-500">No rooms available in this price range.</p>
      )}

      {/* Rooms List */}
      <h1 className="text-4xl font-semibold text-center font-serif italic text-purple-300 mb-8">Our Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortRooms(
          rooms.filter(
            (room) => room.price >= minPrice && room.price <= maxPrice
          ),
          sortBy
        ).map((room) => (
          <div
            key={room._id}
            className="max-w-sm bg-purple-900 bg-opacity-30 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={() => navigate(`/room-details/${room._id}`)} // Redirect on card click
          >
            <img
              className="w-full h-56 object-cover"
              src={room.image}
              alt={room.name}
            />
            <div className="px-6 py-4 text-white text-xl font-serif italic">
              <h2 className="font-bold text-yellow-400 text-2xl">{room.name}</h2>
              <p className="text-lg text-white mt-2">{room.description}</p>
            </div>
            <div className="px-6 py-4 flex items-center justify-between text-white">
              <div className="flex items-center">
                <span className="mr-2">💵</span>
                <span className="text-lg text-white font-semibold">{room.price} USD</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">⭐</span>
                <span className="text-base text-white">{room.reviews} reviews</span>
              </div>
            </div>
            
            {room.isBooked && (
              <div className="absolute top-2 right-2 text-white">
                <span>🔒</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;























































































// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]);
//   const [minPrice, setMinPrice] = useState(0); // Minimum price filter
//   const [maxPrice, setMaxPrice] = useState(1000); // Maximum price filter
//   const [loading, setLoading] = useState(false);
//   const [sortBy, setSortBy] = useState("price"); // State for sorting
//   const [startDate, setStartDate] = useState(""); // Start date filter
//   const [endDate, setEndDate] = useState(""); // End date filter

//   const navigate = useNavigate();

//   // Convert price string to a number by removing the '$' and parsing as an integer
//   const convertPriceToNumber = (price) => {
//     return parseInt(price.replace("$", "").replace(",", ""));
//   };

//   // Fetch rooms from the backend based on price range and date range
//   const fetchRooms = () => {
//     setLoading(true); // Show loading while fetching data
//     axios
//       .get("https://hotel-booking-server-project.vercel.app/hotels", {
//         params: { minPrice, maxPrice, startDate, endDate }, // Send minPrice, maxPrice, startDate, and endDate as query parameters
//       })
//       .then((response) => {
//         const filteredRooms = response.data.map((room) => ({
//           ...room,
//           price: convertPriceToNumber(room.price), // Convert price to number
//         }));
//         setRooms(filteredRooms); // Update rooms state with filtered data
//         setLoading(false); // Hide loading
//       })
//       .catch((error) => {
//         console.error("Error fetching rooms:", error);
//         setLoading(false); // Hide loading even on error
//       });
//   };

//   // Sort rooms based on the selected criteria
//   const sortRooms = (rooms, criteria) => {
//     return rooms.sort((a, b) => {
//       if (criteria === "price") {
//         return a.price - b.price;
//       } else if (criteria === "name") {
//         return a.name.localeCompare(b.name);
//       } else if (criteria === "reviews") {
//         return b.reviews - a.reviews;
//       }
//       return rooms;
//     });
//   };

//   // Fetch rooms initially and when price filters or date range changes
//   useEffect(() => {
//     fetchRooms();
//   }, [minPrice, maxPrice, startDate, endDate]);

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <Helmet>
//         <title>Rooms</title>
//       </Helmet>
//       {/* Filter Form */}
//       <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
//         <input
//           type="number"
//           placeholder="Min Price"
//           value={minPrice}
//           onChange={(e) => setMinPrice(e.target.value)}
//           className="border border-gray-300 rounded px-4 py-2"
//         />
//         <input
//           type="number"
//           placeholder="Max Price"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(e.target.value)}
//           className="border border-gray-300 rounded px-4 py-2"
//         />
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           className="border border-gray-300 rounded px-4 py-2"
//         />
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           className="border border-gray-300 rounded px-4 py-2"
//         />
//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="border border-gray-300 rounded px-4 py-2"
//         >
//           <option value="price">Sort by Price</option>
//           <option value="name">Sort by Name</option>
//           <option value="reviews">Sort by Reviews</option>
//         </select>
//         <button
//           onClick={fetchRooms}
//           className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
//         >
//           Apply Filter
//         </button>
//       </div>

//       {/* Loading Indicator */}
//       {loading && <p className="text-center text-xl text-yellow-400">Loading rooms...</p>}

//       {/* No Rooms Found */}
//       {!loading && rooms.length === 0 && (
//         <p className="text-center text-xl text-red-500">No rooms available in this price range and date range.</p>
//       )}

//       {/* Rooms List */}
//       <h1 className="text-4xl font-semibold text-center font-serif italic text-purple-300 mb-8">Our Rooms</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {sortRooms(
//           rooms.filter(
//             (room) => room.price >= minPrice && room.price <= maxPrice
//           ),
//           sortBy
//         ).map((room) => (
//           <div
//             key={room._id}
//             className="max-w-sm bg-purple-900 bg-opacity-30 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//             onClick={() => navigate(`/room-details/${room._id}`)} // Redirect on card click
//           >
//             <img
//               className="w-full h-56 object-cover"
//               src={room.image}
//               alt={room.name}
//             />
//             <div className="px-6 py-4 text-white text-xl font-serif italic">
//               <h2 className="font-bold text-yellow-400 text-2xl">{room.name}</h2>
//               <p className="text-lg text-white mt-2">{room.description}</p>
//             </div>
//             <div className="px-6 py-4 flex items-center justify-between text-white">
//               <div className="flex items-center">
//                 <span className="mr-2">💵</span>
//                 <span className="text-lg text-white font-semibold">{room.price} USD</span>
//               </div>
//               <div className="flex items-center">
//                 <span className="mr-2">⭐</span>
//                 <span className="text-base text-white">{room.reviews} reviews</span>
//               </div>
//             </div>
            
//             {room.isBooked && (
//               <div className="absolute top-2 right-2 text-white">
//                 <span>🔒</span>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Rooms;


































