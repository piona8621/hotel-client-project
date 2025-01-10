








// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Swal from 'sweetalert2';
// import AuthContext from '../AuthContext/AuthContext';
// import { useContext } from 'react';
// import { Helmet } from 'react-helmet-async';
// import signup from '../assets/image/Tablet login-cuate.svg'

// const Register = () => {
//     const { createUser, updateUserProfile } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [photoURL, setPhotoURL] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');


//     const validatePassword = (password) => {
//         const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
//         return regex.test(password);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Password validation
//         if (!validatePassword(password)) {
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Password is not valid Please try again.',
//                 icon: 'error',
//                 confirmButtonText: 'OK',
//               });
              
//         }

//         // Password confirmation
//         if (password !== confirmPassword) {
//             toast.error("Passwords do not match!");
//             return;
//         }

//         try {
//             // Create the user
//             const userCredential = await createUser(email, password);

//             // Update the user's profile after successful registration
//             const user = userCredential.user;
//             await updateUserProfile(name, photoURL);

//             toast.success("Registration successful!");
//             navigate("/"); // Navigate to home page after registration

//             // Show SweetAlert after registration
//             Swal.fire({
//                 title: 'Registration Successful!',
//                 // text: 'You can now log in.',
//                 icon: 'success',
//                 // confirmButtonText: '',
//             }).then(() => {
//               navigate('/')
//             });
          
//         } catch (err) {
//             console.error(err);
//             Swal.fire({
//               title: 'Error!',
//               text: 'There was an issue with your already registration. Please try again.',
//               icon: 'error',
//               confirmButtonText: 'OK',
//             });
//         }
//     };

//     return (
//         <>
//         <div className="max-w-md mx-auto mt-10 p-6 bg-purple-600 bg-opacity-40 rounded-lg shadow-md">
//             <Helmet>
//                 <title>Register</title>
//             </Helmet>
//             <h2 className="text-4xl font-serif italic text-purple-300 mb-4">Register</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Form Fields */}
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-lg font-semibold text-white">Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-lg font-semibold text-white">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="photoURL" className="block text-lg font-bold text-white">Photo URL (optional)</label>
//                     <input
//                         type="text"
//                         id="photoURL"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                         value={photoURL}
//                         onChange={(e) => setPhotoURL(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="password" className="block text-lg font-semibold text-white">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label htmlFor="confirmPassword" className="block text-lg font-semibold text-white">Confirm Password</label>
//                     <input
//                         type="password"
                        
//                         id="confirmPassword"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                     />
//                 </div>





//                 <button
//                     type="submit"
//                     className="w-full py-2 text-lg px-4 bg-purple-600 bg-opacity-40 text-white font-semibold rounded-md hover:bg-indigo-700"
//                 >
//                     Register
//                 </button>
//             </form>
//             <p className="mt-4 text-center text-xl text-yellow-500 font-semibold ">
//                 Already have an account?{' '}
//                 <a href="/login" className="text-white text-xl font-serif italic hover:text-yellow-500">Login here</a>
//             </p>

//         </div>




// </>
//     );
// };

// export default Register;








































import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import AuthContext from '../AuthContext/AuthContext';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import signup from '../assets/image/Sign up-pana.svg';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Password validation
        if (!validatePassword(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Password is not valid Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }

        // Password confirmation
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            // Create the user
            const userCredential = await createUser(email, password);

            // Update the user's profile after successful registration
            const user = userCredential.user;
            await updateUserProfile(name, photoURL);

            toast.success("Registration successful!");
            navigate("/"); // Navigate to home page after registration

            // Show SweetAlert after registration
            Swal.fire({
                title: 'Registration Successful!',
                icon: 'success',
            }).then(() => {
                navigate('/');
            });

        } catch (err) {
            console.error(err);
            Swal.fire({
                title: 'Error!',
                text: 'There was an issue with your registration. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto mt-10 p-6 bg-purple-600 bg-opacity-40 rounded-lg shadow-md">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="md:w-1/2">
                <h2 className="text-4xl font-serif italic text-purple-300 mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                    {/* Form Fields */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-xl font-serif italic font-semibold text-white">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xl font-serif italic font-semibold text-white">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-xl font-serif italic font-bold text-white">Photo URL (optional)</label>
                        <input
                            type="text"
                            id="photoURL"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-xl font-serif italic font-semibold text-white">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-xl font-serif italic font-semibold text-white">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-xl font-serif italic px-4 bg-purple-600 bg-opacity-40 text-white font-semibold rounded-md hover:bg-indigo-700"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 font-serif italic text-center text-xl text-yellow-500 font-semibold ">
                    Already have an account?{' '}
                    <a href="/login" className="text-white text-xl font-serif italic hover:text-yellow-500">Login here</a>
                </p>
            </div>

            {/* Image */}
            <div className="hidden md:block md:w-1/2 pl-8 mt-24">
                <img
                    src={signup} // Replace with your image URL
                    alt="Registration"
                    className="w-full h-auto rounded-md"
                />
            </div>
        </div>
    );
};

export default Register;





































































































// import React, { useContext, useState } from "react";
// // import { AuthContext } from "../provider/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// // import { Helmet } from "react-helmet-async";
// import AuthContext from "../AuthContext/AuthContext";

// const Register = () => {
//   const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleRegister = (event) => {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     const photoURL = event.target.photoURL.value;

//     // Password validation
//     if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
//       setError("Password must contain an uppercase letter, a lowercase letter, and be at least 6 characters long.");
//       return;
//     }

//     createUser(email, password)
//       .then((result) => {
//         console.log("Registration successful:", result.user);
//         // Update profile with the user data (name and photoURL)
//         updateUserProfile(name, photoURL)
//           .then(() => {
//             toast.success("Registration successful!");
//             navigate("/"); // Navigate to home page
//           })
//           .catch((error) => {
//             setError(error.message);
//             toast.error(error.message);
//           });
//       })
//       .catch((error) => {
//         setError(error.message);
//         toast.error(error.message);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     googleSignIn()
//       .then((result) => {
//         console.log("Google registration successful:", result.user);
//         navigate("/"); // Navigate to home page
//       })
//       .catch((error) => {
//         setError(error.message);
//         toast.error(error.message);
//       });
//   };

//   return (
//     <>
//       {/* <Helmet>
//         <title>Register</title>
//       </Helmet> */}
      
//       <div className=" min-h-screen flex items-center justify-center ">
//         <div className="container max-w-4xl mx-auto p-4 flex flex-col lg:flex-row-reverse items-center justify-center">
//           <div className=" lg:w-2/3 rounded-lg bg-blue-900 opacity-90 w-full  shadow-2xl p-6">
//             <h1 className="text-3xl lg:text-5xl font-bold text-center text-red-600 mb-6">Register</h1>
//             <form onSubmit={handleRegister} className="card-body">
//               {error && <p className="text-red-500 text-center">{error}</p>}
//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text text-lg lg:text-xl font-mono text-white">Name</span>
//                 </label>
//                 <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
//               </div>
//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text text-lg lg:text-xl font-mono text-white">Email</span>
//                 </label>
//                 <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
//               </div>
//               <div className="form-control mb-4">
//                 <label className="label text-lg lg:text-xl ">
//                   <span className="label-text text-lg font-mono text-white">Photo URL</span>
//                 </label>
//                 <input type="url" name="photoURL" placeholder="Photo URL" className="input input-bordered w-full" required />
//               </div>
//               <div className="form-control mb-6">
//                 <label className="label text-lg  lg:text-xl font-mono text-white">
//                   <span className="label-text text-white font-mono text-lg">Password</span>
//                 </label>
//                 <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn bg-blue-900 text-lg lg:text-xl font-mono text-white w-full">Register</button>
//               </div>
//             </form>
//             <div className="form-control mt-6">
//               <button onClick={handleGoogleSignIn} className="btn bg-red-700 text-lg lg:text-xl font-mono text-white w-full">Register with Google</button>
//             </div>
//             <div className="mt-4 text-lg lg:text-xl font-mono text-white text-center">
//               <p>Already have an account? <a href="/login" className="link text-blue-400">Login</a></p>
//             </div>
//           </div>
//         </div>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default Register;











