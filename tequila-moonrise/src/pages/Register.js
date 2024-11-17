import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../css/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNo: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use the new hook for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstName) formErrors.firstName = "First Name is required";
    if (!formData.lastName) formErrors.lastName = "Last Name is required";
    if (!formData.contactNo) formErrors.contactNo = "Contact No is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (formData.email !== formData.confirmEmail)
      formErrors.confirmEmail = "Emails do not match";
    if (!formData.password) formErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = "Passwords do not match";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const dataToSend = { ...formData, formType: 'Register' };

      try {
        const response = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ formData: dataToSend })
        });

        if (response.ok) {
          alert("Registration successful!");
          navigate('/login'); // Use navigate for redirect after successful registration
        } else {
          const errorMessage = await response.text();
          alert(errorMessage); // Show the error message from the server if the registration fails
        }
      } catch (error) {
        console.error("Error registering:", error);
        alert("An error occurred during registration. Please try again.");
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div>
          <label>Contact No:</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
          />
          {errors.contactNo && <p className="error">{errors.contactNo}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Confirm Email:</label>
          <input
            type="email"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
          />
          {errors.confirmEmail && <p className="error">{errors.confirmEmail}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Register</button>
      </form>

      <p className="login-link">
        Have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
