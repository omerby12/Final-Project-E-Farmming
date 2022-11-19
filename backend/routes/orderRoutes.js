import express from 'express';
const router = express.Router();
import { createSubOrders } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
import { orderToSubOrders } from '../middleware/orderMiddleware.js';

router.route('/').post(protect, orderToSubOrders, createSubOrders);

export default router;
