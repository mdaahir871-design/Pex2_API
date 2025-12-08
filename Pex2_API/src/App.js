const express = require('express');

const Router = require('.API/V1/src/Router/');

const app = express();
const cors = require('cors');

// Middleware setup
app.use(express.json());
app.use(cors());

// Use the Router for handling routes
app.use('/api', Router);

app.use('/api/v1/Router', Router);
// Start the server
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});