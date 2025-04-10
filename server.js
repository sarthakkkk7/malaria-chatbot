const path = require('path'); // Add at the top
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const path = require('path'); // Added
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Modified

// Add this route handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Existing /ask endpoint remains unchanged

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});