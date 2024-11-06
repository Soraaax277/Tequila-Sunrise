import React from 'react';
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
import Navbar from './components/js_functions/Navbar';
import bgVideo from './components/vid/Starsbg.mp4'; 
import './css/App.css';
import './css/HotelReserve.css';
import './css/HotelReserveRoom.css';
import './css/BookingConfirmation.css';
import './css/Restaurant.css';
import './css/Background.css';
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