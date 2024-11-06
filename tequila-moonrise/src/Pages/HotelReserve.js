import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/HotelReserve.css';
import { Link } from 'react-router-dom';

function HotelReserve({ setCheckinDate, setCheckoutDate }) {  // Added props for parent component
  const [checkinDate, setCheckinDateState] = useState('');
  const [checkoutDate, setCheckoutDateState] = useState('');
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());

  useEffect(() => {
    if (checkinDate) {
      const checkin = new Date(checkinDate);
      setCalendarMonth(checkin.getMonth());
      setCalendarYear(checkin.getFullYear());
    }
  }, [checkinDate]);

  useEffect(() => {
    if (checkoutDate) {
      const checkout = new Date(checkoutDate);
      setCalendarMonth(checkout.getMonth());
      setCalendarYear(checkout.getFullYear());
    }
  }, [checkoutDate]);

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

  // Remaining code unchanged...
  // ...
  
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
        <div className="col-md-8">
          {/* Calendar rendering code... */}
        </div>
      </div>
      <div className="text-end mt-3">
        <Link className="next-button" to="/select-rooms">NEXT</Link>
      </div>
    </div>
  );
}

export default HotelReserve;