import React from "react";
import "./styles/Header.css";

function Header() {
    const clicked = () => {
      const chkbox = document.getElementById("checkbox1")
      const sideBar = document.getElementById("sideBar");
      if(window.innerWidth <= '1000' && chkbox.checked){
        sideBar.setAttribute('style', 'display:block');
      }
      else{
        sideBar.setAttribute('style', 'display:none');
      }
    }



      var doc = document.documentElement;
      var w = window;
    
      var prevScroll = w.scrollY || doc.scrollTop;
      var curScroll;
      var direction = 0;
      var prevDirection = 0;
    
      var header = document.getElementById('Header');
    
      var checkScroll = function() {
    
        /*
        ** Find the direction of scroll
        ** 0 - initial, 1 - up, 2 - down
        */
    
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) { 
          //scrolled up
          direction = 2;
        }
        else if (curScroll < prevScroll) { 
          //scrolled down
          direction = 1;
        }
    
        if (direction !== prevDirection) {
          toggleHeader(direction, curScroll);
        }
        
        prevScroll = curScroll;
      };
    
      var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 52) { 
          
          //replace 52 with the height of your header in px
    
          header.classList.add('hide');
          prevDirection = direction;
        }
        else if (direction === 1) {
          header.classList.remove('hide');
          prevDirection = direction;
        }
      };
      
      window.addEventListener('scroll', checkScroll);

  return (
    <>
      <div className="header" id="Header">
        <div className="logo">
          <img src="/Images/logo2.png" alt=""></img>
          <h1>Spectra Labs</h1>
        </div>
        <div className="navbar">
          <a href="#Home" className="navIcons">
          Home
          </a>
          <a href="#About" className="navIcons">
          About
          </a>
          <a href="#Project" className="navIcons">
          Project
          </a>
          <a href="#Track" className="navIcons">
          Track
          </a>
          <a href="#Roadmap" className="navIcons">
          Roadmap
          </a>
          <a href="#Exchanges" className="navIcons">
          Exchanges
          </a>
          <a href="#Contact" className="navIcons">
          Contact
          </a>
          <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden" onClick={clicked}/>
            <label for="checkbox1">
              <div className="hamburger hamburger1">
                  <span className="bar bar1"></span>
                  <span className="bar bar2"></span>
                  <span className="bar bar3"></span>
                  <span className="bar bar4"></span>
              </div>
            </label>
        </div>
      </div>
      <div className="sideNavbar">
        <ul className="sidebar d__flex" id='sideBar'>
          <li className="sideNavbar">
            <a href="#Home">Home</a>
          </li>
          <li className="sideNavbar">
            <a href="#About">About</a>
          </li>
          <li className="sideNavbar">
            <a href="#Project">Project</a>
          </li>
          <li className="sideNavbar">
            <a href="#Track">Track</a>
          </li>
          <li className="sideNavbar">
            <a href="#Roadmap">Roadmap</a>
          </li>
          <li className="sideNavbar">
            <a href="#Exchanges">Exchanges</a>
          </li>
          <li className="sideNavbar">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
