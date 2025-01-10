

































































// 1234567


import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRatingComponent from "react-star-rating-component"; // Import the star rating component
import moment from "moment"; // Import moment.js
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [ratingValue, setRatingValue] = useState(0); // State for rating
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://hotel-booking-server-project.vercel.app/hotel-bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      });
  }, [user.email]);

  // Cancel Booking - SweetAlert2 Modal
  const cancelBooking = (id, bookingDate, roomId) => {
    const today = moment(); // Current date
    const cancellationDeadline = moment(bookingDate).subtract(1, "days"); // 1 day before the booking date
  
    // Check if the cancellation date has passed
    if (today.isAfter(cancellationDeadline)) {
      Swal.fire("Too Late!", "You cannot cancel this booking anymore.", "error");
      return;
    }
  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with booking cancellation
        fetch(`https://hotel-booking-server-project.vercel.app/hotel-bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            // Update room availability to true (room available again)
            fetch('https://hotel-booking-server-project.vercel.app/update-room-status', {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ available: true }),
            })
              .then((roomRes) => roomRes.json())
              .then(() => {
                // Remove the canceled booking from the state
                setBookings(bookings.filter((booking) => booking._id !== id));
  
                toast.success("Booking cancelled successfully.");
                Swal.fire("Cancelled!", "Your booking has been cancelled.", "success");
              })
              .catch(() => {
                // toast.error("Failed to update room availability.");
                Swal.fire("Error!", "Something went wrong with the room update!", "error");
              });
          })
          .catch(() => {
            // toast.error("Failed to cancel the booking.");
            Swal.fire("Error!", "Something went wrong with the booking cancellation!", "error");
          });
      }
    });
  };
  


  // Open Update Date Modal - DaisyUI
  const openUpdateModal = (booking) => {
    setSelectedBooking(booking);
    window.my_modal_1.showModal();
  };

  // Update Date Logic
  const handleUpdateDate = () => {
    const newDate = document.getElementById("updateDate").value;
  
    if (!newDate) {
      
      Swal.fire({
        title: 'Error!',
        text: 'Please select a new date.',
        icon: 'error',
        confirmButtonText: 'Okay',
        position: 'top',  // Position the alert at the top of the screen
        toast: true,  // Make the alert a toast (notification style)
        showConfirmButton: false,  // Hide the confirm button for toast
        timer: 3000,  // Automatically close after 3 seconds
        timerProgressBar: true,  // Show progress bar for the timer
        background: '#f8d7da',  // Optional: Customize the background color
        color: '#721c24',  // Optional: Text color
      });




    } else {
      const updatedBooking = { ...selectedBooking, bookingDate: newDate };
  
      fetch(`https://hotel-booking-server-project.vercel.app/hotel-bookings/${selectedBooking._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBooking),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to update booking");
          }
          return res.json();
        })
        .then(() => {
          // Update the bookings state with the new booking date
          setBookings(
            bookings.map((b) =>
              b._id === selectedBooking._id ? { ...b, bookingDate: newDate } : b
            )
          );
  
          // Success notification with Swal
          Swal.fire({
            title: "Success!",
            text: "Your booking date has been updated.",
            icon: "success",
            confirmButtonText: "OK",
          });
  
          // Close the modal after the update
          const modal = document.getElementById("my_modal_1");
          if (modal) {
            modal.close(); // Ensure the modal closes after the update
          }
  
          // Optionally, you can also use toast if you prefer
          // toast.success("Booking date updated successfully!");
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("Failed to update the booking date.");
        });
    }
  };
  
  // Open Review Modal
  const openReviewModal = (booking) => {
    setSelectedBooking(booking);
    window.my_modal_2.showModal();
  };

  // Handle Rating Change
  const onStarClick = (nextValue) => {
    setRatingValue(nextValue); // Update the rating value
  };

  // Handle Review Submission
  const handleReviewSubmit = () => {
    const comment = document.getElementById("comment").value;
    const currentRoomId = selectedBooking._id;
    const user_name = user?.displayName || user?.email;
    const rating = ratingValue;
    const timestamp = new Date().toISOString();

    if (rating === 0 || !comment) {
      Swal.fire({
        title: 'Error!',
        text: 'Please Submit a Rating and comment.',
        icon: 'error',
        confirmButtonText: 'Okay',
        position: 'top',  // Position the alert at the top of the screen
        toast: true,  // Make the alert a toast (notification style)
        showConfirmButton: false,  // Hide the confirm button for toast
        timer: 3000,  // Automatically close after 3 seconds
        timerProgressBar: true,  // Show progress bar for the timer
        background: '#f8d7da',  // Optional: Customize the background color
        color: '#721c24',  // Optional: Text color
      });


    } else {
      const review = {
        currentRoomId,
        user_name,
        comment,
        rating,
        timestamp,
      };

      fetch("https://hotel-booking-server-project.vercel.app/hotel-reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            Swal.fire({
              title: "Success!",
              text: data.message,
              icon: "success",
              confirmButtonText: "OK",
            });

            setReviews((prevReviews) => [
              ...prevReviews,
              { user_name, comment, rating, timestamp },
            ]);



            // toast.success("Review Submitted successfully!");  // Toast for success

            // Notify the user using a modal or toast
            Swal.fire({
              title: "Success!",
              text: "Your Review has been submitted.",
              icon: "success",
              confirmButtonText: "OK",
            });




            const modal = document.getElementById("my_modal_2");
            if (modal) {
              modal.close(); // Close modal after review submission
            }
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: "Failed to submit the review.",
            icon: "error",
            confirmButtonText: "Retry",
          });
          console.error(err);
        });
    }
  };

  return (
    <div className=" p-5 ">
      <Helmet>
        <title>My Bookings </title>
      </Helmet>
      <h1 className="text-3xl  font-serif italic text-yellow-400 font-bold mb-5"> <span className="text-3xl font-serif italic text-purple-300">My</span>Bookings</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : bookings.length > 0 ? (
        <div className=" overflow-x-auto ">
          <table className="table  w-ful">
            <thead className="">
              <tr className="bg-purple-500 text-xl font-serif italic text-yellow-400 bg-opacity-45">
                <th className="text-center  ">Image</th>
                <th className="text-center">Room Name</th>
                <th className="text-center ext-center ">Price</th>
                <th className="text-center ext-center">Booking Date</th>
                <th className="text-yellow-400 ext-center text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className=" bg-purple-900 bg-opacity-40">
                  <td >
                    <img
                      src={booking.roomImage}
                      alt={booking.roomName}
                      className="w-20 sm:w-20 mx-auto rounded-lg"
                    />
                  </td>
                  <td className="text-lg ext-center font-serif italic  font-bold text-white">{booking.roomName}</td>
                  <td className="text-lg ext-center font-serif italic font-bold text-yellow-500">{booking.price}</td>
                  <td className="text-lg ext-center font-serif italic sm:table-cell text-white font-semibold">{new Date(booking.bookingDate).toLocaleDateString()}</td>

                  <td className="space-x-2 ">
                    <button
                      className="btn font-serif italic text-white bg-purple-300 bg-opacity-30 btn-sm text-lg font-semibold "
                      onClick={() => cancelBooking(booking._id, booking.bookingDate, booking.roomId)}
                    >
                      Cancel
                    </button>
                    
                    {!booking.reviewed && (
                      <button
                        className="btn font-serif italic text-white bg-purple-300 bg-opacity-30 btn-sm text-lg font-semibold"
                        onClick={() => openReviewModal(booking)}
                      >
                        <span className="text-yellow-400">Given</span>Review
                      </button>
                    )}
                    
                    <button
                      className="btn font-serif italic text-white bg-purple-300 bg-opacity-30 btn-sm lg:text-lg font-semibold"
                      onClick={() => openUpdateModal(booking)}
                    >
                      Update <span className="text-yellow-400">Date</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No bookings found.</p>
      )}

      {/* Update Date Modal */}
      <dialog id="my_modal_1" className="modal  bg-purple-900 bg-opacity-30">
        <form method="dialog" className="modal-box  bg-purple-500 bg-opacity-30">
          <h3 className=" text-3xl text-purple-400 font-bold font-serif italic
           ">Update Booking Date</h3>
          <input
            type="date"
            id="updateDate"
            className="input input-bordered w-full max-w-xs mt-4"
            defaultValue={selectedBooking ? selectedBooking.bookingDate : ""}
          />
          <div className="modal-action">
            <button type="button" className="btn font-serif italic text-white bg-purple-300 bg-opacity-30 text-xl" 
            onClick={handleUpdateDate}>
              <span className="text-yellow-500">Update</span> Date
            </button>
            <button type="button" className="btn font-serif italic text-white bg-purple-300 bg-opacity-30 text-xl" 
            onClick={() => document.getElementById("my_modal_1").close()}>
              Close
            </button>
          </div>
        </form>
      </dialog>

      {/* Review Modal */}
      <dialog id="my_modal_2" className="modal bg-purple-900 bg-opacity-30">
        <form method="dialog" className="modal-box bg-purple-500 bg-opacity-30">
          <h3 className="text-3xl text-yellow-400 font-bold font-serif italic">Submit Your Review</h3>

          <div className="mt-4">
            <label className="block text-2xl font-serif italic font-bold text-purple-400">Username</label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={user?.displayName || user?.email || "No username"}
              readOnly
            />
          </div>

          <div className="mt-4">
            <label className="block text-2xl text-yellow-400 font-bold font-serif italic">Rating (1-5)</label>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={ratingValue}
              onStarClick={onStarClick}
            />
          </div>
          <div className="mt-4">
            <label className="block text-2xl text-yellow-400 font-bold font-serif italic">Comment</label>
            <textarea
              id="comment"
              className="textarea textarea-bordered w-full mt-2"
              placeholder="Write your review here..."
            />
          </div>
          <div className="modal-action">
            <button
              type="button"
              className="btn font-serif italic text-white bg-purple-300 bg-opacity-30 text-xl"
              onClick={handleReviewSubmit}
            >
                <span className="text-yellow-400">Submit</span>   Review
            </button>
            <button type="button" 
            className="btn  font-serif italic text-white bg-purple-300 bg-opacity-30 text-xl" 
            onClick={() => document.getElementById("my_modal_2").close()}>
              Close
            </button>
          </div>
    
        </form>
      </dialog>
    </div>
  );
};

export default MyBookings;









































































































































































































































































