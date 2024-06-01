import React from 'react';
import './App.css';
import NavbarComponent from './components/Navbar.js'
import HeroComponent from './components/Hero.js';
import CardComponent from './components/Card.js';
import FormComponent from './components/Form.js';
import FooterComponent from './components/Footer.js';
import CardBottomComponent from './components/CardBottom.js';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeroComponent />
      <CardComponent /> 
      <CardBottomComponent />
      <FormComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
