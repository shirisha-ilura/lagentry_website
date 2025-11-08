import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import Templates from './components/Templates';
import Dashboard from './components/Dashboard';
import GmailSection from './components/GmailSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <WelcomePage />
      <Templates />
      <Dashboard />
      <GmailSection />
      <Footer />
    </div>
  );
};

export default App;
