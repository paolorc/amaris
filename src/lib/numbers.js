const isPrime = number => {
    if(isNaN(number)) {
        return false;
    }

    if (number < 1) {
        return false;
    }
    // The check for the number 2 and 3, including 1
    if (number <= 3) {
        return true;
    }

    if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }

    for (var i = 5; i * i <= number; i = i + 6) {
        if (number % i == 0 || number % (i + 2) == 0)
            return false;
    }

    return true;
}

module.exports = { isPrime }