// import React from "react";

// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Your message has been sent successfully!");
//   };

//   return (
//     <div className="contact-page" style={{ fontFamily: "Arial, sans-serif" }}>
//       {/* Hero Section */}
//       <section
//         className="hero-section"
//         style={{
//           backgroundColor: "#4A90E2",
//           color: "#fff",
//           textAlign: "center",
//           padding: "60px 20px",
//         }}
//       >
//         <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Get in Touch</h1>
//         <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
//           Have questions or need support? We'd love to hear from you!
//         </p>
//       </section>

//       {/* Contact Content */}
//       <div
//         className="contact-container"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: "30px",
//           padding: "40px 20px",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         {/* Contact Form */}
//         <div
//           className="contact-form"
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: "8px",
//             padding: "30px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <h2 style={{ marginBottom: "20px", color: "#4A90E2" }}>Send Us a Message</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group" style={{ marginBottom: "15px" }}>
//               <label
//                 htmlFor="name"
//                 style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//             </div>
//             <div className="form-group" style={{ marginBottom: "15px" }}>
//               <label
//                 htmlFor="email"
//                 style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Your Email"
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//             </div>
//             <div className="form-group" style={{ marginBottom: "15px" }}>
//               <label
//                 htmlFor="subject"
//                 style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 placeholder="Subject"
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//             </div>
//             <div className="form-group" style={{ marginBottom: "15px" }}>
//               <label
//                 htmlFor="message"
//                 style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Your Message"
//                 rows="5"
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 padding: "12px",
//                 backgroundColor: "#4A90E2",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "4px",
//                 fontSize: "1rem",
//                 cursor: "pointer",
//               }}
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Details */}
//         <div
//           className="contact-details"
//           style={{
//             backgroundColor: "#4A90E2",
//             color: "#fff",
//             borderRadius: "8px",
//             padding: "30px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <h2 style={{ marginBottom: "20px" }}>Contact Information</h2>
//           <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
//             <strong>Address:</strong> 123 Luxury Lane, Cityname, Country
//           </p>
//           <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
//             <strong>Phone:</strong> +123 456 7890
//           </p>
//           <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
//             <strong>Email:</strong> support@hotelbooking.com
//           </p>
//           <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
//             <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
//           </p>

//           {/* Social Media Links */}
//           <div style={{ marginTop: "20px" }}>
//             <h3 style={{ marginBottom: "10px" }}>Follow Us</h3>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: "inline-block",
//                 marginRight: "15px",
//                 color: "#fff",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               Facebook
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: "inline-block",
//                 marginRight: "15px",
//                 color: "#fff",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               Instagram
//             </a>
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: "inline-block",
//                 marginRight: "15px",
//                 color: "#fff",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               Twitter
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


































































// import React from "react";
// import contact from "../assets/image/Contact us-pana.svg"
// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Your message has been sent successfully!");
//   };

//   return (
//     <div
//       className="contact-page"
//       style={{
//         fontFamily: "Arial, sans-serif",
//         padding: "40px 20px",
//         maxWidth: "1200px",
//         margin: "0 auto",
//       }}
//     >
//       {/* Hero Section */}
//       <section
//         className="hero-section"
//         style={{
//           backgroundColor: "#4A90E2",
//           color: "#fff",
//           textAlign: "center",
//           padding: "60px 20px",
//         }}
//       >
//         <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Contact Us</h1>
//         <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
//           We're here to assist you. Reach out with any inquiries or support needs!
//         </p>
//       </section>

//       {/* Contact Content */}
//       <div
//         className="contact-container"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: "30px",
//           marginTop: "40px",
//           alignItems: "center",
//         }}
//       >
//         {/* Contact Information */}
//         <div
//           className="contact-info"
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: "8px",
//             padding: "30px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <h2 style={{ color: "#4A90E2", marginBottom: "20px" }}>Contact Information</h2>
//           <p style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
//             <strong>Address:</strong> 123 Luxury Lane, Cityname, Country
//           </p>
//           <p style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
//             <strong>Phone:</strong> +123 456 7890
//           </p>
//           <p style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
//             <strong>Email:</strong> support@hotelbooking.com
//           </p>
//           <p style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
//             <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
//           </p>

//           {/* Social Media Links */}
//           <div>
//             <h3 style={{ marginBottom: "10px" }}>Follow Us</h3>
//             <a
//               href="#"
//               style={{
//                 display: "inline-block",
//                 marginRight: "10px",
//                 color: "#4A90E2",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               Facebook
//             </a>
//             <a
//               href="#"
//               style={{
//                 display: "inline-block",
//                 marginRight: "10px",
//                 color: "#4A90E2",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               Instagram
//             </a>
//             <a
//               href="#"
//               style={{
//                 display: "inline-block",
//                 color: "#4A90E2",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               Twitter
//             </a>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div
//           className="image-container"
//           style={{
//             textAlign: "center",
//           }}
//         >
//           <img
//             src={contact}
//             alt="Contact Us Illustration"
//             style={{
//               width: "100%",
//               borderRadius: "8px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//             }}
//           />
//         </div>
//       </div>

//       {/* Contact Form Section */}
//       <div
//         className="contact-form-section"
//         style={{
//           marginTop: "40px",
//           backgroundColor: "#fff",
//           borderRadius: "8px",
//           padding: "30px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h2 style={{ marginBottom: "20px", color: "#4A90E2" }}>Send Us a Message</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group" style={{ marginBottom: "15px" }}>
//             <label
//               htmlFor="name"
//               style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Your Name"
//               required
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             />
//           </div>
//           <div className="form-group" style={{ marginBottom: "15px" }}>
//             <label
//               htmlFor="email"
//               style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             />
//           </div>
//           <div className="form-group" style={{ marginBottom: "15px" }}>
//             <label
//               htmlFor="subject"
//               style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
//             >
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               placeholder="Subject"
//               required
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             />
//           </div>
//           <div className="form-group" style={{ marginBottom: "15px" }}>
//             <label
//               htmlFor="message"
//               style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Your Message"
//               rows="5"
//               required
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "12px",
//               backgroundColor: "#4A90E2",
//               color: "#fff",
//               border: "none",
//               borderRadius: "4px",
//               fontSize: "1rem",
//               cursor: "pointer",
//             }}
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

































































































































































import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import contact from '../assets/image/Contact us-amico (1).svg'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jhd42d4', 'template_a8330ws', form.current, 'Q8hAmHnrsQpO9tspF')
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been successfully sent. We will get back to you shortly.',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Something went wrong! Please try again later. Error: ${error.text}`,
          });
        }
      );
  };

  return (
    <section className="py-12 mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-yellow-500 font-serif italic text-center mb-6"><span className="text-purple-300">Contact </span>Us</h2>
        <p className="text-2xl text-white font-serif italic text-center mb-20">
          Have questions or need assistance? We'd love to hear from you!
        </p>

        <div className="flex flex-col lg:flex-row-reverse gap-12">
          {/* Lottie Animation Section */}
          <div className="lg:w-1/3 flex justify-center items-center">
            <img src={contact} alt="" />
          </div>

          {/* Contact Information and Form Section */}
          <div className="lg:w-2/3 space-y-8">
            {/* Contact Info */}
            <div className="bg-purple-500 bg-opacity-40 shadow-md rounded-lg p-8">
              <h3 className="text-3xl font-serif italic font-semibold text-purple-800 mb-4">Get in <span className="text-yellow-500">Touch</span></h3>
              <p className="text-white mb-6 font-serif italic text-lg">
                Feel free to reach out via email or phone, or send a message using the form below.
              </p>
              <div className="space-y-4">
                <p>
                  <strong className="text-purple-400 font-serif italic text-2xl">✉️ Email:</strong>{' '}
                  <a
                    href="mailto:Pionara02@gmail.com"
                    className="text-white font-serif italic text-xl hover:underline"
                  >
                    Pionara02@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-purple-400 font-serif italic  text-2xl">📞 Phone:</strong>{' '}
                  <a
                    href="tel:+1234567890"
                    className="text-white font-serif italic text-xl hover:underline"
                  >
                    +1234567890
                  </a>
                </p>
                <p>
                  <strong className="text-purple-400 font-serif italic  text-2xl">📱💬 WhatsApp:</strong>{' '}
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-serif italic text-xl hover:underline"
                  >
                    +1234567890
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-purple-500 bg-opacity-40 shadow-md rounded-lg p-8">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-purple-200 font-serif italic text-2xl font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block font-serif italic text-purple-200 text-2xl font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-purple-200 font-serif italic text-2xl font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    name="message"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-2xl font-serif italic bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-200 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
