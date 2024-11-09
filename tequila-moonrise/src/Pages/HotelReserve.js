import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/HotelReserve.css';
import { Link, useNavigate } from 'react-router-dom';

function HotelReserve({ setCheckinDate, setCheckoutDate }) {
  const [checkinDate, setCheckinDateState] = useState('');
  const [checkoutDate, setCheckoutDateState] = useState('');
  const navigate = useNavigate();

  const handleCheckinChange = (e) => {
    const date = e.target.value;
    setCheckinDateState(date);
    setCheckinDate(date); // Pass the check-in date to the parent
  };

  const handleCheckoutChange = (e) => {
    const date = e.target.value;
    setCheckoutDateState(date);
    setCheckoutDate(date); // Pass the check-out date to the parent
  };

  const handleNext = async () => {
    // Send check-in and check-out dates to the backend
    const hotelReserveData = {
      checkInDate: checkinDate,
      checkOutDate: checkoutDate,
    };

    try {
      const response = await fetch('http://localhost:5000/api/hotelreserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelReserveData),
      });

      if (response.ok) {
        console.log('Hotel reservation data saved successfully');
        navigate('/select-rooms'); // Navigate to the next step
      } else {
        const error = await response.json();
        alert('Failed to save hotel reservation data: ' + error.message);
      }
    } catch (error) {
      console.error('Error saving hotel reservation data:', error);
      alert('Error saving hotel reservation data: ' + error.message);
    }
  };

  return (
    <div className="container" style={{ backgroundColor: 'transparent', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width: '80%', margin: '48px auto' }}>
      <div className="steps">
        <div className="step active">CHECK-IN & <br/> CHECK-OUT DATE</div>
        <div className="step">SELECT ROOMS & RATES</div>
        <div className="step">GUEST INFORMATION</div>
        <div className="step">PAYMENT & BOOKING<br/> CONFIRMATION</div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="checkin">Check-in Date</label>
            <input
              className="form-control"
              id="checkin"
              type="date"
              value={checkinDate}
              onChange={handleCheckinChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkout">Check-out Date</label>
            <input
              className="form-control"
              id="checkout"
              type="date"
              value={checkoutDate}
              onChange={handleCheckoutChange}
            />
          </div>
        </div>
      </div>
      <div className="text-end mt-3">
        <button className="next-button" onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
}

export default HotelReserve;