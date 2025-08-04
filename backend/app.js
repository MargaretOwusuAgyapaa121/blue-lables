const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact.js');
const path = require('path');

dotenv.config();

const app = express();

// Middlewares
app.use(cors({ origin: ['http://localhost:5173', ] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', contactRoutes);

module.exports = app;
