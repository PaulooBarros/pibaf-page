import React from 'react';
import "./style.css";
import logoBranca from "../../assets/logopibaf.svg"; // Caminho para a logo branca
import logoConvencao from "../../assets/CBB.png"; // Caminho para a logo da convenção


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logos">
              <img src={logoBranca} alt="PIB Augusto Franco" className="footer-logo-pibaf" />
              <img src={logoConvencao} alt="Convenção Batista" className="footer-logo-convencao" />
            </div>
            <p className="footer-motto">Seguindo a Cristo, amando pessoas em Aracaju/SE</p>
            <p className="footer-address">
              R. José Alves Pereira, 79, Farolândia<br />
              Aracaju - SE, 49030-460
            </p>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Horários</h4>
            <ul className="footer-list">
              <li>Domingo: 9h e 18h</li>
              <li>Quinta-feira: 19:30h</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Contato</h4>
            <ul className="footer-list">
              <li>(79) 98804-7918</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Redes Sociais</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/pibafaracaju/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@PIBAF" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.facebook.com/aracajupibaf/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Primeira Igreja Batista em Augusto Franco. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;