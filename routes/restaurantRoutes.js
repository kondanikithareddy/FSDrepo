import express from 'express';
import { getRestaurants, addRestaurant, updateRestaurant, deleteRestaurant } from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/', getRestaurants);
router.post('/', addRestaurant);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

export default router;