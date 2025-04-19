// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize an Express application
const app = express();

// Define the port number
const port = process.env.PORT || 3000;

// Connect to MongoDB
const database = "mongodb://localhost:27017/vocab-builder"; // Database name
mongoose.connect(database)
    .then(() => console.log('Connected to database successfully!'))
    .catch((err) => console.error('Failed to connect to database: ' + err));

// Configure middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

// Declare routes
const wordRoute = require('./api/routes/wordRoute'); // Adjust the path as necessary
wordRoute(app); // Register routes

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});