import React from 'react';
import "./style.css"; // Mude para o CSS específico do componente

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">Quem Somos</h2>
        <div className="about-content">
          <p>
            A Primeira Igreja Batista em Augusto Franco é uma comunidade cristã comprometida com o ensino bíblico,
            a adoração genuína e o serviço ao próximo. Localizada em Aracaju/SE, temos como missão anunciar o 
            Evangelho de Jesus Cristo e discipular pessoas para transformação de vidas.
          </p>
          <p>
            Nossa visão é ser uma igreja relevante, acolhedora e cheia do Espírito Santo, impactando nossa cidade 
            e estado com o amor de Deus através de nossos cultos, ministérios e ações sociais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;