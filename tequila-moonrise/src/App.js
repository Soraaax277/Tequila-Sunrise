import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Register from './Register'; 
import Login from './Login';
import HotelReserve from './HotelReserve';
import HotelReserveRoom from './HotelReserveRoom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './Stay.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-wZGylhENnxNN00Lg6rqHNzaM.png?st=2024-09-21T07%3A51%3A01Z&se=2024-09-21T09%3A51%3A01Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-20T23%3A44%3A58Z&ske=2024-09-21T23%3A44%3A58Z&sks=b&skv=2024-08-04&sig=tVDwbShvvNGi8cQa1YJNebDVr1/R%2BKzigOqmb1BugCU%3D"
                alt="Logo of a satellite with stars"
                height="50"
                width="50"
              />
              TEQUILA MOONRISE
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/hotel">STAY</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/restaurant">DINE</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">CONTACT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">LOGIN</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">REGISTER</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<div>Welcome to our hotel!</div>} />
          <Route path="/about" element={<div>About us</div>} />
          <Route path="/hotel" element={<HotelReserve />} />
          <Route path="/select-rooms" element={<HotelReserveRoom />} />
          <Route path="/restaurant" element={<div>Restaurant</div>} />
          <Route path="/contact" element={<div>Contact us</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;