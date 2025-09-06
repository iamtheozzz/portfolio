import React from 'react';
import '../styles/DecorativeShapes.css';

const DecorativeShapes = () => {
  return (
    <div className="decorative-shapes">
      {/* 丝带装饰 */}
      <div className="shape ribbon-1">
        <svg viewBox="0 0 200 100">
          <path d="M0,50 Q50,0 100,50 T200,50" fill="none" stroke="var(--purple)" strokeWidth="3"/>
        </svg>
      </div>
      <div className="shape ribbon-2">
        <svg viewBox="0 0 150 80">
          <path d="M0,40 Q37.5,0 75,40 T150,40" fill="none" stroke="var(--mint)" strokeWidth="3"/>
        </svg>
      </div>
      <div className="shape ribbon-3">
        <svg viewBox="0 0 180 90">
          <path d="M0,45 Q45,0 90,45 T180,45" fill="none" stroke="var(--pink)" strokeWidth="3"/>
        </svg>
      </div>

      {/* 圆形装饰 */}
      <div className="shape circle-1"></div>
      <div className="shape circle-2"></div>
      <div className="shape circle-3"></div>
      <div className="shape circle-small-1"></div>
      <div className="shape circle-small-2"></div>

      {/* 三角形装饰 */}
      <div className="shape triangle-1"></div>
      <div className="shape triangle-2"></div>
      <div className="shape triangle-3"></div>

      {/* 方形装饰 */}
      <div className="shape square-1"></div>
      <div className="shape square-2"></div>

      {/* 点状装饰 */}
      <div className="shape dot-group-1">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="shape dot-group-2">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* 波浪线装饰 */}
      <div className="shape wave-1">
        <svg viewBox="0 0 100 20">
          <path d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10" fill="none" stroke="var(--orange)" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

export default DecorativeShapes; 