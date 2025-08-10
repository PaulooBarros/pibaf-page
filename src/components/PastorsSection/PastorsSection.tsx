import React, { useState } from "react";
import { Pastor } from "../../types/types";
import "./style.css";
import pastorNilton from "../../../public/PrNilton2.jpeg";
import pastorZilton from "../../../public/PrZilton.jpeg";

const PastorsSection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<string | null>(null);

  const pastors: Pastor[] = [
    {
      name: "Nilton Melo",
      role: "Pastor Presidente",
      image: pastorNilton,
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
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg(null);
  };

  return (
    <section className="pastors-section">
      <div className="container">
        <span className="section-label">Nossos Pastores</span>
        <h2 className="section-title">Pastores que servem</h2>
        <p className="section-subtitle">
          Conheça a equipe pastoral que lidera, ensina e cuida da nossa igreja.
        </p>

        <div className="pastors-grid">
          {pastors.map((p) => (
            <article
              key={p.name}
              className="pastor-card"
              onClick={() => openLightbox(p.image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openLightbox(p.image);
              }}
            >
              <img src={p.image} alt={p.name} className="pastor-photo" />
              <h3 className="pastor-name">{p.name}</h3>
              <p className="pastor-role">{p.role}</p>
              <p className="pastor-description">{p.description}</p>
            </article>
          ))}
        </div>

        {lightboxOpen && currentImg && (
          <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
            <img src={currentImg} alt="Imagem ampliada do pastor" className="lightbox-img" />
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Fechar imagem ampliada">
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PastorsSection;
