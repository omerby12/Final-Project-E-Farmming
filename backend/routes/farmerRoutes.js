import express from 'express';
const router = express.Router();
import {
  getFarmers,
  getFarmerById,
  getFarmerProductsByFarmer,
} from '../controllers/farmerController.js';

router.route('/').get(getFarmers);
router.route('/:id').get(getFarmerById);
router.route('/:id/products').get(getFarmerProductsByFarmer);

export default router;
