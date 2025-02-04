

![Screenshot 2025-02-05 022839](https://github.com/user-attachments/assets/47cd86e1-3ecf-4907-a017-c50e6e71b996)

# 🏨 Hotel Booking Platform

**Hotel Booking Platform** is a modern web application that allows users to seamlessly discover, book, and manage hotel room reservations. It features an interactive design, robust authentication, secure booking, and user reviews to enhance the hotel booking experience.

## 🌐 Live Website  
🔗 [Hotel Booking Platform](#) *(Replace with actual live URL)*

---

## 📌 Table of Contents

- [📜 Project Overview](#-project-overview)
- [🎯 Key Features](#-key-features)
- [🛠 Technology Stack](#-technology-stack)
- [⚙️ Setup Guide](#-setup-guide)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [🔑 Authentication](#-authentication)
- [🛏️ Booking System](#-booking-system)
- [📝 Review System](#-review-system)
- [📄 Pages & Navigation](#-pages--navigation)
- [📬 Contact](#-contact)

---

## 📜 Project Overview

The **Hotel Booking Platform** is designed to provide users with an engaging experience for discovering and reserving hotel rooms. It ensures a **secure, user-friendly, and responsive** interface with real-time booking and review functionalities.

---

## 🎯 Key Features

✔ **Room Management** – View, filter, and book hotel rooms.  
✔ **Secure Authentication** – Login/Signup via **Email/Password & Google/GitHub**.  
✔ **Dynamic Booking System** – Book and manage room reservations in real-time.  
✔ **Interactive Reviews** – Users can rate and review booked rooms.  
✔ **Booking Date Selection** – Users can choose a specific date for their stay.  
✔ **Cancellation & Modification** – Users can cancel or update their bookings.  
✔ **Fully Responsive** – Optimized for **mobile, tablet, and desktop**.  
✔ **Dark/Light Mode** – Toggle between dark and light themes.  
✔ **Secure API & Database** – Firebase authentication & MongoDB database.  

---

## 🛠 Technology Stack

### **Frontend**
- React.js
- Tailwind CSS
- Daisy UI
- Framer Motion (Animations)
- React Helmet (SEO & Meta Data)
- React Leaflet (Map Integration)
- Moment.js (Date Handling)

### **Backend**
- Node.js
- Express.js
- MongoDB

### **Authentication**
- Firebase (Google & Email-based)

### **Hosting**
- **Client:** Netlify
- **Server:** Vercel

---

## ⚙️ Setup Guide

### 🔹 Frontend Setup

1. Clone the repository and navigate to the client folder:

   ```bash
   git clone https://github.com/your-username/hotel-booking-platform.git
   cd hotel-booking-platform/client
npm install
npm start
🔑 Authentication
🔹 User Login
Login page allows users to log in using email/password or Google/GitHub authentication.
If login is successful, users are redirected to their desired page.
If unsuccessful, a toast error message is displayed.
Forgot Password and Register options are provided.
🔹 User Registration
Users can sign up with name, email, photo URL, and password.
Password validation requirements:
At least one uppercase letter
At least one lowercase letter
Minimum length: 6 characters
Users can also register via Google/GitHub authentication.
🔹 Private Routes – Users must be logged in to access:

My Bookings Page
Posting Reviews
Booking Rooms
🛏️ Booking System
Rooms Page: Displays all rooms from the database.
Room Details Page: Shows complete room information with reviews.
Booking Process:
Users can book available rooms by selecting a date.
"Book Now" button opens a modal for confirmation.
The system ensures rooms are not double-booked.
Once booked, the room becomes unavailable for others.
Booking Cancellation:
Users can cancel bookings only 1 day before the booked date.
After cancellation, the room becomes available again.
Update Booking Date:
Users can modify their booking date via a modal.
📝 Review System
Only booked users can leave reviews.
Reviews include:
Username (non-editable)
Rating (1-5)
Comment
Timestamp
Reviews are sorted in descending order (latest first).
Reviews appear on the Room Details Page.
Users cannot review a room more than once.
📄 Pages & Navigation
🏠 Home Page
Navbar (Website Logo, Rooms, My Bookings, Login/Logout)
Banner/Slider (Heading, Short Description, CTA button to Rooms page)
Featured Rooms (6 Top-rated rooms with "Book Now" buttons)
Hotel Location Map (React-Leaflet integration)
User Reviews Carousel
Special Offers Modal
Footer (Contact details, social links, copyright)
📋 Rooms Page
Grid/Table layout displaying all rooms.
Filter System (Price range filter implemented on server-side).
Clicking a room opens Room Details Page.
📄 Room Details Page
Displays all room details from the database.
Shows user reviews (if available).
Book Now Button opens a modal for booking.
Reviews Section (Users can post a review if they booked this room).
📁 My Bookings Page (Private)
Displays only rooms booked by the logged-in user.
Cancel Button – Users can cancel bookings.
Update Booking Date Button – Allows users to change the booking date.
Give Review Button – Opens a modal for submitting reviews.
🚫 404 Page
Custom 404 Page with an error message and a "Back to Home" button.
📬 Contact
Have questions or suggestions? Reach out to us at:

📧 Email: support@hotelbooking.com
🔗 GitHub: Hotel Booking Repository (Replace with actual repository link)

🚀 Hotel Booking Platform – Your seamless hotel reservation experience! 🏨✨

markdown
Copy
Edit

### ✅ What This README Covers:
- **All project requirements** (features, authentication, pages)
- **Detailed setup instructions** (frontend, backend)
- **Technology stack** (frontend, backend, authentication)
- **Screenshots section** *(add your images here)*
- **Contact details** *(GitHub, Email)*

This README ensures **clarity, completeness, and professionalism** for developers and reviewers. 🚀 Let me know if you'd li








