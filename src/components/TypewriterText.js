import React, { useEffect, useState, useRef } from 'react';
import '../styles/TypewriterText.css';

const TypewriterText = ({ text, highlights, loop = false }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    
    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutRef.current = setTimeout(typeText, 50);
      } else {
        setIsTypingComplete(true);
        if (loop) {
          timeoutRef.current = setTimeout(() => {
            currentIndex = 0;
            setDisplayText('');
            setIsTypingComplete(false);
            typeText();
          }, 3000); // 等待3秒后重新开始
        }
      }
    };

    typeText();
    return () => clearTimeout(timeoutRef.current);
  }, [text, loop]);

  const renderText = () => {
    let result = [];
    let currentText = displayText;

    highlights.forEach(({ text: highlightText, class: highlightClass }) => {
      const parts = currentText.split(highlightText);
      if (parts.length > 1) {
        result.push(parts[0]);
        result.push(
          <span key={highlightText} className={`highlight ${highlightClass}`}>
            {highlightText}
          </span>
        );
        currentText = parts.slice(1).join(highlightText);
      }
    });
    result.push(currentText);

    return result;
  };

  return (
    <div className={`hero-text ${isTypingComplete ? 'typing-complete' : ''}`}>
      {renderText()}
    </div>
  );
};

export default TypewriterText; 