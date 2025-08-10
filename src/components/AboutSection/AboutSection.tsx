import React, { useState } from "react";
import "./style.css";
import logoConvencao from "../../assets/CBS.png";
import logoIgreja from "../../assets/logo PIBAF png.png"; // nova logo
import igrejaFoto1 from "../../assets/pibaf11anos.jpg"; // primeira foto
import igrejaFoto2 from "../../../public/pibaf10anos redimensionada.jpg";

const AboutSection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<string | null>(null);

  const openLightbox = (imgSrc: string) => {
    setCurrentImg(imgSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg(null);
  };

  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        {/* Coluna Texto */}
        <div className="about-text">
          <h2 className="section-title">Quem Somos</h2>
          <p>
            Há 12 anos, a <strong>Primeira Igreja Batista em Augusto Franco</strong>{" "}
            tem sido um lugar de adoração, comunhão e transformação de vidas. Nossa
            missão é proclamar o Evangelho de Jesus Cristo com fidelidade bíblica,
            formando discípulos que amam a Deus e servem ao próximo.
          </p>
          <p>
            Como parte da{" "}
            <strong>Convenção Batista Brasileira e Convenção Batista Sergipana</strong>, estamos
            comprometidos com a pregação da Palavra, a prática do amor cristão e o
            engajamento em ações que impactam nossa cidade e estado.
          </p>
          <p>
            Ao longo de nossa história, testemunhamos vidas sendo restauradas, famílias
            fortalecidas e comunidades alcançadas pela graça de Deus. Somos uma igreja
            que olha para o futuro com fé e expectativa, desejando ser luz onde Ele
            nos enviar.
          </p>

          {/* Logos */}
          <div className="about-logos">
            <img src={logoIgreja} alt="Logo da Igreja" />
            <img src={logoConvencao} alt="Logo Convenção Batista Brasileira" />
          </div>
        </div>

        {/* Coluna Fotos */}
        <div className="about-photos">
          <img
            src={igrejaFoto1}
            alt="Foto da Igreja 1"
            onClick={() => openLightbox(igrejaFoto1)}
            className="clickable-photo"
          />
          <img
            src={igrejaFoto2}
            alt="Foto da Igreja 2"
            onClick={() => openLightbox(igrejaFoto2)}
            className="clickable-photo"
          />
        </div>
      </div>

      {/* Lightbox modal */}
      {lightboxOpen && currentImg && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
            <img src={currentImg} alt="Imagem ampliada" />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
