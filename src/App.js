import React from 'react';
import './App.css';
import ProjectDetails from './ProjectDetails';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
 
<div className="center">
<h1 className="center__text glitch is-glitching" data-text="Hello Come In">Hello Come In</h1>
</div>
       <Navbar></Navbar>    
       <Home></Home>
       <ProjectDetails></ProjectDetails>
       <About></About>
       <Contact></Contact>
      </header>
    </div>
  );
}

export default App;
