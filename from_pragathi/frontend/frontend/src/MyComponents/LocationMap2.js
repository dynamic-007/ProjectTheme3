import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function LocationMap2({ latitude, longitude }) {
  const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={12} style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} />
    </MapContainer>
  );
}

export default LocationMap2;
