const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

const mongoURI = 'mongodb://127.0.0.1:27017/userDataDB';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB locally'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  contactNo: String,
  email: String,
  confirmEmail: String,
  password: String,
  confirmPassword: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(cors());

app.post('/saveData', (req, res) => {
  const { formData } = req.body;

  const newUser = new User({
    firstName: formData.firstName,
    lastName: formData.lastName,
    contactNo: formData.contactNo,
    email: formData.email,
    confirmEmail: formData.confirmEmail,
    password: formData.password,
    confirmPassword: formData.confirmPassword
  });

  newUser.save()
    .then(() => {
      console.log('User data saved to MongoDB');
      res.send('Data saved successfully');
    })
    .catch((err) => {
      console.error('Error saving to MongoDB', err);
      res.status(500).send('Error saving data');
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
