const request = require('supertest');
const conn = require('../../db/db');
const app = require('../../app');

const server = request(app);

describe('product controller', () => {
    afterAll(async () => conn.end());

    it('find', async () => server.get('/products').then((response) => {
        expect(response.body.data.length).toBe(8);
    }));

    it('get one', () => server.get('/products/1').then((response) => {
        expect(response.body.data[0].product_id).toBe(1);
    }));

    it('delete one', () => server.delete('/products/400').then((response) => {
        expect(response.statusCode).toBe(500);
    }));
});