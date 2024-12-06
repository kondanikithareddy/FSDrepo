// src/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null); // Add user state

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Increase quantity if item already exists in cart
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // const removeFromCart = (itemId) => {
  //   setCartItems((prevItems) => prevItems.filter((i) => i.id !== itemId));
  // };

  // const removeFromCart = (item) => {
  //   setCartItems(prevItems => {
  //     return prevItems.map(cartItem => 
  //       cartItem.id === item.id ? { ...cartItem, quantity: 0 } : cartItem
  //     );
  //   });
  // };

  const removeFromCart = (item) => {
    setCartItems(prevItems => {
      // Filter out the item with the matching ID
      return prevItems.filter(cartItem => cartItem.id !== item.id);
    });
  };



  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  // const decreaseQuantity = (itemId) => {
  //   setCartItems((prevItems) =>
  //     prevItems
  //       .map((i) =>
  //         i.id === itemId && i.quantity > 1
  //           ? { ...i, quantity: i.quantity - 1 }
  //           : i
  //       )
  //       .filter((i) => i.quantity > 0)
  //   );
  // };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) => {
      // First, map through the items to decrease the quantity
      const updatedItems = prevItems.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }  // Decrease the quantity
          : item
      );

      // Now, filter out any items that have a quantity of 0
      // return updatedItems.filter((item) => item.quantity > 0);
      return updatedItems.filter((item) => item.quantity > 0);

    });
  };

  const login = (email, password) => {
    //Simulate login - replace with actual authentication
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userFound = storedUsers.find(u => u.email === email && u.password === password);
    if (userFound) {
      setUser(userFound);
      localStorage.setItem('currentUser', JSON.stringify(userFound));
    } else {
      //Handle login failure (e.g., show error)
    }
  };

  const register = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (storedUsers.find(u => u.email === email)) {
      // Handle registration error - email already exists
      return false; // Indicate failure
    }

    const newUser = { email, password };
    localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setUser(newUser);
    return true; // Indicate success
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };


  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, user, login, register, logout }}
    >
      {children}
    </CartContext.Provider>
  );
};
