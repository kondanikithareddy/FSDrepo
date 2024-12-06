// // // // // import React from 'react';
// // // // // import { Link } from 'react-router-dom';

// // // // // const RestaurantList = () => (
// // // // //   <div className="container mx-auto p-4">
// // // // //     <h2 className="text-2xl font-semibold mb-4">Select a Restaurant</h2>
// // // // //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // //       {[
// // // // //         { id: 1, name: "The Cheesecake Factory", link: "/menu/cheesecake-factory" },
// // // // //         { id: 2, name: "Olive Garden", link: "/menu/olive-garden" },
// // // // //         { id: 3, name: "Chipotle", link: "/menu/chipotle" },
// // // // //         { id: 4, name: "P.F. Chang's", link: "/menu/pf-changs" },
// // // // //         { id: 5, name: "In-N-Out Burger", link: "/menu/in-n-out" },
// // // // //         { id: 6, name: "Shake Shack", link: "/menu/shake-shack" }
// // // // //       ].map(restaurant => (
// // // // //         <div key={restaurant.id} className="border p-4 rounded-lg shadow-lg">
// // // // //           <h3 className="text-xl font-semibold">{restaurant.name}</h3>
// // // // //           <Link to={restaurant.link} className="text-blue-500">View Menu</Link>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   </div>
// // // // // );

// // // // // export default RestaurantList;



// // // // // // src/pages/RestaurantList.js
// // // // // import React from 'react';
// // // // // import { Link } from 'react-router-dom';
// // // // // import cheesecakeFactoryImg from '../assets/cheeseCake.png'; //Add image imports
// // // // // import oliveGardenImg from '../assets/oliveGarden.png';
// // // // // import chipotleImg from '../assets/chipotle.png';
// // // // // import kefi from '../assets/kefi.png';
// // // // // import apik from '../assets/apik.png';
// // // // // import thickShake from '../assets/thickShake.png';


// // // // // const RestaurantList = () => {
// // // // //   const restaurants = [
// // // // //     { id: 1, name: "The Cheesecake Factory", img: cheesecakeFactoryImg, link: "/menu/cheesecake-factory" },
// // // // //     { id: 2, name: "Olive Garden", img: oliveGardenImg, link: "/menu/olive-garden" },
// // // // //     { id: 3, name: "Chipotle", img: chipotleImg, link: "/menu/chipotle" },
// // // // //     { id: 4, name: "Kefi", img: kefi, link: "/menu/pf-changs" },
// // // // //     { id: 5, name: "Apik", img: apik, link: "/menu/in-n-out" },
// // // // //     { id: 6, name: "Thick Shake Factory", img: thickShake, link: "/menu/shake-shack" },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="container mx-auto p-4">
// // // // //       <h2 className="text-2xl font-semibold mb-4">Select a Restaurant</h2>
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // //         {restaurants.map((restaurant) => (
// // // // //           <div key={restaurant.id} className="border p-4 rounded-lg shadow-lg">
// // // // //             <img src={restaurant.img} alt={restaurant.name} className="w-full h-48 object-cover mb-2" /> {/*Added image display*/}
// // // // //             <h3 className="text-xl font-semibold">{restaurant.name}</h3>
// // // // //             <div className="flex space-x-2">
// // // // //               <Link to={restaurant.link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
// // // // //                 View Menu
// // // // //               </Link>
// // // // //               {/* Placeholder buttons - replace with actual functionality */}
// // // // //               <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Add</button>
// // // // //               <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Delete</button>
// // // // //               <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Edit</button>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default RestaurantList;



// // // // // import React from 'react';
// // // // // import { Link } from 'react-router-dom';
// // // // // import cheesecakeFactoryImg from '../assets/cheeseCake.png';
// // // // // import oliveGardenImg from '../assets/oliveGarden.png';
// // // // // import chipotleImg from '../assets/chipotle.png';
// // // // // import kefi from '../assets/kefi.png';
// // // // // import apik from '../assets/apik.png';
// // // // // import thickShake from '../assets/thickShake.png';

// // // // // const RestaurantList = () => {
// // // // //   const restaurants = [
// // // // //     { id: 1, name: "The Cheesecake Factory", img: cheesecakeFactoryImg, link: "/menu/cheesecake-factory" },
// // // // //     { id: 2, name: "Olive Garden", img: oliveGardenImg, link: "/menu/olive-garden" },
// // // // //     { id: 3, name: "Chipotle", img: chipotleImg, link: "/menu/chipotle" },
// // // // //     { id: 4, name: "Kefi", img: kefi, link: "/menu/kefi" }, //Corrected link
// // // // //     { id: 5, name: "Apik", img: apik, link: "/menu/apik" },   //Corrected link
// // // // //     { id: 6, name: "Thick Shake Factory", img: thickShake, link: "/menu/thickshakefactory" }, //Corrected link
// // // // //   ];

// // // // //   return (
// // // // //     <div className="container mx-auto p-4 bg-black">
// // // // //       <h2 className="text-2xl font-semibold mb-4">Select a Restaurant</h2>
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-black"> {/* 2 cols on medium screens, 3 on large */}
// // // // //         {restaurants.map((restaurant) => (
// // // // //           <div key={restaurant.id} className="border p-4 rounded-lg shadow-lg bg-black">
// // // // //             <img src={restaurant.img} alt={restaurant.name} className="w-full h-48 object-cover mb-2" />
// // // // //             <h3 className="text-xl font-semibold">{restaurant.name}</h3>
// // // // //             <div className="flex space-x-2">
// // // // //               <Link to={restaurant.link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
// // // // //                 View Menu
// // // // //               </Link>
// // // // //               {/* Placeholder buttons - replace with actual functionality */}
// // // // //               <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Add</button>
// // // // //               <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Delete</button>
// // // // //               <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Edit</button>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default RestaurantList;


// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid } from '@mui/material';
// // // // import cheesecakeFactoryImg from '../assets/cheeseCake.png';
// // // // import oliveGardenImg from '../assets/oliveGarden.png';
// // // // import chipotleImg from '../assets/chipotle.png';
// // // // import kefi from '../assets/kefi.png';
// // // // import apik from '../assets/apik.png';
// // // // import thickShake from '../assets/thickShake.png';

// // // // const RestaurantList = () => {
// // // //   const restaurants = [
// // // //     { id: 1, name: "The Cheesecake Factory", img: cheesecakeFactoryImg, link: "/menu/cheesecake-factory" },
// // // //     { id: 2, name: "Olive Garden", img: oliveGardenImg, link: "/menu/olive-garden" },
// // // //     { id: 3, name: "Chipotle", img: chipotleImg, link: "/menu/chipotle" },
// // // //     { id: 4, name: "Kefi", img: kefi, link: "/menu/kefi" },
// // // //     { id: 5, name: "Apik", img: apik, link: "/menu/apik" },
// // // //     { id: 6, name: "Thick Shake Factory", img: thickShake, link: "/menu/thickshakefactory" },
// // // //   ];

// // // //   return (
// // // //     <div style={{ padding: '16px', backgroundColor: '#121212' }}>
// // // //       <Typography variant="h4" gutterBottom align="center" style={{ color: '#ffffff' }}>
// // // //         Select a Restaurant
// // // //       </Typography>
// // // //       <Grid container spacing={4}>
// // // //         {restaurants.map((restaurant) => (
// // // //           <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
// // // //             <Card sx={{ maxWidth: 345, backgroundColor: '#1e1e1e', color: '#ffffff' }}>
// // // //               <CardMedia
// // // //                 component="img"
// // // //                 height="200"
// // // //                 image={restaurant.img}
// // // //                 alt={restaurant.name}
// // // //               />
// // // //               <CardContent>
// // // //                 <Typography gutterBottom variant="h5" component="div">
// // // //                   {restaurant.name}
// // // //                 </Typography>
// // // //               </CardContent>
// // // //               <CardActions>
// // // //                 <Button
// // // //                   size="small"
// // // //                   component={Link}
// // // //                   to={restaurant.link}
// // // //                   variant="contained"
// // // //                   color="primary"
// // // //                 >
// // // //                   View Menu
// // // //                 </Button>
// // // //                 <Button size="small" variant="outlined" color="secondary">
// // // //                   Add
// // // //                 </Button>
// // // //                 <Button size="small" variant="outlined" color="secondary">
// // // //                   Delete
// // // //                 </Button>
// // // //                 <Button size="small" variant="outlined" color="secondary">
// // // //                   Edit
// // // //                 </Button>
// // // //               </CardActions>
// // // //             </Card>
// // // //           </Grid>
// // // //         ))}
// // // //       </Grid>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default RestaurantList;



// // // // import React, { useState } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
// // // // import cheesecakeFactoryImg from '../assets/cheeseCake.png';
// // // // import oliveGardenImg from '../assets/oliveGarden.png';
// // // // import chipotleImg from '../assets/chipotle.png';
// // // // import kefi from '../assets/kefi.png';
// // // // import apik from '../assets/apik.png';
// // // // import thickShake from '../assets/thickShake.png';

// // // // const RestaurantList = () => {
// // // //   const [restaurants, setRestaurants] = useState([
// // // //     { id: 1, name: "The Cheesecake Factory", img: cheesecakeFactoryImg, link: "/menu/cheesecake-factory" },
// // // //     { id: 2, name: "Olive Garden", img: oliveGardenImg, link: "/menu/olive-garden" },
// // // //     { id: 3, name: "Chipotle", img: chipotleImg, link: "/menu/chipotle" },
// // // //     { id: 4, name: "Kefi", img: kefi, link: "/menu/kefi" },
// // // //     { id: 5, name: "Apik", img: apik, link: "/menu/apik" },
// // // //     { id: 6, name: "Thick Shake Factory", img: thickShake, link: "/menu/thickshakefactory" },
// // // //   ]);

// // // //   const [openDialog, setOpenDialog] = useState(false);
// // // //   const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
// // // //   const [currentRestaurant, setCurrentRestaurant] = useState(null);
// // // //   const [newRestaurant, setNewRestaurant] = useState({ name: '', img: '', link: '' });

// // // //   const handleDialogOpen = (mode, restaurant) => {
// // // //     setDialogMode(mode);
// // // //     if (mode === 'edit' && restaurant) {
// // // //       setCurrentRestaurant(restaurant);
// // // //       setNewRestaurant({ name: restaurant.name, img: restaurant.img, link: restaurant.link });
// // // //     } else {
// // // //       setCurrentRestaurant(null);
// // // //       setNewRestaurant({ name: '', img: '', link: '' });
// // // //     }
// // // //     setOpenDialog(true);
// // // //   };

// // // //   const handleDialogClose = () => {
// // // //     setOpenDialog(false);
// // // //   };

// // // //   const handleSaveRestaurant = () => {
// // // //     if (dialogMode === 'add') {
// // // //       const newRestaurantId = restaurants.length ? restaurants[restaurants.length - 1].id + 1 : 1;
// // // //       setRestaurants([
// // // //         ...restaurants,
// // // //         { id: newRestaurantId, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link },
// // // //       ]);
// // // //     } else if (dialogMode === 'edit' && currentRestaurant) {
// // // //       setRestaurants(
// // // //         restaurants.map((restaurant) =>
// // // //           restaurant.id === currentRestaurant.id
// // // //             ? { ...restaurant, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link }
// // // //             : restaurant
// // // //         )
// // // //       );
// // // //     }
// // // //     handleDialogClose();
// // // //   };

// // // //   const handleDeleteRestaurant = (restaurantId) => {
// // // //     setRestaurants(restaurants.filter((restaurant) => restaurant.id !== restaurantId));
// // // //   };

// // // //   return (
// // // //     <div style={{ padding: '16px', backgroundColor: '#121212' }}>
// // // //       <Typography variant="h4" gutterBottom align="center" style={{ color: '#ffffff' }}>
// // // //         Select a Restaurant
// // // //       </Typography>

// // // //       <Button
// // // //         variant="contained"
// // // //         color="primary"
// // // //         onClick={() => handleDialogOpen('add')}
// // // //         style={{ marginBottom: '20px' }}
// // // //       >
// // // //         Add Restaurant
// // // //       </Button>

// // // //       <Grid container spacing={4}>
// // // //         {restaurants.map((restaurant) => (
// // // //           <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
// // // //             <Card sx={{ maxWidth: 345, backgroundColor: '#1e1e1e', color: '#ffffff' }}>
// // // //               <CardMedia component="img" height="200" image={restaurant.img} alt={restaurant.name} />
// // // //               <CardContent>
// // // //                 <Typography gutterBottom variant="h5" component="div">
// // // //                   {restaurant.name}
// // // //                 </Typography>
// // // //               </CardContent>
// // // //               <CardActions>
// // // //                 <Button size="small" component={Link} to={restaurant.link} variant="contained" color="primary">
// // // //                   View Menu
// // // //                 </Button>
// // // //                 <Button size="small" variant="outlined" color="secondary" onClick={() => handleDeleteRestaurant(restaurant.id)}>
// // // //                   Delete
// // // //                 </Button>
// // // //                 <Button size="small" variant="outlined" color="secondary" onClick={() => handleDialogOpen('edit', restaurant)} >
// // // //                   Edit
// // // //                 </Button>
// // // //               </CardActions>
// // // //             </Card>
// // // //           </Grid>
// // // //         ))}
// // // //       </Grid>

// // // //       {/* Dialog for Add/Edit Restaurant */}
// // // //       <Dialog open={openDialog} onClose={handleDialogClose}>
// // // //         <DialogTitle>{dialogMode === 'add' ? 'Add Restaurant' : 'Edit Restaurant'}</DialogTitle>
// // // //         <DialogContent>
// // // //           <TextField
// // // //             label="Restaurant Name"
// // // //             fullWidth
// // // //             value={newRestaurant.name}
// // // //             onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
// // // //             style={{ marginBottom: '20px' }}
// // // //           />
// // // //           <TextField
// // // //             label="Image URL"
// // // //             fullWidth
// // // //             value={newRestaurant.img}
// // // //             onChange={(e) => setNewRestaurant({ ...newRestaurant, img: e.target.value })}
// // // //             style={{ marginBottom: '20px' }}
// // // //           />
// // // //           <TextField
// // // //             label="Menu Link"
// // // //             fullWidth
// // // //             value={newRestaurant.link}
// // // //             onChange={(e) => setNewRestaurant({ ...newRestaurant, link: e.target.value })}
// // // //           />
// // // //         </DialogContent>
// // // //         <DialogActions>
// // // //           <Button onClick={handleDialogClose} color="primary">
// // // //             Cancel
// // // //           </Button>
// // // //           <Button onClick={handleSaveRestaurant} color="primary">
// // // //             {dialogMode === 'add' ? 'Add Restaurant' : 'Save Changes'}
// // // //           </Button>
// // // //         </DialogActions>
// // // //       </Dialog>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default RestaurantList;


// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
// // // import cheesecakeFactoryImg from '../assets/cheeseCake.png';
// // // import oliveGardenImg from '../assets/oliveGarden.png';
// // // import chipotleImg from '../assets/chipotle.png';
// // // import kefi from '../assets/kefi.png';
// // // import apik from '../assets/apik.png';
// // // import thickShake from '../assets/thickShake.png';

// // // const RestaurantList = () => {
// // //   const [restaurants, setRestaurants] = useState([
// // //     { id: 1, name: "The Cheesecake Factory", img: cheesecakeFactoryImg, link: "/menu/cheesecake-factory" },
// // //     { id: 2, name: "Olive Garden", img: oliveGardenImg, link: "/menu/olive-garden" },
// // //     { id: 3, name: "Chipotle", img: chipotleImg, link: "/menu/chipotle" },
// // //     { id: 4, name: "Kefi", img: kefi, link: "/menu/kefi" },
// // //     { id: 5, name: "Apik", img: apik, link: "/menu/apik" },
// // //     { id: 6, name: "Thick Shake Factory", img: thickShake, link: "/menu/thickshakefactory" },
// // //   ]);

// // //   const [openDialog, setOpenDialog] = useState(false);
// // //   const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
// // //   const [currentRestaurant, setCurrentRestaurant] = useState(null);
// // //   const [newRestaurant, setNewRestaurant] = useState({ name: '', img: '', link: '' });

// // //   const handleDialogOpen = (mode, restaurant) => {
// // //     setDialogMode(mode);
// // //     if (mode === 'edit' && restaurant) {
// // //       setCurrentRestaurant(restaurant);
// // //       setNewRestaurant({ name: restaurant.name, img: restaurant.img, link: restaurant.link });
// // //     } else {
// // //       setCurrentRestaurant(null);
// // //       setNewRestaurant({ name: '', img: '', link: '' });
// // //     }
// // //     setOpenDialog(true);
// // //   };

// // //   const handleDialogClose = () => {
// // //     setOpenDialog(false);
// // //   };

// // //   const handleSaveRestaurant = () => {
// // //     if (dialogMode === 'add') {
// // //       const newRestaurantId = restaurants.length ? restaurants[restaurants.length - 1].id + 1 : 1;
// // //       setRestaurants([
// // //         ...restaurants,
// // //         { id: newRestaurantId, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link },
// // //       ]);
// // //     } else if (dialogMode === 'edit' && currentRestaurant) {
// // //       setRestaurants(
// // //         restaurants.map((restaurant) =>
// // //           restaurant.id === currentRestaurant.id
// // //             ? { ...restaurant, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link }
// // //             : restaurant
// // //         )
// // //       );
// // //     }
// // //     handleDialogClose();
// // //   };

// // //   const handleDeleteRestaurant = (restaurantId) => {
// // //     setRestaurants(restaurants.filter((restaurant) => restaurant.id !== restaurantId));
// // //   };

// // //   return (
// // //     <div style={{ padding: '16px', backgroundColor: '#121212' }}>
// // //       <Typography variant="h4" gutterBottom align="center" style={{ color: '#ffffff' }}>
// // //         Select a Restaurant
// // //       </Typography>

// // //       <Button
// // //         variant="contained"
// // //         color="primary"
// // //         onClick={() => handleDialogOpen('add')}
// // //         style={{ marginBottom: '20px' }}
// // //       >
// // //         Add Restaurant
// // //       </Button>

// // //       <Grid container spacing={4}>
// // //         {restaurants.map((restaurant) => (
// // //           <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
// // //             <Card sx={{ maxWidth: 345, backgroundColor: '#1e1e1e', color: '#ffffff' }}>
// // //               <CardMedia component="img" height="200" image={restaurant.img} alt={restaurant.name} />
// // //               <CardContent>
// // //                 <Typography gutterBottom variant="h5" component="div">
// // //                   {restaurant.name}
// // //                 </Typography>
// // //               </CardContent>
// // //               <CardActions>
// // //                 <Button size="small" component={Link} to={restaurant.link} variant="contained" color="primary">
// // //                   View Menu
// // //                 </Button>
// // //                 <Button size="small" variant="outlined" color="secondary" onClick={() => handleDeleteRestaurant(restaurant.id)}>
// // //                   Delete
// // //                 </Button>
// // //                 <Button size="small" variant="outlined" color="secondary" onClick={() => handleDialogOpen('edit', restaurant)} >
// // //                   Edit
// // //                 </Button>
// // //               </CardActions>
// // //             </Card>
// // //           </Grid>
// // //         ))}
// // //       </Grid>

// // //       {/* Dialog for Add/Edit Restaurant */}
// // //       <Dialog open={openDialog} onClose={handleDialogClose}>
// // //         <DialogTitle>{dialogMode === 'add' ? 'Add Restaurant' : 'Edit Restaurant'}</DialogTitle>
// // //         <DialogContent>
// // //           <TextField
// // //             label="Restaurant Name"
// // //             fullWidth
// // //             value={newRestaurant.name}
// // //             onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
// // //             style={{ marginBottom: '20px' }}
// // //           />
// // //           <TextField
// // //             label="Image URL"
// // //             fullWidth
// // //             value={newRestaurant.img}
// // //             onChange={(e) => setNewRestaurant({ ...newRestaurant, img: e.target.value })}
// // //             style={{ marginBottom: '20px' }}
// // //           />
// // //           <TextField
// // //             label="Menu Link"
// // //             fullWidth
// // //             value={newRestaurant.link}
// // //             onChange={(e) => setNewRestaurant({ ...newRestaurant, link: e.target.value })}
// // //           />
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleDialogClose} color="primary">
// // //             Cancel
// // //           </Button>
// // //           <Button onClick={handleSaveRestaurant} color="primary">
// // //             {dialogMode === 'add' ? 'Add Restaurant' : 'Save Changes'}
// // //           </Button>
// // //         </DialogActions>
// // //       </Dialog>
// // //     </div>
// // //   );
// // // };

// // // export default RestaurantList;



// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
// // import cheesecakeFactoryImg from '../assets/cheeseCake.png';
// // import oliveGardenImg from '../assets/oliveGarden.png';
// // import chipotleImg from '../assets/chipotle.png';
// // import kefi from '../assets/kefi.png';
// // import apik from '../assets/apik.png';
// // import thickShake from '../assets/thickShake.png';

// // const RestaurantList = () => {
// //   const [restaurants, setRestaurants] = useState(() => {
// //     // Get restaurants from localStorage or use default values
// //     const savedRestaurants = localStorage.getItem('restaurants');
// //     return savedRestaurants ? JSON.parse(savedRestaurants) : [
// //       { id: 1, name: "The Cheesecake Factory", img: cheesecakeFactoryImg, link: "/menu/cheesecake-factory" },
// //       { id: 2, name: "Olive Garden", img: oliveGardenImg, link: "/menu/olive-garden" },
// //       { id: 3, name: "Chipotle", img: chipotleImg, link: "/menu/chipotle" },
// //       { id: 4, name: "Kefi", img: kefi, link: "/menu/kefi" },
// //       { id: 5, name: "Apik", img: apik, link: "/menu/apik" },
// //       { id: 6, name: "Thick Shake Factory", img: thickShake, link: "/menu/thickshakefactory" },
// //     ];
// //   });

// //   const [openDialog, setOpenDialog] = useState(false);
// //   const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
// //   const [currentRestaurant, setCurrentRestaurant] = useState(null);
// //   const [newRestaurant, setNewRestaurant] = useState({ name: '', img: '', link: '' });

// //   useEffect(() => {
// //     // Save restaurants to localStorage whenever the list changes
// //     localStorage.setItem('restaurants', JSON.stringify(restaurants));
// //   }, [restaurants]);

// //   const handleDialogOpen = (mode, restaurant) => {
// //     setDialogMode(mode);
// //     if (mode === 'edit' && restaurant) {
// //       setCurrentRestaurant(restaurant);
// //       setNewRestaurant({ name: restaurant.name, img: restaurant.img, link: restaurant.link });
// //     } else {
// //       setCurrentRestaurant(null);
// //       setNewRestaurant({ name: '', img: '', link: '' });
// //     }
// //     setOpenDialog(true);
// //   };

// //   const handleDialogClose = () => {
// //     setOpenDialog(false);
// //   };

// //   const handleSaveRestaurant = () => {
// //     if (dialogMode === 'add') {
// //       const newRestaurantId = restaurants.length ? restaurants[restaurants.length - 1].id + 1 : 1;
// //       setRestaurants([
// //         ...restaurants,
// //         { id: newRestaurantId, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link },
// //       ]);
// //     } else if (dialogMode === 'edit' && currentRestaurant) {
// //       setRestaurants(
// //         restaurants.map((restaurant) =>
// //           restaurant.id === currentRestaurant.id
// //             ? { ...restaurant, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link }
// //             : restaurant
// //         )
// //       );
// //     }
// //     handleDialogClose();
// //   };

// //   const handleDeleteRestaurant = (restaurantId) => {
// //     setRestaurants(restaurants.filter((restaurant) => restaurant.id !== restaurantId));
// //   };

// //   return (
// //     <div style={{ padding: '16px', backgroundColor: '#121212' }}>
// //       <Typography variant="h4" gutterBottom align="center" style={{ color: '#ffffff' }}>
// //         Select a Restaurant
// //       </Typography>

// //       <Button
// //         variant="contained"
// //         color="primary"
// //         onClick={() => handleDialogOpen('add')}
// //         style={{ marginBottom: '20px' }}
// //       >
// //         Add Restaurant
// //       </Button>

// //       <Grid container spacing={4}>
// //         {restaurants.map((restaurant) => (
// //           <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
// //             <Card sx={{ maxWidth: 345, backgroundColor: '#1e1e1e', color: '#ffffff' }}>
// //               <CardMedia component="img" height="200" image={restaurant.img} alt={restaurant.name} />
// //               <CardContent>
// //                 <Typography gutterBottom variant="h5" component="div">
// //                   {restaurant.name}
// //                 </Typography>
// //               </CardContent>
// //               <CardActions>
// //                 <Button size="small" component={Link} to={restaurant.link} variant="contained" color="primary">
// //                   View Menu
// //                 </Button>
// //                 <Button size="small" variant="outlined" color="secondary" onClick={() => handleDeleteRestaurant(restaurant.id)}>
// //                   Delete
// //                 </Button>
// //                 <Button size="small" variant="outlined" color="secondary" onClick={() => handleDialogOpen('edit', restaurant)} >
// //                   Edit
// //                 </Button>
// //               </CardActions>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>

// //       {/* Dialog for Add/Edit Restaurant */}
// //       <Dialog open={openDialog} onClose={handleDialogClose}>
// //         <DialogTitle>{dialogMode === 'add' ? 'Add Restaurant' : 'Edit Restaurant'}</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             label="Restaurant Name"
// //             fullWidth
// //             value={newRestaurant.name}
// //             onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
// //             style={{ marginBottom: '20px' }}
// //           />
// //           <TextField
// //             label="Image URL"
// //             fullWidth
// //             value={newRestaurant.img}
// //             onChange={(e) => setNewRestaurant({ ...newRestaurant, img: e.target.value })}
// //             style={{ marginBottom: '20px' }}
// //           />
// //           <TextField
// //             label="Menu Link"
// //             fullWidth
// //             value={newRestaurant.link}
// //             onChange={(e) => setNewRestaurant({ ...newRestaurant, link: e.target.value })}
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleDialogClose} color="primary">
// //             Cancel
// //           </Button>
// //           <Button onClick={handleSaveRestaurant} color="primary">
// //             {dialogMode === 'add' ? 'Add Restaurant' : 'Save Changes'}
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // export default RestaurantList;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
// // import cheesecakeFactoryImg from '';
// // import oliveGardenImg from '../../public/assets/oliveGarden.png';
// // import chipotleImg from '../../public/assets/chipotle.png';
// // import kefi from '../../public/assets/kefi.png';
// // import apik from '../../public/assets/apik.png';
// // import thickShake from '../../public/assets/thickShake.png';

// const RestaurantList = () => {
//   const [restaurants, setRestaurants] = useState(() => {
//     // Get restaurants from localStorage or use default values
//     const savedRestaurants = localStorage.getItem('restaurants');
//     return savedRestaurants ? JSON.parse(savedRestaurants) : [
//       { id: 1, name: "The Cheesecake Factory", img: '/assets/cheeseCake.png', link: "/menu/cheesecake-factory" },
//       { id: 2, name: "Olive Garden", img: '/assets/oliveGarden.png', link: "/menu/olive-garden" },
//       { id: 3, name: "Chipotle", img: '/assets/chipotle.png', link: "/menu/chipotle" },
//       { id: 4, name: "Kefi", img: '/assets/kefi.png', link: "/menu/kefi" },
//       { id: 5, name: "Apik", img: '/assets/apik.png', link: "/menu/apik" },
//       { id: 6, name: "Thick Shake Factory", img: '/assets/thickShake.png', link: "/menu/thickshakefactory" },
//       // { id: 1, name: "The Cheesecake Factory", img: cheesecakeFactoryImg , link: "/menu/cheesecake-factory" },
//       // { id: 2, name: "Olive Garden", img: oliveGardenImg, link: "/menu/olive-garden" },
//       // { id: 3, name: "Chipotle", img: chipotleImg, link: "/menu/chipotle" },
//       // { id: 4, name: "Kefi", img: kefi , link: "/menu/kefi" },
//       // { id: 5, name: "Apik", img: apik, link: "/menu/apik" },
//       // { id: 6, name: "Thick Shake Factory", img: thickShake, link: "/menu/thickshakefactory" },
//     ];
//   });

//   const [openDialog, setOpenDialog] = useState(false);
//   const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
//   const [currentRestaurant, setCurrentRestaurant] = useState(null);
//   const [newRestaurant, setNewRestaurant] = useState({ name: '', img: '', link: '' });

//   useEffect(() => {
//     // Save restaurants to localStorage whenever the list changes
//     localStorage.setItem('restaurants', JSON.stringify(restaurants));
//   }, [restaurants]);

//   const isValidImage = (url) => {
//     return /\.(jpg|jpeg|png|gif|bmp)$/i.test(url); // Simple check for valid image URL
//   };

//   const handleDialogOpen = (mode, restaurant) => {
//     setDialogMode(mode);
//     if (mode === 'edit' && restaurant) {
//       setCurrentRestaurant(restaurant);
//       setNewRestaurant({ name: restaurant.name, img: restaurant.img, link: restaurant.link });
//     } else {
//       setCurrentRestaurant(null);
//       setNewRestaurant({ name: '', img: '', link: '' });
//     }
//     setOpenDialog(true);
//   };

//   const handleDialogClose = () => {
//     setOpenDialog(false);
//   };

//   const handleSaveRestaurant = () => {
//     if (!isValidImage(newRestaurant.img)) {
//       alert('Please enter a valid image URL.');
//       return;
//     }

//     if (dialogMode === 'add') {
//       const newRestaurantId = restaurants.length ? restaurants[restaurants.length - 1].id + 1 : 1;
//       setRestaurants([
//         ...restaurants,
//         { id: newRestaurantId, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link },
//       ]);
//     } else if (dialogMode === 'edit' && currentRestaurant) {
//       setRestaurants(
//         restaurants.map((restaurant) =>
//           restaurant.id === currentRestaurant.id
//             ? { ...restaurant, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link }
//             : restaurant
//         )
//       );
//     }
//     handleDialogClose();
//   };

//   // const handleSaveRestaurant = () => {
//   //   if (!isValidImage(newRestaurant.img)) {
//   //     alert('Please enter a valid image URL.');
//   //     return;
//   //   }

//   //   if (dialogMode === 'add') {
//   //     const newRestaurantId = restaurants.length ? restaurants[restaurants.length - 1].id + 1 : 1;
//   //     setRestaurants([
//   //       ...restaurants,
//   //       { id: newRestaurantId, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link },
//   //     ]);
//   //   } else if (dialogMode === 'edit' && currentRestaurant) {
//   //     setRestaurants(
//   //       restaurants.map((restaurant) =>
//   //         restaurant.id === currentRestaurant.id
//   //           ? { ...restaurant, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link }
//   //           : restaurant
//   //       )
//   //     );
//   //   }
//   //   handleDialogClose();
//   // };

//   const handleDeleteRestaurant = (restaurantId) => {
//     setRestaurants(restaurants.filter((restaurant) => restaurant.id !== restaurantId));
//   };

//   return (
//     <div style={{ padding: '16px', backgroundColor: '#121212' }}>
//       <Typography variant="h4" gutterBottom align="center" style={{ color: '#ffffff' }}>
//         Select a Restaurant
//       </Typography>

//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => handleDialogOpen('add')}
//         style={{ marginBottom: '20px' }}
//       >
//         Add Restaurant
//       </Button>

//       <Grid container spacing={4}>
//         {restaurants.map((restaurant) => (
//           <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
//             <Card sx={{ maxWidth: 345, backgroundColor: '#1e1e1e', color: '#ffffff' }}>
//               {/* <CardMedia component="img" height="200" image={restaurant.img} alt={restaurant.name} /> */}
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={restaurant.img ? `/assets/${restaurant.img}` : '/assets/default_image.png'}
//                 alt={restaurant.name}
//               />


//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {restaurant.name}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" component={Link} to={restaurant.link} variant="contained" color="primary">
//                   View Menu
//                 </Button>
//                 <Button size="small" variant="outlined" color="secondary" onClick={() => handleDeleteRestaurant(restaurant.id)}>
//                   Delete
//                 </Button>
//                 <Button size="small" variant="outlined" color="secondary" onClick={() => handleDialogOpen('edit', restaurant)}>
//                   Edit
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Dialog for Add/Edit Restaurant */}
//       <Dialog open={openDialog} onClose={handleDialogClose}>
//         <DialogTitle>{dialogMode === 'add' ? 'Add Restaurant' : 'Edit Restaurant'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Restaurant Name"
//             fullWidth
//             value={newRestaurant.name}
//             onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
//             style={{ marginBottom: '20px' }}
//           />
//           <TextField
//             label="Image URL"
//             fullWidth
//             value={newRestaurant.img}
//             onChange={(e) => setNewRestaurant({ ...newRestaurant, img: e.target.value })}
//             style={{ marginBottom: '20px' }}
//           />
//           <TextField
//             label="Menu Link"
//             fullWidth
//             value={newRestaurant.link}
//             onChange={(e) => setNewRestaurant({ ...newRestaurant, link: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDialogClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSaveRestaurant} color="primary">
//             {dialogMode === 'add' ? 'Add Restaurant' : 'Save Changes'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default RestaurantList;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState(() => {
    // Get restaurants from localStorage or use an empty array
    const savedRestaurants = localStorage.getItem('restaurants');
    return savedRestaurants ? JSON.parse(savedRestaurants) : [];
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const [newRestaurant, setNewRestaurant] = useState({ name: '', img: '', link: '' });

  useEffect(() => {
    // Save restaurants to localStorage whenever the list changes
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
  }, [restaurants]);

  const isValidImage = (url) => {
    return /\.(jpg|jpeg|png|gif|bmp)$/i.test(url); // Simple check for valid image URL
  };

  const handleDialogOpen = (mode, restaurant) => {
    setDialogMode(mode);
    if (mode === 'edit' && restaurant) {
      setCurrentRestaurant(restaurant);
      setNewRestaurant({ name: restaurant.name, img: restaurant.img, link: restaurant.link });
    } else {
      setCurrentRestaurant(null);
      setNewRestaurant({ name: '', img: '', link: '' });
    }
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSaveRestaurant = () => {
    if (!isValidImage(newRestaurant.img)) {
      alert('Please enter a valid image URL.');
      return;
    }

    if (dialogMode === 'add') {
      const newRestaurantId = restaurants.length ? restaurants[restaurants.length - 1].id + 1 : 1;
      setRestaurants([
        ...restaurants,
        { id: newRestaurantId, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link },
      ]);
    } else if (dialogMode === 'edit' && currentRestaurant) {
      setRestaurants(
        restaurants.map((restaurant) =>
          restaurant.id === currentRestaurant.id
            ? { ...restaurant, name: newRestaurant.name, img: newRestaurant.img, link: newRestaurant.link }
            : restaurant
        )
      );
    }
    handleDialogClose();
  };

  const handleDeleteRestaurant = (restaurantId) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== restaurantId));
  };

  return (
    <div style={{ padding: '16px', backgroundColor: '#121212' }}>
      <Typography variant="h4" gutterBottom align="center" style={{ color: '#ffffff' }}>
        Select a Restaurant
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleDialogOpen('add')}
        style={{ marginBottom: '20px' }}
      >
        Add Restaurant
      </Button>

      <Grid container spacing={4}>
        {restaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <Card sx={{ maxWidth: 345, backgroundColor: '#1e1e1e', color: '#ffffff' }}>
              {/* <CardMedia
                component="img"
                height="200"
                image={restaurant.img ? restaurant.img : '/assets/default_image.png'}
                alt={restaurant.name}
              /> */}
              <CardMedia
                component="img"
                height="200"
                image={restaurant.img ? `/assets/${restaurant.img}` : '/assets/default_image.png'}
                alt={restaurant.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {restaurant.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={restaurant.link} variant="contained" color="primary">
                  View Menu
                </Button>
                <Button size="small" variant="outlined" color="secondary" onClick={() => handleDeleteRestaurant(restaurant.id)}>
                  Delete
                </Button>
                <Button size="small" variant="outlined" color="secondary" onClick={() => handleDialogOpen('edit', restaurant)}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for Add/Edit Restaurant */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{dialogMode === 'add' ? 'Add Restaurant' : 'Edit Restaurant'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Restaurant Name"
            fullWidth
            value={newRestaurant.name}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Image URL"
            fullWidth
            value={newRestaurant.img}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, img: e.target.value })}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            label="Menu Link"
            fullWidth
            value={newRestaurant.link}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, link: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveRestaurant} color="primary">
            {dialogMode === 'add' ? 'Add Restaurant' : 'Save Changes'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RestaurantList;
