// // // // src/pages/Register.js
// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // const Register = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [confirmPassword, setConfirmPassword] = useState('');
// // //   const navigate = useNavigate();

// // //   const handleRegister = (e) => {
// // //     e.preventDefault();
// // //     // Add registration logic here (e.g., validation and storing user data)
// // //     navigate('/login'); // Redirect to login after successful registration
// // //   };

// // //   return (
// // //     <div className="flex justify-center items-center h-screen bg-gray-100">
// // //       <form className="bg-white p-8 rounded shadow-md w-80">
// // //         <h2 className="text-2xl font-bold mb-6">Register</h2>
// // //         <div className="mb-4">
// // //           <label className="block text-gray-700">Email</label>
// // //           <input
// // //             type="email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             className="w-full px-3 py-2 border rounded"
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block text-gray-700">Password</label>
// // //           <input
// // //             type="password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             className="w-full px-3 py-2 border rounded"
// // //           />
// // //         </div>
// // //         <div className="mb-6">
// // //           <label className="block text-gray-700">Confirm Password</label>
// // //           <input
// // //             type="password"
// // //             value={confirmPassword}
// // //             onChange={(e) => setConfirmPassword(e.target.value)}
// // //             className="w-full px-3 py-2 border rounded"
// // //           />
// // //         </div>
// // //         <button onClick={handleRegister} className="bg-green-500 text-white w-full py-2 rounded">Register</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Register;


// // // // src/pages/Register.js
// // // import React, { useState } from 'react';
// // // import { useNavigate, Link } from 'react-router-dom';
// // // import { useCart } from '../CartContext';

// // // const Register = () => {
// // //     const [email, setEmail] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [confirmPassword, setConfirmPassword] = useState('');
// // //     const [error, setError] = useState('');
// // //     const navigate = useNavigate();
// // //     const { register } = useCart();

// // //     const handleRegister = (e) => {
// // //         e.preventDefault();

// // //         if (password !== confirmPassword) {
// // //             setError('Passwords do not match');
// // //             return;
// // //         }
// // //        const registered = register(email, password);
// // //         if (registered) {
// // //             navigate('/login');
// // //         } else {
// // //             setError('Email already exists')
// // //         }
// // //     };

// // //     return (
// // //         <div className="flex justify-center items-center h-screen bg-gray-100">
// // //             <form className="bg-white p-8 rounded shadow-md w-80">
// // //                 <h2 className="text-2xl font-bold mb-6">Register</h2>
// // //                 {error && <p className="text-red-500 mb-4">{error}</p>}
// // //                 <div className="mb-4">
// // //                     <label className="block text-gray-700">Email</label>
// // //                     <input
// // //                         type="email"
// // //                         value={email}
// // //                         onChange={(e) => setEmail(e.target.value)}
// // //                         className="w-full px-3 py-2 border rounded"
// // //                     />
// // //                 </div>
// // //                 <div className="mb-4">
// // //                     <label className="block text-gray-700">Password</label>
// // //                     <input
// // //                         type="password"
// // //                         value={password}
// // //                         onChange={(e) => setPassword(e.target.value)}
// // //                         className="w-full px-3 py-2 border rounded"
// // //                     />
// // //                 </div>
// // //                 <div className="mb-6">
// // //                     <label className="block text-gray-700">Confirm Password</label>
// // //                     <input
// // //                         type="password"
// // //                         value={confirmPassword}
// // //                         onChange={(e) => setConfirmPassword(e.target.value)}
// // //                         className="w-full px-3 py-2 border rounded"
// // //                     />
// // //                 </div>
// // //                  <div className="flex justify-between">
// // //                     <button onClick={handleRegister} className="bg-green-500 text-white py-2 rounded w-full">Register</button>
// // //                     <Link to="/login" className="text-blue-500 hover:underline ml-2">Login</Link>
// // //                 </div>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default Register;


// // // src/pages/Register.js
// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { useCart } from '../CartContext';
// // import { Box, TextField, Button, Typography, Container, Alert, Stack } from '@mui/material';

// // const Register = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [confirmPassword, setConfirmPassword] = useState('');
// //     const [error, setError] = useState('');
// //     const navigate = useNavigate();
// //     const { register } = useCart();

// //     const handleRegister = (e) => {
// //         e.preventDefault();

// //         if (password !== confirmPassword) {
// //             setError('Passwords do not match');
// //             return;
// //         }
// //         const registered = register(email, password);
// //         if (registered) {
// //             navigate('/login');
// //         } else {
// //             setError('Email already exists');
// //         }
// //     };

// //     return (
// //         <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
// //             <Box
// //                 component="form"
// //                 onSubmit={handleRegister}
// //                 sx={{
// //                     backgroundColor: 'white',
// //                     padding: 4,
// //                     borderRadius: 2,
// //                     boxShadow: 3,
// //                     width: '100%',
// //                     maxWidth: 400
// //                 }}
// //             >
// //                 <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
// //                     Register
// //                 </Typography>

// //                 {error && (
// //                     <Alert severity="error" sx={{ marginBottom: 2 }}>
// //                         {error}
// //                     </Alert>
// //                 )}

// //                 <Stack spacing={3}>
// //                     <TextField
// //                         label="Email"
// //                         type="email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         fullWidth
// //                         required
// //                     />
// //                     <TextField
// //                         label="Password"
// //                         type="password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         fullWidth
// //                         required
// //                     />
// //                     <TextField
// //                         label="Confirm Password"
// //                         type="password"
// //                         value={confirmPassword}
// //                         onChange={(e) => setConfirmPassword(e.target.value)}
// //                         fullWidth
// //                         required
// //                     />
// //                 </Stack>

// //                 <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
// //                     <Button type="submit" variant="contained" color="success" fullWidth>
// //                         Register
// //                     </Button>

// //                     <Typography variant="body2" align="center">
// //                         Already have an account?{' '}
// //                         <Link to="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>
// //                             Login
// //                         </Link>
// //                     </Typography>
// //                 </Box>
// //             </Box>
// //         </Container>
// //     );
// // };

// // export default Register;






// // src/pages/Register.js
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useCart } from '../CartContext';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { register, login } = useCart();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     try {
//         const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });
//       console.log("name", name, "email", email, "password", password);
//       if (response.ok) {
//         await login(email, password);
//           navigate('/');
//       } else {
//         const errorData = await response.json()
//         setError(errorData.message || 'Error creating user');
//       }
//     } catch (error) {
//       setError('Error creating user');
//       console.error('Register error:', error);
//     }

//   };


//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form className="bg-white p-8 rounded shadow-md w-80">
//         <h2 className="text-2xl font-bold mb-6">Register</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700">Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div className="flex justify-between">
//           <button onClick={handleRegister} className="bg-green-500 text-white py-2 rounded w-full">Register</button>
//           <Link to="/login" className="text-blue-500 hover:underline ml-2">Login</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;


// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register, login } = useCart();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        await login(email, password);
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error creating user');
      }
    } catch (error) {
      setError('Error creating user');
      console.error('Register error:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Box
        component="form"
        sx={{
          width: 400,
          p: 4,
          bgcolor: 'white',
          boxShadow: 3,
          borderRadius: 2,
        }}
        onSubmit={handleRegister}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
          Register
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          fullWidth
          variant="outlined"
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          fullWidth
          variant="outlined"
          margin="normal"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, py: 1.5 }}
        >
          Register
        </Button>
        <Typography
          variant="body2"
          sx={{ textAlign: 'center', mt: 2, color: 'text.secondary' }}
        >
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
