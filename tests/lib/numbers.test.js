const { isPrime } = require('../../src/lib/numbers');

describe('Numbers', () => {
    describe('prime numbers', () => {
        test('should succeed for prime numbers', () => {
            expect(isPrime(7)).toEqual(true);
        });

        test('should succeed for 1 considered as prime', () => {
            expect(isPrime(1)).toEqual(true);
        });

        test('should fail for not number input type', () => {
            expect(isPrime('otherThing')).toEqual(false);
        });
    });
});