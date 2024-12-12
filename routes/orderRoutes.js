// import express from 'express';
// import { placeOrder, getOrderHistory } from '../controllers/orderController.js';
// import { protect, admin } from '../middleware/auth.js';

// const router = express.Router();

// router.post('/', protect, placeOrder);
// router.get('/:userId', protect, getOrderHistory);

// export default router;


// // backend/routes/orderRoutes.js
// import express from 'express';
// import { placeOrder, getOrderHistory } from '../controllers/orderController.js';
// import { protect, admin } from '../middleware/auth.js';

// const router = express.Router();

// router.post('/', protect, placeOrder);
// router.get('/:userId', protect, getOrderHistory);

// export default router;


import express from 'express';
import { placeOrder, getOrderHistory } from '../controllers/orderController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, placeOrder);
router.get('/:userId', protect, getOrderHistory);

export default router;