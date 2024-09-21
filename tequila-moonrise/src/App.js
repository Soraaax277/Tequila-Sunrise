import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Register from './Pages/Register'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
