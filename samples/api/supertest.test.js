
// Supertest example (Node.js)
// npm i -D jest supertest
const request = require('supertest');
const api = request('https://api.example.com');

test('GET /status returns 200', async () => {
  const res = await api.get('/status').set('Accept', 'application/json');
  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty('status', 'ok');
});
