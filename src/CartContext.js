// // // // // // // import React, { createContext, useContext, useState } from 'react';
// // // // // // // const CartContext = createContext();
// // // // // // // export const useCart = () => useContext(CartContext);
// // // // // // // export const CartProvider = ({ children }) => {
// // // // // // //   // Initialize cartItems from localStorage or an empty array
// // // // // // //   const [cartItems, setCartItems] = useState(() => {
// // // // // // //     const storedCart = localStorage.getItem('cartItems');
// // // // // // //     return storedCart ? JSON.parse(storedCart) : [];
// // // // // // //   });

// // // // // // //   const [user, setUser] = useState(null);

// // // // // // //   // Update localStorage whenever cartItems changes
// // // // // // //   React.useEffect(() => {
// // // // // // //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// // // // // // //   }, [cartItems]);

// // // // // // //   const clearCart = () => {
// // // // // // //     setCartItems([]);
// // // // // // //     localStorage.removeItem('cartItems'); // Clear cart from localStorage
// // // // // // //   };

// // // // // // //   const addToCart = (item) => {
// // // // // // //     setCartItems((prevItems) => {
// // // // // // //       const existingItem = prevItems.find((i) => i.id === item.id);
// // // // // // //       if (existingItem) {
// // // // // // //         return prevItems.map((i) =>
// // // // // // //           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
// // // // // // //         );
// // // // // // //       } else {
// // // // // // //         return [...prevItems, { ...item, quantity: 1 }];
// // // // // // //       }
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const removeFromCart = (item) => {
// // // // // // //     setCartItems((prevItems) =>
// // // // // // //       prevItems.filter((cartItem) => cartItem.id !== item.id)
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const increaseQuantity = (itemId) => {
// // // // // // //     setCartItems((prevItems) =>
// // // // // // //       prevItems.map((i) =>
// // // // // // //         i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
// // // // // // //       )
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const decreaseQuantity = (itemId) => {
// // // // // // //     setCartItems((prevItems) => {
// // // // // // //       const updatedItems = prevItems.map((item) =>
// // // // // // //         item.id === itemId && item.quantity > 0
// // // // // // //           ? { ...item, quantity: item.quantity - 1 }
// // // // // // //           : item
// // // // // // //       );
// // // // // // //       return updatedItems.filter((item) => item.quantity > 0);
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const login = (email, password) => {
// // // // // // //     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
// // // // // // //     const userFound = storedUsers.find(
// // // // // // //       (u) => u.email === email && u.password === password
// // // // // // //     );
// // // // // // //     if (userFound) {
// // // // // // //       setUser(userFound);
// // // // // // //       localStorage.setItem('currentUser', JSON.stringify(userFound));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const register = (email, password) => {
// // // // // // //     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
// // // // // // //     if (storedUsers.find((u) => u.email === email)) {
// // // // // // //       return false;
// // // // // // //     }
// // // // // // //     const newUser = { email, password };
// // // // // // //     localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
// // // // // // //     localStorage.setItem('currentUser', JSON.stringify(newUser));
// // // // // // //     setUser(newUser);
// // // // // // //     return true;
// // // // // // //   };

// // // // // // //   const logout = () => {
// // // // // // //     setUser(null);
// // // // // // //     localStorage.removeItem('currentUser');
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <CartContext.Provider
// // // // // // //       value={{
// // // // // // //         cartItems,
// // // // // // //         addToCart,
// // // // // // //         removeFromCart,
// // // // // // //         increaseQuantity,
// // // // // // //         decreaseQuantity,
// // // // // // //         user,
// // // // // // //         login,
// // // // // // //         register,
// // // // // // //         logout,
// // // // // // //         clearCart,
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       {children}
// // // // // // //     </CartContext.Provider>
// // // // // // //   );
// // // // // // // };


// // // // // // // src/CartContext.js
// // // // // // import React, { createContext, useContext, useState, useEffect } from 'react';

// // // // // // const CartContext = createContext();

// // // // // // export const useCart = () => useContext(CartContext);

// // // // // // export const CartProvider = ({ children }) => {
// // // // // //   // Initialize cartItems from localStorage or an empty array
// // // // // //     const [cartItems, setCartItems] = useState(() => {
// // // // // //         const storedCart = localStorage.getItem('cartItems');
// // // // // //         return storedCart ? JSON.parse(storedCart) : [];
// // // // // //     });

// // // // // //     // Initialize user from localStorage or null
// // // // // //     const [user, setUser] = useState(() => {
// // // // // //         return JSON.parse(localStorage.getItem('currentUser')) || null;
// // // // // //     });

// // // // // //     // Update localStorage whenever cartItems changes
// // // // // //     useEffect(() => {
// // // // // //         localStorage.setItem('cartItems', JSON.stringify(cartItems));
// // // // // //     }, [cartItems]);

// // // // // //     const clearCart = () => {
// // // // // //         setCartItems([]);
// // // // // //         localStorage.removeItem('cartItems'); // Clear cart from localStorage
// // // // // //     };

// // // // // //     const addToCart = (item) => {
// // // // // //         setCartItems((prevItems) => {
// // // // // //             const existingItem = prevItems.find((i) => i.id === item.id);
// // // // // //             if (existingItem) {
// // // // // //                 return prevItems.map((i) =>
// // // // // //                     i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
// // // // // //                 );
// // // // // //             } else {
// // // // // //                 return [...prevItems, { ...item, quantity: 1 }];
// // // // // //             }
// // // // // //         });
// // // // // //     };

// // // // // //     const removeFromCart = (item) => {
// // // // // //         setCartItems((prevItems) =>
// // // // // //             prevItems.filter((cartItem) => cartItem.id !== item.id)
// // // // // //         );
// // // // // //     };

// // // // // //     const increaseQuantity = (itemId) => {
// // // // // //         setCartItems((prevItems) =>
// // // // // //             prevItems.map((i) =>
// // // // // //                 i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
// // // // // //             )
// // // // // //         );
// // // // // //     };

// // // // // //     const decreaseQuantity = (itemId) => {
// // // // // //         setCartItems((prevItems) => {
// // // // // //             const updatedItems = prevItems.map((item) =>
// // // // // //                 item.id === itemId && item.quantity > 0
// // // // // //                     ? { ...item, quantity: item.quantity - 1 }
// // // // // //                     : item
// // // // // //             );
// // // // // //             return updatedItems.filter((item) => item.quantity > 0);
// // // // // //         });
// // // // // //     };

// // // // // //     const login = (email, password) => {
// // // // // //         const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
// // // // // //         const userFound = storedUsers.find(
// // // // // //             (u) => u.email === email && u.password === password
// // // // // //         );
// // // // // //         if (userFound) {
// // // // // //             setUser(userFound);
// // // // // //             localStorage.setItem('currentUser', JSON.stringify(userFound));
// // // // // //             return true;
// // // // // //         } else {
// // // // // //             return false
// // // // // //         }
// // // // // //     };

// // // // // //     const register = (email, password) => {
// // // // // //         const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
// // // // // //         if (storedUsers.find((u) => u.email === email)) {
// // // // // //             return false;
// // // // // //         }
// // // // // //         const newUser = { email, password };
// // // // // //         localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
// // // // // //         localStorage.setItem('currentUser', JSON.stringify(newUser));
// // // // // //         setUser(newUser);
// // // // // //         return true;
// // // // // //     };

// // // // // //     const logout = () => {
// // // // // //         setUser(null);
// // // // // //         localStorage.removeItem('currentUser');
// // // // // //     };

// // // // // //     return (
// // // // // //         <CartContext.Provider
// // // // // //             value={{
// // // // // //                 cartItems,
// // // // // //                 addToCart,
// // // // // //                 removeFromCart,
// // // // // //                 increaseQuantity,
// // // // // //                 decreaseQuantity,
// // // // // //                 user,
// // // // // //                 login,
// // // // // //                 register,
// // // // // //                 logout,
// // // // // //                 clearCart,
// // // // // //             }}
// // // // // //         >
// // // // // //             {children}
// // // // // //         </CartContext.Provider>
// // // // // //     );
// // // // // // };


// // // // // //###########################

// // // // // // src/CartContext.js
// // // // // import React, { createContext, useContext, useState, useEffect } from 'react';
// // // // // import { jwtDecode } from 'jwt-decode';
// // // // // const CartContext = createContext();

// // // // // export const useCart = () => useContext(CartContext);

// // // // // export const CartProvider = ({ children }) => {
// // // // //   // Initialize cartItems from localStorage or an empty array
// // // // //   const [cartItems, setCartItems] = useState(() => {
// // // // //     const storedCart = localStorage.getItem('cartItems');
// // // // //     return storedCart ? JSON.parse(storedCart) : [];
// // // // //   });
// // // // //   // Initialize user from localStorage or null
// // // // //   const [user, setUser] = useState(() => {
// // // // //     const token = localStorage.getItem('token');
// // // // //     if (token) {
// // // // //       try {
// // // // //         const decodedToken = jwtDecode(token);
// // // // //         return decodedToken;
// // // // //       }
// // // // //       catch (error) {
// // // // //         console.log('error', error)
// // // // //         return null
// // // // //       }
// // // // //     }
// // // // //     else {
// // // // //       return null
// // // // //     }

// // // // //   });


// // // // //   // Update localStorage whenever cartItems changes
// // // // //   useEffect(() => {
// // // // //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// // // // //   }, [cartItems]);

// // // // //   const clearCart = () => {
// // // // //     setCartItems([]);
// // // // //     localStorage.removeItem('cartItems'); // Clear cart from localStorage
// // // // //   };

// // // // //   // const addToCart = async (item) => {
// // // // //   //   const token = localStorage.getItem('token')
// // // // //   //   // try {
// // // // //   //   //    await fetch('http://localhost:5000/api/cart', {
// // // // //   //   //         method: 'POST',
// // // // //   //   //         headers: {
// // // // //   //   //             'Content-Type': 'application/json',
// // // // //   //   //             'Authorization': `Bearer ${token}`
// // // // //   //   //         },
// // // // //   //   //         body: JSON.stringify({ menuItemId:item.id, userId: user.userId, quantity: 1}),
// // // // //   //   //     });

// // // // //   //   try {
// // // // //   //     const response = await fetch('http://localhost:5000/api/cart', {
// // // // //   //       method: 'POST',
// // // // //   //       headers: {
// // // // //   //         'Content-Type': 'application/json',
// // // // //   //         'Authorization': `Bearer ${token}`
// // // // //   //       },
// // // // //   //       body: JSON.stringify({ menuItemId: item.id, userId: user.userId, quantity: 1 }),
// // // // //   //     });

// // // // //   //     if (response.status === 401) {
// // // // //   //       handleTokenExpiration();
// // // // //   //       return;
// // // // //   //     }

// // // // //   //     //           setCartItems((prevItems) => {
// // // // //   //     //               const existingItem = prevItems.find((i) => i.id === item.id);
// // // // //   //     //               if (existingItem) {
// // // // //   //     //                   return prevItems.map((i) =>
// // // // //   //     //                       i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
// // // // //   //     //                   );
// // // // //   //     //               } else {
// // // // //   //     //                   return [...prevItems, { ...item, quantity: 1 }];
// // // // //   //     //               }
// // // // //   //     //           });
// // // // //   //     //          } catch (error) {
// // // // //   //     //               console.error('Error adding to cart', error)
// // // // //   //     //           }

// // // // //   //     // };


// // // // //   //     setCartItems((prevItems) => {
// // // // //   //       const existingItem = prevItems.find((i) => i.id === item.id);
// // // // //   //       if (existingItem) {
// // // // //   //         return prevItems.map((i) =>
// // // // //   //           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
// // // // //   //         );
// // // // //   //       } else {
// // // // //   //         return [...prevItems, { ...item, quantity: 1 }];
// // // // //   //       }
// // // // //   //     });
// // // // //   //   } catch (error) {
// // // // //   //     console.error('Error adding to cart', error);
// // // // //   //   }
// // // // //   // };



// // // // //   const addToCart = async (item) => {
// // // // //     const token = localStorage.getItem('token');
// // // // //     if (!token) {
// // // // //       console.error('No token found in localStorage');
// // // // //       return;
// // // // //     }
// // // // //     console.log('Token:', token); // Log the token before making the request
  
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/cart', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //           'Authorization': `Bearer ${token}`
// // // // //         },
// // // // //         body: JSON.stringify({ menuItemId: item.id, userId: user.userId, quantity: 1 }),
// // // // //       });
  
// // // // //       if (response.status === 401) {
// // // // //         handleTokenExpiration();
// // // // //         return;
// // // // //       }
  
// // // // //       setCartItems((prevItems) => {
// // // // //         const existingItem = prevItems.find((i) => i.id === item.id);
// // // // //         if (existingItem) {
// // // // //           return prevItems.map((i) =>
// // // // //             i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
// // // // //           );
// // // // //         } else {
// // // // //           return [...prevItems, { ...item, quantity: 1 }];
// // // // //         }
// // // // //       });
// // // // //     } catch (error) {
// // // // //       console.error('Error adding to cart', error);
// // // // //     }
// // // // //   };


// // // // //   const removeFromCart = async (item) => {
// // // // //     const token = localStorage.getItem('token')
// // // // //     try {
// // // // //       await fetch(`http://localhost:5000/api/cart/${user.userId}/${item.id}`, {
// // // // //         method: 'DELETE',
// // // // //         headers: {
// // // // //           'Authorization': `Bearer ${token}`
// // // // //         }
// // // // //       })
// // // // //       setCartItems((prevItems) =>
// // // // //         prevItems.filter((cartItem) => cartItem.id !== item.id)
// // // // //       );
// // // // //     } catch (error) {
// // // // //       console.error('Error removing from cart', error)
// // // // //     }
// // // // //   };

// // // // //   const increaseQuantity = async (itemId) => {
// // // // //     const token = localStorage.getItem('token');
// // // // //     try {
// // // // //       await fetch('/http://localhost:5000/api/cart', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //           'Authorization': `Bearer ${token}`
// // // // //         },
// // // // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: 1 }),
// // // // //       });
// // // // //       setCartItems((prevItems) =>
// // // // //         prevItems.map((i) =>
// // // // //           i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
// // // // //         )
// // // // //       );
// // // // //     } catch (error) {
// // // // //       console.error('Error increasing quantity', error)
// // // // //     }

// // // // //   };

// // // // //   const decreaseQuantity = async (itemId) => {
// // // // //     const token = localStorage.getItem('token')
// // // // //     try {
// // // // //       await fetch('http://localhost:5000/api/cart', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //           'Authorization': `Bearer ${token}`
// // // // //         },
// // // // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: -1 }),
// // // // //       });
// // // // //       setCartItems((prevItems) => {
// // // // //         const updatedItems = prevItems.map((item) =>
// // // // //           item.id === itemId && item.quantity > 0
// // // // //             ? { ...item, quantity: item.quantity - 1 }
// // // // //             : item
// // // // //         );
// // // // //         return updatedItems.filter((item) => item.quantity > 0);
// // // // //       });
// // // // //     }
// // // // //     catch (error) {
// // // // //       console.error('Error decreasing quantity', error)
// // // // //     }
// // // // //   };

// // // // //   const login = async (email, password) => {
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/auth/login', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //         },
// // // // //         body: JSON.stringify({ email, password }),
// // // // //       });

// // // // //       if (response.ok) {
// // // // //         const data = await response.json();
// // // // //         const decodedToken = jwtDecode(data.token)
// // // // //         localStorage.setItem('token', data.token); // Store token
// // // // //         setUser(decodedToken);
// // // // //         return true;
// // // // //       }
// // // // //       return false
// // // // //     } catch (error) {
// // // // //       console.error('Login failed', error)
// // // // //       return false;
// // // // //     }

// // // // //   };

// // // // //   const handleTokenExpiration = () => {
// // // // //     alert('Session expired. Please log in again.');
// // // // //     logout();
// // // // //     window.location.href = '/login'; // Redirect to login page
// // // // //   };

// // // // //   const register = async (email, password) => {
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/auth/register', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //         },
// // // // //         body: JSON.stringify({ name: email.split('@')[0], email, password }),
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         return true;
// // // // //       }
// // // // //       return false
// // // // //     } catch (error) {
// // // // //       console.error('Registration failed', error);
// // // // //       return false
// // // // //     }
// // // // //   };

// // // // //   const logout = () => {
// // // // //     setUser(null);
// // // // //     localStorage.removeItem('token');
// // // // //   };


// // // // //   return (
// // // // //     <CartContext.Provider
// // // // //       value={{
// // // // //         cartItems,
// // // // //         addToCart,
// // // // //         removeFromCart,
// // // // //         increaseQuantity,
// // // // //         decreaseQuantity,
// // // // //         user,
// // // // //         login,
// // // // //         register,
// // // // //         logout,
// // // // //         clearCart,
// // // // //       }}
// // // // //     >
// // // // //       {children}
// // // // //     </CartContext.Provider>
// // // // //   );
// // // // // };


// // // // // // src/CartContext.js
// // // // // import React, { createContext, useContext, useState, useEffect } from 'react';
// // // // // import { jwtDecode } from 'jwt-decode';
// // // // // const CartContext = createContext();

// // // // // export const useCart = () => useContext(CartContext);

// // // // // export const CartProvider = ({ children }) => {
// // // // //   // Initialize cartItems from localStorage or an empty array
// // // // //   const [cartItems, setCartItems] = useState(() => {
// // // // //     const storedCart = localStorage.getItem('cartItems');
// // // // //     return storedCart ? JSON.parse(storedCart) : [];
// // // // //   });
// // // // //   // Initialize user from localStorage or null
// // // // //   const [user, setUser] = useState(() => {
// // // // //     const token = localStorage.getItem('token');
// // // // //     if (token) {
// // // // //       try {
// // // // //         const decodedToken = jwtDecode(token);
// // // // //         return decodedToken;
// // // // //       }
// // // // //       catch (error) {
// // // // //         console.log('error', error)
// // // // //         return null
// // // // //       }
// // // // //     }
// // // // //     else {
// // // // //       return null
// // // // //     }

// // // // //   });
// // // // //   const [token, setToken] = useState(() => localStorage.getItem('token') || null);

// // // // //   // Update localStorage whenever cartItems changes
// // // // //   useEffect(() => {
// // // // //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// // // // //   }, [cartItems]);

// // // // //   const clearCart = () => {
// // // // //     setCartItems([]);
// // // // //     localStorage.removeItem('cartItems'); // Clear cart from localStorage
// // // // //   };

  
// // // // //   const addToCart = async (item) => {
// // // // //     if (!token) {
// // // // //       console.error('No token found in localStorage');
// // // // //       return;
// // // // //     }
// // // // //     console.log('Token:', token); // Log the token before making the request
  
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/cart', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //           'Authorization': `Bearer ${token}`
// // // // //         },
// // // // //         body: JSON.stringify({ menuItemId: item.id, userId: user.userId, quantity: 1 }),
// // // // //       });
  
// // // // //       if (response.status === 401) {
// // // // //         handleTokenExpiration();
// // // // //         return;
// // // // //       }
// // // // //         const data = await response.json();
// // // // //           if (data.success) {
// // // // //               setCartItems((prevItems) => {
// // // // //                 const existingItem = prevItems.find((i) => i.id === item.id);
// // // // //                   if (existingItem) {
// // // // //                      return prevItems.map((i) =>
// // // // //                        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
// // // // //                         );
// // // // //                     } else {
// // // // //                       return [...prevItems, { ...item, quantity: 1 }];
// // // // //                     }
// // // // //                   });
// // // // //           }
// // // // //           else {
// // // // //             console.error('Error adding to cart', data.message);
// // // // //             alert(data.message)
// // // // //           }

// // // // //     } catch (error) {
// // // // //       console.error('Error adding to cart', error);
// // // // //     }
// // // // //   };

  
// // // // //   const removeFromCart = async (item) => {
// // // // //     if (!token) {
// // // // //       console.error('No token found in localStorage');
// // // // //       return;
// // // // //     }
// // // // //     try {
// // // // //       const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item.id}`, {
// // // // //         method: 'DELETE',
// // // // //         headers: {
// // // // //           'Authorization': `Bearer ${token}`
// // // // //         }
// // // // //       })
// // // // //       if (response.ok) {
// // // // //         setCartItems((prevItems) =>
// // // // //           prevItems.filter((cartItem) => cartItem.id !== item.id)
// // // // //         );
// // // // //       }
// // // // //       else {
// // // // //             console.error('Error removing from cart', response.message);
// // // // //           }
// // // // //     } catch (error) {
// // // // //       console.error('Error removing from cart', error)
// // // // //     }
// // // // //   };

// // // // //   const increaseQuantity = async (itemId) => {
// // // // //     if (!token) {
// // // // //       console.error('No token found in localStorage');
// // // // //       return;
// // // // //     }
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/cart', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //           'Authorization': `Bearer ${token}`
// // // // //         },
// // // // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: 1 }),
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         setCartItems((prevItems) =>
// // // // //           prevItems.map((i) =>
// // // // //             i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
// // // // //           )
// // // // //         );
// // // // //       }
// // // // //       else {
// // // // //         console.error('Error increasing quantity', response.message)
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error increasing quantity', error)
// // // // //     }

// // // // //   };

// // // // //   const decreaseQuantity = async (itemId) => {
// // // // //     if (!token) {
// // // // //         console.error('No token found in localStorage');
// // // // //       return;
// // // // //     }
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/cart', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //           'Authorization': `Bearer ${token}`
// // // // //         },
// // // // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: -1 }),
// // // // //       });
// // // // //         if(response.ok) {
// // // // //             setCartItems((prevItems) => {
// // // // //                 const updatedItems = prevItems.map((item) =>
// // // // //                   item.id === itemId && item.quantity > 0
// // // // //                     ? { ...item, quantity: item.quantity - 1 }
// // // // //                     : item
// // // // //                 );
// // // // //                 return updatedItems.filter((item) => item.quantity > 0);
// // // // //               });
// // // // //         }
// // // // //       else {
// // // // //           console.error('Error decreasing quantity', response.message)
// // // // //       }
// // // // //     }
// // // // //     catch (error) {
// // // // //       console.error('Error decreasing quantity', error)
// // // // //     }
// // // // //   };

// // // // //   const login = async (email, password) => {
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/auth/login', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //         },
// // // // //         body: JSON.stringify({ email, password }),
// // // // //       });

// // // // //       if (response.ok) {
// // // // //         const data = await response.json();
// // // // //         const decodedToken = jwtDecode(data.token)
// // // // //         localStorage.setItem('token', data.token); // Store token
// // // // //         setToken(data.token);
// // // // //         setUser(decodedToken);
// // // // //         return true;
// // // // //       }
// // // // //       return false
// // // // //     } catch (error) {
// // // // //       console.error('Login failed', error)
// // // // //       return false;
// // // // //     }

// // // // //   };

// // // // //   const handleTokenExpiration = () => {
// // // // //     alert('Session expired. Please log in again.');
// // // // //     logout();
// // // // //     window.location.href = '/login'; // Redirect to login page
// // // // //   };

// // // // //   const register = async (email, password) => {
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/auth/register', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //         },
// // // // //         body: JSON.stringify({ name: email.split('@')[0], email, password }),
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         return true;
// // // // //       }
// // // // //       return false
// // // // //     } catch (error) {
// // // // //       console.error('Registration failed', error);
// // // // //       return false
// // // // //     }
// // // // //   };

// // // // //   const logout = () => {
// // // // //     setUser(null);
// // // // //     setToken(null);
// // // // //     localStorage.removeItem('token');
// // // // //   };


// // // // //   return (
// // // // //     <CartContext.Provider
// // // // //       value={{
// // // // //         cartItems,
// // // // //         addToCart,
// // // // //         removeFromCart,
// // // // //         increaseQuantity,
// // // // //         decreaseQuantity,
// // // // //         user,
// // // // //         login,
// // // // //         register,
// // // // //         logout,
// // // // //           token,
// // // // //         clearCart,
// // // // //       }}
// // // // //     >
// // // // //       {children}
// // // // //     </CartContext.Provider>
// // // // //   );
// // // // // };



// // // // // import React, { createContext, useContext, useState, useEffect } from 'react';
// // // // // import { jwtDecode } from 'jwt-decode';

// // // // // const CartContext = createContext();

// // // // // export const useCart = () => useContext(CartContext);

// // // // // export const CartProvider = ({ children }) => {
// // // // //   // Initialize cartItems from localStorage or an empty array
// // // // //   const [cartItems, setCartItems] = useState(() => {
// // // // //     const storedCart = localStorage.getItem('cartItems');
// // // // //     return storedCart ? JSON.parse(storedCart) : [];
// // // // //   });

// // // // //   // Initialize user from localStorage or null
// // // // //   const [user, setUser] = useState(null);
// // // // //   const [token, setToken] = useState(() => localStorage.getItem('token') || null);

// // // // //     useEffect(() => {
// // // // //         const storedToken = localStorage.getItem('token');
// // // // //         if (storedToken) {
// // // // //             try {
// // // // //               const decodedToken = jwtDecode(storedToken);
// // // // //               setUser(decodedToken)
// // // // //             }
// // // // //             catch (error) {
// // // // //               console.log('error', error)
// // // // //             }
// // // // //           }
// // // // //     }, []);
// // // // //   // Update localStorage whenever cartItems changes
// // // // //   useEffect(() => {
// // // // //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// // // // //   }, [cartItems]);

// // // // //   const clearCart = () => {
// // // // //     setCartItems([]);
// // // // //     localStorage.removeItem('cartItems'); // Clear cart from localStorage
// // // // //   };


// // // // //   const addToCart = async (item) => {
// // // // //     if (!token) {
// // // // //       console.error('No token found in localStorage');
// // // // //       return;
// // // // //     }
// // // // //     console.log('Token:', token); // Log the token before making the request
// // // // //     try {
// // // // //         const response = await fetch('http://localhost:5000/api/cart', {
// // // // //             method: 'POST',
// // // // //             headers: {
// // // // //                 'Content-Type': 'application/json',
// // // // //                 'Authorization': `Bearer ${token}`,
// // // // //             },
// // // // //             body: JSON.stringify({ menuItemId: item.id, userId: user.userId, quantity: 1 }),
// // // // //         });

// // // // //         if (response.status === 401) {
// // // // //             handleTokenExpiration();
// // // // //             return;
// // // // //         }

// // // // //         const data = await response.json();
// // // // //         if (data.success) {
// // // // //           setCartItems((prevItems) => {
// // // // //             const existingItem = prevItems.find((i) => i.id === item.id);
// // // // //             if (existingItem) {
// // // // //               return prevItems.map((i) =>
// // // // //                 i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
// // // // //               );
// // // // //             } else {
// // // // //               return [...prevItems, { ...item, quantity: 1 }];
// // // // //             }
// // // // //           });
// // // // //         } else {
// // // // //           console.error('Error adding to cart', data.message);
// // // // //           alert(data.message);
// // // // //         }
// // // // //       } catch (error) {
// // // // //         console.error('Error adding to cart', error);
// // // // //       }
// // // // //     };


// // // // //     const removeFromCart = async (item) => {
// // // // //         if (!token) {
// // // // //             console.error('No token found in localStorage');
// // // // //             return;
// // // // //         }
// // // // //       try {
// // // // //           const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item.id}`, {
// // // // //               method: 'DELETE',
// // // // //               headers: {
// // // // //                   'Authorization': `Bearer ${token}`,
// // // // //               },
// // // // //           });
// // // // //           if (response.ok) {
// // // // //             setCartItems((prevItems) =>
// // // // //               prevItems.filter((cartItem) => cartItem.id !== item.id)
// // // // //             );
// // // // //           } else {
// // // // //             console.error('Error removing from cart', response.message);
// // // // //           }
// // // // //       } catch (error) {
// // // // //           console.error('Error removing from cart', error);
// // // // //       }
// // // // //   };

// // // // //   const increaseQuantity = async (itemId) => {
// // // // //     if (!token) {
// // // // //       console.error('No token found in localStorage');
// // // // //       return;
// // // // //     }
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/cart', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //           'Authorization': `Bearer ${token}`
// // // // //         },
// // // // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: 1 }),
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         setCartItems((prevItems) =>
// // // // //           prevItems.map((i) =>
// // // // //             i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
// // // // //           )
// // // // //         );
// // // // //       }
// // // // //       else {
// // // // //         console.error('Error increasing quantity', response.message)
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error increasing quantity', error)
// // // // //     }

// // // // //   };

// // // // //   const decreaseQuantity = async (itemId) => {
// // // // //     if (!token) {
// // // // //       console.error('No token found in localStorage');
// // // // //       return;
// // // // //     }
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/cart', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //           'Authorization': `Bearer ${token}`
// // // // //         },
// // // // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: -1 }),
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         setCartItems((prevItems) => {
// // // // //           const updatedItems = prevItems.map((item) =>
// // // // //             item.id === itemId && item.quantity > 0
// // // // //               ? { ...item, quantity: item.quantity - 1 }
// // // // //               : item
// // // // //           );
// // // // //           return updatedItems.filter((item) => item.quantity > 0);
// // // // //         });
// // // // //       }
// // // // //         else {
// // // // //         console.error('Error decreasing quantity', response.message)
// // // // //       }
// // // // //     }
// // // // //     catch (error) {
// // // // //       console.error('Error decreasing quantity', error)
// // // // //     }
// // // // //   };


// // // // //   const login = async (email, password) => {
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/auth/login', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //         },
// // // // //         body: JSON.stringify({ email, password }),
// // // // //       });

// // // // //       if (response.ok) {
// // // // //           const data = await response.json();
// // // // //           const decodedToken = jwtDecode(data.token);
// // // // //           localStorage.setItem('token', data.token); // Store token
// // // // //           setToken(data.token);
// // // // //           setUser(decodedToken);
// // // // //         return true;
// // // // //       }
// // // // //       return false;
// // // // //     } catch (error) {
// // // // //       console.error('Login failed', error);
// // // // //       return false;
// // // // //     }
// // // // //   };

// // // // //   const handleTokenExpiration = () => {
// // // // //     alert('Session expired. Please log in again.');
// // // // //     logout();
// // // // //     window.location.href = '/login'; // Redirect to login page
// // // // //   };

// // // // //   const register = async (email, password) => {
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/auth/register', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //         },
// // // // //         body: JSON.stringify({ name: email.split('@')[0], email, password }),
// // // // //       });
// // // // //       if (response.ok) {
// // // // //         return true;
// // // // //       }
// // // // //       return false
// // // // //     } catch (error) {
// // // // //       console.error('Registration failed', error);
// // // // //       return false
// // // // //     }
// // // // //   };


// // // // //   const logout = () => {
// // // // //     setUser(null);
// // // // //     setToken(null);
// // // // //     localStorage.removeItem('token');
// // // // //   };

// // // // //   return (
// // // // //     <CartContext.Provider 
// // // // //       value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, user, login, register, logout, token, clearCart, }} >
// // // // //       {children}
// // // // //     </CartContext.Provider>
// // // // //   );
// // // // // };



// // // // import React, { createContext, useContext, useState, useEffect } from 'react';
// // // // import { jwtDecode } from 'jwt-decode';

// // // // const CartContext = createContext();

// // // // export const useCart = () => useContext(CartContext);

// // // // export const CartProvider = ({ children }) => {
// // // //   // Initialize cartItems from localStorage or an empty array
// // // //   const [cartItems, setCartItems] = useState(() => {
// // // //     const storedCart = localStorage.getItem('cartItems');
// // // //     return storedCart ? JSON.parse(storedCart) : [];
// // // //   });

// // // //   // Initialize user from localStorage or null
// // // //   const [user, setUser] = useState(null);
// // // //   const [token, setToken] = useState(() => localStorage.getItem('token') || null);

// // // //     useEffect(() => {
// // // //         const storedToken = localStorage.getItem('token');
// // // //         if (storedToken) {
// // // //             try {
// // // //               const decodedToken = jwtDecode(storedToken);
// // // //               setUser(decodedToken)
// // // //             }
// // // //             catch (error) {
// // // //               console.log('error', error)
// // // //             }
// // // //           }
// // // //     }, []);
// // // //   // Update localStorage whenever cartItems changes
// // // //   useEffect(() => {
// // // //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// // // //   }, [cartItems]);

// // // //   const clearCart = () => {
// // // //     setCartItems([]);
// // // //     localStorage.removeItem('cartItems'); // Clear cart from localStorage
// // // //   };


// // // //   // const addToCart = async (item) => {
// // // //   //   if (!token) {
// // // //   //     console.error('No token found in localStorage');
// // // //   //     return;
// // // //   //   }
// // // //   //   console.log('Token:', token); // Log the token before making the request
// // // //   //   try {
// // // //   //       const response = await fetch('http://localhost:5000/api/cart', {
// // // //   //           method: 'POST',
// // // //   //           headers: {
// // // //   //               'Content-Type': 'application/json',
// // // //   //               'Authorization': `Bearer ${token}`,
// // // //   //           },
// // // //   //           body: JSON.stringify({ menuItemId: item.id, userId: user.userId, quantity: 1 }),
// // // //   //       });

// // // //   //       if (response.status === 401) {
// // // //   //           handleTokenExpiration();
// // // //   //           return;
// // // //   //       }

// // // //   //       const data = await response.json();
// // // //   //       if (data.success) {
// // // //   //         setCartItems((prevItems) => {
// // // //   //           const existingItem = prevItems.find((i) => i.id === item.id);
// // // //   //           if (existingItem) {
// // // //   //             return prevItems.map((i) =>
// // // //   //               i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
// // // //   //             );
// // // //   //           } else {
// // // //   //             return [...prevItems, { ...item, quantity: 1 }];
// // // //   //           }
// // // //   //         });
// // // //   //       } else {
// // // //   //         console.error('Error adding to cart', data.message);
// // // //   //         alert(data.message);
// // // //   //       }
// // // //   //     } catch (error) {
// // // //   //       console.error('Error adding to cart', error);
// // // //   //     }
// // // //   //   };


// // // //   //   const removeFromCart = async (item) => {
// // // //   //       if (!token) {
// // // //   //           console.error('No token found in localStorage');
// // // //   //           return;
// // // //   //       }
// // // //   //     try {
// // // //   //         const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item.id}`, {
// // // //   //             method: 'DELETE',
// // // //   //             headers: {
// // // //   //                 'Authorization': `Bearer ${token}`,
// // // //   //             },
// // // //   //         });
// // // //   //         if (response.ok) {
// // // //   //           setCartItems((prevItems) =>
// // // //   //             prevItems.filter((cartItem) => cartItem.id !== item.id)
// // // //   //           );
// // // //   //         } else {
// // // //   //           console.error('Error removing from cart', response.message);
// // // //   //         }
// // // //   //     } catch (error) {
// // // //   //         console.error('Error removing from cart', error);
// // // //   //     }
// // // //   // };

// // // //   // const increaseQuantity = async (itemId) => {
// // // //   //   if (!token) {
// // // //   //     console.error('No token found in localStorage');
// // // //   //     return;
// // // //   //   }
// // // //   //   try {
// // // //   //     const response = await fetch('http://localhost:5000/api/cart', {
// // // //   //       method: 'POST',
// // // //   //       headers: {
// // // //   //         'Content-Type': 'application/json',
// // // //   //         'Authorization': `Bearer ${token}`
// // // //   //       },
// // // //   //       body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: 1 }),
// // // //   //     });
// // // //   //     if (response.ok) {
// // // //   //       setCartItems((prevItems) =>
// // // //   //         prevItems.map((i) =>
// // // //   //           i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
// // // //   //         )
// // // //   //       );
// // // //   //     }
// // // //   //     else {
// // // //   //       console.error('Error increasing quantity', response.message)
// // // //   //     }
// // // //   //   } catch (error) {
// // // //   //     console.error('Error increasing quantity', error)
// // // //   //   }

// // // //   // };

// // // //   // const decreaseQuantity = async (itemId) => {
// // // //   //   if (!token) {
// // // //   //     console.error('No token found in localStorage');
// // // //   //     return;
// // // //   //   }
// // // //   //   try {
// // // //   //     const response = await fetch('http://localhost:5000/api/cart', {
// // // //   //       method: 'POST',
// // // //   //       headers: {
// // // //   //         'Content-Type': 'application/json',
// // // //   //         'Authorization': `Bearer ${token}`
// // // //   //       },
// // // //   //       body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: -1 }),
// // // //   //     });
// // // //   //     if (response.ok) {
// // // //   //       setCartItems((prevItems) => {
// // // //   //         const updatedItems = prevItems.map((item) =>
// // // //   //           item.id === itemId && item.quantity > 0
// // // //   //             ? { ...item, quantity: item.quantity - 1 }
// // // //   //             : item
// // // //   //         );
// // // //   //         return updatedItems.filter((item) => item.quantity > 0);
// // // //   //       });
// // // //   //     }
// // // //   //       else {
// // // //   //       console.error('Error decreasing quantity', response.message)
// // // //   //     }
// // // //   //   }
// // // //   //   catch (error) {
// // // //   //     console.error('Error decreasing quantity', error)
// // // //   //   }
// // // //   // };

// // // //   // const addToCart = async (item) => {
// // // //   //   if (!token) {
// // // //   //     console.error('No token found in localStorage');
// // // //   //     return;
// // // //   //   }
// // // //   //   try {
// // // //   //       const response = await fetch('http://localhost:5000/api/cart', {
// // // //   //           method: 'POST',
// // // //   //           headers: {
// // // //   //               'Content-Type': 'application/json',
// // // //   //               'Authorization': `Bearer ${token}`,
// // // //   //           },
// // // //   //           body: JSON.stringify({ menuItemId: item._id, userId: user.userId, quantity: 1 }),
// // // //   //       });

// // // //   //       if (response.status === 401) {
// // // //   //           handleTokenExpiration();
// // // //   //           return;
// // // //   //       }

// // // //   //       const data = await response.json();
// // // //   //       if (data.success) {
// // // //   //         setCartItems((prevItems) => {
// // // //   //           const existingItem = prevItems.find((i) => i.id === item._id);
// // // //   //           if (existingItem) {
// // // //   //             return prevItems.map((i) =>
// // // //   //               i.id === item._id ? { ...i, quantity: i.quantity + 1 } : i
// // // //   //             );
// // // //   //           } else {
// // // //   //             return [...prevItems, { ...item, quantity: 1 }];
// // // //   //           }
// // // //   //         });
// // // //   //       } else {
// // // //   //         console.error('Error adding to cart', data.message);
// // // //   //         alert(data.message);
// // // //   //       }
// // // //   //     } catch (error) {
// // // //   //       console.error('Error adding to cart', error);
// // // //   //     }
// // // //   //   };

// // // //   const addToCart = async (item) => {
// // // //     if (!token) {
// // // //       console.error('No token found in localStorage');
// // // //       return;
// // // //     }
// // // //     try {
// // // //         const response = await fetch('http://localhost:5000/api/cart', {
// // // //             method: 'POST',
// // // //             headers: {
// // // //                 'Content-Type': 'application/json',
// // // //                 'Authorization': `Bearer ${token}`,
// // // //             },
// // // //             body: JSON.stringify({ menuItemId: item._id, userId: user.userId, quantity: 1 }),
// // // //         });

// // // //         if (response.status === 401) {
// // // //             handleTokenExpiration();
// // // //             return;
// // // //         }

// // // //         const data = await response.json();
// // // //         if (!data.success) {
// // // //             console.error('Error adding to cart', data.message);
// // // //             alert(data.message);
// // // //          }
// // // //       } catch (error) {
// // // //         console.error('Error adding to cart', error);
// // // //       }
// // // //     };

// // // //   // const removeFromCart = async (item) => {
// // // //   //       if (!token) {
// // // //   //           console.error('No token found in localStorage');
// // // //   //           return;
// // // //   //       }
// // // //   //     try {
// // // //   //         const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item._id}`, {
// // // //   //             method: 'DELETE',
// // // //   //             headers: {
// // // //   //                 'Authorization': `Bearer ${token}`,
// // // //   //             },
// // // //   //         });
// // // //   //         if (response.ok) {
// // // //   //           setCartItems((prevItems) =>
// // // //   //             prevItems.filter((cartItem) => cartItem.id !== item._id)
// // // //   //           );
// // // //   //         } else {
// // // //   //           console.error('Error removing from cart', response.message);
// // // //   //         }
// // // //   //     } catch (error) {
// // // //   //         console.error('Error removing from cart', error);
// // // //   //     }
// // // //   // };


// // // //   const removeFromCart = async (item) => {
// // // //     if (!token) {
// // // //         console.error('No token found in localStorage');
// // // //         return;
// // // //     }
// // // //   try {
// // // //       const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item._id}`, {
// // // //           method: 'DELETE',
// // // //           headers: {
// // // //               'Authorization': `Bearer ${token}`,
// // // //           },
// // // //       });
// // // //       if (!response.ok) {
// // // //         console.error('Error removing from cart', response.message);
// // // //       }
// // // //   } catch (error) {
// // // //       console.error('Error removing from cart', error);
// // // //   }
// // // // };

// // // //   // const increaseQuantity = async (itemId) => {
// // // //   //   if (!token) {
// // // //   //     console.error('No token found in localStorage');
// // // //   //     return;
// // // //   //   }
// // // //   //   try {
// // // //   //     const response = await fetch('http://localhost:5000/api/cart', {
// // // //   //       method: 'POST',
// // // //   //       headers: {
// // // //   //         'Content-Type': 'application/json',
// // // //   //         'Authorization': `Bearer ${token}`
// // // //   //       },
// // // //   //       body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: 1 }),
// // // //   //     });
// // // //   //     if (response.ok) {
// // // //   //       setCartItems((prevItems) =>
// // // //   //         prevItems.map((i) =>
// // // //   //           i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
// // // //   //         )
// // // //   //       );
// // // //   //     }
// // // //   //     else {
// // // //   //       console.error('Error increasing quantity', response.message)
// // // //   //     }
// // // //   //   } catch (error) {
// // // //   //     console.error('Error increasing quantity', error)
// // // //   //   }

// // // //   // };


// // // //   const increaseQuantity = async (itemId) => {
// // // //     if (!token) {
// // // //       console.error('No token found in localStorage');
// // // //       return;
// // // //     }
// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/api/cart', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //           'Authorization': `Bearer ${token}`
// // // //         },
// // // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: 1 }),
// // // //       });
// // // //       if (!response.ok) {
// // // //         console.error('Error increasing quantity', response.message)
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error increasing quantity', error)
// // // //     }
   
// // // //    };

// // // //   // const decreaseQuantity = async (itemId) => {
// // // //   //   if (!token) {
// // // //   //     console.error('No token found in localStorage');
// // // //   //     return;
// // // //   //   }
// // // //   //   try {
// // // //   //     const response = await fetch('http://localhost:5000/api/cart', {
// // // //   //       method: 'POST',
// // // //   //       headers: {
// // // //   //         'Content-Type': 'application/json',
// // // //   //         'Authorization': `Bearer ${token}`
// // // //   //       },
// // // //   //       body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: -1 }),
// // // //   //     });
// // // //   //     if (response.ok) {
// // // //   //       setCartItems((prevItems) => {
// // // //   //         const updatedItems = prevItems.map((item) =>
// // // //   //           item.id === itemId && item.quantity > 0
// // // //   //             ? { ...item, quantity: item.quantity - 1 }
// // // //   //             : item
// // // //   //         );
// // // //   //         return updatedItems.filter((item) => item.quantity > 0);
// // // //   //       });
// // // //   //     }
// // // //   //       else {
// // // //   //       console.error('Error decreasing quantity', response.message)
// // // //   //     }
// // // //   //   }
// // // //   //   catch (error) {
// // // //   //     console.error('Error decreasing quantity', error)
// // // //   //   }
// // // //   // };


// // // //   const decreaseQuantity = async (itemId) => {
// // // //     if (!token) {
// // // //       console.error('No token found in localStorage');
// // // //       return;
// // // //     }
// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/api/cart', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //           'Authorization': `Bearer ${token}`
// // // //         },
// // // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: -1 }),
// // // //       });
// // // //       if (!response.ok) {
// // // //          console.error('Error decreasing quantity', response.message)
// // // //       }
// // // //     }
// // // //     catch (error) {
// // // //       console.error('Error decreasing quantity', error)
// // // //     }
// // // //   };

// // // //   const login = async (email, password) => {
// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/api/auth/login', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({ email, password }),
// // // //       });

// // // //       if (response.ok) {
// // // //           const data = await response.json();
// // // //           const decodedToken = jwtDecode(data.token);
// // // //           localStorage.setItem('token', data.token); // Store token
// // // //           setToken(data.token);
// // // //           setUser(decodedToken);
// // // //         return true;
// // // //       }
// // // //       return false;
// // // //     } catch (error) {
// // // //       console.error('Login failed', error);
// // // //       return false;
// // // //     }
// // // //   };

// // // //   const handleTokenExpiration = () => {
// // // //     alert('Session expired. Please log in again.');
// // // //     logout();
// // // //     window.location.href = '/login'; // Redirect to login page
// // // //   };

// // // //   const register = async (email, password) => {
// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/api/auth/register', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({ name: email.split('@')[0], email, password }),
// // // //       });
// // // //       if (response.ok) {
// // // //         return true;
// // // //       }
// // // //       return false
// // // //     } catch (error) {
// // // //       console.error('Registration failed', error);
// // // //       return false
// // // //     }
// // // //   };


// // // //   const logout = () => {
// // // //     setUser(null);
// // // //     setToken(null);
// // // //     localStorage.removeItem('token');
// // // //   };

// // // //   return (
// // // //     <CartContext.Provider 
// // // //       value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, user, login, register, logout, token, clearCart, }} >
// // // //       {children}
// // // //     </CartContext.Provider>
// // // //   );
// // // // };



// // // import React, { createContext, useContext, useState, useEffect } from 'react';
// // // import { jwtDecode } from 'jwt-decode';

// // // const CartContext = createContext();

// // // export const useCart = () => useContext(CartContext);

// // // export const CartProvider = ({ children }) => {
// // //   // Initialize cartItems from localStorage or an empty array
// // //   const [cartItems, setCartItems] = useState(() => {
// // //     const storedCart = localStorage.getItem('cartItems');
// // //     return storedCart ? JSON.parse(storedCart) : [];
// // //   });

// // //   // Initialize user from localStorage or null
// // //   const [user, setUser] = useState(null);
// // //   const [token, setToken] = useState(() => localStorage.getItem('token') || null);

// // //     useEffect(() => {
// // //         const storedToken = localStorage.getItem('token');
// // //         if (storedToken) {
// // //             try {
// // //               const decodedToken = jwtDecode(storedToken);
// // //               setUser(decodedToken)
// // //             }
// // //             catch (error) {
// // //               console.log('error', error)
// // //             }
// // //           }
// // //     }, []);
// // //   // Update localStorage whenever cartItems changes
// // //   useEffect(() => {
// // //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// // //   }, [cartItems]);

// // //   const clearCart = () => {
// // //     setCartItems([]);
// // //     localStorage.removeItem('cartItems'); // Clear cart from localStorage
// // //   };

// // //  const addToCart = async (item) => {
// // //     if (!token) {
// // //       console.error('No token found in localStorage');
// // //       return;
// // //     }
// // //     try {
// // //         const response = await fetch('http://localhost:5000/api/cart', {
// // //             method: 'POST',
// // //             headers: {
// // //                 'Content-Type': 'application/json',
// // //                 'Authorization': `Bearer ${token}`,
// // //             },
// // //             body: JSON.stringify({ menuItemId: item._id, userId: user.userId, quantity: 1 }),
// // //         });

// // //         if (response.status === 401) {
// // //             handleTokenExpiration();
// // //             return;
// // //         }

// // //         const data = await response.json();
// // //         if (!data.success) {
// // //             console.error('Error adding to cart', data.message);
// // //             alert(data.message);
// // //          } else {
// // //              setCartItems((prevItems) => {
// // //                const existingItem = prevItems.find((i) => i.id === item._id);
// // //                  if (existingItem) {
// // //                     return prevItems.map((i) =>
// // //                       i.id === item._id ? { ...i, quantity: i.quantity + 1 } : i
// // //                       );
// // //                   } else {
// // //                       return [...prevItems, { ...item, quantity: 1 }];
// // //                     }
// // //                });
// // //            }
// // //       } catch (error) {
// // //         console.error('Error adding to cart', error);
// // //       }
// // //     };
// // //   const removeFromCart = async (item) => {
// // //         if (!token) {
// // //             console.error('No token found in localStorage');
// // //             return;
// // //         }
// // //       try {
// // //           const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item._id}`, {
// // //               method: 'DELETE',
// // //               headers: {
// // //                   'Authorization': `Bearer ${token}`,
// // //               },
// // //           });
// // //           if (!response.ok) {
// // //             console.error('Error removing from cart', response.message);
// // //           } else {
// // //               setCartItems((prevItems) =>
// // //                  prevItems.filter((cartItem) => cartItem.id !== item._id)
// // //                );
// // //            }
// // //       } catch (error) {
// // //           console.error('Error removing from cart', error);
// // //       }
// // //   };

// // //   const increaseQuantity = async (itemId) => {
// // //     if (!token) {
// // //       console.error('No token found in localStorage');
// // //       return;
// // //     }
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/cart', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           'Authorization': `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: 1 }),
// // //       });
// // //       if (!response.ok) {
// // //         console.error('Error increasing quantity', response.message)
// // //       } else {
// // //           setCartItems((prevItems) =>
// // //                 prevItems.map((i) =>
// // //                   i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
// // //                 )
// // //            );
// // //          }
// // //     } catch (error) {
// // //       console.error('Error increasing quantity', error)
// // //     }

// // //   };

// // //   const decreaseQuantity = async (itemId) => {
// // //     if (!token) {
// // //       console.error('No token found in localStorage');
// // //       return;
// // //     }
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/cart', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           'Authorization': `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: -1 }),
// // //       });
// // //       if (!response.ok) {
// // //         console.error('Error decreasing quantity', response.message)
// // //       } else {
// // //           setCartItems((prevItems) => {
// // //               const updatedItems = prevItems.map((item) =>
// // //                   item.id === itemId && item.quantity > 0
// // //                       ? { ...item, quantity: item.quantity - 1 }
// // //                       : item
// // //                   );
// // //                   return updatedItems.filter((item) => item.quantity > 0);
// // //               });
// // //            }
// // //     }
// // //     catch (error) {
// // //       console.error('Error decreasing quantity', error)
// // //     }
// // //   };


// // //   const login = async (email, password) => {
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/auth/login', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ email, password }),
// // //       });

// // //       if (response.ok) {
// // //           const data = await response.json();
// // //           const decodedToken = jwtDecode(data.token);
// // //           localStorage.setItem('token', data.token); // Store token
// // //           setToken(data.token);
// // //           setUser(decodedToken);
// // //         return true;
// // //       }
// // //       return false;
// // //     } catch (error) {
// // //       console.error('Login failed', error);
// // //       return false;
// // //     }
// // //   };

// // //   const handleTokenExpiration = () => {
// // //     alert('Session expired. Please log in again.');
// // //     logout();
// // //     window.location.href = '/login'; // Redirect to login page
// // //   };

// // //   const register = async (email, password) => {
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/auth/register', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ name: email.split('@')[0], email, password }),
// // //       });
// // //       if (response.ok) {
// // //         return true;
// // //       }
// // //       return false
// // //     } catch (error) {
// // //       console.error('Registration failed', error);
// // //       return false
// // //     }
// // //   };


// // //   const logout = () => {
// // //     setUser(null);
// // //     setToken(null);
// // //     localStorage.removeItem('token');
// // //   };

// // //   return (
// // //     <CartContext.Provider 
// // //       value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, user, login, register, logout, token, clearCart, }} >
// // //       {children}
// // //     </CartContext.Provider>
// // //   );
// // // };



// // // import React, { createContext, useContext, useState, useEffect } from 'react';
// // // import { jwtDecode } from 'jwt-decode';

// // // const CartContext = createContext();

// // // export const useCart = () => useContext(CartContext);

// // // export const CartProvider = ({ children }) => {
// // //   // Initialize cartItems from localStorage or an empty array
// // //   const [cartItems, setCartItems] = useState(() => {
// // //     const storedCart = localStorage.getItem('cartItems');
// // //     return storedCart ? JSON.parse(storedCart) : [];
// // //   });

// // //   // Initialize user from localStorage or null
// // //   const [user, setUser] = useState(null);
// // //   const [token, setToken] = useState(() => localStorage.getItem('token') || null);

// // //     useEffect(() => {
// // //         const storedToken = localStorage.getItem('token');
// // //         if (storedToken) {
// // //             try {
// // //               const decodedToken = jwtDecode(storedToken);
// // //               setUser(decodedToken)
// // //             }
// // //             catch (error) {
// // //               console.log('error', error)
// // //             }
// // //           }
// // //     }, []);
// // //   // Update localStorage whenever cartItems changes
// // //   useEffect(() => {
// // //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// // //   }, [cartItems]);

// // //   const clearCart = () => {
// // //     setCartItems([]);
// // //     localStorage.removeItem('cartItems'); // Clear cart from localStorage
// // //   };

// // // const addToCart = async (item) => {
// // //     if (!token) {
// // //       console.error('No token found in localStorage');
// // //       return;
// // //     }
// // //     try {
// // //         const response = await fetch('http://localhost:5000/api/cart', {
// // //             method: 'POST',
// // //             headers: {
// // //                 'Content-Type': 'application/json',
// // //                 'Authorization': `Bearer ${token}`,
// // //             },
// // //             body: JSON.stringify({ menuItemId: item._id, userId: user.userId, quantity: 1 }),
// // //         });

// // //         if (response.status === 401) {
// // //             handleTokenExpiration();
// // //             return;
// // //         }

// // //         const data = await response.json();
// // //         if (!data.success) {
// // //             console.error('Error adding to cart', data.message);
// // //             alert(data.message);
// // //          } else {
// // //              setCartItems((prevItems) => {
// // //                const existingItem = prevItems.find((i) => i.id === item._id);
// // //                  if (existingItem) {
// // //                     return prevItems.map((i) =>
// // //                       i.id === item._id ? { ...i, quantity: i.quantity + 1 } : i
// // //                       );
// // //                   } else {
// // //                       return [...prevItems, { ...item, quantity: 1 }];
// // //                     }
// // //                });
// // //            }
// // //       } catch (error) {
// // //         console.error('Error adding to cart', error);
// // //       }
// // //     };
// // //   const removeFromCart = async (item) => {
// // //         if (!token) {
// // //             console.error('No token found in localStorage');
// // //             return;
// // //         }
// // //       try {
// // //           const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item._id}`, {
// // //               method: 'DELETE',
// // //               headers: {
// // //                   'Authorization': `Bearer ${token}`,
// // //               },
// // //           });
// // //           if (!response.ok) {
// // //             console.error('Error removing from cart', response.message);
// // //           } else {
// // //               setCartItems((prevItems) =>
// // //                  prevItems.filter((cartItem) => cartItem.id !== item._id)
// // //                );
// // //            }
// // //       } catch (error) {
// // //           console.error('Error removing from cart', error);
// // //       }
// // //   };

// // //   const increaseQuantity = async (itemId) => {
// // //     if (!token) {
// // //       console.error('No token found in localStorage');
// // //       return;
// // //     }
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/cart', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           'Authorization': `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: 1 }),
// // //       });
// // //       if (!response.ok) {
// // //         console.error('Error increasing quantity', response.message)
// // //       } else {
// // //           setCartItems((prevItems) =>
// // //                 prevItems.map((i) =>
// // //                   i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
// // //                 )
// // //            );
// // //          }
// // //     } catch (error) {
// // //       console.error('Error increasing quantity', error)
// // //     }

// // //   };

// // //   const decreaseQuantity = async (itemId) => {
// // //     if (!token) {
// // //       console.error('No token found in localStorage');
// // //       return;
// // //     }
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/cart', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           'Authorization': `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: -1 }),
// // //       });
// // //       if (!response.ok) {
// // //          console.error('Error decreasing quantity', response.message)
// // //       } else {
// // //           setCartItems((prevItems) => {
// // //               const updatedItems = prevItems.map((item) =>
// // //                   item.id === itemId && item.quantity > 0
// // //                       ? { ...item, quantity: item.quantity - 1 }
// // //                       : item
// // //                   );
// // //                   return updatedItems.filter((item) => item.quantity > 0);
// // //               });
// // //            }
// // //     }
// // //     catch (error) {
// // //       console.error('Error decreasing quantity', error)
// // //     }
// // //   };


// // //   const login = async (email, password) => {
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/auth/login', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ email, password }),
// // //       });

// // //       if (response.ok) {
// // //           const data = await response.json();
// // //           const decodedToken = jwtDecode(data.token);
// // //           localStorage.setItem('token', data.token); // Store token
// // //           setToken(data.token);
// // //           setUser(decodedToken);
// // //         return true;
// // //       }
// // //       return false;
// // //     } catch (error) {
// // //       console.error('Login failed', error);
// // //       return false;
// // //     }
// // //   };

// // //   const handleTokenExpiration = () => {
// // //     alert('Session expired. Please log in again.');
// // //     logout();
// // //     window.location.href = '/login'; // Redirect to login page
// // //   };

// // //   const register = async (email, password) => {
// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/auth/register', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ name: email.split('@')[0], email, password }),
// // //       });
// // //       if (response.ok) {
// // //         return true;
// // //       }
// // //       return false
// // //     } catch (error) {
// // //       console.error('Registration failed', error);
// // //       return false
// // //     }
// // //   };


// // //   const logout = () => {
// // //     setUser(null);
// // //     setToken(null);
// // //     localStorage.removeItem('token');
// // //   };

// // //   return (
// // //     <CartContext.Provider 
// // //       value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, user, login, register, logout, token, clearCart, }} >
// // //       {children}
// // //     </CartContext.Provider>
// // //   );
// // // };




// // import React, { createContext, useContext, useState, useEffect } from 'react';
// // import { jwtDecode } from 'jwt-decode';

// // const CartContext = createContext();

// // export const useCart = () => useContext(CartContext);

// // export const CartProvider = ({ children }) => {
// //     // Initialize cartItems from localStorage or an empty array
// //     const [cartItems, setCartItems] = useState(() => {
// //         const storedCart = localStorage.getItem('cartItems');
// //         return storedCart ? JSON.parse(storedCart) : [];
// //     });

// //     // Initialize user from localStorage or null
// //     const [user, setUser] = useState(null);
// //     const [token, setToken] = useState(() => localStorage.getItem('token') || null);

// //     useEffect(() => {
// //         const storedToken = localStorage.getItem('token');
// //         if (storedToken) {
// //             try {
// //                 const decodedToken = jwtDecode(storedToken);
// //                 setUser(decodedToken)
// //             }
// //             catch (error) {
// //                 console.log('error', error)
// //             }
// //         }
// //     }, []);
// //     // Update localStorage whenever cartItems changes
// //     useEffect(() => {
// //         localStorage.setItem('cartItems', JSON.stringify(cartItems));
// //     }, [cartItems]);

// //     const clearCart = () => {
// //         setCartItems([]);
// //         localStorage.removeItem('cartItems'); // Clear cart from localStorage
// //     };

// //     const addToCart = async (item) => {
// //         if (!token) {
// //             console.error('No token found in localStorage');
// //             return;
// //         }
// //         try {
// //             const response = await fetch('http://localhost:5000/api/cart', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': `Bearer ${token}`,
// //                 },
// //                 body: JSON.stringify({ menuItemId: item._id, userId: user.userId, quantity: 1 }),
// //             });

// //             if (response.status === 401) {
// //                 handleTokenExpiration();
// //                 return;
// //             }

// //             const data = await response.json();
// //             if (!data.success) {
// //                 console.error('Error adding to cart', data.message);
// //                 alert(data.message);
// //             } else {
// //                 setCartItems((prevItems) => {
// //                     const existingItem = prevItems.find((i) => i.id === item._id);
// //                     if (existingItem) {
// //                         return prevItems.map((i) =>
// //                             i.id === item._id ? { ...i, quantity: i.quantity + 1 } : i
// //                         );
// //                     } else {
// //                         return [...prevItems, { ...item, quantity: 1 }];
// //                     }
// //                 });
// //             }
// //         } catch (error) {
// //             console.error('Error adding to cart', error);
// //         }
// //     };
// //     const removeFromCart = async (item) => {
// //         if (!token) {
// //             console.error('No token found in localStorage');
// //             return;
// //         }
// //         try {
// //             const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item._id}`, {
// //                 method: 'DELETE',
// //                 headers: {
// //                     'Authorization': `Bearer ${token}`,
// //                 },
// //             });
// //             if (!response.ok) {
// //                 console.error('Error removing from cart', response.message);
// //             } else {
// //                 setCartItems((prevItems) =>
// //                     prevItems.filter((cartItem) => cartItem.id !== item._id)
// //                 );
// //             }
// //         } catch (error) {
// //             console.error('Error removing from cart', error);
// //         }
// //     };

// //     const increaseQuantity = async (itemId) => {
// //         if (!token) {
// //             console.error('No token found in localStorage');
// //             return;
// //         }
// //         try {
// //             const response = await fetch('http://localhost:5000/api/cart', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': `Bearer ${token}`
// //                 },
// //                 body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: 1 }),
// //             });
// //             if (!response.ok) {
// //                 console.error('Error increasing quantity', response.message)
// //             } else {
// //                 setCartItems((prevItems) =>
// //                     prevItems.map((i) =>
// //                         i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
// //                     )
// //                 );
// //             }
// //         } catch (error) {
// //             console.error('Error increasing quantity', error)
// //         }

// //     };

// //     const decreaseQuantity = async (itemId) => {
// //         if (!token) {
// //             console.error('No token found in localStorage');
// //             return;
// //         }
// //         try {
// //             const response = await fetch('http://localhost:5000/api/cart', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': `Bearer ${token}`
// //                 },
// //                 body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: -1 }),
// //             });
// //             if (!response.ok) {
// //                 console.error('Error decreasing quantity', response.message)
// //             } else {
// //                 setCartItems((prevItems) => {
// //                     const updatedItems = prevItems.map((item) =>
// //                         item.id === itemId && item.quantity > 0
// //                             ? { ...item, quantity: item.quantity - 1 }
// //                             : item
// //                     );
// //                     return updatedItems.filter((item) => item.quantity > 0);
// //                 });
// //             }
// //         }
// //         catch (error) {
// //             console.error('Error decreasing quantity', error)
// //         }
// //     };


// //     const login = async (email, password) => {
// //         try {
// //             const response = await fetch('http://localhost:5000/api/auth/login', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({ email, password }),
// //             });

// //             if (response.ok) {
// //                 const data = await response.json();
// //                 const decodedToken = jwtDecode(data.token);
// //                 localStorage.setItem('token', data.token); // Store token
// //                 setToken(data.token);
// //                 setUser(decodedToken);
// //                 return true;
// //             }
// //             return false;
// //         } catch (error) {
// //             console.error('Login failed', error);
// //             return false;
// //         }
// //     };

// //     const handleTokenExpiration = () => {
// //         alert('Session expired. Please log in again.');
// //         logout();
// //         window.location.href = '/login'; // Redirect to login page
// //     };

// //     const register = async (email, password) => {
// //         try {
// //             const response = await fetch('http://localhost:5000/api/auth/register', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({ name: email.split('@')[0], email, password }),
// //             });
// //             if (response.ok) {
// //                 return true;
// //             }
// //             return false
// //         } catch (error) {
// //             console.error('Registration failed', error);
// //             return false
// //         }
// //     };


// //     const logout = () => {
// //         setUser(null);
// //         setToken(null);
// //         localStorage.removeItem('token');
// //     };

// //     return (
// //         <CartContext.Provider
// //             value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, user, login, register, logout, token, clearCart, }} >
// //             {children}
// //         </CartContext.Provider>
// //     );
// // };
// // export default CartProvider;



// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { jwtDecode } from 'jwt-decode';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   // Initialize cartItems from localStorage or an empty array
//   const [cartItems, setCartItems] = useState(() => {
//     const storedCart = localStorage.getItem('cartItems');
//     return storedCart ? JSON.parse(storedCart) : [];
//   });

//   // Initialize user from localStorage or null
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(() => localStorage.getItem('token') || null);

//     useEffect(() => {
//         const storedToken = localStorage.getItem('token');
//         if (storedToken) {
//             try {
//               const decodedToken = jwtDecode(storedToken);
//               setUser(decodedToken)
//             }
//             catch (error) {
//               console.log('error', error)
//             }
//           }
//     }, []);
//   // Update localStorage whenever cartItems changes
//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem('cartItems'); // Clear cart from localStorage
//   };

//   const addToCart = async (item) => {
//     if (!token) {
//       console.error('No token found in localStorage');
//       return;
//     }
//     try {
//         const response = await fetch('http://localhost:5000/api/cart', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`,
//             },
//             body: JSON.stringify({ menuItemId: item._id, userId: user.userId, quantity: 1 }),
//         });

//         if (response.status === 401) {
//             handleTokenExpiration();
//             return;
//         }

//         const data = await response.json();
//         if (!data.success) {
//             console.error('Error adding to cart', data.message);
//             alert(data.message);
//          } else {
//             setCartItems((prevItems) => {
//                 const existingItem = prevItems.find((i) => i.id === item._id);
//                 if (existingItem) {
//                     return prevItems.map((i) =>
//                         i.id === item._id ? { ...i, quantity: i.quantity + 1 } : i
//                     );
//                 } else {
//                     return [...prevItems, { ...item, quantity: 1 }];
//                 }
//            });
//          }
//       } catch (error) {
//         console.error('Error adding to cart', error);
//       }
//     };
//   const removeFromCart = async (item) => {
//         if (!token) {
//             console.error('No token found in localStorage');
//             return;
//         }
//       try {
//           const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item._id}`, {
//               method: 'DELETE',
//               headers: {
//                   'Authorization': `Bearer ${token}`,
//               },
//           });
//           if (!response.ok) {
//             console.error('Error removing from cart', response.message);
//           } else {
//               setCartItems((prevItems) =>
//                  prevItems.filter((cartItem) => cartItem.id !== item._id)
//                );
//            }
//       } catch (error) {
//           console.error('Error removing from cart', error);
//       }
//   };

//   const increaseQuantity = async (itemId) => {
//     if (!token) {
//       console.error('No token found in localStorage');
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:5000/api/cart', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: 1 }),
//       });
//       if (!response.ok) {
//         console.error('Error increasing quantity', response.message)
//       } else {
//           setCartItems((prevItems) =>
//                 prevItems.map((i) =>
//                   i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
//                 )
//            );
//          }
//     } catch (error) {
//       console.error('Error increasing quantity', error)
//     }

//   };

//   const decreaseQuantity = async (itemId) => {
//     if (!token) {
//       console.error('No token found in localStorage');
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:5000/api/cart', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: -1 }),
//       });
//       if (!response.ok) {
//          console.error('Error decreasing quantity', response.message)
//       } else {
//           setCartItems((prevItems) => {
//               const updatedItems = prevItems.map((item) =>
//                   item.id === itemId && item.quantity > 0
//                       ? { ...item, quantity: item.quantity - 1 }
//                       : item
//                   );
//                   return updatedItems.filter((item) => item.quantity > 0);
//               });
//            }
//     }
//     catch (error) {
//       console.error('Error decreasing quantity', error)
//     }
//   };


//   const login = async (email, password) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//           const data = await response.json();
//           const decodedToken = jwtDecode(data.token);
//           localStorage.setItem('token', data.token); // Store token
//           setToken(data.token);
//           setUser(decodedToken);
//         return true;
//       }
//       return false;
//     } catch (error) {
//       console.error('Login failed', error);
//       return false;
//     }
//   };

//   const handleTokenExpiration = () => {
//     alert('Session expired. Please log in again.');
//     logout();
//     window.location.href = '/login'; // Redirect to login page
//   };

//   const register = async (email, password) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name: email.split('@')[0], email, password }),
//       });
//       if (response.ok) {
//         return true;
//       }
//       return false
//     } catch (error) {
//       console.error('Registration failed', error);
//       return false
//     }
//   };


//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, user, login, register, logout, token, clearCart, }} >
//       {children}
//     </CartContext.Provider>
//   );
// };
// export default CartProvider;





import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    // Initialize cartItems from localStorage or an empty array
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Initialize user from localStorage or null
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => localStorage.getItem('token') || null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            try {
                const decodedToken = jwtDecode(storedToken);
                setUser(decodedToken)
            }
            catch (error) {
                console.log('error', error)
            }
        }
    }, []);
    // Update localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems'); // Clear cart from localStorage
    };

    const addToCart = async (item) => {
        if (!token) {
            console.error('No token found in localStorage');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ menuItemId: item._id, userId: user.userId, quantity: 1 }),
            });

            if (response.status === 401) {
                handleTokenExpiration();
                return;
            }

            const data = await response.json();
            if (!data.success) {
                console.error('Error adding to cart', data.message);
                alert(data.message);
            } else {
                setCartItems((prevItems) => {
                  const existingItem = prevItems.find((i) => i.id === item._id);
                    if (existingItem) {
                        return prevItems.map((i) =>
                            i.id === item._id ? { ...i, quantity: i.quantity + 1 } : i
                         );
                    } else {
                        return [...prevItems, { ...item, quantity: 1 }];
                     }
                });
            }
        } catch (error) {
            console.error('Error adding to cart', error);
        }
    };
    const removeFromCart = async (item) => {
        if (!token) {
            console.error('No token found in localStorage');
            return;
        }
        try {
            const response = await fetch(`http://localhost:5000/api/cart/${user.userId}/${item._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                console.error('Error removing from cart', response.message);
            } else {
                setCartItems((prevItems) =>
                    prevItems.filter((cartItem) => cartItem.id !== item._id)
                );
            }
        } catch (error) {
            console.error('Error removing from cart', error);
        }
    };

    const increaseQuantity = async (itemId) => {
        if (!token) {
            console.error('No token found in localStorage');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: 1 }),
            });
            if (!response.ok) {
                console.error('Error increasing quantity', response.message)
            } else {
                 setCartItems((prevItems) =>
                    prevItems.map((i) =>
                       i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
                    )
               );
             }
        } catch (error) {
            console.error('Error increasing quantity', error)
        }

    };

    const decreaseQuantity = async (itemId) => {
        if (!token) {
            console.error('No token found in localStorage');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ menuItemId: itemId, userId: user.userId, quantity: -1 }),
            });
            if (!response.ok) {
                console.error('Error decreasing quantity', response.message)
            } else {
                setCartItems((prevItems) => {
                    const updatedItems = prevItems.map((item) =>
                        item.id === itemId && item.quantity > 0
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                    return updatedItems.filter((item) => item.quantity > 0);
                });
            }
        }
        catch (error) {
            console.error('Error decreasing quantity', error)
        }
    };


    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const decodedToken = jwtDecode(data.token);
                localStorage.setItem('token', data.token); // Store token
                setToken(data.token);
                setUser(decodedToken);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Login failed', error);
            return false;
        }
    };

    const handleTokenExpiration = () => {
        alert('Session expired. Please log in again.');
        logout();
        window.location.href = '/login'; // Redirect to login page
    };

    const register = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: email.split('@')[0], email, password }),
            });
            if (response.ok) {
                return true;
            }
            return false
        } catch (error) {
            console.error('Registration failed', error);
            return false
        }
    };


    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, user, login, register, logout, token, clearCart, }} >
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;
