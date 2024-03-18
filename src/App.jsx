import React from 'react';
import Navbar from './Navbar';
import MainSection from './MainSection';
import './assets/css/index.css'; // Importez votre CSS ici

function App() {
  return (
    <div className="container">
      <Navbar />
      <MainSection />
    </div>
  );
}

export default App;
