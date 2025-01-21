import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Menu />
      <Reservation />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
