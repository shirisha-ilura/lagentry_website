import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-background">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <div className="header-content">
        <h1 className="logo-text">Lagentry</h1>
      </div>
    </header>
  );
};

export default Header;
