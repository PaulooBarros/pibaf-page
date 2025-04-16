import React from 'react';
import './style.css';
import qrCodeImage from "../../assets/qrcodemissoes.png"
// import qrCodeImage from './path-to-your-qr-code.png'; // Substitua pelo caminho real da sua imagem

const HelpTheWorkSection: React.FC = () => {
  return (
    <section id="help" className="help-section">
      <div className="container-help-the-work">
        <h2 className="section-title">Ajude esta Obra</h2>
        
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
                <img src={qrCodeImage} alt="QR Code para doação PIX" className="qr-code" />
              </div>
              <div className="pix-info">
                <h4>Chave PIX (CNPJ):</h4>
                <p className="pix-key">19.335.393/0001-12</p> {/* Substitua pelo CNPJ real */}
                <p className="pix-instructions">
                  Escaneie o QR Code ou use a chave PIX acima para contribuir
                </p>
              </div>
            </div>
          </div>
          
          <div className="disclaimer">
            <p>
              * Todas as contribuições serão utilizadas para manutenção da obra e atividades da igreja.
              Agradecemos seu apoio e generosidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpTheWorkSection;