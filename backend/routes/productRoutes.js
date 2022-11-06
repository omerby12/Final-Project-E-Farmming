import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import FarmerProduct from '../models/farmerProductModel.js';
import Farmer from '../models/farmerModel.js';

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
// @desc
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

// @desc Fetch all farmers products by product
// @route GET /api/products/:id/farmers
// @access Public
router.get(
  '/:id/farmers',
  asyncHandler(async (req, res) => {
    const farmerProducts = await FarmerProduct.find({ product: req.params.id })
      .populate('farmer')
      .populate('product');
    if (farmerProducts.length > 0) {
      res.json(farmerProducts);
    } else {
      res.status(404);
      throw new Error('Farmer Productss not found');
    }
  })
);

export default router;
