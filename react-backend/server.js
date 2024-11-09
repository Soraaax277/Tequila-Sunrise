const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Use a single MongoDB URI
const mongoURI = 'mongodb://127.0.0.1:27017/bookings';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  contactNo: String,
  email: String,
  confirmEmail: String,
  password: String,
  confirmPassword: String
});

const User = mongoose.model('User ', userSchema);

// Guest Information Schema
const guestInfoSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  birthdate: Date,
  email: String,
  nationality: String,
  arrivalTime: String,
  contactNumber: String,
  address: String,
});

const GuestInformation = mongoose.model('GuestInformation', guestInfoSchema);

// Hotel Reserve Schema
const hotelReserveSchema = new mongoose.Schema({
  hotelName: String,
  checkInDate: Date,
  checkOutDate: Date,
  guestInfo: { type: mongoose.Schema.Types.ObjectId, ref: 'GuestInformation' },
});

const HotelReserve = mongoose.model('HotelReserve', hotelReserveSchema);

// Hotel Reserve Room Schema
const hotelReserveRoomSchema = new mongoose.Schema({
  hotelReserve: { type: mongoose.Schema.Types.ObjectId, ref: 'HotelReserve' },
  roomType: String,
  numberOfRooms: Number,
  pricePerNight: Number,
  adults: Number, // Add this field
  breakfast: { type: Boolean, default: false }, // Add this field
  extraBed: { type: Boolean, default: false }, // Add this field
  request: String, // Add this field for special requests
});

const HotelReserveRoom = mongoose.model('HotelReserveRoom', hotelReserveRoomSchema);

// Stay Schema
const staySchema = new mongoose.Schema({
  hotelReserve: { type: mongoose.Schema.Types.ObjectId, ref: 'HotelReserve' },
  totalNights: Number,
  totalPrice: Number,
});

const Stay = mongoose.model('Stay', staySchema);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// User Registration Endpoint
app.post('/saveData', (req, res) => {
  const { formData } = req.body;

  const newUser  = new User({
    firstName: formData.firstName,
    lastName: formData.lastName,
    contactNo: formData.contactNo,
    email: formData.email,
    confirmEmail: formData.confirmEmail,
    password: formData.password,
    confirmPassword: formData.confirmPassword
  });

  newUser .save()
    .then(() => {
      console.log('User  data saved to MongoDB');
      res.send('Data saved successfully');
    })
    .catch((err) => {
      console.error('Error saving to MongoDB', err);
      res.status(500).send('Error saving data');
    });
});

// POST endpoint to create guest information
app.post('/api/guest', async (req, res) => {
  try {
    const newGuestInfo = new GuestInformation(req.body);
    await newGuestInfo.save();
    res.status(201).json({ message: 'Guest information created successfully', guestInfo: newGuestInfo });
  } catch (error) {
    console.error('Error creating guest information:', error);
    res.status(500).json({ message: 'Error creating guest information', error });
  }
});

// POST endpoint to create hotel reservation
app.post('/api/hotelreserve', async (req, res) => {
  try {
    const newHotelReserve = new HotelReserve(req.body);
    await newHotelReserve.save();
    res.status(201).json({ message: 'Hotel reservation created successfully', hotelReserve: newHotelReserve });
  } catch (error) {
    console.error('Error creating hotel reservation:', error);
    res.status(500).json({ message: 'Error creating hotel reservation', error });
  }
});

// POST endpoint to create hotel reservation room
app.post('/api/hotelreserveroom', async (req, res) => {
  try {
    const newHotelReserveRoom = new HotelReserveRoom(req.body);
    await newHotelReserveRoom.save();
    res.status(201).json({ message: 'Hotel reservation room created successfully', hotelReserveRoom: newHotelReserveRoom });
  } catch (error) {
    console.error('Error creating hotel reservation room:', error);
    res.status(500).json({ message: 'Error creating hotel reservation room', error });
  }
});

// POST endpoint to create stay
app.post('/api/stay', async (req, res) => {
  try {
    const newStay = new Stay(req.body);
    await newStay.save();
    res.status(201).json({ message: 'Stay created successfully', stay: newStay });
  } catch (error) {
    console.error('Error creating stay:', error);
    res.status(500).json({ message: 'Error creating stay', error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});