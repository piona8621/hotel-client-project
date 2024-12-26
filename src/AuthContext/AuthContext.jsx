
















// AuthContext.js or AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FireBase.config";
// import { auth } from "../Firebase/Firebase.config";  // Make sure this path is correct

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Define Google Auth provider
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);  // Store the user in context
      setLoading(false);
      return user;  // Optional: Return user info if needed
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user state after signing out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };



  const signInUser = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password); // Firebase method for email/password sign-in
      const user = userCredential.user;
      setUser(user);  // Store the user in context
      setLoading(false);
      return user;  // Return user info if needed
    } catch (error) {
      console.error("Sign-In Error:", error);
      setLoading(false);
      throw error; // Throw error to be caught in Login component
    }
  };
  



  // Define createUser function
  const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); // Set the user in state
      return userCredential.user;
    } catch (error) {
      console.error("Error creating user: ", error);
      throw error; // Throw error to be caught in Register component
    }
  };


  // Define updateUserProfile function
  const updateUserProfile = async (name, photoURL) => {
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
    } catch (error) {
      console.error("Error updating profile: ", error);
      throw error;
    }
  };




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user,
       signInWithGoogle,
       signOutUser,
       createUser,
       updateUserProfile,
       signInUser,
     loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;












// AuthContext.js
// import React, { createContext, useState, useEffect, useContext } from "react";
// import { auth } from "../Firebase/Firebase.config"; // Importing auth from the config
// import { onAuthStateChanged, signOut } from "firebase/auth";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe(); // Clean up the listener on unmount
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, loading }}>
//       {!loading && children} {/* Prevent rendering children until loading is complete */}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export default AuthContext;



