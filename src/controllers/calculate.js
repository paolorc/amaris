const { isPrime } = require('../lib/numbers');

const calculatePrimesNumbers = (req, res) => {
    const { number } = req.params;

    try {
        if (isNaN(number)) {
            throw Error('Only numbers allowed');
        }

        return res.status(200).json({ isPrime: isPrime(number) });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = {
    calculatePrimesNumbers
}