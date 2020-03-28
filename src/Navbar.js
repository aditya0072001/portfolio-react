import React from 'react';
import './Navbar.css';
function Navbar(){
 return(
    <div className="topnav">
    <a className="active" href="#home">Home</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    </div>
 );
}

export default Navbar;