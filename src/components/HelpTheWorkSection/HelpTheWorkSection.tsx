import { useEffect, useRef } from "react";
import "./style.css";
import qrCodeImage from "../../assets/qrcodemissoes.png";

const HelpTheWorkSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
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
    <section className="help-section" id="help" ref={sectionRef}>
      <div className="help-container">
        <div className="help-header">
          <h2 className="section-title">
            <span className="title-decoration"></span>
            Invista nesta Obra
            <span className="title-decoration"></span>
          </h2>
        </div>

        <div className="help-content">
          <div className="bible-verse-help">
            <blockquote>
              "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, 
              pois Deus ama quem dá com alegria."
              <cite>2 Coríntios 9:7</cite>
            </blockquote>
          </div>

          <div className="donation-methods">
            <div className="pix-method">
              <h3>Doação via PIX</h3>
              <div className="qr-code-container">
                <img 
                  src={qrCodeImage} 
                  alt="QR Code para doação PIX" 
                  className="qr-code" 
                />
              </div>
              <div className="pix-info">
                <h4>Chave PIX (CNPJ):</h4>
                <p className="pix-key">19.335.393/0001-12</p>
                <p className="pix-instructions">
                  Escaneie o QR Code ou copie a chave PIX acima
                </p>
              </div>
            </div>
          </div>

          <div className="disclaimer">
            <p>
              * Todas as contribuições serão utilizadas para manutenção da obra 
              e atividades da igreja. Agradecemos seu apoio!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpTheWorkSection;