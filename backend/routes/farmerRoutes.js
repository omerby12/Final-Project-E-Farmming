import express from 'express';
const router = express.Router();
import {
  getFarmers,
  getFarmerByUserId,
  getFarmerProductsByFarmer,
} from '../controllers/farmerController.js';

import { protect, farmer } from '../middleware/authMiddleware.js';

router.route('/').get(getFarmers);
router.route('/:id').get(protect, farmer, getFarmerByUserId);
router.route('/:id/products').get(getFarmerProductsByFarmer);

export default router;
