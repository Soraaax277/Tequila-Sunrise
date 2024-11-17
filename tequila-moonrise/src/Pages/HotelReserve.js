import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/HotelReserve.css';
import { useNavigate } from 'react-router-dom';

function HotelReserve({ setCheckinDate, setCheckoutDate }) {
  const [checkinDate, setCheckinDateState] = useState('');
  const [checkoutDate, setCheckoutDateState] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
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

  const getDays = (month, year) => {
    return new Date(year, month +   1, 0).getDate();
  };

  const getCalendar = () => {
    const daysInMonth = getDays(selectedMonth, selectedYear);
    const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();
    const calendar = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(<td key={j}></td>);
        } else if (day > daysInMonth) {
          week.push(<td key={j}></td>);
        } else {
          const currentDate = new Date(selectedYear, selectedMonth, day);
          const isCheckin = checkinDate && currentDate.toDateString() === new Date(checkinDate).toDateString();
          const isCheckout = checkoutDate && currentDate.toDateString() === new Date(checkoutDate).toDateString();
          const isInRange = checkinDate && checkoutDate && currentDate >= new Date(checkinDate) && currentDate <= new Date(checkoutDate);
          week.push(
            <td key={j} className={isCheckin ? 'highlight-checkin' : isCheckout ? 'highlight-checkout' : isInRange ? 'highlight-range' : ''} onClick={() => handleDateClick(day)}>
              {day}
            </td>
          );
          day++;
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
    }
    return calendar;
  };

  const handleDateClick = (day) => {
    const selectedDate = new Date(selectedYear, selectedMonth, day).toISOString().split('T')[0];
    if (!checkinDate || (checkinDate && checkoutDate)) {
      setCheckinDateState(selectedDate);
      setCheckinDate(selectedDate);
      setCheckoutDateState('');
      setCheckoutDate('');
    } else {
      setCheckoutDateState(selectedDate);
      setCheckoutDate(selectedDate);
    }
  };

  const handleMonthChange = (increment) => {
    let newMonth = selectedMonth + increment;
    let newYear = selectedYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setSelectedMonth(newMonth);
    setSelectedYear(newYear);
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
        <div className="col-md-8">
          <div className="calendar-container">
            <div className="calendar-header">
              <button onClick={() => handleMonthChange(-1)}>&lt;</button>
              <span>{new Date(selectedYear, selectedMonth).toLocaleString('default', { month: 'long' })} {selectedYear}</span>
              <button onClick={() => handleMonthChange(1)}>&gt;</button>
            </div>
            <table className="calendar">
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                {getCalendar()}
              </tbody>
            </table>
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