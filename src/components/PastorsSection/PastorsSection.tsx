import React from 'react';
import { Pastor } from '../../types/types';
import "./style.css"

// No PastorsSection.tsx
const PastorsSection: React.FC = () => {
    const pastors: Pastor[] = [
      {
        name: "Pastor Nilton",
        role: "Pastor Sênior",
        image: "pastor-nilton.jpg",
        description: "Liderança espiritual e visão pastoral"
      },
      {
        name: "Pastor Zilton",
        role: "Pastor Auxiliar",
        image: "pastor-zilton.jpg",
        description: "Acompanhamento e discipulado"
      }
    ];
  
    return (
      <section id="pastors" className="section">
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