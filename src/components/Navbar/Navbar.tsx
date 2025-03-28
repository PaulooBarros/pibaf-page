import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "./style.css"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span>PIB Augusto Franco</span>
        </div>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Quem Somos</Link>
          <Link to="worship" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Horários</Link>
          <Link to="pastors" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Pastores</Link>
          {/* <Link to="ministries" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Ministérios</Link> */}
          <Link to="location" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Localização</Link>
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