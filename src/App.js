// Import necessary modules and components
import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import './App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  // Create a ref for the video element
  const videoRef = useRef(null);

  // Initialize the state of minutes to 42
  const [minutes, setMinutes] = useState(42);

  // Use effect hook for looping the video
  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.loop = true;
  }, []); // Empty dependency array means this effect runs once on mount

  // Use effect hook for the timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setMinutes(minutes => {
        // Generate a random number between 0 and 1
        const random = Math.random();

        // If the random number is less than 0.5, decrement the minutes (but not below 0)
        if (random < 0.1) {
          return Math.max(minutes - 1, 0);
        }

        // Otherwise, increment the minutes
        else {
          return minutes + 1;
        }
      });
    }, 600); // This effect runs every 600 milliseconds

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Render the component
  return (
    <div>
      <Analytics />
      <div className="header">
        {/* GitHub link */}
        <a href="https://github.com/f00d4tehg0dz/diablo-4-queue-simulator" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* Twitter link */}
        <a href="https://twitter.com/_ok_adrian" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <div className="video-container">
        <video autoPlay muted ref={videoRef}>
          <source src={process.env.PUBLIC_URL + 'videos/diablo4-template.mp4'} type="video/mp4" />
          {/* Fallback text if the browser does not support HTML5 video */}
          Your browser does not support HTML5 video.
        </video>
        <div className="overlay-text">
          {/* Display the timer */}
          <h1>QUEUED FOR LOGIN ~ {minutes} MINUTES <br /> LEFT...</h1>
        </div>
      </div>
    </div>
  );
}

export default App;