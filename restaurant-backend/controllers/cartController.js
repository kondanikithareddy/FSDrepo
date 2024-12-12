// // // import Cart from '../models/Cart.js';

// // // export const addItemToCart = async (req, res) => {
// // //   const { userId, menuItemId, quantity } = req.body;
// // //   try {
// // //     const cart = await Cart.findOne({ userId });
// // //     if (cart) {
// // //       // Add or update item in cart
// // //       const itemIndex = cart.items.findIndex(item => item.menuItemId.toString() === menuItemId);
// // //       if (itemIndex > -1) {
// // //         cart.items[itemIndex].quantity += quantity;
// // //       } else {
// // //         cart.items.push({ menuItemId, quantity });
// // //       }
// // //       await cart.save();
// // //     } else {
// // //       // Create new cart
// // //       const newCart = new Cart({ userId, items: [{ menuItemId, quantity }] });
// // //       await newCart.save();
// // //     }
// // //     res.status(201).json({ message: 'Item added to cart' });
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error adding item to cart', error: error.message });
// // //   }
// // // };

// // // export const removeItemFromCart = async (req, res) => {
// // //   const { userId, menuItemId } = req.params;
// // //   try {
// // //     const cart = await Cart.findOne({ userId });
// // //     if (cart) {
// // //       cart.items = cart.items.filter(item => item.menuItemId.toString() !== menuItemId);
// // //       await cart.save();
// // //       res.status(200).json({ message: 'Item removed from cart' });
// // //     } else {
// // //       res.status(404).json({ message: 'Cart not found' });
// // //     }
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error removing item from cart', error: error.message });
// // //   }
// // // };

// // // export const getCartItems = async (req, res) => {
// // //   const { userId } = req.params;
// // //   try {
// // //     const cart = await Cart.findOne({ userId }).populate('items.menuItemId');
// // //     if (cart) {
// // //       res.status(200).json(cart);
// // //     } else {
// // //       res.status(404).json({ message: 'Cart not found' });
// // //     }
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error retrieving cart items', error: error.message });
// // //   }
// // // };


// // // backend/controllers/cartController.js
// // import Cart from '../models/Cart.js';

// // export const addItemToCart = async (req, res) => {
// //     const { userId, menuItemId, quantity } = req.body;
// //     try {
// //         const cart = await Cart.findOne({ userId });
// //         if (cart) {
// //             // Add or update item in cart
// //             // const itemIndex = cart.items.findIndex(item => item.menuItemId.toString() === menuItemId);
// //             const itemIndex = cart.items.findIndex(item => item.menuItemId.toString() === menuItemId._id);

// //             if (itemIndex > -1) {
// //                 cart.items[itemIndex].quantity += quantity;
// //             } else {
// //                 cart.items.push({ menuItemId, quantity });
// //             }
// //             await cart.save();
// //         } else {
// //             // Create new cart
// //             const newCart = new Cart({ userId, items: [{ menuItemId, quantity }] });
// //             await newCart.save();
// //         }
// //         res.status(201).json({ message: 'Item added to cart' });
// //     } catch (error) {
// //         res.status(500).json({ message: 'Error adding item to cart', error: error.message });
// //     }
// // };

// // export const removeItemFromCart = async (req, res) => {
// //     const { userId, menuItemId } = req.params;
// //     try {
// //         const cart = await Cart.findOne({ userId });
// //         if (cart) {
// //             // cart.items = cart.items.filter(item => item.menuItemId.toString() !== menuItemId);
// //             cart.items = cart.items.filter(item => item.menuItemId.toString() !== menuItemId);

// //             await cart.save();
// //             res.status(200).json({ message: 'Item removed from cart' });
// //         } else {
// //             res.status(404).json({ message: 'Cart not found' });
// //         }
// //     } catch (error) {
// //         res.status(500).json({ message: 'Error removing item from cart', error: error.message });
// //     }
// // };

// // export const getCartItems = async (req, res) => {
// //     const { userId } = req.params;
// //     try {
// //         const cart = await Cart.findOne({ userId }).populate('items.menuItemId');
// //         if (cart) {
// //             res.status(200).json(cart);
// //         } else {
// //             res.status(404).json({ message: 'Cart not found' });
// //         }
// //     } catch (error) {
// //         res.status(500).json({ message: 'Error retrieving cart items', error: error.message });
// //     }
// // };

// import Cart from '../models/Cart.js';

// // export const addItemToCart = async (req, res) => {
// //     const { userId, menuItemId, quantity } = req.body;
// //     try {
// //         const cart = await Cart.findOne({ userId });
// //         if (cart) {
// //             // Add or update item in cart
// //             const itemIndex = cart.items.findIndex(item => item.menuItemId.toString() === menuItemId);
// //             if (itemIndex > -1) {
// //                 cart.items[itemIndex].quantity += quantity;
// //             } else {
// //                 cart.items.push({ menuItemId, quantity });
// //             }
// //             await cart.save();
// //         } else {
// //             // Create new cart
// //             const newCart = new Cart({ userId, items: [{ menuItemId, quantity }] });
// //             await newCart.save();
// //         }
// //         res.status(201).json({ message: 'Item added to cart' });
// //     } catch (error) {
// //         res.status(500).json({ message: 'Error adding item to cart', error: error.message });
// //     }
// // };


// export const addItemToCart = async (req, res) => {
//   const { userId, menuItemId, quantity } = req.body;
//    try {
//      const cart = await Cart.findOne({ userId });
//       if (cart) {
//         // Add or update item in cart
//         const itemIndex = cart.items.findIndex(item => item.menuItemId.toString() === menuItemId);
//         if (itemIndex > -1) {
//            cart.items[itemIndex].quantity += quantity;
//         } else {
//            cart.items.push({ menuItemId, quantity: 1 });
//        }
//        await cart.save();
//      } else {
//        // Create new cart
//        const newCart = new Cart({ userId, items: [{ menuItemId, quantity: 1 }] });
//         await newCart.save();
//      }
//    res.status(201).json({ message: 'Item added to cart' });
//    } catch (error) {
//        res.status(500).json({ message: 'Error adding item to cart', error: error.message });
//    }
// };

// export const removeItemFromCart = async (req, res) => {
//     const { userId, menuItemId } = req.params;
//     try {
//         const cart = await Cart.findOne({ userId });
//         if (cart) {
//              cart.items = cart.items.filter(item => item.menuItemId.toString() !== menuItemId);
//             await cart.save();
//             res.status(200).json({ message: 'Item removed from cart' });
//         } else {
//             res.status(404).json({ message: 'Cart not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Error removing item from cart', error: error.message });
//     }
// };

// export const getCartItems = async (req, res) => {
//     const { userId } = req.params;
//     try {
//         const cart = await Cart.findOne({ userId }).populate('items.menuItemId');
//         if (cart) {
//             res.status(200).json(cart);
//         } else {
//             res.status(404).json({ message: 'Cart not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Error retrieving cart items', error: error.message });
//     }
// };



import Cart from '../models/Cart.js';

export const addItemToCart = async (req, res) => {
  const { userId, menuItemId, quantity } = req.body;
  try {
    const cart = await Cart.findOne({ userId });
    if (cart) {
      // Add or update item in cart
      const itemIndex = cart.items.findIndex(item => item.menuItemId.toString() === menuItemId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ menuItemId, quantity: 1 });
      }
      await cart.save();
    } else {
      // Create new cart
      const newCart = new Cart({ userId, items: [{ menuItemId, quantity: 1 }] });
      await newCart.save();
    }
    console.log('item added to cart', menuItemId)
    res.status(201).json({ message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding item to cart', error: error.message });
  }
};

export const removeItemFromCart = async (req, res) => {
  const { userId, menuItemId } = req.params;
  try {
    const cart = await Cart.findOne({ userId });
    if (cart) {
      cart.items = cart.items.filter(item => item.menuItemId.toString() !== menuItemId);
      await cart.save();
      res.status(200).json({ message: 'Item removed from cart' });
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error removing item from cart', error: error.message });
  }
};

export const getCartItems = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId }).populate('items.menuItemId');
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart items', error: error.message });
  }
};