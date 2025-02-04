

![Screenshot 2025-02-05 022839](https://github.com/user-attachments/assets/47cd86e1-3ecf-4907-a017-c50e6e71b996)




# Hotel Booking Platform

## Purpose
The Hotel Booking Platform provides users with a seamless and engaging experience for discovering and booking hotel rooms. It ensures secure user authentication, robust functionality, and interactive design for a trustworthy and enjoyable user journey.

---

## Live URL
https://hotel-booking-project-24394.web.app/

---

## Key Features

### General Features:
- Fully responsive design for mobile, tablet, and desktop.
- Eye-pleasing color contrast and alignment.
- User-friendly navigation and smooth animations.

### Homepage:
- **Banner**: Slider with a title, description, and button linking to the Rooms page.
- **Map Integration**: Interactive map using `react-leaflet` to display hotel location.
- **Featured Rooms**: Highlights six top-rated rooms with images, descriptions, and booking options.
- **Special Offers & Promotions**: Pop-up/modal to showcase discounts.
- **User Reviews**: Sorted by latest reviews with a carousel for variety.
- **Extra Sections**: Two custom-designed sections.
  ### Authentication:
- **Login**: Email and password-based login with Google/GitHub authentication.
- **Register**: User registration with name, email, photo, and password validation.
- **Error Handling**: Real-time validation and toast/sweet alert notifications.

### Rooms Page:
- Displays all available rooms from the database.
- Allows server-side filtering by price range.
- Each room redirects to a detailed page on click.

### Room Details Page:
- Displays complete room details, including reviews.
- Booking functionality with a modal for confirmation and date selection.
- Dynamic room availability management.

### My Bookings Page:
- Lists all rooms booked by the logged-in user.
- Options to cancel bookings, update booking dates, and add reviews.

### Review System:
- Users can post reviews with a username, rating, comment, and timestamp.
- Reviews are visible on the room details page.

### 404 Page:
- A creative design with a "Back to Home" button.
---

## NPM Packages Used

### Client-Side:
- **React**: Framework for building the user interface.
- **react-router-dom**: For handling routing.
- **react-toastify**: For toast notifications.
- **framer-motion**: For smooth animations.
- **react-leaflet**: To embed interactive maps.
- **moment.js**: For date validation and comparison.
- **react-helmet**: For updating browser tab titles and meta-data.

### Server-Side:
- **Express**: Web framework for building server APIs.
- **MongoDB**: Database for storing room, booking, and user data.
- **Mongoose**: ODM for MongoDB.
- **cors**: To handle cross-origin requests.
- **dotenv**: To manage environment variables.
- **bcryptjs**: For hashing passwords.
- **jsonwebtoken**: For secure user authentication.

---

## Installation Instructions

### Prerequisites:
- Node.js installed on your system.
- MongoDB Atlas for the database.
- Firebase project for authentication.

### Steps:
1. Clone the repository:
   ```bash
   git clone [repository_url]
   ```
2. Navigate to the project directory and install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Set up environment variables:
   - For Firebase and MongoDB credentials, create `.env` files in both client and server directories.
4. Run the project:
   - Start the client:
     ```bash
     cd client
     npm start
     ```
   - Start the server:
     ```bash
     cd server
     npm start
     ```
5. Open the application in your browser at `http://localhost:3000`.

---

## License
This project is for educational purposes and is not intended for commercial use.

