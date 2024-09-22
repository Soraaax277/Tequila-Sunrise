import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Stay.css';
import { Link } from 'react-router-dom';

function HotelReserve() {
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
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
    setCheckinDate(e.target.value);
  };

  const handleCheckoutChange = (e) => {
    setCheckoutDate(e.target.value);
  };

  const generateCalendar = (year, month) => {
    const calendar = [];
    const date = new Date(year, month, 1);
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Fill initial empty cells
    for (let i = 0; i < firstDay; i++) {
      calendar.push(null);
    }

    // Fill days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(new Date(year, month, i));
    }

    return calendar;
  };

  const isDateInRange = (date) => {
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    return (checkin <= date && date <= checkout && date.getMonth() === calendarMonth && date.getFullYear() === calendarYear) || (checkinDate && new Date(checkinDate).getDate() === date.getDate() && new Date(checkinDate).getMonth() === date.getMonth() && new Date(checkinDate).getFullYear() === date.getFullYear());
  };

  const renderCalendar = () => {
    const calendar = generateCalendar(calendarYear, calendarMonth);

    const weeks = [];
    let week = [];

    calendar.forEach((date, index) => {
      if (index % 7 === 0 && week.length > 0) {
        weeks.push(week);
        week = [];
      }
      week.push(date);
    });

    if (week.length > 0) {
      weeks.push(week);
    }

    return weeks;
  };

  const getMonthName = () => {
    return new Date(0, calendarMonth).toLocaleString('default', { month: 'long' });
  };

  const handlePrevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear(calendarYear - 1);
    } else {
      setCalendarMonth(calendarMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear(calendarYear + 1);
    } else {
      setCalendarMonth(calendarMonth + 1);
    }
  };

  return (
    <div className="container" style={{ backgroundColor: 'transparent', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width: '80%', margin: '0 auto' }}>
      <div className="steps">
        <div className="step active">CHECK-IN & CHECK-OUT DATE</div>
        <div className="step">SELECT ROOMS & RATES</div>
        <div className="step">GUEST INFORMATION</div>
        <div className="step">PAYMENT & BOOKING CONFIRMATION</div>
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
          <div className="calendar">
            <div className="calendar-header">
              <button className="btn btn-link" onClick={handlePrevMonth}>
                < i className="fas fa-chevron-left "></i>
              </button>
              <span>{getMonthName()} {calendarYear}</span>
              <button className="btn btn-link" onClick={handleNextMonth}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <table style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ width: 'calc(100% / 7)' }}>SUN</th>
                  <th style={{ width: 'calc(100% / 7)' }}>MON</th>
                  <th style={{ width: 'calc(100% / 7)' }}>TUES</th>
                  <th style={{ width: 'calc(100% / 7)' }}>WED</th>
                  <th style={{ width: 'calc(100% / 7)' }}>THURS</th>
                  <th style={{ width: 'calc(100% / 7)' }}>FRI</th>
                  <th style={{ width: 'calc(100% / 7)' }}>SAT</th>
                </tr>
              </thead>
              <tbody>
                {renderCalendar().map((week, weekIndex) => (
                  <tr key={weekIndex}>
                    {week.map((date, dayIndex) => (
                      <td
                        key={dayIndex}
                        style={{
                          width: 'calc(100% / 7)',
                          border: '1px solid #ccc',
                          padding: '10px',
                          textAlign: 'center',
                        }}
                        className={
                          date && isDateInRange(date) ? 'highlight' : ''
                        }
                        onMouseEnter={(e) => {
                          if (date && isDateInRange(date)) {
                            e.target.classList.add('hover-highlight');
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.target.classList.remove('hover-highlight');
                        }}
                      >
                        {date ? date.getDate() : ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-end mt-3">
        <Link className="next-button" to="/select-rooms">NEXT</Link>
      </div>
    </div>
  );
}

export default HotelReserve;