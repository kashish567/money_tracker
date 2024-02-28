const express = require('express');
const bodyParser = require('body-parser');
 // Import body-parser middleware
 require('dotenv').config();
 const cors = require('cors'); // Import cors middleware
const app = express();
const Transaction =require('./models/Transaction');
const mongoose = require('mongoose');

// Use body-parser middleware to parse JSON data

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.get('/api/test', (req, res) => {
  res.json('test ok');
});

// Handle POST requests to /api/transaction
app.post('/api/transaction', (req, res) => {
 
  const data = req.body; // Access the JSON data sent from the frontend
  console.log(data); // Log the received data to the console
  res.json(data); // Respond with the received data
});




const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
