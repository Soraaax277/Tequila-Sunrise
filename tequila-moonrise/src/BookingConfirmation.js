import React from 'react';
import { Link } from 'react-router-dom';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  return (
    <div className="booking-confirmation">
      <div className="steps">
        <div className="step">CHECK-IN & CHECK-OUT DATE</div>
        <div className="step">SELECT ROOMS & RATES</div>
        <div className="step">GUEST INFORMATION</div>
        <div className="step active">PAYMENT & BOOKING CONFIRMATION</div>
      </div>
      <div className="confirmation">
        <div className="icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="message">BOOKING CONFIRMED!!</div>
      </div>
      <div className="home-button">
        <Link to="/">HOME</Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;