import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Left Side Group */}
        <div className="nav-left">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <div className="crescent-top"></div>
              <div className="center-line"></div>
              <div className="crescent-bottom"></div>
            </div>
            <span className="hello-text">Lagentry</span>
          </div>

          {/* Navigation Menu */}
          <div className="nav-menu">
            <div className="nav-item">
              AI Agents
              <span className="chevron">▼</span>
            </div>
            <div className="nav-item">
              Product
              <span className="chevron">▼</span>
            </div>
            <div className="nav-item">
              Services
              <span className="chevron">▼</span>
            </div>
            <div className="nav-item">
              Company
              <span className="chevron">▼</span>
            </div>
            <div className="nav-item">
              Resources
              <span className="chevron">▼</span>
            </div>
            <div className="nav-item">
              Pricing
            </div>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="nav-actions">
          <div className="sign-in">
            <span className="user-icon">👤</span>
            Sign in
          </div>
          <button className="demo-button">
            Schedule demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
