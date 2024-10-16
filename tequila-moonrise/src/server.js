const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Tequila Moonrise API');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});