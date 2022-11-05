import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import farmerProducts from './data/farmer-products.js';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running ...');
});
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/product/:id/farmers', (req, res) => {
  const farmerProductsByProduct = farmerProducts.filter(
    (farmerProduct) => String(farmerProduct.product._id) === req.params.id
  );
  res.json(farmerProductsByProduct);
});

app.get('/api/farmer-product/:id', (req, res) => {
  const farmerProduct = farmerProducts.find(
    (farmerProduct) => farmerProduct._id === req.params.id
  );
  res.json(farmerProduct);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
