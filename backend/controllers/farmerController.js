import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import FarmerProduct from '../models/farmerProductModel.js';
import Farmer from '../models/farmerModel.js';

// @desc Fetch all farmers
// @route GET /api/farmers
// @access Public
const getFarmers = asyncHandler(async (req, res) => {
  const farmers = await Farmer.find({});
  res.json(farmers);
});

// @desc Fetch single farmer
// @route GET /api/farmers/:id
// @access Public
const getFarmerById = asyncHandler(async (req, res) => {
  const farmer = await Farmer.findById(req.params.id);
  if (farmer) {
    res.json(farmer);
  } else {
    res.status(404);
    throw new Error('Farmer not found');
  }
});

// @desc Fetch all farmers products by farmer
// @route GET /api/farmers/:id/products
// @access Public
const getFarmerProductsByFarmer = asyncHandler(async (req, res) => {
  const farmerProducts = await FarmerProduct.find({ farmer: req.params.id })
    .populate('farmer')
    .populate('product');
  if (farmerProducts.length > 0) {
    res.json(farmerProducts);
  } else {
    res.status(404);
    throw new Error('Farmer Products not found');
  }
});

export { getFarmers, getFarmerById, getFarmerProductsByFarmer };
