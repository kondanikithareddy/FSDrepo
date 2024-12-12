// import express from 'express';
// import { addItemToCart, removeItemFromCart, getCartItems } from '../controllers/cartController.js';
// import { protect, admin } from '../middleware/auth.js';

// const router = express.Router();

// router.post('/', protect, addItemToCart);
// router.delete('/:userId/:menuItemId', protect, removeItemFromCart);
// router.get('/:userId', protect, getCartItems);

// export default router;



// backend/routes/cartRoutes.js
import express from 'express';
import { addItemToCart, removeItemFromCart, getCartItems } from '../controllers/cartController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, addItemToCart);
router.delete('/:userId/:menuItemId', protect, removeItemFromCart);
router.get('/:userId', protect, getCartItems);

export default router;