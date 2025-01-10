







// import React, { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import AuthContext from "../AuthContext/AuthContext";
// import Swal from "sweetalert2";

// const Navbar = () => {
//   const { user, signOutUser, } = useContext(AuthContext);

//   const handleSignOut = () => {
//     signOutUser();

//     Swal.fire({
//       title: "Success!",
//       text: "You have signed out successfully.",
//       icon: "success",
//       confirmButtonText: "OK",
//     });
//   };


//   console.log(user)

//   return (
//     <nav className="bg-purple-600 bg-opacity-35 p-4">
//       <div className="container flex-col mx-auto flex md:flex-row justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-lg font-bold md:mb-0">
//           <Link to="/" className="hover:text-gray-300 text-xl font-serif italic">
//             <span className="text-purple-500 italic text-xl font-bold">
//               SkyLine
//             </span>{" "}
//             Hotel
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col md:flex-row space-y-2 items-center md:space-y-0 md:space-x-6">
//           <NavLink
//             to="/"
//             className="text-yellow-500 text-lg font-serif italic font-bold hover:text-blue-500"
//           >
//             <span className="text-purple-200">H</span>
//             <span className="text-yellow-400">O</span>
//             <span className="text-purple-200">M</span>
//             <span>E</span>
//           </NavLink>

//           <NavLink
//             to="/rooms"
//             className="text-white font-serif italic text-lg font-semibold hover:text-gray-300"
//           >
//             <span className="text-purple-200">R</span>
//             <span className="text-yellow-500">O</span>
//             <span className="text-purple-200">O</span>
//             <span className="text-yellow-500">M</span>
//             <span>S</span>
//           </NavLink>

//           {user && (
//             <NavLink
//               to="/my-bookings"
//               className="text-white font-serif italic text-lg font-semibold hover:text-gray-300"
//             >
//               <span className="text-yellow-500">M</span>
//               <span className="text-purple-200">Y</span>
//               <span className="text-yellow-500">B</span>
//               <span className="text-purple-200">O</span>
//               <span className="text-yellow-500">O</span>
//               <span className="text-purple-200">I</span>
//               <span className="text-yellow-500">N</span>
//               <span className="text-purple-200">G</span>
//               <span>S</span>
//             </NavLink>
//           )}

//           {user ? (
//             <div className="flex items-center space-x-4">
//               {/* User Photo */}
//               <div className="relative group">
//                 <img
//                   src={user.photoURL}
//                   alt="User Profile"
//                   className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
//                 />
//                 {/* Display Name Tooltip */}
//                 <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100">
//                   {user.displayName}
//                 </div>
//               </div>

//               {/* Logout Button */}
//               <button
//                 onClick={handleSignOut}
//                 className="text-white font-serif italic text-lg font-semibold hover:text-gray-300"
//               >
//                 <span className="text-purple-500">Sign</span>{" "}
//                 <span className="text-yellow-500">Out</span>
//               </button>
//             </div>
//           ) : (
//             <NavLink
//               to="/login"
//               className="text-white font-serif italic text-lg font-semibold hover:text-gray-300"
//             >
//               <span className="text-yellow-400">LOG</span>
//               <span>IN</span>
//             </NavLink>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;  

















































































































// update---1

// import React, { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import AuthContext from "../AuthContext/AuthContext";
// import Swal from "sweetalert2";

// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);

//   const handleSignOut = () => {
//     signOutUser();

//     Swal.fire({
//       title: "Success!",
//       text: "You have signed out successfully.",
//       icon: "success",
//       confirmButtonText: "OK",
//     });
//   };

//   console.log(user);

//   return (
//     <nav className="bg-primary bg-opacity-35 p-4 sticky top-0 z-50">
//       <div className="container mx-auto flex-col flex md:flex-row justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-lg font-bold md:mb-0">
//           <Link to="/" className="hover:text-gray-300 text-xl font-serif italic">
//             <span className="text-purple-500 italic text-xl font-bold">
//               SkyLine
//             </span>{" "}
//             Hotel
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col md:flex-row space-y-2 items-center md:space-y-0 md:space-x-6">
//           <NavLink to="/" className="text-yellow-500 text-lg font-serif italic font-bold hover:text-blue-500">
//             <span className="text-purple-200">H</span>OME
//           </NavLink>

//           <NavLink to="/rooms" className="text-white font-serif italic text-lg font-semibold hover:text-gray-300">
//         {/* <span className="text-purple-500">R</span>oom */}
//         <span className="text-purple-200">R</span>
// //             <span className="text-yellow-500">O</span>
// //             <span className="text-purple-200">O</span>
// //             <span className="text-yellow-500">M</span>
// //             <span>S</span>
//           </NavLink>

//           {user && (
//             <NavLink to="/my-bookings" className="text-white font-serif italic text-lg font-semibold hover:text-gray-300">
//               <span className="text-secondary">MY BOOKINGS</span>
//             </NavLink>
//           )}

//           <NavLink to="/about" className="text-white font-serif italic text-lg font-semibold hover:text-gray-300">
//             <span className="text-secondary">ABOUT</span>
//           </NavLink>

//           <NavLink to="/contact" className="text-white font-serif italic text-lg font-semibold hover:text-gray-300">
//             <span className="text-secondary">CONTACT</span>
//           </NavLink>

//           {user ? (
//             <div className="flex items-center space-x-4">
//               <div className="relative group">
//                 <img
//                   src={user.photoURL}
//                   alt="User Profile"
//                   className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
//                 />
//                 <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100">
//                   {user.displayName}
//                 </div>
//               </div>
//               <button
//                 onClick={handleSignOut}
//                 className="text-white font-serif italic text-lg font-semibold hover:text-gray-300"
//               >
//                 <span className="text-secondary">Sign Out</span>
//               </button>
//             </div>
//           ) : (
//             <NavLink to="/login" className="text-white font-serif italic text-lg font-semibold hover:text-gray-300">
//               <span className="text-secondary">LOGIN</span>
//             </NavLink>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;































































































// update---2


import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser();

    Swal.fire({
      title: "Success!",
      text: "You have signed out successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <nav className="bg-purple-900 bg-opacity-70 p-4 sticky top-0 z-50">
      <div className="container  mx-auto flex-col flex md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold md:mb-0">
          <Link to="/" className="hover:text-gray-300 text-xl font-serif italic">
            <span className="text-yellow-500 italic text-xl font-bold">
              SkyLine
            </span>{" "}
            Hotel
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col  md:flex-row space-y-2 items-center md:space-y-0 md:space-x-6">
          <NavLink to="/" className="text-yellow-500 text-lg font-serif italic font-bold hover:text-yellow-500">
            <span className="text-purple-300">H</span>OME
          </NavLink>

          <NavLink to="/rooms" className="text-white font-serif italic text-lg font-semibold hover:text-gray-300">
            <span className="text-purple-200">R</span>
            <span className="text-yellow-500">O</span>
            <span className="text-purple-200">O</span>
            <span className="text-yellow-500">M</span>
            <span className="text-purple-200">S</span>
          </NavLink>

          {user && (
            <NavLink to="/my-bookings" className="text-white font-serif italic text-lg font-semibold hover:text-gray-300">
            
            <span className="text-yellow-500">M</span>
               <span className="text-purple-200">Y</span>
               <span className="text-yellow-500">B</span>
               <span className="text-purple-200">O</span>
               <span className="text-yellow-500">O</span>
               <span className="text-purple-200">I</span>
               <span className="text-yellow-500">N</span>
              <span className="text-purple-200">G</span>
               <span>S</span>
            </NavLink>
          )}

          <NavLink to="/about" className="text-white font-serif italic text-lg font-semibold hover:text-gray-300">
          <span className="text-yellow-500">A</span>
               <span className="text-purple-200">B</span>
               <span className="text-yellow-500">O</span>
              <span className="text-purple-200">U</span>
               <span className="text-yellow-500">T</span>
               
          </NavLink>

          <NavLink to="/contact" className="text-white font-serif italic text-lg font-semibold hover:text-gray-300">
           <span className="text-yellow-500">C</span>
              <span className="text-purple-200">O</span>
               <span className="text-yellow-500">N</span>
               <span className="text-purple-200">T</span>
               <span className="text-yellow-500">A</span>
               <span className="text-purple-200">C</span>
               <span className="text-yellow-500">T</span>
              
          </NavLink>


          <NavLink to="/gallery" className="text-white font-serif italic text-lg font-semibold hover:text-gray-300">
           <span className="text-yellow-500">G</span>
              <span className="text-purple-200">A</span>
               <span className="text-yellow-500">L</span>
               <span className="text-purple-200">L</span>
               <span className="text-yellow-500">E</span>
               <span className="text-purple-200">R</span>
               <span className="text-yellow-500">Y</span>
              
          </NavLink>


          

          {user ? (
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                />
                <div className="absolute font-serif italic top-8 left-1/2 transform -translate-x-1/2 bg-purple-500 bg-opacity-70 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100">
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="text-white font-serif italic text-lg font-semibold hover:text-gray-300"
              >
              <span className="text-yellow-500">S</span>
               <span className="text-purple-200">I</span>
               <span className="text-yellow-500">G</span>
               <span className="text-purple-200">N</span>
               <span className="text-yellow-500">O</span>
              <span className="text-purple-200">U</span>
               <span className="text-yellow-500">T</span>
              
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="text-white font-serif  italic text-lg font-semibold hover:text-gray-300">
              <span className="text-yellow-500">L</span>
               <span className="text-purple-200">O</span>
               <span className="text-yellow-500">G</span>
              <span className="text-purple-200">I</span>
               <span className="text-yellow-500">N</span>
               
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





































































































































































































































































































// update----2






