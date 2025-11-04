import React, { useEffect, useRef } from "react";
import { Pastor } from "../../types/types";
import "./style.css";
import pastorNilton from "../../assets/prNilton.jpg";
import pastorZilton from "../../assets/PrZilton.jpeg";

const PastorsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const pastors: Pastor[] = [
    {
      name: "Nilton Melo",
      role: "Pastor Presidente",
      image: pastorNilton,
      photoClass: "pr-nilton-photo", // Classe especial para o Pr. Nilton
      description: `
    O Pr. Nilton é um líder comprometido com a Palavra de Deus, dedicado à formação espiritual da igreja
    e à liderança visionária para o crescimento e a transformação de vidas. Atuou na denominação como
    presidente da Juventude Batista de Sergipe (JUBASE) e foi 1º Vice-Presidente da Convenção Batista
    de Sergipe (CBS). Serviu por vários anos como relator da Comissão de Filiação e Acompanhamento da
    Ordem dos Pastores Batistas do Brasil, seção sergipana, além de atuar como Assessor Auxiliar da
    Aliança Bíblica Universitária (ABU). É formado em Economia, possui mestrado e doutorado pela
    Universidade Federal de Sergipe (UFS) e atua como professor de Economia no Instituto Federal de
    Sergipe (IFS), campus Aracaju.
  `
    },


    {
      name: "Zilton Santos",
      role: "Pastor Auxiliar",
      image: pastorZilton,
      description:
        "Zilton José dos Santos, nascido em outubro de 1958, é casado e Bacharel em Teologia pela Faculdade Batista Equatorial. Foi fundador e organizador da Primeira Igreja Batista em Murinin, município de Benevides, Pará. Atuou como missionário da Aliança Pró-Evangelização das Crianças, exercendo também a função de Diretor Estadual no Pará e na Bahia, ao longo de 19 anos de ministério. Atualmente, é Presidente do Projeto Esperança, em Aracaju, pastor na Primeira Igreja Batista em Augusto Franco (Aracaju-SE) e missionário da missão The Mail Box Club em Sergipe.",
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