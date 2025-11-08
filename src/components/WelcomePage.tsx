import React from 'react';
import './WelcomePage.css';

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="tagline-banner">
          <span>AI Agent Creation Made Simple</span>
        </div>
        
        <h1 className="main-heading">
          <span className="heading-line1">Create AI Agents</span>
        </h1>
        
        <div className="animated-text-container">
          <div className="animated-text-line">
            <span className="animated-text-item">In Minutes</span>
            <span className="animated-text-item">With just prompts</span>
            <span className="animated-text-item">With multi lingual support</span>
            <span className="animated-text-item">That scales</span>
            <span className="animated-text-item">With 100+ connectors</span>
          </div>
        </div>
        
        <p className="description-text">
          Vibe with your ideas. Just describe what you want in plain English — and watch your AI agent come to life instantly.
        </p>
        
        <div className="cta-section">
          <button className="cta-button">
            Join the Waitlist
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
      
      <div className="animation-space">
        <div className="animation-video">
          <video
            src="/videos/one.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;