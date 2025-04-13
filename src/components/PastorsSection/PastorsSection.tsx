import React from 'react';
import { Pastor } from '../../types/types';
import "./style.css"
import PrNilton from "../../assets/pr nilton.png";
import PrZilton from "../../assets/pr zilton.png"

// No PastorsSection.tsx
const PastorsSection: React.FC = () => {
    const pastors: Pastor[] = [
      {
        name: "Pastor Nilton",
        role: "Pastor Sênior",
        image: PrNilton,
        description: "Liderança espiritual e visão pastoral"
      },
      {
        name: "Pastor Zilton",
        role: "Pastor Auxiliar",
        image: PrZilton,
        description: "Acompanhamento e discipulado"
      }
    ];
  
    return (
      <section id="pastors" className="pastors-section">
        <div className="container">
          <h2 className="section-title">Nossos Pastores</h2>
          <div className="pastors-grid">
            {pastors.map((pastor, index) => (
              <div key={index} className="pastor-card">
                <div className="pastor-image-container">
                  <img src={pastor.image} alt={pastor.name} className="pastor-img" />
                </div>
                <div className="pastor-info">
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