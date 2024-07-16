import './App.css';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Time from './Pages/Time';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <div className="App">      
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/About'>A Propos</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/Time'>Heure</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Time" element={<Time />}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
