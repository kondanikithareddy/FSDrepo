// // // // // import React, { useState } from 'react';
// // // // // import { Link, useNavigate } from 'react-router-dom';
// // // // // import { AppBar, Toolbar, Typography, Button, Badge, Box, Grid } from '@mui/material';
// // // // // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // // // // import { useCart } from '../CartContext';
// // // // // import MenuIcon from '@mui/icons-material/Menu';
// // // // // import { Drawer } from '@mui/material';

// // // // // const Header = () => {
// // // // //   const { cartItems } = useCart();
// // // // //   const navigate = useNavigate();
// // // // //   const [user, setUser] = useState(localStorage.getItem('user'));
// // // // //   const [drawerOpen, setDrawerOpen] = useState(false);

// // // // //   const logout = () => {
// // // // //     localStorage.removeItem('user');
// // // // //     console.log(user);
// // // // //     setUser(null);
// // // // //     navigate('/login');
// // // // //   };

// // // // //   const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

// // // // //   // Toggle drawer
// // // // //   const toggleDrawer = () => {
// // // // //     setDrawerOpen(!drawerOpen);
// // // // //   };

// // // // //   return (
// // // // //     <AppBar position="sticky" sx={{ backgroundColor: '#1D3557' }}>
// // // // //       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // // //         {/* Logo Section */}
// // // // //         <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
// // // // //           <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
// // // // //             Foodie Haven
// // // // //           </Link>
// // // // //         </Typography>

// // // // //         {/* Desktop View: Menu & Cart */}
// // // // //         <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 3 }}>
// // // // //           <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // // // //             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
// // // // //               Home
// // // // //             </Link>
// // // // //           </Button>

// // // // //           {user ? (
// // // // //             <Button color="inherit" onClick={logout} sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // // // //               Logout
// // // // //             </Button>


// // // // //           ) : (
// // // // //             <>
// // // // //               <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // // // //                 <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
// // // // //               </Button>
// // // // //               <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // // // //                 <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
// // // // //               </Button>
// // // // //               <Button color="inherit" onClick={logout} sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // // // //                 Logout
// // // // //               </Button>
// // // // //             </>
// // // // //           )}

// // // // //           {/* Cart Button with Badge */}
// // // // //           <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // // // //             <Badge badgeContent={itemCount} color="secondary">
// // // // //               <ShoppingCartIcon sx={{ color: 'white' }} />
// // // // //             </Badge>
// // // // //             <Link to="/cart" style={{ textDecoration: 'none', color: 'white', marginLeft: '8px' }}>Cart</Link>
// // // // //           </Button>
// // // // //         </Box>

// // // // //         {/* Hamburger Menu for Mobile */}
// // // // //         <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
// // // // //           <Button color="inherit" onClick={toggleDrawer}>
// // // // //             <MenuIcon sx={{ color: 'white' }} />
// // // // //           </Button>
// // // // //         </Box>
// // // // //       </Toolbar>

// // // // //       {/* Drawer for Mobile */}
// // // // //       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
// // // // //         <Box sx={{ width: 250, padding: 2, backgroundColor: '#1D3557', color: 'white' }}>
// // // // //           <Typography variant="h6" sx={{ marginBottom: 2 }}>Menu</Typography>
// // // // //           <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // // // //             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
// // // // //           </Button>
// // // // //           {user ? (
// // // // //             <Button color="inherit" fullWidth onClick={logout}>Logout</Button>
// // // // //           ) : (
// // // // //             <>
// // // // //               <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // // // //                 <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
// // // // //               </Button>
// // // // //               <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // // // //                 <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
// // // // //               </Button>
// // // // //             </>
// // // // //           )}
// // // // //           <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // // // //             <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>Cart</Link>
// // // // //           </Button>
// // // // //         </Box>
// // // // //       </Drawer>
// // // // //     </AppBar>
// // // // //   );
// // // // // };

// // // // // export default Header;



// // // // // src/components/Header.js
// // // // import React, { useState } from 'react';
// // // // import { Link, useNavigate } from 'react-router-dom';
// // // // import { AppBar, Toolbar, Typography, Button, Badge, Box } from '@mui/material';
// // // // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // // // import { useCart } from '../CartContext';
// // // // import MenuIcon from '@mui/icons-material/Menu';
// // // // import { Drawer } from '@mui/material';

// // // // const Header = () => {
// // // //   const { cartItems, user, logout } = useCart();
// // // //   const navigate = useNavigate();
// // // //   const [drawerOpen, setDrawerOpen] = useState(false);

// // // //   const handleLogout = () => {
// // // //         logout();
// // // //       navigate('/login')
// // // //   };

// // // //   const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

// // // //   // Toggle drawer
// // // //   const toggleDrawer = () => {
// // // //     setDrawerOpen(!drawerOpen);
// // // //   };

// // // //   return (
// // // //       <AppBar position="sticky" sx={{ backgroundColor: '#1D3557' }}>
// // // //           <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // //               {/* Logo Section */}
// // // //               <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
// // // //                   <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
// // // //                       Foodie Haven
// // // //                   </Link>
// // // //               </Typography>

// // // //               {/* Desktop View: Menu & Cart */}
// // // //               <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 3 }}>
// // // //                   <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // // //                       <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
// // // //                           Home
// // // //                       </Link>
// // // //                   </Button>

// // // //                   {user ? (
// // // //                     <Button color="inherit" onClick={handleLogout} sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // // //                         Logout
// // // //                     </Button>
// // // //                   ) : (
// // // //                       <>
// // // //                           <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // // //                             <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
// // // //                           </Button>
// // // //                           <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // // //                               <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
// // // //                           </Button>
// // // //                       </>
// // // //                   )}

// // // //                   {/* Cart Button with Badge */}
// // // //                   <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // // //                       <Badge badgeContent={itemCount} color="secondary">
// // // //                           <ShoppingCartIcon sx={{ color: 'white' }} />
// // // //                       </Badge>
// // // //                       <Link to="/cart" style={{ textDecoration: 'none', color: 'white', marginLeft: '8px' }}>Cart</Link>
// // // //                   </Button>
// // // //               </Box>

// // // //               {/* Hamburger Menu for Mobile */}
// // // //               <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
// // // //                   <Button color="inherit" onClick={toggleDrawer}>
// // // //                       <MenuIcon sx={{ color: 'white' }} />
// // // //                   </Button>
// // // //               </Box>
// // // //           </Toolbar>

// // // //           {/* Drawer for Mobile */}
// // // //           <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
// // // //               <Box sx={{ width: 250, padding: 2, backgroundColor: '#1D3557', color: 'white' }}>
// // // //                   <Typography variant="h6" sx={{ marginBottom: 2 }}>Menu</Typography>
// // // //                   <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // // //                       <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
// // // //                   </Button>
// // // //                   {user ? (
// // // //                     <Button color="inherit" fullWidth onClick={handleLogout}>Logout</Button>
// // // //                   ) : (
// // // //                       <>
// // // //                         <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // // //                             <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
// // // //                           </Button>
// // // //                          <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // // //                               <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
// // // //                           </Button>
// // // //                       </>
// // // //                   )}
// // // //                   <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // // //                       <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>Cart</Link>
// // // //                   </Button>
// // // //               </Box>
// // // //           </Drawer>
// // // //       </AppBar>
// // // //   );
// // // // };

// // // // export default Header;



// // // //######################
// // // // src/components/Header.js
// // // import React, { useState, useEffect } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { AppBar, Toolbar, Typography, Button, Badge, Box } from '@mui/material';
// // // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // // import { useCart } from '../CartContext';
// // // import MenuIcon from '@mui/icons-material/Menu';
// // // import { Drawer } from '@mui/material';

// // // const Header = () => {
// // //   const { cartItems, user, logout } = useCart();
// // //     const navigate = useNavigate();
// // //   const [drawerOpen, setDrawerOpen] = useState(false);
// // //     const [isLoggedIn, setIsLoggedIn] = useState(false);

// // //     useEffect(() => {
// // //       setIsLoggedIn(!!user);
// // //     }, [user])

// // //     const handleLogout = () => {
// // //         logout();
// // //       navigate('/login')
// // //     };

// // //     const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

// // //     // Toggle drawer
// // //     const toggleDrawer = () => {
// // //         setDrawerOpen(!drawerOpen);
// // //     };

// // //     return (
// // //         <AppBar position="sticky" sx={{ backgroundColor: '#1D3557' }}>
// // //             <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // //                 {/* Logo Section */}
// // //                 <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
// // //                     <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
// // //                         Foodie Haven
// // //                     </Link>
// // //                 </Typography>

// // //                 {/* Desktop View: Menu & Cart */}
// // //                 <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 3 }}>
// // //                     <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // //                         <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
// // //                             Home
// // //                         </Link>
// // //                     </Button>

// // //                     {isLoggedIn ? (
// // //                         <Button color="inherit" onClick={handleLogout} sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // //                             Logout
// // //                         </Button>
// // //                     ) : (
// // //                         <>
// // //                             <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // //                                 <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
// // //                             </Button>
// // //                             <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // //                                 <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
// // //                             </Button>
// // //                         </>
// // //                     )}

// // //                     {/* Cart Button with Badge */}
// // //                     <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// // //                         <Badge badgeContent={itemCount} color="secondary">
// // //                             <ShoppingCartIcon sx={{ color: 'white' }} />
// // //                         </Badge>
// // //                         <Link to="/cart" style={{ textDecoration: 'none', color: 'white', marginLeft: '8px' }}>Cart</Link>
// // //                     </Button>
// // //                 </Box>

// // //                 {/* Hamburger Menu for Mobile */}
// // //                 <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
// // //                     <Button color="inherit" onClick={toggleDrawer}>
// // //                         <MenuIcon sx={{ color: 'white' }} />
// // //                     </Button>
// // //                 </Box>
// // //             </Toolbar>

// // //             {/* Drawer for Mobile */}
// // //             <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
// // //                 <Box sx={{ width: 250, padding: 2, backgroundColor: '#1D3557', color: 'white' }}>
// // //                     <Typography variant="h6" sx={{ marginBottom: 2 }}>Menu</Typography>
// // //                     <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // //                         <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
// // //                     </Button>
// // //                     {isLoggedIn ? (
// // //                         <Button color="inherit" fullWidth onClick={handleLogout}>Logout</Button>
// // //                     ) : (
// // //                         <>
// // //                             <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // //                                 <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
// // //                             </Button>
// // //                             <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // //                                 <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
// // //                             </Button>
// // //                         </>
// // //                     )}
// // //                     <Button color="inherit" fullWidth onClick={toggleDrawer}>
// // //                         <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>Cart</Link>
// // //                     </Button>
// // //                 </Box>
// // //             </Drawer>
// // //         </AppBar>
// // //     );
// // // };

// // // export default Header;


// // import React, { useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { AppBar, Toolbar, Typography, Button, Badge, Box } from '@mui/material';
// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import { useCart } from '../CartContext';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import { Drawer } from '@mui/material';

// // const Header = () => {
// //   const { cartItems, user, logout } = useCart();
// //     const navigate = useNavigate();
// //   const [drawerOpen, setDrawerOpen] = useState(false);
// //     const [isLoggedIn, setIsLoggedIn] = useState(false);

// //     useEffect(() => {
// //       setIsLoggedIn(!!user);
// //     }, [user])

// //     const handleLogout = () => {
// //         logout();
// //       navigate('/login')
// //     };

// //     const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

// //     // Toggle drawer
// //     const toggleDrawer = () => {
// //         setDrawerOpen(!drawerOpen);
// //     };

// //     return (
// //         <AppBar position="sticky" sx={{ backgroundColor: '#1D3557' }}>
// //             <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //                 {/* Logo Section */}
// //                 <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
// //                     <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
// //                         Foodie Haven
// //                     </Link>
// //                 </Typography>

// //                 {/* Desktop View: Menu & Cart */}
// //                 <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 3 }}>
// //                     <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// //                         <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
// //                             Home
// //                         </Link>
// //                     </Button>

// //                     {isLoggedIn ? (
// //                         <Button color="inherit" onClick={handleLogout} sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// //                             Logout
// //                         </Button>
// //                     ) : (
// //                         <>
// //                             <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// //                                 <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
// //                             </Button>
// //                             <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// //                                 <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
// //                             </Button>
// //                         </>
// //                     )}

// //                     {/* Cart Button with Badge */}
// //                     <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
// //                         <Badge badgeContent={itemCount} color="secondary">
// //                             <ShoppingCartIcon sx={{ color: 'white' }} />
// //                         </Badge>
// //                         <Link to="/cart" style={{ textDecoration: 'none', color: 'white', marginLeft: '8px' }}>Cart</Link>
// //                     </Button>
// //                 </Box>

// //                 {/* Hamburger Menu for Mobile */}
// //                 <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
// //                     <Button color="inherit" onClick={toggleDrawer}>
// //                         <MenuIcon sx={{ color: 'white' }} />
// //                     </Button>
// //                 </Box>
// //             </Toolbar>

// //             {/* Drawer for Mobile */}
// //             <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
// //                 <Box sx={{ width: 250, padding: 2, backgroundColor: '#1D3557', color: 'white' }}>
// //                     <Typography variant="h6" sx={{ marginBottom: 2 }}>Menu</Typography>
// //                     <Button color="inherit" fullWidth onClick={toggleDrawer}>
// //                         <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
// //                     </Button>
// //                     {isLoggedIn ? (
// //                         <Button color="inherit" fullWidth onClick={handleLogout}>Logout</Button>
// //                     ) : (
// //                         <>
// //                             <Button color="inherit" fullWidth onClick={toggleDrawer}>
// //                                 <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
// //                             </Button>
// //                             <Button color="inherit" fullWidth onClick={toggleDrawer}>
// //                                 <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
// //                             </Button>
// //                         </>
// //                     )}
// //                     <Button color="inherit" fullWidth onClick={toggleDrawer}>
// //                         <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>Cart</Link>
// //                     </Button>
// //                 </Box>
// //             </Drawer>
// //         </AppBar>
// //     );
// // };

// // export default Header;



// import React, { useState, useEffect, useMemo } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, Badge, Box } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useCart } from '../CartContext';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Drawer } from '@mui/material';

// const Header = () => {
//   const { cartItems, user, logout } = useCart();
//   const navigate = useNavigate();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     setIsLoggedIn(!!user);
//   }, [user])

//   const handleLogout = () => {
//     logout();
//     navigate('/login')
//   };

//   const itemCount = useMemo(() => {
//     console.log("cartItems from header", cartItems)
//     return cartItems.reduce((acc, item) => acc + item.quantity, 0);
//     console.log("cartItems after from header", cartItems)
//   }, [cartItems]);


//   // Toggle drawer
//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <AppBar position="sticky" sx={{ backgroundColor: '#1D3557' }}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         {/* Logo Section */}
//         <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
//           <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
//             Foodie Haven
//           </Link>
//         </Typography>

//         {/* Desktop View: Menu & Cart */}
//         <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 3 }}>
//           <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//               Home
//             </Link>
//           </Button>

//           {isLoggedIn ? (
//             <Button color="inherit" onClick={handleLogout} sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
//               Logout
//             </Button>
//           ) : (
//             <>
//               <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
//                 <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
//               </Button>
//               <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
//                 <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
//               </Button>
//             </>
//           )}

//           {/* Cart Button with Badge */}
//           <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
//             <Badge badgeContent={itemCount} color="secondary">
//               <ShoppingCartIcon sx={{ color: 'white' }} />
//             </Badge>
//             <Link to="/cart" style={{ textDecoration: 'none', color: 'white', marginLeft: '8px' }}>Cart</Link>
//           </Button>
//         </Box>

//         {/* Hamburger Menu for Mobile */}
//         <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
//           <Button color="inherit" onClick={toggleDrawer}>
//             <MenuIcon sx={{ color: 'white' }} />
//           </Button>
//         </Box>
//       </Toolbar>

//       {/* Drawer for Mobile */}
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
//         <Box sx={{ width: 250, padding: 2, backgroundColor: '#1D3557', color: 'white' }}>
//           <Typography variant="h6" sx={{ marginBottom: 2 }}>Menu</Typography>
//           <Button color="inherit" fullWidth onClick={toggleDrawer}>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
//           </Button>
//           {isLoggedIn ? (
//             <Button color="inherit" fullWidth onClick={handleLogout}>Logout</Button>
//           ) : (
//             <>
//               <Button color="inherit" fullWidth onClick={toggleDrawer}>
//                 <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
//               </Button>
//               <Button color="inherit" fullWidth onClick={toggleDrawer}>
//                 <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
//               </Button>
//             </>
//           )}
//           <Button color="inherit" fullWidth onClick={toggleDrawer}>
//             <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>Cart</Link>
//           </Button>
//         </Box>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Header;



// src/components/Header.js
import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Badge, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../CartContext';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';

const Header = () => {
  const { cartItems, user, logout } = useCart();
    const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      setIsLoggedIn(!!user);
    }, [user])

    const handleLogout = () => {
        logout();
      navigate('/login')
    };

    const itemCount = useMemo(() => {
        console.log("cartItems from header", cartItems)
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    }, [cartItems]);

    // Toggle drawer
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#1D3557' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo Section */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        Foodie Haven
                    </Link>
                </Typography>

                {/* Desktop View: Menu & Cart */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 3 }}>
                    <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Home
                        </Link>
                    </Button>

                    {isLoggedIn ? (
                        <Button color="inherit" onClick={handleLogout} sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
                                <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
                            </Button>
                            <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
                                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
                            </Button>
                        </>
                    )}

                    {/* Cart Button with Badge */}
                    <Button color="inherit" sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
                        <Badge badgeContent={itemCount} color="secondary">
                            <ShoppingCartIcon sx={{ color: 'white' }} />
                        </Badge>
                        <Link to="/cart" style={{ textDecoration: 'none', color: 'white', marginLeft: '8px' }}>Cart</Link>
                    </Button>
                </Box>

                {/* Hamburger Menu for Mobile */}
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Button color="inherit" onClick={toggleDrawer}>
                        <MenuIcon sx={{ color: 'white' }} />
                    </Button>
                </Box>
            </Toolbar>

            {/* Drawer for Mobile */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box sx={{ width: 250, padding: 2, backgroundColor: '#1D3557', color: 'white' }}>
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>Menu</Typography>
                    <Button color="inherit" fullWidth onClick={toggleDrawer}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                    </Button>
                    {isLoggedIn ? (
                        <Button color="inherit" fullWidth onClick={handleLogout}>Logout</Button>
                    ) : (
                        <>
                            <Button color="inherit" fullWidth onClick={toggleDrawer}>
                                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
                            </Button>
                            <Button color="inherit" fullWidth onClick={toggleDrawer}>
                                <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
                            </Button>
                        </>
                    )}
                    <Button color="inherit" fullWidth onClick={toggleDrawer}>
                        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>Cart</Link>
                    </Button>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Header;

