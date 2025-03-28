import React from 'react';
import './style.css';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="location-section">
      <div className="container">
        <h2 className="section-title">Nossa Localização</h2>
        
        <div className="map-container-wrapper">
          <iframe
            title="Localização da Igreja"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.073146679742!2d-37.072859!3d-10.908582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab13d1e5d16e5%3A0x7b1d6a68f4c3a9f5!2sPrimeira%20Igreja%20Batista%20em%20Augusto%20Franco!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            className="google-map"
            allowFullScreen
            loading="lazy"
          />
          
          <div className="map-overlay">
            <p>R. José Alves Pereira, 79 - Farolândia, Aracaju - SE, 49030-460</p>
            <a 
              href="https://maps.app.goo.gl/syG1r1FUY3fMHBKY7" 
              className="map-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;