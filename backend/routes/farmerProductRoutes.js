import express from 'express';
const router = express.Router();
import {
  getFarmerProducts,
  getFarmerProductById,
} from '../controllers/farmerProductController.js';

router.route('/').get(getFarmerProducts);
router.route('/:id').get(getFarmerProductById);

export default router;
