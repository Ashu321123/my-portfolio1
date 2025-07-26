import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/Ashutosh_Bajpai_Image.jpg" alt="Ashutosh Bajpai" />
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ashutosh Bajpai</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer & UI/UX Enthusiast</p>
          <p className="hero-description">
            I create beautiful and functional web applications using modern technologies
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
