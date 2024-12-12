
// // // import React from 'react';
// // // import { useCart } from '../CartContext';
// // // import { Link } from 'react-router-dom';
// // // import { Button, IconButton } from '@mui/material';
// // // import AddIcon from '@mui/icons-material/Add';
// // // import RemoveIcon from '@mui/icons-material/Remove';

// // // const Cart = () => {
// // //   const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

// // //   const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calculate total price

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
// // //       {cartItems.length === 0 ? (
// // //         <p>Your cart is empty</p>
// // //       ) : (
// // //         <div className="grid gap-4">
// // //           {cartItems.map((item) => (
// // //             <div key={item.id} className="border p-4 rounded-lg shadow-lg flex justify-between items-center">
// // //               <span>{item.name} - ${item.price * item.quantity}</span>
// // //               <div className="flex items-center">
// // //                 <IconButton
// // //                   onClick={() => {
// // //                     if (item.quantity > 0) {
// // //                       decreaseQuantity(item.id);
// // //                     } else {
// // //                       removeFromCart(item.id); // Remove item if quantity reaches zero
// // //                     }
// // //                   }}
// // //                   color="secondary"
// // //                 >
// // //                   <RemoveIcon />
// // //                 </IconButton>
// // //                 <span className="mx-2">{item.quantity}</span>
// // //                 <IconButton
// // //                   onClick={() => increaseQuantity(item.id)}
// // //                   color="primary"
// // //                 >
// // //                   <AddIcon />
// // //                 </IconButton>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //       {cartItems.length > 0 && (
// // //         <div className="mt-6">
// // //           <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
// // //           <Link to="/checkout">
// // //             <Button variant="contained" color="primary" fullWidth>
// // //               Proceed to Checkout
// // //             </Button>
// // //           </Link>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Cart;




// // // //######################################askdkd

// // // src/pages/Cart.js
// // import React, { useState, useEffect } from 'react';
// // import { useCart } from '../CartContext';
// // import { Link } from 'react-router-dom';
// // import { Button, IconButton } from '@mui/material';
// // import AddIcon from '@mui/icons-material/Add';
// // import RemoveIcon from '@mui/icons-material/Remove';

// // const Cart = () => {
// //   const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, user } = useCart();
// //   const [cartData, setCartData] = useState([]);
// //     const token = localStorage.getItem('token');

// //     useEffect(() => {
// //       const fetchCart = async () => {
// //         try{
// //             const response = await fetch(`http://localhost:5000/api/cart/${user.userId}`, {
// //              headers: {
// //                  'Authorization': `Bearer ${token}`
// //               }
// //           })
// //             if (response.ok) {
// //                 const cart = await response.json();
// //                 const cartItems = cart.items.map(item => ({...item.menuItemId, quantity:item.quantity}))
// //                  setCartData(cartItems)
// //             } else {
// //                  setCartData([])
// //            }
// //           } catch (error) {
// //                 console.error('Error fetching cart items', error)
// //         }
// //        }
// //         fetchCart()
// //     }, [user, token]);


// //     const totalPrice = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);


// //     return (
// //         <div className="container mx-auto p-4">
// //             <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
// //             {cartData.length === 0 ? (
// //                 <p>Your cart is empty</p>
// //             ) : (
// //                 <div className="grid gap-4">
// //                     {cartData.map((item) => (
// //                         <div key={item._id} className="border p-4 rounded-lg shadow-lg flex justify-between items-center">
// //                             <span>{item.name} - ${item.price * item.quantity}</span>
// //                             <div className="flex items-center">
// //                                 <IconButton
// //                                     onClick={() => {
// //                                         if (item.quantity > 0) {
// //                                             decreaseQuantity(item._id);
// //                                         } else {
// //                                             removeFromCart(item); // Remove item if quantity reaches zero
// //                                         }
// //                                     }}
// //                                     color="secondary"
// //                                 >
// //                                     <RemoveIcon />
// //                                 </IconButton>
// //                                 <span className="mx-2">{item.quantity}</span>
// //                                 <IconButton
// //                                     onClick={() => increaseQuantity(item._id)}
// //                                     color="primary"
// //                                 >
// //                                     <AddIcon />
// //                                 </IconButton>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             )}
// //             {cartData.length > 0 && (
// //                 <div className="mt-6">
// //                     <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
// //                     <Link to="/checkout">
// //                         <Button variant="contained" color="primary" fullWidth>
// //                             Proceed to Checkout
// //                         </Button>
// //                     </Link>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default Cart;




// import React, { useState, useEffect } from 'react';
// import { useCart } from '../CartContext';
// import { Link } from 'react-router-dom';
// import { Button, IconButton } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const Cart = () => {
// const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, user } = useCart();
// const [cartData, setCartData] = useState([]);
// const token = localStorage.getItem('token');

// useEffect(() => {
// const fetchCart = async () => {
// try{
//   const response = await fetch(`http://localhost:5000/api/cart/${user.userId}`, {
//     headers: {
//       'Authorization': `Bearer ${token}`
//    }
// })
//   if (response.ok) {
//       const cart = await response.json();
//       const cartItems = cart.items.map(item => ({...item.menuItemId, quantity:item.quantity}))
//        setCartData(cartItems)
//   } else {
//        setCartData([])
//  }
// } catch (error) {
//       console.error('Error fetching cart items', error)
// }
// }
// fetchCart()
// }, [user, token, cartItems]);


// const totalPrice = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);


// return (
// <div className="container mx-auto p-4">
//   <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
//   {cartData.length === 0 ? (
//       <p>Your cart is empty</p>
//   ) : (
//       <div className="grid gap-4">
//           {cartData.map((item) => (
//               <div key={item._id} className="border p-4 rounded-lg shadow-lg flex justify-between items-center">
//                   <span>{item.name} - ${item.price * item.quantity}</span>
//                   <div className="flex items-center">
//                       <IconButton
//                           onClick={() => {
//                               if (item.quantity > 0) {
//                                   decreaseQuantity(item._id);
//                               } else {
//                                   removeFromCart(item); // Remove item if quantity reaches zero
//                               }
//                           }}
//                           color="secondary"
//                       >
//                           <RemoveIcon />
//                       </IconButton>
//                       <span className="mx-2">{item.quantity}</span>
//                       <IconButton
//                           onClick={() => increaseQuantity(item._id)}
//                           color="primary"
//                       >
//                           <AddIcon />
//                       </IconButton>
//                   </div>
//               </div>
//           ))}
//       </div>
//   )}
//   {cartData.length > 0 && (
//       <div className="mt-6">
//           <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
//           <Link to="/checkout">
//               <Button variant="contained" color="primary" fullWidth>
//                   Proceed to Checkout
//               </Button>
//           </Link>
//       </div>
//   )}
// </div>
// );
// };

// export default Cart;



import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { API_BASE_URL } from '../config';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, user } = useCart();
  const [cartData, setCartData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/cart/${user.userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        if (response.ok) {
          const cart = await response.json();
          const cartItems = cart.items.map(item => ({ ...item.menuItemId, quantity: item.quantity }));
          setCartData(cartItems)
        } else {
          setCartData([])
        }
      } catch (error) {
        console.error('Error fetching cart items', error)
      }
    }
    fetchCart()
  }, [user, token, cartItems]);

  const handleDecreaseQuantity = async (item) => {
    try {
      await decreaseQuantity(item._id);
      const updatedCartData = cartData.map((cartItem) =>
        cartItem._id === item._id ? { ...cartItem, quantity: Math.max(0, cartItem.quantity - 1) } : cartItem
      ).filter(item => item.quantity > 0);

      setCartData(updatedCartData);
      if (item.quantity === 1) {
        await removeFromCart(item);
        setCartData(cartData.filter(cartItem => cartItem._id !== item._id));
      }

    }
    catch (error) {
      console.error('Error decreasing quantity', error)
    }
  };

  const handleIncreaseQuantity = async (item) => {
    try {
      await increaseQuantity(item._id);
      setCartData(cartData.map((cartItem) =>
        cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));

    }
    catch (error) {
      console.error('Error increasing quantity', error)
    }
  };


  const totalPrice = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartData.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid gap-4">
          {cartData.map((item) => (
            <div key={item._id} className="border p-4 rounded-lg shadow-lg flex justify-between items-center">
              <span>{item.name} - ${item.price * item.quantity}</span>
              <div className="flex items-center">
                <IconButton
                  onClick={() => handleDecreaseQuantity(item)}
                  color="secondary"
                >
                  <RemoveIcon />
                </IconButton>
                <span className="mx-2">{item.quantity}</span>
                <IconButton
                  onClick={() => handleIncreaseQuantity(item)}
                  color="primary"
                >
                  <AddIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartData.length > 0 && (
        <div className="mt-6">
          <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
          <Link to="/checkout">
            <Button variant="contained" color="primary" fullWidth>
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;