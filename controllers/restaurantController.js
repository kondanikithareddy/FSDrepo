import Restaurant from '../models/restaurantModel.js';

// Get all restaurants
export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching restaurants', error: error.message });
    }
};

// Add a new restaurant
export const addRestaurant = async (req, res) => {
    const { name, img, link } = req.body;

    try {
        const newRestaurant = new Restaurant({ name, img, link });
        await newRestaurant.save();
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(500).json({ message: 'Error adding restaurant', error: error.message });
    }
};

// Update a restaurant
export const updateRestaurant = async (req, res) => {
    const { id } = req.params;
    const { name, img, link } = req.body;

    try {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        restaurant.name = name;
        restaurant.img = img;
        restaurant.link = link;
        await restaurant.save();

        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ message: 'Error updating restaurant', error: error.message });
    }
};

// Delete a restaurant
export const deleteRestaurant = async (req, res) => {
    const { id } = req.params;

    try {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        await restaurant.remove();
        res.json({ message: 'Restaurant deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting restaurant', error: error.message });
    }
};