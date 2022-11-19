import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import SubOrder from '../models/subOrderModel.js';

// @desc    Create new sub orders, spliting order to many orders (order for each farmer)
// @route   POST /api/orders
// @access  Private
const createSubOrders = asyncHandler(async (req, res) => {
  const { orderItems, paymentMethod, totalPrice } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const createdSubOrders = await SubOrder.insertMany(req.subOrders);
    const createdOrder = await Order.create({
      user: req.user._id,
      subOrders: createdSubOrders.map((subOrder) => subOrder._id),
      paymentMethod,
      totalPrice,
    });
    return res.status(201).json(createdOrder);
  }
});

export { createSubOrders };
