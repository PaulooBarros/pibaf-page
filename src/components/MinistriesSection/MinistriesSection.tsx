import React from 'react';
import { Ministry } from '../../types/types';
import './style.css';

import jovensLogo from '../../assets/Logo Juv.png';
import teensLogo from '../../assets/logo-teens.png';
import logoMM from '../../assets/Logo-MM.png';
import logoCasais from '../../assets/logo-casais.png';

const MinistriesSection: React.FC = () => {
  const ministries: Ministry[] = [
    {
      name: "Juventude Pibaf",
      // description: "Encontros semanais para jovens de 15-30 anos",
      logo: jovensLogo
    },
    {
      name: "Ministério Teens",
      // description: "Escola Bíblica e atividades para adolescentes",
      logo: teensLogo
    },
    {
      name: "Mulheres em Missão",
      // description: "Apoio espiritual e ações sociais lideradas por mulheres",
      logo: logoMM
    },
    {
      name: "Ministério de Casais",
      // description: "Aconselhamento e encontros para casais",
      logo: logoCasais
    }
  ];

  return (
    <section id="ministries" className="ministries-section">
      <div className="container">
        <h2 className="ministries-title">Nossos Ministérios</h2>

        <div className="ministries-grid">
          {ministries.map((ministry, index) => (
            <div key={index} className="ministry-card">
              <img
                src={ministry.logo}
                alt={`Logo do ${ministry.name}`}
                className="ministry-logo"
              />
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
