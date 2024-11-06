const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());


const mongoURI = 'mongodb://localhost:27017/tequilaSunrise';


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

app.get('/', (req, res) => {
    res.send('Tequila Sunrise API');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});