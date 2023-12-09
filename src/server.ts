import fastify from 'fastify';
import { knex } from './database';
import { env } from './env';

const app = fastify();

// GET, POST, PUT, PATCH, DELETE

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .where('amount', 1000)
    .select('*');

  return transaction;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!');
  });
