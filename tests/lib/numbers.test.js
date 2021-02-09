const { getPrimesNumbersList, isPrime } = require('../../src/lib/numbers');

describe('Numbers', () => {
    describe('isPrime', () => {
        test('should succeed for prime number', () => {
            const result = isPrime(7);
            expect(result).toEqual(true);
        });

        test('should succeed for 1 considered as prime', () => {
            const result = isPrime(1);
            expect(result).toEqual(true);
        });

        test('should fail for not prime number', () => {
            const result = isPrime(4);
            expect(result).toEqual(false);
        });

        test('should fail for not number input type', () => {
            const result = isPrime('otherThing');
            expect(result).toEqual(false);
        });
    });

    describe('getPrimesNumbersList', () => {
        test('should return an empty list for a number lower than 1', () => {
            const result = getPrimesNumbersList(-10);
            expect(result).toEqual([]);
        });

        test('should return a list of primes numbers', () => {
            const expectedResult = [7, 5, 3, 2, 1];
            const result = getPrimesNumbersList(9);
            expect(result).toEqual(expectedResult);
        });

        test('should return an error when the input is not a number', () => {
            try {
                getPrimesNumbersList('otherThing');
            } catch (error) {
                expect(error.message).toEqual('Only numbers allowed');
            }
        });
    });
});