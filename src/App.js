import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const videoRef = useRef(null);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.loop = true;
  }, []);

  useEffect(() => {
      const timer = setInterval(() => {
        setMinutes(minutes => minutes + 1);
      }, 600); // Change the increment interval as needed. This is currently set to increment every minute.

      return () => {
        clearInterval(timer);
      };
    }, []);
  return (
    <div className="video-container">
      <video autoPlay muted ref={videoRef}>
        <source src={process.env.PUBLIC_URL + 'videos/diablo4-template.mp4'} type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
      <div className="overlay-text">
        <h1>QUEUED FOR LOGIN ~ {minutes} MINUTES <br/> LEFT...</h1>
      </div>
    </div>
  );
}

export default App;