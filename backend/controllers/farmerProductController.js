import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import FarmerProduct from '../models/farmerProductModel.js';
import Farmer from '../models/farmerModel.js';

// @desc Fetch all farmer products
// @route GET /api/farmer-products
// @access Public
const getFarmerProducts = asyncHandler(async (req, res) => {
  const farmerProducts = await FarmerProduct.find({})
    .populate('farmer')
    .populate('product');
  res.json(farmerProducts);
});

// @desc Fetch single farmer product
// @route GET /api/farmer-products/:id
// @access Public
const getFarmerProductById = asyncHandler(async (req, res) => {
  const farmerProduct = await FarmerProduct.findById(req.params.id)
    .populate('farmer')
    .populate('product');
  if (farmerProduct) {
    res.json(farmerProduct);
  } else {
    res.status(404);
    throw new Error('Farmer Product not found');
  }
});

export { getFarmerProducts, getFarmerProductById };
