// // // import MenuItem from '../models/MenuItem.js';

// // // export const addMenuItem = async (req, res) => {
// // //   const { name, description, price, restaurantId, category } = req.body;
// // //   try {
// // //     const newItem = new MenuItem({ name, description, price, restaurantId, category });
// // //     await newItem.save();
// // //     res.status(201).json(newItem);
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error adding menu item', error: error.message });
// // //   }
// // // };

// // // export const getMenuItems = async (req, res) => {
// // //   const { restaurantId } = req.params;
// // //   try {
// // //     const menuItems = await MenuItem.find({ restaurantId });
// // //     res.status(200).json(menuItems);
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error retrieving menu items', error: error.message });
// // //   }
// // // };

// // // export const updateMenuItem = async (req, res) => {
// // //   const { id } = req.params;
// // //   const { name, description, price, category } = req.body;
// // //   try {
// // //     const updatedItem = await MenuItem.findByIdAndUpdate(
// // //       id, 
// // //       { name, description, price, category }, 
// // //       { new: true }
// // //     );
// // //     res.status(200).json(updatedItem);
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error updating menu item', error: error.message });
// // //   }
// // // };

// // // export const deleteMenuItem = async (req, res) => {
// // //   const { id } = req.params;
// // //   try {
// // //     await MenuItem.findByIdAndDelete(id);
// // //     res.status(200).json({ message: 'Menu item deleted successfully' });
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error deleting menu item', error: error.message });
// // //   }
// // // };



// // // backend/controllers/menuController.js
// // import MenuItem from '../models/MenuItem.js';

// // export const addMenuItem = async (req, res) => {
// //   const { name, description, price, restaurantId, category } = req.body;
// //   try {
// //     const newItem = new MenuItem({ name, description, price, restaurantId, category });
// //     await newItem.save();
// //     res.status(201).json(newItem);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error adding menu item', error: error.message });
// //   }
// // };

// // export const getMenuItems = async (req, res) => {
// //   const { restaurantId } = req.params;
// //   try {
// //     const menuItems = await MenuItem.find({ restaurantId });
// //     res.status(200).json(menuItems);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error retrieving menu items', error: error.message });
// //   }
// // };

// // export const updateMenuItem = async (req, res) => {
// //     const { id } = req.params;
// //     const { name, description, price, category } = req.body;
// //     try {
// //         const updatedItem = await MenuItem.findByIdAndUpdate(
// //             id,
// //             { name, description, price, category },
// //             { new: true }
// //         );
// //         res.status(200).json(updatedItem);
// //     } catch (error) {
// //         res.status(500).json({ message: 'Error updating menu item', error: error.message });
// //     }
// // };

// // export const deleteMenuItem = async (req, res) => {
// //     const { id } = req.params;
// //     try {
// //         await MenuItem.findByIdAndDelete(id);
// //         res.status(200).json({ message: 'Menu item deleted successfully' });
// //     } catch (error) {
// //         res.status(500).json({ message: 'Error deleting menu item', error: error.message });
// //     }
// // };


// // // backend/controllers/menuController.js
// // import MenuItem from '../models/MenuItem.js';

// // export const addMenuItem = async (req, res) => {
// //   const { name, description, price, restaurantId, category } = req.body;
// //   try {
// //     const newItem = new MenuItem({ name, description, price, restaurant: restaurantId, category });
// //     await newItem.save();
// //     res.status(201).json(newItem);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error adding menu item', error: error.message });
// //   }
// // };

// // export const getMenuItems = async (req, res) => {
// //   const { restaurantId } = req.params;
// //   try {
// //     const menuItems = await MenuItem.find({ restaurant: restaurantId });
// //     res.status(200).json(menuItems);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error retrieving menu items', error: error.message });
// //   }
// // };

// // export const updateMenuItem = async (req, res) => {
// //   const { id } = req.params;
// //   const { name, description, price, category } = req.body;
// //   try {
// //     const updatedItem = await MenuItem.findByIdAndUpdate(
// //       id,
// //       { name, description, price, category },
// //       { new: true }
// //     );
// //     res.status(200).json(updatedItem);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error updating menu item', error: error.message });
// //   }
// // };

// // export const deleteMenuItem = async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //     await MenuItem.findByIdAndDelete(id);
// //     res.status(200).json({ message: 'Menu item deleted successfully' });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error deleting menu item', error: error.message });
// //   }
// // };



// // // backend/controllers/menuController.js
// // import MenuItem from '../models/MenuItem.js';
// // import Restaurant from '../models/restaurantModel.js';

// // // Add menu item
// // export const addMenuItem = async (req, res) => {
// //   try {
// //       const { name, price, restaurantId, category } = req.body;

// //       // Find the restaurant by name (restaurantId now holds restaurant name)
// //     const restaurant = await Restaurant.findOne({ name: restaurantId });

// //     if (!restaurant) {
// //           return res.status(404).json({ message: `Restaurant with the name ${restaurantId} was not found` });
// //      }

// //       const newMenuItem = new MenuItem({ name, price, restaurant: restaurant._id, category });
// //       const savedMenuItem = await newMenuItem.save();
// //       res.status(201).json(savedMenuItem);
// //   } catch (error) {
// //       console.error("Error creating menu item", error);
// //       res.status(500).json({ message: "Error creating menu item", error: error.message });
// //   }
// // };

// // // Get menu items
// // export const getMenuItems = async (req, res) => {
// //   try {
// //       const restaurantId = req.params.restaurantId;
// //       // Check if restaurant exists
// //       const restaurant = await Restaurant.findOne({ name: restaurantId });
// //       if (!restaurant) {
// //         return res.status(404).json({ message: `Restaurant with the name ${restaurantId} was not found` });
// //       }
// //       // Find menu items that match the restaurant id
// //       const menuItems = await MenuItem.find({ restaurant: restaurant._id });
// //       res.json(menuItems);
// //   } catch (error) {
// //       console.error("Error retrieving menu items", error);
// //     res.status(500).json({ message: 'Error retrieving menu items', error: error.message });
// //   }
// // };

// // // Update menu item
// // export const updateMenuItem = async (req, res) => {
// //     const { id } = req.params;
// //     const { name, price, category } = req.body;
// //     try {
// //         const updatedItem = await MenuItem.findByIdAndUpdate(
// //             id,
// //             { name, price, category },
// //             { new: true }
// //         );
// //         if(!updatedItem) {
// //             return res.status(404).json({ message: `Menu Item with id ${id} was not found` })
// //         }
// //         res.status(200).json(updatedItem);
// //     } catch (error) {
// //         console.error("Error updating menu item", error)
// //         res.status(500).json({ message: 'Error updating menu item', error: error.message });
// //     }
// // };

// // // Delete menu item
// // export const deleteMenuItem = async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //       const deletedItem = await MenuItem.findByIdAndDelete(id);
// //     if(!deletedItem) {
// //       return res.status(404).json({message: `Menu Item with id ${id} not found`})
// //     }
// //     res.status(200).json({ message: 'Menu item deleted successfully' });
// //   } catch (error) {
// //       console.error("Error deleting menu item", error)
// //     res.status(500).json({ message: 'Error deleting menu item', error: error.message });
// //   }
// // };




// import MenuItem from '../models/MenuItem.js';
// import Restaurant from '../models/restaurantModel.js';

// // Add menu item
// export const addMenuItem = async (req, res) => {
//   console.log("addMenuItem called");
//   try {
//       const { name, price, restaurantId, category } = req.body;
//       console.log("Request body:", req.body); // Log the request body
//       console.log("restaurantId:", restaurantId); // Log the restaurantId received


//       // Find the restaurant by name (restaurantId now holds restaurant name)
//       const restaurant = await Restaurant.findOne({ name: restaurantId });

//       console.log("Restaurant found:", restaurant); // Log the found restaurant

//     if (!restaurant) {
//           return res.status(404).json({ message: `Restaurant with the name ${restaurantId} was not found` });
//      }

//       const newMenuItem = new MenuItem({ name, price, restaurant: restaurant._id, category });
//       const savedMenuItem = await newMenuItem.save();
//       console.log("New menu item created:", savedMenuItem)
//       res.status(201).json(savedMenuItem);
//   } catch (error) {
//       console.error("Error creating menu item", error);
//       res.status(500).json({ message: "Error creating menu item", error: error.message });
//   }
// };

// // Get menu items
// export const getMenuItems = async (req, res) => {
//   console.log("getMenuItems called");
//   try {
//       const restaurantId = req.params.restaurantId;
//       console.log("restaurantId from params:", restaurantId); // Log the restaurantId from params

//       // Check if restaurant exists
//       const restaurant = await Restaurant.findOne({ name: restaurantId });
//        console.log("Restaurant found:", restaurant); // Log the found restaurant
//       if (!restaurant) {
//         return res.status(404).json({ message: `Restaurant with the name ${restaurantId} was not found` });
//       }
//       // Find menu items that match the restaurant id
//       const menuItems = await MenuItem.find({ restaurant: restaurant._id });
//       console.log("Menu items found:", menuItems); // Log the found menu items
//       res.json(menuItems);
//   } catch (error) {
//       console.error("Error retrieving menu items", error);
//     res.status(500).json({ message: 'Error retrieving menu items', error: error.message });
//   }
// };

// // Update menu item
// export const updateMenuItem = async (req, res) => {
//     console.log("updateMenuItem called");
//     const { id } = req.params;
//      console.log("Menu item ID:", id); // Log the ID
//      console.log("Request body:", req.body) //Log the req body
//     const { name, price, category } = req.body;
//     try {
//         const updatedItem = await MenuItem.findByIdAndUpdate(
//             id,
//             { name, price, category },
//             { new: true }
//         );
//         console.log("Updated menu item:", updatedItem); // Log the updated item
//         if(!updatedItem) {
//             return res.status(404).json({ message: `Menu Item with id ${id} was not found` })
//         }
//         res.status(200).json(updatedItem);
//     } catch (error) {
//         console.error("Error updating menu item", error)
//         res.status(500).json({ message: 'Error updating menu item', error: error.message });
//     }
// };

// // Delete menu item
// export const deleteMenuItem = async (req, res) => {
//     console.log("deleteMenuItem called");
//     const { id } = req.params;
//     console.log("Menu item ID:", id); // Log the ID
//   try {
//       const deletedItem = await MenuItem.findByIdAndDelete(id);
//       console.log("Deleted menu item:", deletedItem); // Log the deleted item
//     if(!deletedItem) {
//       return res.status(404).json({message: `Menu Item with id ${id} not found`})
//     }
//     res.status(200).json({ message: 'Menu item deleted successfully' });
//   } catch (error) {
//       console.error("Error deleting menu item", error)
//     res.status(500).json({ message: 'Error deleting menu item', error: error.message });
//   }
// };



import MenuItem from '../models/MenuItem.js';
import Restaurant from '../models/restaurantModel.js';

// Add menu item
export const addMenuItem = async (req, res) => {
    console.log("addMenuItem called");
  try {
      const { name, price, restaurantId, category } = req.body;
      console.log("Request body:", req.body); // Log the request body
      console.log("restaurantId:", restaurantId); // Log the restaurantId received


      // Find the restaurant by name (restaurantId now holds restaurant name)
     // Find the restaurant by name (case-insensitive)
     const restaurant = await Restaurant.findOne({ name: { $regex: new RegExp(restaurantId, 'i') } });

      console.log("Restaurant found:", restaurant); // Log the found restaurant

    if (!restaurant) {
          return res.status(404).json({ message: `Restaurant with the name ${restaurantId} was not found` });
     }

      const newMenuItem = new MenuItem({ name, price, restaurant: restaurant._id, category });
      const savedMenuItem = await newMenuItem.save();
      console.log("New menu item created:", savedMenuItem)
      res.status(201).json(savedMenuItem);
  } catch (error) {
      console.error("Error creating menu item", error);
      res.status(500).json({ message: "Error creating menu item", error: error.message });
  }
};

// Get menu items
export const getMenuItems = async (req, res) => {
  console.log("getMenuItems called");
  try {
      const restaurantId = req.params.restaurantId;
      console.log("restaurantId from params:", restaurantId); // Log the restaurantId from params

      // Check if restaurant exists
        // Find the restaurant by name (case-insensitive)
      const restaurant = await Restaurant.findOne({ name: { $regex: new RegExp(restaurantId, 'i') } });
       console.log("Restaurant found:", restaurant); // Log the found restaurant

      if (!restaurant) {
        return res.status(404).json({ message: `Restaurant with the name ${restaurantId} was not found` });
      }
      // Find menu items that match the restaurant id
      const menuItems = await MenuItem.find({ restaurant: restaurant._id });
      console.log("Menu items found:", menuItems); // Log the found menu items
      res.json(menuItems);
  } catch (error) {
      console.error("Error retrieving menu items", error);
    res.status(500).json({ message: 'Error retrieving menu items', error: error.message });
  }
};

// Update menu item
export const updateMenuItem = async (req, res) => {
    console.log("updateMenuItem called");
    const { id } = req.params;
     console.log("Menu item ID:", id); // Log the ID
     console.log("Request body:", req.body) //Log the req body
    const { name, price, category } = req.body;
    try {
        const updatedItem = await MenuItem.findByIdAndUpdate(
            id,
            { name, price, category },
            { new: true }
        );
        console.log("Updated menu item:", updatedItem); // Log the updated item
        if(!updatedItem) {
            return res.status(404).json({ message: `Menu Item with id ${id} was not found` })
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        console.error("Error updating menu item", error)
        res.status(500).json({ message: 'Error updating menu item', error: error.message });
    }
};

// Delete menu item
export const deleteMenuItem = async (req, res) => {
    console.log("deleteMenuItem called");
    const { id } = req.params;
    console.log("Menu item ID:", id); // Log the ID
  try {
      const deletedItem = await MenuItem.findByIdAndDelete(id);
      console.log("Deleted menu item:", deletedItem); // Log the deleted item
    if(!deletedItem) {
      return res.status(404).json({message: `Menu Item with id ${id} not found`})
    }
    res.status(200).json({ message: 'Menu item deleted successfully' });
  } catch (error) {
      console.error("Error deleting menu item", error)
    res.status(500).json({ message: 'Error deleting menu item', error: error.message });
  }
};