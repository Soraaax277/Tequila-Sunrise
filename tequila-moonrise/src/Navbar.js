import React from 'react';
import { BrowserRouter, Route, Routes, useLocation, NavLink } from 'react-router-dom';
import './App.css';
import './Stay.css';
import './HotelReserveRoom.css';
import './BookingConfirmation.css';
import './Restaurant.css';
import './Background.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


export default function Navbar() {
    const currentWindow = useLocation();
    return (
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
                    to="/hotel" 
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
                <li className="nav-item">
                {currentWindow.pathname !== '/hotel' ? 
                    <NavLink 
                    to="/hotel" 
                    className="nav-link" 
                    activeClassName="active"
                  >
                    BOOK NOW
                  </NavLink>
                    : null}
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}
