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
        type: Number,
        required: true,
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
    }
      
});

const RestaurantFormData = mongoose.model('RestaurantFormData', restaurantSchema);

module.exports = RestaurantFormData;