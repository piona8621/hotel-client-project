// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Banner = () => {
//   const slides = [
//     {
//       title: "Luxury Hotels at Your Fingertips",
//       description:
      
//         "Discover the best rooms with world-class amenities and unparalleled comfort.",
//       // image: "https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fHww", // Replace with actual image URLs
//       buttonText: "Explore Rooms",
//       link: "/rooms",
      
//     },
//     {
//       title: "Relax, Unwind, and Stay",
//       description: "Book your next getaway at our exclusive hotels worldwide.",
//       // image: "https://digital.ihg.com/is/image/ihg/ihg-homepg-refresh-homepg-mktg-mod-imea-1440x720?fit=crop,1&wid=1440&hei=720", // Replace with actual image URLs
//       buttonText: "Book Now",
//       link: "/rooms",
//     },
//     {
//       title: "Experience Comfort Like Never Before",
//       description:
//         "Enjoy personalized services, luxurious rooms, and breathtaking views.",
//       // image: "https://images.trvl-media.com/lodging/1000000/70000/68400/68314/f9f821c8.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill", // Replace with actual image URLs
//       buttonText: "View More",
//       link: "/rooms",
//     },
//   ];

//   return (
//     <div className="relative">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 5000 }}
//         loop
//         className="h-[600px]"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="relative h-full bg-cover bg-center flex items-center justify-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className="text-center bg-purple-500 bg-opacity-35 text-white p-6 rounded-md max-w-lg">
//                 <h1 className="text-3xl md:text-5xl font-bold mb-4">
//                   {slide.title}
//                 </h1>
//                 <p className="text-lg mb-6">{slide.description}</p>
//                 <a
//                   href={slide.link}
//                   className="bg-purple-500 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-md"
//                 >
//                   {slide.buttonText}
//                 </a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;
















































































































import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      title: "Luxury Hotels at Your Fingertips",
      description:
        "Discover the best rooms with world-class amenities and unparalleled comfort.",
      buttonText: "Explore Rooms",
      link: "/rooms",
    },
    {
      title: "Relax, Unwind, and Stay",
      description: "Book your next getaway at our exclusive hotels worldwide.",
      buttonText: "Book Now",
      link: "/rooms",
    },
    {
      title: "Experience Comfort Like Never Before",
      description:
        "Enjoy personalized services, luxurious rooms, and breathtaking views.",
      buttonText: "View More",
      link: "/rooms",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-[60vh] max-h-[600px] flex items-center justify-center"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-full w-full bg-purple-500 bg-opacity-35 p-6 rounded-md shadow-lg">
              <div className="text-center">
                <h1 className="text-3xl text-yellow-500 font-serif italic md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-2xl mb-6 text-white font-serif italic">{slide.description}</p>
                <a
                  href={slide.link}
                  className="bg-purple-500 hover:bg-purple-700 text-xl font-serif italic text-white font-medium px-6 py-3 rounded-md"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;









