import React from 'react';
import './style.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Primeira Igreja Batista em Augusto Franco</h1>
          <p className="church-call">Uma comunidade que ama e serve a Cristo</p>
          
          <div className="bible-verse">
            <blockquote>
              "Ao Senhor, teu Deus, adorarás, e só a ele darás culto."
              <cite>Mateus 4:10</cite>
            </blockquote>
          </div>

          <div className="hero-buttons">
            <a href="#worship" className="btn">Horários de Culto</a>
            <a 
              href="https://www.instagram.com/pibafaracaju/" 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nosso Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;