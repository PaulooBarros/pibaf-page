import React, { useState, useEffect, useRef } from "react";
import { Pastor } from "../../types/types";
import "./style.css";
import pastorNilton from "../../assets/PrNilton2.jpeg";
import pastorZilton from "../../assets/PrZilton.jpeg";

const PastorsSection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

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

  const openLightbox = (imgSrc: string) => {
    setCurrentImg(imgSrc);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = (e: React.MouseEvent) => {
    if (lightboxRef.current && !lightboxRef.current.contains(e.target as Node)) {
      setLightboxOpen(false);
      setCurrentImg(null);
      document.body.style.overflow = 'auto';
    }
  };

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
    <section className="pastors-section" ref={sectionRef}>
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
                onClick={() => openLightbox(pastor.image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openLightbox(pastor.image);
                }}
              >
                <img 
                  src={pastor.image} 
                  alt={pastor.name} 
                  className={`pastor-photo ${pastor.photoClass || ""}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/default-pastor.jpg';
                  }}
                />
                <div className="photo-overlay">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="36" height="36">
                    <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
                  </svg>
                </div>
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

      {lightboxOpen && currentImg && (
        <div 
          className="lightbox-overlay" 
          onClick={closeLightbox}
          role="dialog" 
          aria-modal="true"
        >
          <div 
            className="lightbox-content" 
            ref={lightboxRef}
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="lightbox-close" 
              onClick={() => {
                setLightboxOpen(false);
                setCurrentImg(null);
                document.body.style.overflow = 'auto';
              }} 
              aria-label="Fechar imagem ampliada"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="36" height="36">
                <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
              </svg>
            </button>
            <img 
              src={currentImg} 
              alt="Imagem ampliada do pastor" 
              className="lightbox-image" 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PastorsSection;