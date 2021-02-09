/**
 * This function evaluate the possibility of a number to be prime.
 * @param {number} number possible prime number
 * @returns {boolean} result
 */
const isPrime = number => {
    if (isNaN(number)) {
        return false;
    }

    // Edge cases
    if (number < 1) {
        return false;
    }
    // This check for the number 2 and 3, including 1
    if (number <= 3) {
        return true;
    }

    // Edge cases for early return
    if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }

    // Evaluate possibility in less loops starting from 
    for (var i = 5; i * i <= number; i = i + 6) {
        if (number % i == 0 || number % (i + 2) == 0) {
            return false;
        }
    }

    return true;
}

/**
 * This function evaluate and returns a list of primes numbers if exists.
 * @param {number} number starting number to loop
 * @returns {Array<string>} a list of strings
 */
const getPrimesNumbersList = number => {
    if (isNaN(number)) {
        throw Error('Only numbers allowed');
    }
    
    let iterator = parseInt(number);
    const numbersList = [];

    // Looping down the number received
    while (iterator >= 1) {
        if (isPrime(iterator)) {
            numbersList.push(iterator)
        }
        
        iterator--;
    }

    return numbersList;
}

module.exports = { getPrimesNumbersList, isPrime }