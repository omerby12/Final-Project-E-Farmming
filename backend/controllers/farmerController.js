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

// @desc Fetch single farmer by user id
// @route GET /api/farmers/:id
// @access Public
const getFarmerByUserId = asyncHandler(async (req, res) => {
  const farmer = await Farmer.findOne({ user: req.params.id });
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
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const farmerProducts = await FarmerProduct.find({ farmer: req.params.id })
    .populate('farmer')
    .populate({ path: 'product', match: { ...keyword } });

  const farmerProductsResult = farmerProducts.filter(function (farmerProduct) {
    return farmerProduct.product !== null;
  });

  if (farmerProductsResult.length > 0) {
    res.json(farmerProductsResult);
  } else {
    res.status(404);
    throw new Error('Farmer Products not found');
  }
});

export { getFarmers, getFarmerByUserId, getFarmerProductsByFarmer };
