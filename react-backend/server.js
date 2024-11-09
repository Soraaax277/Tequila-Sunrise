const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());

app.post('/saveData', (req, res) => {
  console.log('Received request:', req.body); 
  
  const { formData } = req.body;

  const formattedData = JSON.stringify(formData, null, 2) + '\n';

  fs.appendFile('userData.txt', formattedData, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).send('Error saving data');
    }
    console.log("Data saved successfully!");
    res.send('Data saved successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
