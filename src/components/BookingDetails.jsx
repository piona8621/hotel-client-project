import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const BookingDetails = ({ bookingId, roomId, bookedDate }) => {
  const [isCancelable, setIsCancelable] = useState(false);

  useEffect(() => {
    // Check if the booking can be canceled (1 day before the booked date)
    const bookedDateMoment = moment(bookedDate);
    const cancelDeadline = bookedDateMoment.subtract(1, 'days');
    const currentDate = moment();

    if (currentDate.isBefore(cancelDeadline)) {
      setIsCancelable(true);
    }
  }, [bookedDate]);

  const handleCancelBooking = () => {
    // Send cancellation request to the backend
    axios
      .post(`https://hotel-booking-server-project.vercel.app/cancel-booking`, {
        bookingId,
        roomId
      })
      .then((response) => {
        alert("Booking cancelled successfully!");
        // Optionally, update the room availability or redirect to another page
      })
      .catch((error) => {
        console.error("Error cancelling booking:", error);
      });
  };

  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      <p>Room: {roomId}</p>
      <p>Booked Date: {moment(bookedDate).format("MM/DD/YYYY")}</p>

      {isCancelable ? (
        <div>
          <p>You can cancel your booking until {moment(bookedDate).subtract(1, 'days').format("MM/DD/YYYY")}.</p>
          <button
            className="cancel-button"
            onClick={handleCancelBooking}
          >
            Cancel Booking
          </button>
        </div>
      ) : (
        <p>Sorry, you can no longer cancel this booking.</p>
      )}
    </div>
  );
};

export default BookingDetails;
