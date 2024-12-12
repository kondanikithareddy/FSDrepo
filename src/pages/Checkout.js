// // // // // src/pages/Checkout.js
// // // // import React, { useState } from 'react';
// // // // import { Button, TextField, Typography, Alert } from '@mui/material';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { useCart } from '../CartContext'; // Import the cart context

// // // // const Checkout = () => {
// // // //   const [name, setName] = useState('');
// // // //   const [cardNumber, setCardNumber] = useState('');
// // // //   const [expiration, setExpiration] = useState('');
// // // //   const [cvv, setCvv] = useState('');
// // // //   const [error, setError] = useState('');
// // // //   const navigate = useNavigate(); // Replaced useHistory with useNavigate
// // // //   const { clearCart } = useCart(); // Get the clearCart function


// // // //   const handlePlaceOrder = () => {
// // // //     if (!name || !cardNumber || !expiration || !cvv) {
// // // //       setError('Please provide details');
// // // //     } else {
// // // //       setError('');
// // // //       alert('Order Placed');
// // // //       clearCart(); 
// // // //       navigate('/');
// // // //     }
// // // //   };
  

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <Typography variant="h4" className="mb-4">Checkout</Typography>

// // // //       {error && <Alert severity="error" className="mb-4">{error}</Alert>} {/* Error message */}
// // // //       <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" required />
// // // //       <TextField label="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} fullWidth margin="normal" required />
// // // //       <TextField label="Expiration Date" value={expiration} onChange={(e) => setExpiration(e.target.value)} fullWidth margin="normal" required placeholder="MM/YY" />
// // // //       <TextField label="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} fullWidth margin="normal" required />
// // // //       <Button variant="contained" color="primary" fullWidth onClick={handlePlaceOrder} className="mt-4" >
// // // //         Place Order
// // // //       </Button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Checkout;


// // // //#######################

// // // // src/pages/Checkout.js
// // // import React, { useState } from 'react';
// // // import { Button, TextField, Typography, Alert } from '@mui/material';
// // // import { useNavigate } from 'react-router-dom';
// // // import { useCart } from '../CartContext'; // Import the cart context
// // // import { API_BASE_URL } from '../config';

// // // const Checkout = () => {
// // //     const [name, setName] = useState('');
// // //     const [cardNumber, setCardNumber] = useState('');
// // //     const [expiration, setExpiration] = useState('');
// // //     const [cvv, setCvv] = useState('');
// // //     const [error, setError] = useState('');
// // //     const navigate = useNavigate(); // Replaced useHistory with useNavigate
// // //     const { clearCart, user, cartItems } = useCart(); // Get the clearCart function

// // //     const handlePlaceOrder = async () => {
// // //         if (!name || !cardNumber || !expiration || !cvv) {
// // //             setError('Please provide details');
// // //         } else {
// // //              setError('');
// // //            try {
// // //                const token = localStorage.getItem('token')
// // //                const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
// // //                 await fetch(`${API_BASE_URL}/api/orders`, {
// // //                     method: 'POST',
// // //                     headers: {
// // //                         'Content-Type': 'application/json',
// // //                          'Authorization': `Bearer ${token}`
// // //                     },
// // //                   //   body: JSON.stringify({
// // //                   //        userId: user.userId,
// // //                   //        totalAmount: totalPrice,
// // //                   //       items: cartItems.map(item => ({menuItemId:item.id, quantity:item.quantity}))
// // //                   //  }),

// // //                   body: JSON.stringify({
// // //                     userId: user.userId,
// // //                     totalAmount: totalPrice,
// // //                     items: cartItems.map(item => ({menuItemId:item._id, quantity:item.quantity}))
// // //                 }),
// // //                 });

// // //                 alert('Order Placed');
// // //                clearCart();
// // //                navigate('/');
// // //            } catch (error) {
// // //                setError('Error placing order')
// // //                 console.error('Error placing order', error)
// // //             }
// // //         }
// // //     };

// // //     return (
// // //         <div className="container mx-auto p-4">
// // //             <Typography variant="h4" className="mb-4">Checkout</Typography>

// // //             {error && <Alert severity="error" className="mb-4">{error}</Alert>}
// // //             <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" required />
// // //             <TextField label="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} fullWidth margin="normal" required />
// // //             <TextField label="Expiration Date" value={expiration} onChange={(e) => setExpiration(e.target.value)} fullWidth margin="normal" required placeholder="MM/YY" />
// // //             <TextField label="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} fullWidth margin="normal" required />
// // //             <Button variant="contained" color="primary" fullWidth onClick={handlePlaceOrder} className="mt-4" >
// // //                 Place Order
// // //             </Button>
// // //         </div>
// // //     );
// // // };

// // // export default Checkout;



// // import React, { useState } from 'react';
// // import { Button, TextField, Typography, Alert } from '@mui/material';
// // import { useNavigate } from 'react-router-dom';
// // import { useCart } from '../CartContext'; // Import the cart context
// // import { API_BASE_URL } from '../config';

// // const Checkout = () => {
// //     const [name, setName] = useState('');
// //     const [cardNumber, setCardNumber] = useState('');
// //     const [expiration, setExpiration] = useState('');
// //     const [cvv, setCvv] = useState('');
// //     const [error, setError] = useState('');
// //     const navigate = useNavigate(); // Replaced useHistory with useNavigate
// //     const { clearCart, user, cartItems } = useCart(); // Get the clearCart function

// //     const handlePlaceOrder = async () => {
// //         if (!name || !cardNumber || !expiration || !cvv) {
// //             setError('Please provide details');
// //         } else {
// //              setError('');
// //            try {
// //                const token = localStorage.getItem('token')
// //                const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
// //                console.log(cartItems)
// //                 await fetch(`${API_BASE_URL}/api/orders`, {
// //                     method: 'POST',
// //                     headers: {
// //                         'Content-Type': 'application/json',
// //                          'Authorization': `Bearer ${token}`
// //                     },
// //                     body: JSON.stringify({
// //                          userId: user.userId,
// //                          totalAmount: totalPrice,
// //                         items: cartItems.map(item => ({menuItemId:item._id, quantity:item.quantity}))
// //                    }),
// //                 });

// //                 alert('Order Placed');
// //                clearCart();
// //                navigate('/');
// //            } catch (error) {
// //                setError('Error placing order')
// //                 console.error('Error placing order', error)
// //             }
// //         }
// //     };

// //     return (
// //         <div className="container mx-auto p-4">
// //             <Typography variant="h4" className="mb-4">Checkout</Typography>

// //             {error && <Alert severity="error" className="mb-4">{error}</Alert>}
// //             <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" required />
// //             <TextField label="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} fullWidth margin="normal" required />
// //             <TextField label="Expiration Date" value={expiration} onChange={(e) => setExpiration(e.target.value)} fullWidth margin="normal" required placeholder="MM/YY" />
// //             <TextField label="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} fullWidth margin="normal" required />
// //             <Button variant="contained" color="primary" fullWidth onClick={handlePlaceOrder} className="mt-4" >
// //                 Place Order
// //             </Button>
// //         </div>
// //     );
// // };

// // export default Checkout;



// import React, { useState } from 'react';
// import { Button, TextField, Typography, Alert } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../CartContext'; // Import the cart context
// import { API_BASE_URL } from '../config';

// const Checkout = () => {
//     const [name, setName] = useState('');
//     const [cardNumber, setCardNumber] = useState('');
//     const [expiration, setExpiration] = useState('');
//     const [cvv, setCvv] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate(); // Replaced useHistory with useNavigate
//     const { clearCart, user, cartItems } = useCart(); // Get the clearCart function

//     const handlePlaceOrder = async () => {
//         if (!name || !cardNumber || !expiration || !cvv) {
//             setError('Please provide details');
//         } else {
//              setError('');
//            try {
//                const token = localStorage.getItem('token')
//                const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//                console.log(cartItems)
//                 await fetch(`${API_BASE_URL}/api/orders`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                          'Authorization': `Bearer ${token}`
//                     },
//                     body: JSON.stringify({
//                          userId: user.userId,
//                          totalAmount: totalPrice,
//                         items: cartItems.map(item => ({menuItemId:item._id, quantity:item.quantity}))
//                    }),
//                 });

//                 alert('Order Placed');
//                clearCart();
//                navigate('/');
//            } catch (error) {
//                setError('Error placing order')
//                 console.error('Error placing order', error)
//             }
//         }
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <Typography variant="h4" className="mb-4">Checkout</Typography>

//             {error && <Alert severity="error" className="mb-4">{error}</Alert>}
//             <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" required />
//             <TextField label="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} fullWidth margin="normal" required />
//             <TextField label="Expiration Date" value={expiration} onChange={(e) => setExpiration(e.target.value)} fullWidth margin="normal" required placeholder="MM/YY" />
//             <TextField label="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} fullWidth margin="normal" required />
//             <Button variant="contained" color="primary" fullWidth onClick={handlePlaceOrder} className="mt-4" >
//                 Place Order
//             </Button>
//         </div>
//     );
// };

// export default Checkout;



import React, { useState } from 'react';
import { Button, TextField, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import the cart context
import { API_BASE_URL } from '../config';

const Checkout = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Replaced useHistory with useNavigate
    const { clearCart, user } = useCart(); // Get the clearCart function

    const handlePlaceOrder = async () => {
        if (!name || !cardNumber || !expiration || !cvv) {
            setError('Please provide details');
        } else {
             setError('');
           try {
               const token = localStorage.getItem('token')
               const response =  await fetch(`${API_BASE_URL}/api/cart/${user.userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                 })
               if(response.ok) {
                  const cart = await response.json();
                  const cartItems = cart.items.map(item => ({...item.menuItemId, quantity:item.quantity}));
                   const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
                   await fetch(`${API_BASE_URL}/api/orders`, {
                      method: 'POST',
                     headers: {
                         'Content-Type': 'application/json',
                       'Authorization': `Bearer ${token}`
                       },
                     body: JSON.stringify({
                           userId: user.userId,
                         totalAmount: totalPrice,
                        items: cartItems.map(item => ({menuItemId:item._id, quantity:item.quantity}))
                    }),
                   });
                }
                alert('Order Placed');
               clearCart();
               navigate('/');
           } catch (error) {
               setError('Error placing order')
                console.error('Error placing order', error)
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <Typography variant="h4" className="mb-4">Checkout</Typography>

            {error && <Alert severity="error" className="mb-4">{error}</Alert>}
            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" required />
            <TextField label="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} fullWidth margin="normal" required />
            <TextField label="Expiration Date" value={expiration} onChange={(e) => setExpiration(e.target.value)} fullWidth margin="normal" required placeholder="MM/YY" />
            <TextField label="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} fullWidth margin="normal" required />
            <Button variant="contained" color="primary" fullWidth onClick={handlePlaceOrder} className="mt-4" >
                Place Order
            </Button>
        </div>
    );
};

export default Checkout;