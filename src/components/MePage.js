import React, { useEffect, useRef } from 'react';
import '../styles/MePage.css';
import meImage from '../assets/me.png'; // 确保图片路径正确

const MePage = ({ isOpen, onClose }) => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    if (!isOpen) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="me-page-overlay">
      <div className="me-page">
        <button className="close-button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <section className="me-hero me-section" ref={el => sectionsRef.current[0] = el}>
          <div className="profile-image">
            <img src={meImage} alt="Theo Zhang" />
          </div>
          <div className="hero-text">
            <h1>XINYANG ZHANG</h1>
            <h2>THEO ZHANG</h2>
          </div>
        </section>

        <section className="me-summary me-section" ref={el => sectionsRef.current[1] = el}>
          <h2 className="section-title">SUMMARY</h2>
          <p>I am a motivated student with strong communication skills and a passion for innovation. Adept at translating complex technical concepts into accessible solutions, I thrive in collaborative environments and approach challenges with a human-centric mindset. Committed to continuous learning and creating technologies that make a positive impact.</p>
        </section>

        <section className="me-academic me-section" ref={el => sectionsRef.current[2] = el}>
          <h2 className="section-title">ACADEMIC HISTORY</h2>
          <div className="academic-content">
            <h3>Shenzhen College of International Education (Year 12)</h3>
            <p className="year">2023 - 2025</p>
            <ul>
              <li>AS Level: AAAAA</li>
              <li>A-Level: to be updated in Aug, 2025</li>
              <li>Subjects: Further Maths, Computer Science, Economics, Physics, English Literature</li>
              <li>Founder and Leader of Robot Club</li>
              <li>Founder and CEO of Caloogy LLC 
                <a href="https://caloogy.top" target="_blank" rel="noopener noreferrer" className="visit-btn">
                  Visit →
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="me-awards me-section" ref={el => sectionsRef.current[3] = el}>
          <h2 className="section-title">AWARDS AND CERTIFICATION</h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <h3>AMC 12</h3>
              <p>Top 5% in the world (2024)</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🤖</div>
              <h3>National Patent</h3>
              <p>AI Robotic Hands (2024)</p>
            </div>
            <div className="award-item">
              <div className="award-icon">♟️</div>
              <h3>Software Patent</h3>
              <p>AI Chess Engine (2024)</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🎹</div>
              <h3>Music Certificate</h3>
              <p>Piano, 8 Grade</p>
            </div>
          </div>
        </section>

        <section className="me-skills me-section" ref={el => sectionsRef.current[4] = el}>
          <h2 className="section-title">SKILLS</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon">💻</div>
              <h3>Development</h3>
              <ul>
                <li>Python & PyTorch</li>
                <li>HTML & JavaScript</li>
                <li>Swift</li>
                <li>Arduino</li>
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-icon">📊</div>
              <h3>Analysis</h3>
              <ul>
                <li>User Preference Analysis</li>
                <li>Financial Analysis</li>
                <li>Data Science</li>
                <li>Stock Market Analysis</li>
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-icon">🎨</div>
              <h3>Design</h3>
              <ul>
                <li>Website Design</li>
                <li>Marketing and Business</li>
                <li>Public Speech</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MePage; 