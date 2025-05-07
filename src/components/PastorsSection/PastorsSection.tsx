import React from 'react';
import { Pastor } from '../../types/types';
import "./style.css"
// import PrNilton from "../../assets/pastorNilton2.jpg";
// import PrZilton from "../../assets/pastorZilton.jpg"
import AvatarGenerico from "../../assets/avatarGenerico.jpg"

// No PastorsSection.tsx
const PastorsSection: React.FC = () => {
    const pastors: Pastor[] = [
      {
        name: "Pr. Nilton Melo",
        role: "Pastor Sênior",
        image: AvatarGenerico,
        description: "Liderança espiritual e visão pastoral"
      },
      {
        name: "Pr. Zilton Santos",
        role: "Pastor Auxiliar",
        image: AvatarGenerico,
        description: "Acompanhamento e discipulado"
      }
    ];
  
    return (
      <section id="pastors" className="pastors-section">
        <div className="container">
          <h2 className="section-title">Nossos Pastores</h2>
          <div className="pastors-grid active">
            {pastors.map((pastor, index) => (
              <div key={index} className="pastor-card">
                <div className="pastor-image-container active">
                  <img src={pastor.image} alt={pastor.name} className="pastor-img" />
                </div>
                <div className="pastor-info active">
                  <h3>{pastor.name}</h3>
                  <p className="pastor-role">{pastor.role}</p>
                  <p className="pastor-description">{pastor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default PastorsSection;