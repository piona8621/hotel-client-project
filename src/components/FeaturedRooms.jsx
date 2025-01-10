// src/components/FeaturedRooms.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FeaturedRooms = () => {
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

<h2 className='text-yellow-400 font-serif italic mt-20 text-4xl font-semibold'><span className=' text-violet-100 text-4xl font-serif italic'>Featured</span> Rooms </h2>

    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      
      {rooms.map((room) => (
        
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
              className="mt-4 inline-block font-serif italic text-xl  px-6 py-2 opacity-90 bg-violet-400 text-purple-900 text-center rounded-full hover:bg-violet-400"
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

export default FeaturedRooms;


















































































































// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const FeaturedRooms = () => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     // Fetching top-rated rooms from the backend API
//     axios
//       .get('https://hotel-booking-server-project.vercel.app/featured-rooms')  // Adjust the URL as per your backend
//       .then((response) => {
//         setRooms(response.data);  // Update the state with the fetched room data
//       })
//       .catch((error) => {
//         console.error('Error fetching rooms:', error);
//       });
//   }, []);

//   return (
//     <>
//       <h2 className='text-yellow-400 font-serif italic mt-5 text-3xl font-semibold'>
//         <span className='text-purple-900 text-3xl font-serif italic'>Featured</span> Rooms
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
//         {rooms.map((room) => (
//           <div 
//             key={room._id} 
//             className="rounded-lg bg-violet-700 bg-opacity-50 text-yellow-400 text-lg shadow-lg overflow-hidden flex flex-col h-full"
//           >
//             <img
//               src={room.image}  // Image URL from the fetched room data
//               alt={room.name}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-4 flex flex-col justify-between flex-grow">
//               <div>
//                 <h3 className="text-xl text-white font-bold">{room.name}</h3>
//                 <p className="text-white text-base mt-2">
//                   {room.description.length > 100 
//                     ? `${room.description.substring(0, 100)}...` 
//                     : room.description}
//                 </p>
//               </div>
//               <Link
//                 to={`/room-details/${room._id}`}  // Redirect to the room details page
//                 className="mt-4 inline-block font-serif italic text-xl px-6 py-2 opacity-90 bg-violet-400 text-purple-900 text-center rounded-full hover:bg-violet-400"
//               >
//                 See More
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default FeaturedRooms;








