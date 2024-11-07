// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/bookings', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define Schemas and Models

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
});

const HotelReserveRoom = mongoose.model('HotelReserveRoom', hotelReserveRoomSchema);

// Stay Schema
const staySchema = new mongoose.Schema({
  hotelReserve: { type: mongoose.Schema.Types.ObjectId, ref: 'HotelReserve' },
  totalNights: Number,
  totalPrice: Number,
});

const Stay = mongoose.model('Stay', staySchema);

// POST endpoint to create guest information
app.post('/api/guest', async (req, res) => {
  try {
    const newGuestInfo = new GuestInformation(req.body);
    await newGuestInfo.save();
    res.status(201).json({ message: 'Guest information created successfully', guestInfo: newGuestInfo });
  } catch (error) {
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
    res.status(500).json({ message: 'Error creating stay', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});