import {
  createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
// import Register from "../pages/Register";
import RoomDetails from "../pages/RoomDetails";
import Rooms from "../pages/Rooms";
import MyBookings from "../pages/MyBookings";
// import PrivateRoute from "./PrivateRoute";
import PrivateRoute from "../router/PrivateRoute";

import ReviewModal from "../pages/ReviewModal";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/rooms',
        element: <Rooms></Rooms>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/room-details/:id',
        element: <PrivateRoute>
          <RoomDetails></RoomDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://hotel-booking-server-project.vercel.app/hotels/${params.id}`)
      },
      {
        path: '/my-bookings',
        element:<PrivateRoute>
          <MyBookings></MyBookings>
        </PrivateRoute>,
        
      },
      {
        path: '/review',
        element: <ReviewModal></ReviewModal>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }

    ]
  },

]);


export default router