import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import './Restaurant.css';

function RestoReserveForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form className="custom-form-bg" noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="First name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="Last name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="validationNumberofGuests">
          <Form.Label>Number of guests</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Number of guests"
            min="1"
          />
          <Form.Control.Feedback type="invalid">
            Please input the number of guests, minimum of 1
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustomContactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control required type="tel" placeholder="Contact number" />
          <Form.Control.Feedback type="invalid">
            Please enter a valid contact number (10 digits).
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email" // Use 'email' for email validation
            placeholder="Enter email"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustomDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="date" // Use 'date' for date input
            placeholder="Select a date"
          />
          <Form.Control.Feedback type="invalid">
            Please select a valid date.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomTime">
          <Form.Label>Time</Form.Label>
          <Form.Control
            required
            type="time" // Use 'time' for time input
            placeholder="Select a time"
          />
          <Form.Control.Feedback type="invalid">
            Please select a valid time.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button className="btn-sm" type="submit">Submit form</Button>
    </Form>
  );
}

export default RestoReserveForm;

