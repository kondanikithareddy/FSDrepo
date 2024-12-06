// src/pages/Checkout.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  const handlePlaceOrder = () => {
    // Simple validation: check if all fields are filled
    if (!name || !cardNumber || !expiration || !cvv) {
      setError('Please provide details'); // Show error message if fields are empty
    } else {
      setError(''); // Clear error
      alert('Order Placed');
      navigate('/'); // Redirect to home page after order placement
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="mb-4">Checkout</Typography>

      {error && <Alert severity="error" className="mb-4">{error}</Alert>} {/* Error message */}
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




//####################################


// import React, { useState } from 'react';
// import { Button, TextField, Typography, Alert } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Checkout = () => {
//   const [name, setName] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiration, setExpiration] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handlePlaceOrder = async () => {
//     if (!name || !cardNumber || !expiration || !cvv) {
//       setError('Please provide all details');
//     } else {
//       setError('');
//       try {
//         const response = await axios.post('/api/checkout', { name, cardNumber, expiration, cvv });
//         alert('Order Placed');
//         navigate('/');
//       } catch (error) {
//         setError('Error placing the order');
//         console.error('Error:', error);
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <Typography variant="h4" className="mb-4">Checkout</Typography>
//       {error && <Alert severity="error" className="mb-4">{error}</Alert>}
//       <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" required />
//       <TextField label="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} fullWidth margin="normal" required />
//       <TextField label="Expiration Date" value={expiration} onChange={(e) => setExpiration(e.target.value)} fullWidth margin="normal" required placeholder="MM/YY" />
//       <TextField label="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} fullWidth margin="normal" required />
//       <Button variant="contained" color="primary" fullWidth onClick={handlePlaceOrder} className="mt-4">
//         Place Order
//       </Button>
//     </div>
//   );
// };

// export default Checkout;
