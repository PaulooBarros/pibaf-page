import React, { useState } from "react";
import { Link } from "react-scroll";
import "./style.css";
import logo from "../../assets/logopibaf.svg";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            style={{
              cursor: "pointer",
              color: "white",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}// Substitua com o caminho da imagem
              alt="PIB Augusto Franco"
              className="pibaflogo"
            />
          </Link>
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link
            to="about"
            smooth={true}
            duration={800}
            onClick={() => setIsOpen(false)}
          >
            Quem Somos
          </Link>
          {/* <Link
            to="worship-section"
            smooth={true}
            duration={100}
            onClick={() => setIsOpen(false)}
          >
            Horários
          </Link> */}
          <Link
            to="pastors"
            smooth={true}
            duration={800}
            onClick={() => setIsOpen(false)}
          >
            Pastores
          </Link>
          <Link to="ministries" smooth={true} duration={800} onClick={() => setIsOpen(false)}>Ministérios</Link>
          <Link
            to="youtube"
            smooth={true}
            duration={800}
            onClick={() => setIsOpen(false)}
          >
            Mensagens
          </Link>
          <Link
            to="location"
            smooth={true}
            duration={800}
            onClick={() => setIsOpen(false)}
          >
            Localização
          </Link>
          <Link
            to="help"
            smooth={true}
            duration={800}
            onClick={() => setIsOpen(false)}
            className="donate-link"
          >
            Doações
          </Link>
        </div>
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
