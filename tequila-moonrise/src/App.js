import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';  
import Hotel from './Pages/Hotel_Reserve'; 
import Restaurant from './Pages/Restaurant'; 
import Contact from './Pages/Contact'; 
import Register from './Pages/Register'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/hotel">Stay</Link>
            </li>
            <li>
              <Link to="/restaurant">Dine</Link> 
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/restaurant" element={<Restaurant />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
