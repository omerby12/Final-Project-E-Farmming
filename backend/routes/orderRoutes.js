import express from 'express';
const router = express.Router();
import { createOrders } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
import { orderToOrders } from '../middleware/orderMiddleware.js';

router.route('/').post(protect, orderToOrders, createOrders);

export default router;
