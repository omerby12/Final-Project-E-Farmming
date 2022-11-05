import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import farmerProductRoutes from './routes/farmerProductRoutes.js';

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running ...');
});

app.use('/api/products', productRoutes);
app.use('/api/farmer-products', farmerProductRoutes);

// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// app.get('/api/products/:id/farmers', (req, res) => {
//   const farmerProductsByProduct = farmerProducts.filter(
//     (farmerProduct) => String(farmerProduct.product._id) === req.params.id
//   );
//   res.json(farmerProductsByProduct);
// });

// app.get('/api/farmer-products/:id', (req, res) => {
//   const farmerProduct = farmerProducts.find(
//     (farmerProduct) => farmerProduct._id === req.params.id
//   );
//   res.json(farmerProduct);
// });

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
