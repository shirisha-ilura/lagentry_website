import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show navigation after animation completes (5.5 seconds)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : ''}`}>
      <div className="nav-container">
        {/* Left Side Group */}
        <div className="nav-left">
          {/* Logo */}
          <div className="logo">
            <span className="hello-text">Lagentry</span>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="nav-menu desktop-menu">
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

        {/* Desktop Right Side Buttons */}
        <div className="nav-actions desktop-actions">
          <div className="sign-in">
            <span className="user-icon">👤</span>
            Sign in
          </div>
          <button className="demo-button">
            Schedule demo
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-nav-item">
            AI Agents
            <span className="chevron">▼</span>
          </div>
          <div className="mobile-nav-item">
            Product
            <span className="chevron">▼</span>
          </div>
          <div className="mobile-nav-item">
            Services
            <span className="chevron">▼</span>
          </div>
          <div className="mobile-nav-item">
            Company
            <span className="chevron">▼</span>
          </div>
          <div className="mobile-nav-item">
            Resources
            <span className="chevron">▼</span>
          </div>
          <div className="mobile-nav-item">
            Pricing
          </div>
          <div className="mobile-nav-item">
            <span className="user-icon">👤</span>
            Sign in
          </div>
          <div className="mobile-nav-item">
            <button className="mobile-demo-button">
              Schedule demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;