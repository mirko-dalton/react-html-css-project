import React from 'react';
import Nav from './components/Nav/Nav';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Offer from './components/Offer/Offer';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <>
      <Nav />
      <main>
        <LandingPage />
        <About />
        <Offer />
      </main>
      <Footer />
    </>
  );
  
};

export default App;
