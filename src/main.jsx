import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "leaflet/dist/leaflet.css";


import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import { AuthProvider } from './AuthContext/AuthContext.jsx';
import { HelmetProvider } from 'react-helmet-async';
// import { AuthProvider } from './AuthContext/AuthContext.jsx';
// import AuthProvider from './AuthContext/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   </HelmetProvider>
  </StrictMode>,
)
