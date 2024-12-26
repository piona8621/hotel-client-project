import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const hotelLocation = [51.5074, -0.1278]; // Example: Coordinates of London

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const HotelMap = () => {
  const [mapKey, setMapKey] = useState(0); // State to reset the map

  // Cleanup map container to avoid reinitialization error
  useEffect(() => {
    const mapContainer = document.querySelector(".leaflet-container");
    if (mapContainer) {
      mapContainer._leaflet_id = null; // Reset the map container ID to prevent reinitialization issues
    }

    // Cleanup when the component unmounts
    return () => {
      if (mapContainer) {
        mapContainer._leaflet_id = null; // Reset it again on unmount
      }
    };
  }, []);

  // Function to reset the map by updating the key
  const resetMap = () => {
    setMapKey((prevKey) => prevKey + 1); // Increment the key to trigger remounting
  };

  return (
    <div className="my-8 map-container">
     <h2 className="text-4xl font-bold font-serif italic mb-4 text-purple-900">Hotel <span className="text-yellow-400">Map</span></h2>
      {/* Add a key to the MapContainer to force it to reset */}
      <MapContainer
        key={mapKey} // Use the state as the key
        center={hotelLocation}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
        aria-label="Interactive map showing hotel location"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={hotelLocation} icon={defaultIcon}>
          <Popup>
            <strong>Hotel Name</strong>
            <button className="" onClick={resetMap}>Reset Map</button> {/* Button to reset the map */}

            <br />
            Hotel's description or any additional information.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default HotelMap;
