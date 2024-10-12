import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './GuestInformation.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { nationalities, timeOfArrival } from './Nationalities';

function GuestInformation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    birthdate: '',
    email: '',
    confirmEmail: '',
    nationality: '',
    arrivalTime: '',
    contactNumber: '',
    address: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      birthdate: date
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'Please type in the required field';
      }
    });

    if (formData.email && !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.contactNumber && !/^\d+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      navigate('/booking-confirmation');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '40px auto', backgroundColor: 'transparent', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <div className="steps">
        <div className="step">CHECK-IN & CHECK-OUT DATE</div>
        <div className="step">SELECT ROOMS & RATES</div>
        <div className="step active">GUEST INFORMATION</div>
        <div className="step">PAYMENT & BOOKING CONFIRMATION</div>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="error">{errors.firstName}</div>}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="error">{errors.lastName}</div>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <select
                className="form-control"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <div className="error">{errors.gender}</div>}
            </div>
            <div className="col-md-6">
              <DatePicker
                selected={formData.birthdate}
                onChange={handleDateChange}
                className="form-control"
                placeholderText="Birthdate"
              />
              {errors.birthdate && <div className="error">{errors.birthdate}</div>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Confirm Email Address"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
              />
              {errors.confirmEmail && <div className="error">{errors.confirmEmail}</div>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <select
                className="form-control"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              >
                {
                  nationalities.map((nationality, index) => (
                    index === 0 ? <option key={index} value={nationality} hidden>{nationality}</option> :
                    <option key={index} value={nationality}>{nationality}</option>
                  ))
                }
                
              </select>
              {errors.nationality && <div className="error">{errors.nationality}</div>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <select
                className="form-control"
                name="arrivalTime"
                value={formData.arrivalTime}
                onChange={handleChange}
              >
                {
                  timeOfArrival.map((time, index) => (
                    index === 0 ? <option key={index} value={time} hidden>{time}</option> :
                    <option key={index} value={time}>{time}</option>
                  ))
                }
                
              </select>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              {errors.contactNumber && <div className="error">{errors.contactNumber}</div>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <div className="error">{errors.address}</div>}
            </div>
          </div>
          <button type="submit" className="btn-next">NEXT</button>
        </form>
      </div>
    </div>
  );
}

export default GuestInformation;