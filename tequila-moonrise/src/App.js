import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Register from './Register'; 
import Login from './Login';
import HotelReserve from './HotelReserve';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div>Welcome to our hotel!</div>} />
        <Route path="/about" element={<div>About us</div>} />
        <Route path="/hotel" element={<HotelReserve />} />
        <Route path="/restaurant" element={<div>Restaurant</div>} />
        <Route path="/contact" element={<div>Contact us</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;