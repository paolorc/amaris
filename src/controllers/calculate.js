const { getPrimesNumbersList } = require('../lib/numbers');

const calculatePrimesNumbers = (req, res) => {
    const { number } = req.params;

    try {
        const primesNumbersList = getPrimesNumbersList(number);

        return res.status(200).json({
            totalNumbers: primesNumbersList.length,
            primesNumbersList,
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = {
    calculatePrimesNumbers
}