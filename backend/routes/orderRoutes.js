import express from 'express';
const router = express.Router();
import {
  createSubOrders,
  getOrderById,
  getSubOrderById,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
import { orderToSubOrders } from '../middleware/orderMiddleware.js';

router.route('/').post(protect, orderToSubOrders, createSubOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/suborder/:subOrderId').get(protect, getSubOrderById);

export default router;
