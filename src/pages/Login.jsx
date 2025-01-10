// // Login.jsx
// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthContext from '../AuthContext/AuthContext';
// import Swal from 'sweetalert2';
// import { Helmet } from 'react-helmet-async';
// // import { AuthContext } from '../AuthContext/AuthContext';
// // import AuthContext from '../AuthContext/AuthContext';


// const Login = () => {
//     const { signInUser, signInWithGoogle, loading, error } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // Handle login form submit
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         await signInUser(email, password);
//     //         navigate('/'); // Redirect to home page after successful login
//     //     } catch (err) {
//     //         console.error(err.message);
//     //     }
//     // };   

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         await signInUser(email, password);
//         Swal.fire({
//           title: 'Success!',
//           text: 'You have logged in successfully.',
//           icon: 'success',
//           confirmButtonText: 'OK',
//         });
//         navigate('/'); // Redirect to home page after successful login
//       } catch (err) {
//         console.error(err.message);
//         Swal.fire({
//           title: 'Error!',
//           text: 'Invalid credentials. Please try again.',
//           icon: 'error',
//           confirmButtonText: 'OK',
//         });
//       }
//     };

//     const handleSignInUser = async (e) => {
//       e.preventDefault();
//       try {
//         await signInUser(email, password);
//         Swal.fire({
//           title: 'Success!',
//           text: 'You have logged in successfully.',
//           icon: 'success',
//           confirmButtonText: 'OK',
//         });
//         navigate('/'); // Redirect to home page after successful login
//       } catch (err) {
//         console.error(err.message);
//         Swal.fire({
//           title: 'Error!',
//           text: 'Invalid credentials. Please try again.',
//           icon: 'error',
//           confirmButtonText: 'OK',
//         }).then(() => {
//           setEmail('');  // Clear email field
//           setPassword('');  // Clear password field
//         });
//       }
//     };
    

//     const handleGoogleLogin = async () => {
//       try {
//         await signInWithGoogle();
//         Swal.fire({
//           title: 'Success!',
//           text: 'You have logged in successfully with Google.',
//           icon: 'success',
//           confirmButtonText: 'OK',
//         });
//         navigate('/'); // Redirect to home page after successful login
//       } catch (err) {
//         console.error(err.message);
//         Swal.fire({
//           title: 'Error!',
//           text: 'Google login failed. Please try again.',
//           icon: 'error',
//           confirmButtonText: 'OK',
//         });
//       }
//     };
  




//     return (
//         <div className="max-w-sm mx-auto p-6 mt-10 bg-purple-600 bg-opacity-45 rounded-lg shadow-md">
//           <Helmet>
//             <title>Login</title>
//           </Helmet>
//             <h2 className="text-2xl font-semibold font-serif italic text-white  mb-4"><span className='text-yellow-400'>LOG</span>
//             <span>IN</span></h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block  text-xl font-semibold  text-fuchsia-500">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label htmlFor="password" className="block  font-semibold text-amber-500 text-xl">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button onClick={handleSignInUser}
//                     type="submit"
//                     className="w-full text-xl py-2 px-4 bg-purple-500 bg-opacity-40 text-white font-semibold rounded-md hover:bg-purple-600"
//                     disabled={loading}
//                 >
//                     {loading ? 'Loading...' : 'Login'}
//                 </button>
//             </form>
            
//             <button
//                 onClick={handleGoogleLogin}
//                 className="mt-4 w-full py-2 px-4 bg-yellow-500 bg-opacity-40 text-white font-semibold rounded-md hover:bg-yellow-600"
//                 disabled={loading}
//             >
//                 {loading ? 'Loading...' : 'Login with Google'}
//             </button>
//             <p className="mt-4 text-lg font-semibold  text-white text-center">
//                 Don't have an account?{' '}
//                 <a
//                     href="/register"
//                     className="text-xl font-serif italic  text-yellow-500 hover:text-indigo-800"
//                 >
//                     Register here
//                 </a>
//             </p>
//         </div>
//     );
// };

// export default Login;



























































































import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import login from '../assets/image/Tablet login-cuate.svg'

const Login = () => {
  const { signInUser, signInWithGoogle, loading, error } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      Swal.fire({
        title: 'Success!',
        text: 'You have logged in successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      navigate('/'); // Redirect to home page after successful login
    } catch (err) {
      console.error(err.message);
      Swal.fire({
        title: 'Error!',
        text: 'Invalid credentials. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        title: 'Success!',
        text: 'You have logged in successfully with Google.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      navigate('/'); // Redirect to home page after successful login
    } catch (err) {
      console.error(err.message);
      Swal.fire({
        title: 'Error!',
        text: 'Google login failed. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="max-w-md w-full p-6 bg-purple-600 bg-opacity-45 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold font-serif italic text-white mb-4">
          <span className="text-yellow-400">LOG</span>
          <span>IN</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl font-semibold font-serif italic text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-serif italic font-semibold text-white text-xl">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full text-xl py-2 px-4 font-serif italic bg-purple-500 bg-opacity-40 text-white font-semibold rounded-md hover:bg-purple-600"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full py-2 px-4 font-serif italic bg-yellow-500 bg-opacity-40 text-white font-semibold rounded-md hover:bg-yellow-600"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login with Google'}
        </button>
        <p className="mt-4 text-xl font-serif italic font-semibold text-white text-center">
          Don't have an account?{' '}
          <a
            href="/register"
            className="text-xl font-serif italic text-yellow-500 hover:text-indigo-800"
          >
            Register here
          </a>
        </p>



      </div>
{/* Right side image */}

<div className='hidden lg:block w-1/2 lg:w-96 ml-20 bg-cover bg-center'>
        <img src={login} alt="" />
      </div>

    </div>
  );
};

export default Login;









































































