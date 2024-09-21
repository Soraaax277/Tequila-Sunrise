import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
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
              <input className="form-control" id="checkin" type="date" />
            </div>
            <div className="form-group">
              <label htmlFor="checkout">Check-out Date</label>
              <input className="form-control" id="checkout" type="date" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="calendar">
              <table>
                <thead>
                  <tr>
                    <th colSpan="7">MONTH</th>
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
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button className="btn-next">NEXT</button>
      </div>
    </div>
  );
}

export default App;
