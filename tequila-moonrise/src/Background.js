import React, { useEffect, useState } from 'react';

const VideoBackground = ({ videoSrc }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 1500; 
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="vidBgContainer">
      <video
        className="videobg"
        style={{ transform: `translate(-50%, -50%) scale(${scale})` }} 
        autoPlay
        loop
        muted
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" />
    </div>
  );
};

export default VideoBackground;