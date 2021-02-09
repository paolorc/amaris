const { test, describe } = require('@jest/globals');
const request = require('supertest');
const server = require('../../src/server');

describe('Route handlers', () => {
    describe('calculate', () => {
        test('Should succeed for a number input', async () => {
            try {
                const res = await request(server)
                    .get('/calculate/primes-numbers/7');

                expect(res.statusCode).toEqual(200);
                expect(res.body.isPrime).toEqual(true);

            } catch (error) {
                expect(error).toBe(null);
            }
        });

        test('Should fail for not number input', async () => {
            try {
                const res = await request(server)
                    .get('/calculate/primes-numbers/hi');
    
                expect(res.statusCode).toEqual(400);
                expect(res.body.message).toEqual('Only numbers allowed');
    
            } catch (error) {
                expect(error).toBe(null);
            }
        });
    })

    test('should fail for not matched routes', async () => {
        try {
            const res = await request(server)
                .get('/anotherRoute');

            expect(res.statusCode).toEqual(404);
            expect(res.body.message).toEqual('No matched Route');

        } catch (error) {
            expect(error).toBe(null);
        }
    });
})

