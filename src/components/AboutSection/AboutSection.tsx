import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import logoConvencao from "../../assets/CBS.png";
import logoIgreja from "../../assets/logo PIBAF png.png";
import igrejaFoto1 from "../../assets/pibaf11anos.jpg";
import igrejaFoto2 from "../../../public/pibaf10anos redimensionada.jpg";

const AboutSection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);


  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg(null);
    document.body.style.overflow = 'auto';
  };

  // Fechar lightbox com ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  // Observer para animações
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
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-grid">
          {/* Text Column */}
          <div className="about-text">
            <h2 className="section-title">
              <span className="title-decoration"></span>
              Quem Somos
              <span className="title-decoration"></span>
            </h2>
            <div className="about-content">
              <p className="about-paragraph">
                Há 12 anos, a <strong>Primeira Igreja Batista em Augusto Franco</strong>{" "}
                tem sido um lugar de adoração, comunhão e transformação de vidas. Nossa
                missão é proclamar o Evangelho de Jesus Cristo com fidelidade bíblica,
                formando discípulos que amam a Deus e servem ao próximo.
              </p>
              <p className="about-paragraph">
                Como parte da{" "}
                <strong>Convenção Batista Brasileira e Convenção Batista Sergipana</strong>, estamos
                comprometidos com a pregação da Palavra, a prática do amor cristão e o
                engajamento em ações que impactam nossa cidade e estado.
              </p>
              <p className="about-paragraph">
                Ao longo de nossa história, testemunhamos vidas sendo restauradas, famílias
                fortalecidas e comunidades alcançadas pela graça de Deus. Somos uma igreja
                que olha para o futuro com fé e expectativa, desejando ser luz onde Ele
                nos enviar.
              </p>

              {/* Logos */}
              <div className="about-logos">
                <div className="logo-container">
                  <img src={logoIgreja} alt="Logo da Igreja" className="logo-img" />
                </div>
                <div className="logo-container">
                  <img src={logoConvencao} alt="Logo Convenção Batista Brasileira" className="logo-img" />
                </div>
              </div>
            </div>
          </div>

          {/* Photos Column */}
          <div className="about-photos">
            <div className="photo-about-container">
              <img
                src={igrejaFoto1}
                alt="Congregação da PIBAF"
                className="about-photo"
              />
            </div>
            <div className="photo-about-container">
              <img
                src={igrejaFoto2}
                alt="Celebração dos 10 anos da PIBAF"
                className="about-photo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {lightboxOpen && currentImg && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Fechar visualização">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="36" height="36">
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default AboutSection;