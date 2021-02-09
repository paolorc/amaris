const express = require('express');
const router = express.Router();

const calculateRoutes = require('./calculate');

router.use('/calculate', calculateRoutes);

module.exports = router;