import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import farmerProductRoutes from './routes/farmerProductRoutes.js';
import farmerRoutes from './routes/farmerRoutes.js';
import userRoutes from './routes/userRoutes.js';
import shippingAddressRoutes from './routes/shippingAddressRoutes.js';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/farmer-products', farmerProductRoutes);
app.use('/api/farmers', farmerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/shipping-address', shippingAddressRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
