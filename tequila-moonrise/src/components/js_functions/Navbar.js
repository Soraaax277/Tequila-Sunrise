import React from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { usePageTransition } from './BookingPageTransition';
import Logo from '../img/logo.png';
import RocketVid from '../vid/Rocket.mp4';
import '../../css/App.css';
import '../../css/HotelReserve.css';
import '../../css/HotelReserveRoom.css';
import '../../css/BookingConfirmation.css';
import '../../css/Restaurant.css';
import '../../css/Background.css';
import '../../css/Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Navbar() {
    const currentWindow = useLocation();
    const navigate = useNavigate();
    const { isTransitioning, triggerTransition, slideClass, videoClass } = usePageTransition();

    const handleNavLinkClick = (e, path, isBooking = false) => {
        e.preventDefault();
        if (isBooking) {
            triggerTransition(() => navigate(path));
        } else {
            navigate(path);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <img
                        src={Logo}
                        alt="Logo of a satellite with stars"
                    />
                    TEQUILA MOONRISE
                </a>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink 
                                to="/" 
                                className="nav-link" 
                                activeClassName="active"
                                onClick={(e) => handleNavLinkClick(e, '/')}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/about" 
                                className="nav-link" 
                                activeClassName="active"
                                onClick={(e) => handleNavLinkClick(e, '/about')}
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/stay" 
                                className="nav-link" 
                                activeClassName="active"
                                onClick={(e) => handleNavLinkClick(e, '/stay')}
                            >
                                STAY
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/restaurant" 
                                className="nav-link" 
                                activeClassName="active"
                                onClick={(e) => handleNavLinkClick(e, '/restaurant')}
                            >
                                DINE
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/contact" 
                                className="nav-link" 
                                activeClassName="active"
                                onClick={(e) => handleNavLinkClick(e, '/contact')}
                            >
                                CONTACT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/login" 
                                className="nav-link" 
                                activeClassName="active"
                                onClick={(e) => handleNavLinkClick(e, '/login')}
                            >
                                LOGIN
                            </NavLink>
                        </li>
                        {currentWindow.pathname !== '/hotel' && (
                            <li className="nav-item">
                                <NavLink 
                                    to="/hotel" 
                                    onClick={(e) => handleNavLinkClick(e, '/HotelReserve', true)} // Trigger transition for "BOOK NOW"
                                    className="btn btn-outline-light" 
                                    activeClassName="active"
                                >
                                    BOOK NOW
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {/* Video Transition Overlay */}
            {isTransitioning && (
                <div className="transition-wrapper">
                    <div className={`transition-overlay ${slideClass}`}></div>
                    <video
                        id="transition-video"
                        className={`transition-video ${videoClass}`}
                        muted
                        loop={false}
                        autoPlay
                    >
                        <source src={RocketVid} type="video/mp4" />
                    </video>
                </div>
            )}
        </nav>
    );
}