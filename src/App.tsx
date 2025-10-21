import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <WelcomePage />
    </div>
  );
};

export default App;
