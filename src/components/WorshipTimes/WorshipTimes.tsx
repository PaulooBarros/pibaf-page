import React from 'react';
import './style.css';

const WorshipTimes: React.FC = () => {
  return (
    <section id="worship" className="section bg-light">
      <div className="container">
        <div className="worship-header">
          <h2 className="worship-title">Horário</h2>
          <h3 className="worship-subtitle">dos Cultos</h3>
        </div>
        
        <div className="worship-schedule">
          <div className="worship-day">
            <h4>Quinta</h4>
            <p>19:30h</p>
          </div>
          
          <div className="worship-day">
            <h4>Domingo</h4>
            <p>09:00h</p>
            <p>18:00h</p>
          </div>
        </div>
        
        <div className="worship-footer">
          <p>Endereço: R. José Alves Pereira, 79 - Farolândia, Aracaju - SE, 49030-460</p>
        </div>
      </div>
    </section>
  );
};

export default WorshipTimes;