import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import FarmerProduct from '../models/farmerProductModel.js';
import Farmer from '../models/farmerModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};
  const products = await Product.find({ ...keyword });
  res.json(products);
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Fetch all farmers products by product
// @route GET /api/products/:id/farmers
// @access Public
const getFarmerProductsByProduct = asyncHandler(async (req, res) => {
  const farmerProducts = await FarmerProduct.find({
    product: req.params.id,
  })
    .populate('farmer')
    .populate('product');

  if (farmerProducts.length > 0) {
    res.json(farmerProducts);
  } else {
    res.status(404);
    throw new Error('Farmer Products not found');
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    image: '/images/sample.jpg',
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, image } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.image = image;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export {
  getProducts,
  getProductById,
  getFarmerProductsByProduct,
  createProduct,
  updateProduct,
};
