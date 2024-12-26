

























//  123456
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';

import ReviewModal from './ReviewModal';
import { useAuth } from '../AuthContext/AuthContext';
import { Helmet } from 'react-helmet-async';
// import ReviewsCarousel from '../components/ReviewsCarousel';


const RoomDetails = ({ user }) => {
  const room = useLoaderData();
   



   // Fetch room data from the loader
   const {user: authUser}  = useAuth();
  const [isBooked, setIsBooked] = useState(room?.isBooked || false);
  // const [loading, setLoading] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingDate, setBookingDate] = useState(null);
  const [bookingLoading, setBookingLoading] = useState(false);
  // const [roomDetails, setRoomDetails] = useState(null);/
  // const [roomId, setRoomId] = useState(currentRoomId);

  const { roomId } = useParams();

  // console.log(user)

    const [loading, setLoading] = useState(true);
const [reviews, setReviews]  = useState([]);
    const [reviewsLoading, setReviewsLoading] = useState(true);



    

    
  





  const handleShowBookingModal = () => setShowBookingModal(true);
  const handleCloseBookingModal = () => setShowBookingModal(false);
  // console.log(user)
  const handleConfirmBooking = async () => {
    if (!bookingDate) {
      Swal.fire({
        title: 'Error!',
        text: 'Please select a booking date.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return;
    }

    setBookingLoading(true);

    try {
      const bookingDetails = {
        // user: user?.username,
        user_email: authUser.email,
        roomId: room._id,
        roomImage: room.image,
        bookingDate,
        roomName: room.name,
        roomDescription: room.description,
        price: room.price,
      };


      fetch('https://hotel-booking-server-project.vercel.app/hotel-bookings',{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(bookingDetails)
      })
      .then(res => res.json)
      .then(data => {
         console.log(data)
      })
      


      
      

      



      const response = await fetch('https://hotel-booking-server-project.vercel.app/book-room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setIsBooked(true); // Mark room as booked
          Swal.fire({
            title: 'Success!',
            text: 'Room booked successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          handleCloseBookingModal();
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'The room is no longer available.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to book the room. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'There was an error booking the room. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } finally {
      setBookingLoading(false);
    }
  };

  const handleMakeAvailable = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://hotel-booking-server-project.vercel.app/update-room-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: room._id, isBooked: false }),
      });

      if (response.ok) {
        setIsBooked(false); // Update UI to reflect availability
        Swal.fire({
          title: 'Success!',
          text: 'Room is now available.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update room status. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'There was an error updating the room status. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-purple-600 bg-opacity-40  shadow-lg rounded-lg">
      <Helmet>
        <title>Room Details </title>
      </Helmet>
      <h2 className='text-3xl mt-2 mb-4 font-bold font-serif italic text-purple-200'>
        <spam className="text-3xl font-bold font-serif text-yellow-500 italic">Room</spam> Details</h2>
      <img src={room.image} alt="" />
      <h1 className="text-3xl ml-5 font-serif italic text-purple-300  mt-4  font-bold">
      🛏️{room.name}</h1>
      <p className="mt-4 -ml-10 text-yellow-500  font-bold text-xl">
        
      📃{room.description}</p>
      <p className="mt-4 text-xl text-white font-medium">
        <strong>  
        💵Price:</strong> 
        
        ${room.price}
      </p>
      {/* <p
        className={`mt-2 text-lg font-medium ${isBooked ? 'text-red-500' : 'text-green-500'}`}
      >
        <strong> ✅Availability:</strong> {isBooked ? 'Booked' : 'Available'}
      </p> */}


<p
  className={`mt-2 text-lg font-medium ${isBooked ? 'text-red-500' : 'text-green-500'}`}
>
  <strong>
    {isBooked ? '❌' : '✅'} Availability:
  </strong> 
  {isBooked ? 'Booked' : 'Available'}
</p>


      {!isBooked && (
        <button
          onClick={handleShowBookingModal}
          className="mt-6 px-6 py-3 font-serif italic bg-purple-500 bg-opacity-30 text-xl text-white  rounded-lg shadow-md hover:bg-purple-600"
        >
         🚀 Book Now
        </button>
      )}


      {isBooked && (
        <button
          onClick={handleMakeAvailable}
          className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold text-xl rounded-lg shadow-md hover:bg-yellow-600"
        >
          Make Available
        </button>
      )}






      {showBookingModal && (
        <div className="fixed inset-0 bg-purple-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-purple-600  bg-opacity-40 p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-2xl ml-20 text-purple-300 font-serif italic font-bold"><span className='text-yellow-400 text-2xl font-serif italic'>Booking</span> Summary</h2>
              <button
                onClick={handleCloseBookingModal}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="mt-4">
              <img src={room.image} alt="" />
              <p className="  text-purple-100 text-2xl"><strong className='font-serif italic text-yellow-400'> Room:</strong> {room.name}</p>
              <p className="text-white text-lg"><strong className='text-xl font-serif italic  text-yellow-400'>Description:</strong> {room.description}</p>
              <p className="text-white text-lg"><strong className='text-xl font-serif italic  text-yellow-400'>Price:</strong> {room.price}</p>
              <label className="block mt-4 text-purple-200 italic font-serif  text-xl font-bold">Booking Date:</label>
              <DatePicker
                selected={bookingDate}
                onChange={(date) => setBookingDate(date)}
                dateFormat="MMMM d, yyyy"
                className="w-full mt-2 border border-blue-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                minDate={new Date()}
              />
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleCloseBookingModal}
                className="px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={handleConfirmBooking}
                className="px-4 py-2 bg-purple-800 bg-opacity-40 text-blue-100  text-lg rounded-md hover:bg-purple-700"
                disabled={bookingLoading}
              >
                {bookingLoading ? 'Booking...' : 'Conform Booking'}
              </button>


            </div>
          </div>
        </div>
      )};
    </div>

{/* Reviews Section */}


<ReviewModal></ReviewModal>


</>

  );
};

export default RoomDetails;























































