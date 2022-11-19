import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc    Create new orders
// @route   POST /api/orders
// @access  Private
const createOrders = asyncHandler(async (req, res) => {
  const { orderItems } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const createdOrders = await Order.insertMany(req.orders);
    return res.status(201).json(createdOrders);
  }
});

export { createOrders };
