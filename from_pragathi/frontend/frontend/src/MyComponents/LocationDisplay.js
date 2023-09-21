import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';

function LocationDisplay() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Create a map instance and set its view to the provided latitude and longitude
    const map = L.map(mapRef.current).setView([28.6139, 77.2090], 13);

    // Add a tile layer (you can choose from various map providers)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      

    // Add a marker to the map
    L.marker([28.6139, 77.2090]).addTo(map);
  }, []); // Empty dependency array

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
}

export default LocationDisplay;
