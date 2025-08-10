import React from 'react';
import './style.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="welcome-text">Sejam <strong>Bem-Vindos</strong> à</p>
        <h1 className="church-name">Primeira Igreja Batista em Augusto Franco</h1>
        <div className="scroll-down">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>


  );
};

export default HeroSection;