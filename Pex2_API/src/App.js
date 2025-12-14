const express = require('express');
const cors = require('cors');

const caseRoutesV1 = require('./V1.0/Routes/Pex2_Router');
const caseRoutesV11 = require('./V1.1/Routes/Pex2_Router');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1.0/cases', caseRoutesV1);
app.use('/api/v1.1/cases', caseRoutesV11);

// Server
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});
