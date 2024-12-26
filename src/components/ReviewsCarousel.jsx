



import React, { useEffect, useState } from "react";

const ReviewsCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hotel-booking-server-project.vercel.app/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading reviews:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-white text-center">Loading reviews...</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-white text-center">No reviews available for this room.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-3xl font-serif italic text-purple-900 font-bold  mb-8">User <span className="text-yellow-400">Reviews</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="p-6 bg-gradient-to-r bg-purple-900 bg-opacity-30 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className=" text-xl font-serif italic  text-white">
              <span className="text-yellow-400"> 👤 Name:</span> {review.user_name}
            </h3>
            <p className="text-base font-semibold font-serif italic text-white">
              <span className="text-yellow-500 font-bold text-xl"> ⏳ Time:</span> {new Date(review.timestamp).toLocaleString()}
            </p>
            <p className="mt-2 text-white font-serif italic text-xl ">
              <span className="text-lg font-bold text-yellow-500"> 📝 Comment:</span> {review.comment}
            </p>
            <p className="mt-4 text-yellow-400 font-serif italic font-bold">
            Rating: ⭐{review.rating} / 5
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsCarousel;
