// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import homepage from '../assets/homepage.jpg';
// // // import { Button } from '@mui/material';
// // // import Footer from '../components/Footer';


// // // const Home = () => (
// // //   <div
// // //     style={{ backgroundImage: `url(${homepage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '69vh', }} >
// // //     <div className="absolute inset-0 bg-black opacity-50"></div>
// // //     <div className="flex flex-col items-center justify-center h-full text-center relative text-white">
// // //       <h1 className="text-4xl font-bold mb-6">"Good Food, Great Moments"</h1>
// // //       <div className="w-full flex justify-end pr-10">
// // //         <Link to="/restaurant-list">
// // //           <Button
// // //             sx={{
// // //               backgroundColor: 'green', color: 'white', padding: '16px 32px', borderRadius: '50px', fontSize: '1.5rem', fontWeight: 'bold',
// // //               '&:hover': {
// // //                 backgroundColor: 'darkgreen',
// // //                 transform: 'scale(1.05)',
// // //               },
// // //               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s ease',
// // //             }}
// // //           >
// // //             Order Now
// // //           </Button>
// // //         </Link>
// // //       </div>
// // //     </div>
// // //     <Footer />

// // //   </div>
// // // );

// // // export default Home;


// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { Button } from '@mui/material';
// // import Footer from '../components/Footer';

// // const Home = () => {
// //   const homepage = process.env.PUBLIC_URL + '/assets/homepage.jpg';  // Use this if the image is in the public folder

// //   return (
// //     <div
// //       style={{
// //         backgroundImage: `url(${homepage})`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         height: '69vh',
// //       }}
// //     >
// //       <div className="absolute inset-0 bg-black opacity-50"></div>
// //       <div className="flex flex-col items-center justify-center h-full text-center relative text-white">
// //         <h1 className="text-4xl font-bold mb-6">"Good Food, Great Moments"</h1>
// //         <div className="w-full flex justify-end pr-10">
// //           <Link to="/restaurant-list">
// //             <Button
// //               sx={{
// //                 backgroundColor: 'green',
// //                 color: 'white',
// //                 padding: '16px 32px',
// //                 borderRadius: '50px',
// //                 fontSize: '1.5rem',
// //                 fontWeight: 'bold',
// //                 '&:hover': {
// //                   backgroundColor: 'darkgreen',
// //                   transform: 'scale(1.05)',
// //                 },
// //                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
// //                 transition: 'all 0.3s ease',
// //               }}
// //             >
// //               Order Now
// //             </Button>
// //           </Link>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Home;



// // src/pages/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';
// import Footer from '../components/Footer';
// import { useCart } from '../CartContext';


// const Home = () => {
//     const homepage = process.env.PUBLIC_URL + '/assets/homepage.jpg';
//     const {user} = useCart();

//     return (
//         <div
//             style={{
//                 backgroundImage: `url(${homepage})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 height: '69vh',
//             }}
//         >
//             <div className="absolute inset-0 bg-black opacity-50"></div>
//             <div className="flex flex-col items-center justify-center h-full text-center relative text-white">
//                 <h1 className="text-4xl font-bold mb-6">"Good Food, Great Moments"</h1>
//                 <div className="w-full flex justify-end pr-10">
//                 {user ? <Link to="/restaurant-list">
//                         <Button
//                             sx={{
//                                 backgroundColor: 'green',
//                                 color: 'white',
//                                 padding: '16px 32px',
//                                 borderRadius: '50px',
//                                 fontSize: '1.5rem',
//                                 fontWeight: 'bold',
//                                 '&:hover': {
//                                     backgroundColor: 'darkgreen',
//                                     transform: 'scale(1.05)',
//                                 },
//                                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
//                                 transition: 'all 0.3s ease',
//                             }}
//                         >
//                             Order Now
//                         </Button>
//                     </Link> : null }
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Home;



//#######################

// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Footer from '../components/Footer';
import { useCart } from '../CartContext';


const Home = () => {
    const homepage = process.env.PUBLIC_URL + '/assets/homepage.jpg';
    const {user} = useCart();

    return (
        <div
            style={{ backgroundImage: `url(${homepage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '69vh', }} >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex flex-col items-center justify-center h-full text-center relative text-white">
                <h1 className="text-4xl font-bold mb-6">"Good Food, Great Moments"</h1>
                <div className="w-full flex justify-end pr-10">
                {user ? <Link to="/restaurant-list">
                        <Button
                            sx={{ backgroundColor: 'green', color: 'white', padding: '16px 32px', borderRadius: '50px', fontSize: '1.5rem', fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: 'darkgreen',
                                    transform: 'scale(1.05)',
                                },
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Order Now
                        </Button>
                    </Link> : null }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;