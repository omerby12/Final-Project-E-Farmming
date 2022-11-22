import express from 'express';
const router = express.Router();
import {
  createOrder,
  getOrderById,
  getSubOrderById,
  updateOrderToPaid,
  getMyOrders,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
import { orderToSubOrders } from '../middleware/orderMiddleware.js';

router.route('/').post(protect, orderToSubOrders, createOrder);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/suborder/:subOrderId').get(protect, getSubOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
