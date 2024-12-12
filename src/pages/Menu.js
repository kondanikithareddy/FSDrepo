
// // // // // // import React from 'react';
// // // // // // import { useParams } from 'react-router-dom';
// // // // // // import { useCart } from '../CartContext';

// // // // // // const Menu = () => {
// // // // // //   const { restaurantId } = useParams();
// // // // // //   const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems } = useCart();

// // // // // //   // Define restaurant-specific menus
// // // // // //   const menus = {
// // // // // //     'cheesecake-factory': [
// // // // // //       { id: 1, name: 'Cheesecake', price: 7 },
// // // // // //       { id: 2, name: 'Pasta Alfredo', price: 15 },
// // // // // //       { id: 3, name: 'Caesar Salad', price: 10 },
// // // // // //       { id: 4, name: 'BBQ Ribs', price: 22 },
// // // // // //       { id: 5, name: 'Chicken Madeira', price: 18 },
// // // // // //       { id: 6, name: 'Steak Diane', price: 24 },
// // // // // //     ],
// // // // // //     'olive-garden': [
// // // // // //       { id: 7, name: 'Lasagna', price: 13 },
// // // // // //       { id: 8, name: 'Bruschetta', price: 8 },
// // // // // //       { id: 9, name: 'Fettuccine Alfredo', price: 14 },
// // // // // //       { id: 10, name: 'Chicken Parmigiana', price: 15 },
// // // // // //       { id: 11, name: 'Tiramisu', price: 7 },
// // // // // //       { id: 12, name: 'Minestrone Soup', price: 5 },
// // // // // //     ],
// // // // // //     'chipotle': [
// // // // // //       { id: 13, name: 'Burrito', price: 10 },
// // // // // //       { id: 14, name: 'Tacos', price: 9 },
// // // // // //       { id: 15, name: 'Quesadilla', price: 11 },
// // // // // //       { id: 16, name: 'Bowl with Chicken', price: 12 },
// // // // // //       { id: 17, name: 'Chips & Guacamole', price: 4 },
// // // // // //       { id: 18, name: 'Sofritas Bowl', price: 11 },
// // // // // //     ],
// // // // // //     'pf-changs': [
// // // // // //       { id: 19, name: 'Mongolian Beef', price: 18 },
// // // // // //       { id: 20, name: 'Kung Pao Chicken', price: 16 },
// // // // // //       { id: 21, name: 'Dynamite Shrimp', price: 12 },
// // // // // //       { id: 22, name: 'Spring Rolls', price: 7 },
// // // // // //       { id: 23, name: 'Mapo Tofu', price: 14 },
// // // // // //       { id: 24, name: 'Fried Rice', price: 8 },
// // // // // //     ],
// // // // // //     'in-n-out': [
// // // // // //       { id: 25, name: 'Double-Double Burger', price: 5 },
// // // // // //       { id: 26, name: 'Cheeseburger', price: 3 },
// // // // // //       { id: 27, name: 'French Fries', price: 2 },
// // // // // //       { id: 28, name: 'Milkshake', price: 4 },
// // // // // //       { id: 29, name: 'Veggie Burger', price: 4.5 },
// // // // // //       { id: 30, name: 'Grilled Cheese', price: 3.5 },
// // // // // //     ],
// // // // // //     'shake-shack': [
// // // // // //       { id: 31, name: 'ShackBurger', price: 6 },
// // // // // //       { id: 32, name: 'Cheese Fries', price: 3 },
// // // // // //       { id: 33, name: 'Crinkle-Cut Fries', price: 2.5 },
// // // // // //       { id: 34, name: 'Shack Stack', price: 9 },
// // // // // //       { id: 35, name: 'Chicken Shack', price: 7 },
// // // // // //       { id: 36, name: 'Shakes', price: 5 },
// // // // // //     ],
// // // // // //   };
// // // // // //   // Get the correct menu for the selected restaurant
// // // // // //   const menuItems = menus[restaurantId] || [];

// // // // // //   // Helper to get the item quantity in the cart
// // // // // //   const getItemQuantity = (itemId) => {
// // // // // //     const item = cartItems.find(cartItem => cartItem.id === itemId);
// // // // // //     return item ? item.quantity : 0;
// // // // // //   };

// // // // // //   // return (
// // // // // //   //   <div className="container mx-auto p-4">
// // // // // //   //     <h2 className="text-2xl font-semibold mb-4">Menu for Restaurant {restaurantId}</h2>
// // // // // //   //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //   //       {menuItems.map((item) => {
// // // // // //   //         const quantity = getItemQuantity(item.id);

// // // // // //   //         return (
// // // // // //   //           <div key={item.id} className="border p-4 rounded-lg shadow-lg flex flex-col items-center space-y-4">
// // // // // //   //             <span className="text-lg font-medium">{item.name} - ${item.price}</span>

// // // // // //   //             {quantity === 0 ? (
// // // // // //   //               <button
// // // // // //   //                 onClick={() => addToCart(item)}
// // // // // //   //                 className="bg-blue-500 text-white px-4 py-2 rounded"
// // // // // //   //               >
// // // // // //   //                 Add
// // // // // //   //               </button>
// // // // // //   //             ) : (
// // // // // //   //               <div className="flex items-center space-x-3">
// // // // // //   //                 <button
// // // // // //   //                   onClick={() => removeFromCart(item)}
// // // // // //   //                   className="bg-red-500 text-white px-3 py-1 rounded"
// // // // // //   //                 >
// // // // // //   //                   Remove
// // // // // //   //                 </button>

// // // // // //   //                 <div className="flex items-center space-x-3">
// // // // // //   //                   <button
// // // // // //   //                     onClick={() => decreaseQuantity(item.id)}
// // // // // //   //                     className="bg-gray-500 text-white px-2 py-1 rounded"
// // // // // //   //                     disabled={quantity <= 1} // Disable decrease if quantity is 1
// // // // // //   //                   >
// // // // // //   //                     -
// // // // // //   //                   </button>

// // // // // //   //                   <span>{quantity}</span>

// // // // // //   //                   <button
// // // // // //   //                     onClick={() => increaseQuantity(item.id)}
// // // // // //   //                     className="bg-green-500 text-white px-2 py-1 rounded"
// // // // // //   //                   >
// // // // // //   //                     +
// // // // // //   //                   </button>
// // // // // //   //                 </div>
// // // // // //   //               </div>
// // // // // //   //             )}
// // // // // //   //           </div>
// // // // // //   //         );
// // // // // //   //       })}
// // // // // //   //     </div>
// // // // // //   //   </div>
// // // // // //   // );


// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <h2 className="text-2xl font-semibold mb-4">Menu for Restaurant {restaurantId}</h2>
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //         {menuItems.map((item) => (
// // // // // //           <div key={item.id} className="border p-4 rounded-lg shadow-lg">
// // // // // //             <h3 className="text-xl font-semibold">{item.name} - ${item.price}</h3>
// // // // // //             <div className="flex space-x-2">
// // // // // //               {getItemQuantity(item.id) === 0 ? (
// // // // // //                 <button onClick={() => addToCart(item)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
// // // // // //                   Add
// // // // // //                 </button>
// // // // // //               ) : (
// // // // // //                 <>
// // // // // //                   <button onClick={() => removeFromCart(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
// // // // // //                     Remove
// // // // // //                   </button>
// // // // // //                   <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" disabled={getItemQuantity(item.id) <= 1}>
// // // // // //                     -
// // // // // //                   </button>
// // // // // //                   <span>{getItemQuantity(item.id)}</span>
// // // // // //                   <button onClick={() => increaseQuantity(item.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
// // // // // //                     +
// // // // // //                   </button>
// // // // // //                 </>
// // // // // //               )}
// // // // // //               {/* Placeholder buttons - replace with actual functionality */}
// // // // // //               <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Edit</button>
// // // // // //               <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Delete</button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Menu;




// // // // // // import React from 'react';
// // // // // // import { useParams } from 'react-router-dom';
// // // // // // import { useCart } from '../CartContext';

// // // // // // const Menu = () => {
// // // // // //   const { restaurantId } = useParams();
// // // // // //   const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems } = useCart();

// // // // // //   // Define restaurant-specific menus
// // // // // //   const menus = {
// // // // // //     'cheesecake-factory': [
// // // // // //       { id: 1, name: 'Cheesecake', price: 7 },
// // // // // //       { id: 2, name: 'Pasta Alfredo', price: 15 },
// // // // // //       { id: 3, name: 'Caesar Salad', price: 10 },
// // // // // //       { id: 4, name: 'BBQ Ribs', price: 22 },
// // // // // //       { id: 5, name: 'Chicken Madeira', price: 18 },
// // // // // //       { id: 6, name: 'Steak Diane', price: 24 },
// // // // // //     ],
// // // // // //     'olive-garden': [
// // // // // //       { id: 7, name: 'Lasagna', price: 13 },
// // // // // //       { id: 8, name: 'Bruschetta', price: 8 },
// // // // // //       { id: 9, name: 'Fettuccine Alfredo', price: 14 },
// // // // // //       { id: 10, name: 'Chicken Parmigiana', price: 15 },
// // // // // //       { id: 11, name: 'Tiramisu', price: 7 },
// // // // // //       { id: 12, name: 'Minestrone Soup', price: 5 },
// // // // // //     ],
// // // // // //     'chipotle': [
// // // // // //       { id: 13, name: 'Burrito', price: 10 },
// // // // // //       { id: 14, name: 'Tacos', price: 9 },
// // // // // //       { id: 15, name: 'Quesadilla', price: 11 },
// // // // // //       { id: 16, name: 'Bowl with Chicken', price: 12 },
// // // // // //       { id: 17, name: 'Chips & Guacamole', price: 4 },
// // // // // //       { id: 18, name: 'Sofritas Bowl', price: 11 },
// // // // // //     ],
// // // // // //     'pf-changs': [
// // // // // //       { id: 19, name: 'Mongolian Beef', price: 18 },
// // // // // //       { id: 20, name: 'Kung Pao Chicken', price: 16 },
// // // // // //       { id: 21, name: 'Dynamite Shrimp', price: 12 },
// // // // // //       { id: 22, name: 'Spring Rolls', price: 7 },
// // // // // //       { id: 23, name: 'Mapo Tofu', price: 14 },
// // // // // //       { id: 24, name: 'Fried Rice', price: 8 },
// // // // // //     ],
// // // // // //     'in-n-out': [
// // // // // //       { id: 25, name: 'Double-Double Burger', price: 5 },
// // // // // //       { id: 26, name: 'Cheeseburger', price: 3 },
// // // // // //       { id: 27, name: 'French Fries', price: 2 },
// // // // // //       { id: 28, name: 'Milkshake', price: 4 },
// // // // // //       { id: 29, name: 'Veggie Burger', price: 4.5 },
// // // // // //       { id: 30, name: 'Grilled Cheese', price: 3.5 },
// // // // // //     ],
// // // // // //     'shake-shack': [
// // // // // //       { id: 31, name: 'ShackBurger', price: 6 },
// // // // // //       { id: 32, name: 'Cheese Fries', price: 3 },
// // // // // //       { id: 33, name: 'Crinkle-Cut Fries', price: 2.5 },
// // // // // //       { id: 34, name: 'Shack Stack', price: 9 },
// // // // // //       { id: 35, name: 'Chicken Shack', price: 7 },
// // // // // //       { id: 36, name: 'Shakes', price: 5 },
// // // // // //     ],
// // // // // //   };
// // // // // //   // Get the correct menu for the selected restaurant
// // // // // //   const menuItems = menus[restaurantId] || [];

// // // // // //   // Helper to get the item quantity in the cart
// // // // // //   const getItemQuantity = (itemId) => {
// // // // // //     const item = cartItems.find(cartItem => cartItem.id === itemId);
// // // // // //     return item ? item.quantity : 0;
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <h2 className="text-2xl font-semibold mb-4">Menu for Restaurant {restaurantId}</h2>
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //         {menuItems.map((item) => {
// // // // // //           const quantity = getItemQuantity(item.id);

// // // // // //           return (
// // // // // //             <div key={item.id} className="border p-4 rounded-lg shadow-lg flex flex-col items-center space-y-4">
// // // // // //               <span className="text-lg font-medium">{item.name} - ${item.price}</span>

// // // // // //               {quantity === 0 ? (
// // // // // //                 <button
// // // // // //                   onClick={() => addToCart(item)}
// // // // // //                   className="bg-blue-500 text-white px-4 py-2 rounded"
// // // // // //                 >
// // // // // //                   Add
// // // // // //                 </button>
// // // // // //               ) : (
// // // // // //                 <div className="flex items-center space-x-3">
// // // // // //                   <button
// // // // // //                     onClick={() => removeFromCart(item)}
// // // // // //                     className="bg-red-500 text-white px-3 py-1 rounded"
// // // // // //                   >
// // // // // //                     Remove
// // // // // //                   </button>

// // // // // //                   <div className="flex items-center space-x-3">
// // // // // //                     <button
// // // // // //                       onClick={() => decreaseQuantity(item.id)}
// // // // // //                       className="bg-gray-500 text-white px-2 py-1 rounded"
// // // // // //                       disabled={quantity <= 1} // Disable decrease if quantity is 1
// // // // // //                     >
// // // // // //                       -
// // // // // //                     </button>

// // // // // //                     <span>{quantity}</span>

// // // // // //                     <button
// // // // // //                       onClick={() => increaseQuantity(item.id)}
// // // // // //                       className="bg-green-500 text-white px-2 py-1 rounded"
// // // // // //                     >
// // // // // //                       +
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           );
// // // // // //         })}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Menu;




// // // // // import React from 'react';
// // // // // import { useParams } from 'react-router-dom';
// // // // // import { useCart } from '../CartContext';
// // // // // import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
// // // // // import Grid from '@mui/material/Grid';

// // // // // const Menu = () => {
// // // // //   const { restaurantId } = useParams();
// // // // //   const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems } = useCart();

// // // // //   // Define restaurant-specific menus
// // // // //   const menus = {
// // // // //     'cheesecake-factory': [
// // // // //       { id: 1, name: 'Cheesecake', price: 7 },
// // // // //       { id: 2, name: 'Pasta Alfredo', price: 15 },
// // // // //       { id: 3, name: 'Caesar Salad', price: 10 },
// // // // //       { id: 4, name: 'BBQ Ribs', price: 22 },
// // // // //       { id: 5, name: 'Chicken Madeira', price: 18 },
// // // // //       { id: 6, name: 'Steak Diane', price: 24 },
// // // // //     ],
// // // // //     'olive-garden': [
// // // // //       { id: 7, name: 'Lasagna', price: 13 },
// // // // //       { id: 8, name: 'Bruschetta', price: 8 },
// // // // //       { id: 9, name: 'Fettuccine Alfredo', price: 14 },
// // // // //       { id: 10, name: 'Chicken Parmigiana', price: 15 },
// // // // //       { id: 11, name: 'Tiramisu', price: 7 },
// // // // //       { id: 12, name: 'Minestrone Soup', price: 5 },
// // // // //     ],
// // // // //     // Add more restaurant menus as needed...
// // // // //   };

// // // // //   // Get the correct menu for the selected restaurant
// // // // //   const menuItems = menus[restaurantId] || [];

// // // // //   // Helper to get the item quantity in the cart
// // // // //   const getItemQuantity = (itemId) => {
// // // // //     const item = cartItems.find((cartItem) => cartItem.id === itemId);
// // // // //     return item ? item.quantity : 0;
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ padding: '16px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
// // // // //       <Typography variant="h4" align="center" gutterBottom style={{ color: '#121212' }}>
// // // // //         Menu for {restaurantId.replace(/-/g, ' ')}
// // // // //       </Typography>
// // // // //       <Grid container spacing={4}>
// // // // //         {menuItems.map((item) => {
// // // // //           const quantity = getItemQuantity(item.id);

// // // // //           return (
// // // // //             <Grid item xs={12} sm={6} md={4} key={item.id}>
// // // // //               <Card sx={{ maxWidth: 345, backgroundColor: '#ffffff', color: '#121212' }}>
// // // // //                 <CardContent>
// // // // //                   <Typography variant="h6">{item.name}</Typography>
// // // // //                   <Typography variant="body2" color="text.secondary">
// // // // //                     Price: ₹{item.price.toFixed(2)}
// // // // //                   </Typography>
// // // // //                 </CardContent>
// // // // //                 <CardActions>
// // // // //                   {quantity === 0 ? (
// // // // //                     <Button
// // // // //                       variant="contained"
// // // // //                       color="primary"
// // // // //                       onClick={() => addToCart(item)}
// // // // //                       fullWidth
// // // // //                     >
// // // // //                       Add to Cart
// // // // //                     </Button>
// // // // //                   ) : (
// // // // //                     <Grid container spacing={1} alignItems="center">
// // // // //                       <Grid item xs={4}>
// // // // //                         <Button
// // // // //                           variant="outlined"
// // // // //                           color="error"
// // // // //                           onClick={() => removeFromCart(item)}
// // // // //                           fullWidth
// // // // //                         >
// // // // //                           Remove
// // // // //                         </Button>
// // // // //                       </Grid>
// // // // //                       <Grid item xs={4}>
// // // // //                         <Typography align="center">{quantity}</Typography>
// // // // //                       </Grid>
// // // // //                       <Grid item xs={4}>
// // // // //                         <Button
// // // // //                           variant="outlined"
// // // // //                           color="success"
// // // // //                           onClick={() => increaseQuantity(item.id)}
// // // // //                           fullWidth
// // // // //                         >
// // // // //                           +
// // // // //                         </Button>
// // // // //                       </Grid>
// // // // //                     </Grid>
// // // // //                   )}
// // // // //                 </CardActions>
// // // // //               </Card>
// // // // //             </Grid>
// // // // //           );
// // // // //         })}
// // // // //       </Grid>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Menu;


// // // // // import React, { useState } from 'react';
// // // // // import { useParams } from 'react-router-dom';
// // // // // import { useCart } from '../CartContext';
// // // // // import { Card, CardContent, CardActions, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// // // // // import Grid from '@mui/material/Grid';

// // // // // const Menu = () => {
// // // // //   const { restaurantId } = useParams();
// // // // //   const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems } = useCart();

// // // // //   // Define restaurant-specific menus
// // // // //   const [menus, setMenus] = useState({
// // // // //     'cheesecake-factory': [
// // // // //       { id: 1, name: 'Cheesecake', price: 7 },
// // // // //       { id: 2, name: 'Pasta Alfredo', price: 15 },
// // // // //       { id: 3, name: 'Caesar Salad', price: 10 },
// // // // //       { id: 4, name: 'BBQ Ribs', price: 22 },
// // // // //       { id: 5, name: 'Chicken Madeira', price: 18 },
// // // // //       { id: 6, name: 'Steak Diane', price: 24 },
// // // // //     ],
// // // // //     'olive-garden': [
// // // // //       { id: 7, name: 'Lasagna', price: 13 },
// // // // //       { id: 8, name: 'Bruschetta', price: 8 },
// // // // //       { id: 9, name: 'Fettuccine Alfredo', price: 14 },
// // // // //       { id: 10, name: 'Chicken Parmigiana', price: 15 },
// // // // //       { id: 11, name: 'Tiramisu', price: 7 },
// // // // //       { id: 12, name: 'Minestrone Soup', price: 5 },
// // // // //     ],
// // // // //     // Add more restaurant menus as needed...
// // // // //   });

// // // // //   // Get the correct menu for the selected restaurant
// // // // //   const menuItems = menus[restaurantId] || [];

// // // // //   // Helper to get the item quantity in the cart
// // // // //   const getItemQuantity = (itemId) => {
// // // // //     const item = cartItems.find((cartItem) => cartItem.id === itemId);
// // // // //     return item ? item.quantity : 0;
// // // // //   };

// // // // //   // State for managing the dialog box for adding and editing items
// // // // //   const [openDialog, setOpenDialog] = useState(false);
// // // // //   const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
// // // // //   const [currentItem, setCurrentItem] = useState(null); // To store item details for editing
// // // // //   const [newItem, setNewItem] = useState({ name: '', price: '' }); // New item data

// // // // //   // Handle opening the dialog
// // // // //   const handleDialogOpen = (mode, item) => {
// // // // //     setDialogMode(mode);
// // // // //     if (mode === 'edit' && item) {
// // // // //       setCurrentItem(item);
// // // // //       setNewItem({ name: item.name, price: item.price.toString() });
// // // // //     } else {
// // // // //       setCurrentItem(null);
// // // // //       setNewItem({ name: '', price: '' });
// // // // //     }
// // // // //     setOpenDialog(true);
// // // // //   };

// // // // //   // Handle closing the dialog
// // // // //   const handleDialogClose = () => {
// // // // //     setOpenDialog(false);
// // // // //   };

// // // // //   // Handle adding, editing, or deleting menu items
// // // // //   const handleSaveItem = () => {
// // // // //     if (dialogMode === 'add') {
// // // // //       const newItemId = menuItems.length ? menuItems[menuItems.length - 1].id + 1 : 1;
// // // // //       setMenus({
// // // // //         ...menus,
// // // // //         [restaurantId]: [...menuItems, { id: newItemId, name: newItem.name, price: parseFloat(newItem.price) }],
// // // // //       });
// // // // //     } else if (dialogMode === 'edit' && currentItem) {
// // // // //       setMenus({
// // // // //         ...menus,
// // // // //         [restaurantId]: menuItems.map((item) =>
// // // // //           item.id === currentItem.id ? { ...item, name: newItem.name, price: parseFloat(newItem.price) } : item
// // // // //         ),
// // // // //       });
// // // // //     }
// // // // //     handleDialogClose();
// // // // //   };

// // // // //   // Handle deleting a menu item
// // // // //   const handleDeleteItem = (itemId) => {
// // // // //     setMenus({
// // // // //       ...menus,
// // // // //       [restaurantId]: menuItems.filter((item) => item.id !== itemId),
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ padding: '16px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
// // // // //       <Typography variant="h4" align="center" gutterBottom style={{ color: '#121212' }}>
// // // // //         Menu for {restaurantId.replace(/-/g, ' ')}
// // // // //       </Typography>

// // // // //       <Button variant="contained" color="primary" onClick={() => handleDialogOpen('add')} style={{ marginBottom: '20px' }}>
// // // // //         Add Menu Item
// // // // //       </Button>

// // // // //       <Grid container spacing={4}>
// // // // //         {menuItems.map((item) => {
// // // // //           const quantity = getItemQuantity(item.id);

// // // // //           return (
// // // // //             <Grid item xs={12} sm={6} md={4} key={item.id}>
// // // // //               <Card sx={{ maxWidth: 500, backgroundColor: '#ffffff', color: '#121212' }}>
// // // // //                 <CardContent>
// // // // //                   <Typography variant="h6">{item.name}</Typography>
// // // // //                   <Typography variant="body2" color="text.secondary">
// // // // //                     Price: ₹{item.price.toFixed(2)}
// // // // //                   </Typography>
// // // // //                 </CardContent>
// // // // //                 <CardActions>
// // // // //                   {quantity === 0 ? (
// // // // //                     <Button
// // // // //                       variant="contained"
// // // // //                       color="primary"
// // // // //                       onClick={() => addToCart(item)}
// // // // //                       fullWidth
// // // // //                     >
// // // // //                       Add to Cart
// // // // //                     </Button>
// // // // //                   ) : (
// // // // //                     <Grid container spacing={1} alignItems="center">
// // // // //                       <Grid item xs={4}>
// // // // //                         <Button
// // // // //                           variant="outlined"
// // // // //                           color="error"
// // // // //                           onClick={() => removeFromCart(item)}
// // // // //                           fullWidth
// // // // //                         >
// // // // //                           Remove
// // // // //                         </Button>
// // // // //                       </Grid>
// // // // //                       <Grid item xs={4}>
// // // // //                         <Typography align="center">{quantity}</Typography>
// // // // //                       </Grid>
// // // // //                       <Grid item xs={4}>
// // // // //                         <Button
// // // // //                           variant="outlined"
// // // // //                           color="success"
// // // // //                           onClick={() => increaseQuantity(item.id)}
// // // // //                           fullWidth
// // // // //                         >
// // // // //                           +
// // // // //                         </Button>
// // // // //                       </Grid>
// // // // //                     </Grid>
// // // // //                   )}
// // // // //                   <Button
// // // // //                     variant="outlined"
// // // // //                     color="error"
// // // // //                     onClick={() => handleDeleteItem(item.id)}
// // // // //                     fullWidth
// // // // //                     sx={{ width: '50%' }}
// // // // //                   >
// // // // //                     Delete 
// // // // //                   </Button>
// // // // //                   <Button
// // // // //                     variant="outlined"
// // // // //                     color="primary"
// // // // //                     onClick={() => handleDialogOpen('edit', item)}
// // // // //                     fullWidth
// // // // //                     sx={{ width: '50%' }}
// // // // //                   >
// // // // //                     Edit 
// // // // //                   </Button>
// // // // //                 </CardActions>
// // // // //               </Card>
// // // // //             </Grid>
// // // // //           );
// // // // //         })}
// // // // //       </Grid>

// // // // //       {/* Dialog for Add/Edit Menu Item */}
// // // // //       <Dialog open={openDialog} onClose={handleDialogClose}>
// // // // //         <DialogTitle>{dialogMode === 'add' ? 'Add Menu Item' : 'Edit Menu Item'}</DialogTitle>
// // // // //         <DialogContent>
// // // // //           <TextField
// // // // //             label="Item Name"
// // // // //             fullWidth
// // // // //             value={newItem.name}
// // // // //             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
// // // // //             style={{ marginBottom: '20px' }}
// // // // //           />
// // // // //           <TextField
// // // // //             label="Price"
// // // // //             type="number"
// // // // //             fullWidth
// // // // //             value={newItem.price}
// // // // //             onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
// // // // //           />
// // // // //         </DialogContent>
// // // // //         <DialogActions>
// // // // //           <Button onClick={handleDialogClose} color="primary">
// // // // //             Cancel
// // // // //           </Button>
// // // // //           <Button onClick={handleSaveItem} color="primary">
// // // // //             {dialogMode === 'add' ? 'Add Item' : 'Save Changes'}
// // // // //           </Button>
// // // // //         </DialogActions>
// // // // //       </Dialog>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Menu;



// // // // import React, { useState, useEffect } from 'react';
// // // // import { useParams } from 'react-router-dom';
// // // // import { useCart } from '../CartContext';
// // // // import { Card, CardContent, CardActions, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// // // // import Grid from '@mui/material/Grid';

// // // // const Menu = () => {
// // // //   const { restaurantId } = useParams();
// // // //   const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems } = useCart();

// // // //   // Initialize menus state from localStorage or use default data
// // // //   const [menus, setMenus] = useState(() => {
// // // //     const savedMenus = localStorage.getItem('menus');
// // // //     if (savedMenus) {
// // // //       return JSON.parse(savedMenus);
// // // //     } else {
// // // //       return {
// // // //         'cheesecake-factory': [
// // // //           { id: 1, name: 'Cheesecake', price: 7 },
// // // //           { id: 2, name: 'Pasta Alfredo', price: 15 },
// // // //           { id: 3, name: 'Caesar Salad', price: 10 },
// // // //           { id: 4, name: 'BBQ Ribs', price: 22 },
// // // //           { id: 5, name: 'Chicken Madeira', price: 18 },
// // // //           { id: 6, name: 'Steak Diane', price: 24 },
// // // //         ],
// // // //         'olive-garden': [
// // // //           { id: 7, name: 'Lasagna', price: 13 },
// // // //           { id: 8, name: 'Bruschetta', price: 8 },
// // // //           { id: 9, name: 'Fettuccine Alfredo', price: 14 },
// // // //           { id: 10, name: 'Chicken Parmigiana', price: 15 },
// // // //           { id: 11, name: 'Tiramisu', price: 7 },
// // // //           { id: 12, name: 'Minestrone Soup', price: 5 },
// // // //         ],
// // // //         'chipotle': [
// // // //           { id: 13, name: 'Burrito', price: 10 },
// // // //           { id: 14, name: 'Tacos', price: 9 },
// // // //           { id: 15, name: 'Quesadilla', price: 11 },
// // // //           { id: 16, name: 'Bowl with Chicken', price: 12 },
// // // //           { id: 17, name: 'Chips & Guacamole', price: 4 },
// // // //           { id: 18, name: 'Sofritas Bowl', price: 11 },
// // // //         ],
// // // //         'pf-changs': [
// // // //           { id: 19, name: 'Mongolian Beef', price: 18 },
// // // //           { id: 20, name: 'Kung Pao Chicken', price: 16 },
// // // //           { id: 21, name: 'Dynamite Shrimp', price: 12 },
// // // //           { id: 22, name: 'Spring Rolls', price: 7 },
// // // //           { id: 23, name: 'Mapo Tofu', price: 14 },
// // // //           { id: 24, name: 'Fried Rice', price: 8 },
// // // //         ],
// // // //         'in-n-out': [
// // // //           { id: 25, name: 'Double-Double Burger', price: 5 },
// // // //           { id: 26, name: 'Cheeseburger', price: 3 },
// // // //           { id: 27, name: 'French Fries', price: 2 },
// // // //           { id: 28, name: 'Milkshake', price: 4 },
// // // //           { id: 29, name: 'Veggie Burger', price: 4.5 },
// // // //           { id: 30, name: 'Grilled Cheese', price: 3.5 },
// // // //         ],
// // // //         'shake-shack': [
// // // //           { id: 31, name: 'ShackBurger', price: 6 },
// // // //           { id: 32, name: 'Cheese Fries', price: 3 },
// // // //           { id: 33, name: 'Crinkle-Cut Fries', price: 2.5 },
// // // //           { id: 34, name: 'Shack Stack', price: 9 },
// // // //           { id: 35, name: 'Chicken Shack', price: 7 },
// // // //           { id: 36, name: 'Shakes', price: 5 },
// // // //         ],
// // // //       };
// // // //     }
// // // //   });

// // // //   // Update localStorage whenever menus change
// // // //   useEffect(() => {
// // // //     localStorage.setItem('menus', JSON.stringify(menus));
// // // //   }, [menus]);

// // // //   // Get the correct menu for the selected restaurant
// // // //   const menuItems = menus[restaurantId] || [];

// // // //   // Helper to get the item quantity in the cart
// // // //   const getItemQuantity = (itemId) => {
// // // //     const item = cartItems.find((cartItem) => cartItem.id === itemId);
// // // //     return item ? item.quantity : 0;
// // // //   };

// // // //   // State for managing the dialog box for adding and editing items
// // // //   const [openDialog, setOpenDialog] = useState(false);
// // // //   const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
// // // //   const [currentItem, setCurrentItem] = useState(null); // To store item details for editing
// // // //   const [newItem, setNewItem] = useState({ name: '', price: '' }); // New item data

// // // //   // Handle opening the dialog
// // // //   const handleDialogOpen = (mode, item) => {
// // // //     setDialogMode(mode);
// // // //     if (mode === 'edit' && item) {
// // // //       setCurrentItem(item);
// // // //       setNewItem({ name: item.name, price: item.price.toString() });
// // // //     } else {
// // // //       setCurrentItem(null);
// // // //       setNewItem({ name: '', price: '' });
// // // //     }
// // // //     setOpenDialog(true);
// // // //   };

// // // //   // Handle closing the dialog
// // // //   const handleDialogClose = () => {
// // // //     setOpenDialog(false);
// // // //   };

// // // //   // Handle adding, editing, or deleting menu items
// // // //   const handleSaveItem = () => {
// // // //     if (dialogMode === 'add') {
// // // //       const newItemId = menuItems.length ? menuItems[menuItems.length - 1].id + 1 : 1;
// // // //       setMenus({
// // // //         ...menus,
// // // //         [restaurantId]: [...menuItems, { id: newItemId, name: newItem.name, price: parseFloat(newItem.price) }],
// // // //       });
// // // //     } else if (dialogMode === 'edit' && currentItem) {
// // // //       setMenus({
// // // //         ...menus,
// // // //         [restaurantId]: menuItems.map((item) =>
// // // //           item.id === currentItem.id ? { ...item, name: newItem.name, price: parseFloat(newItem.price) } : item
// // // //         ),
// // // //       });
// // // //     }
// // // //     handleDialogClose();
// // // //   };

// // // //   // Handle deleting a menu item
// // // //   const handleDeleteItem = (itemId) => {
// // // //     setMenus({
// // // //       ...menus,
// // // //       [restaurantId]: menuItems.filter((item) => item.id !== itemId),
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div style={{ padding: '16px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
// // // //       <Typography variant="h4" align="center" gutterBottom style={{ color: '#121212' }}>
// // // //         Menu for {restaurantId.replace(/-/g, ' ')}
// // // //       </Typography>

// // // //       <Button variant="contained" color="primary" onClick={() => handleDialogOpen('add')} style={{ marginBottom: '20px' }}>
// // // //         Add Menu Item
// // // //       </Button>

// // // //       <Grid container spacing={4}>
// // // //         {menuItems.map((item) => {
// // // //           const quantity = getItemQuantity(item.id);

// // // //           return (
// // // //             <Grid item xs={12} sm={6} md={4} key={item.id}>
// // // //               <Card sx={{ maxWidth: 500, backgroundColor: '#ffffff', color: '#121212' }}>
// // // //                 <CardContent>
// // // //                   <Typography variant="h6">{item.name}</Typography>
// // // //                   <Typography variant="body2" color="text.secondary">
// // // //                     Price: ₹{item.price.toFixed(2)}
// // // //                   </Typography>
// // // //                 </CardContent>
// // // //                 <CardActions>
// // // //                   {quantity === 0 ? (
// // // //                     <Button
// // // //                       variant="contained"
// // // //                       color="primary"
// // // //                       onClick={() => addToCart(item)}
// // // //                       fullWidth
// // // //                     >
// // // //                       Add to Cart
// // // //                     </Button>
// // // //                   ) : (
// // // //                     <Grid container spacing={1} alignItems="center">
// // // //                       <Grid item xs={4}>
// // // //                         <Button
// // // //                           variant="outlined"
// // // //                           color="error"
// // // //                           onClick={() => removeFromCart(item)}
// // // //                           fullWidth
// // // //                         >
// // // //                           Remove
// // // //                         </Button>
// // // //                       </Grid>
// // // //                       <Grid item xs={4}>
// // // //                         <Typography align="center">{quantity}</Typography>
// // // //                       </Grid>
// // // //                       <Grid item xs={4}>
// // // //                         <Button
// // // //                           variant="outlined"
// // // //                           color="success"
// // // //                           onClick={() => increaseQuantity(item.id)}
// // // //                           fullWidth
// // // //                         >
// // // //                           +
// // // //                         </Button>
// // // //                       </Grid>
// // // //                     </Grid>
// // // //                   )}
// // // //                   <Button
// // // //                     variant="outlined"
// // // //                     color="error"
// // // //                     onClick={() => handleDeleteItem(item.id)}
// // // //                     fullWidth
// // // //                     sx={{ width: '50%' }}
// // // //                   >
// // // //                     Delete
// // // //                   </Button>
// // // //                   <Button
// // // //                     variant="outlined"
// // // //                     color="primary"
// // // //                     onClick={() => handleDialogOpen('edit', item)}
// // // //                     fullWidth
// // // //                     sx={{ width: '50%' }}
// // // //                   >
// // // //                     Edit
// // // //                   </Button>
// // // //                 </CardActions>
// // // //               </Card>
// // // //             </Grid>
// // // //           );
// // // //         })}
// // // //       </Grid>

// // // //       {/* Dialog for Add/Edit Menu Item */}
// // // //       <Dialog open={openDialog} onClose={handleDialogClose}>
// // // //         <DialogTitle>{dialogMode === 'add' ? 'Add Menu Item' : 'Edit Menu Item'}</DialogTitle>
// // // //         <DialogContent>
// // // //           <TextField
// // // //             label="Item Name"
// // // //             fullWidth
// // // //             value={newItem.name}
// // // //             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
// // // //             style={{ marginBottom: '20px' }}
// // // //           />
// // // //           <TextField
// // // //             label="Price"
// // // //             type="number"
// // // //             fullWidth
// // // //             value={newItem.price}
// // // //             onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
// // // //           />
// // // //         </DialogContent>
// // // //         <DialogActions>
// // // //           <Button onClick={handleDialogClose} color="primary">
// // // //             Cancel
// // // //           </Button>
// // // //           <Button onClick={handleSaveItem} color="primary">
// // // //             {dialogMode === 'add' ? 'Add Item' : 'Save Changes'}
// // // //           </Button>
// // // //         </DialogActions>
// // // //       </Dialog>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Menu;


// // // import React, { useState, useEffect } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import { useCart } from '../CartContext';
// // // import { Card, CardContent, CardActions, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// // // import Grid from '@mui/material/Grid';

// // // const Menu = () => {
// // //   const { restaurantId } = useParams();
// // //   const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems } = useCart();

// // //   // State for storing the fetched menu items
// // //   const [menuItems, setMenuItems] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   // Fetch menu data dynamically (use your API or data source here)
// // //   useEffect(() => {
// // //     const fetchMenu = async () => {
// // //       try {
// // //         const response = await fetch(`/api/menus/${restaurantId}`);
// // //         if (!response.ok) {
// // //           throw new Error('Failed to fetch menu items');
// // //         }
// // //         const data = await response.json();
// // //         setMenuItems(data);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchMenu();
// // //   }, [restaurantId]);

// // //   // Handle fetching error
// // //   if (loading) {
// // //     return <Typography variant="h6" align="center">Loading...</Typography>;
// // //   }

// // //   if (error) {
// // //     return <Typography variant="h6" color="error" align="center">{`Error: ${error}`}</Typography>;
// // //   }

// // //   // Helper to get the item quantity in the cart
// // //   const getItemQuantity = (itemId) => {
// // //     const item = cartItems.find((cartItem) => cartItem.id === itemId);
// // //     return item ? item.quantity : 0;
// // //   };

// // //   // State for managing the dialog box for adding and editing items
// // //   const [openDialog, setOpenDialog] = useState(false);
// // //   const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
// // //   const [currentItem, setCurrentItem] = useState(null); // To store item details for editing
// // //   const [newItem, setNewItem] = useState({ name: '', price: '' }); // New item data

// // //   // Handle opening the dialog
// // //   const handleDialogOpen = (mode, item) => {
// // //     setDialogMode(mode);
// // //     if (mode === 'edit' && item) {
// // //       setCurrentItem(item);
// // //       setNewItem({ name: item.name, price: item.price.toString() });
// // //     } else {
// // //       setCurrentItem(null);
// // //       setNewItem({ name: '', price: '' });
// // //     }
// // //     setOpenDialog(true);
// // //   };

// // //   // Handle closing the dialog
// // //   const handleDialogClose = () => {
// // //     setOpenDialog(false);
// // //   };

// // //   // Handle adding, editing, or deleting menu items
// // //   const handleSaveItem = () => {
// // //     if (dialogMode === 'add') {
// // //       const newItemId = menuItems.length ? menuItems[menuItems.length - 1].id + 1 : 1;
// // //       setMenuItems([...menuItems, { id: newItemId, name: newItem.name, price: parseFloat(newItem.price) }]);
// // //     } else if (dialogMode === 'edit' && currentItem) {
// // //       setMenuItems(
// // //         menuItems.map((item) =>
// // //           item.id === currentItem.id ? { ...item, name: newItem.name, price: parseFloat(newItem.price) } : item
// // //         )
// // //       );
// // //     }
// // //     handleDialogClose();
// // //   };

// // //   // Handle deleting a menu item
// // //   const handleDeleteItem = (itemId) => {
// // //     setMenuItems(menuItems.filter((item) => item.id !== itemId));
// // //   };

// // //   return (
// // //     <div style={{ padding: '16px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
// // //       <Typography variant="h4" align="center" gutterBottom style={{ color: '#121212' }}>
// // //         Menu for {restaurantId.replace(/-/g, ' ')}
// // //       </Typography>

// // //       <Button variant="contained" color="primary" onClick={() => handleDialogOpen('add')} style={{ marginBottom: '20px' }}>
// // //         Add Menu Item
// // //       </Button>

// // //       <Grid container spacing={4}>
// // //         {menuItems.map((item) => {
// // //           const quantity = getItemQuantity(item.id);

// // //           return (
// // //             <Grid item xs={12} sm={6} md={4} key={item.id}>
// // //               <Card sx={{ maxWidth: 500, backgroundColor: '#ffffff', color: '#121212' }}>
// // //                 <CardContent>
// // //                   <Typography variant="h6">{item.name}</Typography>
// // //                   <Typography variant="body2" color="text.secondary">
// // //                     Price: ₹{item.price.toFixed(2)}
// // //                   </Typography>
// // //                 </CardContent>
// // //                 <CardActions>
// // //                   {quantity === 0 ? (
// // //                     <Button
// // //                       variant="contained"
// // //                       color="primary"
// // //                       onClick={() => addToCart(item)}
// // //                       fullWidth
// // //                     >
// // //                       Add to Cart
// // //                     </Button>
// // //                   ) : (
// // //                     <Grid container spacing={1} alignItems="center">
// // //                       <Grid item xs={4}>
// // //                         <Button
// // //                           variant="outlined"
// // //                           color="error"
// // //                           onClick={() => removeFromCart(item)}
// // //                           fullWidth
// // //                         >
// // //                           Remove
// // //                         </Button>
// // //                       </Grid>
// // //                       <Grid item xs={4}>
// // //                         <Typography align="center">{quantity}</Typography>
// // //                       </Grid>
// // //                       <Grid item xs={4}>
// // //                         <Button
// // //                           variant="outlined"
// // //                           color="success"
// // //                           onClick={() => increaseQuantity(item.id)}
// // //                           fullWidth
// // //                         >
// // //                           +
// // //                         </Button>
// // //                       </Grid>
// // //                     </Grid>
// // //                   )}
// // //                   <Button
// // //                     variant="outlined"
// // //                     color="error"
// // //                     onClick={() => handleDeleteItem(item.id)}
// // //                     fullWidth
// // //                     sx={{ width: '50%' }}
// // //                   >
// // //                     Delete
// // //                   </Button>
// // //                   <Button
// // //                     variant="outlined"
// // //                     color="primary"
// // //                     onClick={() => handleDialogOpen('edit', item)}
// // //                     fullWidth
// // //                     sx={{ width: '50%' }}
// // //                   >
// // //                     Edit
// // //                   </Button>
// // //                 </CardActions>
// // //               </Card>
// // //             </Grid>
// // //           );
// // //         })}
// // //       </Grid>

// // //       {/* Dialog for Add/Edit Menu Item */}
// // //       <Dialog open={openDialog} onClose={handleDialogClose}>
// // //         <DialogTitle>{dialogMode === 'add' ? 'Add Menu Item' : 'Edit Menu Item'}</DialogTitle>
// // //         <DialogContent>
// // //           <TextField
// // //             label="Item Name"
// // //             fullWidth
// // //             value={newItem.name}
// // //             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
// // //             style={{ marginBottom: '20px' }}
// // //           />
// // //           <TextField
// // //             label="Price"
// // //             type="number"
// // //             fullWidth
// // //             value={newItem.price}
// // //             onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
// // //           />
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleDialogClose} color="primary">
// // //             Cancel
// // //           </Button>
// // //           <Button onClick={handleSaveItem} color="primary">
// // //             {dialogMode === 'add' ? 'Add Item' : 'Save Changes'}
// // //           </Button>
// // //         </DialogActions>
// // //       </Dialog>
// // //     </div>
// // //   );
// // // };

// // // export default Menu;


// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { useCart } from '../CartContext';
// // import { Card, CardContent, CardActions, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// // import Grid from '@mui/material/Grid';

// // const Menu = () => {
// //   const { restaurantId } = useParams();
// //   const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems } = useCart();

// //   // State for managing the menu and dialog box
// //   const [menus, setMenus] = useState({});
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
// //   const [currentItem, setCurrentItem] = useState(null); // To store item details for editing
// //   const [newItem, setNewItem] = useState({ name: '', price: '' }); // New item data

// //   // Initialize menus state from localStorage or fetch data
// //   useEffect(() => {
// //     const savedMenus = localStorage.getItem('menus');
// //     if (savedMenus) {
// //       setMenus(JSON.parse(savedMenus));
// //     } else {
// //       // Default menu structure if no saved data exists
// //       setMenus({
// //         'cheesecake-factory': [
// //           { id: 1, name: 'Cheesecake', price: 7 },
// //           { id: 2, name: 'Pasta Alfredo', price: 15 },
// //           { id: 3, name: 'Caesar Salad', price: 10 },
// //           { id: 4, name: 'BBQ Ribs', price: 22 },
// //           { id: 5, name: 'Chicken Madeira', price: 18 },
// //           { id: 6, name: 'Steak Diane', price: 24 },
// //         ],
// //       });
// //     }
// //   }, []);

// //   // Save menus to localStorage when menus state changes
// //   useEffect(() => {
// //     if (Object.keys(menus).length > 0) {
// //       localStorage.setItem('menus', JSON.stringify(menus));
// //     }
// //   }, [menus]);

// //   // Get the correct menu for the selected restaurant
// //   const menuItems = menus[restaurantId] || [];

// //   // Helper to get the item quantity in the cart
// //   const getItemQuantity = (itemId) => {
// //     const item = cartItems.find((cartItem) => cartItem.id === itemId);
// //     return item ? item.quantity : 0;
// //   };

// //   // Handle opening the dialog
// //   const handleDialogOpen = (mode, item) => {
// //     setDialogMode(mode);
// //     if (mode === 'edit' && item) {
// //       setCurrentItem(item);
// //       setNewItem({ name: item.name, price: item.price.toString() });
// //     } else {
// //       setCurrentItem(null);
// //       setNewItem({ name: '', price: '' });
// //     }
// //     setOpenDialog(true);
// //   };

// //   // Handle closing the dialog
// //   const handleDialogClose = () => {
// //     setOpenDialog(false);
// //   };

// //   // Handle adding, editing, or deleting menu items
// //   const handleSaveItem = () => {
// //     if (dialogMode === 'add') {
// //       const newItemId = menuItems.length ? menuItems[menuItems.length - 1].id + 1 : 1;
// //       setMenus({
// //         ...menus,
// //         [restaurantId]: [...menuItems, { id: newItemId, name: newItem.name, price: parseFloat(newItem.price) }],
// //       });
// //     } else if (dialogMode === 'edit' && currentItem) {
// //       setMenus({
// //         ...menus,
// //         [restaurantId]: menuItems.map((item) =>
// //           item.id === currentItem.id ? { ...item, name: newItem.name, price: parseFloat(newItem.price) } : item
// //         ),
// //       });
// //     }
// //     handleDialogClose();
// //   };

// //   // Handle deleting a menu item
// //   const handleDeleteItem = (itemId) => {
// //     setMenus({
// //       ...menus,
// //       [restaurantId]: menuItems.filter((item) => item.id !== itemId),
// //     });
// //   };

// //   return (
// //     <div style={{ padding: '16px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
// //       <Typography variant="h4" align="center" gutterBottom style={{ color: '#121212' }}>
// //         Menu for {restaurantId.replace(/-/g, ' ')}
// //       </Typography>

// //       <Button variant="contained" color="primary" onClick={() => handleDialogOpen('add')} style={{ marginBottom: '20px' }}>
// //         Add Menu Item
// //       </Button>

// //       <Grid container spacing={4}>
// //         {menuItems.map((item) => {
// //           const quantity = getItemQuantity(item.id);

// //           return (
// //             <Grid item xs={12} sm={6} md={4} key={item.id}>
// //               <Card sx={{ maxWidth: 500, backgroundColor: '#ffffff', color: '#121212' }}>
// //                 <CardContent>
// //                   <Typography variant="h6">{item.name}</Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Price: ₹{item.price.toFixed(2)}
// //                   </Typography>
// //                 </CardContent>
// //                 <CardActions>
// //                   {quantity === 0 ? (
// //                     <Button variant="contained" color="primary" onClick={() => addToCart(item)} fullWidth>
// //                       Add to Cart
// //                     </Button>
// //                   ) : (
// //                     <Grid container spacing={1} alignItems="center">
// //                       <Grid item xs={4}>
// //                         <Button variant="outlined" color="error" onClick={() => removeFromCart(item)} fullWidth>
// //                           Remove
// //                         </Button>
// //                       </Grid>
// //                       <Grid item xs={4}>
// //                         <Typography align="center">{quantity}</Typography>
// //                       </Grid>
// //                       <Grid item xs={4}>
// //                         <Button variant="outlined" color="success" onClick={() => increaseQuantity(item.id)} fullWidth>
// //                           +
// //                         </Button>
// //                       </Grid>
// //                     </Grid>
// //                   )}
// //                   <Button
// //                     variant="outlined"
// //                     color="error"
// //                     onClick={() => handleDeleteItem(item.id)}
// //                     fullWidth
// //                     sx={{ width: '50%' }}
// //                   >
// //                     Delete
// //                   </Button>
// //                   <Button
// //                     variant="outlined"
// //                     color="primary"
// //                     onClick={() => handleDialogOpen('edit', item)}
// //                     fullWidth
// //                     sx={{ width: '50%' }}
// //                   >
// //                     Edit
// //                   </Button>
// //                 </CardActions>
// //               </Card>
// //             </Grid>
// //           );
// //         })}
// //       </Grid>

// //       {/* Dialog for Add/Edit Menu Item */}
// //       <Dialog open={openDialog} onClose={handleDialogClose}>
// //         <DialogTitle>{dialogMode === 'add' ? 'Add Menu Item' : 'Edit Menu Item'}</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             label="Item Name"
// //             fullWidth
// //             value={newItem.name}
// //             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
// //             style={{ marginBottom: '20px' }}
// //           />
// //           <TextField
// //             label="Price"
// //             type="number"
// //             fullWidth
// //             value={newItem.price}
// //             onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleDialogClose} color="primary">
// //             Cancel
// //           </Button>
// //           <Button onClick={handleSaveItem} color="primary">
// //             {dialogMode === 'add' ? 'Add Item' : 'Save Changes'}
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // export default Menu;






// // // src/pages/Menu.js
// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { useCart } from '../CartContext';
// // import { Card, CardContent, CardActions, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// // import Grid from '@mui/material/Grid';

// // const Menu = () => {
// //   const { restaurantId } = useParams();
// //   const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems, token, user } = useCart();

// //   // State for managing the menu and dialog box
// //   const [menus, setMenus] = useState([]);
// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
// //   const [currentItem, setCurrentItem] = useState(null); // To store item details for editing
// //   const [newItem, setNewItem] = useState({ name: '', price: '' }); // New item data

// //   // Fetch menu items
// //   useEffect(() => {
// //     const fetchMenu = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:5000/api/menu/${restaurantId}`, {
// //           headers: {
// //             'Authorization': `Bearer ${token}`
// //           }
// //         })
// //         const data = await response.json();
// //         if (response.ok) {
// //           setMenus(data);
// //         } else {
// //           console.error('Failed to fetch menu');
// //           setMenus([]);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching menu:', error);
// //         setMenus([]);
// //       }
// //     };
// //     if (token) {
// //       fetchMenu()
// //     }

// //   }, [restaurantId, token]);

// //   const getItemQuantity = (itemId) => {
// //     const item = cartItems.find((cartItem) => cartItem.id === itemId);
// //     return item ? item.quantity : 0;
// //   };

// //   // Handle opening the dialog
// //   const handleDialogOpen = (mode, item) => {
// //     setDialogMode(mode);
// //     if (mode === 'edit' && item) {
// //       setCurrentItem(item);
// //       setNewItem({ name: item.name, price: item.price.toString() });
// //     } else {
// //       setCurrentItem(null);
// //       setNewItem({ name: '', price: '' });
// //     }
// //     setOpenDialog(true);
// //   };

// //   // Handle closing the dialog
// //   const handleDialogClose = () => {
// //     setOpenDialog(false);
// //   };

// //   // Handle adding, editing, or deleting menu items
// //   const handleSaveItem = async () => {
// //     try {
// //       const method = dialogMode === 'add' ? 'POST' : 'PUT';
// //       const url = dialogMode === 'add' ? `http://localhost:5000/api/menu` : `http://localhost:5000/api/menu/${currentItem._id}`
// //       const response = await fetch(url, {
// //         method: method,
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': `Bearer ${token}`
// //         },
// //         body: JSON.stringify({
// //           name: newItem.name,
// //           price: parseFloat(newItem.price),
// //           restaurantId: restaurantId,
// //           category: 'default'
// //         }),
// //       });
// //       const data = await response.json();
// //       if (response.ok) {
// //         if (dialogMode === 'add') {
// //           setMenus((prevMenus) => [...prevMenus, data]);
// //         } else if (dialogMode === 'edit') {
// //           setMenus((prevMenus) =>
// //             prevMenus.map((item) => item._id === currentItem._id ? { ...item, name: newItem.name, price: parseFloat(newItem.price) } : item)
// //           );
// //         }
// //       }
// //     } catch (error) {
// //       console.error('Failed to update the menu:', error);
// //     }
// //     handleDialogClose();
// //   };

// //   const handleDeleteItem = async (itemId) => {
// //     try {
// //       const response = await fetch(`http://localhost:5000/api/menu/${itemId}`, {
// //         method: 'DELETE',
// //         headers: {
// //           'Authorization': `Bearer ${token}`
// //         }
// //       })
// //       if (response.ok) {
// //         setMenus(menus.filter(item => item._id !== itemId))
// //       }
// //     } catch (error) {
// //       console.error('Error deleting item:', error);
// //     }
// //   };


// //   const handleAddToCart = async (item) => {
// //     try {
// //       await fetch(`http://localhost:5000/api/cart/`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': `Bearer ${token}`
// //         },
// //         body: JSON.stringify({
// //           userId: user?.token,
// //           menuItemId: item._id,
// //           quantity: 1
// //         })
// //       })
// //       addToCart(item)
// //     } catch (error) {
// //       console.error('Error adding to cart:', error)
// //     }
// //   }
// //   const handleRemoveFromCart = async (item) => {
// //     try {
// //       const response = await fetch(`http://localhost:5000/api/cart/${user?.token}/${item._id}`, {
// //         method: 'DELETE',
// //         headers: {
// //           'Authorization': `Bearer ${token}`
// //         }
// //       });
// //       if (response.ok) {
// //         removeFromCart(item)
// //       }
// //     } catch (error) {
// //       console.error('Error removing from cart:', error);
// //     }
// //   }
// //   const handleIncrement = async (item) => {
// //     try {
// //       await fetch(`http://localhost:5000/api/cart/`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': `Bearer ${token}`
// //         },
// //         body: JSON.stringify({
// //           userId: user?.token,
// //           menuItemId: item._id,
// //           quantity: 1
// //         })
// //       })
// //       increaseQuantity(item._id);
// //     } catch (error) {
// //       console.error('Error increasing quantity:', error)
// //     }
// //   }
// //   const handleDecrement = async (item) => {
// //     try {
// //       await fetch(`http://localhost:5000/api/cart/`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': `Bearer ${token}`
// //         },
// //         body: JSON.stringify({
// //           userId: user?.token,
// //           menuItemId: item._id,
// //           quantity: -1
// //         })
// //       })
// //       decreaseQuantity(item._id);
// //     } catch (error) {
// //       console.error('Error decreasing quantity:', error)
// //     }
// //   }


// //   return (
// //     <div style={{ padding: '16px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
// //       <Typography variant="h4" align="center" gutterBottom style={{ color: '#121212' }}>
// //         Menu for {restaurantId.replace(/-/g, ' ')}
// //       </Typography>

// //       <Button variant="contained" color="primary" onClick={() => handleDialogOpen('add')} style={{ marginBottom: '20px' }}>
// //         Add Menu Item
// //       </Button>

// //       <Grid container spacing={4}>
// //         {menus.map((item) => {
// //           const quantity = getItemQuantity(item._id);

// //           return (
// //             <Grid item xs={12} sm={6} md={4} key={item._id}>
// //               <Card sx={{ maxWidth: 500, backgroundColor: '#ffffff', color: '#121212' }}>
// //                 <CardContent>
// //                   <Typography variant="h6">{item.name}</Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Price: ₹{item.price.toFixed(2)}
// //                   </Typography>
// //                 </CardContent>
// //                 <CardActions>
// //                   {quantity === 0 ? (
// //                     <Button variant="contained" color="primary" onClick={() => handleAddToCart(item)} fullWidth>
// //                       Add to Cart
// //                     </Button>
// //                   ) : (
// //                     <Grid container spacing={1} alignItems="center">
// //                       <Grid item xs={4}>
// //                         <Button variant="outlined" color="error" onClick={() => handleRemoveFromCart(item)} fullWidth>
// //                           Remove
// //                         </Button>
// //                       </Grid>
// //                       <Grid item xs={4}>
// //                         <Typography align="center">{quantity}</Typography>
// //                       </Grid>
// //                       <Grid item xs={4}>
// //                         <Button variant="outlined" color="success" onClick={() => increaseQuantity(item.id)} fullWidth>
// //                           +
// //                         </Button>
// //                       </Grid>
// //                     </Grid>
// //                   )}
// //                   <Button
// //                     variant="outlined"
// //                     color="error"
// //                     onClick={() => handleDeleteItem(item.id)}
// //                     fullWidth
// //                     sx={{ width: '50%' }}
// //                   >
// //                     Delete
// //                   </Button>
// //                   <Button
// //                     variant="outlined"
// //                     color="primary"
// //                     onClick={() => handleDialogOpen('edit', item)}
// //                     fullWidth
// //                     sx={{ width: '50%' }}
// //                   >
// //                     Edit
// //                   </Button>
// //                 </CardActions>
// //               </Card>
// //             </Grid>
// //           );
// //         })}
// //       </Grid>

// //       {/* Dialog for Add/Edit Menu Item */}
// //       <Dialog open={openDialog} onClose={handleDialogClose}>
// //         <DialogTitle>{dialogMode === 'add' ? 'Add Menu Item' : 'Edit Menu Item'}</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             label="Item Name"
// //             fullWidth
// //             value={newItem.name}
// //             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
// //             style={{ marginBottom: '20px' }}
// //           />
// //           <TextField
// //             label="Price"
// //             type="number"
// //             fullWidth
// //             value={newItem.price}
// //             onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleDialogClose} color="primary">
// //             Cancel
// //           </Button>
// //           <Button onClick={handleSaveItem} color="primary">
// //             {dialogMode === 'add' ? 'Add Item' : 'Save Changes'}
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // export default Menu;


// // src/pages/Menu.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useCart } from '../CartContext';
// import { Card, CardContent, CardActions, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import Grid from '@mui/material/Grid';

// const Menu = () => {
//   const { restaurantId } = useParams();
//   const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems, token, user } = useCart();

//   // State for managing the menu and dialog box
//   const [menus, setMenus] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
//   const [currentItem, setCurrentItem] = useState(null); // To store item details for editing
//   const [newItem, setNewItem] = useState({ name: '', price: '' }); // New item data

//   // Fetch menu items
//   useEffect(() => {
//     const fetchMenu = async () => {
//       console.log('Token:', token); // Log the token before making the request
//       try {
//         const response = await fetch(`http://localhost:5000/api/menu/${restaurantId}`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         const data = await response.json();
//         if (response.ok) {
//           setMenus(data);
//         } else {
//           console.error('Failed to fetch menu');
//           setMenus([]);
//         }
//       } catch (error) {
//         console.error('Error fetching menu:', error);
//         setMenus([]);
//       }
//     };
//     if (token) {
//       fetchMenu();
//     }
//   }, [restaurantId, token]);

//   const getItemQuantity = (itemId) => {
//     const item = cartItems.find((cartItem) => cartItem.id === itemId);
//     return item ? item.quantity : 0;
//   };

//   // Handle opening the dialog
//   const handleDialogOpen = (mode, item) => {
//     setDialogMode(mode);
//     if (mode === 'edit' && item) {
//       setCurrentItem(item);
//       setNewItem({ name: item.name, price: item.price.toString() });
//     } else {
//       setCurrentItem(null);
//       setNewItem({ name: '', price: '' });
//     }
//     setOpenDialog(true);
//   };

//   // Handle closing the dialog
//   const handleDialogClose = () => {
//     setOpenDialog(false);
//   };

//   // Handle adding, editing, or deleting menu items
//   const handleSaveItem = async () => {
//     try {
//       const method = dialogMode === 'add' ? 'POST' : 'PUT';
//       const url = dialogMode === 'add' ? `http://localhost:5000/api/menu` : `http://localhost:5000/api/menu/${currentItem._id}`;
//       const response = await fetch(url, {
//         method: method,
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           name: newItem.name,
//           price: parseFloat(newItem.price),
//           restaurantId: restaurantId,
//           category: 'default'
//         }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         if (dialogMode === 'add') {
//           setMenus((prevMenus) => [...prevMenus, data]);
//         } else if (dialogMode === 'edit') {
//           setMenus((prevMenus) =>
//             prevMenus.map((item) => item._id === currentItem._id ? { ...item, name: newItem.name, price: parseFloat(newItem.price) } : item)
//           );
//         }
//       }
//     } catch (error) {
//       console.error('Failed to update the menu:', error);
//     }
//     handleDialogClose();
//   };

//   const handleDeleteItem = async (itemId) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/menu/${itemId}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (response.ok) {
//         setMenus(menus.filter(item => item._id !== itemId));
//       }
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   const handleAddToCart = async (item) => {
//     try {
//       await fetch(`http://localhost:5000/api/cart/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           userId: user?.token,
//           menuItemId: item._id,
//           quantity: 1
//         })
//       });
//       addToCart(item);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const handleRemoveFromCart = async (item) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/cart/${user?.token}/${item._id}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (response.ok) {
//         removeFromCart(item);
//       }
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     }
//   };

//   const handleIncrement = async (item) => {
//     try {
//       await fetch(`http://localhost:5000/api/cart/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           userId: user?.token,
//           menuItemId: item._id,
//           quantity: 1
//         })
//       });
//       increaseQuantity(item._id);
//     } catch (error) {
//       console.error('Error increasing quantity:', error);
//     }
//   };

//   const handleDecrement = async (item) => {
//     try {
//       await fetch(`http://localhost:5000/api/cart/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           userId: user?.token,
//           menuItemId: item._id,
//           quantity: -1
//         })
//       });
//       decreaseQuantity(item._id);
//     } catch (error) {
//       console.error('Error decreasing quantity:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '16px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
//       <Typography variant="h4" align="center" gutterBottom style={{ color: '#121212' }}>
//         Menu for {restaurantId.replace(/-/g, ' ')} </Typography>

//       <Button variant="contained" color="primary" onClick={() => handleDialogOpen('add')} style={{ marginBottom: '20px' }}>
//         Add Menu Item
//       </Button>

//       <Grid container spacing={4}>
//         {menus.map((item) => {
//           const quantity = getItemQuantity(item._id);

//           return (
//             <Grid item xs={12} sm={6} md={4} key={item._id}>
//               <Card sx={{ maxWidth: 500, backgroundColor: '#ffffff', color: '#121212' }}>
//                 <CardContent>
//                   <Typography variant="h6">{item.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Price: ₹{item.price.toFixed(2)}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   {quantity === 0 ? (
//                     <Button variant="contained" color="primary" onClick={() => handleAddToCart(item)} fullWidth>
//                       Add to Cart </Button>
//                   ) : (
//                     <Grid container spacing={1} alignItems="center">
//                       <Grid item xs={4}>
//                         <Button variant="outlined" color="error" onClick={() => handleRemoveFromCart(item)} fullWidth>
//                           Remove </Button>
//                       </Grid>
//                       <Grid item xs={4}>
//                         <Typography align="center">{quantity}</Typography>
//                       </Grid>
//                       <Grid item xs={4}>
//                         <Button variant="outlined" color="success" onClick={() => increaseQuantity(item.id)} fullWidth>
//                           + </Button>
//                       </Grid>
//                     </Grid>
//                   )}
//                   <Button variant="outlined" color="error" onClick={() => handleDeleteItem(item.id)} fullWidth sx={{ width: '50%' }} >
//                     Delete </Button>
//                   <Button variant="outlined" color="primary" onClick={() => handleDialogOpen('edit', item)} fullWidth sx={{ width: '50%' }} >
//                     Edit </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>

//       {/* Dialog for Add/Edit Menu Item */}
//       <Dialog open={openDialog} onClose={handleDialogClose}>
//         <DialogTitle>{dialogMode === 'add' ? 'Add Menu Item' : 'Edit Menu Item'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Item Name"
//             fullWidth
//             value={newItem.name}
//             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//             style={{ marginBottom: '20px' }}
//           />
//           <TextField
//             label="Price"
//             type="number"
//             fullWidth
//             value={newItem.price}
//             onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDialogClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSaveItem} color="primary">
//             {dialogMode === 'add' ? 'Add Item' : 'Save Changes'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Menu;


// // src/pages/Menu.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useCart } from '../CartContext';
// import { Card, CardContent, CardActions, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import Grid from '@mui/material/Grid';

// const Menu = () => {
//     const { restaurantId } = useParams();
//     const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems, token, user } = useCart();

//     // State for managing the menu and dialog box
//     const [menus, setMenus] = useState([]);
//     const [openDialog, setOpenDialog] = useState(false);
//     const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
//     const [currentItem, setCurrentItem] = useState(null); // To store item details for editing
//     const [newItem, setNewItem] = useState({ name: '', price: '' }); // New item data

//     // Fetch menu items
//     useEffect(() => {
//         const fetchMenu = async () => {
//           if (!token) {
//             return
//           }
//             console.log('Token:', token); // Log the token before making the request
//             try {
//                 const response = await fetch(`http://localhost:5000/api/menu/${restaurantId}`, {
//                   headers: {
//                     'Authorization': `Bearer ${token}`
//                   }
//                 });
//                 const data = await response.json();
//                 if (response.ok) {
//                     setMenus(data);
//                 } else {
//                     console.error('Failed to fetch menu');
//                     setMenus([]);
//                 }
//             } catch (error) {
//                 console.error('Error fetching menu:', error);
//                 setMenus([]);
//             }
//         };
//       fetchMenu();
//     }, [restaurantId, token]);

//     const getItemQuantity = (itemId) => {
//         const item = cartItems.find((cartItem) => cartItem.id === itemId);
//         return item ? item.quantity : 0;
//     };

//     // Handle opening the dialog
//     const handleDialogOpen = (mode, item) => {
//         setDialogMode(mode);
//         if (mode === 'edit' && item) {
//             setCurrentItem(item);
//             setNewItem({ name: item.name, price: item.price.toString() });
//         } else {
//             setCurrentItem(null);
//             setNewItem({ name: '', price: '' });
//         }
//         setOpenDialog(true);
//     };

//     // Handle closing the dialog
//     const handleDialogClose = () => {
//         setOpenDialog(false);
//     };

//     // Handle adding, editing, or deleting menu items
//     const handleSaveItem = async () => {
//         try {
//             const method = dialogMode === 'add' ? 'POST' : 'PUT';
//             const url = dialogMode === 'add' ? `http://localhost:5000/api/menu` : `http://localhost:5000/api/menu/${currentItem._id}`;
//             const response = await fetch(url, {
//                 method: method,
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 },
//                 body: JSON.stringify({
//                     name: newItem.name,
//                     price: parseFloat(newItem.price),
//                     restaurantId: restaurantId,
//                     category: 'default'
//                 }),
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 if (dialogMode === 'add') {
//                     setMenus((prevMenus) => [...prevMenus, data]);
//                 } else if (dialogMode === 'edit') {
//                     setMenus((prevMenus) =>
//                         prevMenus.map((item) => item._id === currentItem._id ? { ...item, name: newItem.name, price: parseFloat(newItem.price) } : item)
//                     );
//                 }
//             }
//         } catch (error) {
//             console.error('Failed to update the menu:', error);
//         }
//         handleDialogClose();
//     };

//     const handleDeleteItem = async (itemId) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/menu/${itemId}`, {
//                 method: 'DELETE',
//                 headers: {
//                   'Authorization': `Bearer ${token}`
//                 }
//             });
//             if (response.ok) {
//                 setMenus(menus.filter(item => item._id !== itemId));
//             }
//         } catch (error) {
//             console.error('Error deleting item:', error);
//         }
//     };

//   const handleAddToCart = async (item) => {
//     try {
//         await fetch(`http://localhost:5000/api/cart/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             },
//           body: JSON.stringify({
//               userId: user.userId,
//               menuItemId: item._id,
//               quantity: 1
//             })
//         });
//         addToCart(item);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const handleRemoveFromCart = async (item) => {
//     try {
//         const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item._id}`, {
//             method: 'DELETE',
//             headers: {
//               'Authorization': `Bearer ${token}`
//             }
//         });
//         if(response.ok) {
//             removeFromCart(item);
//         }
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     }
//   };

//   const handleIncrement = async (item) => {
//     try {
//         await fetch(`http://localhost:5000/api/cart/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//               'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify({
//                 userId: user.userId,
//                 menuItemId: item._id,
//                 quantity: 1
//             })
//         });
//         increaseQuantity(item._id);
//     } catch (error) {
//       console.error('Error increasing quantity:', error);
//     }
//   };

//   const handleDecrement = async (item) => {
//     try {
//         await fetch(`http://localhost:5000/api/cart/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify({
//                 userId: user.userId,
//                 menuItemId: item._id,
//                 quantity: -1
//             })
//         });
//         decreaseQuantity(item._id);
//     } catch (error) {
//       console.error('Error decreasing quantity:', error);
//     }
//   };

//     return (
//         <div style={{ padding: '16px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
//             <Typography variant="h4" align="center" gutterBottom style={{ color: '#121212' }}>
//                 Menu for {restaurantId.replace(/-/g, ' ')} </Typography>

//             <Button variant="contained" color="primary" onClick={() => handleDialogOpen('add')} style={{ marginBottom: '20px' }}>
//                 Add Menu Item
//             </Button>

//             <Grid container spacing={4}>
//                 {menus.map((item) => {
//                     const quantity = getItemQuantity(item._id);

//                     return (
//                         <Grid item xs={12} sm={6} md={4} key={item._id}>
//                             <Card sx={{ maxWidth: 500, backgroundColor: '#ffffff', color: '#121212' }}>
//                                 <CardContent>
//                                     <Typography variant="h6">{item.name}</Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         Price: ₹{item.price.toFixed(2)}
//                                     </Typography>
//                                 </CardContent>
//                                 <CardActions>
//                                     {quantity === 0 ? (
//                                         <Button variant="contained" color="primary" onClick={() => handleAddToCart(item)} fullWidth>
//                                             Add to Cart </Button>
//                                     ) : (
//                                         <Grid container spacing={1} alignItems="center">
//                                             <Grid item xs={4}>
//                                                 <Button variant="outlined" color="error" onClick={() => handleRemoveFromCart(item)} fullWidth>
//                                                     Remove </Button>
//                                             </Grid>
//                                             <Grid item xs={4}>
//                                                 <Typography align="center">{quantity}</Typography>
//                                             </Grid>
//                                             <Grid item xs={4}>
//                                                 <Button variant="outlined" color="success" onClick={() => handleIncrement(item)} fullWidth>
//                                                     + </Button>
//                                             </Grid>
//                                         </Grid>
//                                     )}
//                                     <Button variant="outlined" color="error" onClick={() => handleDeleteItem(item._id)} fullWidth sx={{ width: '50%' }} >
//                                         Delete </Button>
//                                     <Button variant="outlined" color="primary" onClick={() => handleDialogOpen('edit', item)} fullWidth sx={{ width: '50%' }} >
//                                         Edit </Button>
//                                 </CardActions>
//                             </Card>
//                         </Grid>
//                     );
//                 })}
//             </Grid>

//             {/* Dialog for Add/Edit Menu Item */}
//             <Dialog open={openDialog} onClose={handleDialogClose}>
//                 <DialogTitle>{dialogMode === 'add' ? 'Add Menu Item' : 'Edit Menu Item'}</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         label="Item Name"
//                         fullWidth
//                         value={newItem.name}
//                         onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//                         style={{ marginBottom: '20px' }}
//                     />
//                     <TextField
//                         label="Price"
//                         type="number"
//                         fullWidth
//                         value={newItem.price}
//                         onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleDialogClose} color="primary">
//                         Cancel
//                     </Button>
//                     <Button onClick={handleSaveItem} color="primary">
//                         {dialogMode === 'add' ? 'Add Item' : 'Save Changes'}
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// };

// export default Menu;



// // src/pages/Menu.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useCart } from '../CartContext';
// import { Card, CardContent, CardActions, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import Grid from '@mui/material/Grid';

// const Menu = () => {
//   const { restaurantId } = useParams();
//   const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems, token, user } = useCart();

//   // State for managing the menu and dialog box
//   const [menus, setMenus] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
//   const [currentItem, setCurrentItem] = useState(null); // To store item details for editing
//   const [newItem, setNewItem] = useState({ name: '', price: '' }); // New item data

//   // Fetch menu items
//   useEffect(() => {
//     const fetchMenu = async () => {
//       if (!token) {
//         return
//       }
//       console.log('Token:', token); // Log the token before making the request
//       try {
//         const response = await fetch(`http://localhost:5000/api/menu/${restaurantId}`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         const data = await response.json();
//         if (response.ok) {
//           setMenus(data);
//         } else {
//           console.error('Failed to fetch menu');
//           setMenus([]);
//         }
//       } catch (error) {
//         console.error('Error fetching menu:', error);
//         setMenus([]);
//       }
//     };
//     fetchMenu();
//   }, [restaurantId, token]);

//   const getItemQuantity = (itemId) => {
//     const item = cartItems.find((cartItem) => cartItem.id === itemId);
//     return item ? item.quantity : 0;
//   };

//   // Handle opening the dialog
//   // const handleDialogOpen = (mode, item) => {
//   //     setDialogMode(mode);
//   //     if (mode === 'edit' && item) {
//   //         setCurrentItem(item);
//   //         setNewItem({ name: item.name, price: item.price.toString() });
//   //     } else {
//   //         setCurrentItem(null);
//   //         setNewItem({ name: '', price: '' });
//   //     }
//   //     setOpenDialog(true);
//   // };

//   // Handle opening the dialog
//   const handleDialogOpen = (mode, item) => {
//     setDialogMode(mode);
//     if (mode === 'edit' && item) {
//       setCurrentItem(item);
//       setNewItem({ name: item.name, price: item.price.toString() });
//     } else {
//       setCurrentItem(null);
//       setNewItem({ name: '', price: '' });
//     }
//     setOpenDialog(true);
//   };

//   // Handle closing the dialog
//   const handleDialogClose = () => {
//     setOpenDialog(false);
//   };

//   // Handle adding, editing, or deleting menu items
//   const handleSaveItem = async () => {
//     try {
//       const method = dialogMode === 'add' ? 'POST' : 'PUT';
//       //  const url = dialogMode === 'add' ? `http://localhost:5000/api/menu` : `http://localhost:5000/api/menu/${currentItem.id}`;
//       const url = dialogMode === 'add' ? `http://localhost:5000/api/menu` : `http://localhost:5000/api/menu/${currentItem._id}`;
//       const response = await fetch(url, {
//         method: method,
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           name: newItem.name,
//           price: parseFloat(newItem.price),
//           restaurantId: restaurantId,
//           category: 'default'
//         }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         if (dialogMode === 'add') {
//           setMenus((prevMenus) => [...prevMenus, data]);
//         } else if (dialogMode === 'edit') {
//           setMenus((prevMenus) =>
//             prevMenus.map((item) => item.id === currentItem.id ? { ...item, name: newItem.name, price: parseFloat(newItem.price) } : item)
//           );
//         }
//       }
//     } catch (error) {
//       console.error('Failed to update the menu:', error);
//     }
//     handleDialogClose();
//   };

//   const handleDeleteItem = async (itemId) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/menu/${itemId}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (response.ok) {
//         setMenus(menus.filter(item => item.id !== itemId));
//       }
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   const handleAddToCart = async (item) => {
//     try {
//       await fetch(`http://localhost:5000/api/cart/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           userId: user.userId,
//           menuItemId: item.id,
//           quantity: 1
//         })
//       });
//       addToCart(item);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const handleRemoveFromCart = async (item) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item.id}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       if (response.ok) {
//         removeFromCart(item);
//       }
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     }
//   };

//   const handleIncrement = async (item) => {
//     try {
//       await fetch(`http://localhost:5000/api/cart/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           userId: user.userId,
//           menuItemId: item.id,
//           quantity: 1
//         })
//       });
//       increaseQuantity(item.id);
//     } catch (error) {
//       console.error('Error increasing quantity:', error);
//     }
//   };

//   const handleDecrement = async (item) => {
//     try {
//       await fetch(`http://localhost:5000/api/cart/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           userId: user.userId,
//           menuItemId: item.id,
//           quantity: -1
//         })
//       });
//       decreaseQuantity(item.id);
//     } catch (error) {
//       console.error('Error decreasing quantity:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '16px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
//       <Typography variant="h4" align="center" gutterBottom style={{ color: '#121212' }}>
//         Menu for {restaurantId.replace(/-/g, ' ')} </Typography>

//       <Button variant="contained" color="primary" onClick={() => handleDialogOpen('add')} style={{ marginBottom: '20px' }}>
//         Add Menu Item
//       </Button>

//       <Grid container spacing={4}>
//         {menus.map((item) => {
//           const quantity = getItemQuantity(item.id);

//           return (
//             <Grid item xs={12} sm={6} md={4} key={item._id}>
//               <Card sx={{ maxWidth: 500, backgroundColor: '#ffffff', color: '#121212' }}>
//                 <CardContent>
//                   <Typography variant="h6">{item.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Price: ₹{item.price.toFixed(2)}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   {quantity === 0 ? (
//                     // <Button variant="contained" color="primary" onClick={() => handleAddToCart(item)} fullWidth>
//                     //     Add to Cart </Button>
//                     <Button variant="contained" color="primary" onClick={() => handleAddToCart(item._id)} fullWidth>
//                       Add to Cart </Button>
//                   ) : (
//                     <Grid container spacing={1} alignItems="center">
//                       <Grid item xs={4}>
//                         {/* <Button variant="outlined" color="error" onClick={() => handleRemoveFromCart(item)} fullWidth>
//                           Remove </Button> */}
//                         <Button variant="outlined" color="error" onClick={() => handleRemoveFromCart(item._id)} fullWidth>
//                           Remove </Button>
//                       </Grid>
//                       <Grid item xs={4}>
//                         <Typography align="center">{quantity}</Typography>
//                       </Grid>
//                       <Grid item xs={4}>
//                         {/* <Button variant="outlined" color="success" onClick={() => handleIncrement(item)} fullWidth>
//                           + </Button> */}

//                         <Button variant="outlined" color="success" onClick={() => handleIncrement(item._id)} fullWidth>
//                           + </Button>
//                         <Button variant="outlined" color="error" onClick={() => handleDecrement(item._id)} fullWidth>
//                           - </Button>
//                       </Grid>
//                     </Grid>
//                   )}
//                   <Button variant="outlined" color="error" onClick={() => handleDeleteItem(item._id)} fullWidth sx={{ width: '50%' }} >
//                     Delete </Button>
//                   <Button variant="outlined" color="primary" onClick={() => handleDialogOpen('edit', item._id)} fullWidth sx={{ width: '50%' }} >
//                     Edit </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>

//       {/* Dialog for Add/Edit Menu Item */}
//       <Dialog open={openDialog} onClose={handleDialogClose}>
//         <DialogTitle>{dialogMode === 'add' ? 'Add Menu Item' : 'Edit Menu Item'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Item Name"
//             fullWidth
//             value={newItem.name}
//             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//             style={{ marginBottom: '20px' }}
//           />
//           <TextField label="Price" type="number" fullWidth value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDialogClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSaveItem} color="primary">
//             {dialogMode === 'add' ? 'Add Item' : 'Save Changes'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Menu;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Card, CardContent, CardActions, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Grid from '@mui/material/Grid';

const Menu = () => {
  const { restaurantId } = useParams();
  const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cartItems, token, user } = useCart();
  const [menus, setMenus] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMode, setDialogMode] = useState('add');
  const [currentItem, setCurrentItem] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  useEffect(() => {
    const fetchMenu = async () => {
      if (!token) return;
      try {
        const response = await fetch(`http://localhost:5000/api/menu/${restaurantId}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          setMenus(await response.json());
        } else {
          console.error('Failed to fetch menu');
          setMenus([]);
        }
      } catch (error) {
        console.error('Error fetching menu:', error);
        setMenus([]);
      }
    };
    fetchMenu();
  }, [restaurantId, token]);

  const getItemQuantity = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const handleDialogOpen = (mode, item) => {
    setDialogMode(mode);
    setCurrentItem(mode === 'edit' ? item : null);
    setNewItem(mode === 'edit' ? { name: item.name, price: String(item.price) } : { name: '', price: '' });
    setOpenDialog(true);
  };

  const handleDialogClose = () => setOpenDialog(false);

  const handleSaveItem = async () => {
    try {
      const method = dialogMode === 'add' ? 'POST' : 'PUT';
      const url = dialogMode === 'add' ? `http://localhost:5000/api/menu` : `http://localhost:5000/api/menu/${currentItem._id}`;
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
          name: newItem.name,
          price: parseFloat(newItem.price),
          restaurantId: restaurantId,
          category: 'default'
        }),
      });
      if (response.ok) {
        const updatedItem = await response.json()
        setMenus((prevMenus) =>
          dialogMode === 'add'
            ? [...prevMenus, updatedItem]
            : prevMenus.map((item) => (item._id === currentItem._id ? { ...item, name: updatedItem.name, price: parseFloat(updatedItem.price) } : item))
        );
      }
    } catch (error) {
      console.error('Failed to update the menu:', error);
    }
    handleDialogClose();
  };


  const handleDeleteItem = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/menu/${itemId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        setMenus(prevMenus => prevMenus.filter(item => item._id !== itemId));
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleAddToCart = async (itemId) => {
    try {
      const itemToAdd = menus.find((item) => item._id === itemId)
      if (itemToAdd) {
        const response = await fetch(`http://localhost:5000/api/cart/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ userId: user.userId, menuItemId: itemToAdd._id, quantity: 1 })
        });
        if (response.ok) {
          // no need to addToCart, since `fetchCart` will update
        }
        else {
          console.error('Failed to add to cart');
        }
      }
      else {
        console.error('Error: item not found in menu');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleRemoveFromCart = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${itemId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        removeFromCart(menus.find((item) => item._id === itemId));
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleIncrement = async (itemId) => {
    try {
      await fetch(`http://localhost:5000/api/cart/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ userId: user.userId, menuItemId: itemId, quantity: 1 })
      });
      increaseQuantity(itemId);
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };

  const handleDecrement = async (itemId) => {
    try {
      await fetch(`http://localhost:5000/api/cart/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ userId: user.userId, menuItemId: itemId, quantity: -1 })
      });
      decreaseQuantity(itemId);
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  };

  return (
    <div style={{ padding: '16px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom style={{ color: '#121212' }}>
        Menu for {restaurantId.replace(/-/g, ' ')}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleDialogOpen('add')} style={{ marginBottom: '20px' }}>
        Add Menu Item
      </Button>
      <Grid container spacing={4}>
        {menus.map((item) => {
          const quantity = getItemQuantity(item._id);
          return (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <Card sx={{ maxWidth: 500, backgroundColor: '#ffffff', color: '#121212' }}>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ₹{item.price.toFixed(2)}
                  </Typography>
                </CardContent>
                <CardActions>
                  {quantity === 0 ? (
                    <Button variant="contained" color="primary" onClick={() => handleAddToCart(item._id)} fullWidth>
                      Add to Cart
                    </Button>
                  ) : (
                    <Grid container spacing={1} alignItems="center">
                      <Grid item xs={4}>
                        <Button variant="outlined" color="error" onClick={() => handleRemoveFromCart(item._id)} fullWidth>
                          Remove
                        </Button>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography align="center">{quantity}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Button variant="outlined" color="success" onClick={() => handleIncrement(item._id)} fullWidth>
                          +
                        </Button>
                        <Button variant="outlined" color="error" onClick={() => handleDecrement(item._id)} fullWidth>
                          -
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                  <Button variant="outlined" color="error" onClick={() => handleDeleteItem(item._id)} fullWidth sx={{ width: '50%' }} >
                    Delete
                  </Button>
                  <Button variant="outlined" color="primary" onClick={() => handleDialogOpen('edit', item)} fullWidth sx={{ width: '50%' }} >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{dialogMode === 'add' ? 'Add Menu Item' : 'Edit Menu Item'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Item Name"
            fullWidth
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Price"
            type="number"
            fullWidth
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveItem} color="primary">
            {dialogMode === 'add' ? 'Add Item' : 'Save Changes'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Menu;