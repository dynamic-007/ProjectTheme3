import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const LocationMap = withGoogleMap(({ location }) => (
  <GoogleMap
    defaultZoom={15} // Adjust the zoom level as needed
    defaultCenter={location} // Pass the location object containing lat and lng
  >
    <Marker position={location} />
  </GoogleMap>
));

export default LocationMap;

