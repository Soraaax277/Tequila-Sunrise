import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { BookingProvider } from './Pages/BookingContext'; 
import Navbar from './components/js_functions/Navbar';
import Footer from './Footer'; // Import the Footer component
import homepage from './components/img/tequila-moonrise.png';
function App() {
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [roomData, setRoomData] = useState(null);
  const [guestData, setGuestData] = useState(null);

  return (
    <BookingProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <VideoBackground videoSrc={bgVideo} />
          <Routes>
            <Route path="/" element={<div className='homepage'><img className = "homepageimage" src = {homepage} alt="tequila moonrise hompage"/></div>} />
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
          </Routes>
          <Footer /> {}
        </div>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;