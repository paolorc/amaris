const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

// Basic express server configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Load routes
app.use(routes);

// NodeJS/express: Cache and 304 status code
app.disable('etag');

module.exports = app;