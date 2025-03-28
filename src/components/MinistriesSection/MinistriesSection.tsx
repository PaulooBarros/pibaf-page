import React from 'react';
import { Ministry } from '../../types/types';
import "./style.css"

const MinistriesSection: React.FC = () => {
const ministries: Ministry[] = [
    {
      name: "Ministério de Jovens",
      description: "Encontros semanais para jovens de 15-30 anos"
    },
    {
      name: "Ministério de Crianças",
      description: "Escola Bíblica e atividades para crianças"
    },
    {
      name: "Ministério de Louvor",
      description: "Grupo responsável pela adoração nos cultos"
    },
  ];

  return (
    <section id="ministries" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Nossos Ministérios</h2>
        <div className="ministries-grid">
          {ministries.map((ministry, index) => (
            <div key={index} className="ministry-card">
              <h3>{ministry.name}</h3>
              <p>{ministry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;