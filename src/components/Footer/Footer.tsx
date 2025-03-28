import React from 'react';
import "./style.css"; // Mude para o CSS específico do componente

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PIB Augusto Franco</h3>
            <p>Seguindo a Cristo, amando pessoas em Aracaju/SE</p>
          </div>
          <div className="footer-section">
            <h3>Contato</h3>
            <p>contato@pibaugustofranco.com</p>
            <p>(79) 9999-9999</p>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/pibafaracaju/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="social-link">
                Instagram
              </a>
              <a href="https://tr.ee/Ei7a2I-a0o" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="social-link">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Primeira Igreja Batista em Augusto Franco. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;