'use strict'

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
const cors = require('cors');
const router = require('./routes');

// DB Setup
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:auth/auth')

// App Setup
app.use(passport.initialize());
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, function() {
    console.log('Server listening on port:', port);
})
