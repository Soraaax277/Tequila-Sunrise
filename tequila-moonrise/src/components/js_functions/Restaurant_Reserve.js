import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import '../../css/Restaurant.css';
import { timeOfArrival } from './Nationalities.js';

function RestoReserveForm() {
  const [validated, setValidated] = useState(false);

  // Added for backend
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    guestNumber: '',
    contactNumber: '',
    email: '',
    dateReserved: '',
    timeReserved: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission and send data to the backend
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    try {
      //for checking if data is being sent
      console.log(formData);
      // Send form data to the backend
      const response = await fetch('http://localhost:5000/api/submit-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Reservation submitted successfully!');
        // Optionally reset the form after submission
        setFormData({
          firstName: '',
          lastName: '',
          guestNumber: '',
          contactNumber: '',
          email: '',
          dateReserved: '',
          timeReserved: ''
        });
      } else {
        alert('Failed to submit reservation');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your reservation.');
    }
  };

  return (
    <Form className="custom-form-bg" noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-2">
        <Form.Group as={Col} md="4" controlId="validationFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control 
            required 
            type="text"  
            placeholder="First name" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control 
            required 
            type="text"  
            placeholder="Last name" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} md="2" controlId="validationNumberofGuests">
          <Form.Label>Number of guests</Form.Label>
          <Form.Control
            required
            type="number"  
            placeholder="#"
            min="1"
            name="guestNumber"
            value={formData.guestNumber}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please input the number of guests, minimum of 1
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} md="4" controlId="validationCustomContactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control 
            required 
            type="number" 
            placeholder="Contact number" 
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid contact number (10 digits).
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"  
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-2">
        <Form.Group as={Col} md="4" controlId="validationCustomDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="date"  
            placeholder="Select a date"
            name="dateReserved"
            value={formData.dateReserved}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please select a valid date.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomTime">
          <Form.Label>Time</Form.Label>
          <Form.Select
            required
            name="timeReserved"  // Ensure the name matches the formData field
            value={formData.timeReserved}
            onChange={handleChange}  // Correctly attached to Form.Select
          >
            <option value="" disabled>Select a time</option>
            {timeOfArrival.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a valid time.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Button className="btn-sm" type="submit">Submit reservation form</Button>
    </Form>
  );
}

export default RestoReserveForm;
