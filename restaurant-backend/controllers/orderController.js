// // import Order from '../models/Order.js';
// // import Cart from '../models/Cart.js';

// // export const placeOrder = async (req, res) => {
// //   const { userId, totalAmount, items } = req.body;
// //   try {
// //     const order = new Order({ userId, totalAmount, items });
// //     await order.save();
// //     // Clear the cart after order placement
// //     await Cart.findOneAndDelete({ userId });
// //     res.status(201).json({ message: 'Order placed successfully', order });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error placing order', error: error.message });
// //   }
// // };

// // export const getOrderHistory = async (req, res) => {
// //   const { userId } = req.params;
// //   try {
// //     const orders = await Order.find({ userId });
// //     res.status(200).json(orders);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error retrieving order history', error: error.message });
// //   }
// // };


// // backend/controllers/orderController.js
// import Order from '../models/Order.js';
// import Cart from '../models/Cart.js';

// export const placeOrder = async (req, res) => {
//     const { userId, totalAmount, items } = req.body;
//     try {
//         const order = new Order({ userId, totalAmount, items });
//         await order.save();
//         // Clear the cart after order placement
//         await Cart.findOneAndDelete({ userId });
//         res.status(201).json({ message: 'Order placed successfully', order });
//     } catch (error) {
//         res.status(500).json({ message: 'Error placing order', error: error.message });
//     }
// };

// export const getOrderHistory = async (req, res) => {
//     const { userId } = req.params;
//     try {
//         const orders = await Order.find({ userId });
//         res.status(200).json(orders);
//     } catch (error) {
//         res.status(500).json({ message: 'Error retrieving order history', error: error.message });
//     }
// };


import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

export const placeOrder = async (req, res) => {
    const { userId, totalAmount, items } = req.body;
    try {
        const order = new Order({ userId, totalAmount, items });
        await order.save();
        // Clear the cart after order placement
        await Cart.findOneAndDelete({ userId });
        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error placing order', error: error.message });
    }
};

export const getOrderHistory = async (req, res) => {
    const { userId } = req.params;
    try {
        const orders = await Order.find({ userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving order history', error: error.message });
    }
};