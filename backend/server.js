const express = require('express');
const products = require('./data/products');
const farmerProducts = require('./data/farmer-products');

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

app.listen(5000, console.log('Server running on port 5000'));
