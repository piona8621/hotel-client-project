








import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
  

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-4">Oops! Page Not Found</h1>
      
      {/* Exciting GIF or Image */}
      <img
        src="https://media.giphy.com/media/xT1R9XnXxA7VrGgnvK/giphy.gif" // Example GIF link
        alt="404 error gif"
        className="w-96 h-96 mb-6"
      />

      <p className="text-xl mb-4"></p>

      {/* Back to Home Button */}
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default NotFound;
