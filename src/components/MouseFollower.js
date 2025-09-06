import React, { useEffect, useState } from 'react';
import '../styles/MouseFollower.css';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className={`mouse-follower ${isHovering ? 'hover' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    />
  );
};

export default MouseFollower; 