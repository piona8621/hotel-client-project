import React, { useState } from 'react';

// For local images, import them correctly
// import hotel2 from '../assets/image/One_bedroom_Suite_Mountain_View_1.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Categories with both local and external image URLs
  const categories = [
    {
      name: 'Hotel',
      images: [
        'https://images.unsplash.com/photo-1718506748678-8531c0b0357e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1660557989695-14fac79c086d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDI%3D', // Example of a local image
        'https://images.unsplash.com/photo-1660557989725-f511e9fa6267?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example of another local image
      ],
    },
    { name: 'Rooms', images: ['https://static.arocdn.com/Sites/50/powerscourthotel2021/uploads/images/FullLengthImages/extralargeimage64/One_bedroom_Suite_Mountain_View_1.jpg',
       'https://www.azurabermuda.com/wp-content/uploads/2023/02/Ocean-View-Guest-Room-1680x1120.jpg',
        'https://www.manila-hotel.com.ph/wp-content/uploads/2020/06/Pres-Suite-1-DSC_1906-scaled.jpg'] },
    { name: 'Amenities', images: ['https://images.unsplash.com/photo-1710378439817-6159c79bda03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QW1lbml0aWVzJTIwaG90ZWx8ZW58MHx8MHx8fDI%3D',
       'https://www.hotelmogel.com/wp-content/uploads/2020/12/iStock-1224490837.jpg',
        'https://www.endeavorczech.cz/wp-content/uploads/2024/11/premium-hotel-toiletries-Endeavor-1024x579.jpg'] },
    { name: 'Events', images: ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     'https://images.unsplash.com/photo-1561912774-79769a0a0a7a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
     'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGV2ZW50cyUyMGhvdGVsfGVufDB8fDB8fHwy'] },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-16 px-6">
      <h2 className="text-4xl  font-bold font-serif italic text-center text-purple-200 mb-8">
        Explore Our Gallery
      </h2>

      {/* Categories */}
      {categories.map((category, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-3xl font-semibold font-serif italic text-yellow-400 mb-6">{category.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.images.map((image, i) => (
              <div
                key={i}
                className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image} // Directly use the URL or path for image
                  alt={image}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal for viewing larger image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={selectedImage} // Use the selected image
              alt={selectedImage}
              className="w-full max-w-lg"
            />
            <button
              onClick={closeModal}
              className="mt-4 text-white bg-red-500 px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
