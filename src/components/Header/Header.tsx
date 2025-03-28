import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./style.css"

const Header: React.FC = () => {
  return (
    <header className="header-section">
      <Navbar />
    </header>
  );
};

export default Header;