// import express from 'express';
// import { registerUser, loginUser, getUserProfile } from '../controllers/authController.js';
// import { protect, admin } from '../middleware/auth.js';

// const router = express.Router();

// router.post('/register',  registerUser);
// router.post('/login',  loginUser);
// router.get('/profile/:userId', protect, getUserProfile);

// export default router;


// backend/routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/authController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.post('/register',  registerUser);
router.post('/login',  loginUser);
router.get('/profile/:userId', protect, getUserProfile);

export default router;