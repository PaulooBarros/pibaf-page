import React, { useState } from "react";
import { Link } from "react-scroll";
import "./style.css";
import logo from "../../../public/logoPibafEscrita.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            <img
              src={logo}
              alt="PIB Augusto Franco"
              className="pibaflogo"
            />
          </Link>
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <NavLink to="about" onClick={() => setIsOpen(false)}>
            Quem Somos
          </NavLink>
          <NavLink to="pastors" onClick={() => setIsOpen(false)}>
            Pastores
          </NavLink>
          <NavLink to="youtube" onClick={() => setIsOpen(false)}>
            Mensagens
          </NavLink>
          <NavLink to="help" onClick={() => setIsOpen(false)}>
            Doações
          </NavLink>
        </div>
        
        <div 
          className={`navbar-toggle ${isOpen ? "open" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

// Componente auxiliar para estilização consistente dos links
const NavLink: React.FC<{to: string; onClick: () => void; children: React.ReactNode}> = ({to, onClick, children}) => (
  <Link
    to={to}
    smooth={true}
    duration={800}
    onClick={onClick}
    activeClass="active-link"
    spy={true}
  >
    {children}
  </Link>
);

export default Navbar;