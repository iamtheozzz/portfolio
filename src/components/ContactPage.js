import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contact-page-overlay">
      <div className="contact-page">
        <button className="close-button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <section className="contact-hero">
          <h1>GET IN TOUCH</h1>
          <p className="subtitle">Let's create something amazing together</p>
        </section>

        <section className="contact-info">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>+1 514-464-4666</p>
            </div>
            <div className="info-item clickable" 
                 onClick={() => window.location.href = 'mailto:connect@theozhang.xyz'}
                 style={{ cursor: 'pointer' }}
                 title="Click to send email"
            >
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>connect@theozhang.xyz</p>
            </div>
            <div className="info-item clickable" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Montreal,QC', '_blank')}>
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Montreal, QC</p>
            </div>
            <div className="info-item clickable" onClick={() => window.open('https://caloogy.com', '_blank')}>
              <div className="info-icon">🌐</div>
              <h3>Website</h3>
              <p>caloogy.com</p>
            </div>
          </div>
        </section>

        <section className="social-links">
          <h2>CONNECT WITH ME</h2>
          <div className="social-grid">
            <a href="https://www.instagram.com/7heozzz/" target="_blank" rel="noopener noreferrer" className="social-button instagram">
              <span className="icon">📸</span>
              Instagram
            </a>
            <a href="https://github.com/iamtheozzz" target="_blank" rel="noopener noreferrer" className="social-button github">
              <span className="icon">💻</span>
              GitHub
            </a>
            <a href="https://x.com/7heo_zzz" target="_blank" rel="noopener noreferrer" className="social-button facebook">
              <span className="icon">🆇</span>
              X(Twitter)
            </a>
            <a href="https://www.linkedin.com/in/theoxyz" target="_blank" rel="noopener noreferrer" className="social-button whatsapp">
              <span className="icon">🧑‍💻</span>
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage; 