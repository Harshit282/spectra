import './App.css';
import React from 'react'
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project'
import Track from './components/Track';
import Exchanges from './components/Exchanges';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Project />
      <Track />
      {/* <Exchanges /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
