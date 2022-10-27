import React from "react";
import "./styles/Header.css";

function Header() {
    const clicked = () => {
      const chkbox = document.getElementById("checkbox1")
      const sideBar = document.getElementById("sideBar");
      sideBar.style.display = "none";
      sideBar.style.display = chkbox.checked? "block" : "none";
    }
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="/Images/images.jpeg" alt=""></img>
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
          <a href="#Exchanges" className="navIcons">
          Exchanges
          </a>
          <a href="#Contact" className="navIcons">
          Contact
          </a>
          <input type="checkbox" id="checkbox1" class="checkbox1 visuallyHidden" onClick={clicked}/>
            <label for="checkbox1">
              <div class="hamburger hamburger1">
                  <span class="bar bar1"></span>
                  <span class="bar bar2"></span>
                  <span class="bar bar3"></span>
                  <span class="bar bar4"></span>
              </div>
            </label>
        </div>
      </div>
      <div className="sideNavbar" id="sideBar">
        <ul className="sidebar d__flex">
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
