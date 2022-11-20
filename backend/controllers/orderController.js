import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import SubOrder from '../models/subOrderModel.js';

// @desc    Create new sub orders, spliting order to many orders (order for each farmer)
// @route   POST /api/orders
// @access  Private
const createSubOrders = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, totalPrice } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const createdSubOrders = await SubOrder.insertMany(req.subOrders);
    const createdOrder = await Order.create({
      user: req.user._id,
      shippingAddress,
      subOrders: createdSubOrders.map((subOrder) => subOrder._id),
      paymentMethod,
      totalPrice,
    });
    return res.status(201).json(createdOrder);
  }
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate('user', 'name email')
    .populate('subOrders');

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Get sub order by ID
// @route   GET /api/orders/:id/suborder/:subOrderId
// @access  Private
const getSubOrderById = asyncHandler(async (req, res) => {
  const subOrder = await SubOrder.findById(req.params.subOrderId).populate(
    'user',
    'name email'
  );
  if (subOrder) {
    res.json(subOrder);
  } else {
    res.status(404);
    throw new Error('SubOrder not found');
  }
});

export { createSubOrders, getOrderById, getSubOrderById };
