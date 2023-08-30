/* eslint-disable import/no-extraneous-dependencies */

import express from 'express';

import cors from 'cors';

import { getAll } from './services/productService.js';

const port = 5000;

const app = express();

app.use(cors());

app.get('/products', (req, res) => {
  const result = getAll();

  res.send(result);
});

app.listen(port, () => {
  console.log('server is running');
});
