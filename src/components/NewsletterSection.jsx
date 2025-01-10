// import React from 'react';

// const NewsletterSection = () => {
//   return (
//     <section className="py-8 px-4 mt-16 bg-purple-800 bg-opacity-30 text-center">
//       <h2 className="text-3xl font-serif italic text-purple-100 font-bold mb-4">Subscribe to Our Newsletter</h2>
//       <form>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="p-2 border rounded-lg w-1/2"
//         />
//         <button type="submit" className="ml-4 px-6 py-2 text-xl font-serif italic bg-purple-900 text-yellow-400 rounded-lg">
//           Subscribe
//         </button>
//       </form>
//     </section>
//   );
// };

// export default NewsletterSection;



































































































import React, { useState } from 'react';
import Swal from 'sweetalert2';
// import emailjs from 'emailjs-com';  // EmailJS import
import emailjs from '@emailjs/browser';
const NewsletterSection = () => {
  const [email, setEmail] = useState(''); // State to store the email
  const [error, setError] = useState(''); // State for error message

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form behavior (page reload)

    // Check if email is entered and is valid
    if (!email) {
      setError('Please enter a valid email.');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      // Reset the error state if validation passes
      setError('');
      // Send the email
      sendEmail(email);
      // Show SweetAlert success
      Swal.fire({
        title: 'Success!',
        text: 'You have subscribed successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      // Reset the email field after submission
      setEmail('');
    }
  };

  // Simple email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Send email using EmailJS
  const sendEmail = (email) => {
    // Define the email parameters
    const templateParams = {
      email: email,  // The user's email from the form
    };

    // Use EmailJS to send the email
    emailjs
      .send(
        'service_jhd42d4',    // Replace with your EmailJS service ID
        'template_a8330ws',   // Replace with your EmailJS template ID
        templateParams,
        'Q8hAmHnrsQpO9tspF'        // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully', response);
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
  };

  return (
    <section className="py-8 px-4 mt-16 bg-purple-800 bg-opacity-30 text-center">
      <h2 className="text-3xl font-serif italic text-purple-100 font-bold mb-4">
        Subscribe to Our Newsletter
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border rounded-lg w-1/2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Update the email state on input change
        />
        <button
          type="submit"
          className="ml-4 px-6 py-2 text-xl font-serif italic bg-purple-900 text-yellow-400 rounded-lg"
        >
          Subscribe
        </button>
      </form>

      {/* Error message if email is invalid */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </section>
  );
};

export default NewsletterSection;
