import React, { useState, useEffect } from 'react';

function LocationInfo() {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    // Define the Geocoding API URL
    const geocodingUrl = `http://maps.google.com/maps/api/geocode/xml?address=sydney&sensor=false`;

    // Make a GET request to the Geocoding API
    fetch(geocodingUrl)
      .then((response) => response.text())
      .then((data) => {
        // Parse the XML response data
        // You can use a library like xml2js to parse XML into JSON if needed
        // Here, we're just setting the raw XML data into the state
        setLocationData(data);
      })
      .catch((error) => {
        console.error('Error fetching location data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Location Information</h2>
      <pre>{locationData}</pre>
    </div>
  );
}

export default LocationInfo;
