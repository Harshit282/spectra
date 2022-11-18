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
import Roadmap from './components/Roadmap';

function App() {
  function reveal() {
  var revealTop = document.querySelectorAll(".revealTop");
  var revealLeft = document.querySelectorAll(".revealLeft");
  var revealRight = document.querySelectorAll(".revealRight");

  for (var i = 0; i < revealTop.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealTop[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealTop[i].classList.add("active");
    } else {
      revealTop[i].classList.remove("active");
    }
  }
  for (var j = 0; j < revealLeft.length; j++) {
    var windowHeight1 = window.innerHeight;
    var elementTop1 = revealLeft[j].getBoundingClientRect().top;
    var elementVisible1 = 150;

    if (elementTop1 < windowHeight1 - elementVisible1) {
      revealLeft[j].classList.add("active");
    } else {
      revealLeft[j].classList.remove("active");
    }
  }
  for (var k = 0; k < revealRight.length; k++) {
    var windowHeight2 = window.innerHeight;
    var elementTop2 = revealRight[k].getBoundingClientRect().top;
    var elementVisible2 = 150;

    if (elementTop2 < windowHeight2 - elementVisible2) {
      revealRight[k].classList.add("active");
    } else {
      revealRight[k].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Project />
      <Track />
      <Exchanges />
      <Contact />
      <Footer />
      {/* <Roadmap /> */}
    </div>
  );
}

export default App;
