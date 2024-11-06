const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URI
const mongoURI = 'mongodb://localhost:27017/tequilaSunrise';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Define a Mongoose Schema for bookings
const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    hotelName: String,
    checkInDate: Date,
    checkOutDate: Date,
    numberOfGuests: Number,
    specialRequests: String
});

// Create a Mongoose Model
const Booking = mongoose.model('Booking', bookingSchema);

// Route to get all bookings
app.get('/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to create a new booking
app.post('/bookings', async (req, res) => {
    const booking = new Booking(req.body);

    try {
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Root route
app.get('/', (req, res) => {
    res.send('Tequila Sunrise API');
});

// Start the server
app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});