import React from 'react';
import './style.css';

const LoveYourChurchSection: React.FC = () => {
  return (
    <section id="love-your-church" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Ame sua Igreja</h2>
        <div className="bible-verse">
          <blockquote>
            "Ao Senhor, teu Deus, adorarás, e só a ele darás culto."
            <cite>Mateus 4:10</cite>
          </blockquote>
        </div>
        <div className="love-content">
          <div className="love-card">
            <h3>Por que amar sua igreja?</h3>
            <p>
              A igreja é o corpo de Cristo na Terra, uma família espiritual onde 
              crescemos juntos na fé. Amar sua igreja é expressar amor ao próprio 
              Cristo, que é o cabeça da igreja.
            </p>
          </div>
          <div className="love-card">
            <h3>Como demonstrar esse amor?</h3>
            <ul>
              <li>Participando ativamente dos cultos e atividades</li>
              <li>Servindo com seus dons e talentos</li>
              <li>Apoiando financeiramente a obra de Deus</li>
              <li>Orando pela liderança e membros</li>
              <li>Convidando outros para conhecerem Jesus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveYourChurchSection;