const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

async function logBookingData(data) {
    try {
        const database = client.db('your_database_name'); 
        const collection = database.collection('bookings'); 

        const result = await collection.insertOne(data);
        console.log(`New booking logged with the following id: ${result.insertedId}`);
    } catch (error) {
        console.error("Error logging booking data:", error);
    }
}


module.exports = {
    connectToMongoDB,
    logBookingData
};

connectToMongoDB();