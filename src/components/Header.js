import React, { useState } from "react";
import "./styles/Header.css";

function Header() {
    // const[show, setShow] = useState(false)
  return (
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
        </div>
    </div>
  );
}

export default Header;
