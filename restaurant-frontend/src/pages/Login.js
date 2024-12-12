// // // // // // // src/pages/Login.js
// // // // // // import React, { useState } from 'react';
// // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // const Login = () => {
// // // // // //   const [email, setEmail] = useState('');
// // // // // //   const [password, setPassword] = useState('');
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleLogin = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     // Add login logic here (e.g., authentication check)
// // // // // //     navigate('/');
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex justify-center items-center h-screen bg-gray-100">
// // // // // //       <form className="bg-white p-8 rounded shadow-md w-80">
// // // // // //         <h2 className="text-2xl font-bold mb-6">Login</h2>
// // // // // //         <div className="mb-4">
// // // // // //           <label className="block text-gray-700">Email</label>
// // // // // //           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
// // // // // //         </div>
// // // // // //         <div className="mb-6">
// // // // // //           <label className="block text-gray-700">Password</label>
// // // // // //           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
// // // // // //         </div>
// // // // // //         <button onClick={handleLogin} className="bg-blue-500 text-white w-full py-2 rounded">Log In</button>
// // // // // //       </form>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Login;

// // // // // // //#########################################################

// // // // // // // // src/pages/Login.js
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // const Login = () => {
// // // // // // //   const [email, setEmail] = useState('');
// // // // // // //   const [password, setPassword] = useState('');
// // // // // // //   const navigate = useNavigate();

  
// // // // // // // const handleLogin = async (e) => {
// // // // // // //   e.preventDefault();
// // // // // // //   try {
// // // // // // //     const response = await fetch('http://localhost:5000/api/login', {
// // // // // // //       method: 'POST',
// // // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // // //       body: JSON.stringify({ email, password }),
// // // // // // //     });

// // // // // // //     if (response.ok) {
// // // // // // //       const data = await response.json();
// // // // // // //       localStorage.setItem('token', data.token); // Save token
// // // // // // //       alert('Login successful');
// // // // // // //       navigate('/');
// // // // // // //     } else {
// // // // // // //       const error = await response.json();
// // // // // // //       alert(error.message || 'Login failed');
// // // // // // //     }
// // // // // // //   } catch (error) {
// // // // // // //     console.error('Error during login:', error);
// // // // // // //     alert('An error occurred during login.');
// // // // // // //   }
// // // // // // // };

// // // // // // //   // const handleLogin = (e) => {
// // // // // // //   //   e.preventDefault();
// // // // // // //   //   // Add login logic here (e.g., authentication check)
// // // // // // //   //   navigate('/');
// // // // // // //   // };

// // // // // // //   return (
// // // // // // //     <div className="flex justify-center items-center h-screen bg-gray-100">
// // // // // // //       <form className="bg-white p-8 rounded shadow-md w-80">
// // // // // // //         <h2 className="text-2xl font-bold mb-6">Login</h2>
// // // // // // //         <div className="mb-4">
// // // // // // //           <label className="block text-gray-700">Email</label>
// // // // // // //           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
// // // // // // //         </div>
// // // // // // //         <div className="mb-6">
// // // // // // //           <label className="block text-gray-700">Password</label>
// // // // // // //           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
// // // // // // //         </div>
// // // // // // //         <button onClick={handleLogin} className="bg-blue-500 text-white w-full py-2 rounded">Log In</button>
// // // // // // //       </form>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Login;



// // // // // // // src/pages/Login.js
// // // // // // import React, { useState } from 'react';
// // // // // // import { useNavigate, Link } from 'react-router-dom';
// // // // // // import { useCart } from '../CartContext';

// // // // // // const Login = () => {
// // // // // //     const [email, setEmail] = useState('');
// // // // // //     const [password, setPassword] = useState('');
// // // // // //     const navigate = useNavigate();
// // // // // //     const { login } = useCart();
// // // // // //     const [errorMsg, setErrorMsg] = useState('');

// // // // // //     const handleLogin = (e) => {
// // // // // //         e.preventDefault();
// // // // // //         const success = login(email, password);
// // // // // //         if (success) {
// // // // // //             navigate('/');
// // // // // //         } else {
// // // // // //             setErrorMsg('Invalid credentials');
// // // // // //         }
// // // // // //     };


// // // // // //     return (
// // // // // //         <div className="flex justify-center items-center h-screen bg-gray-100">
// // // // // //             <form className="bg-white p-8 rounded shadow-md w-80">
// // // // // //                 <h2 className="text-2xl font-bold mb-6">Login</h2>
// // // // // //                 {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
// // // // // //                 <div className="mb-4">
// // // // // //                     <label className="block text-gray-700">Email</label>
// // // // // //                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
// // // // // //                 </div>
// // // // // //                 <div className="mb-6">
// // // // // //                     <label className="block text-gray-700">Password</label>
// // // // // //                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
// // // // // //                 </div>
// // // // // //                  <div className="flex justify-between">
// // // // // //                     <button onClick={handleLogin} className="bg-blue-500 text-white py-2 rounded w-full">Log In</button>
// // // // // //                     <Link to="/register" className="text-blue-500 hover:underline ml-2">Register</Link>
// // // // // //                 </div>
// // // // // //             </form>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default Login;

// // // // // // src/pages/Login.js
// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate, Link } from 'react-router-dom';
// // // // // import { useCart } from '../CartContext';
// // // // // import { Box, TextField, Button, Typography, Container, Alert, Stack } from '@mui/material';

// // // // // const Login = () => {
// // // // //     const [email, setEmail] = useState('');
// // // // //     const [password, setPassword] = useState('');
// // // // //     const navigate = useNavigate();
// // // // //     const { login } = useCart();
// // // // //     const [errorMsg, setErrorMsg] = useState('');

// // // // //     const handleLogin = (e) => {
// // // // //         e.preventDefault();
// // // // //         const success = login(email, password);
// // // // //         if (success) {
// // // // //             navigate('/');
// // // // //         } else {
// // // // //             setErrorMsg('Invalid credentials');
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
// // // // //             <Box
// // // // //                 component="form"
// // // // //                 onSubmit={handleLogin}
// // // // //                 sx={{
// // // // //                     backgroundColor: 'white',
// // // // //                     padding: 4,
// // // // //                     borderRadius: 2,
// // // // //                     boxShadow: 3,
// // // // //                     width: '100%',
// // // // //                     maxWidth: 400
// // // // //                 }}
// // // // //             >
// // // // //                 <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
// // // // //                     Login
// // // // //                 </Typography>

// // // // //                 {errorMsg && (
// // // // //                     <Alert severity="error" sx={{ marginBottom: 2 }}>
// // // // //                         {errorMsg}
// // // // //                     </Alert>
// // // // //                 )}

// // // // //                 <Stack spacing={3}>
// // // // //                     <TextField
// // // // //                         label="Email"
// // // // //                         type="email"
// // // // //                         value={email}
// // // // //                         onChange={(e) => setEmail(e.target.value)}
// // // // //                         fullWidth
// // // // //                         required
// // // // //                     />
// // // // //                     <TextField
// // // // //                         label="Password"
// // // // //                         type="password"
// // // // //                         value={password}
// // // // //                         onChange={(e) => setPassword(e.target.value)}
// // // // //                         fullWidth
// // // // //                         required
// // // // //                     />
// // // // //                 </Stack>

// // // // //                 <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
// // // // //                     <Button type="submit" variant="contained" color="primary" fullWidth>
// // // // //                         Log In
// // // // //                     </Button>

// // // // //                     <Typography variant="body2" align="center">
// // // // //                         Don't have an account?{' '}
// // // // //                         <Link to="/register" style={{ color: '#1976d2', textDecoration: 'none' }}>
// // // // //                             Register
// // // // //                         </Link>
// // // // //                     </Typography>
// // // // //                 </Box>
// // // // //             </Box>
// // // // //         </Container>
// // // // //     );
// // // // // };

// // // // // export default Login;



// // // // //******************************* */

// // // // // src/pages/Login.js
// // // // import React, { useState } from 'react';
// // // // import { useNavigate, Link } from 'react-router-dom';
// // // // import { useCart } from '../CartContext';

// // // // const Login = () => {
// // // //     const [email, setEmail] = useState('');
// // // //     const [password, setPassword] = useState('');
// // // //     const navigate = useNavigate();
// // // //     const { login } = useCart();
// // // //     const [errorMsg, setErrorMsg] = useState('');

// // // //     const handleLogin = async (e) => {
// // // //         e.preventDefault();
// // // //          try {
// // // //              const response = await fetch('http://localhost:5000/api/auth/login', {
// // // //                 method: 'POST',
// // // //                 headers: {
// // // //                     'Content-Type': 'application/json',
// // // //                 },
// // // //                 body: JSON.stringify({ email, password }),
// // // //             });

// // // //              if (response.ok) {
// // // //                const data = await response.json();
// // // //                localStorage.setItem('token', data.token); // Store token
// // // //                await login(email, password);
// // // //                 navigate('/'); // Navigate home
// // // //             } else {
// // // //                const errorData = await response.json()
// // // //                setErrorMsg(errorData.message || 'Invalid credentials');
// // // //             }
// // // //         } catch (error) {
// // // //             setErrorMsg('Error logging in');
// // // //             console.error('Login error:', error);
// // // //          }
// // // //     };

// // // //     return (
// // // //         <div className="flex justify-center items-center h-screen bg-gray-100">
// // // //             <form className="bg-white p-8 rounded shadow-md w-80">
// // // //                 <h2 className="text-2xl font-bold mb-6">Login</h2>
// // // //                 {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
// // // //                 <div className="mb-4">
// // // //                     <label className="block text-gray-700">Email</label>
// // // //                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
// // // //                 </div>
// // // //                 <div className="mb-6">
// // // //                     <label className="block text-gray-700">Password</label>
// // // //                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
// // // //                 </div>
// // // //                  <div className="flex justify-between">
// // // //                     <button onClick={handleLogin} className="bg-blue-500 text-white py-2 rounded w-full">Log In</button>
// // // //                     <Link to="/register" className="text-blue-500 hover:underline ml-2">Register</Link>
// // // //                 </div>
// // // //             </form>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Login;


// // // import React, { useState } from 'react';
// // // import { useNavigate, Link } from 'react-router-dom';
// // // import { useCart } from '../CartContext';

// // // const Login = () => {
// // //     const [email, setEmail] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const navigate = useNavigate();
// // //     const { login } = useCart();
// // //     const [errorMsg, setErrorMsg] = useState('');

// // //     const handleLogin = async (e) => {
// // //         e.preventDefault();
// // //          try {
// // //              const response = await fetch('http://localhost:5000/api/auth/login', {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'Content-Type': 'application/json',
// // //                 },
// // //                 body: JSON.stringify({ email, password }),
// // //             });

// // //              if (response.ok) {
// // //                const data = await response.json();
// // //                localStorage.setItem('token', data.token); // Store token
// // //               const loginSuccessful = await login(email, password);
// // //                 if(loginSuccessful) {
// // //                     navigate('/'); // Navigate home
// // //                 } else {
// // //                    setErrorMsg('Login failed after fetch');
// // //                }
// // //             } else {
// // //                const errorData = await response.json()
// // //                setErrorMsg(errorData.message || 'Invalid credentials');
// // //             }
// // //         } catch (error) {
// // //             setErrorMsg('Error logging in');
// // //             console.error('Login error:', error);
// // //          }
// // //     };

// // //     return (
// // //         <div className="flex justify-center items-center h-screen bg-gray-100">
// // //             <form className="bg-white p-8 rounded shadow-md w-80">
// // //                 <h2 className="text-2xl font-bold mb-6">Login</h2>
// // //                 {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
// // //                 <div className="mb-4">
// // //                     <label className="block text-gray-700">Email</label>
// // //                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
// // //                 </div>
// // //                 <div className="mb-6">
// // //                     <label className="block text-gray-700">Password</label>
// // //                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
// // //                 </div>
// // //                  <div className="flex justify-between">
// // //                     <button onClick={handleLogin} className="bg-blue-500 text-white py-2 rounded w-full">Log In</button>
// // //                     <Link to="/register" className="text-blue-500 hover:underline ml-2">Register</Link>
// // //                 </div>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default Login;



// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { useCart } from '../CartContext';

// // const Login = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const navigate = useNavigate();
// //     const { login } = useCart();
// //     const [errorMsg, setErrorMsg] = useState('');

// //     const handleLogin = async (e) => {
// //         e.preventDefault();
// //          try {
// //              const response = await fetch('http://localhost:5000/api/auth/login', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({ email }),
// //             });

// //              if (response.ok) {
// //                const data = await response.json();
// //                localStorage.setItem('token', data.token); // Store token
// //               const loginSuccessful = await login(email, password);
// //                 if(loginSuccessful) {
// //                     navigate('/'); // Navigate home
// //                 } else {
// //                    setErrorMsg('Login failed after fetch');
// //                }
// //             } else {
// //                const errorData = await response.json()
// //                setErrorMsg(errorData.message || 'Invalid credentials');
// //             }
// //         } catch (error) {
// //             setErrorMsg('Error logging in');
// //             console.error('Login error:', error);
// //          }
// //     };

// //     return (
// //         <div className="flex justify-center items-center h-screen bg-gray-100">
// //             <form className="bg-white p-8 rounded shadow-md w-80">
// //                 <h2 className="text-2xl font-bold mb-6">Login</h2>
// //                 {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
// //                 <div className="mb-4">
// //                     <label className="block text-gray-700">Email</label>
// //                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
// //                 </div>
// //                 <div className="mb-6">
// //                     <label className="block text-gray-700">Password</label>
// //                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
// //                 </div>
// //                  <div className="flex justify-between">
// //                     <button onClick={handleLogin} className="bg-blue-500 text-white py-2 rounded w-full">Log In</button>
// //                     <Link to="/register" className="text-blue-500 hover:underline ml-2">Register</Link>
// //                 </div>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Login;


// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useCart } from '../CartContext';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const { login } = useCart();
//     const [errorMsg, setErrorMsg] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//          try {
//              const response = await fetch('http://localhost:5000/api/auth/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//              if (response.ok) {
//                const data = await response.json();
//                localStorage.setItem('token', data.token); // Store token
//               const loginSuccessful = await login(email, password);
//                 if(loginSuccessful) {
//                     navigate('/'); // Navigate home
//                 } else {
//                    setErrorMsg('Login failed after fetch');
//                }
//             } else {
//                const errorData = await response.json()
//                setErrorMsg(errorData.message || 'Invalid credentials');
//             }
//         } catch (error) {
//             setErrorMsg('Error logging in');
//             console.error('Login error:', error);
//          }
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <form className="bg-white p-8 rounded shadow-md w-80">
//                 <h2 className="text-2xl font-bold mb-6">Login</h2>
//                 {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Email</label>
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700">Password</label>
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
//                 </div>
//                  <div className="flex justify-between">
//                     <button onClick={handleLogin} className="bg-blue-500 text-white py-2 rounded w-full">Log In</button>
//                     <Link to="/register" className="text-blue-500 hover:underline ml-2">Register</Link>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Container, Box, Typography, TextField, Button, Alert, Grid } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useCart();
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
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
                localStorage.setItem('token', data.token); // Store token
                const loginSuccessful = await login(email, password);
                if (loginSuccessful) {
                    navigate('/'); // Navigate home
                } else {
                    setErrorMsg('Login failed after fetch');
                }
            } else {
                const errorData = await response.json();
                setErrorMsg(errorData.message || 'Invalid credentials');
            }
        } catch (error) {
            setErrorMsg('Error logging in');
            console.error('Login error:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box 
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', backgroundColor: '#f5f5f5', padding: 2, borderRadius: 2, boxShadow: 3, marginTop: '25%' }} >
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                {errorMsg && (
                    <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                        {errorMsg}
                    </Alert>
                )}
                <Box 
                    component="form" 
                    sx={{ width: '100%' }} 
                    onSubmit={handleLogin}
                >
                    <TextField label="Email" type="email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                    <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                    <Button 
                        type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} >
                        Log In
                    </Button>
                </Box>
                <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
                    <Grid item>
                        <Typography variant="body2">
                            Don't have an account?{' '}
                            <Link to="/register" style={{ textDecoration: 'none', color: '#1976d2' }}>
                                Register
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;
