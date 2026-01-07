import React, { useEffect, useState } from 'react';
import './../styles/App.css';

const StarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create 150 stars at random positions
    const newStars = [];
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 5 + 2
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="stars-container">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.twinkleSpeed}s`
          }}
        ></div>
      ))}
      {/* Nebula effects */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>
    </div>
  );
};

export default StarsBackground;