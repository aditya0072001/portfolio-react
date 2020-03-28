import React from 'react';
import './App.css';
import ProjectDetails from './ProjectDetails';
import Navbar from './Navbar';
import Home from './Home';

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
      </header>
    </div>
  );
}

export default App;