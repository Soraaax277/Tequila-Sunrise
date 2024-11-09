const express = require('express');
const router = express.Router();
const RestaurantFormData = require('../models/RestaurantReserveModel'); 

// Handle POST request to save restaurant reservation data
router.post('/submit-reservation', async (req, res) => {
  try {
    const reservationData = new RestaurantFormData({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      guestNumber: req.body.guestNumber,
      contactNumber: req.body.contactNumber,
      email: req.body.email,
      dateReserved: new Date(req.body.dateReserved),
      timeReserved: req.body.timeReserved
    });
    
    // Save the reservation data to the database
    await reservationData.save();
    res.status(200).send({ message: 'Reservation successfully submitted!' });
  } catch (error) {
    console.error('Error saving reservation data:', error);
    res.status(500).send({ message: 'Failed to submit reservation', error: error.message });
  }
});

module.exports = router;