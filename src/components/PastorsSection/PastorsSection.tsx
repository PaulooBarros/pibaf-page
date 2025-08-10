import React, {useEffect, useRef } from "react";
import { Pastor } from "../../types/types";
import "./style.css";
import pastorNilton from "../../assets/PrNilton1redimensionada.jpeg";
import pastorZilton from "../../assets/PrZilton.jpeg";

const PastorsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const pastors: Pastor[] = [
    {
      name: "Nilton Melo",
      role: "Pastor Presidente",
      image: pastorNilton,
      photoClass: "pr-nilton-photo", // Classe especial para o Pr. Nilton
      description:
        "Com mais de 25 anos de ministério, o Pr. Nilton é um líder apaixonado pela palavra de Deus, dedicado à formação espiritual da igreja e à liderança visionária para crescimento e transformação de vidas.",
    },
    {
      name: "Zilton Santos",
      role: "Pastor Auxiliar",
      image: pastorZilton,
      description:
        "O Pr. Zilton tem um coração para o discipulado e acompanhamento pastoral, com foco em ajudar cada membro a crescer na fé e a desenvolver um relacionamento profundo com Cristo.",
    },
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="pastors-section" id="pastors" ref={sectionRef}>
      <div className="pastors-container">
        <div className="section-header">
          <span className="section-label">Nossos Pastores</span>
          <h2 className="section-title">
            <span className="title-decoration"></span>
            Pastores que Servem
            <span className="title-decoration"></span>
          </h2>
          <p className="section-subtitle">
            Conheça a equipe pastoral que lidera, ensina e cuida da nossa igreja
          </p>
        </div>

        <div className="pastors-grid">
          {pastors.map((pastor, index) => (
            <div 
              key={pastor.name}
              className="pastor-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div 
                className="photo-container"
                role="button"
                tabIndex={0}
              >
                <img 
                  src={pastor.image} 
                  alt={pastor.name} 
                  className={`pastor-photo ${pastor.photoClass || ""}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/default-pastor.jpg';
                  }}
                />
              </div>
              <div className="pastor-info">
                <h3 className="pastor-name">{pastor.name}</h3>
                <p className="pastor-role">{pastor.role}</p>
                <div className="divider"></div>
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