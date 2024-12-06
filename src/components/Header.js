// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { AppBar, Toolbar, Typography, Button, Badge } from '@mui/material';
// // // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // // import { useCart } from '../CartContext'; // Assuming you have a CartContext for managing cart state

// // // const Header = () => {
// // //   const { cartItems, user, logout } = useCart(); // Access cart items from context
// // //   const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Calculate total item count
// // //   const [user, setUser] = useState(localStorage.getItem('user')); // Check if user is logged in
// // //   const navigate = useNavigate();

// // //   const logout = () => {
// // //     localStorage.removeItem('user'); // Clear user info from localStorage
// // //     setUser(null); // Update state to reflect logout
// // //     navigate('/login'); // Redirect to login page
// // //   };


// // //   return (
// // //     // <AppBar position="static" className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg">
// // //     //   <Toolbar className="flex justify-between items-center w-full">
// // //     //     {/* "Foodie Haven" on the left */}
// // //     //     <Typography variant="h6" className="font-bold text-white text-2xl">
// // //     //       <Link to="/" className="text-white no-underline hover:text-yellow-400 transition duration-300 ease-in-out">Foodie Haven</Link>
// // //     //     </Typography>

// // //     //     {/* Right-aligned buttons */}
// // //     //     <div className="flex items-center space-x-6 ml-auto">
// // //     //       <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //     //         <Link to="/" className="text-white no-underline hover:text-yellow-400">Home</Link>
// // //     //       </Button>


// // //     //       {/* <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //     //         <Link to="/login" className="text-white no-underline hover:text-yellow-400">Login</Link>
// // //     //       </Button>
// // //     //       <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //     //         <Link to="/register" className="text-white no-underline hover:text-yellow-400">Register</Link>
// // //     //       </Button> */}

// // //     //       {user ? (
// // //     //         <Button color="inherit" onClick={logout} className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //     //           Logout
// // //     //         </Button>
// // //     //       ) : (
// // //     //         <>
// // //     //           <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //     //             <Link to="/login" className="text-white no-underline hover:text-yellow-400">Login</Link>
// // //     //           </Button>
// // //     //           <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //     //             <Link to="/register" className="text-white no-underline hover:text-yellow-400">Register</Link>
// // //     //           </Button>
// // //     //         </>
// // //     //       )}

// // //     //       {/* Cart Button with Badge */}
// // //     //       <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //     //         <Badge badgeContent={itemCount} color="secondary" className="animate-bounce">
// // //     //           <ShoppingCartIcon className="text-white text-2xl" />
// // //     //         </Badge>
// // //     //         <Link to="/cart" className="text-white no-underline hover:text-yellow-400 ml-2">Cart</Link>
// // //     //       </Button>
// // //     //     </div>
// // //     //   </Toolbar>
// // //     // </AppBar>


// // //     <AppBar position="static" className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg">
// // //       <Toolbar className="flex justify-between items-center w-full">
// // //         {/* "Foodie Haven" on the left */}
// // //         <Typography variant="h6" className="font-bold text-white text-2xl">
// // //           <Link to="/" className="text-white no-underline hover:text-yellow-400 transition duration-300 ease-in-out">Foodie Haven</Link>
// // //         </Typography>

// // //         {/* Right-aligned buttons */}
// // //         <div className="flex items-center space-x-6 ml-auto">
// // //           <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //             <Link to="/" className="text-white no-underline hover:text-yellow-400">Home</Link>
// // //           </Button>



// // //           {/* <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //         <Link to="/login" className="text-white no-underline hover:text-yellow-400">Login</Link>
// // //       </Button>
// // //       <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //         <Link to="/register" className="text-white no-underline hover:text-yellow-400">Register</Link>
// // //       </Button> */}

// // //           {user ? (
// // //             <Button color="inherit" onClick={logout} className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //               Logout
// // //             </Button>
// // //           ) : (
// // //             <>
// // //               <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //                 <Link to="/login" className="text-white no-underline hover:text-yellow-400">Login</Link>
// // //               </Button>
// // //               <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //                 <Link to="/register" className="text-white no-underline hover:text-yellow-400">Register</Link>
// // //               </Button>
// // //             </>
// // //           )}

// // //           {/* Cart Button with Badge */}
// // //           <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// // //             <Badge badgeContent={itemCount} color="secondary" className="animate-bounce">
// // //               <ShoppingCartIcon className="text-white text-2xl" />
// // //             </Badge>
// // //             <Link to="/cart" className="text-white no-underline hover:text-yellow-400 ml-2">Cart</Link>
// // //           </Button>
// // //         </div>
// // //       </Toolbar>
// // //     </AppBar>
// // //   );
// // // };

// // // export default Header;


// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { AppBar, Toolbar, Typography, Button, Badge } from '@mui/material';
// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import { useCart } from '../CartContext';

// // const Header = () => {
// //   const { cartItems } = useCart(); // Access cart items from context
// //   const navigate = useNavigate();
// //   const [user, setUser] = useState(localStorage.getItem('user')); // Check if user is logged in

// //   const logout = () => {
// //     localStorage.removeItem('user'); // Clear user info from localStorage
// //     setUser(null); // Update state to reflect logout
// //     navigate('/login'); // Redirect to login page
// //   };

// //   const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Calculate total item count

// //   return (
// //     <AppBar position="static" className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg">
// //       <Toolbar className="flex justify-between items-center w-full">
// //         {/* "Foodie Haven" on the left */}
// //         <Typography variant="h6" className="font-bold text-white text-2xl">
// //           <Link to="/" className="text-white no-underline hover:text-yellow-400 transition duration-300 ease-in-out">
// //             Foodie Haven
// //           </Link>
// //         </Typography>

// //         {/* Right-aligned buttons */}
// //         <div className="flex items-center space-x-6 ml-auto">
// //           <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// //             <Link to="/" className="text-white no-underline hover:text-yellow-400">Home</Link>
// //           </Button>

// //           {user ? (
// //             <Button
// //               color="inherit"
// //               onClick={logout}
// //               className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out"
// //             >
// //               Logout
// //             </Button>
// //           ) : (
// //             <>
// //               <Button color="inherit" onClick={logout} className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out" >
// //                 Logout
// //               </Button>
// //               <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// //                 <Link to="/login" className="text-white no-underline hover:text-yellow-400">Login</Link>
// //               </Button>
// //               <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// //                 <Link to="/register" className="text-white no-underline hover:text-yellow-400">Register</Link>
// //               </Button>
// //             </>
// //           )}

// //           {/* Cart Button with Badge */}
// //           <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
// //             <Badge badgeContent={itemCount} color="secondary" className="animate-bounce">
// //               <ShoppingCartIcon className="text-white text-2xl" />
// //             </Badge>
// //             <Link to="/cart" className="text-white no-underline hover:text-yellow-400 ml-2">Cart</Link>
// //           </Button>
// //         </div>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Header;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, Badge } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useCart } from '../CartContext';

// const Header = () => {
//   const { cartItems } = useCart(); // Access cart items from context
//   const navigate = useNavigate();
//   const [user, setUser] = useState(localStorage.getItem('user')); // Check if user is logged in

//   const logout = () => {
//     localStorage.removeItem('user'); // Clear user info from localStorage
//     setUser(null); // Update state to reflect logout
//     navigate('/login'); // Redirect to login page
//   };

//   const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Calculate total item count

//   return (
//     <AppBar position="static" className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg">
//       <Toolbar className="flex justify-between items-center w-full">
//         {/* "Foodie Haven" on the left */}
//         <Typography variant="h6" className="font-bold text-white text-2xl">
//           <Link to="/" className="text-white no-underline hover:text-yellow-400 transition duration-300 ease-in-out">
//             Foodie Haven
//           </Link>
//         </Typography>

//         {/* Right-aligned buttons */}
//         <div className="flex items-center space-x-6 ml-auto">
//           <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
//             <Link to="/" className="text-white no-underline hover:text-yellow-400">Home</Link>
//           </Button>

//           {user ? (
//             <>
//               <Button
//                 color="inherit"
//                 onClick={logout}
//                 className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out"
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
//                 <Link to="/login" className="text-white no-underline hover:text-yellow-400">Login</Link>
//               </Button>
//               <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
//                 <Link to="/register" className="text-white no-underline hover:text-yellow-400">Register</Link>
//               </Button>
//             </>
//           )}

//           {/* Cart Button with Badge */}
//           <Button color="inherit" className="hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out">
//             <Badge badgeContent={itemCount} color="secondary" className="animate-bounce">
//               <ShoppingCartIcon className="text-white text-2xl" />
//             </Badge>
//             <Link to="/cart" className="text-white no-underline hover:text-yellow-400 ml-2">Cart</Link>
//           </Button>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Badge, Box, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../CartContext';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';

const Header = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('user');
    console.log(user);
    setUser(null);
    navigate('/login');
  };

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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

          {user ? (
            <Button color="inherit" onClick={logout} sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
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
              <Button color="inherit" onClick={logout} sx={{ '&:hover': { backgroundColor: '#F1FAEE', color: '#1D3557' } }}>
                Logout
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
          {user ? (
            <Button color="inherit" fullWidth onClick={logout}>Logout</Button>
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
