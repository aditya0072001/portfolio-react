import React from 'react';
import './Navbar.css';
function Navbar(){
 return(
    <div className="topnav">
    <a className="active" href="#home">Home</a>
    <a href="/ProjectsDetails">Projects</a>
    <a href="/Contact">Contact</a>
    <a href="/About">About</a>
    </div>
 );
}

export default Navbar;