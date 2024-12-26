import React, { useState } from 'react';

const UpdateDateModal = ({ booking, onClose, onUpdate }) => {
  const [newDate, setNewDate] = useState('');

  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleUpdate = () => {
    if (newDate) {
      onUpdate(newDate);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Update Booking Date</h3>
        <p>Change the booking date for the room "{booking.roomName}"</p>
        <div className="mt-4">
          <input
            type="date"
            value={newDate}
            onChange={handleDateChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded mr-2">
            Close
          </button>
          <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">
            Update Date
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDateModal;
