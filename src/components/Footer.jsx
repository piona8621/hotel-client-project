import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-purple-900 bg-opacity-60 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Website Name */}
          <div>
            <h1 className="text-2xl font-bold font-serif italic  text-yellow-500">
              <span className="text-purple-300 font-serif italic text-2xl">SkyLine</span> Hotel </h1>
            <p className="mt-2 text-purple-300  text-lg">
              Bringing you the best experience. Our goal is to provide quality
              services that exceed your expectations.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className=" font-bold text-yellow-500 text-2xl font-serif italic  mb-3">
              Contact Us
            </h2>
            <div className="text-purple-200 text-lg font-semibold">
            <p className="">📍 456 Main Street, YourCity, YS</p>
            <p className="">📞 (987) 654-3210</p>
            <p className="">📧 support@yourwebsite.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className=" font-semibold text-2xl text-white font-serif italic mb-3">
              Follow Us
            </h2>
            <div className="flex space-x-10 ml-32">
              <a
                href="#"
                className="text-gray-300 text-3xl hover:text-blue-500 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook></FaFacebook>
                
              </a>
              <a
                href="#"
                className="text-gray-300 text-3xl hover:text-blue-400 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter></FaTwitter>
              </a>
              <a
                href="#"
                className="text-gray-300 text-3xl hover:text-blue-500 transition duration-300"
                aria-label="Instagram"
              >
              <FaInstagramSquare></FaInstagramSquare>
              </a>
              
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t font-serif italic border-gray-700 pt-4 text-center">
          <p className="text-xl text-white">
            © {new Date().getFullYear()} YourWebsiteName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;










// import React from 'react';
// import { CiFacebook, CiTwitter, CiLinkedin } from 'react-icons/ci';
// import { Typewriter } from 'react-simple-typewriter';
// import { Fade, Slide, Zoom } from 'react-awesome-reveal';

// const Footer = () => {
//   return (
//     <footer className="bg-blue-900 opacity-80 text-white py-6 mt-10">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         {/* Website Name with Typewriter Effect */}
//         <Fade>
//           <div className="mb-4">
//             <h2 className="text-2xl font-mono font-semibold">
//               <Typewriter
//                 words={['Visa Navigator', 'Travel Partner', 'Explore New Destinations']}
//                 loop={true}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={1000}
//               />
//             </h2>
//             <p className="text-sm">
//               &copy; {new Date().getFullYear()} Visa Navigator. All Rights Reserved.
//             </p>
//           </div>
//         </Fade>

//         {/* Contact Information */}
//         <Slide direction="up">
//           <div className="mb-4">
//             <h3 className="text-lg font-semibold">Contact Us</h3>
//             <p className="text-sm">Email: support@visanavigator.com</p>
//             <p className="text-sm">Phone: (123) 456-7890</p>
//           </div>
//         </Slide>

//         {/* Social Media Links */}
//         <Zoom>
//           <div className="flex justify-center space-x-6 text-3xl">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <CiFacebook />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <CiTwitter />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <CiLinkedin />
//             </a>
//           </div>
//         </Zoom>
//       </div>
//     </footer>
//   );
// };

// export default Footer;