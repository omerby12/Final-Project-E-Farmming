import express from 'express';
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerCustomer,
  registerFarmer,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/register/customer').post(registerCustomer);
router.route('/register/farmer').post(registerFarmer);

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
