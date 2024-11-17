import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import HotelReserve from './Pages/HotelReserve';
import HotelReserveRoom from './Pages/HotelReserveRoom';
import GuestInformation from './Pages/GuestInformation';
import BookingConfirmation from './Pages/BookingConfirmation';
import Restaurant from './Pages/Restaurant';
import Stay from './Pages/Stay';
import VideoBackground from './components/js_functions/Background';
import bgVideo from './components/vid/Starsbg.mp4';
import './css/App.css';
import './css/HotelReserve.css';
import './css/HotelReserveRoom.css';
import './css/BookingConfirmation.css';
import './css/Restaurant.css';
import './css/Background.css';
import './css/BookingPageTransition.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BookingProvider } from './Pages/BookingContext'; // Ensure this path is correct

function App() {
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [roomData, setRoomData] = useState(null);
  const [guestData, setGuestData] = useState(null);

  // Navbar component
  const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="./components/img/logo.png" // Updated logo path
              alt="Logo"
              height="40" // Reduced height
              width="40" // Reduced width
            />
            TEQUILA MOONRISE
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="active">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/stay" className="nav-link" activeClassName="active">
                  STAY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/restaurant" className="nav-link" activeClassName="active">
                  DINE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" activeClassName="active">
                  CONTACT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" activeClassName="active">
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <BookingProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <VideoBackground videoSrc={bgVideo} />
          <Routes>
            <Route path="/" element={<div>Welcome to our hotel!</div>} />
            <Route path="/about" element={<div>About us</div>} />
            <Route path="/stay" element={<Stay />} />
            <Route 
              path="/hotelreserve" 
              element={<HotelReserve setCheckinDate={setCheckinDate} setCheckoutDate={setCheckoutDate} />} 
            />
            <Route 
              path="/select-rooms" 
              element={<HotelReserveRoom checkinDate={checkinDate} checkoutDate={checkoutDate} setRoomData={setRoomData} />} 
            />
            <Route 
              path="/guest-information" 
              element={<GuestInformation setGuestData={setGuestData} />} 
            />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/contact" element={<div>Contact us</div>} />
            <Route 
              path="/booking-confirmation" 
              element={<BookingConfirmation roomData={roomData} guestData={guestData} />} 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </
          </Routes>
        </div>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;