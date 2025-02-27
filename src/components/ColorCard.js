import React, { useEffect, useRef } from 'react';
import '../styles/ColorCard.css';

const ColorCard = ({ color, tag, title, buttonText }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`color-card ${color}`}>
      <div className="card-tag">{tag}</div>
      <h2 className="card-title">{title}</h2>
      <button className="card-button">{buttonText}</button>
    </div>
  );
};

export default ColorCard; 