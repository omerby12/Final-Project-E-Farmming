import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import FarmerProduct from '../models/farmerProductModel.js';
import Farmer from '../models/farmerModel.js';

const router = express.Router();

// @desc Fetch all farmer products
// @route GET /api/farmer-products
// @access Public
// @desc
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const farmerProducts = await FarmerProduct.find({})
      .populate('farmer')
      .populate('product');
    if (farmerProducts.length > 0) {
      res.json(farmerProducts);
    } else {
      res.status(404).json({ message: 'Farmer Products not found' });
    }
  })
);

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const farmerProduct = await FarmerProduct.findById(req.params.id)
      .populate('farmer')
      .populate('product');
    if (farmerProduct) {
      res.json(farmerProduct);
    } else {
      res.status(404).json({ message: 'Farmer Product not found' });
    }
  })
);

export default router;
