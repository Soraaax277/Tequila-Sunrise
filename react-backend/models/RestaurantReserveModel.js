const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    
    lastName:{
        type: String,
        required: true,
        trim: true
    },

    guestNumber:{
        type: Number,
        required: true,
        min:0
    },

    contactNumber: {
        type: String,
        required: true,
        match: /^[0-9]$/  // Allows 10 or 11 digit numbers only
    },    

    email: {
        type: String,
        required: true,
        unique: false
      },

    dateReserved: {
        type: Date,
        required: true
      },
    
    timeReserved: {
        type: String,
        required: true,
        match: /^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)$|^([01]?\d|2[0-3]):[0-5]\d$/i 
    }
      
});

const RestaurantFormData = mongoose.model('RestaurantFormData', restaurantSchema);

module.exports = RestaurantFormData;