
import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calculate total price

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg flex justify-between items-center">
              <span>{item.name} - ${item.price * item.quantity}</span>
              <div className="flex items-center">
                <IconButton
                  onClick={() => {
                    if (item.quantity > 0) {
                      decreaseQuantity(item.id);
                    } else {
                      removeFromCart(item.id); // Remove item if quantity reaches zero
                    }
                  }}
                  color="secondary"
                >
                  <RemoveIcon />
                </IconButton>
                <span className="mx-2">{item.quantity}</span>
                <IconButton
                  onClick={() => increaseQuantity(item.id)}
                  color="primary"
                >
                  <AddIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
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




//######################################

