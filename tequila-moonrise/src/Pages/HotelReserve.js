import React, { useState, useEffect , Link } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../PagesCss/HotelReserveRooms.css';

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
    return checkin <= date && date <= checkout;
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
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-wZGylhENnxNN00Lg6rqHNzaM.png?st=2024-09-21T07%3A51%3A01Z&se=2024-09-21T09%3A51%3A01Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-20T23%3A44%3A58Z&ske=2024-09-21T23%3A44%3A58Z&sks=b&skv=2024-08-04&sig=tVDwbShvvNGi8cQa1YJNebDVr1/R%2BKzigOqmb1BugCU%3D"
              alt="Logo of a satellite with stars"
              height="50"
              width="50"
            />
            TEQUILA MOONRISE
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  STAY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  DINE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="steps">
        <div className="step active">CHECK-IN & CHECK-OUT DATE</div>
        <div className="step">SELECT ROOMS & RATES</div>
        <div className="step">GUEST INFORMATION</div>
        <div className="step">PAYMENT & BOOKING CONFIRMATION</div>
      </div>
      <div className="container">
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
                
              </div>
              <table>
                <thead>
                  <tr>
                    <th colSpan="7" className="month-header">
                      <button className="btn btn-link" onClick={handlePrevMonth}>
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      {getMonthName()} {calendarYear}
                      <button className="btn btn-link" onClick={handleNextMonth}>
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th>SUN</th>
                    <th>MON</th>
                    <th>TUES</th>
                    <th>WED</th>
                    <th>THURS</th>
                    <th>FRI</th>
                    <th>SAT</th>
                  </tr>
                </thead>
                <tbody>
                  {renderCalendar().map((week, weekIndex) => (
                    <tr key={weekIndex}>
                      {week.map((date, dayIndex) => (
                        <td
                          key={dayIndex}
                          className={
                            date && (isDateInRange(date) || (checkinDate && new Date(checkinDate).getDate() === date.getDate())) ? 'highlight' : ''
                          }
                          onMouseEnter={(e) => {
                            if (date && new Date(checkinDate).getDate() === date.getDate()) {
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
        <button className="btn-next">
 <Link to="HotelReserveRooms">
    NEXT
  </Link>
</button>
      </div>
    </div>
  );
}

export default HotelReserve;