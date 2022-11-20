import express from 'express';
const router = express.Router();
import {
  createSubOrders,
  getOrderById,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
import { orderToSubOrders } from '../middleware/orderMiddleware.js';

router.route('/').post(protect, orderToSubOrders, createSubOrders);
router.route('/:id').get(protect, getOrderById);

export default router;
