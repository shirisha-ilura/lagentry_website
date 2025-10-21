import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <WelcomePage />
      <Footer />
    </div>
  );
};

export default App;
