const { restart } = require('nodemon');
const { isPrime } = require('../lib/numbers');

const calculatePrimesNumbers = (req, res) => {
    const { number } = req.params;
    
    return res.status(200).send(`Is Prime: ${isPrime(number)}`)
}

module.exports = {
    calculatePrimesNumbers
}