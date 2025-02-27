import React, { useEffect, useState, useRef } from 'react';
import MouseFollower from './components/MouseFollower';
import TypewriterText from './components/TypewriterText';
import DecorativeShapes from './components/DecorativeShapes';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import MePage from './components/MePage';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const marqueeRefs = useRef([]);
  const [isMePageOpen, setIsMePageOpen] = useState(false);
  const [isContactPageOpen, setIsContactPageOpen] = useState(false);
  
  // 为每个卡片创建ref
  const cardRefs = [useScrollAnimation(), useScrollAnimation(), useScrollAnimation(), useScrollAnimation(), useScrollAnimation()];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // 视差滚动效果
      marqueeRefs.current.forEach((ref, index) => {
        if (ref) {
          const speed = 0.3 + (index * 0.1);
          const yPos = -(window.scrollY * speed);
          const rotation = index % 2 === 0 ? -2 : 2;
          ref.style.transform = `rotate(${rotation}deg) scale(1.1) translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <MouseFollower />
      
      <nav className="main-nav">
        <div className="logo">Theo Zhang</div>
      </nav>

      <DecorativeShapes />

      <section className="hero-section">
        <div className="hero-content">
          <TypewriterText 
            text="I'm Theo Zhang, always trying to be passionate and creative"
            highlights={[
              { text: 'passionate', class: 'green' },
              { text: 'creative', class: 'orange' }
            ]}
            loop={true}
          />
          <div className="scroll-indicator">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M12 5L12 19M12 19L18 13M12 19L6 13" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      <section 
        className="marquee-section pink" 
        ref={el => marqueeRefs.current[0] = el}
      >
        <div className="marquee-content">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="marquee-item">
              <span>QUALITY</span>
              <span className="diamond">💎</span>
            </div>
          ))}
        </div>
      </section>

      <section 
        className="marquee-section mint" 
        ref={el => marqueeRefs.current[1] = el}
      >
        <div className="marquee-content reverse">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="marquee-item">
              <span>REACTIVITY</span>
              <span className="lightning">⚡</span>
            </div>
          ))}
        </div>
      </section>

      <section 
        className="marquee-section yellow" 
        ref={el => marqueeRefs.current[2] = el}
      >
        <div className="marquee-content">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="marquee-item">
              <span>CREATIVITY</span>
              <span className="star">✨</span>
            </div>
          ))}
        </div>
      </section>

      <section 
        className="marquee-section orange" 
        ref={el => marqueeRefs.current[3] = el}
      >
        <div className="marquee-content reverse">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="marquee-item">
              <span>INNOVATION</span>
              <span className="bulb">💡</span>
            </div>
          ))}
        </div>
      </section>

      <section className="info-cards">
        {[
          {
            title: 'Me',
            description: 'Learn more about me 💁',
            buttonText: 'Who am I',
            color: 'mint',
            onClick: () => setIsMePageOpen(true)
          },
          {
            title: 'Caloogy',
            description: 'See the AI company that is full of luv and passion 💕',
            buttonText: 'Caloogy',
            color: 'yellow',
            onClick: () => window.open('https://caloogy.top', '_blank')
          },
          {
            title: 'Blog',
            description: 'To be released soon...',
            buttonText: 'Plzzz wait 🤫',
            color: 'orange'
          },
          {
            title: 'Photography',
            description: 'To be released soon as well...',
            buttonText: 'wait a sec 🙈',
            color: 'pink'
          },
          {
            title: 'Contact',
            description: 'Fell free to send me a message :)👀',
            buttonText: 'Contact Me',
            color: 'purple',
            onClick: () => setIsContactPageOpen(true)
          }
        ].map((card, index) => (
          <div key={index} className={`info-card ${card.color}`} ref={cardRefs[index]}>
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <button className="card-button" onClick={card.onClick}>
                {card.buttonText}
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      <nav className="bottom-nav">
        <div className="nav-content">
          <div className="nav-left">
            <span>Theo Zhang</span>
          </div>
          <div className="nav-right">
            <a href="#" className="nav-button" onClick={(e) => {
              e.preventDefault();
              setIsMePageOpen(true);
            }}>Me</a>
            <a href="https://caloogy.top" className="nav-button" target="_blank" rel="noopener noreferrer">Caloogy</a>
            <a href="#" className="nav-button" onClick={(e) => {
              e.preventDefault();
              setIsContactPageOpen(true);
            }}>Contact</a>
          </div>
        </div>
      </nav>

      <MePage isOpen={isMePageOpen} onClose={() => setIsMePageOpen(false)} />
      <ContactPage isOpen={isContactPageOpen} onClose={() => setIsContactPageOpen(false)} />
    </div>
  );
}

export default App;
