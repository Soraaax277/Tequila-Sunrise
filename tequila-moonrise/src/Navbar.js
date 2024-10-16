import React from 'react';
import { BrowserRouter, Route, Routes, useLocation, NavLink } from 'react-router-dom';
import Logo from './logo.png';
import './App.css';
import './HotelReserve.css';
import './HotelReserveRoom.css';
import './BookingConfirmation.css';
import './Restaurant.css';
import './Background.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


export default function Navbar() {
    const currentWindow = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark flex-column">
          <div className="container-fluid w-100">
            <div className='d-flex justify-content-between align-items-center w-100'>
            <a className="navbar-brand" href="#">
              <img
                src={Logo}
                alt="Logo of a satellite with stars"
                height="50"
                width="50"
              />
              TEQUILA MOONRISE
            </a>
            {currentWindow.pathname !== '/hotel' && (
                    <NavLink 
                    to="/hotel" 
                    className="btn btn-outline-light" 
                    activeClassName="active"
                  >
                    BOOK NOW
                  </NavLink>)}
            </div>
          </div>
          <div className='container-fluid'>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink 
                  to="/" 
                  className="nav-link" 
                  activeClassName="active"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/about" 
                  className="nav-link" 
                  activeClassName="active"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/stay" 
                  className="nav-link" 
                  activeClassName="active"
                >
                  STAY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/restaurant" 
                  className="nav-link" 
                  activeClassName="active"
                >
                  DINE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/contact" 
                  className="nav-link" 
                  activeClassName="active"
                >
                  CONTACT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/login" 
                  className="nav-link" 
                  activeClassName="active"
                >
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </div>
          </div>
        </nav>
    )
}
