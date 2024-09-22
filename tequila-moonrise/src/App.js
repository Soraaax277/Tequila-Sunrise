import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Restaurant from './Restaurant'; 


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
          
          
          
          <Route path="/restaurant" element={<Restaurant />} /> 
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
