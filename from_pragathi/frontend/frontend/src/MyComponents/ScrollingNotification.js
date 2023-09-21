import React, { useState, useEffect } from 'react';
import './ScrollingNotification.css';

function ScrollingNotification({ message }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the notification
    setIsVisible(true);

    // Hide the notification after a timeout
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Adjust the time (5 seconds in this example)

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`scrolling-notification ${isVisible ? 'visible' : ''}`}>
      {message}
    </div>
  );
}

export default ScrollingNotification;
