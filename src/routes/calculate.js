const express = require('express');
const router = express.Router();
const { calculatePrimesNumbers } = require('../controllers/calculate')

router.get('/primes-numbers/:number', calculatePrimesNumbers);

// Redirect when not found 
router.use('*', function (_, res) {
    res.status('404').json({
        message: 'No matched Route'
    })
});

module.exports = router;