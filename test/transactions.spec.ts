import { it, beforeAll, afterAll, describe } from 'vitest';
import request from 'supertest';
import { app } from '../src/app';

describe('Transactions routes', () => {
  beforeAll(async () => {
    // Wait fastify to start the server with all plugins ready
    await app.ready();
  });

  afterAll(async () => {
    // Wait fastify to close the server
    await app.close();
  });

  it('should be able to create a new transaction', async () => {
    // passing the node server to the request from supertest
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New Transaction',
        amount: 5000,
        type: 'credit',
      })
      .expect(201);
  });
});
