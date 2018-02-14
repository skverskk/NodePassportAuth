const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const https = require('https');
const http = require('http');
const api = require('./routes/api');


const app = express();

// Routes
const root = express.Router();

// Mongoose db Credentials
require('./config/db');

// Enable Cors
app.use(cors());

// Set Static Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Enable Body Parser
app.use(bodyParser.json());

// Passport
app.use( passport.initialize());
app.use( passport.session());

require('./config/passport')(passport);

// Setup Routes /api
app.use('/api', api);

// Port Assignment
const PORT = process.env.PORT;

// Start Server on Port 3000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });

// Root
root.get('/', (req, res ) => {
    res.send('ROOT');
});
app.use('/', root);

 module.exports = app;