import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Register from './Register'; 
import Login from './Login';
import HotelReserve from './HotelReserve';
import HotelReserveRoom from './HotelReserveRoom';
import GuestInformation from './GuestInformation';
import BookingConfirmation from './BookingConfirmation';
import Restaurant from './Restaurant';
import VideoBackground from './Background';
import Navbar from './Navbar';
import Stay from './Stay';
import bgVideo from './Starsbg.mp4'; 
import './App.css';
import './HotelReserve.css';
import './HotelReserveRoom.css';
import './BookingConfirmation.css';
import './Restaurant.css';
import './Background.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <VideoBackground videoSrc={bgVideo} />

        <Routes>
          <Route path="/" exact element={<div>Welcome to our hotel!</div>} />
          <Route path="/about" element={<div>About us</div>} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/hotel" element={<HotelReserve />} />
          <Route path="/select-rooms" element={<HotelReserveRoom />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contact" element={<div>Contact us</div>} />
          <Route path="/guest-information" element={<GuestInformation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking-confirmation" element={< BookingConfirmation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;