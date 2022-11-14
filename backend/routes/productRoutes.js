import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  getFarmerProductsByProduct,
} from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.route('/:id/farmers').get(getFarmerProductsByProduct);

export default router;
