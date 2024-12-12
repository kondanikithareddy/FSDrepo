// import express from 'express';
// import { addMenuItem, getMenuItems, updateMenuItem, deleteMenuItem } from '../controllers/menuController.js';
// import { protect, admin } from '../middleware/auth.js';

// const router = express.Router();

// router.post('/', protect, addMenuItem);
// router.get('/:restaurantId', protect, getMenuItems);
// router.put('/:id', protect, updateMenuItem);
// router.delete('/:id', protect, deleteMenuItem);

// export default router;


// // backend/routes/menuRoutes.js
// import express from 'express';
// import { addMenuItem, getMenuItems, updateMenuItem, deleteMenuItem } from '../controllers/menuController.js';
// import { protect, admin } from '../middleware/auth.js';

// const router = express.Router();

// router.post('/', protect, addMenuItem);
// router.get('/:restaurantId', protect, getMenuItems);
// router.put('/:id', protect, updateMenuItem);
// router.delete('/:id', protect, deleteMenuItem);

// export default router;



// backend/routes/menuRoutes.js
import express from 'express';
import { addMenuItem, getMenuItems, updateMenuItem, deleteMenuItem } from '../controllers/menuController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, admin, addMenuItem);
router.get('/:restaurantId', protect, getMenuItems);
router.put('/:id', protect, admin, updateMenuItem);
router.delete('/:id', protect, admin, deleteMenuItem);

export default router;