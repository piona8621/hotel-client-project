













import React, { useEffect, useState } from "react";

const ReviewModal = ({ roomId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://hotel-booking-server-project.vercel.app/reviews?roomId=${roomId}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading reviews:", error);
        setLoading(false);
      });
  }, [roomId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews available for this room.</p>;
  }

  return (
    <div className="container mx-auto mt-5 p-6">
      <h2 className="text-center text-3xl font-serif italic font-bold mb-8"><span className="text-yellow-400">User</span>
      <span className="text-blue-600 font-serif italic text-3xl">Reviews</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="p-4 bg-purple-700 bg-opacity-30 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-bold text-xl text-white"> <span className="text-lg text-yellow-400 font-serif italic">Name</span>  {review.user_name}</h3>
            <p className="text-base font-semibold text-white">
               <span className="text-lg font-serif italic text-yellow-400">Time:</span>   {new Date(review.timestamp).toLocaleString()}
            </p>
            <p className="mt-2 text-white text-bold italic"> 
              <span className="text-lg font-bold font-serif italic text-yellow-400"> Comment: </span>
               "{review.comment}"</p>
            <p className="mt-4 text-purple-200 font-bold">
                 <span className="text-lg font-serif italic text-yellow-400"> Rating: </span>        ⭐ {review.rating} / 5
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewModal;


















