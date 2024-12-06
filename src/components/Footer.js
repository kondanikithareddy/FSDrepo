// // import React from 'react';
// // import { Container, Grid, Typography, Link, Box } from '@mui/material';

// // const Footer = () => {
// //   return (
// //     <Box sx={{ backgroundColor: '#121212', color: '#fff', padding: '20px 0' }}>
// //       <Container maxWidth="lg">
// //         <Grid container spacing={4} justifyContent="space-between">
// //           <Grid item xs={12} sm={4}>
// //             <Typography variant="h6" gutterBottom>
// //               About Us
// //             </Typography>
// //             <Typography variant="body2">
// //               We are a restaurant platform offering a wide range of menu items, available to add to your cart for a seamless dining experience.
// //             </Typography>
// //           </Grid>
          
// //           <Grid item xs={12} sm={4}>
// //             <Typography variant="h6" gutterBottom>
// //               Follow Us
// //             </Typography>
// //             <Box>
// //               <Link href="https://facebook.com" color="inherit" target="_blank" sx={{ marginRight: 2 }}>
// //                 Facebook
// //               </Link>
// //               <Link href="https://twitter.com" color="inherit" target="_blank" sx={{ marginRight: 2 }}>
// //                 Twitter
// //               </Link>
// //               <Link href="https://instagram.com" color="inherit" target="_blank">
// //                 Instagram
// //               </Link>
// //             </Box>
// //           </Grid>
// //         </Grid>

// //         <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
// //           <Typography variant="body2" color="inherit">
// //             &copy; {new Date().getFullYear()} Foodie Heaven. All rights reserved.
// //           </Typography>
// //         </Box>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default Footer;


// import React from 'react';
// import { Container, Grid, Typography, Link, Box } from '@mui/material';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <Box sx={{ backgroundColor: '#121212', color: '#fff', padding: '20px 0' }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4} justifyContent="space-between">
//           <Grid item xs={12} sm={4}>
//             <Typography variant="h6" gutterBottom>
//               About Us
//             </Typography>
//             <Typography variant="body2">
//               We are a restaurant platform offering a wide range of menu items, available to add to your cart for a seamless dining experience.
//             </Typography>
//           </Grid>
          
//           <Grid item xs={12} sm={4}>
//             <Typography variant="h6" gutterBottom>
//               Follow Us
//             </Typography>
//             <Box>
//               <Link href="https://facebook.com" color="inherit" target="_blank" sx={{ marginRight: 2, display: 'flex', alignItems: 'center' }}>
//                 <FaFacebookF style={{ marginRight: '8px' }} />
//                 Facebook
//               </Link>
//               <Link href="https://twitter.com" color="inherit" target="_blank" sx={{ marginRight: 2, display: 'flex', alignItems: 'center' }}>
//                 <FaTwitter style={{ marginRight: '8px' }} />
//                 Twitter
//               </Link>
//               <Link href="https://instagram.com" color="inherit" target="_blank" sx={{ display: 'flex', alignItems: 'center' }}>
//                 <FaInstagram style={{ marginRight: '8px' }} />
//                 Instagram
//               </Link>
//             </Box>
//           </Grid>
//         </Grid>

//         <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
//           <Typography variant="body2" color="inherit">
//             &copy; {new Date().getFullYear()} Foodie Heaven. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;



import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        color: '#fff',
        padding: '0px 0',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a restaurant platform offering a wide range of menu items, available to add to your cart for a seamless dining experience.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link href="https://facebook.com" color="inherit" target="_blank" sx={{ marginRight: 2, display: 'flex', alignItems: 'center' }}>
                <FaFacebookF style={{ marginRight: '8px' }} />
                Facebook
              </Link>
              <Link href="https://twitter.com" color="inherit" target="_blank" sx={{ marginRight: 2, display: 'flex', alignItems: 'center' }}>
                <FaTwitter style={{ marginRight: '8px' }} />
                Twitter
              </Link>
              <Link href="https://instagram.com" color="inherit" target="_blank" sx={{ display: 'flex', alignItems: 'center' }}>
                <FaInstagram style={{ marginRight: '8px' }} />
                Instagram
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Foodie Heaven. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
