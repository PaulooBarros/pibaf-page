import React from 'react';
import './style.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="welcome-container">
          <p className="welcome-text">Sejam <span className="highlight">Bem-Vindos</span> à</p>
          <div className="divider"></div>
        </div>
        <h1 className="church-name">Primeira Igreja Batista em Augusto Franco</h1>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;